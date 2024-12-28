import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="Light Green">Khushbu Singh</span> from{" "}
            <span className="Light Green">New Delhi, India.</span>
            <br />
            I am currently employed as a Senior Data Analyst at MarkScan.
            <br />
            I completed my Bachelor of Technology (B.Tech) in 2020 from Sanskriti University.
            <br />
            <br />
            Apart from coding, here are some activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Good interpersonal behavior skills & positive working ability.
            </li>
            <li className="about-activity">
              <ImPointRight /> Emphasis on the quality of work & good analytical skills.
            </li>
            <li className="about-activity">
              <ImPointRight /> I love traveling.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Khushbu Singh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
