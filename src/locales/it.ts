import type { Messages } from './types';

export default {
  ui: {
    siteDescription:
      'Una serie di app per quando il tuo inglese o il tuo tedesco ha bisogno di soccorso. Allenati ai colloqui e a parlare ad alta voce, sul tuo computer.',
    heroTitle: 'La lingua ti mette in difficoltà?',
    heroAccent: "Lancia un SOS.",
    heroLead:
      "Un colloquio in arrivo, o non ti vengono le parole? La serie SOS è un insieme di app desktop gratuite per esercitarti a parlare inglese e tedesco ad alta voce. Funzionano sul tuo computer e l'IA che scegli ti corregge mentre parli.",
    appsHeading: "App",
    language: "Lingua",
    download: "Scarica l'ultima versione",
    viewSource: "Vedi su GitHub",
    features: "Funzionalità",
    screenshots: "Screenshot",
    platforms: "Piattaforme",
    requirementsHeading: "Prima di iniziare",
    requirements:
      "Per il feedback dell'IA serve una chiave API del fornitore che scegli (Google Gemini, Claude, OpenAI e altri). Se sei alle prime armi, Google Gemini ha un piano gratuito.",
    privacyHeading: "I tuoi dati restano sul tuo computer",
    privacy:
      "Nessun account, nessun server. Il riconoscimento vocale e la voce funzionano sul tuo computer, e lì resta anche la tua cronologia.",
    readme: "Le istruzioni di installazione e l'elenco completo delle funzionalità sono nel README.",
    commonTitle: "Cosa hanno in comune le app",
    common: [
      {
        title: "Parla e ascolta",
        body: "Rispondi a voce invece di scrivere, e ascolta il tuo interlocutore prima di leggere cosa dice.",
      },
      { title: "Sul tuo computer", body: "Installa e usa senza registrarti. La tua cronologia resta sul tuo computer." },
      { title: "Spiegazioni in italiano", body: "Le correzioni ti vengono spiegate in italiano; la pratica resta nella lingua che stai imparando." },
      {
        title: "Gratis e open source",
        body: "Rilasciate con licenza MIT. Paghi solo il tuo fornitore di IA, per quello che usi.",
      },
    ],
    notFoundTitle: "Alla deriva?",
    notFoundBody: "Questa pagina non esiste.",
    backHome: "Torna all'inizio",
    footer: "Open source, licenza MIT",
  },
  apps: {
    interview: {
      tagline: "Allenamento ai colloqui in inglese",
      hookTitle: "Hai un colloquio in arrivo?",
      hookAccent: "I soccorsi stanno arrivando.",
      summary:
        "Un'app per simulare colloqui di lavoro in inglese, che funziona sul tuo computer. Fa le domande ad alta voce, registra la tua risposta e valuta sia il tuo inglese sia quello che hai detto.",
      features: [
        {
          title: "Prima si ascolta",
          body: "L'intervistatore legge ogni domanda ad alta voce; il testo resta nascosto finché non lo chiedi tu.",
        },
        {
          title: "Domande di approfondimento",
          body: "Fino a due domande di approfondimento su quello che hai appena detto, come farebbe un vero selezionatore.",
        },
        {
          title: "Due punteggi separati",
          body: "Inglese (grammatica, lessico, naturalezza, pronuncia, intonazione, accento) e contenuto (pertinenza, struttura, concretezza), con le frasi corrette e una versione più efficace della tua risposta.",
        },
        {
          title: "Domande per il lavoro che vuoi",
          body: "Aggiungi un annuncio di lavoro (link o testo) e il tuo curriculum per ricevere domande pensate per quel ruolo.",
        },
        {
          title: "Feedback in italiano",
          body: "Le spiegazioni possono arrivarti in italiano; domande e risposte modello restano in inglese.",
        },
        {
          title: "Cronologia",
          body: "Ogni risposta viene salvata con trascrizione, punteggi e registrazione, così vedi come migliori.",
        },
      ],
      platforms: ["macOS (Apple Silicon)", "Windows (64 bit)"],
      screenshots: ["La schermata principale di SOS My Interview: aggiunta di un annuncio di lavoro e domande frequenti"],
    },
    language: {
      tagline: 'Pratica di inglese e tedesco parlato',
      hookTitle: "Non ti vengono le parole?",
      hookAccent: "I soccorsi stanno arrivando.",
      summary:
        "Un'app per allenare a voce la lingua che stai imparando, che funziona sul tuo computer. Scegli inglese o tedesco, poi un argomento, parlane ad alta voce con un partner IA che ti risponde a voce, e quello che dici viene corretto mentre parli.",
      features: [
        {
          title: "Più lingue in un'unica app",
          body: 'Scegli inglese o tedesco al primo avvio e cambia quando vuoi. Ogni lingua conserva i propri argomenti, correzioni, cronologia e voci.',
        },
        { title: "Prima di tutto parlare", body: "Rispondi a voce, non scrivendo; quello che dici viene trascritto per te." },
        {
          title: "Correzioni in tempo reale",
          body: "Dopo ogni tua frase vedi la correzione più utile, con la frase migliore e il perché. Puoi anche ascoltare la frase migliore.",
        },
        {
          title: "Quanto hai parlato chiaro",
          body: "Per ogni frase, un punteggio di chiarezza, le parole difficili da riconoscere e la tua velocità.",
        },
        {
          title: "40 argomenti in 9 categorie",
          body: "Chiacchiere quotidiane, lavoro, scuola, shopping, cibo, viaggi, servizi, casa ed esprimere la tua opinione, più argomenti tutti tuoi.",
        },
        {
          title: "Strutture di frase per livello",
          body: '100 strutture, da A1 a C2. Vedi una frase nella tua lingua e la dici nella lingua che stai allenando.',
        },
        {
          title: "Studia con i video di YouTube",
          body: "Incolla un link e ascolta una frase alla volta, con ripetizione, velocità ridotta e shadowing.",
        },
        {
          title: "Ripassa le tue correzioni",
          body: "Tutte le correzioni sono raccolte in un unico posto, dove ripeti la frase migliore finché non ti viene giusta.",
        },
        {
          title: "Un riepilogo finale",
          body: "Chiudi una conversazione per vedere cosa hai fatto bene, su cosa lavorare e le espressioni da provare la prossima volta.",
        },
      ],
      platforms: ["macOS (Apple Silicon)", "Windows (64 bit)"],
      screenshots: [
        'Una conversazione in SOS My Language: quello che hai detto, la correzione e la battuta successiva del partner',
        'La scelta della lingua da allenare in SOS My Language: inglese o tedesco',
        'La pagina iniziale di SOS My Language: argomenti di conversazione per categoria',
      ],
    },
  },
} satisfies Messages;
