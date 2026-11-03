import Image from "next/image";
import { siteConfig } from "@/data/site-content";

export function HostShowcase() {
  return (
    <section className="section-wrap host-showcase-section" aria-labelledby="host-showcase-title">
      <div className="host-showcase-card">
        <div className="host-showcase-media">
          <div className="host-showcase-photo-frame">
            <Image
              src="/images/equipo/myriam-pineda-casa-muner-melgar.png"
              width={750}
              height={750}
              alt="Myriam Pineda, anfitriona de Casa Muner Melgar"
              className="host-showcase-photo"
              priority
            />
            <span className="host-showcase-badge host-showcase-badge--airbnb">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.001 18.275c-1.353-1.697-2.148-3.184-2.413-4.457-.263-1.027-.16-1.848.291-2.465.477-.71 1.188-1.056 2.121-1.056s1.643.345 2.12 1.063c.446.61.558 1.432.286 2.465-.291 1.298-1.085 2.785-2.412 4.458zm9.601 1.14c-.185 1.246-1.034 2.28-2.2 2.783-2.253.98-4.483-.583-6.392-2.704 3.157-3.951 3.74-7.028 2.385-9.018-.795-1.14-1.933-1.695-3.394-1.695-2.944 0-4.563 2.49-3.927 5.382.37 1.565 1.352 3.343 2.917 5.332-.98 1.085-1.91 1.856-2.732 2.333-.636.344-1.245.558-1.828.609-2.679.399-4.778-2.2-3.825-4.88.132-.345.395-.98.845-1.961l.025-.053c1.464-3.178 3.242-6.79 5.285-10.795l.053-.132.58-1.116c.45-.822.635-1.19 1.351-1.643.346-.21.77-.315 1.246-.315.954 0 1.698.558 2.016 1.007.158.239.345.557.582.953l.558 1.089.08.159c2.041 4.004 3.821 7.608 5.279 10.794l.026.025.533 1.22.318.764c.243.613.294 1.222.213 1.858zm1.22-2.39c-.186-.583-.505-1.271-.9-2.094v-.03c-1.889-4.006-3.642-7.608-5.307-10.844l-.111-.163C15.317 1.461 14.468 0 12.001 0c-2.44 0-3.476 1.695-4.535 3.898l-.081.16c-1.669 3.236-3.421 6.843-5.303 10.847v.053l-.559 1.22c-.21.504-.317.768-.345.847C-.172 20.74 2.611 24 5.98 24c.027 0 .132 0 .265-.027h.372c1.75-.213 3.554-1.325 5.384-3.317c1.829 1.989 3.635 3.104 5.382 3.317h.372c.133.027.239.027.265.027c3.37.003 6.152-3.261 4.802-6.975z" />
              </svg>
              <span>Superanfitriona Airbnb</span>
            </span>
            <span className="host-showcase-badge host-showcase-badge--cat">
              🐱 Emma, la coanfitriona
            </span>
          </div>
        </div>

        <div className="host-showcase-content">
          <p className="eyebrow">Tu anfitriona en Melgar</p>
          <h2 id="host-showcase-title">Te acompaño en cada paso</h2>
          
          <div className="host-showcase-bio">
            <p className="host-showcase-lead">
              Soy <strong>Myriam Pineda</strong>, agente de bienes raíces y anfitriona oficial de Casa Muner Melgar.
              Me apasiona recibir a cada familia y asegurarme de que su experiencia en el descanso sea inolvidable y completamente segura.
            </p>
            <p>
              Cuento con amplia trayectoria guiando a huéspedes tanto locales como internacionales para encontrar
              el espacio perfecto en Melgar. Estoy atenta desde el primer mensaje hasta tu salida para que solo te preocupes por relajarte.
            </p>
            <p className="host-showcase-cat-note">
              🐾 <em>Y sí, mi gata Emma también hace parte de la familia… ¡Te recibirá con su mejor ronroneo!</em>
            </p>
          </div>

          <div className="host-showcase-highlights">
            <div className="host-highlight-pill">
              <span className="host-highlight-icon" aria-hidden="true">📋</span>
              <div>
                <strong>RNT Oficial {siteConfig.rnt}</strong>
                <span>Alojamiento 100% legal</span>
              </div>
            </div>
            <div className="host-highlight-pill">
              <span className="host-highlight-icon" aria-hidden="true">💬</span>
              <div>
                <strong>Atención Directa 24/7</strong>
                <span>Por WhatsApp y teléfono</span>
              </div>
            </div>
            <div className="host-highlight-pill">
              <span className="host-highlight-icon" aria-hidden="true">🏊</span>
              <div>
                <strong>Piscinas Privadas</strong>
                <span>En Condominio El Ruby</span>
              </div>
            </div>
            <div className="host-highlight-pill">
              <span className="host-highlight-icon" aria-hidden="true">✨</span>
              <div>
                <strong>Calidad Garantizada</strong>
                <span>Limpieza e higiene estricta</span>
              </div>
            </div>
          </div>

          <div className="host-showcase-actions">
            <a
              className="button button-primary"
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chatear con Myriam por WhatsApp 💬
            </a>
            <a
              className="button button-light"
              href={siteConfig.links.airbnbHost}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver perfil en Airbnb ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

