"use client";
import { createContext, useState, useContext } from "react";

interface GradientContextType {
    gradientEnabled: boolean;
    toggleGradient: () => void;
}

// Create the context with a default value
const GradientContext = createContext<GradientContextType | undefined>(undefined);

// Provider component
export const GradientProvider = ({ children }: { children: React.ReactNode }) => {
    const [gradientEnabled, setGradientEnabled] = useState(true);

    // Function to toggle the state
    const toggleGradient = () => setGradientEnabled((prev) => !prev);

    return (
        <GradientContext.Provider value={{ gradientEnabled, toggleGradient }}>
            {children}
        </GradientContext.Provider>
    );
};

// Custom hook for easy access
export const useGradient = () => {
    const context = useContext(GradientContext);
    if (!context) throw new Error("useGradient must be used within a GradientProvider");
    return context;
};
