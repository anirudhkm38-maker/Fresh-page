import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lock } from "lucide-react";
import { useMotion } from "@/context/MotionContext";
import { scrollToSection } from "@/lib/scroll";
import Lockup from "@/components/Lockup";

function MaskedLine({ children, delay, reduced }) {
    if (reduced) return <span className="block">{children}</span>;
    return (
        <span className="block overflow-hidden pb-1">
            <motion.span
                className="block"
                initial={{ y: "112%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
            >
                {children}
            </motion.span>
        </span>
    );
}

export default function Hero() {
    const { reduced } = useMotion();
    const [greeting] = useState(() => {
        const h = new Date().getHours();
        if (h < 12) return "Good morning. It's a Fresh Page.";
        if (h < 17) return "Good afternoon. Take a moment.";
        return "Winding down? Let's close the day.";
    });
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 600], [0, 70]);

    return (
        <section id="home" className="relative overflow-hidden">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(60% 50% at 72% 28%, rgba(168,191,163,0.28), transparent 70%)",
                }}
            />
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16 sm:pt-16 sm:pb-24 min-h-[calc(100svh-4rem)] flex items-center">
                <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <motion.div
                        style={reduced ? undefined : { y }}
                        className="order-1 lg:order-2 shrink-0"
                    >
                        <div
                            data-testid="breathing-circle"
                            className={`relative w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-sage/70 shadow-[0_24px_60px_rgba(63,90,74,0.16)] flex items-center justify-center ${
                                reduced
                                    ? ""
                                    : "animate-[breathe_8s_ease-in-out_infinite]"
                            }`}
                        >
                            <div className="absolute inset-4 rounded-full border border-cream/60" />
                            <p className="font-serif italic text-moss text-lg sm:text-2xl text-center px-10">
                                Breathe in...
                                <br />
                                breathe out
                            </p>
                        </div>
                    </motion.div>

                    <div className="order-2 lg:order-1 text-center lg:text-left max-w-2xl">
                        <p
                            data-testid="time-greeting"
                            className="font-serif italic text-lg sm:text-xl text-moss/70"
                        >
                            {greeting}
                        </p>
                        <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-moss">
                            <MaskedLine delay={0.05} reduced={reduced}>
                                Let go of yesterday,
                            </MaskedLine>
                            <MaskedLine delay={0.2} reduced={reduced}>
                                start{" "}
                                <em className="italic text-clay">fresh</em>{" "}
                                today.
                            </MaskedLine>
                        </h1>
                        <p className="mt-5 text-base sm:text-lg text-moss/80 leading-relaxed">
                            A 3-minute reset for anyone carrying work stress.
                            Nothing you write is ever saved.
                        </p>
                        <div className="mt-8 flex flex-col items-center lg:items-start gap-3">
                            <button
                                data-testid="begin-reset-button"
                                onClick={() => scrollToSection("reset")}
                                className="min-h-[52px] px-8 py-3.5 rounded-full bg-moss text-cream font-bold text-base hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 transition-all duration-300"
                            >
                                Begin my reset
                            </button>
                            <p className="flex items-center gap-1.5 text-sm text-moss/60">
                                <Lock className="w-3.5 h-3.5" />
                                Your words never leave this device.
                            </p>
                        </div>
                        <div className="mt-9 flex justify-center lg:justify-start">
                            <Lockup size="sm" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
