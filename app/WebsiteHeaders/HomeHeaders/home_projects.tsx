"use client";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Projects from "../../Components/HomeComponents/Proj/projects";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function HomeProjects() {
    const [projectsVisible, setProjectsVisible] = useState(false);

    const toggleProjectsVisibility = () => {
        setProjectsVisible(!projectsVisible);
    };

    return (
        <Container style={{ marginBottom: "4rem" }}>
            <h2
                className="text-center display-4 home-header"
                onClick={toggleProjectsVisibility}
                style={{ fontSize: "2.5rem" }}
            >
                Projects {projectsVisible ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
            </h2>
            {projectsVisible && <Projects />}
        </Container>
    );
}
