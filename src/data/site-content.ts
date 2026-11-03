import type { ContentSection, ImageData } from "@/data/content-types";

export const siteConfig = {
  name: "Casa Muner Melgar",
  fullName: "Casa Muner Melgar",
  location: "Melgar, Tolima",
  phone: "+57 314 597 3094",
  phoneHref: "tel:+573145973094",
  rnt: "112000",
  address: {
    condominium: "Condominio Campestre El Ruby Country Club",
    house: "Casa D2",
    route: "Km 5 vía de Melgar a Carmen de Apicalá",
    city: "Melgar",
    department: "Tolima",
    full: "CONDOMINIO CAMPESTRE EL RUBY COUNTRY CLUB CASA D2, KM 5 VIA DE MELGAR A CARMEN DE APICALA, Melgar, Tolima",
    reference: "A solo 15 minutos de Melgar en carro",
  },
  checkIn: "De 2:00 p. m. a 2:00 a. m.",
  checkOut: "Máximo a las 11:00 a. m.",
  links: {
    whatsapp:
      "https://api.whatsapp.com/message/XXRDZTTD6TIGE1?autoload=1&app_absent=0",
    airbnb:
      "https://www.airbnb.com.co/users/profile/1463565954413063985?previous_page_name=PdpHomeMarketplace",
    airbnbCasaGrande:
      "https://www.airbnb.com.co/rooms/46904635?source_impression_id=p3_1792461100_P3aLblXST4EZc5EY",
    airbnbCasaPequena:
      "https://www.airbnb.com.co/rooms/1495926063762140378?source_impression_id=p3_1793664025_P3njzyt2jXd4qCyv",
    airbnbHost:
      "https://www.airbnb.com.co/users/profile/1463565954413063985?previous_page_name=PdpHomeMarketplace",
    maps: "https://maps.app.goo.gl/W4jpGrzZKMHh6niEA",
    instagram: "https://www.instagram.com/casamuner",
    tiktok: "https://www.tiktok.com/@casamuner",
    facebook: "https://www.facebook.com/casamuner",
  },
} as const;

/**
 * Información compartida por las dos casas durante la estadía.
 * Contenido migrado de las fichas publicadas en muner.com.co.
 */
