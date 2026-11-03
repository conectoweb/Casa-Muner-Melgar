import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { securePaymentPage } from "@/data/info-pages";

export const metadata: Metadata = {
  title: securePaymentPage.metaTitle,
  description: securePaymentPage.metaDescription,
  alternates: {
    canonical: "/pago-seguro",
  },
  openGraph: {
    title: `${securePaymentPage.metaTitle} | Casa Muner Melgar`,
    description: securePaymentPage.metaDescription,
    url: "/pago-seguro",
    type: "website",
  },
};

export default function PagoSeguroPage() {
  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Pago seguro", href: "/pago-seguro" },
        ]}
      />
      <PageHero
        title={securePaymentPage.title}
        description={securePaymentPage.intro}
      />

      <section
        className="section-wrap content-section"
        aria-labelledby="qr-title"
      >
        <h2 id="qr-title">¿Cómo pagar con QR?</h2>
        <p>
          Sigue estos pasos para realizar tu pago de forma rápida y segura
          desde tu banco:
        </p>
        <div className="payment-layout">
          <div className="payment-qr">
            <Image
              src="/images/pagos/codigo-qr-pagos-casa-muner.jpg"
              width={600}
              height={600}
              alt="Código QR de pagos de Casa Muner Melgar para escanear desde la aplicación de tu banco"
              sizes="(max-width: 640px) 80vw, 280px"
            />
          </div>
          <ol className="steps-list">
            {securePaymentPage.qrSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <p className="payment-cost">
          <strong>{securePaymentPage.transactionCost}</strong>
        </p>
      </section>

      <section
        className="section-wrap content-section"
        aria-labelledby="breb-title"
      >
        <h2 id="breb-title">Pagando manualmente con la llave Bre-B</h2>
        <div className="payment-layout">
          <div className="payment-qr">
            <Image
              src="/images/pagos/bre-b-pagos-casa-muner.jpg"
              width={600}
              height={600}
              alt="Llave Bre-B de Casa Muner Melgar para pagos manuales"
              sizes="(max-width: 640px) 80vw, 280px"
            />
          </div>
          <ol className="steps-list">
            {securePaymentPage.brebSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <p>{securePaymentPage.banksNote}</p>
        <figure className="content-image">
          <Image
            src="/images/pagos/pago-desde-cualquier-banco.png"
            width={889}
            height={376}
            alt="Bancos y billeteras disponibles para pagar: Nequi, Daviplata, dale!, Bancolombia, Movii y Powwi"
            sizes="(max-width: 760px) 100vw, 760px"
          />
        </figure>
      </section>

      <CtaSection
        title="¿Tienes preguntas sobre el pago?"
        text="Escríbenos por WhatsApp y con gusto te ayudamos con tu reserva o dudas sobre el pago."
      />
    </PageShell>
  );
}
