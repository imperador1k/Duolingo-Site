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
  },
  es: { "header.login": "Entrar", "hero.title": "¡La forma gratuita, divertida e interactiva de aprender un idioma!", "hero.start": "Empieza ahora", "hero.account": "Ya tengo una cuenta", "features.1.title": "Gratis. Divertido. Eficaz.", "features.1.desc": "¡Aprender con MyDuolingo es divertido y las investigaciones demuestran que funciona! Con lecciones rápidas y cortas, ganas puntos y desbloqueas nuevos niveles mientras aprendes a comunicarte en la vida real.", "features.2.title": "Basado en la ciencia", "features.2.desc": "Combinamos metodologías basadas en investigaciones con un contenido encantador para crear cursos eficaces que enseñan lectura, escritura, escucha y habla.", "features.3.title": "Mantén la motivación", "features.3.desc": "Es fácil crear el hábito de aprender idiomas con recursos que parecen juegos, desafíos divertidos y recordatorios de nuestra simpática mascota.", "features.4.title": "Aprendizaje a tu medida", "features.4.desc": "Las lecciones combinan lo mejor de la inteligencia artificial y la ciencia del lenguaje y están hechas a medida para ayudarte a aprender al nivel y ritmo adecuados.", "eco.title": "Aprende donde e cuando quieras", "eco.web": "Acceder Web", "eco.win": "Descargar para Windows", "eco.android": "App Android", "super.cta": "PRUEBA UNA SEMANA GRATIS", "test.title": "MyDuolingo English Test", "test.desc": "Nuestro examen de inglés rápido, accesible y conveniente integra inteligencia artificial y conocimientos de vanguardia sobre evaluación. Haz el examen donde y cuando quieras.", "test.cta": "CERTIFICA TU INGLÉS", "schools.title": "MyDuolingo for Schools", "schools.desc": "¡Maestros, estamos aquí para ayudar! Nuestra herramienta gratuita apoya a tus alumnos mientras aprenden idiomas a través de la aplicación, tanto dentro como fuera del aula.", "schools.cta": "ÚSALO CON TU CLASE", "abc.title": "MyDuolingo ABC", "abc.desc": "¡De la enseñanza de idiomas a la alfabetización! Con divertidas lecciones de fonética e historias encantadoras, MyDuolingo ABC ayuda a los niños de 3 a 8 años a aprender a leer y escribir, ¡totalmente gratis!", "abc.cta": "MÁS INFORMACIÓN SOBRE ABC", "cta.title": "Aprende un idioma con MyDuolingo", "footer.rights": "© 2026 MyDuolingo. Todos los derechos reservados." },
  fr: { "header.login": "Se connecter", "hero.title": "La méthode gratuite, amusante et efficace pour apprendre uma langue !", "hero.start": "C'est parti", "hero.account": "J'ai déjà um compte", "features.1.title": "Gratuit. Amusant. Efficace.", "features.1.desc": "Apprendre avec MyDuolingo est amusant e les recherches prouvent que ça marche ! Avec des leçons rapides e courtes, tu gagnes des points e débloques de nouveaux niveaux tout en apprenant à communiquer dans la vraie vie.", "features.2.title": "Basé sur la science", "features.2.desc": "Nous combinons des méthodologies basées sur la recherche avec um contenu enchanteur pour créer des cours efficaces qui enseignent la lecture, l'écriture, l'écoute e l'expression orale !", "features.3.title": "Reste motivé", "features.3.desc": "Il est facile de prendre l'habitude d'apprendre des langues com des fonctionnalités de jeu, des défis amusants e des rappels de notre sympathique mascotte.", "features.4.title": "Apprentissage sur mesure", "features.4.desc": "Les leçons combinent le meilleur de l'intelligence artificielle e de la science du langage e sont faites sur mesure pour t'aider à apprendre au bon niveau e au bon rythme.", "eco.title": "Apprends où e quand tu veux", "eco.web": "Accéder au Web", "eco.win": "Télécharger pour Windows", "eco.android": "App Android", "super.cta": "ESSAIE UNE SEMAINE GRATUITE", "test.title": "MyDuolingo English Test", "test.desc": "Notre test d'anglais rapide, abordable e pratique intègre l'intelligence artificielle e des connaissances de pointe en matière d'évaluation. Passe le test où e quand tu veux.", "test.cta": "CERTIFIE TON ANGLAIS", "schools.title": "MyDuolingo for Schools", "schools.desc": "Enseignants, nous sommes là pour vous aider ! Notre outil gratuit soutient vos élèves pendant qu'ils apprennent des langues via l'application, tant à l'intérieur qu'à l'extérieur de la classe.", "schools.cta": "UTILISE AVEC TA CLASSE", "abc.title": "MyDuolingo ABC", "abc.desc": "De l'enseignement des langues à l'alphabétisation ! Avec des leçons de phonétique amusantes e des histoires enchanteresses, MyDuolingo ABC aide os enfants de 3 à 8 ans à apprendre à lire e à écrire — totalement gratuit !", "abc.cta": "EN SAVOIR PLUS SUR ABC", "cta.title": "Apprends une langue avec MyDuolingo", "footer.rights": "© 2026 MyDuolingo. Tous droits réservés." },
  de: { "header.login": "Einloggen", "hero.title": "Die kostenlose, lustige und effektive Art, eine Sprache zu lernen!", "hero.start": "Jetzt loslegen", "hero.account": "Ich habe bereits ein Konto", "features.1.title": "Kostenlos. Lustig. Effektiv.", "features.1.desc": "Lernen mit MyDuolingo macht Spaß und Untersuchungen belegen, dass es wirklich funktioniert! Mit schnellen, kurzen Lektionen sammelst du Punkte und schaltest neue Level frei, während du lernst, im echten Leben zu kommunizieren.", "features.2.title": "Wissenschaftlich fundiert", "features.2.desc": "Wir kombinieren forschungsbasierte Methoden mit ansprechenden Inhalten, um effektive Kurse zu erstellen, die Lesen, Schreiben, Hören und Sprechen lehren!", "features.3.title": "Bleib motiviert", "features.3.desc": "Es ist einfach, sich das Sprachenlernen zur Gewohnheit zu machen, mit spielerischen Funktionen, lustigen Herausforderungen und Erinnerungen von unserem freundlichen Maskottchen.", "features.4.title": "Personalisiertes Lernen", "features.4.desc": "Die Lektionen kombinieren das Beste aus künstlicher Intelligenz und Sprachwissenschaft und sind maßgeschneidert, um dir zu helfen, auf dem richtigen Niveau und in deinem Tempo zu lernen.", "eco.title": "Lerne wo und wann du willst", "eco.web": "Web-Zugriff", "eco.win": "Für Windows herunterladen", "eco.android": "Android App", "super.cta": "EINE WOCHE GRATIS TESTEN", "test.title": "MyDuolingo English Test", "test.desc": "Unser schneller, erschwinglicher und bequemer Englischtest integriert künstliche Intelligenz und modernste Erkenntnisse der Bewertungswissenschaft. Mach den Test wo und wann du willst.", "test.cta": "ZERTIFIZIERE DEIN ENGLISCH", "schools.title": "MyDuolingo for Schools", "schools.desc": "Lehrer, wir sind hier um zu helfen! Unser kostenloses Tool unterstützt Ihre Schüler beim Sprachenlernen über die App, sowohl im als auch außerhalb des Klassenzimmers.", "schools.cta": "NUTZEN SIE ES MIT IHRER KLASSE", "abc.title": "MyDuolingo ABC", "abc.desc": "Vom Sprachenlernen bis zur Alphabetisierung! Mit lustigen Phonetik-Lektionen und bezaubernden Geschichten hilft MyDuolingo ABC Kindern von 3 bis 8 Jahren beim Lesen- und Schreibenlernen — völlig kostenlos!", "abc.cta": "MEHR ÜBER ABC ERFAHREN", "cta.title": "Lerne eine Sprache mit MyDuolingo", "footer.rights": "© 2026 MyDuolingo. Alle Rechte vorbehalten." },
  it: { "header.login": "Accedi", "hero.title": "Il modo gratuito, divertente ed efficace per imparare una lingua!", "hero.start": "Inizia ora", "hero.account": "Ho già un account", "features.1.title": "Gratis. Divertente. Efficace.", "features.1.desc": "Imparare con MyDuolingo è divertente e le ricerche dimostrano que funziona davvero! Con lezioni rapide e brevi, guadagni punti e sblocchi nuovi livelli mentre impari a comunicare nella vita reale.", "features.2.title": "Basato sulla scienza", "features.2.desc": "Combiniamo metodologie basate sulla ricerca con contenuti incantevoli per creare corsi efficaci que insegnano lettura, scrittura, ascolto e conversazione!", "features.3.title": "Mantieni la motivazione", "features.3.desc": "È facile creare l'abitudine di imparare le lingue con funzioni simili a un gioco, sfide divertenti e promemoria della nostra simpatica mascotte.", "features.4.title": "Apprendimento su misura per te", "features.4.desc": "Le lezioni combinano il meglio dell'intelligenza artificiale e della scienza del linguaggio e sono fatte su misura per aiutarti a imparare al livello e al ritmo giusti.", "eco.title": "Impara dove e quando vuoi", "eco.web": "Accedi al Web", "eco.win": "Scarica per Windows", "eco.android": "App Android", "super.cta": "PROVA UNA SETTIMANA GRATIS", "test.title": "MyDuolingo English Test", "test.desc": "Il nostro test d'inglese veloce, conveniente e pratico integra l'intelligenza artificiale e le conoscenze all'avanguardia sulla valutazione. Fai il test dove e quando vuoi.", "test.cta": "CERTIFICA IL TUO INGLESE", "schools.title": "MyDuolingo for Schools", "schools.desc": "Insegnanti, siamo qui per aiutarvi! Il nostro strumento gratuito supporta i vostri studenti mentre imparano le lingue tramite l'app, sia in classe que fuori.", "schools.cta": "USALO CON LA TUA CLASSE", "abc.title": "MyDuolingo ABC", "abc.desc": "Dall'insegnamento delle lingue all'alfabetizzazione! Con divertenti lezioni di fonetica e storie incantevoli, MyDuolingo ABC aiuta i bambini dai 3 agli 8 anni a imparare a leggere e scrivere — completamente gratis!", "abc.cta": "SCOPRI DI PIÙ SU ABC", "cta.title": "Impara uma lingua con MyDuolingo", "footer.rights": "© 2026 MyDuolingo. Tutti i diritti riservati." }
} as const;

export type Language = keyof typeof translations;
type TranslationKey = keyof typeof translations['pt'];

export function useTranslation() {
  const [lang, setLang] = useState<Language>('pt');

  const t = useCallback((key: TranslationKey) => {
    return (translations[lang] as any)[key] || (translations['pt'] as any)[key] || key;
  }, [lang]);

  return { t, lang, setLang };
}
