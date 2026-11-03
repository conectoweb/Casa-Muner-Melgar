export interface GuestRegistrationItem {
  orden: number;
  nombre: string;
  tipo_documento: string;
  documento: string;
  telefono: string;
  email: string;
}

export interface GuestRegistrationPayload {
  destino: string;
  grupoId: string;
  responsable: string;
  casa: string;
  mascotas: {
    tiene: boolean;
    tipo: string;
    cantidad: number;
  };
  fecha: string;
  fechaReserva: string;
  fechaSalida?: string;
  personas: GuestRegistrationItem[];
}

/**
 * Genera únicamente la tabla HTML con estilos en línea optimizados
 * para clientes de correo (Gmail, Outlook, Apple Mail, etc.).
 */
export function buildGuestTableHtml(personas: GuestRegistrationItem[]): string {
  // Asegurar que no haya filas vacías y que comience en 1
  const validPersonas = (personas || []).filter(
    (p) => Boolean(p.nombre) || Boolean(p.documento) || Boolean(p.tipo_documento),
  );

  const rowsHtml = validPersonas
    .map((p, index) => {
      const rowNum = index + 1;
      const isPet = p.tipo_documento === "MASCOTA";
      const isMinor = p.tipo_documento === "TI" || p.tipo_documento === "RC";
      const isAlt = index % 2 === 1;
      const bg = isAlt ? "#f8fbfa" : "#ffffff";

      let badgeHtml = `<span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:700;background-color:#e6f4ea;color:#137333;">${p.tipo_documento || "CC"}</span>`;
      if (isPet) {
        badgeHtml = `<span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:700;background-color:#fef3c7;color:#92400e;">🐾 Mascota</span>`;
      } else if (isMinor) {
        badgeHtml = `<span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:700;background-color:#e0f2fe;color:#0369a1;">${p.tipo_documento} (Menor)</span>`;
      }

      const telClean = (p.telefono || "").replace(/\D/g, "");
      const telHtml = p.telefono
        ? `<a href="https://wa.me/57${telClean}" style="color:#2f736e;text-decoration:none;font-weight:600;" target="_blank">${p.telefono}</a>`
        : `<span style="color:#9ca3af;font-size:12px;">—</span>`;

      const emailHtml = p.email
        ? `<a href="mailto:${p.email}" style="color:#2f736e;text-decoration:none;" target="_blank">${p.email}</a>`
        : `<span style="color:#9ca3af;font-size:12px;">—</span>`;

      const docDisplay = p.documento ? p.documento : isPet ? "Sin especificar" : "—";

      return `
        <tr style="background-color:${bg};border-bottom:1px solid #e5e7eb;">
          <td style="padding:10px 8px;text-align:center;font-weight:700;color:#2f736e;font-size:13px;">${rowNum}</td>
          <td style="padding:10px 12px;font-weight:600;color:#1f2937;font-size:13px;">${p.nombre || "—"}</td>
          <td style="padding:10px 8px;text-align:center;font-size:12px;">${badgeHtml}</td>
          <td style="padding:10px 12px;color:#374151;font-size:13px;font-family:monospace,Consolas,Courier;">${docDisplay}</td>
          <td style="padding:10px 12px;font-size:13px;">${telHtml}</td>
          <td style="padding:10px 12px;font-size:13px;">${emailHtml}</td>
        </tr>
      `;
    })
    .join("");

  return `
    <table cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;background-color:#ffffff;border:1px solid #d1d5db;border-radius:8px;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
      <thead>
        <tr style="background-color:#2f736e;color:#ffffff;text-align:left;">
          <th style="padding:11px 8px;text-align:center;font-size:11px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;color:#ffffff;">#</th>
          <th style="padding:11px 12px;font-size:11px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;color:#ffffff;">Nombre Completo</th>
          <th style="padding:11px 8px;text-align:center;font-size:11px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;color:#ffffff;">Tipo</th>
          <th style="padding:11px 12px;font-size:11px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;color:#ffffff;">Documento / Raza</th>
          <th style="padding:11px 12px;font-size:11px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;color:#ffffff;">Teléfono / WhatsApp</th>
          <th style="padding:11px 12px;font-size:11px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;color:#ffffff;">Correo Electrónico</th>
        </tr>
      </thead>
      <tbody>
        ${rowsHtml}
      </tbody>
    </table>
  `;
}

