import Link from "next/link";
import type { BreadcrumbItem } from "@/data/content-types";
import { JsonLd } from "@/components/json-ld";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

/** Migas de pan visibles con sus datos estructurados BreadcrumbList. */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://www.muner.com.co${item.href}`,
    })),
  };

  return (
    <nav className="breadcrumbs" aria-label="Migas de pan">
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href}>
              {isLast ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
      <JsonLd data={jsonLd} />
    </nav>
  );
}
