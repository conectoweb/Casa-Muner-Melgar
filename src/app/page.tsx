import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroSlider } from "@/components/hero-slider";
import { HouseCard } from "@/components/house-card";
import { ImageGallery } from "@/components/image-gallery";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import {
  commonAreasImages,
  houses,
  siteConfig,
  teamPhoto,
} from "@/data/site-content";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: siteConfig.fullName,
  url: "https://www.muner.com.co/",
  description:
    "Dos casas vacacionales en Melgar, Tolima, con piscina privada, en el condominio El Ruby Country Club.",
  telephone: siteConfig.links.whatsapp,
  identifier: `RNT ${siteConfig.rnt}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melgar",
    addressRegion: "Tolima",
    addressCountry: "CO",
  },
  sameAs: [
    siteConfig.links.instagram,
    siteConfig.links.tiktok,
    siteConfig.links.facebook,
    siteConfig.links.airbnb,
  ],
};

export default function Home() {
  return (
    <PageShell>
      <section className="hero section-wrap" id="inicio" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Descanso y buenos momentos en {siteConfig.location}</p>
          <h1 id="hero-title">Dos casas para disfrutar Melgar a tu manera</h1>
          <p className="hero-description">
            Elige entre una casa para grupos grandes o un espacio acogedor
            para compartir en familia. Consulta disponibilidad directamente
            con nuestra anfitriona.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#alojamientos">
              Conoce las casas
            </a>
            <Link className="button button-secondary" href="/contacto">
              Contactar y Reservar
            </Link>
          </div>
          <p className="hero-note">
            Capacidades disponibles: hasta 20 y hasta 6 personas.
          </p>
        </div>
        <div className="hero-art">
          <HeroSlider />
        </div>
      </section>

      <section
        className="houses-section section-wrap"
        id="alojamientos"
        aria-labelledby="houses-title"
      >
        <div className="section-heading">
          <p className="eyebrow">Encuentra el espacio para tu viaje</p>
          <h2 id="houses-title">Dos casas, distintas capacidades</h2>
          <p>
            Revisa lo esencial de cada alojamiento y escríbenos para resolver
            tus dudas antes de reservar.
          </p>
        </div>
        <div className="house-grid">
          {houses.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      </section>

      <section
        className="host-section"
        id="nosotros"
        aria-labelledby="host-title"
      >
        <div className="host-content section-wrap">
          <div className="host-photo">
            <Image
              src={teamPhoto.src}
              width={teamPhoto.width}
              height={teamPhoto.height}
              alt={teamPhoto.alt}
              sizes="(max-width: 640px) 40vw, 180px"
            />
          </div>
          <div>
            <p className="eyebrow">Te atendemos directamente</p>
            <h2 id="host-title">Hola, soy Myriam</h2>
            <p>
              Soy la anfitriona de Casa Muner y te atenderé por WhatsApp para
              ayudarte a consultar disponibilidad y conocer mejor las casas.
            </p>
            <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", alignItems: "center", marginTop: "1rem" }}>
              <Link className="text-link" href="/contacto">
                Habla con Myriam <span aria-hidden="true">→</span>
              </Link>
              <a
                className="text-link"
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

      <section
        className="section-wrap content-section"
        aria-labelledby="condo-title"
      >
        <div className="section-heading">
          <p className="eyebrow">Condominio El Ruby Country Club</p>
          <h2 id="condo-title">Zonas comunes para disfrutar</h2>
          <p>
            Además de la piscina privada de cada casa, puedes usar las zonas
            comunes del condominio: piscinas, lago, senderos y salón social.
          </p>
        </div>
        <ImageGallery
          images={[
            commonAreasImages[1],
            commonAreasImages[4],
            commonAreasImages[9],
            commonAreasImages[12],
          ]}
          label="Fotografías de las zonas comunes del condominio El Ruby Country Club"
        />
      </section>

      <section
        className="contact-callout section-wrap"
        aria-labelledby="contact-title"
      >
        <p className="eyebrow">¿Planeando una escapada?</p>
        <h2 id="contact-title">Conversemos sobre tu estadía</h2>
        <p>
          Cuéntanos cuántas personas viajan y te ayudaremos a elegir la casa
          adecuada.
        </p>
        <Link className="button button-light" href="/contacto">
          Ir a contacto y reservas
        </Link>
      </section>
      <JsonLd data={jsonLd} />
    </PageShell>
  );
}
