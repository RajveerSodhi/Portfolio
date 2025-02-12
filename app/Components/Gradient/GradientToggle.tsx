"use client";
import { useGradient } from "./GradientContext";
import { MdOutlineCropSquare, MdGradient } from "react-icons/md";

export default function GradientToggle() {
    const { gradientDisabled, toggleGradient } = useGradient();

    return (
        <button onClick={toggleGradient}>
            {gradientDisabled ? <MdGradient /> : <MdOutlineCropSquare />}
        </button>
    );
}
