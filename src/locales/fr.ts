import type { Messages } from './types';

export default {
  ui: {
    siteDescription:
      "Une série d'applis d'entraînement pour quand votre anglais ou votre allemand a besoin d'un coup de main. Entraînez-vous aux entretiens et à parler à voix haute, sur votre propre ordinateur.",
    heroTitle: 'Une langue vous fait défaut ?',
    heroAccent: 'Lancez un SOS.',
    heroLead:
      "Un entretien en vue, ou les mots qui ne viennent pas : la série SOS, ce sont des applis de bureau gratuites pour pratiquer l'anglais et l'allemand à voix haute. Elles tournent sur votre ordinateur, et l'IA de votre choix vous corrige au fil de l'eau.",
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
    privacy:
      "Ni compte, ni serveur. La reconnaissance vocale et la voix fonctionnent sur votre ordinateur, et votre historique y reste.",
    readme: "Les étapes d'installation et la liste complète des fonctionnalités se trouvent dans le README.",
    commonTitle: 'Ce que les applis ont en commun',
    common: [
      {
        title: 'Parler et écouter',
        body: "Répondez à voix haute au lieu de taper, et écoutez votre interlocuteur avant de le lire.",
      },
      {
        title: 'Sur votre ordinateur',
        body: "Installez et utilisez sans inscription. Votre historique reste sur votre machine.",
      },
      {
        title: 'Explications en français',
        body: "Les corrections et les retours peuvent être expliqués en français ; l'entraînement, lui, reste dans la langue que vous apprenez.",
      },
      {
        title: 'Gratuit et open source',
        body: "Publié sous licence MIT. Vous ne payez que votre fournisseur d'IA, selon votre usage.",
      },
    ],
    notFoundTitle: 'Perdu en mer ?',
    notFoundBody: "Cette page n'existe pas.",
    backHome: "Retour à l'accueil",
    footer: 'Open source, licence MIT',
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
      platforms: ['macOS (Apple Silicon)', 'Windows (64 bits)'],
      screenshots: ["L'accueil de SOS My Interview : ajout d'une offre d'emploi et questions courantes"],
    },
    english: {
      tagline: "Entraînement à l'anglais oral",
      hookTitle: 'Les mots vous manquent ?',
      hookAccent: 'Les secours arrivent.',
      summary:
        "Une appli pour pratiquer l'anglais oral, sur votre propre ordinateur. Choisissez un sujet, discutez à voix haute avec un partenaire IA qui vous répond de vive voix, et votre anglais est corrigé au fil de la conversation.",
      features: [
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
          body: "100 structures, de A1 à C2. Vous voyez une phrase dans votre langue et vous la dites en anglais.",
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
      platforms: ['macOS (Apple Silicon)', 'Windows (64 bits)'],
      screenshots: [
        "Une conversation dans SOS My English : ce que vous avez dit, sa correction et la réplique suivante de votre partenaire",
        "L'accueil de SOS My English : sujets de conversation par catégorie",
      ],
    },
    german: {
      tagline: "Entraînement à l'allemand oral",
      hookTitle: 'Les mots vous manquent ?',
      hookAccent: 'Les secours arrivent.',
      summary:
        "Une appli pour pratiquer l'allemand oral, sur votre propre ordinateur. Choisissez un sujet, discutez à voix haute avec un partenaire IA qui vous répond de vive voix, et votre allemand est corrigé au fil de la conversation.",
      features: [
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
          body: "100 structures, de A1 à C2. Vous voyez une phrase dans votre langue et vous la dites en allemand.",
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
      platforms: ['macOS (Apple Silicon)', 'Windows (64 bits)'],
      screenshots: [],
    },
  },
} satisfies Messages;
