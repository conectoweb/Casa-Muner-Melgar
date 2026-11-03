import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContentBlocks } from "@/components/content-blocks";
import { CtaSection } from "@/components/cta-section";
import { HouseBookingWidget } from "@/components/house-booking-widget";
import { HouseInteractiveAmenities } from "@/components/house-interactive-amenities";
import { IconStrip } from "@/components/icon-strip";
import { ImageGallery } from "@/components/image-gallery";
import { JsonLd } from "@/components/json-ld";
import { siteConfig, type House } from "@/data/site-content";

/** Plantilla de ficha para cada casa vacacional. */
export function HousePage({ house }: { house: House }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    name: `${house.name} — ${siteConfig.fullName}`,
    description: `${house.pageTitle}. ${house.intro}`,
    url: `https://www.muner.com.co${house.slug}`,
    image: `https://www.muner.com.co${house.cardImage.src}`,
    identifier: `RNT ${siteConfig.rnt}`,
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: house.maxGuests,
    },
    numberOfRooms: house.rooms,
    numberOfBathroomsTotal: house.bathrooms,
    amenityFeature: house.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melgar",
      addressRegion: "Tolima",
      addressCountry: "CO",
    },
    telephone: siteConfig.phone,
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Casas", href: "/#alojamientos" },
          { label: house.name, href: house.slug },
        ]}
      />
      <section className="page-hero section-wrap" aria-labelledby="house-title">
        <div className="page-hero-copy">
          <p className="eyebrow">
            {house.capacity} · Casa quinta a las afueras de Melgar, Tolima
          </p>
          <h1 id="house-title">{house.pageTitle}</h1>
          <p className="page-hero-description">
            Bienvenidos todos a {siteConfig.fullName}. Ubicada en el{" "}
            {siteConfig.address.condominium}, a las afueras de Melgar.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contacto">
              Contactar para reservar
            </Link>
            {house.bookingChannels.includes("airbnb") ? (
              <a
                className="button button-secondary"
                href={house.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar por Airbnb
              </a>
            ) : null}
          </div>
        </div>
      </section>

      {/* Widget Interactivo de Cotización y Reserva */}
      <section className="section-wrap" style={{ marginBlock: "2rem" }}>
        <HouseBookingWidget house={house} />
      </section>

      <section
        className="section-wrap content-section"
        aria-labelledby="highlights-title"
      >
        <h2 id="highlights-title">Encuentra en esta casa</h2>
        <ul className="highlight-grid">
          {house.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <IconStrip
          items={house.amenities}
          label={`Comodidades de ${house.name}`}
        />
        <div style={{ marginTop: "2.5rem" }}>
          <HouseInteractiveAmenities house={house} />
        </div>
      </section>

      <section
        className="section-wrap content-section"
        aria-labelledby="gallery-title"
      >
        <h2 id="gallery-title">Galería de {house.name}</h2>
        <ImageGallery
          images={house.gallery}
          label={`Galería de fotografías de ${house.name}`}
        />
      </section>

      <section
        className="section-wrap content-section"
        aria-labelledby="details-title"
      >
        <h2 id="details-title">Detalles de la casa</h2>
        <p>
          {house.intro} {house.stayDescription}
        </p>
        <ol className="fact-list">
          {house.characteristics.map((characteristic) => (
            <li key={characteristic}>{characteristic}</li>
          ))}
        </ol>
        <p>
          <strong>RNT: {siteConfig.rnt}</strong>
        </p>
        {house.staySections.map((section) => (
          <section key={section.id} aria-labelledby={section.id}>
            <h3 id={section.id}>{section.title}</h3>
            <ContentBlocks blocks={section.blocks} />
          </section>
        ))}
        <p>{house.parkingNote}</p>
      </section>

      <section
        className="section-wrap content-section"
        aria-labelledby="location-title"
      >
        <h2 id="location-title">Ubicación de la casa</h2>
        <ul className="fact-list" aria-label="Datos de ubicación y horarios">
          <li>{siteConfig.address.reference}</li>
          <li>{siteConfig.address.route}</li>
          <li>
            {siteConfig.address.condominium} — {siteConfig.address.house}
          </li>
          <li>Check-in: {siteConfig.checkIn}</li>
          <li>Check-out: {siteConfig.checkOut}</li>
          <li>Llegada autónoma con cerradura con teclado</li>
        </ul>
        <p>
          <a
            className="text-link"
            href={siteConfig.links.maps}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver ubicación en Google Maps <span aria-hidden="true">↗</span>
          </a>
        </p>
      </section>

      <section
        className="section-wrap content-section"
        aria-labelledby="rules-title"
      >
        <h2 id="rules-title">Reglas importantes</h2>
        <p>
          Al reservar, aceptas cumplir con todas las normas establecidas por{" "}
          {siteConfig.fullName}. Estas son algunas de las más importantes:
        </p>
        <ul className="rule-summary">
          <li>No se entregan toallas para el cuerpo: lleva las tuyas.</li>
          <li>Lleva repelente y bloqueador solar.</li>
          <li>
            Todos los espacios tienen ventilador de techo (no hay aire
            acondicionado).
          </li>
          <li>Se permiten mascotas, pero no pueden ingresar a las piscinas.</li>
          <li>
            No se permite el ingreso de vehículos públicos o con placa blanca.
          </li>
          <li>El agua no es potable.</li>
          <li>No se admiten visitas no registradas.</li>
          <li>
            Ruido moderado durante el día y silencio desde las 11:00 p. m.
          </li>
        </ul>
        <p>
          <Link className="text-link" href="/reglas-casas">
            Lee todas las reglas de la casa <span aria-hidden="true">→</span>
          </Link>
        </p>
      </section>

      <section
        className="section-wrap content-section"
        aria-labelledby="trust-title"
      >
        <h2 id="trust-title">¿Por qué confiar en {siteConfig.fullName}?</h2>
        <p>
          Entendemos que es muy inseguro reservar por internet y que hay muchas
          estafas con las casas vacacionales. Por eso te dejamos nuestro perfil
          de Google Maps y nuestras redes sociales para que puedas ver nuestras
          calificaciones.
        </p>
        <div className="hero-actions">
          <a
            className="button button-secondary"
            href={siteConfig.links.maps}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver reseñas en Google Maps
          </a>
          <Link className="button button-secondary" href="/preguntas-frecuentes">
            Preguntas frecuentes
          </Link>
        </div>
      </section>

      <CtaSection
        title={`Consulta disponibilidad de ${house.name}`}
        text="Podemos resolver todas tus dudas por WhatsApp. Cuéntanos cuántas personas viajan y en qué fechas."
        buttonLabel="Preguntar disponibilidad"
      />
      <JsonLd data={jsonLd} />
    </>
  );
}