const sharedStaySections: ContentSection[] = [
  {
    id: "piscinas",
    title: "Piscinas",
    blocks: [
      {
        type: "paragraph",
        text: "La casa tiene una **piscina privada** que puedes usar las 24 horas. También puedes usar la **piscina grande del condominio**, ubicada a solo 30 metros (tiene horario de 8:00 a. m. a 7:00 p. m. y se deben cumplir las normas del condominio).",
      },
      {
        type: "list",
        style: "bullets",
        items: [
          "Para usar la piscina del condominio debes usar **gorro para el cabello**.",
          "No puedes consumir bebidas ni alimentos dentro del área de la piscina, pero sí en el kiosco que está justo al lado.",
          "Está prohibido el ingreso de mascotas a las piscinas.",
          "Los niños siempre deben estar acompañados de un adulto responsable.",
          "No se permiten clavados, acrobacias ni objetos punzantes en ninguna de las piscinas.",
        ],
      },
    ],
  },
  {
    id: "cocina-y-equipamiento",
    title: "Cocina y equipamiento",
    blocks: [
      {
        type: "paragraph",
        text: "La cocina está equipada con los implementos básicos necesarios: ollas, platos, cubiertos, vasos, pocillos, un colador, cuchillos, olletas, jarra, licuadora, estufa y nevera con congelador.",
      },
      {
        type: "paragraph",
        text: "Contamos con internet Wi-Fi, equipo de sonido que funciona con entrada auxiliar y USB, y TV para conectarte por HDMI (debes llevar tus propios cables). Todos los ambientes de la casa tienen **ventilador de techo**; la casa **no cuenta con aire acondicionado**.",
      },
      {
        type: "paragraph",
        text: "Si vas a usar la zona BBQ, lleva carbón o leña.",
      },
    ],
  },
  {
    id: "que-incluimos",
    title: "Qué incluimos y qué debes traer",
    blocks: [
      {
        type: "paragraph",
        text: "Nosotros te entregamos en la casa: **sábanas, toalla de manos, papel higiénico, jabón de lavar loza y jabón de cuerpo y manos**.",
      },
      {
        type: "note",
        text: "No entregamos toallas para el cuerpo ni champú. Es obligatorio llevar repelente y protector solar, también implementos de aseo personal y toalla para el cuerpo.",
      },
      {
        type: "paragraph",
        text: "El agua no es potable, pero sí es apta para cocinar. Los baños tienen ducha de agua fría, lavamanos e inodoro.",
      },
    ],
  },
  {
    id: "mascotas",
    title: "Mascotas",
    blocks: [
      {
        type: "paragraph",
        text: "Se admiten mascotas, pero se debe cuidar que no dañen los objetos de la casa y **no las puedes ingresar a las piscinas**. Deben incluirse en la reserva como huéspedes.",
      },
    ],
  },
  {
    id: "seguridad-y-entorno",
    title: "Seguridad y entorno",
    blocks: [
      {
        type: "paragraph",
        text: "La casa es independiente: no se comparte con nadie, y la entrada y las zonas verdes también son privadas. El condominio es seguro, tiene **vigilancia 24 horas**, un hermoso lago y zonas verdes muy agradables. Todas las vías son pavimentadas hasta la puerta de la casa.",
      },
      {
        type: "paragraph",
        text: "La casa está ubicada en un ambiente rural, rodeada de naturaleza, por lo que encontrarás animales terrestres y aéreos (insectos, aves, perros, gatos, etc.).",
      },
      {
        type: "paragraph",
        text: "Tenemos un **seguro para nuestros huéspedes** en caso de accidentes mientras disfrutan la estadía en la casa.",
      },
    ],
  },
  {
    id: "convivencia",
    title: "Convivencia y restricciones",
    blocks: [
      {
        type: "list",
        style: "bullets",
        items: [
          "El condominio maneja una política de ruido: se prohíben ruidos altos a partir de las **11:00 p. m.** y se recomienda volumen moderado durante el día.",
          "Se pueden hacer reuniones dentro de la casa y escuchar música dentro de la casa (lee las [reglas de la casa](/reglas-casas)).",
          "**No se permite el ingreso de vehículos con placa blanca o de servicio público** al condominio, sin excepción.",
          "No se admite el ingreso de visitas no registradas en la reserva.",
        ],
      },
    ],
  },
];

