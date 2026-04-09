export const navItems = [
  { id: "sobre", label: "Sobre" },
  { id: "skills", label: "Skills" },
  { id: "formacoes", label: "Formacoes" },
  { id: "projetos", label: "Projetos" },
  { id: "trajetoria", label: "Trajetoria" },
  { id: "contato", label: "Contato" },
];

export const heroData = {
  eyebrow: "Portfolio 2026",
  title: "Azul marinho, transicoes suaves e impacto visual real.",
  description:
    "Eu desenvolvo produtos digitais com equilibrio entre estetica e engenharia. Este portfolio foi refinado para uma experiencia mais fluida, moderna e com identidade visual em tons de azul marinho.",
  primaryCta: {
    label: "Ver projetos",
    target: "projetos",
  },
  secondaryCta: {
    label: "Entrar em contato",
    target: "contato",
  },
  metrics: [
    { value: "20+", label: "Projetos entregues" },
    { value: "99%", label: "Performance media" },
    { value: "24h", label: "Retorno para novos contatos" },
  ],
};

export const aboutData = {
  eyebrow: "Sobre",
  title: "Design escuro e elegante, codigo limpo e transicoes naturais.",
  paragraphs: [
    "Eu trabalho na uniao entre design e desenvolvimento para criar produtos que impressionam na primeira leitura e performam no dia a dia.",
    "Cada projeto recebe cuidado em tipografia, espacamento, animacao e estrutura de codigo para manter qualidade e manutencao.",
  ],
  focusTitle: "Foco atual",
  focusItems: [
    "Next.js e React",
    "TypeScript e APIs",
    "Motion design para UX",
    "Performance web em mobile",
  ],
};

export const skillsData = {
  eyebrow: "Skills",
  title: "Stack em auto-scroll com icones dinamicos do skillicons.dev.",
  description:
    "Esta secao usa carousel React com auto-scroll e cada card busca o icone direto do skillicons.dev junto com o nome da tecnologia.",
  tags: ["Auto-scroll", "React carousel", "skillicons.dev", "Futuro: prints reais"],
  items: [
    { id: "figma", label: "Figma" },
    { id: "git", label: "Git" },
    { id: "react", label: "React" },
    { id: "nextjs", label: "Next.js" },
    { id: "ts", label: "TypeScript" },
    { id: "js", label: "JavaScript" },
    { id: "html", label: "HTML5" },
    { id: "css", label: "CSS3" },
    { id: "tailwind", label: "Tailwind" },
    { id: "nodejs", label: "Node.js" },
    { id: "express", label: "Express" },
    { id: "mongodb", label: "MongoDB" },
    { id: "postgres", label: "PostgreSQL" },
    { id: "prisma", label: "Prisma" },
    { id: "docker", label: "Docker" },
    { id: "firebase", label: "Firebase" },
    { id: "python", label: "Python" },
    { id: "linux", label: "Linux" },
    { id: "vscode", label: "VS Code" },
    { id: "aws", label: "AWS" },
  ],
};

export const educationData = {
  eyebrow: "Formacoes",
  title: "Base academica e certificacoes para sustentar entregas de alto nivel.",
  items: [
    {
      period: "2024 - 2026",
      title: "Analise e Desenvolvimento de Sistemas",
      institution: "Faculdade Exemplo",
      details:
        "Formacao com foco em engenharia de software, arquitetura de sistemas e boas praticas de desenvolvimento.",
    },
    {
      period: "2025",
      title: "Formacao Full Stack JavaScript",
      institution: "Plataforma Exemplo",
      details:
        "Trilha completa de frontend e backend com React, Node.js, banco de dados e deploy em producao.",
    },
    {
      period: "2026",
      title: "Certificacao UI e Performance Web",
      institution: "Academia Exemplo",
      details:
        "Capacitacao em design de interfaces modernas, acessibilidade e otimizacao de performance para web.",
    },
  ],
};

export const projectsData = {
  eyebrow: "Projetos",
  title: "Cases com visual refinado e engenharia confiavel.",
  items: [
    {
      id: "01",
      name: "Navy Commerce",
      body: "E-commerce com fluxo de compra otimizado e visual sofisticado para mobile e desktop.",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
      image: "/projects/navy-commerce.svg",
      alt: "Tela de e-commerce Navy Commerce em tom azul marinho.",
      demoUrl: "",
      repoUrl: "",
      imageHint: "public/projects/navy-commerce.svg",
    },
    {
      id: "02",
      name: "DeepMetrics",
      body: "Dashboard analitico com dados em tempo real e interfaces focadas em decisao rapida.",
      tags: ["React", "Chart.js", "Node.js"],
      image: "/projects/deepmetrics.svg",
      alt: "Painel de analises do projeto DeepMetrics com graficos.",
      demoUrl: "",
      repoUrl: "",
      imageHint: "public/projects/deepmetrics.svg",
    },
    {
      id: "03",
      name: "Atlas Booking",
      body: "Sistema de agenda inteligente com automacoes e painel administrativo completo.",
      tags: ["TypeScript", "Express", "Prisma"],
      image: "/projects/atlas-booking.svg",
      alt: "Interface de reservas do projeto Atlas Booking.",
      demoUrl: "",
      repoUrl: "",
      imageHint: "public/projects/atlas-booking.svg",
    },
  ],
};

export const experienceData = {
  eyebrow: "Trajetoria",
  title: "Evolucao continua com foco em resultado.",
  items: [
    {
      year: "2026",
      title: "Projetos premium em producao",
      body: "Entrega de experiencias digitais com identidade forte e execucao consistente.",
    },
    {
      year: "2025",
      title: "Padronizacao e escala",
      body: "Arquitetura de componentes, CI/CD e melhoria do ciclo de entrega.",
    },
    {
      year: "2024",
      title: "Fundacao tecnica",
      body: "Consolidacao em frontend moderno e desenvolvimento full stack.",
    },
  ],
};

export const contactData = {
  eyebrow: "Contato",
  title: "Vamos criar algo incrivel juntos.",
  description:
    "Se voce quer um projeto com visual moderno, transicoes bem resolvidas e uma base tecnica confiavel, me chama para conversar.",
  links: [
    { label: "Email", href: "mailto:seuemail@exemplo.com", external: false },
    { label: "GitHub", href: "https://github.com/", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/", external: true },
  ],
};
