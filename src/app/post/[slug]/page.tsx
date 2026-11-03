import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContentBlocks } from "@/components/content-blocks";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { PostCard, formatPostDate } from "@/components/post-card";
import { getPost, posts } from "@/data/posts";
import { siteConfig } from "@/data/site-content";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/post/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return {};
  }
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `/post/${post.slug}`,
    },
    openGraph: {
      title: `${post.metaTitle} | Casa Muner Melgar`,
      description: post.metaDescription,
      url: `/post/${post.slug}`,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: [
        {
          url: post.cover.src,
          width: post.cover.width,
          height: post.cover.height,
          alt: post.cover.alt,
        },
      ],
    },
  };
}

export default async function PostPage({
  params,
}: PageProps<"/post/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    notFound();
  }

  const relatedPosts = posts.filter((item) => item.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `https://www.muner.com.co${post.cover.src}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      "@type": "Organization",
      name: siteConfig.fullName,
      url: "https://www.muner.com.co/",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.fullName,
      url: "https://www.muner.com.co/",
    },
    mainEntityOfPage: `https://www.muner.com.co/post/${post.slug}`,
  };

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/post/${post.slug}` },
        ]}
      />
      <article className="section-wrap article">
        <header className="article-header">
          <p className="post-card-date">
            <time dateTime={post.datePublished}>
              {formatPostDate(post.datePublished)}
            </time>
          </p>
          <h1>{post.title}</h1>
          <div className="article-cover">
            <Image
              src={post.cover.src}
              width={post.cover.width}
              height={post.cover.height}
              alt={post.cover.alt}
              sizes="(max-width: 760px) 100vw, 760px"
              preload
            />
          </div>
        </header>
        <ContentBlocks blocks={post.blocks} />
      </article>

      <section
        className="section-wrap content-section"
        aria-labelledby="related-title"
      >
        <h2 id="related-title">Artículos relacionados</h2>
        <div className="post-grid">
          {relatedPosts.map((related) => (
            <PostCard key={related.slug} post={related} />
          ))}
        </div>
      </section>

      <CtaSection
        eyebrow="¿Planeando tu viaje a Melgar?"
        title="Reserva con atención directa"
        text="Habla con nuestra anfitriona por WhatsApp y consulta disponibilidad para tus fechas."
      />
      <JsonLd data={jsonLd} />
    </PageShell>
  );
}
