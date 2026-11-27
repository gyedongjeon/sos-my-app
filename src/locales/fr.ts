import type { Messages } from './types';

export default {
  ui: {
    siteDescription:
      'Une série de petites applis de bureau gratuites qui viennent à la rescousse. Elles tournent sur votre propre ordinateur, sans compte à créer.',
    heroTitle: "Besoin d'aide ?",
    heroAccent: 'Lancez un SOS.',
    heroLead:
      "Un entretien en vue, les mots qui ne viennent pas, ou trop d'onglets ouverts : la série SOS, ce sont des applis de bureau gratuites, chacune pour un moment comme celui-là. Elles tournent sur votre propre ordinateur, sans compte à créer.",
    appsHeading: 'Applis',
    language: 'Langue',
    download: 'Télécharger la dernière version',
    viewSource: 'Voir sur GitHub',
    features: 'Fonctionnalités',
    screenshots: "Captures d'écran",
    platforms: 'Fonctionne sur',
    requirementsHeading: 'Avant de commencer',
    requirements:
      "Les retours de l'IA nécessitent une clé API du fournisseur de votre choix (Google Gemini, Claude, OpenAI, etc.). Si vous débutez, Google Gemini propose une offre gratuite.",
    privacyHeading: 'Vos données restent sur votre ordinateur',
    readme: "Les étapes d'installation et la liste complète des fonctionnalités se trouvent dans le README.",
    commonTitle: 'Ce que les applis ont en commun',
    common: [
      {
        title: 'Sur votre ordinateur',
        body: 'Installez-les et utilisez-les sans inscription, sur macOS et Windows.',
      },
      {
        title: 'Vos données restent à vous',
        body: 'Ce que vous faites dans les applis reste sur votre machine, pas sur un serveur.',
      },
      { title: 'En français', body: "Selon l'appli, les écrans ou les explications sont en français." },
      {
        title: 'Gratuit et open source',
        body: "Publié sous licence MIT. Les applis qui utilisent l'IA ne coûtent que ce que facture votre fournisseur d'IA.",
      },
    ],
    notFoundTitle: 'Perdu en mer ?',
    notFoundBody: "Cette page n'existe pas.",
    backHome: "Retour à l'accueil",
    footer: 'Open source, licence MIT',
    consentText: "Ce site souhaite utiliser Google Analytics pour compter les visites et voir quelles pages sont lues. Seulement si vous l'autorisez, des cookies sont enregistrés et des données d'utilisation sont envoyées à Google.",
    consentLearnMore: 'Comment Google utilise ces données',
    consentAllow: 'Autoriser',
    consentDecline: 'Refuser',
    consentSettings: 'Paramètres des cookies',
  },
  apps: {
    interview: {
      tagline: "Entraînement aux entretiens d'embauche en anglais",
      hookTitle: 'Un entretien approche ?',
      hookAccent: 'Les secours arrivent.',
      summary:
        "Une appli de simulation d'entretien pour vous entraîner aux entretiens d'embauche en anglais, sur votre propre ordinateur. Elle pose les questions à voix haute, enregistre votre réponse et note à la fois votre anglais et le contenu de votre réponse.",
      features: [
        {
          title: "D'abord l'écoute",
          body: "Le recruteur lit chaque question à voix haute ; le texte reste masqué jusqu'à ce que vous le demandiez.",
        },
        {
          title: 'Questions de relance',
          body: "Jusqu'à deux relances creusent ce que vous venez de dire, comme le ferait un vrai recruteur.",
        },
        {
          title: 'Deux notes distinctes',
          body: "L'anglais (grammaire, vocabulaire, naturel, prononciation, intonation, accentuation) et le contenu (pertinence, structure, précision), avec des phrases corrigées et une version améliorée de votre réponse.",
        },
        {
          title: 'Des questions pour le poste visé',
          body: "Ajoutez une offre d'emploi (lien ou texte) et votre CV pour obtenir des questions adaptées à ce poste.",
        },
        {
          title: 'Retours en français',
          body: 'Les explications peuvent être en français ; les questions et les réponses modèles restent en anglais.',
        },
        {
          title: 'Historique',
          body: 'Chaque réponse est conservée avec sa transcription, ses notes et son enregistrement, pour suivre vos progrès.',
        },
      ],
      privacy:
        "Ni compte, ni serveur. La reconnaissance vocale et la voix fonctionnent sur votre ordinateur, et votre historique y reste.",
      platforms: ['macOS (Apple Silicon)', 'Windows (64 bits)'],
      screenshots: ["L'accueil de SOS My Interview : ajout d'une offre d'emploi et questions courantes"],
    },
    language: {
      tagline: "Entraînement à l'oral en anglais et en allemand",
      hookTitle: 'Les mots vous manquent ?',
      hookAccent: 'Les secours arrivent.',
      summary:
        "Une appli pour pratiquer à l'oral la langue que vous apprenez, sur votre propre ordinateur. Choisissez l'anglais ou l'allemand, puis un sujet, discutez à voix haute avec un partenaire IA qui vous répond de vive voix, et ce que vous dites est corrigé au fil de la conversation.",
      features: [
        {
          title: 'Plusieurs langues dans une seule appli',
          body: "Choisissez l'anglais ou l'allemand au premier lancement et changez quand vous voulez. Chaque langue garde ses propres sujets, corrections, historique et voix.",
        },
        {
          title: "D'abord l'oral",
          body: 'Vous répondez à la voix, pas au clavier ; ce que vous dites est transcrit pour vous.',
        },
        {
          title: "Corrections au fil de l'eau",
          body: "Après chacune de vos phrases, la correction la plus utile s'affiche avec une meilleure formulation et l'explication, et vous pouvez écouter la phrase corrigée.",
        },
        {
          title: "Votre clarté à l'oral",
          body: 'Chaque phrase affiche un score de clarté, les mots difficiles à reconnaître et votre débit.',
        },
        {
          title: '40 sujets en 9 catégories',
          body: 'Discussions du quotidien, travail, études, shopping, repas, voyages, services, maison et donner son avis, plus vos propres sujets.',
        },
        {
          title: 'Structures de phrases par niveau',
          body: '100 structures, de A1 à C2. Vous voyez une phrase dans votre langue et vous la dites dans la langue que vous pratiquez.',
        },
        {
          title: 'Apprendre avec des vidéos YouTube',
          body: 'Collez un lien et écoutez phrase par phrase, avec répétition, vitesse ralentie et shadowing.',
        },
        {
          title: 'Revoir vos corrections',
          body: "Toutes vos corrections sont réunies au même endroit, où vous répétez la bonne phrase jusqu'à ce qu'elle sorte correctement.",
        },
        {
          title: 'Un bilan à la fin',
          body: 'Terminez une conversation pour voir ce que vous avez bien fait, ce qui reste à travailler et des expressions à essayer la prochaine fois.',
        },
      ],
      privacy:
        "Ni compte, ni serveur. La reconnaissance vocale et la voix fonctionnent sur votre ordinateur, et votre historique y reste.",
      platforms: ['macOS (Apple Silicon)', 'Windows (64 bits)'],
      screenshots: [
        'Une conversation dans SOS My Language : ce que vous avez dit, sa correction et la réplique suivante de votre partenaire',
        'Le choix de la langue à pratiquer dans SOS My Language : anglais ou allemand',
        "La page d'accueil de SOS My Language : sujets de conversation par catégorie",
      ],
    },
    feed: {
      tagline: 'Lecteur de flux RSS et Atom',
      hookTitle: "Trop d'onglets ouverts ?",
      hookAccent: 'Les secours arrivent.',
      summary:
        "Un lecteur des flux RSS et Atom des sites d'actualité et des blogs que vous suivez, qui tourne sur votre propre ordinateur. Abonnez-vous à un flux, retrouvez tous les nouveaux articles dans une seule liste, et lisez-les dans l'appli, page par page.",
      features: [
        {
          title: 'Une liste pour tout ce que vous suivez',
          body: "Les articles de tous vos flux, du plus récent au plus ancien, ou ceux d'un seul flux.",
        },
        {
          title: 'Lire comme dans un livre',
          body: "Un article s'ouvre en texte seul, sans les publicités, menus ni scripts de la page, en pages que l'on tourne d'un tap, une ou deux à la fois.",
        },
        {
          title: 'Un papier à votre goût',
          body: "Six couleurs de fond, et la taille du texte, l'interligne et les marges de votre choix.",
        },
        {
          title: 'Enregistrer en Markdown',
          body: "Téléchargez le texte d'un article en fichier Markdown, avec son titre, son adresse et sa date.",
        },
        {
          title: 'Des écrans en 19 langues',
          body: "Les écrans de l'appli existent en 19 langues, avec un thème clair et un thème sombre.",
        },
        {
          title: 'Toujours à jour',
          body: "L'appli cherche une nouvelle version au démarrage et, sur macOS, se met à jour en un clic.",
        },
      ],
      privacy:
        'Ni compte, ni serveur. Vos abonnements, leurs articles et vos réglages sont enregistrés dans un fichier sur votre ordinateur.',
      platforms: ['macOS (Apple Silicon)', 'Windows (64 bits)'],
      screenshots: [
        'Mon flux dans SOS My Feed : les articles de trois flux dans une seule liste, du plus récent au plus ancien',
        'Un article ouvert dans le lecteur de SOS My Feed : deux pages côte à côte sur fond sépia',
      ],
    },
  },
} satisfies Messages;
