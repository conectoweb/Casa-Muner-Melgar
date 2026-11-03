"use client";

import { useId, useState } from "react";
import type { House } from "@/data/site-content";

export function HouseBookingWidget({ house }: { house: House }) {
  const uid = useId();
  const [fechaLlegada, setFechaLlegada] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [personas, setPersonas] = useState(Math.min(6, house.maxGuests));
  const [mascotas, setMascotas] = useState(0);
  const [ninosMenores3, setNinosMenores3] = useState(0);

  const airbnbTarget = house.airbnbUrl;

  function generateWhatsAppUrl() {
    let msg = `Hola Myriam, me gustaría cotizar *${house.name}* en Casa Muner Melgar:\n\n`;
    if (fechaLlegada) msg += `📅 *Fecha de llegada:* ${fechaLlegada}\n`;
    if (fechaSalida) msg += `🛫 *Fecha de salida:* ${fechaSalida}\n`;
    msg += `👥 *Número de personas:* ${personas} (máx. permitido: ${house.maxGuests})\n`;
    msg += `🐾 *Número de mascotas:* ${mascotas}\n`;
    msg += `👶 *Niños de menos de 3 años:* ${ninosMenores3}\n\n`;
    msg += `¿Podrías confirmarme disponibilidad y tarifa para estas fechas? ¡Muchas gracias!`;

    return `https://api.whatsapp.com/send?phone=573145973094&text=${encodeURIComponent(msg)}`;
  }

  return (
    <aside className="house-booking-widget" aria-labelledby={`${uid}-widget-title`}>
      <div className="house-booking-widget-header">
        <span className="house-booking-badge">Cotizador Rápido de Estadía</span>
        <h3 id={`${uid}-widget-title`}>Cotiza tu viaje en {house.name}</h3>
        <p>Indica los datos de tu grupo para consultar disponibilidad y precio con nuestra anfitriona:</p>
      </div>

      <div className="cotizador-grid">
        {/* 1. Fecha de llegada */}
        <div className="cotizador-field">
          <label htmlFor={`${uid}-fecha-llegada`}>
            📅 Fecha de llegada: <span className="cotizador-req">*</span>
          </label>
          <input
            id={`${uid}-fecha-llegada`}
            type="date"
            value={fechaLlegada}
            onChange={(e) => {
              setFechaLlegada(e.target.value);
              // Si la salida es anterior a la nueva llegada, resetear o ajustar
              if (fechaSalida && e.target.value > fechaSalida) {
                setFechaSalida("");
              }
            }}
            className="cotizador-input"
          />
          <span className="cotizador-hint">Elige la fecha estimada de llegada.</span>
        </div>

        {/* 2. Fecha de salida */}
        <div className="cotizador-field">
          <label htmlFor={`${uid}-fecha-salida`}>
            🛫 Fecha de salida: <span className="cotizador-req">*</span>
          </label>
          <input
            id={`${uid}-fecha-salida`}
            type="date"
            value={fechaSalida}
            min={fechaLlegada || undefined}
            onChange={(e) => setFechaSalida(e.target.value)}
            className="cotizador-input"
          />
          <span className="cotizador-hint">Elige la fecha estimada de salida.</span>
        </div>

        {/* 3. Número de personas */}
        <div className="cotizador-field">
          <label htmlFor={`${uid}-personas`}>
            👥 Número de personas: <strong>{personas} {personas === 1 ? "persona" : "personas"}</strong>
          </label>
          <div className="cotizador-stepper">
            <button
              type="button"
              className="cotizador-stepper-btn"
              onClick={() => setPersonas((p) => Math.max(1, p - 1))}
              disabled={personas <= 1}
              aria-label="Restar una persona"
            >
              −
            </button>
            <span className="cotizador-stepper-val" id={`${uid}-personas`}>
              {personas}
            </span>
            <button
              type="button"
              className="cotizador-stepper-btn"
              onClick={() => setPersonas((p) => Math.min(house.maxGuests, p + 1))}
              disabled={personas >= house.maxGuests}
              aria-label="Sumar una persona"
            >
              +
            </button>
          </div>
          <span className="cotizador-hint">
            Capacidad: hasta {house.maxGuests} personas.
          </span>
        </div>

        {/* 4. Número de mascotas */}
        <div className="cotizador-field">
          <label htmlFor={`${uid}-mascotas`}>
            🐾 Número de mascotas: <strong>{mascotas} {mascotas === 1 ? "mascota" : "mascotas"}</strong>
          </label>
          <div className="cotizador-stepper">
            <button
              type="button"
              className="cotizador-stepper-btn"
              onClick={() => setMascotas((m) => Math.max(0, m - 1))}
              disabled={mascotas <= 0}
              aria-label="Restar una mascota"
            >
              −
            </button>
            <span className="cotizador-stepper-val" id={`${uid}-mascotas`}>
              {mascotas}
            </span>
            <button
              type="button"
              className="cotizador-stepper-btn"
              onClick={() => setMascotas((m) => Math.min(10, m + 1))}
              disabled={mascotas >= 10}
              aria-label="Sumar una mascota"
            >
              +
            </button>
          </div>
          <span className="cotizador-hint">
            {mascotas === 0 ? "Sin mascotas." : `${mascotas} mascota(s).`}
          </span>
        </div>

        {/* 5. Niños de menos de 3 años */}
        <div className="cotizador-field">
          <label htmlFor={`${uid}-ninos`}>
            👶 Niños de menos de 3 años: <strong>{ninosMenores3} {ninosMenores3 === 1 ? "niño" : "niños"}</strong>
          </label>
          <div className="cotizador-stepper">
            <button
              type="button"
              className="cotizador-stepper-btn"
              onClick={() => setNinosMenores3((n) => Math.max(0, n - 1))}
              disabled={ninosMenores3 <= 0}
              aria-label="Restar un niño menor de 3 años"
            >
              −
            </button>
            <span className="cotizador-stepper-val" id={`${uid}-ninos`}>
              {ninosMenores3}
            </span>
            <button
              type="button"
              className="cotizador-stepper-btn"
              onClick={() => setNinosMenores3((n) => Math.min(10, n + 1))}
              disabled={ninosMenores3 >= 10}
              aria-label="Sumar un niño menor de 3 años"
            >
              +
            </button>
          </div>
          <span className="cotizador-hint">
            Bebés e infantes menores de 3 años.
          </span>
        </div>
      </div>

      <div className="house-booking-actions">
        <a
          className="button button-primary house-booking-cta"
          href={generateWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Cotizar por WhatsApp con estos datos 💬
        </a>

        <a
          className="button button-airbnb"
          href={airbnbTarget}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver en Airbnb ↗
        </a>
      </div>

      <div className="house-booking-perks">
        <span>✓ Sin comisiones ocultas</span>
        <span>✓ Piscina privada 24 horas</span>
        <span>✓ Condominio Pet Friendly</span>
        <span>✓ Parqueadero privado gratis</span>
      </div>
    </aside>
  );
}
