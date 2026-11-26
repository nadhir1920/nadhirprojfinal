export const NAV_ITEMS = [
  { id: 'apropos', label: 'Profil' },
  { id: 'competences', label: 'Compétences' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'projets', label: 'Projets' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'dossier', label: 'Dossier pro' },
];

export const ROLES = [
  'Développeur Web Full Stack Junior',
  'Étudiant en Informatique · ISET',
  'Réseaux, Cybersécurité & IA',
];

export const QUICK_FACTS = [
  {
    index: '01',
    title: 'Formation technologique',
    detail: 'ISET Sidi Bouzid · Informatique',
  },
  {
    index: '02',
    title: 'Expérience en entreprise',
    detail: '2 stages en développement web · DIGIMYTECH',
  },
  {
    index: '03',
    title: 'Pratique & terrain',
    detail: 'Freelance Fiverr · Hackathon · Chef scout',
  },
];

export const INTERESTS = [
  'Développement web & interfaces applicatives modernes',
  'Conception logicielle & architecture back-end',
  'Réseaux informatiques & sécurité des systèmes',
  "Usages appliqués de l'intelligence artificielle",
  'Communication technique & travail collaboratif',
];

export const SKILLS = [
  {
    id: 'web',
    category: 'dev',
    code: 'WEB',
    icon: 'Code2',
    title: 'Développement web',
    description:
      "Conception d'interfaces structurées, intégration responsive, accessibilité et logique front-end / back-end.",
    tags: ['HTML / CSS', 'JavaScript', 'React / Next.js'],
  },
  {
    id: 'software',
    category: 'dev',
    code: 'LOG',
    icon: 'Layers',
    title: 'Informatique & logiciel',
    description:
      "Analyse d'un besoin fonctionnel, modélisation de bases de données et structuration d'applications fiables.",
    tags: ['Spring Boot', 'PostgreSQL / SQL', 'Git'],
  },
  {
    id: 'network',
    category: 'sys',
    code: 'NET',
    icon: 'Network',
    title: 'Réseaux informatiques',
    description:
      'Principes fondamentaux de la communication entre machines, adressage IP et équipements réseau.',
    tags: ['Cisco Basics', 'Protocoles', 'Architecture'],
  },
  {
    id: 'cyber',
    category: 'sys',
    code: 'SEC',
    icon: 'ShieldCheck',
    title: 'Cybersécurité',
    description:
      'Sensibilisation aux menaces numériques, hygiène de sécurité et protection des données applicatives.',
    tags: ['Cisco Cyber', 'Bonnes pratiques'],
  },
  {
    id: 'ai',
    category: 'ai',
    code: 'IA',
    icon: 'Cpu',
    title: 'Intelligence artificielle',
    description:
      "Veille sur les usages concrets de l'IA moderne et évaluation critique de son apport en ingénierie.",
    tags: ['Modern AI', 'Esprit critique'],
  },
  {
    id: 'soft',
    category: 'ai',
    code: 'SOFT',
    icon: 'Users',
    title: 'Savoir-être professionnel',
    description:
      "Organisation, autonomie, communication claire, esprit d'équipe et capacité d'apprentissage continu.",
    tags: ['Autonomie', 'Rigueur', 'Leadership'],
    featured: true,
  },
];

export const SKILL_FILTERS = [
  { key: 'all', label: 'Tout' },
  { key: 'dev', label: 'Développement' },
  { key: 'sys', label: 'Réseaux & Sécurité' },
  { key: 'ai', label: 'IA & Soft Skills' },
];

