import "./App.css";
import headshot from "./img/headshot.jpeg";
import AVRSLogo from "./img/AVRS_logo.png";
import XAMPPLogo from "./img/xamppLogo.png";
import CppLogo from "./img/cpp_logo.png";
import resume from "./static/Noah_Walker_resume.pdf";
import {BsLinkedin, BsGithub} from "react-icons/bs"
import {SiGmail} from "react-icons/si";

function App() {
  const projectsAttr = [{
    name: "Automated Vending and Reservation System",
    description: "UT Arlington Senior Design capstone project to allow users to purchase items from a vending machine in advance using a paired mobile app.",
  },
  {
    name: "Covid 19 Database",
    description: "UT Arlington Databases course, team project using relational database with MySQL using XAMPP server and server-side rendered html and PHP that supported read, write, and delete operations.",
  }, 
  {
    name: "Trick Or Treat Simulator",
    description: "UT Arlington Object-oriented course project to simulate users going to different types of houses one at a time.",
  }];

  return (
    <div className="container-lg">
      <Navbar />

      <div className="hero-container">
        {/* <p>Hello there, I'm</p> */}
        <h1 className="hero-title">Noah Walker</h1>
        <h2 className="hero-subtitle">Full Stack Software Developer</h2>
        <a href={resume} className="download-button">Download Resume</a>
      </div>

      <div id="about" className="about-me-container">
        <h2>About Me</h2>
        <div className="sub">
          <img className="headshot" src={headshot} alt="hello" />
          <p>Hello, I'm Noah Walker. I am a recent graduate of the University of Texas at Arlington. with a B.S. in Computer Science. My skills and interests lie primarily in front-end development with mobile and web applications, but I also have some knowlege in back-end development and database design. My strong work ethic, interpersonal skills, and technical prowess make me a great student, learner, and team member. When not working or studying, I enjoy running, rock climbing and working on personal projects.</p>
        </div>
      </div>

      <div id="projects" className="projects-container">
        <h1>Projects</h1>
        <div className="project">
          <div className="project-image">
            <img src={AVRSLogo} alt="project" />
          </div>
          <div className="project-info">
            <h2>Automated Vending and Reservation System</h2>
            <p>UT Arlington Senior Design capstone project to allow users to purchase items from a vending machine in advance using a paired mobile app.</p>
            <ul>
              <li>Served as lead mobile app developer on a team of four engineering students</li>
              <li> Three-tiered architecture with the mobile app as the front end, a raspberry pi controlling the machine as our back end, and Google Firebase acting as middle wear allowing communication between the two.</li>
            </ul>
            <a href="https://github.com/willpanderson/AVRS">View Project</a>
          </div>
        </div>
        <div className="project">
          <div className="project-image">
            <img src={XAMPPLogo} alt="project" />
          </div>
          <div className="project-info">
            <h2>Covid 19 Database</h2>
            <p>UT Arlington Databases course team project using relational database with MySQL using XAMPP server and server-side rendered html and PHP.</p>
            <ul>
              <li>Created an ER Diagram to identify relationships between tables.</li>
              <li>Supported read, write, and delete operations.</li>
            </ul>
            <a href="https://github.com/willpanderson/AVRS">View Project</a>
          </div>
        </div>
        <div className="project">
          <div className="project-image">
            <img src={CppLogo} alt="project" />
          </div>
          <div className="project-info">
            <h2>Trick Or Treat Simulator</h2>
            <p>UT Arlington Object-oriented course project to simulate user going to different types of houses one at a time.</p>
            <ul>
              <li>Command Line Application</li>
              <li>Each user ran on a separate thread, and each house contained a mutex to only allow one user at a time.</li>
              <li>Different house classes were built off a base house class.</li>
            </ul>
            <a href="https://github.com/willpanderson/AVRS">View Project</a>
          </div>
        </div>
      </div>

      <div id="contact" className="contact">
        <ul>
          <li><a href="mailto:noah.matwalker@gmail.com" target={"_blank"} rel="noreferrer"><SiGmail/></a></li>
          <li><a href="https://www.linkedin.com/in/noah-mat-walker/" target={"_blank"} rel="noreferrer"><BsLinkedin/></a></li>
          <li><a href="https://github.com/arkbuilder117" target={"_blank"} rel="noreferrer"><BsGithub/></a></li>
        </ul>
      </div>

    </div>
  );
}

export default App;

function Navbar({}) {
  return (
    <div className="navbar">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};
  
