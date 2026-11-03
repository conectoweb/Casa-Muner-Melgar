"use client";

import { useId, useState } from "react";
import { siteConfig } from "@/data/site-content";

export type TipoDocumento = "CC" | "CE" | "PASAPORTE" | "TI" | "RC" | "MASCOTA" | "";

export type PersonaItem = {
  _id: string;
  tipo_documento: TipoDocumento;
  nombre: string;
  documento: string;
  telefono: string;
  email: string;
};

function normEmail(v?: string): string {
  return (v || "").toString().trim().toLowerCase();
}

function normTel(v?: string): string {
  return (v || "").toString().replace(/[^\d]/g, "");
}

function cleanText(v?: string): string {
  return (v || "").toString().trim().replace(/\s+/g, " ");
}

function esConContacto(tipo: TipoDocumento): boolean {
  return tipo === "CC" || tipo === "CE" || tipo === "PASAPORTE";
}

function esSinContacto(tipo: TipoDocumento): boolean {
  return tipo === "TI" || tipo === "RC" || tipo === "MASCOTA";
}

function esMascota(tipo: TipoDocumento): boolean {
  return tipo === "MASCOTA";
}

let guestCounter = 0;

function createEmptyPersona(): PersonaItem {
  guestCounter += 1;
  return {
    _id: `guest_${guestCounter}`,
    tipo_documento: "",
    nombre: "",
    documento: "",
    telefono: "",
    email: "",
  };
}

export type PetInfo = {
  tiene: boolean;
  tipo: string;
  cantidad: number;
};