export const TIMELINE = [
  {
    index: '01',
    type: 'Expérience professionnelle',
    period: 'Emploi saisonnier',
    title: 'Bureau de poste de Lfaja',
    summary:
      'Immersion dans un environnement de service public exigeant rigueur, ponctualité et respect strict des procédures opérationnelles.',
    subtitle: 'Acquis professionnels',
    points: [
      'Respect des procédures et sens des responsabilités',
      'Adaptation rapide à un cadre administratif structuré',
      'Organisation quotidienne et accueil des usagers',
    ],
  },
  {
    index: '02',
    type: 'Stage en entreprise',
    period: '06 — 31 janvier 2025',
    title: 'Premier stage · DIGIMYTECH',
    summary:
      "Stage d'initiation au développement web en entreprise : découverte du cycle de production logicielle et de la collaboration technique.",
    subtitle: 'Objectifs & réalisations',
    points: [
      "Mise en lien des acquis académiques avec les pratiques d'entreprise",
      "Participation à l'analyse des besoins et à la préparation des tâches",
      "Montée en compétence par l'observation et la pratique guidée",
    ],
    document: {
      src: 'assets/attestation-stage-2025.png',
      caption: 'Attestation du premier stage — DIGIMYTECH (janvier 2025)',
      label: "Consulter l'attestation",
    },
  },
  {
    index: '03',
    type: 'Stage en entreprise',
    period: '05 — 31 janvier 2026',
    title: 'Deuxième stage · DIGIMYTECH',
    summary:
      'Stage de perfectionnement en développement web visant à consolider mon autonomie technique et ma compréhension des projets informatiques.',
    subtitle: 'Continuité & progression',
    points: [
      'Consolidation des compétences front-end et structuration de code',
      'Autonomie accrue dans la résolution de problèmes',
      "Communication régulière autour de l'avancement des tâches",
    ],
    document: {
      src: 'assets/attestation-stage-2026.png',
      caption: 'Attestation du deuxième stage — DIGIMYTECH (janvier 2026)',
      label: "Consulter l'attestation",
    },
  },
];

export const SCOUT_GALLERY = [
  {
    src: 'assets/scout-regional.jpg',
    title: 'Rassemblement régional',
    subtitle: 'Coordination et dynamique collective',
    caption: 'Rassemblement régional scout',
    alt: 'Photo de groupe lors du rassemblement régional scout',
    isCertificate: false,
  },
  {
    src: 'assets/scout-camp.jpg',
    title: "Camp scout d'été",
    subtitle: 'Organisation de terrain et cohésion',
    caption: "Camp scout d'été",
    alt: "Camp d'été avec les membres du groupe scout",
    isCertificate: false,
  },
  {
    src: 'assets/attestation-scout.jpg',
    title: 'Attestation officielle',
    subtitle: "Justificatif d'encadrement et de participation",
    caption: 'Attestation de participation au camp scout',
    alt: 'Attestation officielle de participation au camp scout',
    isCertificate: true,
  },
];

export const CERTIFICATIONS = [
  {
    src: 'assets/certificat-francais-b1.jpg',
    issuer: 'Langue',
    title: 'Français — Niveau B1',
    description:
      'Maîtrise opérationnelle pour la rédaction technique, la documentation et la communication professionnelle.',
    caption: 'Attestation de français niveau B1',
    actionLabel: "Voir l'attestation",
  },
  {
    src: 'assets/certificat-modern-ai.png',
    issuer: 'Cisco · Intelligence artificielle',
    title: 'Introduction to Modern AI',
    description:
      "Fondamentaux de l'intelligence artificielle contemporaine et cas d'usage dans les solutions numériques.",
    caption: 'Certificat Introduction to Modern AI',
    actionLabel: 'Voir le certificat',
  },
  {
    src: 'assets/certificat-cybersecurity.png',
    issuer: 'Cisco · Cybersécurité',
    title: 'Introduction to Cybersecurity',
    description:
      "Compréhension des menaces informatiques, vecteurs d'attaque courants et principes de protection des systèmes.",
    caption: 'Certificat Introduction to Cybersecurity',
    actionLabel: 'Voir le certificat',
  },
  {
    src: 'assets/certificat-networking.png',
    issuer: 'Cisco · Réseaux',
    title: 'Networking Basics',
    description:
      'Bases des réseaux informatiques, protocoles de communication et fonctionnement des infrastructures.',
    caption: 'Certificat Networking Basics',
    actionLabel: 'Voir le certificat',
  },
];

