import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { ServicePage } from "@/components/service-page";
import { services } from "@/data/services";

const service = services.find(
  (item) => item.slug === "/casa-vacacional-cumpleanos-melgar",
)!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: {
    canonical: service.slug,
  },
  openGraph: {
    title: `${service.metaTitle} | Casa Muner Melgar`,
    description: service.metaDescription,
    url: service.slug,
    type: "website",
  },
};

export default function CasaVacacionalCumpleanosPage() {
  return (
    <PageShell>
      <ServicePage service={service} />
    </PageShell>
  );
}
