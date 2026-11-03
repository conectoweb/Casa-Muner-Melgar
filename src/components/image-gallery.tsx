"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { ImageData } from "@/data/content-types";

type ImageGalleryProps = {
  images: readonly ImageData[];
  label: string;
};

export function ImageGallery({ images, label }: ImageGalleryProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filteredImages = images.filter((img) => {
    if (filter === "all") return true;
    const text = (img.alt + " " + img.src).toLowerCase();
    if (filter === "piscina") {
      return text.includes("piscina") || text.includes("jardín") || text.includes("fachada") || text.includes("exterior");
    }
    if (filter === "habitacion") {
      return text.includes("habitación") || text.includes("cama") || text.includes("camarote") || text.includes("baño");
    }
    if (filter === "interior") {
      return text.includes("sala") || text.includes("cocina") || text.includes("comedor") || text.includes("interior") || text.includes("tv");
    }
    return true;
  });

  const closeModal = useCallback(() => {
    setSelectedIdx(null);
  }, []);

  const nextPhoto = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! + 1) % images.length);
  }, [selectedIdx, images.length]);

  const prevPhoto = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! - 1 + images.length) % images.length);
  }, [selectedIdx, images.length]);

  useEffect(() => {
    if (selectedIdx === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIdx, closeModal, nextPhoto, prevPhoto]);

  return (
    <div className="interactive-gallery-wrapper">
      {/* Filtros de la Galería */}
      <div className="gallery-filter-bar" role="tablist" aria-label="Filtrar fotos por área">
        <button
          type="button"
          className={`gallery-filter-pill ${filter === "all" ? "gallery-filter-pill--active" : ""}`}
          onClick={() => setFilter("all")}
        >
          📷 Todas ({images.length})
        </button>
        <button
          type="button"
          className={`gallery-filter-pill ${filter === "piscina" ? "gallery-filter-pill--active" : ""}`}
          onClick={() => setFilter("piscina")}
        >
          🏊 Piscina y Exterior
        </button>
        <button
          type="button"
          className={`gallery-filter-pill ${filter === "habitacion" ? "gallery-filter-pill--active" : ""}`}
          onClick={() => setFilter("habitacion")}
        >
          🛏️ Habitaciones y Baños
        </button>
        <button
          type="button"
          className={`gallery-filter-pill ${filter === "interior" ? "gallery-filter-pill--active" : ""}`}
          onClick={() => setFilter("interior")}
        >
          🍳 Sala y Cocina
        </button>
      </div>

      <p className="gallery-counter-hint">
        Haz clic en cualquier imagen para verla en tamaño completo y recorrer la galería.
      </p>

      {/* Grid de imágenes */}
      <ul className="gallery-grid" aria-label={label}>
        {filteredImages.map((image) => {
          const originalIdx = images.findIndex((img) => img.src === image.src);
          return (
            <li key={image.src} className="gallery-item">
              <button
                type="button"
                className="gallery-photo-btn"
                onClick={() => setSelectedIdx(originalIdx)}
                aria-label={`Ver foto: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <span className="gallery-item-overlay">
                  <span className="gallery-item-zoom-icon">🔍 Ampliar foto</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Modal / Lightbox */}
      {selectedIdx !== null && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <div
            className="lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabecera del Lightbox */}
            <div className="lightbox-header">
              <span className="lightbox-counter">
                Foto {selectedIdx + 1} de {images.length}
              </span>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={closeModal}
                aria-label="Cerrar visor de fotos"
              >
                ×
              </button>
            </div>

            {/* Imagen principal */}
            <div className="lightbox-main-view">
              <button
                type="button"
                className="lightbox-nav-btn lightbox-nav-btn--prev"
                onClick={prevPhoto}
                aria-label="Foto anterior"
              >
                ‹
              </button>

              <div className="lightbox-img-wrapper">
                <Image
                  src={images[selectedIdx].src}
                  width={images[selectedIdx].width}
                  height={images[selectedIdx].height}
                  alt={images[selectedIdx].alt}
                  className="lightbox-full-img"
                  priority
                />
              </div>

              <button
                type="button"
                className="lightbox-nav-btn lightbox-nav-btn--next"
                onClick={nextPhoto}
                aria-label="Siguiente foto"
              >
                ›
              </button>
            </div>

            {/* Pie con pie de foto y miniaturas */}
            <div className="lightbox-footer">
              <p className="lightbox-caption">{images[selectedIdx].alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
