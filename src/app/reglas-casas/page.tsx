import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { houseRules } from "@/data/info-pages";

export const metadata: Metadata = {
  title: houseRules.metaTitle,
  description: houseRules.metaDescription,
  alternates: {
    canonical: "/reglas-casas",
  },
  openGraph: {
    title: `${houseRules.metaTitle} | Casa Muner Melgar`,
    description: houseRules.metaDescription,
    url: "/reglas-casas",
    type: "website",
  },
};

export default function ReglasCasasPage() {
  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Reglas de la casa", href: "/reglas-casas" },
        ]}
      />
      <PageHero title={houseRules.title} description={houseRules.intro} />
      <section className="section-wrap content-section" aria-label="Reglas">
        <ol className="rule-list">
          {houseRules.rules.map((rule) => (
            <li key={rule.title} className="rule-item">
              <h2>{rule.title}</h2>
              <p>{rule.body}</p>
            </li>
          ))}
        </ol>
      </section>
      <CtaSection
        title="¿Tienes dudas sobre las reglas?"
        text="Escríbenos por WhatsApp y resolvemos tus preguntas antes de reservar."
      />
    </PageShell>
  );
}
