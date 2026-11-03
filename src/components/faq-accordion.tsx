import type { FaqItem } from "@/data/content-types";
import { JsonLd } from "@/components/json-ld";
import { renderInline } from "@/components/inline-text";

type FaqAccordionProps = {
  items: FaqItem[];
  withJsonLd?: boolean;
};

/**
 * Acordeón de preguntas frecuentes basado en <details>/<summary>,
 * navegable con teclado de forma nativa.
 */
export function FaqAccordion({ items, withJsonLd = false }: FaqAccordionProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.question} className="faq-item">
          <summary>{item.question}</summary>
          <div className="faq-answer">
            <p>{renderInline(item.answer)}</p>
          </div>
        </details>
      ))}
      {withJsonLd ? <JsonLd data={jsonLd} /> : null}
    </div>
  );
}
