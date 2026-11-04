import { Hourglass, Mic, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import Lockup from "@/components/Lockup";

const POINTS = [
    {
        icon: Mic,
        title: "Voice-first design",
        text: "Built to be spoken to, not typed at. Words break apart and drift away instead of piling up.",
    },
    {
        icon: ShieldCheck,
        title: "Nothing stored",
        text: "No database, no accounts, no analytics on what you write. Text lives in memory and vanishes.",
    },
    {
        icon: Hourglass,
        title: "A finite ritual",
        text: "Three minutes, seven small steps, then it ends. On purpose — so it never asks for more of your day.",
    },
];

export default function HowBuilt() {
    return (
        <section id="how" className="scroll-mt-24 py-16 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <Reveal>
                    <p className="text-xs uppercase tracking-widest font-bold text-moss/60">
        Behind the tool
                    </p>
                    <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-snug text-moss">
                        How I <em className="italic text-clay">built</em> this
                    </h2>
                </Reveal>

                <div className="mt-10 grid sm:grid-cols-3 gap-4 sm:gap-6">
                    {POINTS.map((p, i) => (
                        <Reveal key={p.title} delay={0.08 * i} className="h-full">
                            <div
                                data-testid={`how-point-${i}`}
                                className="h-full bg-white/70 border border-moss/10 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                            >
                                <div className="w-11 h-11 rounded-full bg-sage/40 flex items-center justify-center">
                                    <p.icon className="w-5 h-5 text-moss" />
                                </div>
                                <h3 className="mt-4 font-serif text-xl text-moss">
                                    {p.title}
                                </h3>
                                <p className="mt-2 text-sm text-moss/75 leading-relaxed">
                                    {p.text}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.15}>
                    <div className="mt-12 bg-sage/15 border border-moss/10 rounded-3xl px-6 py-12 sm:py-16 flex flex-col items-center gap-6">
                        <Lockup size="lg" />
                        <p className="text-sm text-moss/70 text-center">
                            Made with Wispr Flow and Emergent.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
