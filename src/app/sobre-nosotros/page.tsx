import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContentBlocks } from "@/components/content-blocks";
import { CtaSection } from "@/components/cta-section";
import { HostShowcase } from "@/components/host-showcase";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { aboutPage } from "@/data/info-pages";

export const metadata: Metadata = {
  title: aboutPage.metaTitle,
  description: aboutPage.metaDescription,
  alternates: {
    canonical: "/sobre-nosotros",
  },
  openGraph: {
    title: `${aboutPage.metaTitle} | Casa Muner Melgar`,
    description: aboutPage.metaDescription,
    url: "/sobre-nosotros",
    type: "website",
  },
};

export default function SobreNosotrosPage() {
  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Sobre nosotros", href: "/sobre-nosotros" },
        ]}
      />
      <PageHero
        eyebrow={aboutPage.heroEyebrow}
        title={aboutPage.title}
        description={aboutPage.heroDescription}
      />
      {aboutPage.sections.map((section) => {
        if (section.title === "Te acompaño en cada paso") {
          return <HostShowcase key={section.title} />;
        }

        return (
          <section
            key={section.title}
            className="section-wrap content-section"
          >
            <h2>{section.title}</h2>
            <ContentBlocks blocks={section.blocks} />
          </section>
        );
      })}
      <CtaSection
        eyebrow="¿Planeando una escapada?"
        title="Conversemos sobre tu estadía"
        text="Cuéntanos cuántas personas viajan y te ayudaremos a elegir la casa adecuada."
      />
    </PageShell>
  );
}
