import type { Messages } from './types';

export default {
  ui: {
    siteDescription:
      'Eine Reihe kleiner, kostenloser Desktop-Apps, die dir aus der Klemme helfen. Sie laufen auf deinem eigenen Computer, ganz ohne Konto.',
    heroTitle: 'Brauchst du Rettung?',
    heroAccent: 'Setz einen Notruf ab.',
    heroLead:
      'Ein Vorstellungsgespräch steht an, dir fehlen die Worte, oder du hast zu viele Tabs offen: Die SOS-Reihe besteht aus kostenlosen Desktop-Apps, jede für einen solchen Moment. Sie laufen auf deinem eigenen Computer, ganz ohne Konto.',
    appsHeading: 'Apps',
    language: 'Sprache',
    download: 'Neueste Version herunterladen',
    viewSource: 'Auf GitHub ansehen',
    features: 'Funktionen',
    screenshots: 'Screenshots',
    platforms: 'Läuft auf',
    requirementsHeading: 'Bevor du loslegst',
    requirements:
      'Für das KI-Feedback brauchst du einen API-Schlüssel des Anbieters deiner Wahl (Google Gemini, Claude, OpenAI und weitere). Wenn du neu dabei bist: Google Gemini hat ein kostenloses Kontingent.',
    privacyHeading: 'Deine Daten bleiben auf deinem Computer',
    readme: 'Installationsschritte und alle Funktionen findest du in der README.',
    commonTitle: 'Was die Apps gemeinsam haben',
    common: [
      {
        title: 'Auf deinem Computer',
        body: 'Installieren und loslegen, ganz ohne Anmeldung, auf macOS und Windows.',
      },
      {
        title: 'Deine Daten gehören dir',
        body: 'Was du in den Apps tust, bleibt auf deinem Rechner, nicht auf einem Server.',
      },
      { title: 'Auf Deutsch', body: 'Je nach App sind die Oberfläche oder die Erklärungen auf Deutsch.' },
      {
        title: 'Kostenlos und Open Source',
        body: 'Veröffentlicht unter der MIT-Lizenz. Apps mit KI kosten nur, was dein KI-Anbieter berechnet.',
      },
    ],
    notFoundTitle: 'Auf hoher See verirrt?',
    notFoundBody: 'Diese Seite gibt es nicht.',
    backHome: 'Zurück zum Anfang',
    footer: 'Open Source, MIT-Lizenz',
    consentText: 'Diese Seite möchte Google Analytics nutzen, um Besuche zu zählen und zu sehen, welche Seiten gelesen werden. Nur wenn du zustimmst, werden Cookies gespeichert und Nutzungsdaten an Google gesendet.',
    consentLearnMore: 'Wie Google diese Daten nutzt',
    consentAllow: 'Zulassen',
    consentDecline: 'Ablehnen',
    consentSettings: 'Cookie-Einstellungen',
  },
  apps: {
    interview: {
      tagline: 'Vorstellungsgespräche auf Englisch üben',
      hookTitle: 'Bald ein Vorstellungsgespräch?',
      hookAccent: 'Hilfe ist unterwegs.',
      summary:
        'Eine App für Probe-Vorstellungsgespräche auf Englisch, die auf deinem eigenen Rechner läuft. Sie stellt die Fragen laut, nimmt deine Antwort auf und bewertet dein Englisch und den Inhalt deiner Antwort.',
      features: [
        {
          title: 'Erst zuhören',
          body: 'Jede Frage wird dir laut vorgelesen; der Text bleibt verborgen, bis du ihn einblendest.',
        },
        {
          title: 'Nachfragen',
          body: 'Bis zu zwei Nachfragen gehen auf das ein, was du gerade gesagt hast, wie in einem echten Gespräch.',
        },
        {
          title: 'Zwei getrennte Bewertungen',
          body: 'Englisch (Grammatik, Wortschatz, Natürlichkeit, Aussprache, Intonation, Betonung) und Inhalt (Relevanz, Aufbau, Konkretheit), mit korrigierten Sätzen und einer stärkeren Version deiner Antwort.',
        },
        {
          title: 'Fragen für deinen Wunschjob',
          body: 'Füge eine Stellenanzeige (Link oder Text) und deinen Lebenslauf hinzu und bekomm Fragen, die zu dieser Stelle passen.',
        },
        {
          title: 'Feedback auf Deutsch',
          body: 'Erklärungen bekommst du auf Deutsch; Fragen und Musterantworten bleiben auf Englisch.',
        },
        {
          title: 'Verlauf',
          body: 'Jede Antwort wird mit Transkript, Bewertung und Aufnahme gespeichert, so siehst du deine Fortschritte.',
        },
      ],
      privacy:
        'Kein Konto, kein Server. Spracherkennung und Sprachausgabe laufen auf deinem Computer, und dort wird auch dein Verlauf gespeichert.',
      platforms: ['macOS (Apple Silicon)', 'Windows (64-Bit)'],
      screenshots: ['Die Startseite von SOS My Interview: Stellenanzeige hinzufügen und häufige Fragen'],
    },
    language: {
      tagline: 'Englisch und Deutsch sprechen üben',
      hookTitle: 'Dir fehlen die Worte?',
      hookAccent: 'Hilfe ist unterwegs.',
      summary:
        'Eine App zum Sprechenüben in der Sprache, die du lernst, und sie läuft auf deinem eigenen Rechner. Wähl Englisch oder Deutsch, such dir ein Thema aus, sprich es laut mit einem KI-Partner durch, der dir mit Stimme antwortet, und lass das Gesagte direkt korrigieren.',
      features: [
        {
          title: 'Mehrere Sprachen in einer App',
          body: 'Beim ersten Start wählst du Englisch oder Deutsch und kannst jederzeit wechseln. Jede Sprache behält ihre eigenen Themen, Korrekturen, Verläufe und Stimmen.',
        },
        {
          title: 'Sprechen im Mittelpunkt',
          body: 'Du antwortest mit deiner Stimme statt mit der Tastatur; was du sagst, wird für dich mitgeschrieben.',
        },
        {
          title: 'Korrekturen beim Sprechen',
          body: 'Nach jeder Äußerung siehst du die wichtigste Verbesserung mit dem besseren Satz und der Begründung, und du kannst dir den besseren Satz anhören.',
        },
        {
          title: 'Wie deutlich du sprichst',
          body: 'Zu jeder Zeile gibt es einen Verständlichkeitswert, die schwer erkannten Wörter und dein Sprechtempo.',
        },
        {
          title: '40 Themen in 9 Kategorien',
          body: 'Smalltalk, Arbeit, Schule, Einkaufen, Essen, Reisen, Dienstleistungen, Zuhause und die eigene Meinung sagen, dazu eigene Themen.',
        },
        {
          title: 'Satzmuster nach Niveau',
          body: '100 Muster von A1 bis C2. Du siehst einen Satz in deiner Sprache und sagst ihn in der Sprache, die du übst.',
        },
        {
          title: 'Lernen mit YouTube-Videos',
          body: 'Füg einen Link ein und hör Satz für Satz zu, mit Wiederholen, langsamerem Tempo und Shadowing.',
        },
        {
          title: 'Korrekturen üben',
          body: 'Alle Korrekturen landen an einem Ort, wo du den besseren Satz sprichst, bis er sitzt.',
        },
        {
          title: 'Eine Zusammenfassung zum Schluss',
          body: 'Beende ein Gespräch und sieh, was gut lief, woran du arbeiten kannst und welche Ausdrücke du nächstes Mal ausprobieren kannst.',
        },
      ],
      privacy:
        'Kein Konto, kein Server. Spracherkennung und Sprachausgabe laufen auf deinem Computer, und dort wird auch dein Verlauf gespeichert.',
      platforms: ['macOS (Apple Silicon)', 'Windows (64-Bit)'],
      screenshots: [
        'Ein Gespräch in SOS My Language: was du gesagt hast, die Korrektur und die nächste Antwort deines Partners',
        'Die Sprachauswahl in SOS My Language: Englisch oder Deutsch',
        'Die Startseite von SOS My Language: Gesprächsthemen nach Kategorie',
      ],
    },
    feed: {
      tagline: 'Feedreader für RSS und Atom',
      hookTitle: 'Zu viele Tabs offen?',
      hookAccent: 'Hilfe ist unterwegs.',
      summary:
        'Ein Reader für die RSS- und Atom-Feeds der Nachrichtenseiten und Blogs, denen du folgst, auf deinem eigenen Computer. Abonniere einen Feed, sieh alle neuen Artikel in einer Liste und lies sie in der App, Seite für Seite.',
      features: [
        {
          title: 'Eine Liste für alles, dem du folgst',
          body: 'Die Artikel aller Feeds, die neuesten zuerst, oder nur die eines Feeds.',
        },
        {
          title: 'Lesen wie in einem Buch',
          body: 'Ein Artikel öffnet sich als reiner Text, ohne Werbung, Menüs oder Skripte der Seite, auf Seiten, die du mit einem Tippen umblätterst, eine oder zwei auf einmal.',
        },
        {
          title: 'Papier nach deinem Geschmack',
          body: 'Sechs Hintergrundfarben, dazu Schriftgröße, Zeilenabstand und Ränder nach Wahl.',
        },
        {
          title: 'Als Markdown speichern',
          body: 'Lade den Text eines Artikels als Markdown-Datei herunter, mit Titel, Adresse und Datum.',
        },
        {
          title: 'Oberfläche in 19 Sprachen',
          body: 'Die App gibt es in 19 Sprachen, mit hellem und dunklem Design.',
        },
        {
          title: 'Hält sich selbst aktuell',
          body: 'Die App sucht beim Start nach einer neuen Version und aktualisiert sich auf macOS mit einem Klick.',
        },
      ],
      privacy:
        'Kein Konto, kein Server. Deine Abos, ihre Artikel und deine Einstellungen liegen in einer Datei auf deinem Computer.',
      platforms: ['macOS (Apple Silicon)', 'Windows (64-Bit)'],
      screenshots: [
        'Mein Feed in SOS My Feed: die Artikel von drei Feeds in einer Liste, die neuesten zuerst',
        'Ein Artikel im Reader von SOS My Feed: zwei Seiten nebeneinander auf Sepiapapier',
      ],
    },
  },
} satisfies Messages;
