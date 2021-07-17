import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ritika Singh </span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br />I am currently pursuing my Btech in Computer Science from Vellore Institute Of Tchnology, Vellore.
            <br />
            <br />
            Apart from developing softwares, I find my interest in 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> UI/UX Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Technical Blogging
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing and Painting
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
