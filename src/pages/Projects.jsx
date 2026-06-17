import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { X, ExternalLink } from 'lucide-react';
import projectDashboard from '../assets/project_dashboard.png';
import projectMobile from '../assets/project_mobile.png';
import projectSnake from '../assets/project_snake.png';
import projectExpense from '../assets/project_expense.png';
import projectVideo from '../assets/project_video.png';
import projectNetflix from '../assets/project_netflix.png';
import projectApple from '../assets/project_apple.png';
import projectWalmart from '../assets/project_walmart.png';
import './Projects.css';

const GithubIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Classic Snake Game',
    category: 'Web Apps',
    description: 'A retro arcade Snake Game built from scratch using vanilla HTML5, CSS3, and JavaScript. Features score tracking, dynamic speed scaling, and responsive controls.',
    image: projectSnake,
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API'],
    github: 'https://github.com/Yash8006',
    live: 'https://example.com',
    details: 'This Classic Snake Game demonstrates vanilla programming core concepts, dynamic canvas rendering, collision detection algorithms, and state management without external framework dependencies.'
  },
  {
    id: 2,
    title: 'Smart Expense Tracker',
    category: 'Web Apps',
    description: 'An interactive, glassmorphic React application to log, filter, and track daily expenditures. Features categorized expense charts and budget limits.',
    image: projectExpense,
    tags: ['React', 'Context API', 'Chart.js', 'LocalStorage'],
    github: 'https://github.com/Yash8006',
    live: 'https://example.com',
    details: 'A clean financial manager application built with React. Features categorized budgeting graphs, real-time balance calculations, local storage persistence, and interactive chart visualizations showing monthly cashflows.'
  },
  {
    id: 3,
    title: 'Video Tube App',
    category: 'Mobile Apps',
    description: 'A responsive video streaming mobile application built to browse, play, and share content. Features customized media controls and playlists.',
    image: projectVideo,
    tags: ['React Native', 'Expo', 'Video API', 'Reanimated'],
    github: 'https://github.com/Yash8006',
    live: 'https://example.com',
    details: 'Video Tube is a lightweight, mobile-first video platform built in React Native. Features custom video player elements, streaming API bindings, playlist organization, swipe gestures, and fluid layout transitions.'
  },
  {
    id: 4,
    title: 'Netflix Viewership Study',
    category: 'Data Analytics Case Study',
    description: 'A data analytics case study examining global viewership, completion metrics, and user churn trends. Visualized in interactive graphs.',
    image: projectNetflix,
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/Yash8006',
    live: 'https://example.com',
    details: 'Processed anonymous Netflix viewing history logs using Pandas. Key insights include identifying trends driving user drop-offs and correlating completion metrics with general subscription retention rate.'
  },
  {
    id: 5,
    title: 'Apple Sales Performance Study',
    category: 'Data Analytics Case Study',
    description: 'A quantitative study analyzing global hardware sales, product category volumes, and quarterly revenue metrics.',
    image: projectApple,
    tags: ['SQL', 'NumPy', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/Yash8006',
    live: 'https://example.com',
    details: 'Analyzed Apple sales performance across globally distributed products (iPhone, Mac, iPad). Compiled revenue segments and built data trends for product volumes and growth rates.'
  },
  {
    id: 6,
    title: 'Walmart Supply Chain Study',
    category: 'Data Analytics Case Study',
    description: 'An operational analysis evaluating logistics flows, store inventories, delays, and distribution fulfillment rates.',
    image: projectWalmart,
    tags: ['Python', 'Seaborn', 'Inventory KPIs', 'Data Modeling'],
    github: 'https://github.com/Yash8006',
    live: 'https://example.com',
    details: 'Evaluated retail supply chain inventory movements. Visualized distribution center logistics, supplier volumes, and regional store inventories to optimize logistical fill rates.'
  }
];

const CATEGORIES = ['All', 'Web Apps', 'Mobile Apps', 'Data Analytics Case Study'];

function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = PROJECTS_DATA.filter(project => 
    filter === 'All' ? true : project.category === filter
  );

  return (
    <div className="projects-page page-wrapper">
      <header className="projects-header animate-fade-in-up">
        <h2>My Showcase <span className="glow-text">Projects</span></h2>
        <p className="projects-intro-text">
          A selection of recent projects spanning visual dashboards, mobile UI experiments, and open-source packages.
        </p>
      </header>

      {/* Filter Menu */}
      <div className="filter-menu animate-fade-in">
        {CATEGORIES.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setFilter(cat)}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid containing Project Cards */}
      <section className="projects-grid animate-fade-in">
        {filteredProjects.map((project) => (
          <div key={project.id} className="grid-item-transition">
            <ProjectCard 
              project={project} 
              onClick={() => setSelectedProject(project)} 
            />
          </div>
        ))}
      </section>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay animate-fade-in" onClick={() => setSelectedProject(null)}>
          <div className="modal-card glass-card animate-scale-up" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close modal">
              <X size={20} />
            </button>
            <div className="modal-body">
              <div className="modal-image-wrapper">
                <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
              </div>
              <div className="modal-details">
                <span className="modal-category">{selectedProject.category}</span>
                <h3 className="modal-title">{selectedProject.title}</h3>
                <p className="modal-description">{selectedProject.details}</p>
                
                <div className="modal-tags">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="modal-tag">{tag}</span>
                  ))}
                </div>

                <div className="modal-actions">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <GithubIcon /> Source Code
                  </a>
                  <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
