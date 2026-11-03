import type { ReactNode } from "react";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/** Renderiza datos estructurados JSON-LD de forma segura. */
export function JsonLd({ data }: JsonLdProps): ReactNode {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
