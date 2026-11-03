import type { ContentSection } from "@/data/content-types";

/** Contenido de la página Sobre nosotros. */
export const aboutPage = {
  title: "Conoce más de Casa Muner Melgar",
  metaTitle: "Sobre Nosotros",
  metaDescription:
    "Conoce Casa Muner Melgar: dos casas vacacionales con piscina privada en un condominio seguro, y a Myriam, la anfitriona que te atiende directamente.",
  heroEyebrow: "¡Bienvenidos a Casa Muner Melgar!",
  heroDescription:
    "Dos casas llenas de amor y buena energía, diseñadas para ti.",
  sections: [
    {
      title: "Dos casas llenas de amor y buena energía, diseñadas para ti",
      blocks: [
        {
          type: "paragraph",
          text: "En el corazón de Melgar, hemos creado dos espacios únicos, llenos de buena energía, pensados para que vivas momentos inolvidables con quienes más quieres. Más que un alojamiento, Casa Muner es un refugio donde se respira tranquilidad, armonía y comodidad.",
        },
        {
          type: "paragraph",
          text: "Ya sea que busques una escapada en pareja, unas vacaciones en familia o una reunión con amigos, aquí encontrarás el lugar perfecto.",
        },
      ],
    },
    {
      title: "Nuestras casas vacacionales en Melgar",
      blocks: [
        {
          type: "paragraph",
          text: "Si estás buscando el mejor destino para tus próximas vacaciones, en Casa Muner Melgar encontrarás todo lo que necesitas para una escapada inolvidable. Ofrecemos opciones de alquiler vacacional diseñadas para todos los gustos: desde casas vacacionales amplias, ideales para familias numerosas o grupos grandes, hasta espacios más acogedores para parejas o grupos reducidos.",
        },
        {
          type: "paragraph",
          text: "Todas nuestras casas vacacionales en Melgar están completamente equipadas, cuentan con piscina privada y están ubicadas en una zona privilegiada donde podrás disfrutar del sol, el descanso y la tranquilidad. Ya sea que busques una casa de verano, una escapada de fin de semana o unos días de desconexión total, tenemos la opción ideal para ti y para los que más quieres.",
        },
        {
          type: "list",
          style: "bullets",
          items: [
            "**[Casa Grande](/casa-muner-grande-melgar):** arriendo de casa quinta en Melgar con piscina privada, capacidad máxima para 20 personas. 2 piscinas, parqueaderos, Wi-Fi, 5 habitaciones, 3 baños, cocina equipada, zona BBQ y zonas verdes.",
            "**[Casa Pequeña](/casa-muner-pequena-melgar):** alquiler de casa con piscina en Melgar, capacidad máxima para 6 personas. 2 piscinas, parqueaderos, Wi-Fi, 2 habitaciones, 1 baño, cocina equipada y zona BBQ.",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Ambas casas cuentan con:",
        },
        {
          type: "icons",
          items: [
            "Zona Wi-Fi",
            "Parqueadero privado",
            "Zona de piscina",
            "Zona de BBQ",
          ],
        },
      ],
    },
    {
      title: "Te acompaño en cada paso",
      blocks: [
        {
          type: "image",
          narrow: true,
          image: {
            src: "/images/equipo/myriam-pineda-casa-muner-melgar.png",
            width: 750,
            height: 750,
            alt: "Myriam Pineda, anfitriona de Casa Muner Melgar",
          },
        },
        {
          type: "paragraph",
          text: "Soy **Myriam Pineda**, agente de bienes raíces y anfitriona de Casa Muner Melgar. Me encanta recibir a nuestros huéspedes y asegurarme de que cada experiencia sea especial.",
        },
        {
          type: "paragraph",
          text: "Y sí, mi gata Emma también hace parte de la familia… ¡Te recibirá con su mejor ronroneo!",
        },
      ],
    },
    {
      title: "¿Quieres saber cómo es la experiencia antes de reservar?",
      blocks: [
        {
          type: "paragraph",
          text: "Nuestros huéspedes ya lo vivieron y han dejado reseñas en [Google Maps](https://maps.app.goo.gl/W4jpGrzZKMHh6niEA). Descubre por qué somos una de las opciones de alquiler vacacional en Melgar con casas cómodas, piscina privada y un ambiente perfecto para descansar. ¡Lee sus opiniones y reserva con confianza!",
        },
      ],
    },
    {
      title: "¿Por qué elegir Casa Muner Melgar?",
      blocks: [
        {
          type: "paragraph",
          text: "Privacidad, seguridad y descanso. Queremos que desconectes del estrés y te sientas como en casa. Nuestras casas están pensadas para ofrecerte un ambiente íntimo, seguro y rodeado de naturaleza, donde puedas relajarte sin preocupaciones.",
        },
        {
          type: "paragraph",
          text: "¡Tu escapada perfecta te espera en Casa Muner!",
        },
      ],
    },
  ] satisfies ContentSection[],
};

/** Reglas de la casa, migradas de muner.com.co/reglas-casas. */
export const houseRules = {
  title: "Reglas de la Casa Muner Melgar",
  metaTitle: "Reglas de la Casa",
  metaDescription:
    "Lee las reglas de Casa Muner Melgar antes de reservar: piscinas, mascotas, ruido, parqueadero, registro de huéspedes, check-in y check-out.",
  intro:
    "Antes de realizar su reserva, es indispensable leer y aceptar todas las reglas aquí descritas. Estas normas deben ser conocidas y respetadas por todas las personas que ingresen a la casa, sin excepción. El desconocimiento de alguna de ellas no exime de su cumplimiento. Cualquier infracción podrá conllevar sanciones, cargos adicionales, cancelación de la estadía, restricciones de ingreso y/o acciones legales.",
  rules: [
    {
      title: "Ropa de cama y toallas",
      body: "La casa se entrega con camas limpias, con sábanas y sobresábanas. No se suministran toallas. Cada huésped debe traer su propia toalla de uso personal. No se debe utilizar la ropa de cama para fines distintos a los previstos (por ejemplo, no usarlas para limpiar o en exteriores). No se permite el consumo de alimentos o bebidas en las camas o zonas de descanso para evitar daños o manchas.",
    },
    {
      title: "Entorno natural",
      body: "Por el entorno natural que rodea la casa, es obligatorio traer repelente para insectos y bloqueador solar. Queda prohibido arrojar cualquier tipo de objeto o residuo en zonas verdes, fuentes o espacios comunes.",
    },
    {
      title: "Ventilación",
      body: "La propiedad cuenta con ventiladores de techo en todos los espacios. No dispone de aire acondicionado.",
    },
    {
      title: "Mascotas",
      body: "Se admiten mascotas, siempre que se garantice el cuidado del mobiliario y los objetos de la casa. Es obligatorio recoger sus desechos para mantener la limpieza y el orden. Está prohibido el ingreso de mascotas a las piscinas, así como bañarlas en cualquiera de las piscinas, sin excepción. Las mascotas deben ser incluidas en la reserva como huéspedes (en la sección mascotas), y se aplicará un cargo adicional por su acceso a la propiedad.",
    },
    {
      title: "Piscina",
      body: "La piscina privada ubicada frente a la casa está disponible para su uso en cualquier momento durante la estadía. Además, los huéspedes tienen acceso a la piscina del condominio, la cual opera de 8:00 a. m. a 7:00 p. m. Dentro de ese horario, se puede hacer uso libremente de esta piscina. Para ingresar a la piscina del condominio, es obligatorio el uso de gorro para el cabello. Está prohibido consumir bebidas o alimentos dentro del área de la piscina; sin embargo, se permite su consumo en el kiosco ubicado junto a la piscina. Está terminantemente prohibido ingresar con objetos punzantes, realizar clavados o cualquier tipo de acrobacia en cualquiera de las piscinas, ya que esto puede afectar su estructura y representa un riesgo para los usuarios. Para que no haya sorpresas: en las mañanas, entre las 6:00 y 7:00 a. m., ingresan las personas encargadas de la limpieza y mantenimiento de las piscinas. Ellos acceden con sus llaves para realizar su labor y se retiran al finalizar. Si deben aplicar químicos en la piscina, esta labor se realiza exclusivamente en el horario nocturno entre las 6:00 y 7:00 p. m.; no se permite su ingreso en horario posterior. Importante: el acceso de mascotas a cualquiera de las piscinas está estrictamente prohibido, sin excepción. El huésped debe respetar las indicaciones de seguridad en todas las áreas de la propiedad, incluyendo el ingreso, zonas sociales, piscina y BBQ, y abstenerse de realizar actividades que pongan en riesgo la integridad de las personas o la propiedad.",
    },
    {
      title: "Cocina",
      body: "La cocina está equipada con los implementos básicos: ollas, platos, cubiertos, vasos, pocillos, colador, cuchillos, olletas, jarra, estufa, licuadora y nevera con congelador.",
    },
    {
      title: "Restricción de vehículos",
      body: "No está permitido el ingreso de vehículos de servicio público ni de placa blanca (taxis, vans, buses, etc.). Estos deben parquearse fuera del condominio. Desde la portería, los objetos personales deben ser transportados a pie hasta la casa (aproximadamente 3 minutos de caminata). No se permite dejar vehículos en la portería.",
    },
    {
      title: "Cantidad de huéspedes",
      body: "La reserva debe reflejar con exactitud la cantidad real de personas que ingresarán a la propiedad. Si desea incluir más personas posteriormente, deberá actualizar la reserva a través de la plataforma. El valor de la estadía varía según el número de personas registradas.",
    },
    {
      title: "Visitas externas",
      body: "No se permite el ingreso de visitantes no incluidos en la reserva. Solo pueden ingresar las personas previamente registradas en la plataforma. De querer incluir a alguien más, deberá modificar la reserva y pagar el valor correspondiente. No se hacen excepciones.",
    },
    {
      title: "Agua y baño",
      body: "Se recuerda traer agua potable para consumo directo. El agua del condominio es apta para cocinar, pero no para beber directamente. Entregamos papel higiénico; no entregamos toallas.",
    },
    {
      title: "Normas de convivencia y ruido",
      body: "Se prohíben ruidos altos o música a alto volumen a partir de las 11:00 p. m. Durante el día, se recomienda mantener el volumen moderado en todo momento.",
    },
    {
      title: "Parlantes",
      body: "Queda prohibido el uso de parlantes con volumen elevado o generar ruido excesivo. Cualquier multa impuesta por esta causa deberá ser pagada por el huésped.",
    },
    {
      title: "Parqueadero",
      body: "La casa cuenta con parqueadero privado. En caso de requerir espacio adicional, el condominio dispone de bahías de parqueo vigiladas.",
    },
    {
      title: "Registro de huéspedes",
      body: "Es obligatorio enviar con antelación el listado completo de nombres y números de identificación de todas las personas que ingresarán a través de nuestro [formulario de registro de ingreso](/registro-ingreso). Este listado debe enviarse a más tardar a las 9:00 p. m. del día de ingreso. Si no se recibe a tiempo, no se autorizará el ingreso a la propiedad y el huésped deberá cancelar su reserva sin reembolso o ingresar al día siguiente si tiene noches adicionales reservadas.",
    },
    {
      title: "Sustancias prohibidas",
      body: "Está estrictamente prohibido el consumo de sustancias en las áreas comunes del condominio, incluyendo calles internas y zonas sociales. Cualquier sanción será responsabilidad directa del huésped.",
    },
    {
      title: "Responsabilidad por daños y multas",
      body: "El huésped será responsable por cualquier multa, daño o perjuicio causado a la propiedad o a la administración del condominio como resultado del incumplimiento de estas normas.",
    },
    {
      title: "Seguro durante la estadía",
      body: "La propiedad cuenta con una póliza de seguro vigente con la empresa Seguros Magenta, que cubre eventualidades durante la estadía dentro de la casa. Para cualquier situación que requiera asistencia o reclamación, encontrará los datos de contacto en los mensajes que le enviaremos después de realizada la reserva o en los avisos internos de la casa. Es importante informar oportunamente cualquier incidente para que el seguro pueda ser activado.",
    },
    {
      title: "Check-in y check-out",
      body: "El horario de entrada (check-in) es a partir de las 2:00 p. m. y el horario de salida (check-out) es antes de las 11:00 a. m. Cualquier solicitud para modificar estos horarios está sujeta a disponibilidad y tendrá un costo adicional que debe ser coordinado con anticipación. En caso de no cumplir con el horario de salida, se aplicará un cargo adicional.",
    },
    {
      title: "Basura y reciclaje",
      body: "Por favor, no dejar basura dentro de la casa al momento del check-out. Toda la basura debe ser depositada en las canecas dispuestas para tal fin. Si se deja la casa en condiciones inadecuadas de limpieza, se podrá aplicar un cargo de limpieza adicional.",
    },
    {
      title: "Uso responsable de la electricidad y el agua",
      body: "Se solicita el uso consciente de agua y energía, apagando luces, ventiladores y desconectando electrodomésticos al salir. No se permite el uso de aparatos de alto consumo energético no autorizados. En caso de interrupción del servicio eléctrico o de agua, el huésped debe informar inmediatamente a la administración para su pronta atención. Está prohibido alterar o manipular los sistemas eléctricos, de gas o cualquier instalación de la propiedad.",
    },
    {
      title: "Objetos perdidos o dañados",
      body: "La administración no se hace responsable por objetos personales olvidados. Cualquier daño o pérdida de objetos dentro de la casa o zonas comunes deberá ser reportado y asumido por el huésped.",
    },
    {
      title: "Uso adecuado de mobiliario y electrodomésticos",
      body: "Se prohíbe el movimiento de muebles, camas, colchones, etc. No se debe utilizar ningún electrodoméstico fuera de su propósito. En caso de mal uso que ocasione daños, el costo será asumido por el huésped.",
    },
    {
      title: "Uso de fuego o elementos inflamables",
      body: "Si va a utilizar la zona de BBQ, debe traer carbón o leña para su uso. No está permitido encender fogatas, usar velas, pirotecnia ni ningún elemento inflamable dentro o alrededor de la casa, salvo en la zona de BBQ, donde su uso debe realizarse con responsabilidad y precaución. Esta medida busca prevenir accidentes e incendios. Para el uso de la zona de BBQ, se debe realizar una limpieza y dejar el área en condiciones adecuadas al finalizar su uso.",
    },
    {
      title: "Drones y grabaciones",
      body: "No se permite el uso de drones en las instalaciones del condominio sin autorización previa por parte de la administración. Esta norma busca proteger la privacidad de todos los residentes y huéspedes.",
    },
    {
      title: "Responsabilidad de menores de edad",
      body: "Los menores de edad deben estar bajo supervisión constante de un adulto responsable. No se permite el ingreso de niños a la piscina sin acompañamiento. La casa y sus alrededores no son una zona de juegos sin vigilancia.",
    },
    {
      title: "Claves de wifi y seguridad",
      body: "En caso de suministrarse acceso a internet, su uso debe ser responsable. Está prohibido utilizar la red para actividades ilegales, inapropiadas o que comprometan la seguridad del sistema o la privacidad de otros usuarios.",
    },
    {
      title: "Revisión a la llegada",
      body: "A su llegada, por favor, asegúrese de revisar el estado de la casa, sus utensilios e instalaciones. En caso de detectar alguna anomalía o daño, notifíquelo de inmediato para poder atenderlo oportunamente.",
    },
    {
      title: "Ropa tendida",
      body: "Queda prohibido tender ropa en los balcones o en cualquier lugar visible desde el exterior de la propiedad, ya que la administración del condominio puede imponer multas por esta causa. Cualquier multa resultante deberá ser asumida por el huésped. Se dispone de un tendedero destinado para tal fin, y también se permite usar las barandas internas de la casa para secar la ropa.",
    },
    {
      title: "Respeto a la propiedad ajena",
      body: "Está estrictamente prohibido ingresar a casas vecinas o a cualquier espacio privado sin autorización previa. El incumplimiento de esta norma puede generar inconvenientes, multas, acciones legales y el huésped será responsable de cualquier daño o costo que se derive de dicha acción.",
    },
    {
      title: "Conducta en zonas comunes",
      body: "En las zonas comunes se debe mantener un comportamiento respetuoso y un tono de voz moderado. Está estrictamente prohibido el consumo de sustancias psicoactivas en dichas áreas. El incumplimiento podrá conllevar sanciones y responsabilidad directa del huésped.",
    },
    {
      title: "Juegos de mesa y recreación en el condominio",
      body: "El condominio dispone de juegos recreativos como mesa de billar, rana y otros similares. Estos juegos son administrados directamente por el condominio, su uso tiene costo adicional y el pago se realiza exclusivamente en la tienda del condominio. La disponibilidad de los juegos no está garantizada en todo momento, ya que depende de horarios, afluencia de usuarios y disposiciones internas de la administración del condominio. La casa no administra, controla ni responde por la operación, costos, horarios o disponibilidad de estos juegos.",
    },
  ],
};

/** Contenido de la página Pago seguro. */
export const securePaymentPage = {
  title: "Paga de forma segura tu estadía en Casa Muner Melgar",
  metaTitle: "Pago Seguro",
  metaDescription:
    "Paga tu estadía en Casa Muner Melgar desde cualquier banco de Colombia, con código QR o llave Bre-B, sin intermediarios ni comisiones.",
  intro:
    "Paga desde cualquier banco directamente a Casa Muner Melgar, sin intermediarios ni comisiones. Recibirás confirmación por WhatsApp en pocos minutos.",
  qrSteps: [
    "Abre la app de tu banco.",
    "Toca el ícono de “Escanear QR”.",
    "Escanea el código QR que te mostramos en esta página.",
    "Verifica que el nombre sea “Casa Muner Melgar”.",
    "Ingresa el valor a pagar y una pequeña nota (opcional). Confirma el pago. ¡Y listo!",
  ],
  brebKey: "@bfmp920150",
  brebSteps: [
    "Abre la app de tu banco.",
    "Toca en “Enviar” y elige enviar por “llaves” o “Bre-B”.",
    "En el campo escribe la llave: @bfmp920150",
    "Ingresa el monto a pagar.",
    "Escribe una nota con tu nombre o referencia de la reserva (opcional).",
    "Presiona “Enviar plata” y confirma. ¡Pago completado!",
  ],
  banksNote:
    "Puedes hacer el pago desde cualquier banco en Colombia (como Bancolombia, Davivienda, BBVA, etc.) directamente a nuestra cuenta.",
  transactionCost: "Costo de la transacción: $0",
};

/** Contenido de la página de instructivos. */
export const instructivosPage = {
  title: "Instructivos Casa Muner Melgar",
  metaTitle: "Instructivos de las Casas",
  metaDescription:
    "Instructivos de uso de los equipos de Casa Muner Melgar: equipo de sonido, electrodomésticos y más. Resuelve tus dudas durante la estadía.",
  intro:
    "¿Tienes dudas sobre cómo usar algún equipo en la casa? Aquí reunimos los instructivos de los equipos y electrodomésticos. Busca el manual que necesites y resuelve tus dudas al instante.",
  guides: [
    {
      id: "equipo-de-sonido",
      title: "Instrucciones para el uso del equipo de sonido de la Casa Grande",
      blocks: [
        {
          type: "paragraph",
          text: "Para usar el equipo de sonido de la Casa Grande en Casa Muner Melgar, asegúrate de que esté conectado a una toma de corriente funcional. Luego, utiliza tus dispositivos por medio de las opciones disponibles (AUX) y disfruta de tu música durante la estadía.",
        },
        {
          type: "note",
          text: "En el sitio anterior este instructivo incluía un video demostrativo. El video está pendiente de incorporarse a esta página.",
        },
      ] satisfies ContentSection["blocks"],
    },
  ],
};
