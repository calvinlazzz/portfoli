import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'Java', icon: '☕' },
      { name: 'Kotlin', icon: '🟣' },
      { name: 'C/C++', icon: '⚙️' },
      { name: 'Bash/Shell', icon: '💻' },
      { name: 'SQL', icon: '🗃️' },
      { name: 'HTML/CSS', icon: '🌐' },
    ],
  },
  {
    title: 'Testing & QA',
    skills: [
      { name: 'Selenium', icon: '🧪' },
      { name: 'Jest', icon: '🃏' },
      { name: 'Regression Testing', icon: '🔄' },
      { name: 'Stress Testing', icon: '💪' },
      { name: 'Sanity Testing', icon: '✅' },
      { name: 'PCI Compliance', icon: '🔒' },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker', icon: '🐳' },
      { name: 'Jenkins', icon: '🔧' },
      { name: 'Git', icon: '📦' },
      { name: 'Linux/Unix', icon: '🐧' },
      { name: 'Jira', icon: '📋' },
      { name: 'CI/CD', icon: '🚀' },
    ],
  },
  {
    title: 'Frameworks & Tech',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'Django', icon: '🎸' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'Win32 API', icon: '🪟' },
      { name: 'WordPress', icon: '📝' },
    ],
  },
];

/* ─── Folder (closed state) ─── */
const FolderPreview = ({ category, onClick, index, isInView }) => {
  // Show up to 4 preview icons in a 2×2 grid
  const preview = category.skills.slice(0, 4);

  return (
    <motion.div
      className="ios-folder"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="ios-folder__icon-grid">
        {preview.map((skill) => (
          <div key={skill.name} className="ios-folder__mini-icon">
            <span>{skill.icon}</span>
          </div>
        ))}
      </div>
      <span className="ios-folder__title">{category.title}</span>
    </motion.div>
  );
};

/* ─── Expanded folder overlay ─── */
const FolderExpanded = ({ category, onClose }) => (
  <motion.div
    className="ios-folder-overlay"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    onClick={onClose}
  >
    <motion.div
      className="ios-folder-expanded"
      initial={{ scale: 0.7, opacity: 0, y: 40 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.7, opacity: 0, y: 40 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      onClick={(e) => e.stopPropagation()}
    >
      <h3 className="ios-folder-expanded__title">{category.title}</h3>
      <div className="ios-folder-expanded__grid">
        {category.skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="ios-folder-expanded__item"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.04, type: 'spring', stiffness: 350, damping: 20 }}
          >
            <div className="ios-folder-expanded__icon">
              <span>{skill.icon}</span>
            </div>
            <span className="ios-folder-expanded__label">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openFolder, setOpenFolder] = useState(null);

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

        <div className="ios-folders-grid">
          {skillCategories.map((category, index) => (
            <FolderPreview
              key={category.title}
              category={category}
              index={index}
              isInView={isInView}
              onClick={() => setOpenFolder(category)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openFolder && (
          <FolderExpanded
            category={openFolder}
            onClose={() => setOpenFolder(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;
