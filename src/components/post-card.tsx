import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/posts";

const dateFormatter = new Intl.DateTimeFormat("es-CO", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export function formatPostDate(isoDate: string): string {
  return dateFormatter.format(new Date(`${isoDate}T00:00:00Z`));
}

/** Tarjeta de artículo para el índice del blog y artículos relacionados. */
export function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="post-card">
      <Link
        className="post-card-media"
        href={`/post/${post.slug}`}
        aria-label={`Leer: ${post.title}`}
      >
        <Image
          src={post.cover.src}
          width={post.cover.width}
          height={post.cover.height}
          alt=""
          sizes="(max-width: 760px) 100vw, 360px"
        />
      </Link>
      <div className="post-card-content">
        <p className="post-card-date">
          <time dateTime={post.datePublished}>
            {formatPostDate(post.datePublished)}
          </time>
        </p>
        <h3>
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <Link className="text-link" href={`/post/${post.slug}`}>
          Leer el artículo <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
