import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { navigation } from "@/data/navigation";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Mapa del Sitio",
  description:
    "Encuentra todas las páginas de Casa Muner Melgar: las casas, los servicios, la información para huéspedes y los artículos del blog.",
  alternates: {
    canonical: "/mapa-del-sitio",
  },
  openGraph: {
    title: "Mapa del Sitio | Casa Muner Melgar",
    description:
      "Encuentra todas las páginas de Casa Muner Melgar: casas, servicios, información para huéspedes y blog.",
    url: "/mapa-del-sitio",
    type: "website",
  },
};

export default function MapaDelSitioPage() {
  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Mapa del sitio", href: "/mapa-del-sitio" },
        ]}
      />
      <PageHero
        title="Mapa del sitio"
        description="Todas las páginas de Casa Muner Melgar en un solo lugar."
      />
      <section className="section-wrap content-section">
        <div className="sitemap-columns">
          {navigation.map((item) => (
            <div key={item.label} className="sitemap-group">
              {item.href ? (
                <h2>
                  <Link href={item.href}>{item.label}</Link>
                </h2>
              ) : (
                <h2>{item.label}</h2>
              )}
              {item.children ? (
                <ul>
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href}>{child.label}</Link>
                    </li>
                  ))}
                </ul>
              ) : null}
              {item.label === "Blog" ? (
                <ul>
                  {posts.map((post) => (
                    <li key={post.slug}>
                      <Link href={`/post/${post.slug}`}>{post.title}</Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
