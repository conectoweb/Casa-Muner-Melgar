import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      // La URL pública de las reglas es /reglas-casas; se conserva la
      // variante sin "s" por compatibilidad con enlaces anteriores.
      {
        source: "/reglas-casa",
        destination: "/reglas-casas",
        permanent: true,
      },
      // Rutas antiguas del sitio anterior que aparecen en artículos.
      { source: "/home", destination: "/", permanent: true },
      {
        source: "/casa-muner-grande",
        destination: "/casa-muner-grande-melgar",
        permanent: true,
      },
      {
        source: "/casa-muner-pequena",
        destination: "/casa-muner-pequena-melgar",
        permanent: true,
      },
      // Atajos de contacto usados en el sitio anterior.
      {
        source: "/whatsapp",
        destination:
          "https://api.whatsapp.com/message/XXRDZTTD6TIGE1?autoload=1&app_absent=0",
        permanent: true,
      },
      {
        source: "/maps",
        destination: "https://maps.app.goo.gl/W4jpGrzZKMHh6niEA",
        permanent: true,
      },
      {
        source: "/airbnb",
        destination:
          "https://www.airbnb.com.co/rooms/46904635?source_impression_id=p3_1792461100_P3aLblXST4EZc5EY",
        permanent: true,
      },
      // Contact us alias
      {
        source: "/contact-us",
        destination: "/contacto",
        permanent: true,
      },
      // Registro de huéspedes aliases
      {
        source: "/registro",
        destination: "/registro-ingreso",
        permanent: true,
      },
      {
        source: "/registro-huespedes",
        destination: "/registro-ingreso",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
