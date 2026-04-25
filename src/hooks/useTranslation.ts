import { useState, useCallback } from 'react';

// Simulated Translations Object Dictionary (i18n)
const translations = {
  pt: {
    "header.login": "Entrar",
    "hero.title": "O jeito grátis, divertido e eficaz de aprender um idioma!",
    "hero.start": "Começar agora",
    "hero.account": "Já tenho uma conta",
    "features.1.title": "Grátis. Divertido. Eficaz.",
    "features.1.desc": "Aprender com o MyDuolingo é divertido, e pesquisas comprovam que funciona mesmo! Com lições rápidas e curtinhas, você ganha pontos e desbloqueia novos níveis enquanto aprende a se comunicar na vida real.",
    "features.2.title": "Baseado na ciência",
    "features.2.desc": "Combinamos metodologias baseadas em pesquisas com um conteúdo encantador para criar cursos eficazes que ensinam leitura, escrita, escuta e fala!",
    "features.3.title": "Mantenha a motivação",
    "features.3.desc": "Fica fácil criar o hábito de aprender idiomas com recursos que parecem de jogo, desafios divertidos e lembretes do nosso mascote simpático.",
    "features.4.title": "Aprendizado feito para você",
    "features.4.desc": "As lições combinam o melhor da inteligência artificial e da ciência da linguagem e são feitas sob medida para ajudar você a aprender no nível e ritmo certos.",
    "eco.title": "Aprenda onde e quando quiser",
    "eco.web": "Acessar Web",
    "eco.win": "Baixar para Windows",
    "eco.android": "App Android",
    "super.cta": "TESTE UMA SEMANA GRÁTIS",
    "test.title": "MyDuolingo English Test",
    "test.desc": "Nosso teste de inglês rápido, acessível e conveniente integra inteligência artificial e conhecimentos de ponta sobre avaliação. Faça o teste onde e quando quiser.",
    "test.cta": "CERTIFIQUE O SEU INGLÊS",
    "schools.title": "MyDuolingo for Schools",
    "schools.desc": "Professores, estamos aqui para ajudar! Nossa ferramenta gratuita apoia os seus alunos enquanto eles aprendem idiomas pelo aplicativo, tanto dentro quanto fora da sala de aula.",
    "schools.cta": "USE COM A SUA TURMA",
    "abc.title": "MyDuolingo ABC",
    "abc.desc": "Do ensino de idiomas à alfabetização! Com lições divertidas de fônica e histórias encantadoras, o MyDuolingo ABC ajuda crianças de 3 a 8 anos a aprender a ler e escrever — totalmente grátis!",
    "abc.cta": "SAIBA MAIS SOBRE O ABC",
    "cta.title": "Aprenda um idioma com o MyDuolingo",
    "footer.rights": "© 2026 MyDuolingo. Todos os direitos reservados."
  },
  en: {
    "header.login": "Log in",
    "hero.title": "The free, fun, and effective way to learn a language!",
    "hero.start": "Get started",
    "hero.account": "I already have an account",
    "features.1.title": "Free. Fun. Effective.",
    "features.1.desc": "Learning with MyDuolingo is fun, and research shows that it works! With quick, bite-sized lessons, you'll earn points and unlock new levels while gaining real-world communication skills.",
    "features.2.title": "Backed by science",
    "features.2.desc": "We use a combination of research-backed teaching methods and delightful content to create courses that effectively teach reading, writing, listening, and speaking skills!",
    "features.3.title": "Stay motivated",
    "features.3.desc": "We make it easy to form a habit of language learning, with game-like features, fun challenges, and reminders from our friendly mascot.",
    "features.4.title": "Personalized learning",
    "features.4.desc": "Combining the best of AI and language science, lessons are tailored to help you learn at just the right level and pace.",
    "eco.title": "Learn anywhere, anytime",
    "eco.web": "Access Web",
    "eco.win": "Download for Windows",
    "eco.android": "Android App",
    "super.cta": "TRY A FREE WEEK",
    "test.title": "MyDuolingo English Test",
    "test.desc": "Our fast, affordable, and convenient English test integrates AI and cutting-edge assessment science. Take it anywhere, anytime.",
    "test.cta": "CERTIFY YOUR ENGLISH",
    "schools.title": "MyDuolingo for Schools",
    "schools.desc": "Teachers, we’re here to help! Our free tool supports your students as they learn languages on the app, both inside and outside the classroom.",
    "schools.cta": "USE WITH YOUR CLASS",
    "abc.title": "MyDuolingo ABC",
    "abc.desc": "From language learning to literacy! With fun phonics lessons and charming stories, MyDuolingo ABC helps children ages 3-8 learn to read and write—completely free!",
    "abc.cta": "LEARN MORE ABOUT ABC",
    "cta.title": "Learn a language with MyDuolingo",
    "footer.rights": "© 2026 MyDuolingo. All rights reserved."
  }
} as const;

type Language = keyof typeof translations;
type TranslationKey = keyof typeof translations['pt'];

export function useTranslation() {
  const [lang, setLang] = useState<Language>('pt');

  const t = useCallback((key: TranslationKey) => {
    return translations[lang][key] || key;
  }, [lang]);

  const toggleLang = () => setLang(prev => (prev === 'pt' ? 'en' : 'pt'));

  return { t, lang, setLang, toggleLang };
}
