"use client";
import { useGradient } from "./GradientContext";
import { MdOutlineCropSquare, MdGradient } from "react-icons/md";

export default function GradientToggle() {
    const { gradientEnabled, toggleGradient } = useGradient();

    return (
        <button onClick={toggleGradient}>
            {gradientEnabled ? <MdOutlineCropSquare /> : <MdGradient />}
        </button>
    );
}
