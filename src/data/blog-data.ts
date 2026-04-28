// src/data/blog-data.ts

export interface BlogArticle {
  slug: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  category: string;
  author: string;
  image: string;
  featured?: boolean;
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "historia-da-nossa-app",
    title: "A História da Nossa App",
    summary: "Descubra como transformamos linhas de código em aventuras linguísticas globais.",
    category: "Bastidores",
    author: "Equipa MyDuolingo",
    date: "28 de Abril, 2026",
    image: "/images/duolingo1.png",
    featured: true,
    content: `<p>Tudo começou com um sonho simples: tornar a educação gratuita e divertida para todos...</p>`
  },
  {
    slug: "psicologia-das-ligas",
    title: "A Psicologia por trás das Ligas",
    summary: "Porque é que somos tão competitivos? Entenda a ciência da dopamina nas Ligas Semanais.",
    category: "Gamificação",
    author: "Dr. Linguística",
    date: "27 de Abril, 2026",
    image: "/images/duolingo10.png",
    content: `
      <p>Já te perguntaste porque é que não consegues parar de subir na Liga Diamante? A resposta está no teu cérebro.</p>
      <p>O sistema de ligas da MyDuolingo utiliza o conceito de <strong>recompensa variável</strong>. Quando ultrapassas um rival, o teu cérebro liberta uma pequena dose de dopamina que te motiva a continuar.</p>
      <h2>O Efeito de Pertença</h2>
      <p>Estar num grupo de 30 pessoas com o mesmo objetivo cria uma comunidade competitiva mas saudável.</p>
    `
  },
  {
    slug: "segredos-do-arcade",
    title: "Segredos do Arcade Hub",
    summary: "Dicas de mestre para bater recordes no Meteor Swipe e no Vocabulary Sprint.",
    category: "Dicas",
    author: "Pro Gamer",
    date: "26 de Abril, 2026",
    image: "/images/duolingo25.png",
    content: `
      <p>O Arcade Hub não é apenas diversão; é treino de reflexos puro. Aqui estão 3 dicas para dominares os rankings:</p>
      <ul>
        <li><strong>Foco no Combo:</strong> Não falhes nenhuma palavra para manter o multiplicador 3x.</li>
        <li><strong>Ritmo Constante:</strong> No Meteor Swipe, a consistência bate a velocidade descontrolada.</li>
        <li><strong>Visão Periférica:</strong> Antecipa a próxima meteora antes de terminares a atual.</li>
      </ul>
    `
  },
  {
    slug: "ia-na-aprendizagem",
    title: "Como a IA decide o que aprendes?",
    summary: "Entenda os bastidores do Marco, o nosso tutor inteligente.",
    category: "Tecnologia",
    author: "Equipa IA",
    date: "25 de Abril, 2026",
    image: "/images/duolingo15.png",
    content: `<p>O nosso tutor, Marco, analisa os teus erros em milissegundos...</p>`
  },
  {
    slug: "wall-of-love-melhores",
    title: "Wall of Love: O Top 10",
    summary: "Os testemunhos mais emocionantes e engraçados da nossa comunidade este mês.",
    category: "Comunidade",
    author: "Equipa Social",
    date: "24 de Abril, 2026",
    image: "/images/duolingo38.png",
    content: `
      <p>A nossa comunidade é o que nos move. Desde alunos que aprenderam japonês para viajar, até avós que jogam com os netos.</p>
      <p>Selecionámos as 10 assinaturas mais criativas do nosso Wall of Love. O amor pela aprendizagem não tem fronteiras!</p>
    `
  }
];
