import type { ReactNode } from "react";
import { siteConfig } from "@/data/site-content";

export type SocialPlatform =
  | "instagram"
  | "tiktok"
  | "facebook"
  | "whatsapp"
  | "maps"
  | "airbnb";

type SocialItem = {
  id: SocialPlatform;
  label: string;
  ariaLabel: string;
  href: string;
  icon: (props: { size?: number }) => ReactNode;
};

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.49 0 .95.12 1.35.34V9.18a6.33 6.33 0 0 0-1.35-.15A6.34 6.34 0 0 0 3 15.37a6.34 6.34 0 0 0 9.83 5.3 6.27 6.27 0 0 0 2.85-5.28V9.31a8.17 8.17 0 0 0 4.77 1.52V7.39a4.83 4.83 0 0 1-.86-.7z" />
  </svg>
);

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.78.465 3.518 1.35 5.053L2 22l5.084-1.332a9.98 9.98 0 0 0 4.947 1.3h.004c5.535 0 10.031-4.496 10.031-10.031 0-2.678-1.043-5.197-2.937-7.091A10 10 0 0 0 12.031 2zm0 18.337h-.003a8.3 8.3 0 0 1-4.237-1.157l-.304-.18-3.146.825.84-3.067-.198-.315a8.29 8.29 0 0 1-1.272-4.412c0-4.588 3.733-8.322 8.324-8.322 2.223 0 4.313.866 5.885 2.438a8.27 8.27 0 0 1 2.435 5.884c0 4.588-3.733 8.322-8.324 8.322zm4.56-6.223c-.25-.125-1.479-.73-1.708-.813-.23-.083-.396-.125-.563.125-.167.25-.646.813-.792.98-.146.166-.292.187-.542.062s-1.055-.389-2.01-1.24c-.743-.663-1.245-1.482-1.391-1.732-.146-.25-.016-.385.11-.51.112-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.166.042-.312-.02-.437-.063-.125-.563-1.354-.771-1.854-.203-.487-.41-.421-.563-.429l-.48-.008c-.166 0-.437.062-.666.312-.23.25-.875.854-.875 2.083s.896 2.417 1.02 2.583c.125.167 1.764 2.694 4.274 3.777.597.258 1.064.412 1.428.528.6.191 1.146.164 1.578.1.48-.071 1.479-.604 1.688-1.188.208-.583.208-1.083.146-1.188-.063-.104-.23-.166-.48-.291z" />
  </svg>
);

const MapsIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
  </svg>
);

const AirbnbIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12.001 18.275c-1.353-1.697-2.148-3.184-2.413-4.457-.263-1.027-.16-1.848.291-2.465.477-.71 1.188-1.056 2.121-1.056s1.643.345 2.12 1.063c.446.61.558 1.432.286 2.465-.291 1.298-1.085 2.785-2.412 4.458zm9.601 1.14c-.185 1.246-1.034 2.28-2.2 2.783-2.253.98-4.483-.583-6.392-2.704 3.157-3.951 3.74-7.028 2.385-9.018-.795-1.14-1.933-1.695-3.394-1.695-2.944 0-4.563 2.49-3.927 5.382.37 1.565 1.352 3.343 2.917 5.332-.98 1.085-1.91 1.856-2.732 2.333-.636.344-1.245.558-1.828.609-2.679.399-4.778-2.2-3.825-4.88.132-.345.395-.98.845-1.961l.025-.053c1.464-3.178 3.242-6.79 5.285-10.795l.053-.132.58-1.116c.45-.822.635-1.19 1.351-1.643.346-.21.77-.315 1.246-.315.954 0 1.698.558 2.016 1.007.158.239.345.557.582.953l.558 1.089.08.159c2.041 4.004 3.821 7.608 5.279 10.794l.026.025.533 1.22.318.764c.243.613.294 1.222.213 1.858zm1.22-2.39c-.186-.583-.505-1.271-.9-2.094v-.03c-1.889-4.006-3.642-7.608-5.307-10.844l-.111-.163C15.317 1.461 14.468 0 12.001 0c-2.44 0-3.476 1.695-4.535 3.898l-.081.16c-1.669 3.236-3.421 6.843-5.303 10.847v.053l-.559 1.22c-.21.504-.317.768-.345.847C-.172 20.74 2.611 24 5.98 24c.027 0 .132 0 .265-.027h.372c1.75-.213 3.554-1.325 5.384-3.317c1.829 1.989 3.635 3.104 5.382 3.317h.372c.133.027.239.027.265.027c3.37.003 6.152-3.261 4.802-6.975z" />
  </svg>
);

export const socialNetworks: readonly SocialItem[] = [
  {
    id: "instagram",
    label: "Instagram",
    ariaLabel: "Instagram de Casa Muner Melgar",
    href: siteConfig.links.instagram,
    icon: InstagramIcon,
  },
  {
    id: "tiktok",
    label: "TikTok",
    ariaLabel: "TikTok de Casa Muner Melgar",
    href: siteConfig.links.tiktok,
    icon: TikTokIcon,
  },
  {
    id: "facebook",
    label: "Facebook",
    ariaLabel: "Facebook de Casa Muner Melgar",
    href: siteConfig.links.facebook,
    icon: FacebookIcon,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    ariaLabel: "Escríbenos por WhatsApp",
    href: siteConfig.links.whatsapp,
    icon: WhatsAppIcon,
  },
  {
    id: "maps",
    label: "Google Maps",
    ariaLabel: "Ver ubicación en Google Maps",
    href: siteConfig.links.maps,
    icon: MapsIcon,
  },
  {
    id: "airbnb",
    label: "Airbnb",
    ariaLabel: "Perfil de Casa Muner Melgar en Airbnb",
    href: siteConfig.links.airbnb,
    icon: AirbnbIcon,
  },
] as const;

type SocialIconsProps = {
  className?: string;
  iconSize?: number;
  platforms?: readonly SocialPlatform[];
  showLabels?: boolean;
};

/**
 * Componente de enlaces a redes sociales y canales de contacto con iconos vectoriales SVG.
 * Incluye clases semánticas (.social-icons, .social-icon-btn) y utilidades de Tailwind
 * (flex, items-center, gap-3, etc.) para máxima flexibilidad de diseño.
 */
export function SocialIcons({
  className = "",
  iconSize = 20,
  platforms = ["instagram", "tiktok", "facebook", "whatsapp", "maps", "airbnb"],
  showLabels = false,
}: SocialIconsProps) {
  const items = socialNetworks.filter((item) => platforms.includes(item.id));

  return (
    <ul
      className={`social-icons flex items-center flex-wrap gap-3 ${className}`.trim()}
      aria-label="Redes sociales y canales de contacto de Casa Muner Melgar"
    >
      {items.map(({ id, label, ariaLabel, href, icon: IconComponent }) => (
        <li key={id} className="social-icons-item">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            title={ariaLabel}
            className={`social-icon-btn social-icon-btn--${id} inline-flex items-center justify-center rounded-full text-white transition-all`}
          >
            <IconComponent size={iconSize} />
            {showLabels && <span className="social-icon-label ml-2">{label}</span>}
            <span className="sr-only">{ariaLabel}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
