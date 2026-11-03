"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/casas/casa-grande/casa-muner-grande-melgar-02.png",
    alt: "Casa Grande de Casa Muner Melgar: fachada con piscina privada y jardín",
    tag: "Casa Grande · Hasta 20 personas",
    title: "Piscina Privada y Espacios Amplios",
  },
  {
    src: "/images/casas/casa-grande/casa-muner-grande-melgar-09.png",
    alt: "Piscina privada de Casa Grande al atardecer con vista al lago",
    tag: "Casa Grande · Atardecer",
    title: "Descanso Frente a la Naturaleza",
  },
  {
    src: "/images/casas/casa-pequena/casa-muner-pequena-melgar-01.png",
    alt: "Casa Pequeña de Casa Muner Melgar con piscina privada y terraza",
    tag: "Casa Pequeña · Hasta 6 personas",
    title: "Acogedora y 100% Independiente",
  },
  {
    src: "/images/zonas-comunes/zonas-comunes-casa-muner-melgar-01.png",
    alt: "Condominio Campestre El Ruby Country Club: piscinas y senderos",
    tag: "Condominio El Ruby · Melgar",
    title: "Vigilancia 24h y Zonas Verdes",
  },
  {
    src: "/images/casas/casa-grande/casa-muner-grande-melgar-01.png",
    alt: "Sala y cocina de concepto abierto en Casa Muner",
    tag: "Casa Grande · Interior",
    title: "Totalmente Equipada para Familias",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  function prevSlide() {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }

  function nextSlide() {
    setCurrent((prev) => (prev + 1) % slides.length);
  }

  return (
    <div
      className="hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-roledescription="carrusel"
      aria-label="Fotografías destacadas de Casa Muner Melgar"
    >
      <div className="hero-slider-track">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.src}
              className={`hero-slide ${isActive ? "hero-slide--active" : ""}`}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.src}
                width={720}
                height={620}
                alt={slide.alt}
                className="hero-slide-image"
                priority={index === 0}
                sizes="(max-width: 900px) 100vw, 45vw"
              />
              <div className="hero-slide-overlay">
                <span className="hero-slide-tag">{slide.tag}</span>
                <span className="hero-slide-title">{slide.title}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Flechas de control */}
      <button
        type="button"
        className="hero-slider-arrow hero-slider-arrow--prev"
        onClick={prevSlide}
        aria-label="Foto anterior"
      >
        ‹
      </button>
      <button
        type="button"
        className="hero-slider-arrow hero-slider-arrow--next"
        onClick={nextSlide}
        aria-label="Siguiente foto"
      >
        ›
      </button>

      {/* Indicadores / Puntos */}
      <div className="hero-slider-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`hero-slider-dot ${idx === current ? "hero-slider-dot--active" : ""}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Ir a foto ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

