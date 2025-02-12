"use client";
import { createContext, useState, useContext, useEffect } from "react";

interface GradientContextType {
    gradientDisabled: boolean;
    toggleGradient: () => void;
}

const GradientContext = createContext<GradientContextType | undefined>(undefined);

export const GradientProvider = ({ children }: { children: React.ReactNode }) => {
    const [gradientDisabled, setGradientDisabled] = useState(false);

    useEffect(() => {
        if (gradientDisabled) {
            document.documentElement.classList.add("gradient-disabled");
        } else {
            document.documentElement.classList.remove("gradient-disabled");
        }
    }, [gradientDisabled]);

    const toggleGradient = () => {
        setGradientDisabled((prev) => !prev);
    };

    return (
        <GradientContext.Provider value={{ gradientDisabled, toggleGradient }}>
            {children}
        </GradientContext.Provider>
    );
};

export const useGradient = () => {
    const context = useContext(GradientContext);
    if (!context) throw new Error("useGradient must be used within a GradientProvider");
    return context;
};
