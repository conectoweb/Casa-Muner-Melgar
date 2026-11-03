import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site-content";
import { SocialIcons } from "@/components/social-icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Image
          className="footer-logo"
          src="/images/marca/logo-casa-muner-melgar-blanco.svg"
          width={188}
          height={188}
          alt=""
          aria-hidden="true"
        />
        <p className="footer-title">Casa Muner Melgar</p>
        <p>Dos casas vacacionales en {siteConfig.location}.</p>
        <p>
          RNT: {siteConfig.rnt}
          <br />
        </p>

        <div className="footer-social">
          <p className="footer-social-title">Redes y canales de contacto</p>
          <br />
          <SocialIcons platforms={["instagram", "tiktok", "facebook", "whatsapp", "maps", "airbnb"]} />
        </div>
      </div>

      <nav className="footer-nav" aria-label="Mapa del sitio">
        {navigation
          .filter((item) => item.children)
          .map((item) => (
            <div className="footer-nav-group" key={item.label}>
              <p className="footer-nav-title">{item.label}</p>
              <ul>
                {item.children!.map((child) => (
                  <li key={child.href}>
                    <Link href={child.href}>{child.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        <div className="footer-nav-group">
          <p className="footer-nav-title">Blog</p>
          <ul>
            <li>
              <Link href="/blog">Todos los artículos</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="footer-bottom">
        <p className="footer-note">
          Consulta directamente la disponibilidad y los detalles de tu estadía.
        </p>
        <p className="footer-copyright">
          © 2026 Casa Muner Melgar.{" "}
          <a
            href="https://www.conectoweb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Desarrollado por ConectoWeb
          </a>
        </p>
      </div>
    </footer>
  );
}
