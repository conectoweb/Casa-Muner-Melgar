export type NavLink = {
  label: string;
  href: string;
};

export type NavEntry = {
  label: string;
  href?: string;
  children?: NavLink[];
};

/**
 * Estructura de navegación del sitio. La reutilizan el encabezado,
 * el pie de página y la página de mapa del sitio.
 */
export const navigation: NavEntry[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Casas",
    children: [
      { label: "Casa Grande", href: "/casa-muner-grande-melgar" },
      { label: "Casa Pequeña", href: "/casa-muner-pequena-melgar" },
    ],
  },
  {
    label: "Servicios",
    children: [
      {
        label: "Alojamiento corporativo",
        href: "/alojamiento-corporativo-melgar",
      },
      {
        label: "Casa vacacional para cumpleaños",
        href: "/casa-vacacional-cumpleanos-melgar",
      },
      {
        label: "Despedidas de fin de año empresariales",
        href: "/despedidas-fin-de-anho-empresariales-melgar",
      },
    ],
  },
  {
    label: "Nosotros",
    href: "/sobre-nosotros",
    children: [
      { label: "Sobre nosotros", href: "/sobre-nosotros" },
      { label: "Reglas de la casa", href: "/reglas-casas" },
      { label: "Pago seguro", href: "/pago-seguro" },
      { label: "Instructivos", href: "/instructivos-aquiler-casas" },
      { label: "Registro de huéspedes", href: "/registro-ingreso" },
      { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
      { label: "Mapa del sitio", href: "/mapa-del-sitio" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];
