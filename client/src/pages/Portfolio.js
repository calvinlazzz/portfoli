import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroParallax } from '../components/HeroParallax';

const projectsData = [
  {
    id: 1,
    name: "OP-ADB",
    description: "Full-stack internal web app using JavaScript, React, and Python to execute ADB functions, automated scripts, and API calls. Built to streamline device management workflows for the QA team, enabling one-click execution of complex ADB command sequences and automated test scripts through an intuitive browser interface.",
    imageUrl: "/images/p1.jpeg",
    liveUrl: "#",
    githubUrl: "https://github.com/calvinlazzz",
    technologiesUsed: ["JavaScript", "React", "Python", "ADB", "REST API"],
  },
  {
    id: 2,
    name: "Freelance Web Development",
    description: "Designed, developed, and deployed four client websites — two custom WordPress sites and two full-stack web applications. Managed the entire lifecycle from design mockups through deployment, including domain configuration, hosting setup, and ongoing maintenance.",
    imageUrl: "/images/p2.png",
    liveUrl: "#",
    githubUrl: "https://github.com/calvinlazzz",
    technologiesUsed: ["Python", "HTML", "CSS", "WordPress", "Django"],
  },
  {
    id: 3,
    name: "Homelab Infrastructure",
    description: "Personal Linux home server to self-host client websites and applications, managing domain routing, security protocols, and system uptime. Configured reverse proxies, SSL certificates, Docker containers, and automated backup systems for reliable 24/7 operation.",
    imageUrl: "/images/p3.png",
    liveUrl: "#",
    githubUrl: "https://github.com/calvinlazzz",
    technologiesUsed: ["Linux", "Docker", "Nginx", "Networking", "Bash"],
  },
  {
    id: 4,
    name: "Portfolio Website",
    description: "This portfolio site — built with React, Framer Motion, and Tailwind CSS. Features include a wavy canvas background, bubble text hover animations, expandable project cards, and a responsive glassmorphism navbar.",
    imageUrl: "/images/p4.png",
    liveUrl: "https://www.calvinla.com",
    githubUrl: "https://github.com/calvinlazzz/portfoli",
    technologiesUsed: ["React", "Framer Motion", "Tailwind CSS", "Node.js"],
  },
];

// Extend to 15 items for the 3-row parallax display
const extendedProjects = [];
while (extendedProjects.length < 15) {
  extendedProjects.push(...projectsData);
}
const products = extendedProjects.slice(0, 15).map((p, i) => ({ ...p, id: `${p.id}-${i}` }));

const ExpandedCard = ({ project, onClose }) => (
  <motion.div
    className="project-overlay"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
    onClick={onClose}
  >
    <motion.div
      className="project-expanded"
      initial={{ scale: 0.85, opacity: 0, y: 30 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.85, opacity: 0, y: 30 }}
      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="project-expanded__image-wrapper">
        <img
          src={project.imageUrl}
          alt={project.name}
          className="project-expanded__image"
        />
        <button className="project-expanded__close" onClick={onClose}>
          ✕
        </button>
      </div>
      <div className="project-expanded__body">
        <h2 className="project-expanded__title">{project.name}</h2>
        <p className="project-expanded__desc">{project.description}</p>
        <div className="project-expanded__tech">
          {project.technologiesUsed.map((tech) => (
            <span key={tech} className="project-expanded__tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-expanded__links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-expanded__link project-expanded__link--primary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-expanded__link project-expanded__link--outline"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
              Live Site
            </a>
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects">
      <HeroParallax
        products={products}
        onProductClick={(product) => setSelectedProject(product)}
        header={
          <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
            <h1 className="text-2xl md:text-7xl font-bold text-white">
              Projects & Work
            </h1>
            <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-300">
              A collection of projects showcasing test automation frameworks, DevOps pipelines,
              and full-stack applications I've built and contributed to.
            </p>
          </div>
        }
      />

      <AnimatePresence>
        {selectedProject && (
          <ExpandedCard
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;