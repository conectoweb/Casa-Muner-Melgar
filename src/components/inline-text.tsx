import Link from "next/link";
import type { ReactNode } from "react";

const INLINE_PATTERN =
  /(\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*)/g;

/**
 * Renderiza marcado en línea sencillo: **negrita**, *cursiva*
 * y [texto](enlace). Los enlaces internos usan next/link y los
 * externos se abren en una pestaña nueva.
 */
export function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  for (const match of text.matchAll(INLINE_PATTERN)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      nodes.push(text.slice(lastIndex, index));
    }
    const [, , linkText, linkHref, bold, italic] = match;
    if (linkText !== undefined && linkHref !== undefined) {
      if (linkHref.startsWith("/")) {
        nodes.push(
          <Link key={key++} href={linkHref}>
            {renderInline(linkText)}
          </Link>,
        );
      } else if (linkHref.startsWith("tel:")) {
        nodes.push(
          <a key={key++} href={linkHref}>
            {renderInline(linkText)}
          </a>,
        );
      } else {
        nodes.push(
          <a
            key={key++}
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {renderInline(linkText)}
          </a>,
        );
      }
    } else if (bold !== undefined) {
      nodes.push(<strong key={key++}>{renderInline(bold)}</strong>);
    } else if (italic !== undefined) {
      nodes.push(<em key={key++}>{renderInline(italic)}</em>);
    }
    lastIndex = index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}
