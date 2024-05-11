"use client";
import { useState } from "react";
import { Container } from "react-bootstrap";
import WorkEx from "../../WebsiteComponents/HomeComponents/Workex/workex";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function HomeWorkEx() {
    const [workexVisible, setWorkExVisible] = useState(false);

    const toggleWorkExVisibility = () => {
        setWorkExVisible(!workexVisible);
    };

    return (
        <Container style={{ marginBottom: "4rem" }}>
            <h2 className="text-center display-4 home-header" onClick={toggleWorkExVisibility}>
                Work Experience {workexVisible ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
            </h2>
            {workexVisible && <WorkEx />}
        </Container>
    );
}
