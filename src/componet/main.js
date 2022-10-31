import "../asset/css/style.css";
// import '../asset/vendor/aos/aos.css';
import "../asset/vendor/bootstrap/css/bootstrap.min.css";
import "../asset/vendor/bootstrap-icons/bootstrap-icons.css";
import "../asset/vendor/boxicons/css/boxicons.min.css";
import "../asset/vendor/glightbox/css/glightbox.min.css";
import "../asset/vendor/swiper/swiper-bundle.min.css";
import profileimage from "../asset/img/profileimage.jpeg";
import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from "react";
const Main = () => {
  const [checkcss, setcheckcss] = useState(false);
  const handleNavbar = () => {
    setcheckcss(!checkcss);
  };
  const handlelistNavbar = () => {
    if(checkcss){
      setcheckcss(!checkcss);
    } 
  };
  return (
    <>
    <body className={checkcss ?"mobile-nav-active":""}>
      <i
        className={
          checkcss
            ? "bi mobile-nav-toggle d-xl-none bi-x"
            : "bi bi-list mobile-nav-toggle d-xl-none"
        }
        onClick={handleNavbar}
      />
      {/* ======= Header ======= */}
      <header id="header"  className={checkcss ?"mobile-nav-active":""}>
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src={profileimage}
              alt=""
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="index.html">Alex Smith</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a href="/" className="twitter">
                <i className="bx bxl-twitter" />
              </a>
              <a href="/" className="facebook">
                <i className="bx bxl-facebook" />
              </a>
              <a href="/" className="instagram">
                <i className="bx bxl-instagram" />
              </a>
              <a href="/" className="google-plus">
                <i className="bx bxl-skype" />
              </a>
              <a href="/" className="linkedin">
                <i className="bx bxl-linkedin" />
              </a>
            </div>
          </div>
          <nav
            id="navbar"
            className="nav-menu navbar"
          >
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto active" onClick={handlelistNavbar}>
                  <i className="bx bx-home" /> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto" onClick={handlelistNavbar}>
                  <i className="bx bx-user" /> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto" onClick={handlelistNavbar}>
                  <i className="bx bx-file-blank" /> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="nav-link scrollto" onClick={handlelistNavbar}>
                  <i className="bx bx-book-content" /> <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link scrollto" onClick={handlelistNavbar}>
                  <i className="bx bx-server" /> <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link scrollto" onClick={handlelistNavbar}>
                  <i className="bx bx-envelope" /> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* .nav-menu */}
        </div>
      </header>
      {/* End Header */}
      {/* ======= Hero Section ======= */}
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          <h1>Bhautik</h1>
          <p>
            I'm MERN stack devloper
            <span
              className="typed"
              data-typed-items="Designer, Developer, Freelancer, Photographer"
            />
          </p>
        </div>
      </section>
      {/* End Hero */}
      <main id="main">
        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2>About</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <img src={profileimage} className="img-fluid" alt="" />
              </div>
              <div
                className="col-lg-8 pt-4 pt-lg-0 content"
                data-aos="fade-left"
              >
                <h3>UI/UX Designer &amp; Web Developer.</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Birthday:</strong> <span>7 jun 2001</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Website:</strong>{" "}
                        <span>bhautikprajapati609@gnmail.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Phone:</strong> <span>7984501900</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>City:</strong> <span>india,gujarat</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Age:</strong> <span>21</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Degree:</strong> <span>Master</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>PhEmailone:</strong>{" "}
                        <span>bhautikprajapati609@gnmail.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Freelance:</strong> <span>Available</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
        {/* ======= Facts Section ======= */}
        {/* <section id="facts" className="facts">
          <div className="container">
            <div className="section-title">
              <h2>Facts</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row no-gutters">
              <div
                className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                data-aos="fade-up"
              >
                <div className="count-box">
                  <i className="bi bi-emoji-smile" />
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={232}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>
                    <strong>Happy Clients</strong> consequuntur quae
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="count-box">
                  <i className="bi bi-journal-richtext" />
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={521}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>
                    <strong>Projects</strong> adipisci atque cum quia aut
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="count-box">
                  <i className="bi bi-headset" />
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={1453}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>
                    <strong>Hours Of Support</strong> aut commodi quaerat
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="count-box">
                  <i className="bi bi-people" />
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={32}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>
                    <strong>Hard Workers</strong> rerum asperiores dolor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* End Facts Section */}
        {/* ======= Skills Section ======= */}
        <section id="skills" className="skills section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Skills</h2>
              <p>
                Software Developer with a ability to adapt collabrative
                environments. Web developer with front-end and backend Skills.
              </p>
            </div>
            <div className="row skills-content">
              <div className="col-lg-6" data-aos="fade-up">
                <div className="progress">
                  <span className="skill">
                    HTML <i className="val">100%</i>
                  </span>
                  {/* <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div> */}
                  <ProgressBar completed={100} />
                </div>
                <div className="progress">
                  <span className="skill">
                    CSS <i className="val">90%</i>
                  </span>
                  <ProgressBar completed={90} />
                </div>
                <div className="progress">
                  <span className="skill">
                    JavaScript <i className="val">75%</i>
                  </span>
                  {/* <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div> */}
                  <ProgressBar completed={75} />
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                <div className="progress">
                  <span className="skill">
                    PHP <i className="val">80%</i>
                  </span>
                  {/* <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div> */}
                  <ProgressBar completed={80} />
                </div>
                <div className="progress">
                  <span className="skill">
                    WordPress/CMS <i className="val">90%</i>
                  </span>
                  {/* <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div> */}
                  <ProgressBar completed={90} />
                </div>
                <div className="progress">
                  <span className="skill">
                    Photoshop <i className="val">55%</i>
                  </span>
                  {/* <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={55}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div> */}
                  <ProgressBar completed={55} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Skills Section */}
        {/* ======= Resume Section ======= */}
        <section id="resume" className="resume">
          <div className="container">
            <div className="section-title">
              <h2>Resume</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6" data-aos="fade-up">
                <h3 className="resume-title">Sumary</h3>
                <div className="resume-item pb-0">
                  <h4>Bhautik Zanzrukiya</h4>
                  <p>
                    <em>
                      As a recent graduate, I am seeking a role which allows me
                      to continue learning and perfecting my skills as I provide
                      high-quality work, and encourages me to flourish.
                    </em>
                  </p>
                  <ul>
                    <li>7984501900</li>
                    <li>bhautikprajapati609@gmail.com</li>
                  </ul>
                </div>
                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>12TH STANDARD (HSC BOARD)</h4>
                  <h5>2017 - 2018</h5>
                  <p>
                    <em>Amit high school,odhav,ahemedabad</em>
                  </p>
                  <p>75%</p>
                </div>
                <div className="resume-item">
                  <h4>
                    (BSC IT) BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY
                  </h4>
                  <h5>2018 - 2021</h5>
                  <p>
                    <em>K S School Of Business Management</em>
                  </p>
                  <p>GPA :- 3.75</p>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>Trainee</h4>
                  <h5>2022 - Present</h5>
                  <p>
                    <em>CoodeIT Soultion Pvt Ltd., Ahmedabad, GUJ </em>
                  </p>
                  <ul>
                    <li>
                      Participated in on-the-job training, working closely with
                      supervisors and coworkers and asking appropriate questions
                      Shadowed senior team members to learn all related jobs and
                      tasks.
                    </li>
                    <li>
                      Reviewed code, debugged problems and conected issues.
                    </li>
                    <li>
                      Discussed project progress with customers, collected
                      feedback on different stages and directly addressed
                      concerns.
                    </li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Project</h4>
                  <h5>BSC(IT) 3rd year Final project</h5>
                  <p>
                    <em>ecommerce website</em>
                  </p>
                  <ul>
                    <li>
                      Developed numerous marketing programs (logos,
                      brochures,infographics, presentations, and
                      advertisements).
                    </li>
                    <li>
                      Managed up to 5 projects or tasks at a given time while
                      under pressure
                    </li>
                    <li>
                      Recommended and consulted with clients on the most
                      appropriate graphic design
                    </li>
                    <li>
                      Created 4+ design presentations and proposals a month for
                      clients and account managers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Resume Section */}
        {/* ======= Portfolio Section ======= */}
        {/* <section id="portfolio" className="portfolio section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Portfolio</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>
            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src={protfoilio1}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="asset/img/portfolio/portfolio-1.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 1"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src={protfoilio2}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-2.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Web 3"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src={protfoilio3}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-3.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 2"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src={protfoilio4}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-4.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Card 2"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src={protfoilio5}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-5.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Web 2"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src={protfoilio6}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-6.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 3"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-7.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-7.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Card 1"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-8.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-8.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Card 3"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-9.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-9.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Web 3"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* End Portfolio Section */}
        {/* ======= Services Section ======= */}
        {/* <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <h2>Services</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                <div className="icon">
                  <i className="bi bi-briefcase" />
                </div>
                <h4 className="title">
                  <a href="/">Lorem Ipsum</a>
                </h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 icon-box"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="icon">
                  <i className="bi bi-card-checklist" />
                </div>
                <h4 className="title">
                  <a href="/">Dolor Sitema</a>
                </h4>
                <p className="description">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat tarad limino ata
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 icon-box"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="icon">
                  <i className="bi bi-bar-chart" />
                </div>
                <h4 className="title">
                  <a href="/">Sed ut perspiciatis</a>
                </h4>
                <p className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 icon-box"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="icon">
                  <i className="bi bi-binoculars" />
                </div>
                <h4 className="title">
                  <a href="/">Magni Dolores</a>
                </h4>
                <p className="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 icon-box"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="icon">
                  <i className="bi bi-brightness-high" />
                </div>
                <h4 className="title">
                  <a href="/">Nemo Enim</a>
                </h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 icon-box"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <div className="icon">
                  <i className="bi bi-calendar4-week" />
                </div>
                <h4 className="title">
                  <a href="/">Eiusmod Tempor</a>
                </h4>
                <p className="description">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi
                </p>
              </div>
            </div>
          </div>
        </section> */}
        {/* End Services Section */}
        {/* ======= Testimonials Section ======= */}
        {/* <section id="testimonials" className="testimonials section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Testimonials</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div
              className="testimonials-slider swiper"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item" data-aos="fade-up">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                    <img
                      src="assets/img/testimonials/testimonials-1.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="testimonial-item"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Export tempor illum tamen malis malis eram quae irure esse
                      labore quem cillum quid cillum eram malis quorum velit
                      fore eram velit sunt aliqua noster fugiat irure amet legam
                      anim culpa.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                    <img
                      src="assets/img/testimonials/testimonials-2.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="testimonial-item"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Enim nisi quem export duis labore cillum quae magna enim
                      sint quorum nulla quem veniam duis minim tempor labore
                      quem eram duis noster aute amet eram fore quis sint minim.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                    <img
                      src="assets/img/testimonials/testimonials-3.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="testimonial-item"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                      multos export minim fugiat minim velit minim dolor enim
                      duis veniam ipsum anim magna sunt elit fore quem dolore
                      labore illum veniam.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                    <img
                      src="assets/img/testimonials/testimonials-4.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="testimonial-item"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Quis quorum aliqua sint quem legam fore sunt eram irure
                      aliqua veniam tempor noster veniam enim culpa labore duis
                      sunt culpa nulla illum cillum fugiat legam esse veniam
                      culpa fore nisi cillum quid.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                    <img
                      src="assets/img/testimonials/testimonials-5.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </section> */}
        {/* End Testimonials Section */}
        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2>Contact</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row" data-aos="fade-in">
              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt" />
                    <h4>Location:</h4>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
                  <div className="email">
                    <i className="bi bi-envelope" />
                    <h4>Email:</h4>
                    <p>info@example.com</p>
                  </div>
                  <div className="phone">
                    <i className="bi bi-phone" />
                    <h4>Call:</h4>
                    <p>+1 5589 55488 55s</p>
                  </div>
                  <iframe
                    title="er"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                    frameBorder={0}
                    style={{ border: 0, width: "100%", height: 290 }}
                    allowFullScreen=""
                  />
                </div>
              </div>
              <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        required=""
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows={10}
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </main>
      {/* End #main */}
      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>iPortfolio</span>
            </strong>
          </div>
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
      {/* End  Footer */}
      <a
        href="/"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
      {/* Vendor JS Files */}
      {/* Template Main JS File */}</body>
    </>
  );
};
export default Main;
