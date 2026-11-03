import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

/** Encabezado consistente para las páginas internas. */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="page-hero section-wrap">
      <div className="page-hero-copy">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {description ? (
          <p className="page-hero-description">{description}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
