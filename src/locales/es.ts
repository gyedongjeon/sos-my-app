import type { Messages } from './types';

export default {
  ui: {
    siteDescription:
      'Una serie de pequeñas apps de escritorio gratuitas que acuden al rescate. Funcionan en tu propio equipo, sin cuentas que crear.',
    heroTitle: '¿Necesitas un rescate?',
    heroAccent: 'Lanza una señal de auxilio.',
    heroLead:
      '¿Se acerca una entrevista, te quedas sin palabras o tienes demasiadas pestañas abiertas? La serie SOS son apps de escritorio gratuitas, cada una para un momento así. Funcionan en tu propio equipo, sin cuentas que crear.',
    appsHeading: 'Apps',
    language: 'Idioma',
    download: 'Descargar la última versión',
    viewSource: 'Ver en GitHub',
    features: 'Funciones',
    screenshots: 'Capturas de pantalla',
    platforms: 'Funciona en',
    requirementsHeading: 'Antes de empezar',
    requirements:
      'Para las correcciones de la IA necesitas una clave de API del proveedor que elijas (Google Gemini, Claude, OpenAI y otros). Si es tu primera vez, Google Gemini tiene un nivel gratuito.',
    privacyHeading: 'Tus datos se quedan en tu equipo',
    readme: 'Los pasos de instalación y la lista completa de funciones están en el README.',
    commonTitle: 'Lo que tienen en común',
    common: [
      { title: 'En tu equipo', body: 'Se instalan y se usan sin registrarse, en macOS y Windows.' },
      {
        title: 'Tus datos son tuyos',
        body: 'Lo que haces en las apps se queda en tu equipo, no en un servidor.',
      },
      { title: 'En español', body: 'Según la app, las pantallas o las explicaciones están en español.' },
      {
        title: 'Gratis y de código abierto',
        body: 'Publicado con licencia MIT. Las apps que usan IA solo cuestan lo que cobre tu proveedor de IA.',
      },
    ],
    notFoundTitle: '¿A la deriva?',
    notFoundBody: 'Esta página no existe.',
    backHome: 'Volver al inicio',
    footer: 'Código abierto, licencia MIT',
  },
  apps: {
    interview: {
      tagline: 'Práctica de entrevistas en inglés',
      hookTitle: '¿Tienes una entrevista pronto?',
      hookAccent: 'La ayuda va en camino.',
      summary:
        'Una app de entrevistas simuladas para practicar entrevistas de trabajo en inglés, en tu propio equipo. Te hace las preguntas en voz alta, graba tu respuesta y evalúa por separado tu inglés y lo que dijiste.',
      features: [
        { title: 'Primero, escuchar', body: 'El entrevistador lee cada pregunta en voz alta, y el texto queda oculto hasta que lo pidas.' },
        {
          title: 'Preguntas de seguimiento',
          body: 'Hasta dos preguntas más profundizan en lo que acabas de decir, como lo haría un entrevistador real.',
        },
        {
          title: 'Dos puntuaciones',
          body: 'Inglés (gramática, vocabulario, naturalidad, pronunciación, entonación, acentuación) y contenido (pertinencia, estructura, concreción), con frases corregidas y una versión mejorada de tu respuesta.',
        },
        {
          title: 'Preguntas para el puesto que quieres',
          body: 'Añade una oferta de empleo (enlace o texto) y tu currículum para recibir preguntas pensadas para ese puesto.',
        },
        {
          title: 'Comentarios en español',
          body: 'Recibe las explicaciones en español; las preguntas y las respuestas modelo siguen en inglés.',
        },
        {
          title: 'Historial',
          body: 'Cada respuesta se guarda con su transcripción, puntuaciones y grabación, para que veas cómo mejoras.',
        },
      ],
      privacy:
        'No hay cuentas ni servidores. El reconocimiento de voz y la voz de la app funcionan en tu equipo, y tu historial se guarda ahí.',
      platforms: ['macOS (Apple Silicon)', 'Windows (64 bits)'],
      screenshots: ['Página de inicio de SOS My Interview: añadir una oferta de empleo y preguntas frecuentes'],
    },
    language: {
      tagline: 'Práctica de conversación en inglés y alemán',
      hookTitle: '¿Te quedas sin palabras?',
      hookAccent: 'La ayuda va en camino.',
      summary:
        'Una app para practicar en voz alta el idioma que estás aprendiendo, en tu propio equipo. Elige inglés o alemán, escoge un tema, conversa con una IA que te responde con voz y recibe correcciones sobre la marcha.',
      features: [
        {
          title: 'Varios idiomas en una sola app',
          body: 'Elige inglés o alemán al abrirla por primera vez y cambia cuando quieras. Cada idioma guarda sus propios temas, correcciones, historial y voces.',
        },
        { title: 'Hablar primero', body: 'Respondes con la voz, no escribiendo; lo que dices se transcribe automáticamente.' },
        {
          title: 'Correcciones sobre la marcha',
          body: 'Después de cada intervención, ves la corrección más útil con una frase mejor y el porqué, y puedes escuchar esa frase.',
        },
        {
          title: 'Claridad al hablar',
          body: 'Cada frase muestra una puntuación de claridad, las palabras difíciles de reconocer y tu ritmo.',
        },
        {
          title: '40 temas en 9 categorías',
          body: 'Charla cotidiana, trabajo, estudios, compras, comida, viajes, servicios, hogar y dar tu opinión, además de tus propios temas.',
        },
        {
          title: 'Estructuras de frases por nivel',
          body: '100 estructuras del A1 al C2. Ves una frase en tu idioma y la dices en el idioma que practicas.',
        },
        {
          title: 'Aprende con videos de YouTube',
          body: 'Pega un enlace y escucha frase por frase, con repetición, velocidad reducida y shadowing (repetir a la vez).',
        },
        {
          title: 'Repasa tus correcciones',
          body: 'Todas las correcciones se reúnen en un solo lugar, donde dices la frase mejorada hasta que te salga bien.',
        },
        {
          title: 'Un resumen al final',
          body: 'Cierra una conversación para ver qué hiciste bien, qué mejorar y expresiones para probar la próxima vez.',
        },
      ],
      privacy:
        'No hay cuentas ni servidores. El reconocimiento de voz y la voz de la app funcionan en tu equipo, y tu historial se guarda ahí.',
      platforms: ['macOS (Apple Silicon)', 'Windows (64 bits)'],
      screenshots: [
        'Una conversación en SOS My Language: lo que dijiste, su corrección y la siguiente frase de tu compañero',
        'Elegir el idioma que practicar en SOS My Language: inglés o alemán',
        'La página de inicio de SOS My Language: temas de conversación por categoría',
      ],
    },
    feed: {
      tagline: 'Lector de feeds RSS y Atom',
      hookTitle: '¿Demasiadas pestañas?',
      hookAccent: 'La ayuda está en camino.',
      summary:
        'Un lector de los feeds RSS y Atom de los sitios de noticias y blogs que sigues, que funciona en tu propio equipo. Suscríbete a un feed, ve todos los artículos nuevos en una sola lista y lee cada artículo dentro de la app, página a página.',
      features: [
        {
          title: 'Una lista para todo lo que sigues',
          body: 'Los artículos de todos los feeds, del más reciente al más antiguo, o solo los de un feed.',
        },
        {
          title: 'Leer como un libro',
          body: 'Un artículo se abre como texto limpio, sin anuncios, menús ni scripts de la página, en páginas que pasas con un toque, de una en una o de dos en dos.',
        },
        {
          title: 'El papel a tu gusto',
          body: 'Seis colores de fondo, y el tamaño de letra, el interlineado y los márgenes que prefieras.',
        },
        {
          title: 'Guardar en Markdown',
          body: 'Descarga el texto de un artículo como archivo Markdown, con su título, dirección y fecha.',
        },
        {
          title: 'Pantallas en 19 idiomas',
          body: 'Las pantallas de la app están en 19 idiomas, con tema claro y oscuro.',
        },
        {
          title: 'Se mantiene al día',
          body: 'La app busca una versión nueva al iniciarse y, en macOS, se actualiza con un clic.',
        },
      ],
      privacy:
        'No hay cuentas ni servidores. Tus suscripciones, sus artículos y tus ajustes se guardan en un archivo en tu equipo.',
      platforms: ['macOS (Apple Silicon)', 'Windows (64 bits)'],
      screenshots: [
        'Mi feed en SOS My Feed: los artículos de tres feeds en una sola lista, del más reciente al más antiguo',
        'Un artículo abierto en el lector de SOS My Feed: dos páginas una al lado de la otra sobre papel sepia',
      ],
    },
  },
} satisfies Messages;
