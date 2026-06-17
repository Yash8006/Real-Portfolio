import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Download, Terminal } from 'lucide-react';
import heroVisual from '../assets/hero_visual.png';
import './Home.css';

const TYPING_STRINGS = [
  'Full-Stack Developer',
  'React Specialist',
  'UI/UX Enthusiast',
  'Problem Solver'
];

function Home() {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const currentStringIdx = loopNum % TYPING_STRINGS.length;
      const fullText = TYPING_STRINGS[currentStringIdx];

      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));
        if (text === fullText) {
          // Pause at the end of typing
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setText(fullText.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(150);
          return;
        }
      }

      setTypingSpeed(isDeleting ? 75 : 150);
      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="home-page page-wrapper">
      {/* Background Floating Elements */}
      <div className="floating-glow glow-1"></div>
      <div className="floating-glow glow-2"></div>

      <div className="home-hero">
        <div className="hero-content animate-fade-in-up">
          <div className="hero-badge">
            <Terminal size={14} /> Available for Freelance & Full-time
          </div>
          <h1>
            Hi, I'm <span className="glow-text">Yash Kumar Goyal</span>
          </h1>
          <h2 className="typing-header">
            I am a <span className="typing-text">{text}</span>
            <span className="typing-cursor">|</span>
          </h2>
          <p className="hero-subtitle">
            Crafting premium web applications with modern design systems, fluid animations,
            and robust architectures. Focused on bringing visual excellence and performance to the web.
          </p>
          <div className="hero-actions">
            <button onClick={() => navigate('/projects')} className="btn-primary">
              View Work <ArrowRight size={18} />
            </button>
            <button onClick={() => navigate('/contact')} className="btn-secondary">
              Let's Talk
            </button>
          </div>
        </div>

        <div className="hero-visual-container animate-float">
          <div className="visual-glass-border">
            <img src={heroVisual} alt="Interactive coding environment illustration" className="hero-visual" />
          </div>
        </div>
      </div>

      {/* Trust / Stats Banner */}
      <section className="stats-banner glass-card animate-fade-in">
        <div className="stat-item">
          <h3>1+</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat-separator"></div>
        <div className="stat-item">
          <h3>10+</h3>
          <p>Projects Delivered</p>
        </div>
        <div className="stat-separator"></div>
        <div className="stat-item">
          <h3>99%</h3>
          <p>Client Satisfaction</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