/**
 * Genera el correo HTML completo con diseño profesional,
 * paleta de marca Casa Muner Melgar (#2f736e), detalles y tabla sin filas en 0.
 */
export function buildRegistrationEmailHtml(data: GuestRegistrationPayload): string {
  const tableHtml = buildGuestTableHtml(data.personas);
  const totalHuespedes = (data.personas || []).filter(
    (p) => p.tipo_documento !== "MASCOTA",
  ).length;
  const totalMascotasEnTabla = (data.personas || []).filter(
    (p) => p.tipo_documento === "MASCOTA",
  ).length;

  let mascotasTexto = "No viaja con mascotas";
  if (data.mascotas?.tiene) {
    const cant = data.mascotas.cantidad || 1;
    mascotasTexto = `🐾 Sí (${cant} ${data.mascotas.tipo || "Mascota"}${cant > 1 ? "s" : ""})`;
  } else if (totalMascotasEnTabla > 0) {
    mascotasTexto = `🐾 Sí (${totalMascotasEnTabla} registrada${totalMascotasEnTabla > 1 ? "s" : ""} en lista)`;
  }

  // Buscar teléfono de contacto principal (responsable o primer adulto con teléfono)
  const primerContacto = data.personas.find((p) => Boolean(p.telefono));
  const telContacto = primerContacto ? primerContacto.telefono.replace(/\D/g, "") : "";

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nuevo registro de ingreso – Casa Muner Melgar</title>
</head>
<body style="margin:0;padding:0;background-color:#edf2f1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;color:#1f2937;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#edf2f1;padding:24px 12px;">
    <tr>
      <td align="center">
        <!-- Contenedor Principal -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:680px;background-color:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.06);border:1px solid #dce4e3;">
          
          <!-- Encabezado con marca Casa Muner Melgar -->
          <tr>
            <td style="background-color:#2f736e;padding:28px 24px;text-align:center;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center">
                    <div style="display:inline-block;background-color:#ffffff;color:#2f736e;font-size:22px;line-height:22px;padding:8px 12px;border-radius:8px;font-weight:900;margin-bottom:8px;">
                      🏡 CASA MUNER
                    </div>
                    <h1 style="margin:6px 0 0;font-size:20px;font-weight:700;color:#ffffff;letter-spacing:0.3px;">
                      Nuevo Registro de Ingreso
                    </h1>
                    <p style="margin:4px 0 0;font-size:13px;color:#e6f3f2;">
                      Melgar, Tolima • Condominio El Ruby • RNT 112000
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Resumen de la Reserva -->
          <tr>
            <td style="padding:24px 24px 16px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f6faf9;border-left:4px solid #2f736e;border-radius:8px;padding:16px 18px;">
                <tr>
                  <td>
                    <p style="margin:0 0 10px;font-size:12px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;color:#2f736e;">
                      📋 Información General de la Estadía
                    </p>
                    <table width="100%" cellpadding="4" cellspacing="0" border="0" style="font-size:14px;color:#374151;">
                      <tr>
                        <td style="font-weight:700;color:#1f2937;width:210px;vertical-align:top;">Persona que hace la reserva:</td>
                        <td style="color:#111827;font-weight:600;">${data.responsable || "No especificada"}</td>
                      </tr>
                      <tr>
                        <td style="font-weight:700;color:#1f2937;vertical-align:top;">Alojamiento asignado:</td>
                        <td>
                          <span style="display:inline-block;padding:2px 8px;border-radius:6px;background-color:#2f736e;color:#ffffff;font-size:12px;font-weight:700;">
                            ${data.casa || "Casa Muner Melgar"}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td style="font-weight:700;color:#1f2937;vertical-align:top;">Fecha de llegada / reserva:</td>
                        <td style="font-weight:600;color:#111827;">${data.fechaReserva}</td>
                      </tr>
                      ${
                        data.fechaSalida
                          ? `<tr>
                        <td style="font-weight:700;color:#1f2937;vertical-align:top;">Fecha de salida / check-out:</td>
                        <td style="font-weight:600;color:#111827;">${data.fechaSalida}</td>
                      </tr>`
                          : ""
                      }
                      <tr>
                        <td style="font-weight:700;color:#1f2937;vertical-align:top;">Código / Grupo:</td>
                        <td style="font-family:monospace,Consolas,Courier;color:#4b5563;">${data.grupoId}</td>
                      </tr>
                      <tr>
                        <td style="font-weight:700;color:#1f2937;vertical-align:top;">Mascotas:</td>
                        <td>${mascotasTexto}</td>
                      </tr>
                      <tr>
                        <td style="font-weight:700;color:#1f2937;vertical-align:top;">Fecha y hora de registro:</td>
                        <td style="color:#6b7280;font-size:13px;">${data.fecha}</td>
                      </tr>
                      <tr>
                        <td style="font-weight:700;color:#1f2937;vertical-align:top;">Total de personas registradas:</td>
                        <td style="font-weight:700;color:#2f736e;">${totalHuespedes} huéspedes${totalMascotasEnTabla > 0 ? ` + ${totalMascotasEnTabla} mascota(s)` : ""}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Sección: Tabla de Huéspedes Registrados -->
          <tr>
            <td style="padding:8px 24px 20px;">
              <h2 style="margin:0 0 10px;font-size:16px;font-weight:700;color:#1f2937;display:flex;align-items:center;">
                👥 Listado de Huéspedes y Registro Oficial
              </h2>
              <p style="margin:0 0 14px;font-size:13px;color:#4b5563;">
                A continuación se detallan las personas autorizadas para el ingreso y estadía en la propiedad:
              </p>
              
              <!-- TABLA CON ESTILOS -->
              ${tableHtml}
            </td>
          </tr>

          <!-- Acciones Rápidas -->
          ${
            telContacto
              ? `
          <tr>
            <td style="padding:0 24px 24px;" align="center">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="background-color:#25d366;border-radius:8px;padding:12px 20px;">
                    <a href="https://wa.me/57${telContacto}" target="_blank" style="color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;display:inline-block;">
                      💬 Escribir al responsable por WhatsApp (+57 ${telContacto})
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          `
              : ""
          }

          <!-- Pie de Página Institucional -->
          <tr>
            <td style="background-color:#f6faf9;border-top:1px solid #dce4e3;padding:20px 24px;text-align:center;">
              <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#2f736e;">
                Casa Muner Melgar
              </p>
              <p style="margin:0 0 6px;font-size:12px;color:#6b7280;line-height:1.5;">
                CONDOMINIO CAMPESTRE EL RUBY COUNTRY CLUB CASA D2, KM 5 VIA DE MELGAR A CARMEN DE APICALA<br />
                Melgar, Tolima, Colombia
              </p>
              <p style="margin:0;font-size:12px;color:#9ca3af;">
                Correo: <a href="mailto:cuentas@muner.com.co" style="color:#2f736e;text-decoration:none;">cuentas@muner.com.co</a> • Tel / WhatsApp: <a href="tel:+573145973094" style="color:#2f736e;text-decoration:none;">+57 314 597 3094</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Versión en texto plano para clientes de correo sin soporte HTML
 */
