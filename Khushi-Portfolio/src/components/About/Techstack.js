import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
        flexWrap: "wrap", // Ensures icons wrap on smaller screens
      }}
    >
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 size={40} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs size={40} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact size={40} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb size={40} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs size={40} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit size={40} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql size={40} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython size={40} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava size={40} />
      </Col>
    </Row>
  );
}

export default Techstack;
