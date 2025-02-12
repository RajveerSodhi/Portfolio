"use client";
import { useGradient } from "./GradientContext";
import { BackgroundGradientAnimation } from "./background_gradient";

export default function GradientBackgroundWrapper() {
    const { gradientEnabled } = useGradient();

    return gradientEnabled ? <BackgroundGradientAnimation /> : null;
}
