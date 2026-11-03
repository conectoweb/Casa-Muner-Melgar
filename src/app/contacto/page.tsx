import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { SocialIcons } from "@/components/social-icons";
import { houses, siteConfig } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Contacto y Reservas en Melgar | Casa Muner Melgar",
  description:
    "Reserva tu estadía en Casa Muner Melgar mediante nuestro perfil oficial de Airbnb o contáctanos por WhatsApp. Ubicados en Condominio Campestre El Ruby Country Club, Melgar, Tolima.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto y Reservas en Melgar | Casa Muner Melgar",
    description:
      "Reserva en Casa Muner Melgar a través de Airbnb o directamente por WhatsApp. Ubicación en el Condominio Campestre El Ruby Country Club Casa D2, Melgar, Tolima.",
    url: "/contacto",
    type: "website",
  },
};

export default function ContactoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contacto y Reservas - Casa Muner Melgar",
    url: "https://www.muner.com.co/contacto",
    description:
      "Canales de contacto y reservas oficiales de Casa Muner Melgar.",
    mainEntity: {
      "@type": "LodgingBusiness",
      name: siteConfig.fullName,
      telephone: siteConfig.phone,
      url: "https://www.muner.com.co",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Condominio Campestre El Ruby Country Club, Casa D2, Km 5 vía de Melgar a Carmen de Apicalá",
        addressLocality: "Melgar",
        addressRegion: "Tolima",
        addressCountry: "CO",
      },
      sameAs: [
        siteConfig.links.airbnb,
        siteConfig.links.whatsapp,
        siteConfig.links.instagram,
        siteConfig.links.tiktok,
        siteConfig.links.facebook,
      ],
    },
  };

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Contacto y Reservas", href: "/contacto" },
        ]}
      />

      {/* Hero de Contacto */}
      <section className="page-hero section-wrap" aria-labelledby="contact-heading">
        <div className="page-hero-copy">
          <p className="eyebrow">Contacto y Reservas Oficiales</p>
          <h1 id="contact-heading">Contáctanos y Reserva tu Estadía en Melgar</h1>
          <p className="page-hero-description">
            Reserva con total tranquilidad a través de nuestro perfil oficial en{" "}
            <strong>Airbnb</strong> con pagos seguros y garantías, o comunícate directamente con
            nuestra anfitriona <strong>Myriam Pineda</strong> para resolver cualquier duda.
          </p>
        </div>
      </section>

      {/* Canales Principales de Reserva */}
      <section
        className="section-wrap content-section"
        aria-labelledby="channels-heading"
      >
        <div className="section-heading">
          <p className="eyebrow">Elige cómo reservar</p>
          <h2 id="channels-heading">Canales de Reserva y Atención</h2>
          <p>
            Selecciona la opción que te brinde mayor comodidad y seguridad para tu viaje.
          </p>
        </div>

        <div className="contact-cards-grid">
          {/* Card Principal: Airbnb */}
          <article className="contact-card contact-card--featured">
            <div className="contact-card-badge">Opción recomendada</div>
            <div className="contact-card-header">
              <span className="contact-card-icon contact-card-icon--airbnb" aria-hidden="true">
                <svg
                  width="32" height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12.001 18.275c-1.353-1.697-2.148-3.184-2.413-4.457-.263-1.027-.16-1.848.291-2.465.477-.71 1.188-1.056 2.121-1.056s1.643.345 2.12 1.063c.446.61.558 1.432.286 2.465-.291 1.298-1.085 2.785-2.412 4.458zm9.601 1.14c-.185 1.246-1.034 2.28-2.2 2.783-2.253.98-4.483-.583-6.392-2.704 3.157-3.951 3.74-7.028 2.385-9.018-.795-1.14-1.933-1.695-3.394-1.695-2.944 0-4.563 2.49-3.927 5.382.37 1.565 1.352 3.343 2.917 5.332-.98 1.085-1.91 1.856-2.732 2.333-.636.344-1.245.558-1.828.609-2.679.399-4.778-2.2-3.825-4.88.132-.345.395-.98.845-1.961l.025-.053c1.464-3.178 3.242-6.79 5.285-10.795l.053-.132.58-1.116c.45-.822.635-1.19 1.351-1.643.346-.21.77-.315 1.246-.315.954 0 1.698.558 2.016 1.007.158.239.345.557.582.953l.558 1.089.08.159c2.041 4.004 3.821 7.608 5.279 10.794l.026.025.533 1.22.318.764c.243.613.294 1.222.213 1.858zm1.22-2.39c-.186-.583-.505-1.271-.9-2.094v-.03c-1.889-4.006-3.642-7.608-5.307-10.844l-.111-.163C15.317 1.461 14.468 0 12.001 0c-2.44 0-3.476 1.695-4.535 3.898l-.081.16c-1.669 3.236-3.421 6.843-5.303 10.847v.053l-.559 1.22c-.21.504-.317.768-.345.847C-.172 20.74 2.611 24 5.98 24c.027 0 .132 0 .265-.027h.372c1.75-.213 3.554-1.325 5.384-3.317c1.829 1.989 3.635 3.104 5.382 3.317h.372c.133.027.239.027.265.027c3.37.003 6.152-3.261 4.802-6.975z" />
                </svg>
              </span>
              <div>
                <h3 className="contact-card-title">Perfil Oficial en Airbnb</h3>
                <p className="contact-card-subtitle">Reserva con protección de Airbnb</p>
              </div>
            </div>
            <p className="contact-card-text">
              Realiza tu reserva con la plataforma oficial de Airbnb: pagos protegidos con tarjeta de crédito,
              garantía para huéspedes y políticas transparentes para tu viaje a Melgar.
            </p>
            <ul className="contact-card-features">
              <li>✓ Confirmación de disponibilidad en línea</li>
              <li>✓ Métodos de pago seguros internacionales y locales</li>
              <li>✓ Políticas de cancelación y asistencia Airbnb</li>
            </ul>
            <div className="contact-card-actions-airbnb-compact">
              <a
                className="button-airbnb"
                href={siteConfig.links.airbnbCasaGrande}
                target="_blank"
                rel="noopener noreferrer"
              >
                Casa Grande ↗
              </a>
              <a
                className="button-airbnb"
                href={siteConfig.links.airbnbCasaPequena}
                target="_blank"
                rel="noopener noreferrer"
              >
                Casa Pequeña ↗
              </a>
            </div>
          </article>

          {/* Card: WhatsApp */}
          <article className="contact-card">
            <div className="contact-card-header">
              <span className="contact-card-icon contact-card-icon--whatsapp" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.78.465 3.518 1.35 5.053L2 22l5.084-1.332a9.98 9.98 0 0 0 4.947 1.3h.004c5.535 0 10.031-4.496 10.031-10.031 0-2.678-1.043-5.197-2.937-7.091A10 10 0 0 0 12.031 2zm0 18.337h-.003a8.3 8.3 0 0 1-4.237-1.157l-.304-.18-3.146.825.84-3.067-.198-.315a8.29 8.29 0 0 1-1.272-4.412c0-4.588 3.733-8.322 8.324-8.322 2.223 0 4.313.866 5.885 2.438a8.27 8.27 0 0 1 2.435 5.884c0 4.588-3.733 8.322-8.324 8.322zm4.56-6.223c-.25-.125-1.479-.73-1.708-.813-.23-.083-.396-.125-.563.125-.167.25-.646.813-.792.98-.146.166-.292.187-.542.062s-1.055-.389-2.01-1.24c-.743-.663-1.245-1.482-1.391-1.732-.146-.25-.016-.385.11-.51.112-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.166.042-.312-.02-.437-.063-.125-.563-1.354-.771-1.854-.203-.487-.41-.421-.563-.429l-.48-.008c-.166 0-.437.062-.666.312-.23.25-.875.854-.875 2.083s.896 2.417 1.02 2.583c.125.167 1.764 2.694 4.274 3.777.597.258 1.064.412 1.428.528.6.191 1.146.164 1.578.1.48-.071 1.479-.604 1.688-1.188.208-.583.208-1.083.146-1.188-.063-.104-.23-.166-.48-.291z" />
                </svg>
              </span>
              <div>
                <h3 className="contact-card-title">WhatsApp Directo</h3>
                <p className="contact-card-subtitle">Atención directa con Myriam</p>
              </div>
            </div>
            <p className="contact-card-text">
              Chatea directamente con nosotros para consultar fechas específicas, resolver dudas sobre
              mascotas, zonas comunes, capacidad y opciones de reserva directa.
            </p>
            <ul className="contact-card-features">
              <li>✓ Respuesta rápida y trato personalizado</li>
              <li>✓ Coordinación de hora de llegada y recomendaciones</li>
              <li>✓ Información sobre pagos y transferencias bancarias</li>
            </ul>
            <a
              className="button button-secondary contact-card-button"
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chatear por WhatsApp <span aria-hidden="true">↗</span>
            </a>
          </article>

          {/* Card: Llamada Directa */}
          <article className="contact-card">
            <div className="contact-card-header">
              <span className="contact-card-icon contact-card-icon--phone" aria-hidden="true">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <h3 className="contact-card-title">Línea Telefónica</h3>
                <p className="contact-card-subtitle">{siteConfig.phone}</p>
              </div>
            </div>
            <p className="contact-card-text">
              Si prefieres hablar directamente por teléfono, puedes comunicarte con nuestra línea oficial
              de atención para huéspedes.
            </p>
            <ul className="contact-card-features">
              <li>✓ Atención telefónica directa</li>
              <li>✓ Registro Nacional de Turismo: RNT {siteConfig.rnt}</li>
              <li>✓ Soporte durante tu estadía</li>
            </ul>
            <a
              className="button button-light contact-card-button"
              href={siteConfig.phoneHref}
            >
              Llamar al {siteConfig.phone} <span aria-hidden="true">📞</span>
            </a>
          </article>
        </div>

        {/* Sección Anfitriona Myriam Pineda */}
        <div className="contact-host-card">
          <div className="contact-host-photo">
            <Image
              src="/images/equipo/myriam-pineda-casa-muner-melgar.png"
              width={160}
              height={160}
              alt="Myriam Pineda, anfitriona de Casa Muner Melgar"
            />
          </div>
          <div className="contact-host-body">
            <p className="eyebrow">Atención Personalizada</p>
            <h3>Conoce a tu anfitriona: Myriam Pineda</h3>
            <p>
              Agente de bienes raíces y anfitriona oficial de Casa Muner Melgar. Resuelve tus dudas sobre
              fechas, reservas grupales o recomendaciones directamente con ella.
            </p>
            <div className="contact-host-actions">
              <a
                className="button button-primary"
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chatear con Myriam por WhatsApp 💬
              </a>
              <a
                className="button button-airbnb"
                href={siteConfig.links.airbnbHost}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver perfil de la anfitriona en Airbnb ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación y Cómo Llegar */}
      <section
        className="section-wrap content-section"
        aria-labelledby="location-heading"
      >
        <div className="section-heading">
          <p className="eyebrow">Dirección exacta</p>
          <h2 id="location-heading">Ubicación y Cómo Llegar</h2>
          <p>
            Nuestras casas están ubicadas en un entorno campestre, seguro y rodeado de naturaleza
            a pocos minutos del centro urbano de Melgar.
          </p>
        </div>

        <div className="contact-address-card">
          <div className="contact-address-badge">Dirección oficial</div>
          <p className="contact-address-highlight">
            CONDOMINIO CAMPESTRE EL RUBY COUNTRY CLUB CASA D2, KM 5 VÍA DE MELGAR A CARMEN DE APICALÁ, Melgar, Tolima
          </p>
          <div className="contact-address-grid">
            <div className="contact-address-item">
              <span className="contact-address-item-icon" aria-hidden="true">🚗</span>
              <div>
                <strong>Distancia</strong>
                <p>A solo 15 minutos de Melgar en carro.</p>
              </div>
            </div>
            <div className="contact-address-item">
              <span className="contact-address-item-icon" aria-hidden="true">🛣️</span>
              <div>
                <strong>Vías de acceso</strong>
                <p>Carretera 100% pavimentada hasta la puerta de la casa.</p>
              </div>
            </div>
            <div className="contact-address-item">
              <span className="contact-address-item-icon" aria-hidden="true">🅿️</span>
              <div>
                <strong>Parqueaderos</strong>
                <p>Privados y gratuitos dentro de la propiedad más bahías vigiladas.</p>
              </div>
            </div>
            <div className="contact-address-item">
              <span className="contact-address-item-icon" aria-hidden="true">🛡️</span>
              <div>
                <strong>Seguridad</strong>
                <p>Condominio cerrado con portería y vigilancia las 24 horas.</p>
              </div>
            </div>
          </div>

          <div className="contact-address-notice">
            <strong>Nota importante de transporte:</strong> Por políticas internas del condominio,{" "}
            <em>no se permite el ingreso de vehículos de servicio público ni placas blancas</em> (taxis, vans públicas, buses).
            El ingreso se realiza en vehículos particulares o transporte autorizado.
          </div>

          <div className="contact-address-actions">
            <a
              className="button button-primary"
              href={siteConfig.links.maps}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir ubicación en Google Maps / Waze <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button-light"
              href={siteConfig.links.airbnb}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver perfil en Airbnb <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Mapa Interactivo */}
        <div className="contact-map-wrapper">
          <iframe
            title="Ubicación de Casa Muner Melgar en Google Maps"
            src="https://www.google.com/maps?q=Condominio+El+Ruby+Country+Club,+Melgar,+Tolima&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Resumen de Casas */}
      <section
        className="section-wrap content-section"
        aria-labelledby="houses-summary-heading"
      >
        <div className="section-heading">
          <p className="eyebrow">Nuestras dos opciones</p>
          <h2 id="houses-summary-heading">¿Qué casa deseas reservar?</h2>
          <p>
            Ambas casas cuentan con piscina privada independiente y acceso libre a las zonas comunes
            del condominio El Ruby.
          </p>
        </div>

        <div className="contact-houses-grid">
          {houses.map((house) => (
            <article key={house.id} className="contact-house-card">
              <Image
                src={house.cardImage.src}
                width={house.cardImage.width}
                height={house.cardImage.height}
                alt={house.cardImage.alt}
                className="contact-house-image"
              />
              <div className="contact-house-content">
                <span className="eyebrow">{house.capacity}</span>
                <h3>{house.name}</h3>
                <p>{house.description}</p>
                <p className="contact-house-specs">
                  {house.rooms} · {house.bathrooms} · {house.parking}
                </p>
                <div className="contact-house-actions">
                  <Link className="button button-primary" href={house.slug}>
                    Ver fotos y detalles
                  </Link>
                  <a
                    className="button button-light"
                    href={
                      house.id === "casa-grande"
                        ? siteConfig.links.airbnbCasaGrande
                        : siteConfig.links.airbnbCasaPequena
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reservar en Airbnb ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Datos Clave de la Estadía */}
      <section
        className="section-wrap content-section"
        aria-labelledby="stay-details-heading"
      >
        <div className="contact-details-box">
          <h2 id="stay-details-heading">Información clave para tu estadía</h2>
          <div className="contact-details-grid">
            <div className="contact-detail-item">
              <span className="contact-detail-label">Horario de Check-in</span>
              <span className="contact-detail-value">{siteConfig.checkIn}</span>
            </div>
            <div className="contact-detail-item">
              <span className="contact-detail-label">Horario de Check-out</span>
              <span className="contact-detail-value">{siteConfig.checkOut}</span>
            </div>
            <div className="contact-detail-item">
              <span className="contact-detail-label">Registro Nacional de Turismo</span>
              <span className="contact-detail-value">RNT: {siteConfig.rnt}</span>
            </div>
            <div className="contact-detail-item">
              <span className="contact-detail-label">Póliza de seguro</span>
              <span className="contact-detail-value">Incluida para huéspedes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Redes Sociales Oficiales */}
      <section
        className="section-wrap content-section text-center"
        aria-labelledby="social-heading"
      >
        <p className="eyebrow">Conéctate con nosotros</p>
        <h2 id="social-heading">Redes Sociales Oficiales</h2>
        <p>Síguenos para conocer promociones, fotos recientes y novedades de Casa Muner Melgar.</p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5rem" }}>
          <SocialIcons platforms={["instagram", "tiktok", "facebook", "whatsapp", "maps", "airbnb"]} />
        </div>
      </section>

      <JsonLd data={jsonLd} />
    </PageShell>
  );
}

