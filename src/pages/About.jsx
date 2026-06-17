import React from 'react';
import { Briefcase, GraduationCap, Code2, Heart, Award } from 'lucide-react';
import './About.css';

const SKILLS = [
  { name: 'Data Structures & Algorithms (DSA)', level: 90 },
  { name: 'React / Next.js', level: 95 },
  { name: 'Java & Python Development', level: 88 },
  { name: 'JavaScript / TypeScript', level: 90 },
  { name: 'Data Science (NumPy & Pandas)', level: 85 },
  { name: 'Data Visualization (Matplotlib & Seaborn)', level: 80 },
  { name: 'CSS3 & Modern Web Layouts', level: 85 },
  { name: 'Node.js, Express & Databases', level: 80 }
];

const EXPERIENCE = [
  {
    type: 'education',
    role: "Bachelor's of Computer Science",
    company: 'Scaler School of Technology',
    period: '2025 - 2029',
    description: 'Focusing on intensive software construction, advanced data structures, algorithms, system design, and practical industry workflows.'
  },
  {
    type: 'education',
    role: 'BS Degree in Data Science',
    company: 'IIT Madras (IITM)',
    period: '2025 - Present',
    description: 'Gaining a rigorous theoretical and practical foundation in data analytics, database management, and mathematical foundations for computer science.'
  }
];

function About() {
  return (
    <div className="about-page page-wrapper">
      <header className="about-header animate-fade-in-up">
        <h2>About <span className="glow-text">Me</span></h2>
        <p className="about-intro-text">
          I am a designer-developer hybrid who builds sleek web systems. I combine technical structure with visual harmony.
        </p>
      </header>

      {/* Main grid: Bio & Skills */}
      <section className="about-grid">
        <div className="bio-card glass-card animate-fade-in-up">
          <div className="bio-decorations">
            <Heart size={20} className="bio-icon" />
            <h3>My Philosophy</h3>
          </div>
          <p>
            I believe that good software is not just functional; it should be an experience.
            Every pixel, transition, and micro-interaction serves a purpose: to guide, delight, and assist the user.
          </p>
          <p>
            Throughout my career, I've worked at the intersection of aesthetic design and logical implementation. 
            I bridge the gap between creative visualizers and engineering managers to deliver products that wow.
          </p>
          <div className="bio-highlights">
            <div className="highlight-item">
              <Award className="highlight-icon" />
              <span>Clean Code Practices</span>
            </div>
            <div className="highlight-item">
              <Code2 className="highlight-icon" />
              <span>Performance Driven</span>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-card glass-card animate-fade-in-up">
          <h3>Technical Expertise</h3>
          <div className="skills-list">
            {SKILLS.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div 
                    className="skill-bar-fill" 
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section animate-fade-in">
        <h2>Professional <span className="glow-text">Journey</span></h2>
        <div className="timeline-container">
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-dot">
                {exp.type === 'work' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
              </div>
              <div className="timeline-content glass-card">
                <span className="timeline-period">{exp.period}</span>
                <h3 className="timeline-role">{exp.role}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
