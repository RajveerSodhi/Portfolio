"use client";
import { useState } from "react";
import IconsTutorial from "@/app/WebsiteComponents/IconsComponents/icons_tutorial";
import { Container } from "react-bootstrap";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function TutorialSection() {
    const [tutorialVisible, setTutorialVisible] = useState(false);

    const toggleTutorialVisibility = () => {
        setTutorialVisible(!tutorialVisible);
    };

    return (
        <Container style={{ backgroundColor: "#78aaf6", width: "100% ", maxWidth: "100% ", display: "flex", flexDirection: "column", justifyContent: "center", padding: "3rem 0" }}>
            <h4 className="display-4" onClick={toggleTutorialVisibility}>Not sure how to use an Icon Pack?  {tutorialVisible ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}</h4>
            {tutorialVisible && <IconsTutorial />}
        </ Container>
    );
}