export const houses = [
  {
    id: "casa-grande",
    slug: "/casa-muner-grande-melgar",
    name: "Casa Grande",
    pageTitle: "Casa Quinta en Melgar con Piscina Privada",
    capacity: "Hasta 20 personas",
    maxGuests: 20,
    rooms: "5 habitaciones",
    bathrooms: "3 baños",
    parking: "3 parqueaderos privados (gratuito)",
    wifi: "Wi-Fi en toda la casa (110 Mbps)",
    amenities: [
      "2 piscinas",
      "Parqueaderos",
      "Wi-Fi",
      "Cocina equipada",
      "Zona BBQ",
      "Zonas verdes",
    ],
    description:
      "Una casa amplia para compartir y disfrutar en grupo en Melgar.",
    highlights: [
      "Capacidad máxima 20 personas",
      "Wi-Fi en toda la casa (110 Mbps)",
      "2 piscinas",
      "3 parqueaderos privados (gratuito)",
      "5 habitaciones y 3 baños",
      "BBQ y espacios verdes",
      "Vista al lago",
      "Vigilancia 24 horas",
    ],
    characteristics: [
      "5 habitaciones / capacidad máxima: 20 personas",
      "Piscina privada tipo tela (no se permiten clavados ni objetos que la puedan dañar)",
      "Cocina equipada con todos los implementos básicos",
      "3 baños con ducha de agua fría",
      "Parqueadero privado para 3 carros",
      "Llegada autónoma con cerradura de teclado",
      "Check-in: 2:00 p. m. a 2:00 a. m. / Check-out: 11:00 a. m.",
    ],
    intro:
      "Casa en condominio de lujo estrato 5, ubicada a 15 minutos de Melgar en carro (vía de Melgar a Carmen de Apicalá). Casa quinta en Melgar con piscina privada para hasta 20 personas.",
    stayDescription:
      "Puedes descansar, hacer un BBQ, escuchar música, trabajar, bailar, tomar, nadar y disfrutar del condominio.",
    parkingNote:
      "La casa cuenta con un parqueadero privado para 3 carros y, de no ser suficiente, el condominio cuenta con bahías vigiladas donde se pueden dejar los vehículos sin problemas.",
    bookingChannels: ["whatsapp", "airbnb"] as readonly ("whatsapp" | "airbnb")[],
    airbnbUrl:
      "https://www.airbnb.com.co/rooms/46904635?source_impression_id=p3_1792461100_P3aLblXST4EZc5EY",
    cardImage: {
      src: "/images/casas/casa-grande/casa-muner-grande-melgar-02.png",
      width: 700,
      height: 600,
      alt: "Fachada de la Casa Grande de Casa Muner Melgar con piscina privada y jardín",
    },
    gallery: [
      {
        src: "/images/casas/casa-grande/casa-muner-grande-melgar-01.png",
        width: 700,
        height: 600,
        alt: "Sala, comedor y cocina de concepto abierto de la Casa Grande de Casa Muner Melgar",
      },
      {
        src: "/images/casas/casa-grande/casa-muner-grande-melgar-02.png",
        width: 700,
        height: 600,
        alt: "Fachada de la Casa Grande con piscina privada y jardín",
      },
      {
        src: "/images/casas/casa-grande/casa-muner-grande-melgar-03.png",
        width: 700,
        height: 600,
        alt: "Sala de la Casa Grande con sofás grises y televisión",
      },
      {
        src: "/images/casas/casa-grande/casa-muner-grande-melgar-04.png",
        width: 700,
        height: 600,
        alt: "Escalera y comedor de la Casa Grande de Casa Muner Melgar",
      },
      {
        src: "/images/casas/casa-grande/casa-muner-grande-melgar-05.png",
        width: 700,
        height: 600,
        alt: "Baño con ducha de la Casa Grande de Casa Muner Melgar",
      },
      {
        src: "/images/casas/casa-grande/casa-muner-grande-melgar-06.png",
        width: 700,
        height: 600,
        alt: "Habitación con cama doble en la Casa Grande de Casa Muner Melgar",
      },
      {
        src: "/images/casas/casa-grande/casa-muner-grande-melgar-07.png",
        width: 700,
        height: 600,
        alt: "Baño de la Casa Grande de Casa Muner Melgar",
      },
      {
        src: "/images/casas/casa-grande/casa-muner-grande-melgar-08.png",
        width: 700,
        height: 600,
        alt: "Sala de la Casa Grande con sofá, televisión y hamaca",
      },
      {
        src: "/images/casas/casa-grande/casa-muner-grande-melgar-09.png",
        width: 700,
        height: 600,
        alt: "Piscina de la Casa Grande al atardecer con vista al lago",
      },
      {
        src: "/images/casas/casa-grande/casa-muner-grande-melgar-10.png",
        width: 700,
        height: 600,
        alt: "Habitación con tres camas en la Casa Grande de Casa Muner Melgar",
      },
      {
        src: "/images/casas/casa-grande/casa-muner-grande-melgar-11.png",
        width: 700,
        height: 600,
        alt: "Vista amplia del interior de la Casa Grande: escalera, comedor y hamaca",
      },
      {
        src: "/images/casas/casa-grande/casa-muner-grande-melgar-12.png",
        width: 700,
        height: 600,
        alt: "Entrada principal interior de la Casa Grande de Casa Muner Melgar",
      },
      {
        src: "/images/casas/casa-grande/casa-muner-grande-melgar-13.jpg",
        width: 1008,
        height: 756,
        alt: "Fachada de dos pisos de la Casa Grande vista desde el portón de madera",
      },
      {
        src: "/images/casas/casa-grande/casa-muner-grande-melgar-14.jpg",
        width: 1008,
        height: 756,
        alt: "Puerta de entrada con letrero de la Casa Grande de Casa Muner Melgar",
      },
      {
        src: "/images/casas/casa-grande/casa-muner-grande-melgar-15.jpg",
        width: 1008,
        height: 756,
        alt: "Piscina y camino de piedra en el jardín de la Casa Grande",
      },
    ] as readonly ImageData[],
    staySections: sharedStaySections,
  },
  {
    id: "casa-pequena",
    slug: "/casa-muner-pequena-melgar",
    name: "Casa Pequeña",
    pageTitle: "Alquiler de Casa con Piscina en Melgar",
    capacity: "Hasta 6 personas",
    maxGuests: 6,
    rooms: "2 habitaciones",
    bathrooms: "1 baño",
    parking: "2 parqueaderos privados (gratuito)",
    wifi: "Wi-Fi en toda la casa",
    amenities: [
      "2 piscinas",
      "Parqueaderos",
      "Wi-Fi",
      "Cocina equipada",
      "Zona BBQ",
    ],
    description:
      "Una opción acogedora para disfrutar Melgar en familia o con amigos.",
    highlights: [
      "Capacidad máxima 6 personas",
      "Wi-Fi en toda la casa",
      "2 piscinas",
      "2 parqueaderos privados (gratuito)",
      "2 habitaciones y 1 baño",
      "BBQ",
      "Vigilancia 24 horas",
    ],
    characteristics: [
      "2 habitaciones / capacidad máxima: 6 personas",
      "Piscina privada tipo tela (no se permiten clavados ni objetos que la puedan dañar)",
      "Cocina equipada con implementos básicos",
      "1 baño con ducha de agua fría",
      "Parqueadero privado para 2 carros",
      "Llegada autónoma con cerradura de teclado",
      "Check-in: 2:00 p. m. a 2:00 a. m. / Check-out: 11:00 a. m.",
    ],
    intro:
      "Casa en condominio de lujo estrato 5, ubicada a 15 minutos de Melgar en carro (vía de Melgar a Carmen de Apicalá). Casa quinta en Melgar con piscina privada para hasta 6 personas.",
    stayDescription:
      "Puedes descansar, hacer un BBQ, escuchar música, trabajar, bailar, tomar, nadar y disfrutar del condominio.",
    parkingNote:
      "La casa cuenta con un parqueadero privado para 2 carros y, de no ser suficiente, el condominio cuenta con bahías vigiladas donde se pueden dejar los vehículos sin problemas.",
    bookingChannels: ["whatsapp", "airbnb"] as readonly ("whatsapp" | "airbnb")[],
    airbnbUrl:
      "https://www.airbnb.com.co/rooms/1495926063762140378?source_impression_id=p3_1793664025_P3njzyt2jXd4qCyv",
    cardImage: {
      src: "/images/casas/casa-pequena/casa-muner-pequena-melgar-01.png",
      width: 700,
      height: 600,
      alt: "Fachada de la Casa Pequeña de Casa Muner Melgar con piscina privada",
    },
    gallery: [
      {
        src: "/images/casas/casa-pequena/casa-muner-pequena-melgar-01.png",
        width: 700,
        height: 600,
        alt: "Fachada de la Casa Pequeña de Casa Muner Melgar con piscina privada",
      },
      {
        src: "/images/casas/casa-pequena/casa-muner-pequena-melgar-02.png",
        width: 700,
        height: 600,
        alt: "Casa Pequeña de Casa Muner Melgar: fachada y piscina desde el jardín",
      },
      {
        src: "/images/casas/casa-pequena/casa-muner-pequena-melgar-03.png",
        width: 1000,
        height: 1000,
        alt: "Fachada frontal de la Casa Pequeña con piscina y parqueadero",
      },
      {
        src: "/images/casas/casa-pequena/casa-muner-pequena-melgar-04.png",
        width: 700,
        height: 600,
        alt: "Sala y comedor con televisión de la Casa Pequeña",
      },
      {
        src: "/images/casas/casa-pequena/casa-muner-pequena-melgar-05.png",
        width: 700,
        height: 600,
        alt: "Portón de madera con letrero de la Casa Pequeña Muner",
      },
      {
        src: "/images/casas/casa-pequena/casa-muner-pequena-melgar-06.png",
        width: 700,
        height: 600,
        alt: "Cocina de la Casa Pequeña con nevera",
      },
      {
        src: "/images/casas/casa-pequena/casa-muner-pequena-melgar-07.png",
        width: 700,
        height: 600,
        alt: "Cocina equipada de la Casa Pequeña con estufa y utensilios",
      },
      {
        src: "/images/casas/casa-pequena/casa-muner-pequena-melgar-08.png",
        width: 700,
        height: 600,
        alt: "Vista de la cocina hacia el comedor de la Casa Pequeña",
      },
      {
        src: "/images/casas/casa-pequena/casa-muner-pequena-melgar-09.png",
        width: 700,
        height: 600,
        alt: "Comedor, cocina y televisión de la Casa Pequeña",
      },
      {
        src: "/images/casas/casa-pequena/casa-muner-pequena-melgar-10.png",
        width: 700,
        height: 600,
        alt: "Comedor con ventilador de techo de la Casa Pequeña",
      },
      {
        src: "/images/casas/casa-pequena/casa-muner-pequena-melgar-11.png",
        width: 700,
        height: 600,
        alt: "Comedor y sala de la Casa Pequeña de Casa Muner Melgar",
      },
      {
        src: "/images/casas/casa-pequena/casa-muner-pequena-melgar-12.png",
        width: 700,
        height: 600,
        alt: "Baño con ducha de la Casa Pequeña",
      },
      {
        src: "/images/casas/casa-pequena/casa-muner-pequena-melgar-13.png",
        width: 700,
        height: 600,
        alt: "Fachada lateral de la Casa Pequeña con piscina y jardín",
      },
      {
        src: "/images/casas/casa-pequena/casa-muner-pequena-melgar-14.png",
        width: 700,
        height: 600,
        alt: "Jardín con portón de madera y piscina de la Casa Pequeña",
      },
      {
        src: "/images/casas/casa-pequena/casa-muner-pequena-melgar-15.png",
        width: 700,
        height: 600,
        alt: "Vista del baño hacia el comedor de la Casa Pequeña",
      },
      {
        src: "/images/casas/casa-pequena/casa-muner-pequena-melgar-16.png",
        width: 700,
        height: 600,
        alt: "Habitación con camarote y cama doble de la Casa Pequeña",
      },
      {
        src: "/images/casas/casa-pequena/casa-muner-pequena-melgar-17.png",
        width: 700,
        height: 600,
        alt: "Habitación con cama doble y decoración en macramé de la Casa Pequeña",
      },
      {
        src: "/images/casas/casa-pequena/casa-muner-pequena-melgar-18.png",
        width: 700,
        height: 600,
        alt: "Vista de la habitación con cama doble hacia la cocina de la Casa Pequeña",
      },
      {
        src: "/images/casas/casa-pequena/casa-muner-pequena-melgar-19.png",
        width: 700,
        height: 600,
        alt: "Habitación con camarote y cortinas negras de la Casa Pequeña",
      },
      {
        src: "/images/casas/casa-pequena/casa-muner-pequena-melgar-20.jpg",
        width: 1008,
        height: 756,
        alt: "Piscina con borde de mosaico azul de la Casa Pequeña",
      },
      {
        src: "/images/casas/casa-pequena/casa-muner-pequena-melgar-21.jpg",
        width: 1008,
        height: 756,
        alt: "Vista aérea del tejado de la Casa Pequeña de Casa Muner Melgar",
      },
      {
        src: "/images/casas/casa-pequena/casa-muner-pequena-melgar-22.jpg",
        width: 4032,
        height: 3024,
        alt: "Smart TV con aplicaciones de la Casa Pequeña",
      },
      {
        src: "/images/casas/casa-pequena/casa-muner-pequena-melgar-23.jpg",
        width: 4032,
        height: 3024,
        alt: "Comedor y televisión con vista a la piscina de la Casa Pequeña",
      },
    ] as readonly ImageData[],
    staySections: sharedStaySections,
  },
] as const;

