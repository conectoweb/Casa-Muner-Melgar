import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { GuestRegistrationForm } from "@/components/guest-registration-form";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Registro de Ingreso de Huéspedes | Casa Muner Melgar",
  description:
    "Formulario oficial de registro de ingreso para huéspedes y acompañantes en Casa Muner Melgar. Requerido para autorizar el acceso en la portería del Condominio El Ruby Country Club.",
  alternates: {
    canonical: "/registro-ingreso",
  },
  openGraph: {
    title: "Registro de Ingreso de Huéspedes | Casa Muner Melgar",
    description:
      "Formulario oficial de ingreso para huéspedes de Casa Muner Melgar en el Condominio El Ruby Country Club.",
    url: "/registro-ingreso",
    type: "website",
  },
};

export default function RegistroIngresoPage() {
  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Registro de Ingreso", href: "/registro-ingreso" },
        ]}
      />

      <PageHero
        eyebrow="Portería y Control de Acceso"
        title="Registro de Ingreso de Huéspedes"
        description="Por normas de seguridad y administración del Condominio Campestre El Ruby Country Club, todas las personas que ingresen deben estar registradas previamente con su documento de identidad."
      />

      <section
        className="section-wrap content-section"
        aria-labelledby="form-heading"
      >
        <GuestRegistrationForm />
      </section>
    </PageShell>
  );
}

