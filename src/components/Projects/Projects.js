import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import mentEd from "../../Assets/Projects/mentEd.png";
import Teams from "../../Assets/Projects/Teams.png"

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
              imgPath={mentEd}
              isBlog={false}
              title="Ment-Ed"
              description="A common E-learning platform to connect students,
               mentors and recruiters, for making the process of learning, 
               teaching and recruiting way more simpler. Students can get their skills verified by giving assessments
               and in the process also get beneits of our gamification features with a chance of winning scratch cards and prizes."
              link="https://github.com/ritikaxx/Ment-Ed"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Teams}
              isBlog={false}
              title="Microsoft Teams Clone"
              description="A Microsoft Teams clone made as a part of a challenge under Microsoft Engage-21 program.
              An MERN website made using socket.io and Twilio API which connects a group of people with the video calling feature.
              An inbuilt React-Chat-Engine, to make it easier for people to make groups and stay organized with their work.
              Additional feature like a Scheduler and Whitebaord makes the application unique with a User-friendly UI."
              link="https://github.com/ritikaxx/MicrosoftTeams"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Lyrics Generation"
              description="A lyrics generator made using concepts of Natural Language Processing 
              and Neural Networks. Training the RNN and LSTM modelwith Adam Optimizer, it was able to generate lyrcis with 98% accuracy.
              It is made keeping in mind the hard job of the lyricists and to help give melody o their lyrics.
              Embedded with Google Speech API, the voice will read the generated lyrics giving melody to the song. "
              link="https://github.com/ritikaxx/LyricsGeneration"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
