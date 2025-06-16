import React from 'react';
import profileImg from './assets/img/profile.png';

function ResumePage({ darkMode, onShowPdf }) {
  return (
    <div className="resume-page-outer">
      <div className="resume-page">
        {/* Profile Summary */}
        <section className="profile-summary">
          <img src={profileImg} alt="Profile" className="profile-img" />
          <div>
            <h1>Hello, I'm Dimas Adi Nugroho</h1>
            <p className="summary-desc">
               I have a deep interest in the realm of Video Manipulation, Dynamic Graphics, User Interface/User Experience, Creative Design, and Web Development.
            </p>
            <div className="resume-links">
              <button
                onClick={onShowPdf}
                style={{
                  background: "none",
                  border: "none",
                  color: "inherit",
                  cursor: "pointer",
                  textDecoration: "underline",
                  font: "inherit"
                }}
              >
                Resume
              </button>
              <a href="https://github.com/dimsadingrh/" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/dimasadingrh" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:dimasadingrh@gmail.com">Email</a>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="projects-section">
          <div className="project-col">
            <h2>Personal Projects.</h2>
            <div className="project-list">
              <div>
                <strong>Fullstack Website "Elektronik Kita"</strong>
                <div className="project-desc">An electronic goods sales website built with the CodeIgniter framework includes interface design with admin feature to maintain the website product. This web project was created during college.</div>
              </div>
              <div>
                <strong>Fullstack Website "Toko Buku Kita"</strong>
                <div className="project-desc">An online bookstore built with the CodeIgniter framework, featuring a user-friendly interface and an admin panel for managing inventory. This project was developed during my college years.</div>
              </div>
              <div>
                <strong>Motion Graphic UI Design "Gojek Inspired"</strong>
                <div className="project-desc">A motion graphic UI design project inspired by Gojek's interface, showcasing dynamic graphics and user interaction.</div>
              </div>
            </div>
          </div>
          <div className="project-col">
            <h2>Work Projects</h2>
            <div className="project-list">
              <div>
                <strong>UI/UX Chart Dashboard</strong>
                <div className="project-desc">Built a Chart Dashboard prototype for the Indonesian Ministry of Education and Culture. This project also during my Internship in 2023 at Indonesian Ministry of Education and Culture.</div>
              </div>
              <div>
                <strong>Redesign UI/UX InaRisk App</strong>
                <div className="project-desc">RedesignUI/UX for the InaRisk application, enhancing user experience and interface aesthetics. This project was Top 10 UI/UX competition from the National Disaster Management Agency (BNPB) with the title "Regeneration and Reachability."</div>
              </div>
              <div>
                <strong>Ads Video By.U</strong>
                <div className="project-desc">Creating Ads Video for By.U product</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ResumePage;