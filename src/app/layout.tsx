import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.muner.com.co"),
  title: {
    default: "Casa Muner Melgar | Casas vacacionales en Melgar, Tolima",
    template: "%s | Casa Muner Melgar",
  },
  description:
    "Conoce las dos casas vacacionales de Casa Muner en Melgar, Tolima. Consulta capacidades, espacios y disponibilidad por WhatsApp.",
  openGraph: {
    title: "Casa Muner Melgar | Casas vacacionales en Melgar, Tolima",
    description:
      "Dos casas vacacionales en Melgar, Tolima, con distintas capacidades y espacios para compartir.",
    url: "https://www.muner.com.co/",
    siteName: "Casa Muner Melgar",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
