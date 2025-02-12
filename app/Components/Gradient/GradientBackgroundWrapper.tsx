"use client";
import { useGradient } from "./GradientContext";
import { BackgroundGradientAnimation } from "./background_gradient";

export default function GradientBackgroundWrapper() {
    const { gradientDisabled } = useGradient();

    return gradientDisabled ? null : <BackgroundGradientAnimation />;
}
