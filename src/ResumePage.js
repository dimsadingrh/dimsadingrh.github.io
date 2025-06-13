import React from 'react';
import profileImg from './assets/img/profile.png';
import BackButton from './BackButton';

function ResumePage({ onBack, darkMode }) {
  return (
    <>
      <BackButton onBack={onBack} darkMode={darkMode} />
      <div className="resume-page-outer">
        <div className="resume-page">
          {/* Profile Summary */}
          <section className="profile-summary">
            <img src={profileImg} alt="Profile" className="profile-img" />
            <div>
              <h1>Hello, I'm Dimas Adi Nugroho</h1>
              <p className="summary-desc">
                I design and build apps and websites that help early-stage companies launch impactful solutions quickly.<br />
                By blending thoughtful design with robust architecture, I create scalable, user-focused applications in weeks, not months.
              </p>
              <div className="resume-links">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:email@example.com">Email</a>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="projects-section">
            <div className="project-col">
              <h2>Personal Projects.</h2>
              <div className="project-list">
                <div>
                  <strong>ui.dimasadingrh.me</strong>
                  <div className="project-desc">Open source UI components and templates for your projects.</div>
                </div>
                <div>
                  <strong>webmakers.studio</strong>
                  <div className="project-desc">Building e-commerce stores and web apps.</div>
                </div>
                <div>
                  <strong>React Portfolio Template</strong>
                  <div className="project-desc">A portfolio template built with React and Tailwind CSS.</div>
                </div>
              </div>
            </div>
            <div className="project-col">
              <h2>Work Projects</h2>
              <div className="project-list">
                <div>
                  <strong>UI/UX dashboard kemendikbud</strong>
                  <div className="project-desc">Built a dashboard for the Indonesian Ministry of Education and Culture .</div>
                </div>
                <div>
                  <strong>Luxury For You</strong>
                  <div className="project-desc">Built a luxury ecommerce store with Next.js.</div>
                </div>
                <div>
                  <strong>Logoarena</strong>
                  <div className="project-desc">Crowdsourcing platform for logo contests.</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ResumePage;