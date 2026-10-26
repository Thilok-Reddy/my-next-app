'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    title: "Low-Code / BPM",
    items: ["Appian (SAIL, Process Models, Records, Reports, Integrations)"],
  },
  {
    title: "Databases",
    items: ["SQL Server", "MariaDB", "MySQL"],
  },
  {
    title: "Analytics & Reporting",
    items: ["IBM Cognos", "Tableau", "Power BI", "Excel"],
  },
  {
    title: "Programming",
    items: ["Python", "Java", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Data Science & ML",
    items: ["Pandas", "NumPy", "Scikit-learn", "NLP", "Predictive Modeling"],
  },
  {
    title: "Tools & Practices",
    items: ["JIRA", "Bitbucket", "Jenkins", "Git", "Agile/Scrum"],
  },
];

const spotlightCards = [
  {
    icon: "♟️",
    label: "Chess",
    title: "Challenge me on Chess",
    subtitle: "Elo: 1391",
    href: "https://link.chess.com/play/NSTfXo",
    external: true,
  },
  {
    icon: "🎓",
    label: "Education",
    title: "M.S. Data Science",
    subtitle: "Montclair State University",
  },
  {
    icon: "🎲",
    label: "Quick fun",
    title: "Test your luck...",
    href: "/luck",
    internal: true,
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current && currentScrollY > 24;

      setIsNavVisible(!isScrollingDown || currentScrollY < 24);
      setIsScrolled(currentScrollY > 8);
      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#top" },
  ];

  return (
    <main id="top" className="page-shell">
      <header className={`topbar ${isScrolled ? "scrolled" : ""} ${isNavVisible ? "visible" : "hidden"}`}>
        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="contact" className="hero card hero-card">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Software Engineer</p>
            <h1>Thilok Reddy Anugu</h1>
            <p className="title-line">Appian Developer & Data Science Professional</p>
            <p className="lead">
              Appian Developer and Data Science professional with experience delivering
              workflow automation and business process solutions across banking and higher
              education. Skilled in building Appian applications, process models, and
              system integrations with external systems. Strong background in data
              analytics and reporting, enabling organizations to streamline operations
              and make data-driven decisions.
            </p>

            <div className="mini-links">
              <a href="mailto:thilokreddy09@gmail.com">Email</a>
              <a href="https://www.linkedin.com/in/thilokreddy" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/Thilok-Reddy" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <div className="hero-side">
            <div className="spotlight-grid">
              {spotlightCards.map((card) => {
                const cardContent = (
                  <>
                    <span className="card-icon">{card.icon}</span>
                    <div>
                      <span className="card-label">{card.label}</span>
                      <strong>{card.title}</strong>
                      {card.subtitle ? <small>{card.subtitle}</small> : null}
                    </div>
                  </>
                );

                if (card.external) {
                  return (
                    <a
                      key={card.label}
                      className="info-card challenge-card"
                      href={card.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {cardContent}
                    </a>
                  );
                }

                if (card.internal) {
                  return (
                    <Link key={card.label} href={card.href ?? "/"} className="info-card luck-card">
                      {cardContent}
                    </Link>
                  );
                }

                return (
                  <div key={card.label} className="info-card chess-card">
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="details card">
        <h2>Skills</h2>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="details card about-card">
        <div className="about-layout">
          <div className="about-content">
            <h2>About me</h2>
            <p>
              I am a software engineer and Appian developer with a strong foundation in
              workflow automation, business process solutions, and data-driven decision
              making. My work combines application development, process modeling, and
              analytics to improve operational efficiency in complex environments.
            </p>
            <p>
              I enjoy solving challenging problems with logic and structure, and I am
              especially interested in the intersection of technology, mathematics,
              and human behavior. I love math, puzzles, and games, and I am deeply
              interested in cosmology, psychology, and philosophy.
            </p>
          </div>
        </div>
      </section>

      <section className="details card">
        <h2>Professional profile</h2>
        <ul className="info-list">
          <li>Appian developer focused on workflow automation and enterprise solutions.</li>
          <li>Experienced in process modeling, SAIL interfaces, reports, and integrations.</li>
          <li>Skilled in SQL, Python, and analytics tools to support business decisions.</li>
          <li>Background in higher education, banking, and enterprise technology environments.</li>
          <li>Strong interest in data science, AI, and analytical problem solving.</li>
        </ul>
      </section>
    </main>
  );
}
