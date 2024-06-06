"use client";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Work from "../../WebsiteComponents/HomeComponents/Work/work";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function HomeWork() {
    const [workVisible, setWorkVisible] = useState(false);

    const toggleWorkVisibility = () => {
        setWorkVisible(!workVisible);
    };

    return (
        <Container style={{ marginBottom: "4rem" }}>
            <h2
                className="text-center display-4 home-header"
                onClick={toggleWorkVisibility}
                style={{ fontSize: "2.5rem" }}
            >
                Work Experience {workVisible ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
            </h2>
            {workVisible && <Work />}
        </Container>
    );
}
