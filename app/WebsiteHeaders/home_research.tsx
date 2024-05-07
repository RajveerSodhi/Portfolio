"use client";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Research from "../WebsiteComponents/research";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function HomeResearch() {
    const [researchVisible, setResearchVisible] = useState(false);

    const toggleResearchVisibility = () => {
        setResearchVisible(!researchVisible);
    };

    return (
        <Container style={{ marginBottom: "4rem" }}>
            <h2 className="text-center display-4 home-header" onClick={toggleResearchVisibility}>
                Research {researchVisible ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
            </h2>
            {researchVisible && <Research />}
        </Container>
    );
}