export type House = (typeof houses)[number];

/** Fotografías de las zonas comunes del condominio El Ruby Country Club. */
export const commonAreasImages: readonly ImageData[] = [
  {
    src: "/images/zonas-comunes/zonas-comunes-casa-muner-melgar-01.png",
    width: 700,
    height: 600,
    alt: "Kiosco con palmeras y parqueadero del condominio El Ruby Country Club",
  },
  {
    src: "/images/zonas-comunes/zonas-comunes-casa-muner-melgar-02.png",
    width: 700,
    height: 600,
    alt: "Portería del condominio El Ruby Country Club en Melgar",
  },
  {
    src: "/images/zonas-comunes/zonas-comunes-casa-muner-melgar-03.png",
    width: 700,
    height: 600,
    alt: "Calles internas con jardines y palmeras del condominio El Ruby",
  },
  {
    src: "/images/zonas-comunes/zonas-comunes-casa-muner-melgar-04.png",
    width: 700,
    height: 600,
    alt: "Vías internas pavimentadas del condominio El Ruby Country Club",
  },
  {
    src: "/images/zonas-comunes/zonas-comunes-casa-muner-melgar-05.png",
    width: 700,
    height: 600,
    alt: "Lago del condominio El Ruby Country Club",
  },
  {
    src: "/images/zonas-comunes/zonas-comunes-casa-muner-melgar-06.png",
    width: 700,
    height: 600,
    alt: "Jardines y palmeras del condominio El Ruby",
  },
  {
    src: "/images/zonas-comunes/zonas-comunes-casa-muner-melgar-07.png",
    width: 700,
    height: 600,
    alt: "Zonas verdes del condominio El Ruby Country Club",
  },
  {
    src: "/images/zonas-comunes/zonas-comunes-casa-muner-melgar-08.png",
    width: 700,
    height: 600,
    alt: "Árboles y zonas verdes del condominio El Ruby",
  },
  {
    src: "/images/zonas-comunes/zonas-comunes-casa-muner-melgar-09.png",
    width: 700,
    height: 600,
    alt: "Zonas verdes con árboles en el condominio El Ruby Country Club",
  },
  {
    src: "/images/zonas-comunes/zonas-comunes-casa-muner-melgar-10.png",
    width: 700,
    height: 600,
    alt: "Piscina del condominio El Ruby con kiosco de palmeras",
  },
  {
    src: "/images/zonas-comunes/zonas-comunes-casa-muner-melgar-11.png",
    width: 700,
    height: 600,
    alt: "Sendero peatonal entre árboles del condominio El Ruby",
  },
  {
    src: "/images/zonas-comunes/zonas-comunes-casa-muner-melgar-12.png",
    width: 700,
    height: 600,
    alt: "Casas y jardines del condominio El Ruby Country Club",
  },
  {
    src: "/images/zonas-comunes/zonas-comunes-casa-muner-melgar-13.png",
    width: 700,
    height: 600,
    alt: "Salón social del condominio con mesa de billar y ping pong",
  },
  {
    src: "/images/zonas-comunes/zonas-comunes-casa-muner-melgar-14.png",
    width: 700,
    height: 600,
    alt: "Parque con árboles y bancas en el condominio El Ruby",
  },
  {
    src: "/images/zonas-comunes/zonas-comunes-casa-muner-melgar-15.png",
    width: 700,
    height: 600,
    alt: "Piscinas de adultos y niños del condominio El Ruby Country Club",
  },
];

/** Fotografía de la anfitriona, Myriam Pineda. */
export const teamPhoto: ImageData = {
  src: "/images/equipo/myriam-pineda-casa-muner-melgar.png",
  width: 750,
  height: 750,
  alt: "Myriam Pineda, anfitriona de Casa Muner Melgar",
};
