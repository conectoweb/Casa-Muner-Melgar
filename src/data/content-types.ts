/**
 * Imagen con dimensiones conocidas para renderizar con next/image
 * sin desplazamiento de diseño (CLS).
 */
export type ImageData = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

/**
 * Bloques de contenido reutilizables para páginas y artículos.
 * El texto admite marcado en línea: **negrita**, *cursiva* y [enlaces](https://...).
 */
export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; style: "bullets" | "numbers"; items: string[] }
  | { type: "image"; image: ImageData; caption?: string; narrow?: boolean }
  | { type: "icons"; items: string[] }
  | { type: "note"; text: string };

export type ContentSection = {
  id?: string;
  title: string;
  blocks: ContentBlock[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  label: string;
  href: string;
};
