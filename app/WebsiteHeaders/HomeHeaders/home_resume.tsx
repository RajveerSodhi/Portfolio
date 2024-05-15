"use client";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Resume from "../../WebsiteComponents/HomeComponents/Resume/resume";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function HomeResume() {
    const [resumeVisible, setResumeVisible] = useState(false);

    const toggleResumeVisibility = () => {
        setResumeVisible(!resumeVisible);
    };

    return (
        <Container style={{ marginBottom: "4rem" }}>
            <h2 className="text-center display-4 home-header" onClick={toggleResumeVisibility} style={{ fontSize: "2.5rem" }}>
                Resume {resumeVisible ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
            </h2>
            {resumeVisible && <Resume />}
        </Container>
    );
}
