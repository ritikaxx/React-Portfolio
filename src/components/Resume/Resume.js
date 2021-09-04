import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";

import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary"  target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Microsoft Engage Mentee'21"
              date="June 2021 - July 2021"
              content={[
                "Cracked Microsoft Enagage'21 and got an opportunity to work and learn with the Microsoft Professionals.",
                " Worked on and completed a full Microsoft Teams Clone project in a month using MERN, socket.io and Twilio API. ",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Technical Core Commitee Member [VIT,Vellore]"
              content={[
                "Part of an enthusistic team of women, keen on making a difference and encouraging girls to be a part of the Technical world. Worked on various projects uder IEE-WIE and the official website oh the Club.",
              ]}
            />
            <Resumecontent
              title="Editorial Core Commitee Member at Leo Internation Club [VIT,Vellore]"
              content={[
                "Wrote social media captions and blogs being apart of the Editorial Team and took part in various activities to help the needy.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Btech in Computer Science [Vellore Institute Of Technology, Vellore] "
              date="2019 - Present"
              content={[`CGPA: 8.93 (Till 4th Sem)`]}
            />
            <Resumecontent
              title="12TH BOARD [Modern Vidya Niketan,Faridabad]"
              date="2007 - 2019"
              content={["Precentage: 90%"]}
            />
            
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary"  target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
