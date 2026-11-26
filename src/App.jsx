import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Code2, Layers, Network, ShieldCheck, Cpu, Users,
  ArrowRight, ArrowUpRight, ExternalLink, Play,
  Github, X, ChevronDown,
} from 'lucide-react';

import { SpotlightCard } from './components/SpotlightCard';
import { CountUp } from './components/CountUp';
import { Reveal } from './components/Reveal';
import {
  NAV_ITEMS, ROLES, QUICK_FACTS, INTERESTS, SKILLS, SKILL_FILTERS,
  TIMELINE, SCOUT_GALLERY, CERTIFICATIONS,
  DOSSIER_DOCUMENTS, JOB_OFFERS, EVALUATION_CRITERIA,
  LINKEDIN_URL, INTERVIEW_VIDEO_URL,
} from './data/portfolioData';

/* ── Icon map ─────────────────────────────────────────── */
const IconMap = { Code2, Layers, Network, ShieldCheck, Cpu, Users };

/* ── Lightbox ─────────────────────────────────────────── */
function Lightbox({ src, caption, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-backdrop"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="lightbox-modal"
          initial={{ scale: .92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 320, damping: 26 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="lightbox-toolbar">
            <span className="lightbox-caption-text">{caption}</span>
            <button className="lightbox-close-btn" onClick={onClose} aria-label="Fermer">×</button>
          </div>
          <img className="lightbox-img" src={src} alt={caption} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Typewriter ───────────────────────────────────────── */
function TypedRole({ roles }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    let timeout;
    if (!deleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 42);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 22);
      } else {
        setDeleting(false);
        setIdx((i) => (i + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, idx, roles]);

  return (
    <span className="hero-role-line" aria-label={roles[idx]}>
      {text}<span className="cursor" aria-hidden="true">|</span>
    </span>
  );
}

/* ── Header ───────────────────────────────────────────── */
function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="site-header" role="banner">
      <div className="container">
        <div className="nav-inner">
          <a className="brand" href="#accueil" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <span className="brand-mark" aria-hidden="true">NJ</span>
            <div className="brand-text">
              <strong>Nadhir Jlassi</strong>
              <small>Développeur Web · ISET</small>
            </div>
          </a>

          <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Navigation principale">
            {NAV_ITEMS.map(({ id, label }) => (
              <a
                key={id} href={`#${id}`}
                className={active === id ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNav(id); }}
              >
                {label}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={(e) => { e.preventDefault(); handleNav('contact'); }}>Contact</a>
          </nav>

          <button
            className="hamburger" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open} onClick={() => setOpen(!open)}
          >
            <span style={open ? { transform: 'rotate(45deg) translate(4px,4px)' } : {}} />
            <span style={open ? { opacity: 0 } : {}} />
            <span style={open ? { transform: 'rotate(-45deg) translate(4px,-4px)' } : {}} />
          </button>
        </div>
      </div>
    </header>
  );
}

/* ── Hero ─────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero noise-bg" id="accueil">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container">
        <div className="hero-inner">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, ease: [.22, 1, .36, 1] }}
          >
            <div className="hero-badge">
              <span className="status-pulse" aria-hidden="true" />
              Étudiant en informatique · ISET Sidi Bouzid
            </div>

            <h1 className="hero-name">
              Nadhir Jlassi
              <TypedRole roles={ROLES} />
            </h1>

            <p className="hero-desc">
              Je construis un parcours structuré entre formation technologique, stages en entreprise
              et projets numériques concrets — avec un intérêt marqué pour le développement web,
              les architectures réseau et la cybersécurité.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#parcours" onClick={(e) => { e.preventDefault(); document.getElementById('parcours').scrollIntoView({ behavior: 'smooth' }); }}>
                Découvrir mon parcours <ArrowRight size={15} />
              </a>
              <a className="btn btn-outline" href="assets/portfolio-nadhir-jlassi.pdf" target="_blank" rel="noopener">
                Portfolio PDF <ArrowUpRight size={15} />
              </a>
              <a className="btn btn-ghost" href="#dossier" onClick={(e) => { e.preventDefault(); document.getElementById('dossier').scrollIntoView({ behavior: 'smooth' }); }}>
                Dossier de candidature
              </a>
            </div>

            <div className="hero-tags" aria-label="Domaines clés">
              {['Développement Web', 'Full Stack', 'Réseaux', 'Cybersécurité', 'Leadership'].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="portrait-wrap"
            initial={{ opacity: 0, scale: .92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .75, delay: .15, ease: [.22, 1, .36, 1] }}
          >
            <div className="portrait-card">
              <div className="portrait-img-wrap">
                <img src="assets/nadhir-jlassi.jpg" alt="Portrait professionnel de Nadhir Jlassi" />
              </div>
              <div className="portrait-footer">
                <div>
                  <small>Statut actuel</small>
                  <strong>Licence en Informatique · ISET</strong>
                </div>
                <span className="pill pill-teal">Stages &amp; Projets</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Quick Facts ──────────────────────────────────────── */
function QuickFacts() {
  return (
    <div className="facts-bar" aria-label="Repères clés">
      <div className="container">
        <div className="facts-grid">
          {QUICK_FACTS.map((f) => (
            <Reveal key={f.index} delay={parseInt(f.index) * 0.08}>
              <article className="fact-item">
                <span className="fact-index">{f.index}</span>
                <div>
                  <strong>{f.title}</strong>
                  <small>{f.detail}</small>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── About ────────────────────────────────────────────── */
function About() {
  return (
    <section className="section" id="apropos">
      <div className="container">
        <Reveal>
          <span className="kicker">01 / Profil</span>
          <h2 className="heading-lg" style={{ marginBottom: 36 }}>À propos</h2>
        </Reveal>

        <div className="about-layout">
          <Reveal delay={.08}>
            <SpotlightCard as="div" className="about-panel">
              <div className="panel-top">
                <span className="pill">Présentation</span>
              </div>
              <p>
                Je m'appelle <strong style={{ color: '#fff' }}>Nadhir Jlassi</strong> et je suis étudiant en informatique à l'<strong style={{ color: '#fff' }}>Institut Supérieur des Études Technologiques de Sidi Bouzid (ISET)</strong>. Mon travail s'oriente vers le développement web et logiciel, avec une attention constante portée aux réseaux informatiques et à la cybersécurité.
              </p>
              <p>
                Mes expériences s'appuient sur la diversité des contextes professionnels : deux stages en développement web chez <strong style={{ color: '#fff' }}>DIGIMYTECH</strong>, un emploi saisonnier au bureau de poste de Lfaja, des missions freelance et la création de projets numériques.
              </p>
              <p>
                Ce portfolio documente chaque étape de cette progression et reflète mon objectif : intégrer des projets concrets, consolider mes bases d'ingénierie et apporter une contribution rigoureuse en équipe.
              </p>
            </SpotlightCard>
          </Reveal>

          <div className="about-side">
            <Reveal delay={.14}>
              <div className="vision-card">
                <span className="kicker">Vision professionnelle</span>
                <h3>Apprendre avec méthode, concevoir avec rigueur.</h3>
                <p>Approfondir la maîtrise technique, comprendre les besoins métier et livrer des solutions web fiables.</p>
              </div>
            </Reveal>
            <Reveal delay={.2}>
              <div className="interests-card">
                <h3>Domaines d'intervention</h3>
                <ul className="interest-list">
                  {INTERESTS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Skills ───────────────────────────────────────────── */
function Skills() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? SKILLS
    : SKILLS.filter((s) => s.category === filter);

  return (
    <section className="section" id="competences" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <Reveal>
          <span className="kicker">02 / Savoir-faire</span>
          <h2 className="heading-lg" style={{ marginBottom: 8 }}>Compétences &amp; domaines techniques</h2>
          <p className="lead" style={{ marginBottom: 28 }}>Socle technique développé au fil des enseignements, des stages et de la pratique indépendante.</p>
        </Reveal>

        <Reveal delay={.06}>
          <div className="skills-filter" role="group" aria-label="Filtrer par domaine">
            {SKILL_FILTERS.map((f) => (
              <button
                key={f.key}
                className={`filter-btn ${filter === f.key ? 'active' : ''}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div className="skills-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => {
              const Icon = IconMap[skill.icon];
              return (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: .92 }}
                  transition={{ duration: .38, delay: i * 0.05, ease: [.22, 1, .36, 1] }}
                >
                  <SpotlightCard as="article" className={`skill-card ${skill.featured ? 'featured' : ''}`}>
                    <div className="skill-card-top">
                      <span className="skill-icon" aria-hidden="true">
                        {Icon && <Icon size={18} strokeWidth={1.75} />}
                      </span>
                      <span className="skill-code">{skill.code}</span>
                    </div>
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                    <div className="skill-tags-row">
                      {skill.tags.map((t) => (
                        <span key={t} className="skill-tag">{t}</span>
                      ))}
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Timeline ─────────────────────────────────────────── */
function Timeline({ onLightbox }) {
  return (
    <section className="section" id="parcours">
      <div className="container">
        <Reveal>
          <span className="kicker">03 / Expérience</span>
          <h2 className="heading-lg" style={{ marginBottom: 8 }}>Parcours professionnel</h2>
          <p className="lead" style={{ marginBottom: 40 }}>Des expériences de terrain aux stages spécialisés en développement web.</p>
        </Reveal>

        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <Reveal key={item.index} delay={i * 0.1}>
              <article className="tl-item">
                <div className="tl-marker" aria-hidden="true">{item.index}</div>
                <div className="tl-card">
                  <div className="tl-meta">
                    <span className="pill">{item.type}</span>
                    <span className="tl-date">{item.period}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <h4>{item.subtitle}</h4>
                  <ul className="check-list">
                    {item.points.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                  {item.document && (
                    <button
                      className="doc-link"
                      onClick={() => onLightbox(item.document.src, item.document.caption)}
                    >
                      {item.document.label} <ArrowUpRight size={14} />
                    </button>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Hackathon ────────────────────────────────────────── */
function Hackathon({ onLightbox }) {
  return (
    <section className="section dark-section noise-bg" id="projets">
      <div className="container">
        <Reveal>
          <span className="kicker" style={{ color: 'var(--teal)' }}>04 / Innovation &amp; Projets</span>
          <h2 className="heading-lg" style={{ marginBottom: 8 }}>Hackathon — Patrimoine tunisien</h2>
          <p className="lead" style={{ marginBottom: 40, color: 'var(--ink)' }}>Concevoir des solutions numériques au service de la valorisation culturelle.</p>
        </Reveal>

        <div className="feature-grid">
          <Reveal delay={.08}>
            <div
              className="feature-photo"
              onClick={() => onLightbox('assets/hackathon.jpg', 'Participation au hackathon — Patrimoine tunisien')}
              role="button" tabIndex={0} aria-label="Agrandir la photo du hackathon"
              onKeyDown={(e) => { if (e.key === 'Enter') onLightbox('assets/hackathon.jpg', 'Participation au hackathon'); }}
              style={{ cursor: 'pointer' }}
            >
              <img src="assets/hackathon.jpg" alt="Participation de Nadhir Jlassi au hackathon" />
              <span className="feat-badge">Agrandir ↗</span>
            </div>
          </Reveal>

          <Reveal delay={.14}>
            <div className="feature-copy">
              <span className="kicker" style={{ color: 'var(--teal)' }}>Projet collaboratif</span>
              <h2 className="heading-md" style={{ marginBottom: 14 }}>Valoriser le patrimoine par la technologie</h2>
              <p>Participation à un hackathon dédié à l'utilisation des technologies numériques pour préserver et faire découvrir le patrimoine tunisien auprès des nouvelles générations.</p>
              <p>Cette expérience en temps contraint m'a appris à cadrer rapidement un besoin utilisateur, structurer une proposition de valeur et collaborer efficacement sous pression.</p>
              <div className="takeaways">
                {[
                  { n: '01', t: 'Cadrage produit', s: 'Concevoir une approche adaptée' },
                  { n: '02', t: "Travail d'équipe", s: 'Synchroniser idées et rôles' },
                  { n: '03', t: 'Impact culturel', s: 'Mettre la tech au service du sens' },
                ].map((tw) => (
                  <div key={tw.n} className="takeaway">
                    <span>{tw.n}</span>
                    <strong>{tw.t}</strong>
                    <small>{tw.s}</small>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── YouTube / Creator ────────────────────────────────── */
function Creator({ onLightbox }) {
  return (
    <section className="section" id="creation">
      <div className="container">
        <Reveal>
          <span className="kicker">05 / Médias numériques</span>
          <h2 className="heading-lg" style={{ marginBottom: 8 }}>Création de contenu &amp; streaming</h2>
          <p className="lead" style={{ marginBottom: 40 }}>Gestion d'une chaîne gaming sur YouTube durant 2024–2025 : production, régularité et animation de communauté.</p>
        </Reveal>

        <div className="creator-layout">
          <Reveal delay={.06}>
            <div className="creator-copy">
              <span className="pill pill-gold creator-pill">Activité personnelle · 2024–2025</span>
              <h2 className="heading-md" style={{ margin: '14px 0 12px' }}>Produire, diffuser et fédérer une audience</h2>
              <p>Entre 2024 et 2025, j'ai développé une activité de création de contenu et de streaming gaming sur YouTube. Au-delà de l'aspect ludique, ce projet a exigé planification éditoriale, maîtrise des outils de diffusion et interaction en direct.</p>
              <p>Cette pratique m'a apporté aisance orale, constance dans l'effort et capacité à analyser les retours d'une audience.</p>
              <h4>Compétences transférables</h4>
              <div className="tag-cloud">
                {['Production multimédia', 'Prise de parole', 'Gestion de communauté', 'Régularité', 'Adaptabilité'].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={.14}>
            <div className="creator-proof">
              <div className="stats-board">
                <span className="stats-label">Indicateurs issus de la capture YouTube Studio</span>
                <div className="stats-row">
                  <div className="stat-item">
                    <strong><CountUp target={13.6} decimals={1} suffix=" k" /></strong>
                    <span>Vues</span>
                  </div>
                  <div className="stat-item">
                    <strong><CountUp target={316.9} decimals={1} suffix=" h" /></strong>
                    <span>Visionnage</span>
                  </div>
                  <div className="stat-item">
                    <strong><CountUp target={396} prefix="+" /></strong>
                    <span>Abonnés</span>
                  </div>
                </div>
              </div>
              <div
                className="creator-shot"
                role="button" tabIndex={0} aria-label="Voir la capture YouTube"
                onClick={() => onLightbox('assets/youtube-stats.jpg', 'Statistiques de la chaîne YouTube')}
                onKeyDown={(e) => { if (e.key === 'Enter') onLightbox('assets/youtube-stats.jpg', 'Statistiques de la chaîne YouTube'); }}
              >
                <img src="assets/youtube-stats.jpg" alt="Capture des statistiques YouTube" loading="lazy" />
                <span className="feat-badge" style={{ top: 'auto', bottom: 12 }}>Voir la capture ↗</span>
              </div>
              <p className="micro-note">Données issues de la capture archivée dans le portfolio initial.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Scout ────────────────────────────────────────────── */
function Scout({ onLightbox }) {
  return (
    <section className="section" id="engagement" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <Reveal>
          <span className="kicker">06 / Engagement associatif</span>
          <h2 className="heading-lg" style={{ marginBottom: 8 }}>Scoutisme &amp; leadership</h2>
          <p className="lead" style={{ marginBottom: 28 }}>Encadrement de groupe, sens des responsabilités et organisation sur le terrain.</p>
        </Reveal>

        <Reveal delay={.06}>
          <div className="scout-intro">
            <div className="scout-num" aria-hidden="true">06</div>
            <div>
              <h3>Responsabilité en tant que chef scout</h3>
              <p>Mon engagement en tant que chef scout repose sur l'entraide, la discipline et la prise d'initiative. La préparation des rassemblements régionaux et des camps d'été développe concrètement la coordination d'équipe, la gestion logistique et le leadership bienveillant.</p>
            </div>
          </div>
        </Reveal>

        <div className="gallery-grid">
          {SCOUT_GALLERY.map((item, i) => (
            <Reveal key={item.src} delay={i * 0.1}>
              <div
                className={`gallery-item ${item.isCertificate ? 'certificate' : ''}`}
                role="button" tabIndex={0}
                aria-label={`Voir : ${item.caption}`}
                onClick={() => onLightbox(item.src, item.caption)}
                onKeyDown={(e) => { if (e.key === 'Enter') onLightbox(item.src, item.caption); }}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
                <div className="gallery-caption">
                  <strong>{item.title}</strong>
                  <small>{item.subtitle}</small>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={.2}>
          <div className="values-row" aria-label="Valeurs développées">
            {['Solidarité', 'Responsabilité', 'Esprit d\'équipe', 'Discipline', 'Leadership'].map((v) => (
              <span key={v} className="tag">{v}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Certifications ───────────────────────────────────── */
function Certifications({ onLightbox }) {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <Reveal>
          <span className="kicker">07 / Formations continues</span>
          <h2 className="heading-lg" style={{ marginBottom: 8 }}>Certifications &amp; langues</h2>
          <p className="lead" style={{ marginBottom: 36 }}>Attestations et certifications complémentaires à mon cursus universitaire.</p>
        </Reveal>

        <div className="cert-grid">
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.08}>
              <SpotlightCard as="article" className="cert-card">
                <div
                  className="cert-thumb"
                  role="button" tabIndex={0}
                  aria-label={`Voir : ${cert.caption}`}
                  onClick={() => onLightbox(cert.src, cert.caption)}
                  onKeyDown={(e) => { if (e.key === 'Enter') onLightbox(cert.src, cert.caption); }}
                >
                  <img src={cert.src} alt={cert.caption} loading="lazy" />
                </div>
                <div className="cert-info">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <h3>{cert.title}</h3>
                  <p>{cert.description}</p>
                  <button className="doc-link" onClick={() => onLightbox(cert.src, cert.caption)}>
                    {cert.actionLabel} <ArrowUpRight size={13} />
                  </button>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Freelance / Independent ──────────────────────────── */
function Independent() {
  return (
    <section className="section" id="activites" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <Reveal>
          <span className="kicker">08 / Activités indépendantes</span>
          <h2 className="heading-lg" style={{ marginBottom: 8 }}>Freelance &amp; analyse des marchés</h2>
          <p className="lead" style={{ marginBottom: 36 }}>Deux activités autonomes favorisant la rigueur analytique et la relation client.</p>
        </Reveal>

        <div className="independent-grid">
          <Reveal delay={.06}>
            <SpotlightCard as="article" className="ind-card">
              <div className="ind-img">
                <img src="assets/fiverr-fullstack.jpg" alt="Développement web freelance sur Fiverr" loading="lazy" />
              </div>
              <div className="ind-body">
                <span className="pill">Prestation de services</span>
                <h3>Développeur web freelance sur Fiverr</h3>
                <p>Réalisation de missions web en parallèle de mes études, incluant l'échange avec les clients, le cadrage du besoin et la livraison de solutions fonctionnelles.</p>
                <h4>Compétences mobilisées</h4>
                <ul className="check-list">
                  <li>Recueil des exigences et découpage des livrables</li>
                  <li>Communication professionnelle orientée client</li>
                  <li>Recherche autonome et contrôle qualité</li>
                </ul>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={.14}>
            <SpotlightCard as="article" className="ind-card">
              <div className="trading-graphic" aria-hidden="true">
                <div className="chart-grid" />
                <svg viewBox="0 0 460 160" preserveAspectRatio="none" role="presentation">
                  <defs>
                    <linearGradient id="cg" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stopColor="#38bdf8" stopOpacity=".2" />
                      <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,128 L55,112 L95,118 L145,86 L195,96 L245,68 L295,78 L345,48 L405,56 L460,24 L460,160 L0,160Z" fill="url(#cg)" />
                  <path d="M0,128 L55,112 L95,118 L145,86 L195,96 L245,68 L295,78 L345,48 L405,56 L460,24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="trading-label">MARKET ANALYSIS · BINANCE</span>
              </div>
              <div className="ind-body">
                <span className="pill pill-gold">Analyse &amp; discipline</span>
                <h3>Observation des marchés financiers</h3>
                <p>Suivi régulier des marchés numériques sur Binance, axé sur l'analyse de tendances, la gestion du risque et la discipline décisionnelle.</p>
                <h4>Compétences développées</h4>
                <ul className="check-list">
                  <li>Lecture analytique des tendances et indicateurs</li>
                  <li>Gestion émotionnelle, patience et méthode</li>
                  <li>Priorité accordée à la maîtrise du risque</li>
                </ul>
                <p className="risk-note">Note : les marchés financiers comportent un risque de perte en capital ; l'approche reste strictement analytique et prudente.</p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Dossier Professionnel ────────────────────────────── */
function Dossier() {
  return (
    <section className="section" id="dossier">
      <div className="container">
        <Reveal>
          <span className="kicker">09 / Dossier de candidature</span>
          <h2 className="heading-lg" style={{ marginBottom: 8 }}>Projet professionnel &amp; livrables</h2>
          <p className="lead" style={{ marginBottom: 36 }}>Ensemble structuré regroupant diagnostic personnel, documents de candidature, veille du marché tunisien et préparation à l'entretien.</p>
        </Reveal>

        <Reveal delay={.06}>
          <div className="dossier-intro">
            <div className="dossier-monogram" aria-hidden="true">NJ</div>
            <div>
              <span className="dossier-role-label">Objectif professionnel ciblé</span>
              <p><strong style={{ color: '#fff' }}>Développeur Web Full Stack Junior</strong> — Consolider mes acquis front-end et back-end, contribuer à des projets concrets et évoluer au sein d'une équipe d'ingénierie.</p>
            </div>
          </div>
        </Reveal>

        {/* Livrable 1 — Diagnostic */}
        <Reveal delay={.04}>
          <div className="deliverable-block" id="diagnostic">
            <div className="del-heading">
              <span className="del-num">01</span>
              <div>
                <span className="kicker">Livrable 1</span>
                <h3>Diagnostic personnel</h3>
              </div>
            </div>
            <p className="del-lead">Bilan structuré de mes compétences techniques, de mes expériences vérifiables et de mes axes de progression prioritaires.</p>
            <div className="del-cards">
              {[
                { h: 'Compétences & réalisations', p: 'Deux stages en développement web, missions freelance (bots Discord / web), bases front-end, back-end et bases de données relationnelles.' },
                { h: 'Positionnement cible', p: 'Poste de Développeur Web Full Stack Junior, en continuité directe avec ma formation à l\'ISET et mes stages chez DIGIMYTECH.' },
                { h: 'Recul critique sur l\'IA', p: 'Utilisation raisonnée des recommandations issues de l\'IA : seules les compétences réellement pratiquées et justifiables sont retenues.' },
              ].map((c) => (
                <SpotlightCard key={c.h} as="article" className="del-card">
                  <h4>{c.h}</h4>
                  <p>{c.p}</p>
                </SpotlightCard>
              ))}
            </div>
            <a className="btn btn-primary" href="assets/diagnostic-personnel.pdf" target="_blank" rel="noopener" style={{ marginTop: 4 }}>
              Télécharger le diagnostic (PDF) <ArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>

        {/* Livrable 2 — CV & Lettre */}
        <Reveal delay={.04}>
          <div className="deliverable-block" id="documents">
            <div className="del-heading">
              <span className="del-num">02</span>
              <div>
                <span className="kicker">Livrable 2</span>
                <h3>CV &amp; lettre de motivation</h3>
              </div>
            </div>
            <p className="del-lead">Traçabilité de l'amélioration des documents de candidature, de l'ébauche initiale aux versions finalisées et personnalisées.</p>
            <div className="doc-grid">
              {DOSSIER_DOCUMENTS.map((d) => (
                <SpotlightCard key={d.type} as="article" className={`doc-card ${d.featured ? 'featured' : ''}`}>
                  <div className="doc-topline">
                    <span className="doc-type">{d.type}</span>
                    <span className={`doc-badge ${d.featured ? 'featured' : 'muted'}`}>{d.badge}</span>
                  </div>
                  <h4>{d.title}</h4>
                  <p>{d.description}</p>
                  <a className="doc-link-btn" href={d.href} target="_blank" rel="noopener">{d.linkLabel} <ArrowUpRight size={13} /></a>
                </SpotlightCard>
              ))}
            </div>
            <div className="doc-explanation">
              <div>
                <strong>Note méthodologique sur les modifications</strong>
                <p>Remplacement des champs génériques par des faits vérifiables, structuration des compétences par pôles techniques et suppression de toute mention non étayée par mon parcours.</p>
              </div>
              <a className="text-link" href="assets/comparaison-cv-et-justification.pdf" target="_blank" rel="noopener">
                Comparaison &amp; justification (PDF) <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Livrable 3 — Veille */}
        <Reveal delay={.04}>
          <div className="deliverable-block" id="veille">
            <div className="del-heading">
              <span className="del-num">03</span>
              <div>
                <span className="kicker">Livrable 3</span>
                <h3>Veille professionnelle</h3>
              </div>
            </div>
            <p className="del-lead">Analyse comparative d'offres réelles sur le marché tunisien afin d'aligner mes compétences sur les attentes des recruteurs.</p>
            <div className="offer-grid">
              {JOB_OFFERS.map((o) => (
                <SpotlightCard key={o.title} as="article" className="offer-card">
                  <div className="offer-meta">
                    <span>{o.location}</span>
                    <span className="date">{o.date}</span>
                  </div>
                  <h4>{o.title}</h4>
                  <p><strong style={{ color: '#fff' }}>{o.company}</strong> · {o.details}</p>
                  <div className="offer-tags">
                    {o.tags.map((t) => <span key={t} className="offer-tag">{t}</span>)}
                  </div>
                  <a href={o.href} target="_blank" rel="noopener">Annonce originale <ArrowUpRight size={12} /></a>
                </SpotlightCard>
              ))}
            </div>
            <div className="analysis-panel">
              <h4>Synthèse de la veille marché</h4>
              <p>Les annonces convergent vers une maîtrise attendue des frameworks front-end (React, Angular), des API back-end, des bases de données SQL/NoSQL, de Git et des tests. Mon socle couvre déjà React.js, Next.js, Spring Boot, PostgreSQL et MySQL ; mes priorités de progression portent sur les tests automatisés, TypeScript, Node.js/NestJS et la documentation technique.</p>
            </div>
            <a className="btn btn-primary" href="assets/veille-professionnelle-offres-tunisie.pdf" target="_blank" rel="noopener" style={{ marginTop: 20 }}>
              Télécharger le rapport de veille (PDF) <ArrowUpRight size={14} />
            </a>
            <p className="fine-print" style={{ marginTop: 10 }}>Données relevées lors de la consultation du 24 novembre 2026.</p>
          </div>
        </Reveal>

        {/* Livrable 4 — Entretien */}
        <Reveal delay={.04}>
          <div className="deliverable-block" id="entretien">
            <div className="del-heading">
              <span className="del-num">04</span>
              <div>
                <span className="kicker">Livrable 4</span>
                <h3>Simulation d'entretien</h3>
              </div>
            </div>
            <div className="interview-layout">
              <div className="interview-media">
                <p className="del-lead" style={{ marginBottom: 0 }}>Enregistrement de ma simulation d'entretien pour un poste de développeur Full Stack.</p>
                <a className="video-link" href={INTERVIEW_VIDEO_URL} target="_blank" rel="noopener noreferrer">
                  <span className="video-play" aria-hidden="true"><Play size={16} fill="white" /></span>
                  <div>
                    <strong>Full stack developer interview</strong>
                    <span>Visionner la simulation sur YouTube ↗</span>
                  </div>
                </a>
              </div>
              <div className="evaluation-card">
                <h4>Grille d'auto-évaluation</h4>
                <ul className="eval-list">
                  {EVALUATION_CRITERIA.map((c) => <li key={c}>{c}</li>)}
                </ul>
                <p className="fine-print">Évaluation complétée sur la base de la grille collective de référence.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Closing ──────────────────────────────────────────── */
function Closing() {
  return (
    <section className="closing noise-bg" id="contact">
      <div className="container">
        <div className="closing-inner">
          <Reveal>
            <div className="closing-main">
              <span className="kicker">10 / Perspective &amp; Contact</span>
              <h2 className="heading-xl">
                Construire, apprendre<br />
                <span style={{ color: 'var(--teal)' }}>et contribuer.</span>
              </h2>
              <p className="closing-text">
                Entre mes stages chez DIGIMYTECH, mes missions freelance, mes certifications Cisco, mon engagement scout et mes projets personnels, je poursuis un objectif clair : mettre mes compétences en développement web au service d'équipes et de projets exigeants.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="assets/portfolio-nadhir-jlassi.pdf" target="_blank" rel="noopener">
                  Consulter le portfolio PDF <ArrowUpRight size={14} />
                </a>
                <button className="btn btn-outline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  Haut de page ↑
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={.14}>
            <div className="linkedin-card">
              <div className="linkedin-qr">
                <img src="assets/linkedin.jpeg" alt="QR code LinkedIn de Nadhir Jlassi" loading="lazy" />
              </div>
              <div className="linkedin-info">
                <span className="linkedin-label">Réseau professionnel</span>
                <h3>LinkedIn</h3>
                <a className="linkedin-link" href={LINKEDIN_URL} target="_blank" rel="noopener" aria-label="Ouvrir le profil LinkedIn de Nadhir Jlassi">
                  Accéder au profil ↗
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ───────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <a className="brand" href="#accueil" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <span className="brand-mark" aria-hidden="true" style={{ width: 32, height: 32, fontSize: '.76rem' }}>NJ</span>
            <div className="brand-text">
              <strong>Nadhir Jlassi</strong>
              <small>Portfolio professionnel</small>
            </div>
          </a>
          <p>Étudiant en informatique · ISET Sidi Bouzid</p>
          <p>© {new Date().getFullYear()} Nadhir Jlassi</p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════
   APP ROOT
════════════════════════════════════════════════════════════*/
export default function App() {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = useCallback((src, caption) => setLightbox({ src, caption }), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <>
      <a className="skip-link" href="#contenu">Aller au contenu principal</a>
      <Header />
      <main id="contenu">
        <Hero />
        <QuickFacts />
        <About />
        <Skills />
        <Timeline onLightbox={openLightbox} />
        <Hackathon onLightbox={openLightbox} />
        <Creator onLightbox={openLightbox} />
        <Scout onLightbox={openLightbox} />
        <Certifications onLightbox={openLightbox} />
        <Independent />
        <Dossier />
        <Closing />
      </main>
      <Footer />

      <AnimatePresence>
        {lightbox && (
          <Lightbox src={lightbox.src} caption={lightbox.caption} onClose={closeLightbox} />
        )}
      </AnimatePresence>

      <style>{`
        .cursor {
          display: inline-block;
          width: 2px;
          margin-left: 2px;
          background: var(--accent-2);
          animation: blink .9s step-end infinite;
          vertical-align: baseline;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .hero-role-line { min-height: 1.3em; display: block; }
      `}</style>
    </>
  );
}
