import type { Messages } from './types';

export default {
  ui: {
    siteDescription:
      'Seria małych, darmowych aplikacji na komputer, które przychodzą na ratunek. Działają na twoim komputerze, bez zakładania konta.',
    heroTitle: 'Potrzebujesz ratunku?',
    heroAccent: 'Wyślij sygnał SOS.',
    heroLead:
      'Zbliża się rozmowa kwalifikacyjna, brakuje ci słów albo masz otwartych za dużo kart? Seria SOS to darmowe aplikacje na komputer, każda na taką właśnie chwilę. Działają na twoim komputerze, bez zakładania konta.',
    appsHeading: 'Aplikacje',
    language: 'Język',
    download: 'Pobierz najnowszą wersję',
    viewSource: 'Zobacz na GitHubie',
    features: 'Funkcje',
    screenshots: 'Zrzuty ekranu',
    platforms: 'Platformy',
    requirementsHeading: 'Zanim zaczniesz',
    requirements:
      'Do poprawek i ocen AI potrzebujesz klucza API wybranego dostawcy (Google Gemini, Claude, OpenAI i innych). Jeśli dopiero zaczynasz, Google Gemini ma darmowy plan.',
    privacyHeading: 'Twoje dane zostają u ciebie',
    readme: 'Instrukcja instalacji i pełna lista funkcji są w README.',
    commonTitle: 'Co łączy aplikacje',
    common: [
      { title: 'Na twoim komputerze', body: 'Instalujesz i korzystasz bez rejestracji, na macOS i Windows.' },
      {
        title: 'Twoje dane są twoje',
        body: 'To, co robisz w aplikacjach, zostaje na twoim komputerze, a nie na serwerze.',
      },
      { title: 'Po polsku', body: 'W zależności od aplikacji ekrany albo wyjaśnienia są po polsku.' },
      {
        title: 'Darmowe i otwarte',
        body: 'Udostępnione na licencji MIT. Za aplikacje korzystające z AI płacisz tylko wybranemu dostawcy AI.',
      },
    ],
    notFoundTitle: 'Dryfujesz?',
    notFoundBody: 'Ta strona nie istnieje.',
    backHome: 'Wróć na stronę główną',
    footer: 'Otwarte oprogramowanie, licencja MIT',
    consentText: 'Ta strona chciałaby używać Google Analytics, aby liczyć odwiedziny i sprawdzać, które strony są czytane. Tylko za twoją zgodą zapisywane są pliki cookie, a dane o korzystaniu trafiają do Google.',
    consentLearnMore: 'Jak Google wykorzystuje te dane',
    consentAllow: 'Zezwól',
    consentDecline: 'Odrzuć',
    consentSettings: 'Ustawienia cookie',
  },
  apps: {
    interview: {
      tagline: 'Ćwiczenie rozmów kwalifikacyjnych po angielsku',
      hookTitle: 'Rozmowa kwalifikacyjna za pasem?',
      hookAccent: 'Pomoc już płynie.',
      summary:
        'Aplikacja do próbnych rozmów kwalifikacyjnych po angielsku, która działa na twoim komputerze. Zadaje pytania na głos, nagrywa twoją odpowiedź i osobno ocenia twój angielski oraz treść odpowiedzi.',
      features: [
        {
          title: 'Najpierw ze słuchu',
          body: 'Rekruter czyta każde pytanie na głos, a jego tekst pozostaje ukryty, dopóki o niego nie poprosisz.',
        },
        { title: 'Dodatkowe pytania', body: 'Do dwóch dodatkowych pytań, które drążą twoją odpowiedź, jak na prawdziwej rozmowie.' },
        {
          title: 'Dwie osobne oceny',
          body: 'Angielski (gramatyka, słownictwo, naturalność, wymowa, intonacja, akcent) i treść (trafność, struktura, konkretność), a do tego poprawione zdania i mocniejsza wersja twojej odpowiedzi.',
        },
        {
          title: 'Pytania pod wymarzoną pracę',
          body: 'Dodaj ogłoszenie o pracę (link lub tekst) i swoje CV, a dostaniesz pytania pod to stanowisko.',
        },
        {
          title: 'Uwagi po polsku',
          body: 'Wyjaśnienia możesz dostawać po polsku. Pytania i przykładowe odpowiedzi zostają po angielsku.',
        },
        { title: 'Historia', body: 'Każda odpowiedź zapisuje się z transkrypcją, ocenami i nagraniem, więc widzisz swoje postępy.' },
      ],
      privacy:
        'Bez konta i bez serwera. Rozpoznawanie mowy i głos działają na twoim komputerze i tam też zapisuje się historia.',
      platforms: ['macOS (Apple Silicon)', 'Windows (64-bitowy)'],
      screenshots: ['Ekran główny SOS My Interview: dodawanie ogłoszenia o pracę i typowe pytania'],
    },
    language: {
      tagline: 'Ćwiczenie mówienia po angielsku i niemiecku',
      hookTitle: 'Brakuje ci słów?',
      hookAccent: 'Pomoc już płynie.',
      summary:
        'Aplikacja do ćwiczenia mówienia w języku, którego się uczysz, działająca na twoim komputerze. Wybierz angielski lub niemiecki, wybierz temat i porozmawiaj o nim na głos z partnerem AI, który odpowiada głosem i na bieżąco poprawia to, co mówisz.',
      features: [
        {
          title: 'Kilka języków w jednej aplikacji',
          body: 'Przy pierwszym uruchomieniu wybierz angielski lub niemiecki i zmieniaj w dowolnej chwili. Każdy język ma własne tematy, poprawki, historię i głosy.',
        },
        { title: 'Przede wszystkim mówienie', body: 'Odpowiadasz głosem, nie piszesz; twoje słowa są automatycznie zapisywane.' },
        {
          title: 'Poprawki na bieżąco',
          body: 'Po każdej twojej wypowiedzi widzisz najważniejszą poprawkę: lepsze zdanie i wyjaśnienie. Lepsze zdanie możesz też odsłuchać.',
        },
        {
          title: 'Jak wyraźnie mówisz',
          body: 'Przy każdej wypowiedzi: ocena wyrazistości, słowa trudne do rozpoznania i tempo mówienia.',
        },
        {
          title: '40 tematów w 9 kategoriach',
          body: 'Codzienne rozmowy, praca, szkoła, zakupy, jedzenie, podróże, usługi, dom i wyrażanie opinii, a do tego własne tematy.',
        },
        {
          title: 'Wzorce zdań według poziomu',
          body: '100 wzorców od A1 do C2. Widzisz zdanie w swoim języku i mówisz je w języku, który ćwiczysz.',
        },
        {
          title: 'Nauka z filmami z YouTube',
          body: 'Wklej link i słuchaj zdanie po zdaniu: z powtórkami, wolniejszym tempem i powtarzaniem za lektorem (shadowing).',
        },
        {
          title: 'Ćwicz swoje poprawki',
          body: 'Wszystkie poprawki trafiają w jedno miejsce, gdzie powtarzasz lepsze zdanie, aż wyjdzie dobrze.',
        },
        {
          title: 'Podsumowanie na koniec',
          body: 'Zakończ rozmowę i zobacz, co ci wyszło, nad czym popracować i jakie wyrażenia wypróbować następnym razem.',
        },
      ],
      privacy:
        'Bez konta i bez serwera. Rozpoznawanie mowy i głos działają na twoim komputerze i tam też zapisuje się historia.',
      platforms: ['macOS (Apple Silicon)', 'Windows (64-bitowy)'],
      screenshots: [
        'Rozmowa w SOS My Language: to, co powiedziałeś, poprawka i kolejna kwestia partnera',
        'Wybór języka do ćwiczeń w SOS My Language: angielski lub niemiecki',
        'Strona główna SOS My Language: tematy rozmów według kategorii',
      ],
    },
    feed: {
      tagline: 'Czytnik kanałów RSS i Atom',
      hookTitle: 'Za dużo otwartych kart?',
      hookAccent: 'Pomoc już płynie.',
      summary:
        'Czytnik kanałów RSS i Atom serwisów informacyjnych i blogów, które śledzisz, działający na twoim komputerze. Zasubskrybuj kanał, zobacz wszystkie nowe artykuły na jednej liście i czytaj je w aplikacji, strona po stronie.',
      features: [
        {
          title: 'Jedna lista na wszystko, co śledzisz',
          body: 'Artykuły ze wszystkich kanałów, od najnowszych, albo tylko z jednego kanału.',
        },
        {
          title: 'Czytanie jak w książce',
          body: 'Artykuł otwiera się jako sam tekst, bez reklam, menu i skryptów strony, na stronach, które przewracasz dotknięciem, po jednej lub po dwie.',
        },
        {
          title: 'Papier według gustu',
          body: 'Sześć kolorów tła oraz wybrany rozmiar tekstu, odstęp między wierszami i marginesy.',
        },
        { title: 'Zapis do Markdown', body: 'Pobierz tekst artykułu jako plik Markdown, z tytułem, adresem i datą.' },
        {
          title: 'Ekrany w 19 językach',
          body: 'Ekrany aplikacji są dostępne w 19 językach, z jasnym i ciemnym motywem.',
        },
        {
          title: 'Sama się aktualizuje',
          body: 'Przy uruchomieniu aplikacja sprawdza, czy jest nowa wersja, a na macOS aktualizuje się jednym kliknięciem.',
        },
      ],
      privacy:
        'Bez konta i bez serwera. Twoje subskrypcje, ich artykuły i ustawienia są zapisane w pliku na twoim komputerze.',
      platforms: ['macOS (Apple Silicon)', 'Windows (64-bitowy)'],
      screenshots: [
        'Mój kanał w SOS My Feed: artykuły z trzech kanałów na jednej liście, od najnowszych',
        'Artykuł otwarty w czytniku SOS My Feed: dwie strony obok siebie na papierze w kolorze sepii',
      ],
    },
  },
} satisfies Messages;
