import type { Metadata } from "next";
import { HousePage } from "@/components/house-page";
import { PageShell } from "@/components/page-shell";
import { houses } from "@/data/site-content";

const house = houses.find((item) => item.id === "casa-pequena")!;

export const metadata: Metadata = {
  title: "Casa Pequeña con Piscina en Melgar (hasta 6 personas)",
  description:
    "Alquiler de casa con piscina privada en Melgar para 1 a 6 personas: 2 habitaciones, 1 baño, Wi-Fi, zona BBQ y vigilancia 24 horas en el condominio El Ruby Country Club.",
  alternates: {
    canonical: house.slug,
  },
  openGraph: {
    title: "Casa Pequeña | Casa Muner Melgar",
    description:
      "Alquiler de casa con piscina privada en Melgar para 1 a 6 personas, en condominio con vigilancia 24 horas.",
    url: house.slug,
    type: "website",
  },
};

export default function CasaPequenaPage() {
  return (
    <PageShell>
      <HousePage house={house} />
    </PageShell>
  );
}
