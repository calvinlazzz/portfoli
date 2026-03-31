import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'Java', 'Kotlin', 'C/C++', 'Bash/Shell', 'SQL', 'HTML/CSS'],
  },
  {
    title: 'Testing & QA',
    skills: ['Selenium', 'Jest', 'Regression Testing', 'Stress Testing', 'Sanity Testing', 'PCI Compliance Testing'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'Jenkins', 'Git', 'Linux/Unix', 'Jira', 'CI/CD Pipelines'],
  },
  {
    title: 'Frameworks & Tech',
    skills: ['React', 'Django', 'MySQL', 'Win32 API', 'WordPress'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.04, duration: 0.3, ease: 'easeOut' },
  }),
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Tools and technologies I use to build quality software and deliver reliable systems.
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="skills-category"
              variants={categoryVariants}
            >
              <h3 className="skills-category__title">{category.title}</h3>
              <div className="skills-pills">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="skill-pill"
                    custom={i}
                    variants={pillVariants}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
