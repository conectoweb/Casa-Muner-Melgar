import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description:
    "Resuelve tus dudas sobre Casa Muner Melgar: reservas con atención personalizada, casas con piscina privada, parqueadero, Wi-Fi y vigilancia 24 horas.",
  alternates: {
    canonical: "/preguntas-frecuentes",
  },
  openGraph: {
    title: "Preguntas Frecuentes | Casa Muner Melgar",
    description:
      "Resuelve tus dudas sobre Casa Muner Melgar: reservas, piscina privada, parqueadero, Wi-Fi y vigilancia 24 horas.",
    url: "/preguntas-frecuentes",
    type: "website",
  },
};

export default function PreguntasFrecuentesPage() {
  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
        ]}
      />
      <PageHero
        title="Preguntas frecuentes sobre Casa Muner Melgar"
        description="Respuestas a las dudas más comunes sobre nuestras casas vacacionales, la reserva y la estadía."
      />
      <section
        className="section-wrap content-section"
        aria-label="Preguntas más frecuentes"
      >
        <FaqAccordion items={faqs} withJsonLd />
      </section>
      <CtaSection
        title="¿Tienes otra pregunta?"
        text="Podemos resolver todas tus dudas por WhatsApp antes de reservar."
      />
    </PageShell>
  );
}
