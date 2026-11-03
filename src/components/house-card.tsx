import Image from "next/image";
import Link from "next/link";
import type { House } from "@/data/site-content";

export function HouseCard({ house }: { house: House }) {
  return (
    <article className="house-card">
      <Link
        className="house-card-media"
        href={house.slug}
        aria-label={`Ver la ficha de ${house.name}`}
      >
        <Image
          src={house.cardImage.src}
          width={house.cardImage.width}
          height={house.cardImage.height}
          alt=""
          sizes="(max-width: 760px) 100vw, 45vw"
        />
      </Link>
      <div className="house-card-content">
        <p className="eyebrow">{house.capacity}</p>
        <h3>
          <Link href={house.slug}>{house.name}</Link>
        </h3>
        <p className="house-description">{house.description}</p>
        <p className="house-room-count">
          {house.rooms} <span aria-hidden="true">·</span> {house.bathrooms}
        </p>
        <ul className="amenity-list" aria-label={`Características de ${house.name}`}>
          {house.amenities.map((amenity) => (
            <li key={amenity}>{amenity}</li>
          ))}
        </ul>
        <div className="house-card-actions">
          <Link className="text-link" href={house.slug}>
            Ver detalles de la casa <span aria-hidden="true">→</span>
          </Link>
          <Link className="text-link" href="/contacto">
            Contactar para reservar <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
