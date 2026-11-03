import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContentBlocks } from "@/components/content-blocks";
import { CtaSection } from "@/components/cta-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { houses } from "@/data/site-content";
import type { Service } from "@/data/services";

/** Plantilla común para las páginas de servicio. */
export function ServicePage({ service }: { service: Service }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/#alojamientos" },
          { label: service.metaTitle, href: service.slug },
        ]}
      />
      <PageHero
        eyebrow={service.heroEyebrow}
        title={service.title}
        description={service.heroDescription}
      />

      {service.sections.map((section) => (
        <section
          key={section.title}
          className="section-wrap content-section"
          aria-labelledby={undefined}
        >
          <h2>{section.title}</h2>
          <ContentBlocks blocks={section.blocks} />
        </section>
      ))}

      <section
        className="section-wrap content-section"
        aria-labelledby="service-houses-title"
      >
        <h2 id="service-houses-title">¿Qué casa puede ser adecuada para ti?</h2>
        <p>
          Estas son las dos casas de Casa Muner Melgar. Revisa su capacidad y
          características, y escríbenos para ayudarte a elegir.
        </p>
        <ul className="service-house-list">
          {houses.map((house) => (
            <li key={house.id}>
              <Link href={house.slug}>
                <strong>{house.name}</strong>
              </Link>{" "}
              — {house.capacity}, {house.rooms}, {house.bathrooms},{" "}
              {house.amenities.join(", ").toLowerCase()}.
            </li>
          ))}
        </ul>
      </section>

      {service.faqs ? (
        <section
          className="section-wrap content-section"
          aria-labelledby="service-faq-title"
        >
          <h2 id="service-faq-title">Preguntas frecuentes</h2>
          <FaqAccordion items={service.faqs} />
        </section>
      ) : null}

      <CtaSection title={service.ctaTitle} text={service.ctaText} />
    </>
  );
}
