import type { Messages } from './types';

export default {
  ui: {
    siteDescription:
      'Una serie de apps de práctica para cuando tu inglés o tu alemán necesitan un rescate. Practica entrevistas y conversación en voz alta, en tu propio equipo.',
    heroTitle: '¿El idioma te falla?',
    heroAccent: 'Lanza una señal de auxilio.',
    heroLead:
      '¿Se acerca una entrevista o te quedas sin palabras? La serie SOS son apps de escritorio gratuitas para practicar inglés y alemán en voz alta. Funcionan en tu equipo, y la IA que elijas te corrige sobre la marcha.',
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
    privacy:
      'No hay cuentas ni servidores. El reconocimiento de voz y la voz de la app funcionan en tu equipo, y tu historial se guarda ahí.',
    readme: 'Los pasos de instalación y la lista completa de funciones están en el README.',
    commonTitle: 'Lo que tienen en común',
    common: [
      { title: 'Habla y escucha', body: 'Responde en voz alta en lugar de escribir, y escucha a tu interlocutor antes de leerlo.' },
      { title: 'En tu equipo', body: 'Se instala y se usa sin registrarse. Tu historial se queda en tu equipo.' },
      { title: 'Explicaciones en español', body: 'Las correcciones se explican en español; la práctica sigue siendo en el idioma que aprendes.' },
      { title: 'Gratis y de código abierto', body: 'Publicado con licencia MIT. Solo pagas a tu proveedor de IA por lo que uses.' },
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
      platforms: ['macOS (Apple Silicon)', 'Windows (64 bits)'],
      screenshots: ['Página de inicio de SOS My Interview: añadir una oferta de empleo y preguntas frecuentes'],
    },
    english: {
      tagline: 'Práctica de conversación en inglés',
      hookTitle: '¿Te quedas sin palabras?',
      hookAccent: 'La ayuda va en camino.',
      summary:
        'Una app para practicar inglés hablado en tu propio equipo. Elige un tema, conversa en voz alta con una IA que te responde con voz y recibe correcciones sobre la marcha.',
      features: [
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
          body: '100 estructuras del A1 al C2. Ves una frase en tu idioma y la dices en inglés.',
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
      platforms: ['macOS (Apple Silicon)', 'Windows (64 bits)'],
      screenshots: [
        'Una conversación en SOS My English: lo que dijiste, su corrección y la siguiente frase de tu interlocutor',
        'Página de inicio de SOS My English: temas de conversación por categoría',
      ],
    },
    german: {
      tagline: 'Práctica de conversación en alemán',
      hookTitle: '¿Te quedas sin palabras?',
      hookAccent: 'La ayuda va en camino.',
      summary:
        'Una app para practicar alemán hablado en tu propio equipo. Elige un tema, conversa en voz alta con una IA que te responde con voz y recibe correcciones sobre la marcha.',
      features: [
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
          body: '100 estructuras del A1 al C2. Ves una frase en tu idioma y la dices en alemán.',
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
      platforms: ['macOS (Apple Silicon)', 'Windows (64 bits)'],
      screenshots: [
        'Una conversación en SOS My German: lo que dijiste, su corrección y la siguiente frase de tu interlocutor',
        'Página de inicio de SOS My German: temas de conversación por categoría',
      ],
    },
  },
} satisfies Messages;
