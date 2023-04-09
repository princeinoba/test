import React from "react";
import { Link } from "react-router-dom";
import Page from "../../components/Page";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import ProjectCard from "../../components/ProjectCard";
import "./style.css";

import * as projects from "../../projects";

export default function Home() {
  const featuredProjects = Object.values(projects).slice(0, 3);
  return (
    <>
      <Page
        title="Home"
        description="Hi, I'm Prince Inoba, a full-stack developer."
        className="d-flex flex-column"
      >
        <section id="hero">
          <Container>
            <Row>
              <Col sm>
                <Jumbotron className="px-0">
                  <h1 className="display-4 left-border-title">
                    <span id="title-hi" className="display-3">
                      Hi,
                    </span>
                    My name is Prince Inoba.
                  </h1>
                  <div className="left-border-line">
                    <p className="mb-5 h3 font-weight-light">
                      I'm a full-stack developer with a passion for Graphic
                      Design and Animations.
                    </p>
                    <Link to="/about" className="btn btn-dark">
                      Learn more about me
                    </Link>
                  </div>
                </Jumbotron>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="featured-projects" className="flex-grow-1">
          <Container>
            <Row>
              {featuredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </Row>
            <Row>
              <Col>
                <Link to="/portfolio" className="btn btn-dark mb-4">
                  View full Portfolio
                  <i className="fas fa-long-arrow-alt-right ml-2"></i>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </Page>
    </>
  );
}
