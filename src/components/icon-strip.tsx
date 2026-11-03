import Image from "next/image";

type IconStripProps = {
  items: readonly string[];
  label?: string;
};

const iconMap: readonly { pattern: RegExp; src: string }[] = [
  { pattern: /wi-?fi/i, src: "/images/iconos/icono-wifi.png" },
  { pattern: /parqueadero/i, src: "/images/iconos/icono-parqueadero.png" },
  { pattern: /bbq/i, src: "/images/iconos/icono-bbq.png" },
  { pattern: /piscina/i, src: "/images/iconos/icono-piscina.png" },
];

function iconFor(item: string): string | null {
  return iconMap.find(({ pattern }) => pattern.test(item))?.src ?? null;
}

/**
 * Franja de comodidades con su ícono. Las comodidades sin ícono propio
 * muestran un marcador neutro.
 */
export function IconStrip({ items, label }: IconStripProps) {
  return (
    <ul className="icon-strip" aria-label={label}>
      {items.map((item) => {
        const src = iconFor(item);
        return (
          <li key={item} className="icon-strip-item">
            {src ? (
              <Image
                className="icon-strip-img"
                src={src}
                width={150}
                height={150}
                alt=""
                aria-hidden="true"
              />
            ) : (
              <span className="icon-placeholder" aria-hidden="true" />
            )}
            <span className="icon-strip-label">{item}</span>
          </li>
        );
      })}
    </ul>
  );
}
