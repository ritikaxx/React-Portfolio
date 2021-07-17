import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              SOMETHING ABOUT<span className="purple"> MYSELF </span>
            </h1>
            <p className="home-about-body">
              Someone ordinary with an extravagant fondness and passion for
               Software Development.
              <br />
              <br />I am a keen learner with fluent knowledge in languages like
              <i>
                <b className="purple"> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              A &nbsp;
              <i>
                <b className="purple">UI/UX designer </b> and
                {" "}
                <b className="purple">
                  Full Stack MERN developer 
                </b> {" "}with hands-on experience on various projects with a social impact.
              </i>
              <br />
              <br />
              Intrested and experienced in Backend develpment with <b className="purple">NodeJS</b> and
              <i>
                <b className="purple">
                  {" "}
                  Flask
                </b>
              </i>
              &nbsp; and Frontend development
              <i>
                <b className="purple">with ReactJS.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ritikaxx"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ritika-singh-3131a01b4/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
