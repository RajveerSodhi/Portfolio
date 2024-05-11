"use client";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Skills from "../../WebsiteComponents/skills";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function HomeSkills() {
    const [skillsVisible, setSkillsVisible] = useState(false);

    const toggleSkillsVisibility = () => {
        setSkillsVisible(!skillsVisible);
    };

    return (
        <Container style={{ marginBottom: "4rem" }}>
            <h2 className="text-center display-4 home-header" onClick={toggleSkillsVisibility}>
                Skills {skillsVisible ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
            </h2>
            {skillsVisible && <Skills />}
        </Container>
    );
}