export const DOSSIER_DOCUMENTS = [
  {
    type: 'CV · Version retenue',
    badge: 'Version finale',
    featured: true,
    title: 'CV_Nadhir_Jlassi_V2.pdf',
    description:
      'Version actualisée intégrant coordonnées, formation, expériences en entreprise, stack technique et certifications.',
    href: 'assets/CV_Nadhir_Jlassi_V2.pdf',
    linkLabel: 'Ouvrir le CV final',
  },
  {
    type: 'CV · Version initiale',
    badge: 'Archive',
    featured: false,
    title: 'Première maquette du CV',
    description:
      'Document de départ conservé afin de mesurer les ajustements de structure et de contenu effectués.',
    href: 'assets/CV_Nadhir_Jlassi%20(1).pdf',
    linkLabel: "Consulter l'archive",
  },
  {
    type: 'Lettre · Ébauche IA',
    badge: 'Archive',
    featured: false,
    title: 'Première rédaction assistée',
    description:
      'Base rédactionnelle générique servant de point de comparaison avec la lettre adaptée à mon profil.',
    href: 'assets/lettre-motivation-version-ia.pdf',
    linkLabel: "Consulter l'ébauche",
  },
  {
    type: 'Lettre · Personnalisée',
    badge: 'À adapter',
    featured: true,
    title: 'Lettre de motivation personnalisée',
    description:
      'Rédaction ancrée sur mes deux stages, mon activité freelance et ma motivation pour le développement web.',
    href: 'assets/lettre-motivation-personnalisee.pdf',
    linkLabel: 'Ouvrir la lettre',
  },
];

export const JOB_OFFERS = [
  {
    location: 'Stage PFE · Tunis Centre',
    date: '24/11/2026',
    title: 'Stagiaire développeur Java / Spring Boot',
    company: 'Golden Horizon',
    details: 'Hybride · Gratification : 600 DT/mois · Échéance : 16/12/2026.',
    tags: ['Java', 'Spring Boot', 'API REST', 'React / Angular', 'SQL', 'JUnit', 'Git'],
    href: 'https://www.tanitjobs.com/job/2074963/stagiaire-pfe-d%C3%A9veloppeur-se-java-spring-boot-h-f-3-postes-600-dt-par-mois-tunis/',
  },
  {
    location: 'Junior · El Menzah, Tunis',
    date: '20/11/2026',
    title: 'Développeur Full Stack Junior',
    company: 'MECAMARKET SARL',
    details: 'Bac+2 / Bac+3 · Débutants acceptés.',
    tags: ['React', 'Next.js', 'Node.js', 'NestJS', 'TypeScript', 'PostgreSQL'],
    href: 'https://www.emploitunisie.com/offre-emploi-tunisie/developpeur-full-stack-junior-technicien-superieur-hf-el-menzah-tunis-501821',
  },
  {
    location: 'Stage · Cité El Khadra, Tunis',
    date: '29/10/2026',
    title: 'Stage ingénieur Full Stack',
    company: 'JK Technics',
    details: 'Télétravail · Débutant accepté · 200–300 TND/mois.',
    tags: ['HTML / CSS', 'JavaScript', 'React / Angular', 'API', 'SQL / NoSQL', 'Tests'],
    href: 'https://www.keejob.com/offres-emploi/249243/stage-ing%C3%A9nieur-fullstack/',
  },
];

export const EVALUATION_CRITERIA = [
  'Présentation personnelle claire et structurée',
  'Restitution précise des stages et des réalisations',
  'Pertinence et rigueur des réponses techniques',
  'Communication, écoute active et posture professionnelle',
  "Identification des axes d'amélioration",
];

export const LINKEDIN_URL =
  'https://www.linkedin.com/qr/AQDjui98mYdbffE4ipqe0cytp-XxsrUPUj9ZHqS3RXBySp4XZJwzjDOunLQAs_FqFdcsxNAXvCVjdMC0ipLnWaSOfP0mGYXdGHI';
export const INTERVIEW_VIDEO_URL = 'https://www.youtube.com/watch?v=cSknWV5EDtI';
