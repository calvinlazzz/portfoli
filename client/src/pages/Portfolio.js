import React from 'react';
import { HeroParallax } from '../components/HeroParallax';

const projectsData = [
  {
    id: 1,
    name: "OP-ADB",
    description: "Full-stack internal web app using JavaScript, React, and Python to execute ADB functions, automated scripts, and API calls.",
    imageUrl: "/images/p1.jpeg",
    liveUrl: "#",
    githubUrl: "https://github.com/calvinlazzz",
    technologiesUsed: ["JavaScript", "React", "Python"],
  },
  {
    id: 2,
    name: "Freelance Web Development",
    description: "Designed, developed, and deployed four client websites — two custom WordPress sites and two full-stack web applications.",
    imageUrl: "/images/p2.png",
    liveUrl: "#",
    githubUrl: "https://github.com/calvinlazzz",
    technologiesUsed: ["Python", "HTML", "CSS", "WordPress"],
  },
  {
    id: 3,
    name: "Homelab Infrastructure",
    description: "Personal Linux home server to self-host client websites and applications, managing domain routing, security protocols, and system uptime.",
    imageUrl: "/images/p3.png",
    liveUrl: "#",
    githubUrl: "https://github.com/calvinlazzz",
    technologiesUsed: ["Linux", "Docker", "Networking"],
  },
  {
    id: 4,
    name: "Portfolio Website",
    description: "This portfolio site — built with React, Framer Motion, and Tailwind CSS with animated parallax project displays.",
    imageUrl: "/images/p4.png",
    liveUrl: "#",
    githubUrl: "https://github.com/calvinlazzz/portfoli",
    technologiesUsed: ["React", "Framer Motion", "Tailwind CSS"],
  },
];

// Extend to 15 items for the 3-row parallax display
const extendedProjects = [];
while (extendedProjects.length < 15) {
  extendedProjects.push(...projectsData);
}
const products = extendedProjects.slice(0, 15).map((p, i) => ({ ...p, id: `${p.id}-${i}` }));

const Portfolio = () => {
  return (
    <section id="projects">
      <HeroParallax
        products={products}
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
    </section>
  );
};

export default Portfolio;