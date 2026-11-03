import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContentBlocks } from "@/components/content-blocks";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { instructivosPage } from "@/data/info-pages";

export const metadata: Metadata = {
  title: instructivosPage.metaTitle,
  description: instructivosPage.metaDescription,
  alternates: {
    canonical: "/instructivos-aquiler-casas",
  },
  openGraph: {
    title: `${instructivosPage.metaTitle} | Casa Muner Melgar`,
    description: instructivosPage.metaDescription,
    url: "/instructivos-aquiler-casas",
    type: "website",
  },
};

export default function InstructivosPage() {
  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Instructivos", href: "/instructivos-aquiler-casas" },
        ]}
      />
      <PageHero
        title={instructivosPage.title}
        description={instructivosPage.intro}
      />
      {instructivosPage.guides.map((guide) => (
        <section
          key={guide.id}
          className="section-wrap content-section"
          aria-labelledby={guide.id}
        >
          <h2 id={guide.id}>{guide.title}</h2>
          <ContentBlocks blocks={guide.blocks} />
        </section>
      ))}
      <CtaSection
        title="¿No encontraste el instructivo que buscabas?"
        text="Escríbenos por WhatsApp durante tu estadía y te ayudamos con cualquier equipo de la casa."
      />
    </PageShell>
  );
}
