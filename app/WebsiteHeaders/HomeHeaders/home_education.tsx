"use client";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Education from "../../WebsiteComponents/HomeComponents/Education/education";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function HomeEducation() {
    const [educationVisible, setEducationVisible] = useState(false);

    const toggleEducationVisibility = () => {
        setEducationVisible(!educationVisible);
    };

    return (
        <Container style={{ marginBottom: "4rem" }}>
            <h2 className="text-center display-4 home-header" onClick={toggleEducationVisibility}>
                Education {educationVisible ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
            </h2>
            {educationVisible && <Education />}
        </Container>
    );
}
