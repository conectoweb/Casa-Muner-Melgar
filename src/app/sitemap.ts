import type { MetadataRoute } from "next";
import { houses } from "@/data/site-content";
import { posts } from "@/data/posts";
import { services } from "@/data/services";

const baseUrl = "https://www.muner.com.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { path: "", priority: 1 },
    { path: "/contacto", priority: 0.9 },
    { path: "/registro-ingreso", priority: 0.8 },
    { path: "/sobre-nosotros", priority: 0.8 },
    { path: "/reglas-casas", priority: 0.6 },
    { path: "/mapa-del-sitio", priority: 0.4 },
    { path: "/pago-seguro", priority: 0.6 },
    { path: "/instructivos-aquiler-casas", priority: 0.5 },
    { path: "/preguntas-frecuentes", priority: 0.7 },
    { path: "/blog", priority: 0.7 },
  ].map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));

  const housePages: MetadataRoute.Sitemap = houses.map((house) => ({
    url: `${baseUrl}${house.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/post/${post.slug}`,
    lastModified: new Date(`${post.dateModified}T00:00:00Z`),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticPages, ...housePages, ...servicePages, ...postPages];
}
