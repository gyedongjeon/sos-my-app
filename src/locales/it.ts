import type { Messages } from './types';

export default {
  ui: {
    siteDescription:
      'Una serie di piccole app desktop gratuite che vengono in soccorso. Funzionano sul tuo computer, senza account da creare.',
    heroTitle: 'Hai bisogno di soccorso?',
    heroAccent: "Lancia un SOS.",
    heroLead:
      'Un colloquio in arrivo, non ti vengono le parole o hai troppe schede aperte? La serie SOS è un insieme di app desktop gratuite, ciascuna per un momento così. Funzionano sul tuo computer, senza account da creare.',
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
    readme: "Le istruzioni di installazione e l'elenco completo delle funzionalità sono nel README.",
    commonTitle: "Cosa hanno in comune le app",
    common: [
      { title: 'Sul tuo computer', body: 'Installale e usale senza registrarti, su macOS e Windows.' },
      { title: 'I tuoi dati restano tuoi', body: 'Quello che fai nelle app resta sul tuo computer, non su un server.' },
      { title: 'In italiano', body: "A seconda dell'app, le schermate o le spiegazioni sono in italiano." },
      {
        title: 'Gratis e open source',
        body: "Rilasciate con licenza MIT. Le app che usano l'IA costano solo quanto chiede il tuo fornitore di IA.",
      },
    ],
    notFoundTitle: "Alla deriva?",
    notFoundBody: "Questa pagina non esiste.",
    backHome: "Torna all'inizio",
    footer: "Open source, licenza MIT",
    consentText: 'Questo sito vorrebbe usare Google Analytics per contare le visite e vedere quali pagine vengono lette. Solo se lo consenti, vengono salvati dei cookie e inviati dati di utilizzo a Google.',
    consentLearnMore: 'Come Google usa questi dati',
    consentAllow: 'Consenti',
    consentDecline: 'Rifiuta',
    consentSettings: 'Impostazioni dei cookie',
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
      privacy:
        "Nessun account, nessun server. Il riconoscimento vocale e la voce funzionano sul tuo computer, e lì resta anche la tua cronologia.",
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
      privacy:
        "Nessun account, nessun server. Il riconoscimento vocale e la voce funzionano sul tuo computer, e lì resta anche la tua cronologia.",
      platforms: ["macOS (Apple Silicon)", "Windows (64 bit)"],
      screenshots: [
        'Una conversazione in SOS My Language: quello che hai detto, la correzione e la battuta successiva del partner',
        'La scelta della lingua da allenare in SOS My Language: inglese o tedesco',
        'La pagina iniziale di SOS My Language: argomenti di conversazione per categoria',
      ],
    },
    feed: {
      tagline: 'Lettore di feed RSS e Atom',
      hookTitle: 'Troppe schede aperte?',
      hookAccent: 'I soccorsi stanno arrivando.',
      summary:
        "Un lettore per i feed RSS e Atom dei siti di notizie e dei blog che segui, che funziona sul tuo computer. Iscriviti a un feed, trova tutti i nuovi articoli in un'unica lista e leggili dentro l'app, pagina dopo pagina.",
      features: [
        {
          title: "Un'unica lista per tutto ciò che segui",
          body: 'Gli articoli di tutti i feed, dal più recente, oppure quelli di un solo feed.',
        },
        {
          title: 'Leggere come un libro',
          body: "L'articolo si apre come solo testo, senza pubblicità, menu o script della pagina, in pagine che giri con un tocco, una o due alla volta.",
        },
        {
          title: 'Carta su misura',
          body: "Sei colori di sfondo, e la dimensione del testo, l'interlinea e i margini che preferisci.",
        },
        {
          title: 'Salva in Markdown',
          body: 'Scarica il testo di un articolo come file Markdown, con titolo, indirizzo e data.',
        },
        {
          title: 'Schermate in 19 lingue',
          body: "Le schermate dell'app sono disponibili in 19 lingue, con un tema chiaro e uno scuro.",
        },
        {
          title: 'Sempre aggiornata',
          body: "All'avvio l'app cerca una nuova versione e, su macOS, si aggiorna con un clic.",
        },
      ],
      privacy:
        'Nessun account, nessun server. Le tue iscrizioni, i loro articoli e le tue impostazioni restano in un file sul tuo computer.',
      platforms: ['macOS (Apple Silicon)', 'Windows (64 bit)'],
      screenshots: [
        "Il mio feed in SOS My Feed: gli articoli di tre feed in un'unica lista, dal più recente",
        'Un articolo aperto nel lettore di SOS My Feed: due pagine affiancate su carta seppia',
      ],
    },
  },
} satisfies Messages;