export function GuestRegistrationForm() {
  const formUid = useId();
  const [responsable, setResponsable] = useState("");
  const [fechaReserva, setFechaReserva] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [casa, setCasa] = useState("Casa Grande (hasta 20 personas)");
  const [personas, setPersonas] = useState<PersonaItem[]>([createEmptyPersona()]);
  const [isSaving, setIsSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  // Mascotas
  const [viajaConMascotas, setViajaConMascotas] = useState<"no" | "si">("no");
  const [tipoMascota, setTipoMascota] = useState<"perro" | "gato" | "otro">("perro");
  const [otraMascotaDetalle, setOtraMascotaDetalle] = useState("");
  const [cantidadMascotas, setCantidadMascotas] = useState(1);

  // Modales
  const [showSingleModal, setShowSingleModal] = useState(false);
  const [pendingSavePayload, setPendingSavePayload] = useState<{
    rowsToSave: PersonaItem[];
    responsable: string;
    fechaReserva: string;
    fechaSalida?: string;
    casa: string;
    mascotas: PetInfo;
  } | null>(null);

  const [successData, setSuccessData] = useState<{
    count: number;
    responsable: string;
    fechaReserva: string;
    fechaSalida?: string;
    casa: string;
    personas: PersonaItem[];
    mascotas: PetInfo;
  } | null>(null);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Agregar persona
  function handleAgregar() {
    setPersonas((prev) => [...prev, createEmptyPersona()]);
    setStatusMsg(`Personas en la lista: ${personas.length + 1}`);
  }

  // Eliminar persona
  function handleEliminar(id: string) {
    if (personas.length <= 1) return;
    setPersonas((prev) => prev.filter((p) => p._id !== id));
    setStatusMsg(`Persona eliminada. Total: ${personas.length - 1}`);
  }

  // Actualizar campo de persona
  function updatePersona(id: string, patch: Partial<PersonaItem>) {
    setPersonas((prev) =>
      prev.map((p) => {
        if (p._id !== id) return p;
        const updated = { ...p, ...patch };

        // Si cambia a documento sin contacto, limpiar teléfono y email
        if (patch.tipo_documento && esSinContacto(patch.tipo_documento)) {
          updated.telefono = "";
          updated.email = "";
        }
        return updated;
      }),
    );
  }

  // Validaciones en tiempo real para duplicados
  function getDuplicates() {
    const docCounts: Record<string, number> = {};
    const telCounts: Record<string, number> = {};
    const emailCounts: Record<string, number> = {};

    personas.forEach((p) => {
      const doc = (p.documento || "").trim();
      const tel = normTel(p.telefono);
      const email = normEmail(p.email);

      // No marcar duplicado de documento para mascotas
      if (doc && p.tipo_documento !== "MASCOTA") {
        docCounts[doc] = (docCounts[doc] || 0) + 1;
      }
      if (esConContacto(p.tipo_documento) && tel) {
        telCounts[tel] = (telCounts[tel] || 0) + 1;
      }
      if (esConContacto(p.tipo_documento) && email) {
        emailCounts[email] = (emailCounts[email] || 0) + 1;
      }
    });

    return { docCounts, telCounts, emailCounts };
  }

  const { docCounts, telCounts, emailCounts } = getDuplicates();

  // Enviar a la API
  async function enviarRegistro(
    rowsToSave: PersonaItem[],
    resp: string,
    fecha: string,
    fechaOut: string,
    casaSel: string,
    mascotasData: PetInfo,
  ) {
    setIsSaving(true);
    setStatusMsg("Guardando y validando registro...");

    try {
      const grupoId = Date.now().toString();
      const res = await fetch("/api/registro-ingreso", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          grupoId,
          responsable: resp,
          fechaReserva: fecha,
          fechaSalida: fechaOut || undefined,
          casa: casaSel,
          personas: rowsToSave,
          mascotas: mascotasData,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Error al procesar el registro.");
      }

      setSuccessData({
        count: rowsToSave.length,
        responsable: resp,
        fechaReserva: fecha,
        fechaSalida: fechaOut,
        casa: casaSel,
        personas: rowsToSave,
        mascotas: mascotasData,
      });

      // Resetear estado del formulario
      setResponsable("");
      setFechaReserva("");
      setFechaSalida("");
      setPersonas([createEmptyPersona()]);
      setViajaConMascotas("no");
      setTipoMascota("perro");
      setOtraMascotaDetalle("");
      setCantidadMascotas(1);
      setStatusMsg("");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Error al guardar el registro.";
      setErrorMessage(message);
    } finally {
      setIsSaving(false);
    }
  }

  // Validar y ejecutar guardado
  async function handleSubmit(e?: React.FormEvent) {
    if (e) e.preventDefault();
    if (isSaving) return;

    try {
      const resp = cleanText(responsable || "Ingreso Manual");
      if (!fechaReserva) {
        throw new Error("Debes seleccionar la fecha de ingreso o reserva.");
      }

      // Validación de mascotas
      if (viajaConMascotas === "si") {
        if (tipoMascota === "otro" && !cleanText(otraMascotaDetalle)) {
          throw new Error("Por favor especifica qué tipo de mascota te acompaña (ej. conejo, loro, ave).");
        }
        if (cantidadMascotas < 1) {
          throw new Error("La cantidad de mascotas debe ser al menos 1.");
        }
      }

      const mascotasPayload: PetInfo = {
        tiene: viajaConMascotas === "si",
        tipo:
          viajaConMascotas === "si"
            ? tipoMascota === "otro"
              ? cleanText(otraMascotaDetalle) || "Otro"
              : tipoMascota === "perro"
              ? "Perro"
              : "Gato"
            : "Ninguna",
        cantidad: viajaConMascotas === "si" ? Math.max(1, cantidadMascotas) : 0,
      };

      const normalizadas = personas.map((p) => {
        const tipo = p.tipo_documento;
        const nombre = cleanText(p.nombre);
        const doc = (p.documento || "").trim();
        const tel = normTel(p.telefono);
        const email = normEmail(p.email);
        const isBlank = !tipo && !nombre && !doc && !tel && !email;
        return {
          ...p,
          tipo_documento: tipo,
          nombre,
          documento: doc,
          telefono: tel,
          email,
          isBlank,
        };
      });

      const rowsToSave = normalizadas.filter((p) => !p.isBlank);
      if (rowsToSave.length === 0) {
        throw new Error("Agrega al menos una persona para el registro.");
      }

      // Validaciones individuales
      rowsToSave.forEach((p, i) => {
        const idx = i + 1;
        const isPet = p.tipo_documento === "MASCOTA";
        if (!p.tipo_documento) {
          throw new Error(`Fila ${idx}: selecciona el tipo de documento o registro.`);
        }
        if (!p.nombre) {
          throw new Error(isPet ? `Mascota ${idx}: ingresa el nombre de la mascota.` : `Persona ${idx}: ingresa el nombre completo.`);
        }
        if (!p.documento) {
          throw new Error(isPet ? `Mascota ${idx}: ingresa la raza o especie de la mascota.` : `Persona ${idx}: ingresa el número de documento.`);
        }

        if (esConContacto(p.tipo_documento)) {
          if (!p.telefono) {
            throw new Error(`Persona ${idx}: teléfono requerido (${p.tipo_documento}).`);
          }
          if (!p.email) {
            throw new Error(`Persona ${idx}: correo electrónico requerido (${p.tipo_documento}).`);
          }
        }
      });

      // Validaciones de duplicados entre personas (excluyendo mascotas)
      for (let i = 0; i < rowsToSave.length; i++) {
        for (let j = i + 1; j < rowsToSave.length; j++) {
          const a = rowsToSave[i];
          const b = rowsToSave[j];

          if (a.tipo_documento !== "MASCOTA" && b.tipo_documento !== "MASCOTA" && a.documento === b.documento) {
            throw new Error(`Documento repetido entre Huésped ${i + 1} y Huésped ${j + 1}.`);
          }

          if (esConContacto(a.tipo_documento) && esConContacto(b.tipo_documento)) {
            if (a.telefono === b.telefono) {
              throw new Error(`Teléfono repetido entre Persona ${i + 1} y Persona ${j + 1}.`);
            }
            if (a.email === b.email) {
              throw new Error(`Correo repetido entre Persona ${i + 1} y Persona ${j + 1}.`);
            }
          }
        }
      }

      const n = rowsToSave.length;

      // Si es exactamente 1 persona, confirmación especial
      if (n === 1) {
        setPendingSavePayload({
          rowsToSave,
          responsable: resp,
          fechaReserva,
          fechaSalida,
          casa,
          mascotas: mascotasPayload,
        });
        setShowSingleModal(true);
        return;
      }

      // Guardar normal para 2 o más personas
      await enviarRegistro(rowsToSave, resp, fechaReserva, fechaSalida, casa, mascotasPayload);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Por favor verifica los datos ingresados.";
      setErrorMessage(message);
    }
  }

  // Confirmar guardado de 1 persona
  async function confirmarGuardadoSingle() {
    setShowSingleModal(false);
    if (!pendingSavePayload) return;
    const { rowsToSave, responsable: resp, fechaReserva: f, fechaSalida: fs, casa: c, mascotas: m } = pendingSavePayload;
    setPendingSavePayload(null);
    await enviarRegistro(rowsToSave, resp, f, fs || "", c, m);
  }

  // Generar enlace WhatsApp con la lista
  function getWhatsAppShareUrl(data: typeof successData) {
    if (!data) return siteConfig.links.whatsapp;
    let text = `*REGISTRO DE INGRESO - CASA MUNER MELGAR*\n`;
    text += `🏡 *Alojamiento:* ${data.casa}\n`;
    text += `📅 *Fecha de Ingreso:* ${data.fechaReserva}\n`;
    if (data.fechaSalida) {
      text += `🛫 *Fecha de Salida:* ${data.fechaSalida}\n`;
    }
    text += `👤 *Responsable:* ${data.responsable}\n`;
    text += `👥 *Total Personas Registradas:* ${data.personas.length}\n`;
    if (data.mascotas?.tiene) {
      text += `🐾 *Mascotas:* Sí (${data.mascotas.cantidad} ${data.mascotas.tipo})\n`;
    } else {
      text += `🐾 *Mascotas:* No viajan con mascotas\n`;
    }
    text += `\n*LISTADO DE PERSONAS:*\n`;

    data.personas.forEach((p, idx) => {
      if (p.tipo_documento === "MASCOTA") {
        text += `${idx + 1}. 🐾 ${p.nombre} (Mascota - ${p.documento})\n`;
      } else {
        text += `${idx + 1}. ${p.nombre} - ${p.tipo_documento} ${p.documento}`;
        if (p.telefono) text += ` | Tel: ${p.telefono}`;
        text += `\n`;
      }
    });

    text += `\n_Registro enviado desde muner.com.co_`;
    return `https://api.whatsapp.com/send?phone=573145973094&text=${encodeURIComponent(text)}`;
  }

  return (
    <div className="registration-wrapper">
      {/* Aviso Importante de Portería y Horarios */}
      <div className="registration-notice-card">
        <div className="registration-notice-icon" aria-hidden="true">
          📋
        </div>
        <div>
          <h3>Requisito de Ingreso al Condominio El Ruby Country Club</h3>
          <p>
            Por disposición de la administración y la portería con vigilancia 24h, es{" "}
            <strong>estrictamente obligatorio</strong> registrar los nombres completos y documentos de
            todas las personas antes de ingresar.
          </p>
          <p className="registration-notice-sub">
            ⏰ El listado debe enviarse a más tardar a las <strong>9:00 p. m.</strong> del día de ingreso.
            Personas no registradas no podrán acceder al condominio.
          </p>
        </div>
      </div>

      <form className="registration-form" onSubmit={handleSubmit} noValidate>
        {/* Paso 1: Datos de la Reserva */}
        <div className="registration-step-card">
          <div className="registration-step-header">
            <span className="registration-step-num">1</span>
            <div>
              <h2>Datos de la Reserva</h2>
              <p>Indica el titular de la reserva y la fecha de ingreso a la casa.</p>
            </div>
          </div>

          <div className="registration-fields-grid">
            <div className="registration-field">
              <label htmlFor={`${formUid}-responsable`}>
                Nombre del Responsable / Titular de la Reserva <span className="req">*</span>
              </label>
              <input
                id={`${formUid}-responsable`}
                type="text"
                placeholder="Ej. Carlos Andrés Pérez"
                value={responsable}
                onChange={(e) => setResponsable(e.target.value)}
                required
              />
            </div>

            <div className="registration-field">
              <label htmlFor={`${formUid}-fecha`}>
                Fecha de Ingreso / Reserva <span className="req">*</span>
              </label>
              <input
                id={`${formUid}-fecha`}
                type="date"
                value={fechaReserva}
                onChange={(e) => {
                  setFechaReserva(e.target.value);
                  if (fechaSalida && e.target.value > fechaSalida) {
                    setFechaSalida("");
                  }
                }}
                required
              />
            </div>

            <div className="registration-field">
              <label htmlFor={`${formUid}-fecha-salida`}>
                Fecha de Salida (Check-out)
              </label>
              <input
                id={`${formUid}-fecha-salida`}
                type="date"
                min={fechaReserva || undefined}
                value={fechaSalida}
                onChange={(e) => setFechaSalida(e.target.value)}
              />
            </div>

            <div className="registration-field registration-field--full">
              <label htmlFor={`${formUid}-casa`}>Casa Reservada</label>
              <select
                id={`${formUid}-casa`}
                value={casa}
                onChange={(e) => setCasa(e.target.value)}
              >
                <option value="Casa Grande (hasta 20 personas)">
                  Casa Grande · Capacidad hasta 20 personas (5 hab / 3 baños)
                </option>
                <option value="Casa Pequeña (hasta 6 personas)">
                  Casa Pequeña · Capacidad hasta 6 personas (2 hab / 1 baño)
                </option>
                <option value="Ambas Casas (hasta 26 personas)">
                  Ambas Casas · Capacidad hasta 26 personas
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* Paso 2: Listado de Personas */}
        <div className="registration-step-card">
          <div className="registration-step-header registration-step-header--between">
            <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
              <span className="registration-step-num">2</span>
              <div>
                <h2>Personas que Ingresarán</h2>
                <p>Registra a cada uno de los huéspedes y acompañantes.</p>
              </div>
            </div>
            <div className="registration-counter-badge">
              {personas.length} {personas.length === 1 ? "persona" : "personas"} en lista
            </div>
          </div>

          <div className="registration-persons-list">
            {personas.map((persona, index) => {
              const personaN = index + 1;
              const isPet = esMascota(persona.tipo_documento);
              const isChild = !isPet && esSinContacto(persona.tipo_documento);
              const isAdult = esConContacto(persona.tipo_documento);

              const doc = (persona.documento || "").trim();
              const tel = normTel(persona.telefono);
              const email = normEmail(persona.email);

              const hasDocDuplicated = !isPet && doc && (docCounts[doc] || 0) > 1;
              const hasTelDuplicated = isAdult && tel && (telCounts[tel] || 0) > 1;
              const hasEmailDuplicated = isAdult && email && (emailCounts[email] || 0) > 1;

              return (
                <div key={persona._id} className="registration-person-item">
                  <div className="registration-person-top">
                    <div className="registration-person-title">
                      <span className="registration-person-tag">
                        {isPet ? `🐾 Mascota ${personaN}` : `Persona ${personaN}`}
                      </span>
                      {index === 0 && <span className="registration-person-tag--lead">Titular</span>}
                      {isChild && <span className="registration-badge--child">Menor de edad</span>}
                      {isAdult && <span className="registration-badge--adult">Adulto</span>}
                      {isPet && <span className="registration-badge--pet">🐾 Mascota</span>}
                    </div>

                    {personas.length > 1 && (
                      <button
                        type="button"
                        className="registration-btn-delete"
                        onClick={() => handleEliminar(persona._id)}
                        title={`Eliminar Persona ${personaN}`}
                      >
                        <span aria-hidden="true">✕</span> Eliminar
                      </button>
                    )}
                  </div>

                  <div className="registration-person-grid">
                    {/* Tipo de Documento */}
                    <div className="registration-field">
                      <label htmlFor={`${formUid}-tipo-${persona._id}`}>
                        Tipo de Documento <span className="req">*</span>
                      </label>
                      <select
                        id={`${formUid}-tipo-${persona._id}`}
                        value={persona.tipo_documento}
                        onChange={(e) =>
                          updatePersona(persona._id, {
                            tipo_documento: e.target.value as TipoDocumento,
                          })
                        }
                        required
                      >
                        <option value="">-- Seleccionar --</option>
                        <option value="CC">Cédula de Ciudadanía (CC)</option>
                        <option value="CE">Cédula de Extranjería (CE)</option>
                        <option value="PASAPORTE">Pasaporte</option>
                        <option value="TI">Tarjeta de Identidad (TI) - Menor</option>
                        <option value="RC">Registro Civil (RC) - Menor</option>
                        <option value="MASCOTA">🐾 Mascota (Perro / Gato / Otro)</option>
                      </select>
                    </div>

                    {/* Nombre Completo */}
                    <div className="registration-field">
                      <label htmlFor={`${formUid}-nom-${persona._id}`}>
                        {isPet ? "Nombre de la Mascota" : "Nombre Completo"} <span className="req">*</span>
                      </label>
                      <input
                        id={`${formUid}-nom-${persona._id}`}
                        type="text"
                        placeholder={isPet ? "Ej. Toby, Luna, Bigotes" : "Nombres y Apellidos"}
                        value={persona.nombre}
                        onChange={(e) =>
                          updatePersona(persona._id, { nombre: e.target.value })
                        }
                        required
                      />
                    </div>

                    {/* Número de Documento */}
                    <div className="registration-field">
                      <label htmlFor={`${formUid}-doc-${persona._id}`}>
                        {isPet ? "Raza / Especie (o Placa/Chip)" : "Número de Documento"}{" "}
                        <span className="req">*</span>
                      </label>
                      <input
                        id={`${formUid}-doc-${persona._id}`}
                        type="text"
                        placeholder={
                          isPet
                            ? "Ej. Perro Golden Retriever / Gato Criollo"
                            : "Ej. 1023456789"
                        }
                        value={persona.documento}
                        className={hasDocDuplicated ? "input-error" : ""}
                        onChange={(e) =>
                          updatePersona(persona._id, { documento: e.target.value.trim() })
                        }
                        required
                      />
                      {hasDocDuplicated && (
                        <p className="field-error-text">⚠️ Documento repetido en la lista.</p>
                      )}
                    </div>

                    {/* Campos de Contacto (solo Adultos) */}
                    {isAdult && (
                      <>
                        <div className="registration-field">
                          <label htmlFor={`${formUid}-tel-${persona._id}`}>
                            Teléfono de Contacto (WhatsApp) <span className="req">*</span>
                          </label>
                          <input
                            id={`${formUid}-tel-${persona._id}`}
                            type="tel"
                            placeholder="Ej. 3145973094"
                            value={persona.telefono}
                            className={hasTelDuplicated ? "input-error" : ""}
                            onChange={(e) =>
                              updatePersona(persona._id, {
                                telefono: normTel(e.target.value),
                              })
                            }
                            required
                          />
                          {hasTelDuplicated && (
                            <p className="field-error-text">⚠️ Teléfono repetido.</p>
                          )}
                        </div>

                        <div className="registration-field">
                          <label htmlFor={`${formUid}-email-${persona._id}`}>
                            Correo Electrónico <span className="req">*</span>
                          </label>
                          <input
                            id={`${formUid}-email-${persona._id}`}
                            type="email"
                            placeholder="correo@ejemplo.com"
                            value={persona.email}
                            className={hasEmailDuplicated ? "input-error" : ""}
                            onChange={(e) =>
                              updatePersona(persona._id, {
                                email: normEmail(e.target.value),
                              })
                            }
                            required
                          />
                          {hasEmailDuplicated && (
                            <p className="field-error-text">⚠️ Correo repetido.</p>
                          )}
                        </div>
                      </>
                    )}

                    {/* Mensaje amigable para menores */}
                    {isChild && (
                      <div className="registration-field registration-field--full">
                        <div className="registration-child-notice">
                          ℹ️ Al tratarse de un menor de edad ({persona.tipo_documento}), no se solicitan datos de teléfono ni correo electrónico.
                        </div>
                      </div>
                    )}

                    {/* Mensaje amigable para mascotas */}
                    {isPet && (
                      <div className="registration-field registration-field--full">
                        <div className="registration-pet-notice-item">
                          🐾 Registro de mascota: no requiere teléfono ni correo. Recuerda que debe portar collar/correa al transitar por áreas comunes de El Ruby.
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Botón para agregar persona */}
          <button
            type="button"
            className="registration-btn-add"
            onClick={handleAgregar}
          >
            <span aria-hidden="true" style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
              +
            </span>{" "}
            Agregar otra persona / acompañante
          </button>
        </div>

        {/* Paso 3: Registro de Mascotas */}
        <div className="registration-step-card">
          <div className="registration-step-header">
            <span className="registration-step-num">3</span>
            <div>
              <h2>Información de Mascotas (Pet Friendly 🐾)</h2>
              <p>Indica si tu grupo viajará acompañado de mascotas al condominio.</p>
            </div>
          </div>

          <div className="registration-grid">
            <div className="registration-field registration-field--full">
              <label>¿Viajas con mascota(s)? <span className="req">*</span></label>
              <div className="registration-pet-toggle">
                <button
                  type="button"
                  className={`registration-pet-opt ${viajaConMascotas === "no" ? "registration-pet-opt--active" : ""}`}
                  onClick={() => setViajaConMascotas("no")}
                >
                  ❌ No viajo con mascotas
                </button>
                <button
                  type="button"
                  className={`registration-pet-opt ${viajaConMascotas === "si" ? "registration-pet-opt--active" : ""}`}
                  onClick={() => setViajaConMascotas("si")}
                >
                  🐾 Sí, viajo con mascota(s)
                </button>
              </div>
            </div>

            {viajaConMascotas === "si" && (
              <>
                <div className="registration-field">
                  <label htmlFor={`${formUid}-tipo-mascota`}>
                    ¿Qué tipo de mascota es? <span className="req">*</span>
                  </label>
                  <select
                    id={`${formUid}-tipo-mascota`}
                    value={tipoMascota}
                    onChange={(e) => setTipoMascota(e.target.value as "perro" | "gato" | "otro")}
                  >
                    <option value="perro">🐶 Perro</option>
                    <option value="gato">🐱 Gato</option>
                    <option value="otro">🐾 Otro (especificar)</option>
                  </select>
                </div>

                {tipoMascota === "otro" && (
                  <div className="registration-field">
                    <label htmlFor={`${formUid}-otra-mascota`}>
                      Especifica el tipo de mascota <span className="req">*</span>
                    </label>
                    <input
                      id={`${formUid}-otra-mascota`}
                      type="text"
                      placeholder="Ej. Loro, Conejo, Hurón"
                      value={otraMascotaDetalle}
                      onChange={(e) => setOtraMascotaDetalle(e.target.value)}
                      required
                    />
                  </div>
                )}

                <div className="registration-field">
                  <label htmlFor={`${formUid}-cant-mascotas`}>
                    Cantidad de mascotas <span className="req">*</span>
                  </label>
                  <input
                    id={`${formUid}-cant-mascotas`}
                    type="number"
                    min={1}
                    max={10}
                    value={cantidadMascotas}
                    onChange={(e) =>
                      setCantidadMascotas(Math.max(1, parseInt(e.target.value, 10) || 1))
                    }
                    required
                  />
                </div>

                <div className="registration-field registration-field--full">
                  <div className="registration-pet-rules">
                    <strong>🐾 Normas de Convivencia para Mascotas en El Ruby Country Club:</strong>
                    <ul>
                      <li>Las mascotas deben portar siempre correa o pechera al transitar por áreas comunes y senderos.</li>
                      <li>Es obligatorio recoger de inmediato sus necesidades en bolsa plástica y depositarlas en la caneca.</li>
                      <li>Por higiene de todos los huéspedes, <em>no está permitido bañar ni ingresar mascotas a las piscinas</em>.</li>
                      <li>Contar con carnet de vacunación vigente ante requerimientos de administración o portería.</li>
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Barra de Guardado y Estado */}
        <div className="registration-footer-card">
          {statusMsg && <p className="registration-status-text">{statusMsg}</p>}

          <div className="registration-footer-actions">
            <button
              type="submit"
              className="button button-primary registration-btn-submit"
              disabled={isSaving}
            >
              {isSaving
                ? "Guardando registro..."
                : `Guardar Registro (${personas.length} ${personas.length === 1 ? "persona" : "personas"}${
                    viajaConMascotas === "si" ? ` + ${cantidadMascotas} mascota${cantidadMascotas > 1 ? "s" : ""}` : ""
                  })`}
            </button>
          </div>
        </div>
      </form>

      {/* ================= MODAL: 1 PERSONA CONFIRMACIÓN ================= */}
      {showSingleModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-card">
            <div className="modal-header">
              <span className="modal-icon" aria-hidden="true">
                🤔
              </span>
              <h3>Confirmación de Registro</h3>
            </div>
            <p className="modal-body-text">
              Se registró <strong>1 persona</strong> para ingresar a Casa Muner Melgar.
            </p>
            <p className="modal-body-text" style={{ color: "#4a6764" }}>
              Nuestras casas son quintas campestres con piscinas privadas diseñadas para descanso en
              familia o en grupo. <strong>¿Seguro que vas a viajar solo o deseas agregar a tus acompañantes?</strong>
            </p>
            <div className="modal-actions">
              <button
                type="button"
                className="button button-primary"
                onClick={() => {
                  setShowSingleModal(false);
                  handleAgregar();
                }}
              >
                + Volver y agregar acompañantes
              </button>
              <button
                type="button"
                className="button button-light"
                onClick={confirmarGuardadoSingle}
                disabled={isSaving}
              >
                Sí, viajo solo (Guardar 1 persona)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL: ÉXITO ================= */}
      {successData && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-card modal-card--success">
            <div className="modal-header">
              <span className="modal-icon modal-icon--success" aria-hidden="true">
                ✅
              </span>
              <h3>¡Registro Exitoso!</h3>
            </div>
            <p className="modal-body-text">
              Quedaron registradas satisfactoriamente <strong>{successData.count} personas</strong> para ingresar a Casa Muner Melgar.
            </p>

            <div className="modal-summary-box">
              <p>
                <strong>Responsable:</strong> {successData.responsable}
              </p>
              <p>
                <strong>Fecha de Ingreso:</strong> {successData.fechaReserva}
              </p>
              {successData.fechaSalida && (
                <p>
                  <strong>Fecha de Salida:</strong> {successData.fechaSalida}
                </p>
              )}
              <p>
                <strong>Alojamiento:</strong> {successData.casa}
              </p>
              <p>
                <strong>Huéspedes registrados:</strong> {successData.count}
              </p>
              <p>
                <strong>Mascotas:</strong>{" "}
                {successData.mascotas?.tiene
                  ? `Sí (${successData.mascotas.cantidad} ${successData.mascotas.tipo})`
                  : "No"}
              </p>
            </div>

            <div className="modal-actions" style={{ flexDirection: "column" }}>
              <a
                className="button button-primary"
                href={getWhatsAppShareUrl(successData)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textAlign: "center" }}
              >
                Enviar copia por WhatsApp a la anfitriona ↗
              </a>
              <button
                type="button"
                className="button button-light"
                onClick={() => setSuccessData(null)}
              >
                Cerrar y finalizar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL: ERROR ================= */}
      {errorMessage && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-card modal-card--error">
            <div className="modal-header">
              <span className="modal-icon modal-icon--error" aria-hidden="true">
                ⚠️
              </span>
              <h3>Revisa los datos del formulario</h3>
            </div>
            <p className="modal-body-text">{errorMessage}</p>
            <div className="modal-actions">
              <button
                type="button"
                className="button button-primary"
                onClick={() => setErrorMessage(null)}
              >
                Entendido, voy a corregir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
