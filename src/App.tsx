import "./App.css";
import { IoSchoolSharp } from "react-icons/io5";
import { PiCertificateDuotone } from "react-icons/pi";
import { slides } from "./data/carouselData.json";
import Header from "./components/Header";
import { Carousel } from "./components/Carousel/Carousel";
import { useStrings } from "./hooks/useString";

function App() {
  const strings = useStrings();
  return (
    <>
      <Header />
      <main>
        <div id="home"></div>
        <section className="hero section">
          <div className="section-content hero-content">
            <div>
              <p className="eyebrow">{strings.hero_greeting}</p>
              <h1>{strings.hero_name}</h1>
              <p className="hero-copy">
                {strings.hero_description}
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">
                  {strings.hero_btn_contact}
                </a>
                <a className="btn btn-secondary" href="#about">
                  {strings.hero_btn_more}
                </a>
              </div>
            </div>
            <div className="hero-card">
              <div className="profile-image" aria-hidden="true">
                <img src="/profile.jpg" alt="Ảnh đại diện" />
              </div>
            </div>
          </div>
        </section>
        <div id="about"></div>
        <section id="" className="section about-section">
          <div className="section-content">
            <h2 className="section-title">{strings.about_title}</h2>
            <div className="about-grid">
              <div className="about-card">
                <h3>
                  {strings.about_education} <IoSchoolSharp className="school-icon" />
                </h3>
                <ul className="list">
                  <li>
                    {strings.about_university}
                  </li>
                  <li>
                    {strings.about_gpa}
                  </li>
                </ul>
              </div>
              <div className="about-card">
                <h3>
                  {strings.about_certificates}{" "}
                  <PiCertificateDuotone className="certificate-icon" />
                </h3>
                <ul className="list">
                  <li>{strings.about_cert_cybersecurity}</li>
                  <li>{strings.about_cert_toeic}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div id="skills"></div>
        <section id="" className="section skills-section">
          <div className="section-content">
            <h2 className="section-title">{strings.skills_title}</h2>
            <div className="skills-grid">
              <div className="skill-card">
                <ul className="list">
                  <li>{strings.skills_architecture}</li>
                  <li>{strings.skills_frontend}</li>
                  <li>{strings.skills_backend}</li>
                  <li>{strings.skills_security}</li>
                  <li>{strings.skills_database}</li>
                  <li>{strings.skills_api}</li>
                  <li>{strings.skills_cicd}</li>
                  <li>
                    {strings.skills_tools}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div id="projects"></div>
        <section id="" className="section projects-section">
          <div className="section-content">
            <h2 className="section-title">{strings.projects_title}</h2>
            <div className="project-card featured-project">
              <h3>{strings.projects_project1_title}</h3>
              <p className="project-description">
                {strings.projects_project1_desc}
              </p>
                <Carousel data={slides} />
              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  href="https://github.com/mattali4103"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {strings.projects_btn_code}
                </a>
              </div>
            </div>
          </div>
        </section>
        <div id="contact"></div>
        <section id="" className="section contact-section">
          <div className="section-content contact-content">
            <div>
              <h2>{strings.contact_title}</h2>
              <p>{strings.contact_address}</p>
              <p>
                {strings.contact_email}{" "}
                <a href="mailto:nguyenluongtt2@gmail.com">
                  nguyenluongtt2@gmail.com
                </a>
              </p>
              <p>
                {strings.contact_phone} <a href="tel:+84366030164">+84 366 030 164</a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