export function buildRegistrationPlainText(data: GuestRegistrationPayload): string {
  const lineasPersonas = data.personas.map((p, idx) => {
    return `${idx + 1}. ${p.nombre || "—"} | ${p.tipo_documento} | Doc: ${p.documento || "—"} | Tel: ${p.telefono || "—"} | Email: ${p.email || "—"}`;
  });

  return `
NUEVO REGISTRO DE INGRESO - CASA MUNER MELGAR
=============================================

Grupo: ${data.grupoId}
Persona que hace la reserva: ${data.responsable}
Alojamiento: ${data.casa}
Fecha de la reserva / llegada: ${data.fechaReserva}${data.fechaSalida ? `\nFecha de salida: ${data.fechaSalida}` : ""}
Fecha y hora de registro: ${data.fecha}
Mascotas: ${data.mascotas?.tiene ? `Sí (${data.mascotas.cantidad} ${data.mascotas.tipo})` : "No"}

PERSONAS REGISTRADAS (${data.personas.length}):
---------------------------------------------
${lineasPersonas.join("\n")}

Ubicación: Condominio Campestre El Ruby Country Club Casa D2, Km 5 Vía Melgar - Carmen de Apicalá
Contacto: cuentas@muner.com.co | +57 314 597 3094
  `.trim();
}

