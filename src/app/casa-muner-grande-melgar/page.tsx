import type { Metadata } from "next";
import { HousePage } from "@/components/house-page";
import { PageShell } from "@/components/page-shell";
import { houses } from "@/data/site-content";

const house = houses.find((item) => item.id === "casa-grande")!;

export const metadata: Metadata = {
  title: "Casa Grande en Melgar con Piscina Privada (hasta 20 personas)",
  description:
    "Casa quinta en Melgar con piscina privada para hasta 20 personas: 5 habitaciones, 3 baños, Wi-Fi, zona BBQ y vigilancia 24 horas en el condominio El Ruby Country Club.",
  alternates: {
    canonical: house.slug,
  },
  openGraph: {
    title: "Casa Grande | Casa Muner Melgar",
    description:
      "Casa quinta en Melgar con piscina privada para hasta 20 personas, en condominio con vigilancia 24 horas.",
    url: house.slug,
    type: "website",
  },
};

export default function CasaGrandePage() {
  return (
    <PageShell>
      <HousePage house={house} />
    </PageShell>
  );
}
