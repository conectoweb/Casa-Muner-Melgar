import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { PostCard } from "@/components/post-card";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Consejos, guías y recomendaciones para alquilar casas vacacionales en Melgar, Tolima, y disfrutar al máximo tu estadía.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Casa Muner Melgar",
    description:
      "Consejos, guías y recomendaciones para alquilar casas vacacionales en Melgar, Tolima.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />
      <PageHero
        eyebrow="Blog de Casa Muner Melgar"
        title="Consejos para tu estadía en Melgar"
        description="Guías y recomendaciones para reservar casas vacacionales en Melgar, evitar estafas y disfrutar de la ciudad de las piscinas."
      />
      <section
        className="section-wrap content-section"
        aria-label="Artículos del blog"
      >
        <div className="post-grid">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
      <CtaSection
        eyebrow="¿Listo para tu escapada?"
        title="Reserva tu casa en Melgar"
        text="Consulta disponibilidad y resuelve tus dudas directamente con nuestra anfitriona."
      />
    </PageShell>
  );
}
