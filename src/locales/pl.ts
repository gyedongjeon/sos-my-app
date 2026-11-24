import type { Messages } from './types';

export default {
  ui: {
    siteDescription:
      'Seria aplikacji na ratunek, gdy angielski albo niemiecki zawodzi. Ćwicz rozmowy kwalifikacyjne i mówienie na głos, na własnym komputerze.',
    heroTitle: 'Język cię zawodzi?',
    heroAccent: 'Wyślij sygnał SOS.',
    heroLead:
      'Zbliża się rozmowa kwalifikacyjna albo brakuje ci słów? Seria SOS to darmowe aplikacje na komputer do ćwiczenia angielskiego i niemieckiego na głos. Działają na twoim komputerze, a wybrany przez ciebie model AI na bieżąco poprawia twoje błędy.',
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
    privacy:
      'Bez konta i bez serwera. Rozpoznawanie mowy i głos działają na twoim komputerze i tam też zapisuje się historia.',
    readme: 'Instrukcja instalacji i pełna lista funkcji są w README.',
    commonTitle: 'Co łączy aplikacje',
    common: [
      { title: 'Mów i słuchaj', body: 'Odpowiadaj na głos zamiast pisać, a rozmówcę najpierw słuchaj, a dopiero potem czytaj.' },
      { title: 'Na twoim komputerze', body: 'Instalujesz i korzystasz bez rejestracji. Historia zostaje na twoim komputerze.' },
      { title: 'Wyjaśnienia po polsku', body: 'Poprawki są wyjaśniane po polsku, a ćwiczysz w języku, którego się uczysz.' },
      {
        title: 'Darmowe i otwarte',
        body: 'Udostępnione na licencji MIT. Płacisz tylko wybranemu dostawcy AI za to, z czego korzystasz.',
      },
    ],
    notFoundTitle: 'Dryfujesz?',
    notFoundBody: 'Ta strona nie istnieje.',
    backHome: 'Wróć na stronę główną',
    footer: 'Otwarte oprogramowanie, licencja MIT',
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
      platforms: ['macOS (Apple Silicon)', 'Windows (64-bitowy)'],
      screenshots: [
        'Rozmowa w SOS My Language: to, co powiedziałeś, poprawka i kolejna kwestia partnera',
        'Wybór języka do ćwiczeń w SOS My Language: angielski lub niemiecki',
        'Strona główna SOS My Language: tematy rozmów według kategorii',
      ],
    },
  },
} satisfies Messages;
