import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

/**
 * Estructura común de todas las páginas: enlace de salto al contenido,
 * encabezado, contenido principal y pie de página.
 */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido">{children}</main>
      <SiteFooter />
    </>
  );
}
