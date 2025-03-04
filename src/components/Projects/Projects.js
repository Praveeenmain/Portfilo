import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://img.pikbest.com/origin/09/29/31/94jpIkbEsTGAg.png!bw700"
              isBlog={false}
              title="Spell Ai"
              description="Developed a personal chatbot incorporating user authentication, seamlessly integrated with the Gemini API. Streamlined user experience ensures secure access, leveraging Gemini's robust authentication mechanisms. With Gemini API's features, the chatbot offers personalized interactions tailored to individual users. Empower your chatbot with Gemini API, ensuring both security and customized experiences."
              ghLink="https://github.com/Praveeenmain/spellAi.git"
              demoLink="https://spell-ai.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9lemmH4B-NriZtJPJogDA4shTfKDmEsWLG-yvFFA3Q&s"
              isBlog={false}
              title="Book Store"
              description="Created a user-friendly interface for a bookstore, seamlessly integrating existing AI technology to generate concise and engaging book descriptions. Simplified navigation enhances browsing experience while AI-generated descriptions offer insightful previews, enriching the selection process. Effortlessly discover your next favorite read through an intuitive platform that leverages cutting-edge AI capabilities, revolutionizing the way books are explored and chosen."
              ghLink="https://github.com/Praveeenmain/Bookstore.git"
              demoLink="https://mibookstore.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png?rf=1024"
              isBlog={false}
              title="Weather"
              description="Developed a dynamic weather application utilizing ReactJS, offering real-time updates and intuitive user interface. Seamlessly integrated APIs provide accurate weather data, enhancing user experience and functionality. With ReactJS's component-based architecture, the application ensures scalability and maintainability. Experience the power of ReactJS in crafting responsive and feature-rich weather applications for diverse user needs"
              ghLink="https://github.com/Praveeenmain/Weather.git"
              demoLink="https://internweather.netlify.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              isBlog={false}
              title="JobbyApp"
              description="a sleek job search platform crafted with ReactJS, designed to streamline your job hunt with ease. With its intuitive user interface and responsive design, ReactJobs offers a seamless experience for both job seekers and recruiters. Explore a vast array of fake job listings to simulate real-world scenarios and hone your search skills. Start your journey towards your dream career today with ReactJobs!"
              ghLink="https://github.com/Praveeenmain/JobbyAppPraveen"
              demoLink="https://jobiepraveen98.ccbp.tech/login"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://evobuz.vercel.app/static/media/Logo.ef0ba09f02361b4751a6.png"
              isBlog={false}
              title="Evobuz"
              description="Evobuz is a full-stack event booking and e-commerce platform built with React.js, Node.js, MongoDB, and Firebase. It allows vendors to sell products and manage events, while customers can book events and make purchases seamlessly. The platform includes an admin dashboard for managing users, vendors, and transactions. We integrated Twilio for notifications, Razorpay for secure payments, and Email.js for automated emails. This project showcases my expertise in full-stack development, third-party integrations, and scalable architecture. 🚀"
              ghLink="https://github.com/Praveeenmain/evocus.git"
              demoLink="https://evobuz.vercel.app/"              
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
