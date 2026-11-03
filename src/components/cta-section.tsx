import Link from "next/link";

type CtaSectionProps = {
  eyebrow?: string;
  title: string;
  text: string;
  buttonLabel?: string;
  buttonHref?: string;
};

/** Sección de llamado a la acción que dirige a la landing de contacto y reservas. */
export function CtaSection({
  eyebrow = "¿Tienes preguntas?",
  title,
  text,
  buttonLabel = "Contactar y consultar disponibilidad",
  buttonHref = "/contacto",
}: CtaSectionProps) {
  return (
    <section className="contact-callout section-wrap" aria-labelledby="cta-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id="cta-title">{title}</h2>
      <p>{text}</p>
      <Link href={buttonHref} className="button button-light">
        {buttonLabel}
      </Link>
    </section>
  );
}
