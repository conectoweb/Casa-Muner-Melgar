import { NextResponse } from "next/server";
import {
  buildRegistrationEmailHtml,
  buildGuestTableHtml,
  buildRegistrationPlainText,
  type GuestRegistrationPayload,
  type GuestRegistrationItem,
} from "@/lib/registration-email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { responsable, fechaReserva, fechaSalida, personas, grupoId, casa, mascotas } = body;

    if (
      !responsable ||
      !fechaReserva ||
      !Array.isArray(personas) ||
      personas.length === 0
    ) {
      return NextResponse.json(
        { error: "Faltan datos obligatorios para completar el registro." },
        { status: 400 },
      );
    }

    const now = new Date();

    // Filtrar personas vacías y garantizar que el orden inicie en 1 sin fila en 0
    const rawList = Array.isArray(personas) ? personas : [];
    const validPersonas: GuestRegistrationItem[] = rawList
      .filter((p) => {
        if (!p || typeof p !== "object") return false;
        const nombre = String(p.nombre || "").trim();
        const doc = String(p.documento || "").trim();
        const tipo = String(p.tipo_documento || "").trim();
        return nombre !== "" || doc !== "" || tipo !== "";
      })
      .map((p, index) => ({
        orden: index + 1,
        nombre: String(p.nombre || "").trim(),
        tipo_documento: String(p.tipo_documento || "").trim(),
        documento: String(p.documento || "").trim(),
        telefono: p.telefono ? String(p.telefono).trim() : "",
        email: p.email ? String(p.email).trim().toLowerCase() : "",
      }));

    if (validPersonas.length === 0) {
      return NextResponse.json(
        { error: "Debes registrar al menos una persona o mascota válida." },
        { status: 400 },
      );
    }

    const idGrupo = String(grupoId || Date.now());
    const respStr = String(responsable).trim();
    const casaStr = casa ? String(casa).trim() : "Casa Muner Melgar";

    const payload: GuestRegistrationPayload = {
      destino: "cuentas@muner.com.co",
      grupoId: idGrupo,
      responsable: respStr,
      casa: casaStr,
      mascotas: mascotas
        ? {
            tiene: Boolean(mascotas.tiene),
            tipo: String(mascotas.tipo || "Ninguna").trim(),
            cantidad: Number(mascotas.cantidad) || 0,
          }
        : { tiene: false, tipo: "Ninguna", cantidad: 0 },
      fecha: now.toLocaleString("es-CO", {
        timeZone: "America/Bogota",
        dateStyle: "medium",
        timeStyle: "short",
      }),
      fechaReserva: String(fechaReserva),
      fechaSalida: fechaSalida ? String(fechaSalida) : undefined,
      personas: validPersonas,
    };

    const asunto = `Nuevo registro de ingreso – Grupo ${payload.grupoId} Responsable ${payload.responsable}`;
    const emailHtml = buildRegistrationEmailHtml(payload);
    const tableHtml = buildGuestTableHtml(payload.personas);
    const emailPlainText = buildRegistrationPlainText(payload);

    // 1. Envío directo mediante Resend si está configurado en las variables de entorno
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const fromEmail = process.env.EMAIL_FROM || "Casa Muner Melgar <onboarding@resend.dev>";
        const toEmail = process.env.EMAIL_TO || "cuentas@muner.com.co";

        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [toEmail],
            subject: asunto,
            html: emailHtml,
            text: emailPlainText,
          }),
        });
      } catch (emailError) {
        console.error("Error al enviar correo por Resend:", emailError);
      }
    }

    // 2. Envío a Webhook externo (Zapier, Make, Google Sheets, Wix backend, etc.)
    const webhookUrl = process.env.REGISTRO_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...payload,
            asunto,
            subject: asunto,
            html: emailHtml,
            emailHtml,
            htmlTable: tableHtml,
            tablaHtml: tableHtml,
            text: emailPlainText,
            mensajeTexto: emailPlainText,
          }),
        });
      } catch (webhookError) {
        console.error("Error al despachar el webhook de registro:", webhookError);
      }
    }

    console.log(
      `[Registro de Ingreso] Registradas ${payload.personas.length} personas para ${payload.responsable} (${payload.fechaReserva})`,
    );

    return NextResponse.json({
      success: true,
      count: payload.personas.length,
      grupoId: payload.grupoId,
      asunto,
      payload,
    });
  } catch (error) {
    console.error("Error al procesar el registro de ingreso:", error);
    return NextResponse.json(
      { error: "Error en el servidor al guardar el registro." },
      { status: 500 },
    );
  }
}
