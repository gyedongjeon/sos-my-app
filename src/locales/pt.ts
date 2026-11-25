import type { Messages } from './types';

export default {
  ui: {
    siteDescription:
      'Uma série de pequenos apps gratuitos para computador que vêm ao seu resgate. Eles rodam no seu próprio computador, sem conta para criar.',
    heroTitle: 'Precisa de resgate?',
    heroAccent: 'Mande um sinal de socorro.',
    heroLead:
      'Uma entrevista chegando, faltam palavras ou abas abertas demais? A série SOS reúne apps gratuitos para computador, cada um para um momento assim. Eles rodam no seu próprio computador, sem conta para criar.',
    appsHeading: 'Apps',
    language: 'Idioma',
    download: 'Baixar a versão mais recente',
    viewSource: 'Ver no GitHub',
    features: 'Recursos',
    screenshots: 'Capturas de tela',
    platforms: 'Funciona em',
    requirementsHeading: 'Antes de começar',
    requirements:
      'O feedback da IA precisa de uma chave de API do provedor que você escolher (Google Gemini, Claude, OpenAI e outros). Se você está começando agora, o Google Gemini tem um plano gratuito.',
    privacyHeading: 'Seus dados ficam no seu computador',
    readme: 'Os passos de instalação e a lista completa de recursos estão no README.',
    commonTitle: 'O que os apps têm em comum',
    common: [
      { title: 'No seu computador', body: 'Instale e use sem cadastro, no macOS e no Windows.' },
      { title: 'Seus dados são seus', body: 'O que você faz nos apps fica na sua máquina, não em um servidor.' },
      { title: 'Em português', body: 'Dependendo do app, as telas ou as explicações aparecem em português.' },
      {
        title: 'Gratuito e de código aberto',
        body: 'Publicado sob a licença MIT. Nos apps que usam IA, você só paga o que o seu provedor de IA cobrar.',
      },
    ],
    notFoundTitle: 'À deriva?',
    notFoundBody: 'Esta página não existe.',
    backHome: 'Voltar ao início',
    footer: 'Código aberto, licença MIT',
  },
  apps: {
    interview: {
      tagline: 'Prática de entrevistas em inglês',
      hookTitle: 'Tem uma entrevista chegando?',
      hookAccent: 'A ajuda está a caminho.',
      summary:
        'Um app de entrevista simulada para praticar entrevistas de emprego em inglês, no seu próprio computador. Ele faz as perguntas em voz alta, grava a sua resposta e avalia separadamente o seu inglês e o que você disse.',
      features: [
        { title: 'Ouvir primeiro', body: 'O entrevistador lê cada pergunta em voz alta, e o texto fica escondido até você pedir.' },
        {
          title: 'Perguntas de aprofundamento',
          body: 'Até duas perguntas extras aprofundam o que você acabou de dizer, como faria um entrevistador de verdade.',
        },
        {
          title: 'Duas notas separadas',
          body: 'Inglês (gramática, vocabulário, naturalidade, pronúncia, entonação, tonicidade) e conteúdo (relevância, estrutura, especificidade), com frases corrigidas e uma versão melhor da sua resposta.',
        },
        {
          title: 'Perguntas para a vaga que você quer',
          body: 'Adicione uma vaga (link ou texto) e o seu currículo para receber perguntas feitas para essa função.',
        },
        {
          title: 'Feedback em português',
          body: 'Receba as explicações em português; as perguntas e as respostas-modelo continuam em inglês.',
        },
        {
          title: 'Histórico',
          body: 'Cada resposta fica salva com a transcrição, as notas e a gravação, para você acompanhar a sua evolução.',
        },
      ],
      privacy:
        'Não há conta nem servidor. O reconhecimento de fala e a voz do app rodam no seu computador, e o seu histórico fica guardado nele.',
      platforms: ['macOS (Apple Silicon)', 'Windows (64 bits)'],
      screenshots: ['Tela inicial do SOS My Interview: adicionar uma vaga e perguntas comuns'],
    },
    language: {
      tagline: 'Prática de conversação em inglês e alemão',
      hookTitle: 'Faltam palavras?',
      hookAccent: 'A ajuda está a caminho.',
      summary:
        'Um app para praticar em voz alta o idioma que você está aprendendo, no seu próprio computador. Escolha inglês ou alemão, escolha um tema, converse em voz alta com uma IA que responde por voz e receba correções na hora.',
      features: [
        {
          title: 'Vários idiomas em um só app',
          body: 'Escolha inglês ou alemão na primeira vez que abrir e troque quando quiser. Cada idioma guarda seus próprios temas, correções, histórico e vozes.',
        },
        { title: 'Falar primeiro', body: 'Você responde com a voz, não digitando; o que você diz é transcrito automaticamente.' },
        {
          title: 'Correções na hora',
          body: 'Depois de cada fala, aparece a correção mais útil, com uma frase melhor e o porquê, e você pode ouvir essa frase.',
        },
        {
          title: 'Clareza da sua fala',
          body: 'Cada fala mostra uma nota de clareza, as palavras difíceis de reconhecer e o seu ritmo.',
        },
        {
          title: '40 temas em 9 categorias',
          body: 'Bate-papo do dia a dia, trabalho, estudos, compras, comida, viagem, serviços, casa e dar a sua opinião, além de temas criados por você.',
        },
        {
          title: 'Estruturas de frase por nível',
          body: '100 estruturas do A1 ao C2. Você vê uma frase no seu idioma e fala no idioma que está praticando.',
        },
        {
          title: 'Estude com vídeos do YouTube',
          body: 'Cole um link e ouça uma frase de cada vez, com repetição, velocidade reduzida e shadowing (repetir junto).',
        },
        {
          title: 'Pratique suas correções',
          body: 'Todas as correções ficam reunidas em um só lugar, onde você repete a frase melhor até sair certinho.',
        },
        {
          title: 'Um resumo no final',
          body: 'Encerre uma conversa para ver o que você fez bem, o que melhorar e expressões para usar da próxima vez.',
        },
      ],
      privacy:
        'Não há conta nem servidor. O reconhecimento de fala e a voz do app rodam no seu computador, e o seu histórico fica guardado nele.',
      platforms: ['macOS (Apple Silicon)', 'Windows (64 bits)'],
      screenshots: [
        'Uma conversa no SOS My Language: o que você disse, a correção e a próxima fala do seu parceiro',
        'A escolha do idioma no SOS My Language: inglês ou alemão',
        'A página inicial do SOS My Language: temas de conversa por categoria',
      ],
    },
    feed: {
      tagline: 'Leitor de feeds RSS e Atom',
      hookTitle: 'Abas demais?',
      hookAccent: 'A ajuda está a caminho.',
      summary:
        'Um leitor dos feeds RSS e Atom dos sites de notícias e blogs que você acompanha, rodando no seu próprio computador. Assine um feed, veja todos os artigos novos em uma só lista e leia cada artigo dentro do app, página por página.',
      features: [
        {
          title: 'Uma lista para tudo o que você acompanha',
          body: 'Os artigos de todos os feeds, dos mais recentes aos mais antigos, ou os de um único feed.',
        },
        {
          title: 'Leitura como em um livro',
          body: 'O artigo abre só com o texto, sem os anúncios, menus ou scripts da página, em páginas que você vira com um toque, uma ou duas por vez.',
        },
        {
          title: 'Papel do seu jeito',
          body: 'Seis cores de fundo, e o tamanho do texto, o espaçamento entre linhas e as margens que você escolher.',
        },
        {
          title: 'Salvar em Markdown',
          body: 'Baixe o texto de um artigo como arquivo Markdown, com o título, o endereço e a data.',
        },
        { title: 'Telas em 19 idiomas', body: 'As telas do app estão em 19 idiomas, com tema claro e escuro.' },
        {
          title: 'Sempre atualizado',
          body: 'O app procura uma nova versão ao abrir e, no macOS, se atualiza com um clique.',
        },
      ],
      privacy:
        'Não há conta nem servidor. Suas assinaturas, os artigos delas e suas configurações ficam guardados em um arquivo no seu computador.',
      platforms: ['macOS (Apple Silicon)', 'Windows (64 bits)'],
      screenshots: [
        'Meu feed no SOS My Feed: os artigos de três feeds em uma só lista, dos mais recentes aos mais antigos',
        'Um artigo aberto no leitor do SOS My Feed: duas páginas lado a lado em papel sépia',
      ],
    },
  },
} satisfies Messages;
