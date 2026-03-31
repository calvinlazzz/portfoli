import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    role: 'Software Engineering Professional 1 – DeviceOS QA',
    company: 'Fiserv',
    period: 'Sep 2024 – Present',
    location: 'Sunnyvale, CA',
    highlights: [
      'Optimized CI/CD Pipelines: Migrated Jenkins pipelines to a highly optimized host and implemented Docker for ROM building, accelerating the ROM signing process by 70%.',
      'QA Automation: Developed and deployed Python and shell scripts to automate regression, stress, and sanity testing, significantly streamlining daily workflows for the DeviceOS QA team.',
      'Compliance & Hardware Testing: Led the testing and implementation of Bluetooth functionality across Clover point-of-sale devices, ensuring strict adherence to PCI compliance standards.',
      'Deployment Validation: Tested and validated production-level server deployments, managing cloud targeting and discovery routing across multiple geographic regions to ensure stable release rollouts.',
    ],
  },
  {
    role: 'Java Developer Junior Instructor',
    company: 'Per Scholas',
    period: 'Apr 2022 – Aug 2024',
    location: 'Remote',
    highlights: [
      'Collaborated with instructional teams to design, develop, and deliver comprehensive full-stack Java curriculum.',
      'Mentored students on core software engineering principles, debugging techniques, and best practices in object-oriented programming.',
    ],
  },
  {
    role: 'Software Tester',
    company: 'Testlio',
    period: 'Sep 2021 – Apr 2022',
    location: 'Remote / Contract',
    highlights: [
      'Executed rigorous testing protocols to identify, document, and track software defects, maintaining high standards for the end-user experience.',
    ],
  },
];

const education = {
  degree: 'BA Computer Science',
  school: 'University of California, Santa Cruz',
  period: '',
};

const TimelineCard = ({ exp, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`timeline-item ${isLeft ? 'timeline-item--left' : 'timeline-item--right'}`}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="timeline-dot"></div>
      <div className="timeline-card">
        <div className="timeline-card__header">
          <h3 className="timeline-card__role">{exp.role}</h3>
          <span className="timeline-card__company">{exp.company}</span>
        </div>
        <div className="timeline-card__meta">
          <span>{exp.period}</span>
          <span>{exp.location}</span>
        </div>
        <ul className="timeline-card__highlights">
          {exp.highlights.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="experience-section" ref={ref}>
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey in software engineering, QA automation, and DevOps.
          </p>
        </motion.div>

        <div className="timeline">
          <div className="timeline-line"></div>
          {experiences.map((exp, index) => (
            <TimelineCard key={index} exp={exp} index={index} />
          ))}
        </div>

        {/* Education */}
        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="education-icon">🎓</div>
          <div>
            <h3 className="education-degree">{education.degree}</h3>
            <p className="education-school">{education.school}</p>
            <p className="education-period">{education.period}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;