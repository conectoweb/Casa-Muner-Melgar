import type { ContentSection, FaqItem } from "@/data/content-types";

export type Service = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroDescription: string;
  sections: ContentSection[];
  faqs?: FaqItem[];
  ctaTitle: string;
  ctaText: string;
};

/**
 * Páginas de servicio. Describen el alojamiento que ofrece Casa Muner
 * para cada ocasión; Casa Muner no organiza eventos ni ofrece
 * alimentación o decoración.
 */
export const services: Service[] = [
  {
    slug: "/alojamiento-corporativo-melgar",
    title: "Alojamiento Corporativo en Melgar",
    metaTitle: "Alojamiento Corporativo en Melgar",
    metaDescription:
      "Alquiler de casas con piscina privada para equipos de trabajo en Melgar. Dos casas para 6 y 20 personas, con Wi-Fi, zonas comunes y vigilancia 24 horas.",
    heroEyebrow: "Alquiler de casa con piscina privada para equipos de trabajo",
    heroDescription:
      "Dos casas contiguas, comodidad, privacidad y piscina privada en cada propiedad, pensadas para ejecutivos y equipos que buscan confort y descanso.",
    sections: [
      {
        title: "¿Por qué elegir Casa Muner Melgar como alojamiento corporativo en Melgar?",
        blocks: [
          {
            type: "paragraph",
            text: "Nuestro alojamiento corporativo en Melgar combina espacios para trabajo y descanso. Ofrecemos privacidad, Wi-Fi, zonas comunes y piscina privada, lo que convierte al lugar en un entorno agradable después de las jornadas de trabajo.",
          },
        ],
      },
      {
        title: "Alquiler de casas para viajeros corporativos en Melgar",
        blocks: [
          {
            type: "paragraph",
            text: "En [Casa Muner Melgar](/) gestionamos el alquiler de casas para viajeros corporativos en Melgar con dos opciones: una vivienda para 6 personas y otra para 20, ambas con piscina privada, adecuadas para estancias corporativas y retiros empresariales.",
          },
          {
            type: "list",
            style: "bullets",
            items: [
              "**[Casa Pequeña](/casa-muner-pequena-melgar) (hasta 6 personas):** una casa amoblada pensada para ejecutivos individuales o equipos reducidos, con habitaciones, áreas de descanso y piscina privada.",
              "**[Casa Grande](/casa-muner-grande-melgar) (hasta 20 personas):** una casa amplia para equipos grandes, con 5 habitaciones, zona BBQ, zonas verdes y piscina privada.",
            ],
          },
        ],
      },
      {
        title: "Bienestar, seguridad y limpieza de la piscina privada",
        blocks: [
          {
            type: "paragraph",
            text: "En cada alquiler de casas para viajeros corporativos en Melgar cuidamos la limpieza y el mantenimiento: sistemas de filtrado, control de químicos y protocolos de higiene para que la piscina privada sea un espacio seguro y agradable para tu equipo.",
          },
          {
            type: "paragraph",
            text: "Las casas ofrecen una ubicación cómoda, con acceso a vías principales, restaurantes y servicios. Tener piscina privada en la casa facilita actividades sociales sin desplazamientos externos.",
          },
        ],
      },
      {
        title: "¿Quieres saber cómo es la experiencia antes de reservar?",
        blocks: [
          {
            type: "paragraph",
            text: "Nuestros huéspedes ya lo vivieron y han dejado reseñas en [Google Maps](https://maps.app.goo.gl/W4jpGrzZKMHh6niEA). Descubre por qué somos una opción de alquiler vacacional en Melgar con casas cómodas, piscina privada y un ambiente pensado para descansar.",
          },
        ],
      },
    ],
    ctaTitle: "Reserva tu alojamiento corporativo en Melgar",
    ctaText:
      "Solicita disponibilidad y cotización por WhatsApp: elige la Casa Pequeña (6 personas) o la Casa Grande (20 personas) para tu próxima estancia corporativa.",
  },
  {
    slug: "/casa-vacacional-cumpleanos-melgar",
    title: "Casa vacacional para cumpleaños en Melgar con piscina privada",
    metaTitle: "Casa Vacacional para Cumpleaños en Melgar",
    metaDescription:
      "Celebra tu cumpleaños en una casa vacacional en Melgar con piscina privada, zona BBQ y cocina equipada. Alojamiento para grupos de 6 a 20 personas.",
    heroEyebrow: "Alojamiento con piscina privada para celebrar en familia o con amigos",
    heroDescription:
      "Vive tu cumpleaños con comodidad, privacidad y diversión en Casa Muner Melgar: una casa vacacional equipada, perfecta para celebrar y alojarte en un solo lugar.",
    sections: [
      {
        title: "Elige la casa vacacional para cumpleaños que se adapte a tu grupo",
        blocks: [
          {
            type: "list",
            style: "bullets",
            items: [
              "**[Casa Pequeña](/casa-muner-pequena-melgar):** perfecta para grupos pequeños de familiares o amigos. Piscina privada, cocina equipada y área social privada para tu cumpleaños.",
              "**[Casa Grande](/casa-muner-grande-melgar):** ideal para grupos grandes de hasta 20 personas. Piscina privada, zona BBQ, Wi-Fi y espacios amplios para celebrar.",
            ],
          },
        ],
      },
      {
        title: "Tu cumpleaños en una casa vacacional en Melgar, sin complicaciones",
        blocks: [
          {
            type: "paragraph",
            text: "Casa Muner Melgar te ofrece alojamiento vacacional para pasar un fin de semana especial sin preocuparte por traslados. Aquí puedes celebrar con tus invitados, descansar y disfrutar de la piscina privada y la zona BBQ, todo dentro de un condominio cerrado y seguro.",
          },
        ],
      },
      {
        title: "Zonas ideales para disfrutar tu estadía",
        blocks: [
          {
            type: "list",
            style: "bullets",
            items: [
              "Áreas verdes y calles internas iluminadas.",
              "Espacios tranquilos para compartir en familia.",
              "Ambiente seguro con acceso controlado y vigilancia 24/7.",
              "Entorno familiar, limpio y privado.",
            ],
          },
          {
            type: "paragraph",
            text: "Ofrecemos alojamiento vacacional para estadías cortas o largas, ideal para descansar, relajarte o simplemente desconectarte de la ciudad.",
          },
          {
            type: "note",
            text: "¡Importante! Al reservar, aceptas cumplir con todas las [normas establecidas por Casa Muner Melgar](/reglas-casas). Celebrar con responsabilidad garantiza una experiencia agradable para todos.",
          },
        ],
      },
      {
        title: "Por qué elegir nuestra casa vacacional para cumpleaños en Melgar",
        blocks: [
          {
            type: "paragraph",
            text: "Elegir nuestra casa vacacional para cumpleaños en Melgar es celebrar con comodidad y privacidad. Contamos con piscina privada y zona BBQ para disfrutar con tus invitados, un alojamiento amplio y confortable para grupos familiares o de amigos, y cocina equipada con Wi-Fi para que tu estadía sea práctica y conectada. El condominio ofrece vigilancia 24/7 y dispones de parqueadero privado y atención personalizada.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "¿Casa Muner Melgar ofrece planes de alimentación o decoración?",
        answer:
          "No. Ofrecemos únicamente el alojamiento. Puedes traer tu comida o decorar según tus preferencias.",
      },
      {
        question: "¿Las casas tienen piscina privada?",
        answer: "Sí, cada casa cuenta con su propia piscina exclusiva.",
      },
      {
        question: "¿Se pueden celebrar fiestas pequeñas?",
        answer:
          "Sí, siempre que se respeten las normas del condominio.",
      },
      {
        question: "¿Hay seguridad en el condominio?",
        answer: "Sí, contamos con vigilancia 24/7 y control de acceso.",
      },
      {
        question: "¿Cuántas personas pueden hospedarse?",
        answer: "Entre 6 y 20 según la casa que elijas.",
      },
    ],
    ctaTitle: "Cotiza tu casa vacacional para cumpleaños en Melgar",
    ctaText:
      "Consulta disponibilidad, tarifas y capacidad según el número de huéspedes. Te atendemos directamente por WhatsApp.",
  },
  {
    slug: "/despedidas-fin-de-anho-empresariales-melgar",
    title: "Alojamiento ideal para despedidas de fin de año empresariales",
    metaTitle: "Despedidas de Fin de Año Empresariales en Melgar",
    metaDescription:
      "Alojamiento en Melgar para despedidas de fin de año empresariales: casas privadas con piscina para grupos de 6 a 20 personas, en condominio cerrado con vigilancia.",
    heroEyebrow: "Alojamiento con piscina privada para el cierre de año de tu empresa",
    heroDescription:
      "El fin de año es el momento perfecto para agradecer a tu equipo por su esfuerzo y compartir momentos fuera de la rutina laboral. En Casa Muner Melgar ofrecemos alojamientos privados con piscina y zonas de descanso, en un ambiente de confort, privacidad y tranquilidad.",
    sections: [
      {
        title: "Alojamiento para grupos empresariales",
        blocks: [
          {
            type: "paragraph",
            text: "Nos especializamos en hospedaje para grupos corporativos que buscan desconectarse, descansar y fortalecer la unión del equipo en un entorno natural. Disponemos de casas vacacionales amplias y equipadas:",
          },
          {
            type: "list",
            style: "bullets",
            items: [
              "**[Casa Grande](/casa-muner-grande-melgar):** para equipos de hasta 20 personas, con piscina privada, zona BBQ y amplias áreas sociales.",
              "**[Casa Pequeña](/casa-muner-pequena-melgar):** para grupos más reducidos de hasta 6 personas, con piscina privada y Wi-Fi.",
            ],
          },
          {
            type: "paragraph",
            text: "Ambas propiedades están dentro de un condominio cerrado con vigilancia 24 horas, parqueadero privado y espacios rodeados de naturaleza.",
          },
        ],
      },
      {
        title: "Disfruta de un descanso corporativo sin estrés",
        blocks: [
          {
            type: "paragraph",
            text: "Aunque **no organizamos eventos empresariales**, nuestros huéspedes disfrutan de:",
          },
          {
            type: "list",
            style: "bullets",
            items: [
              "Piscina privada disponible las 24 horas.",
              "Zonas verdes y BBQ para compartir en grupo.",
              "Wi-Fi y espacios cómodos para descansar o trabajar.",
              "Seguridad, privacidad y fácil acceso a los principales puntos de Melgar.",
              "Clima cálido y ambiente relajado durante todo el año.",
            ],
          },
          {
            type: "note",
            text: "¡Importante! Al reservar, aceptas cumplir con todas las [normas establecidas por Casa Muner Melgar](/reglas-casas). Celebrar con responsabilidad garantiza una experiencia agradable para todos.",
          },
        ],
      },
      {
        title: "Vive una despedida de año diferente",
        blocks: [
          {
            type: "paragraph",
            text: "Cambia los salones de eventos por un ambiente natural y relajante. En Casa Muner Melgar, tu empresa puede descansar y compartir sin preocuparse por nada más.",
          },
        ],
      },
      {
        title: "Beneficios de elegir Casa Muner Melgar",
        blocks: [
          {
            type: "list",
            style: "bullets",
            items: [
              "Alojamiento exclusivo en condominio cerrado.",
              "Piscina privada y zonas sociales amplias.",
              "Atención directa, sin intermediarios.",
              "Ideal para retiros empresariales, integraciones o cierres de año.",
              "Tarifas especiales para reservas anticipadas: consúltalas por WhatsApp.",
            ],
          },
          {
            type: "paragraph",
            text: "Puedes hacer tu reserva por WhatsApp para atención personalizada. Recomendamos reservar con anticipación, ya que las fechas de diciembre y enero se agotan rápidamente.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "¿Casa Muner organiza eventos de fin de año para empresas?",
        answer:
          "No organizamos eventos, pero ofrecemos alojamiento ideal para despedidas empresariales. Nuestros espacios están diseñados para que cada grupo pueda realizar sus propias actividades de integración con total privacidad.",
      },
      {
        question: "¿Puedo llevar mi propio catering o decoración para la despedida de fin de año?",
        answer:
          "Sí. Los huéspedes pueden llevar su propio servicio de alimentación, decoración o ambientación ligera, siempre respetando las normas del condominio y los horarios de convivencia.",
      },
      {
        question: "¿Qué capacidad tienen las casas para grupos empresariales?",
        answer:
          "Contamos con dos opciones: Casa Muner Grande, con capacidad para hasta 20 personas, ideal para equipos grandes; y Casa Muner Pequeña, perfecta para grupos reducidos o líderes de área (hasta 6 personas).",
      },
      {
        question: "¿Se puede usar la piscina privada durante toda la estadía?",
        answer:
          "Sí. Cada casa tiene piscina privada de uso exclusivo, disponible las 24 horas para los huéspedes registrados.",
      },
      {
        question: "¿Qué incluye el alojamiento para las empresas?",
        answer:
          "El hospedaje incluye Wi-Fi, piscina privada, parqueadero, zona BBQ, cocina equipada y vigilancia 24/7. Todo dentro de un condominio cerrado y seguro.",
      },
      {
        question: "¿Puedo realizar una integración o actividad al aire libre?",
        answer:
          "Sí, las casas cuentan con amplias zonas sociales y BBQ, ideales para actividades grupales informales, juegos o cenas relajadas. No se permiten fiestas con sonido amplificado ni eventos abiertos al público.",
      },
      {
        question: "¿Casa Muner Melgar ofrece descuentos para empresas?",
        answer:
          "Durante la temporada de fin de año, ofrecemos tarifas especiales para reservas grupales o estancias largas. Puedes consultar las promociones vigentes directamente por WhatsApp.",
      },
      {
        question: "¿Cuál es la mejor época para reservar la despedida de año empresarial?",
        answer:
          "Recomendamos reservar entre octubre y noviembre, ya que diciembre y enero son temporadas de alta ocupación. Las empresas que reservan con anticipación garantizan disponibilidad.",
      },
      {
        question: "¿Dónde están ubicadas las casas?",
        answer:
          "Nuestras propiedades se encuentran en Melgar, Tolima, dentro de un condominio privado con vigilancia, acceso controlado y amplias zonas verdes, a pocos minutos de los principales atractivos turísticos.",
      },
      {
        question: "¿Se pueden hospedar empleados de diferentes sedes o áreas?",
        answer:
          "Sí, recibimos grupos mixtos y corporativos que buscan compartir días de descanso y recreación en un ambiente tranquilo, ideal para fomentar el trabajo en equipo.",
      },
    ],
    ctaTitle: "Reserva tu estadía de fin de año",
    ctaText:
      "Consulta disponibilidad, tarifas y capacidad según el número de huéspedes. Te atendemos directamente por WhatsApp.",
  },
];
