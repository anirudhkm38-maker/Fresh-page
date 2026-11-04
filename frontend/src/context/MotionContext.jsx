import { createContext, useContext, useEffect, useState } from "react";
import { startLenis, stopLenis } from "@/lib/scroll";

const MotionContext = createContext({ reduced: false, toggle: () => {} });

export function MotionProvider({ children }) {
    const [reduced, setReduced] = useState(
        () =>
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );

    useEffect(() => {
        document.documentElement.classList.toggle("motion-reduced", reduced);
        if (reduced) stopLenis();
        else startLenis();
    }, [reduced]);

    return (
        <MotionContext.Provider
            value={{
                reduced,
                toggle: () => setReduced((r) => !r),
            }}
        >
            {children}
        </MotionContext.Provider>
    );
}

export function useMotion() {
    return useContext(MotionContext);
}
