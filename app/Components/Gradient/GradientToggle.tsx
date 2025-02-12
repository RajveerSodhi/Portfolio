"use client";
import { useGradient } from "./GradientContext";
import { MdGradient } from "react-icons/md";
import { VscDiffRemoved } from "react-icons/vsc";

export default function GradientToggle() {
    const { gradientDisabled, toggleGradient } = useGradient();

    return (
        <button onClick={toggleGradient}>
            {gradientDisabled ? <MdGradient /> : <VscDiffRemoved />}
        </button>
    );
}
