export const navItems = [
  { id: "sobre", label: "Sobre" },
  { id: "skills", label: "Skills" },
  { id: "formacoes", label: "Formações" },
  { id: "projetos", label: "Projetos" },
  { id: "trajetoria", label: "Trajetória" },
  { id: "contato", label: "Contato" },
];

export const heroData = {
  eyebrow: "Portfólio 2026",
  title: "Meu nome é Iure \n Sou Desenvolvedor Full Stack.",
  description:
    "Especialista em criação de softwares, com experiência também em bots de Discord e sistemas que facilitam o dia a dia.",
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
    { value: "99%", label: "Performance média" },
    { value: "24h", label: "Retorno para novos contatos" },
  ],
};

export const aboutData = {
  eyebrow: "Sobre",
  title: "Qual tipo de DEV eu sou?",
  paragraphs: [
    "Profissional de tecnologia com perfil híbrido, atuando como Desenvolvedor Full Stack com experiência em suporte técnico. Tenho experiência em desenvolvimento com JavaScript (React e Node.js), com foco em construção e integração via APIs REST. Possuo conhecimento em Inteligência Artificial e busco aliar a capacidade de criação e aprimoramento de software à expertise em diagnóstico e solução de incidentes.",
  ],
  focusTitle: "Foco atual",
  focusItems: [
    "React, Node.js e Next.js",
    "JavaScript e APIs",
    "MongoDB e PostgreSQL",
    "Performance e otimização",
  ],
};

export const skillsData = {
  eyebrow: "Skills",
  title: "Habilidades técnicas.",
  description:
    "Linguagens, frameworks, bancos de dados e ferramentas que domino para criar soluções eficientes e confiáveis.",
  tags: ["Linguagens", "Banco de Dados", "Tecnologias", "Ferramentas"],
  items: [
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
    { id: "docker", label: "Docker" },
    { id: "python", label: "Python" },
    { id: "linux", label: "Linux" },
    { id: "vscode", label: "VS Code" },
    { id: "discord", label: "Discord" },
  ],
};

export const educationData = {
  eyebrow: "Formações",
  title: "Formação técnica com base prática em sistemas e suporte corporativo.",
  items: [
    {
      period: "2022 - 2025",
      title: "Curso Técnico em Desenvolvimento de Sistemas",
      institution: "SENAI",
      details:
        "Formação técnica com foco em lógica, desenvolvimento de sistemas e fundamentos para atuação em ambientes corporativos.",
    },
    {
      period: "Capacitação complementar",
      title: "Formação técnica complementar",
      institution: "MegaWorks",
      details:
        "Pacote Adobe, Pacote Office e prática geral em hardware e software para suporte e rotina de TI.",
    },
  ],
};

export const projectsData = {
  eyebrow: "Projetos",
  title: "Cases com visual refinado e engenharia confiável.",
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
      body: "Dashboard analítico com dados em tempo real e interfaces focadas em decisão rápida.",
      tags: ["React", "Chart.js", "Node.js"],
      image: "/projects/deepmetrics.svg",
      alt: "Painel de análises do projeto DeepMetrics com gráficos.",
      demoUrl: "",
      repoUrl: "",
      imageHint: "public/projects/deepmetrics.svg",
    },
    {
      id: "03",
      name: "Atlas Booking",
      body: "Sistema de agenda inteligente com automações e painel administrativo completo.",
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
  eyebrow: "Trajetória",
  title: "Experiência em suporte técnico, sistemas corporativos e certificação digital.",
  items: [
    {
      year: "2026 - Atual",
      title: "Pessoa & Pessoa Advogados e Associados | Técnico em TI I",
      body: "Atuação na análise de sistemas, diagnóstico de erros ligados a certificado digital, organização de máquinas com GLPI e suporte em Google Workspace.",
    },
    {
      year: "2025",
      title: "Pessoa & Pessoa Advogados e Associados | Assistente de TI (concluído)",
      body: "Suporte operacional ao time de TI com foco em atendimento técnico, organização de rotina e continuidade dos serviços internos.",
    },
    {
      year: "2024 - 2025",
      title: "Pessoa & Pessoa Advogados e Associados | Estagiário de TI Suporte N1 (concluído)",
      body: "Atendimento de suporte de primeiro nível, monitoramento de ambiente e apoio em instalação e configuração de tokens digitais.",
    },
    {
      year: "2024 (3 meses)",
      title: "YOTECH Consultoria em Sistemas | Estágio em Suporte Técnico TIC",
      body: "Atuação no Hospital Prohope com suporte no sistema SMART, criação de usuários, manutenção de impressoras e apoio na implantação de novo sistema de ramal.",
    },
  ],
};

export const contactData = {
  eyebrow: "Contato",
  title: "Vamos criar algo incrível juntos.",
  description:
    "Se você quer um projeto com visual moderno, transições bem resolvidas e uma base técnica confiável, me chama para conversar.",
  links: [
    { label: "Email", href: "mailto:seuemail@exemplo.com", external: false },
    { label: "GitHub", href: "https://github.com/", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/", external: true },
  ],
};
