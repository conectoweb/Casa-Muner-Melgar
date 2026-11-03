"use client";

import { useState } from "react";
import type { House } from "@/data/site-content";

const amenityTabs = [
  {
    id: "piscina",
    title: "Piscina Privada",
    icon: "🏊",
    summary: "Exclusiva de tu casa, disponible las 24 horas para tu grupo.",
    bullets: [
      "Uso 100% privado: no la compartes con nadie.",
      "Acceso libre las 24 horas del día con iluminación.",
      "Asoleadoras y senderos de piedra alrededor.",
      "Mantenimiento y cloración constante antes de tu check-in.",
      "Además, tienes acceso a la piscina grande del condominio El Ruby (a 30 m).",
    ],
  },
  {
    id: "bbq",
    title: "Zona de BBQ",
    icon: "🍖",
    summary: "Asador campestre para compartir almuerzos y asados en familia.",
    bullets: [
      "Asador amplio para carbón al aire libre.",
      "Mesa campestre y asientos junto a la zona verde.",
      "Cercanía directa con la cocina para mayor comodidad.",
      "Espacio ideal para cumpleaños, fines de semana y reuniones.",
    ],
  },
  {
    id: "habitaciones",
    title: "Habitaciones & Camas",
    icon: "🛏️",
    summary: "Espacios cómodos, frescos y ventilados para un descanso reparador.",
    bullets: [
      "Colchones cómodos y protectores higiénicos.",
      "Ventiladores en cada habitación para clima agradable.",
      "Armarios / estantes para organizar tu equipaje.",
      "Espacios iluminados naturalmente con vista a la vegetación.",
    ],
  },
  {
    id: "cocina",
    title: "Cocina Equipada",
    icon: "🍳",
    summary: "Prepara tus comidas con total libertad y ahorro.",
    bullets: [
      "Nevera con congelador para hielo y bebidas frías.",
      "Estufa a gas funcional y vajilla completa.",
      "Licuadora, ollas, sartenes, cubiertos y vasos.",
      "Barra americana o comedor integrado para compartir.",
    ],
  },
  {
    id: "condominio",
    title: "Condominio El Ruby",
    icon: "🛡️",
    summary: "Seguridad 24h, vías pavimentadas y entorno campestre de alta tranquilidad.",
    bullets: [
      "Portería con vigilancia privada las 24 horas.",
      "Parqueaderos privados gratuitos dentro de la propiedad.",
      "Canchas deportivas y senderos ecológicos internos.",
      "A solo 15 minutos en carro del centro comercial y restaurantes de Melgar.",
    ],
  },
];

export function HouseInteractiveAmenities({ house }: { house: House }) {
  const [activeTab, setActiveTab] = useState("piscina");
  const current = amenityTabs.find((t) => t.id === activeTab) || amenityTabs[0];

  return (
    <div className="interactive-amenities-card">
      <div className="interactive-amenities-header">
        <p className="eyebrow">Explora los espacios</p>
        <h3>Lo más destacado de {house.name}</h3>
        <p>Toca cada comodidad para conocer los detalles y beneficios de tu estadía:</p>
      </div>

      {/* Botones de pestañas */}
      <div className="interactive-amenities-tabs" role="tablist">
        {amenityTabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`interactive-amenity-btn ${isActive ? "interactive-amenity-btn--active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="interactive-amenity-icon" aria-hidden="true">
                {tab.icon}
              </span>
              <span>{tab.title}</span>
            </button>
          );
        })}
      </div>

      {/* Contenido de la pestaña activa */}
      <div className="interactive-amenity-pane">
        <div className="interactive-amenity-lead">
          <span className="interactive-amenity-badge-icon">{current.icon}</span>
          <div>
            <h4>{current.title}</h4>
            <p>{current.summary}</p>
          </div>
        </div>

        <ul className="interactive-amenity-list">
          {current.bullets.map((b, idx) => (
            <li key={idx}>
              <span className="check-bullet" aria-hidden="true">✓</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

