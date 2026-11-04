import { Feather, Mic, PenLine, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

const CARDS = [
    {
        icon: Mic,
        title: "Faster than typing",
        text: "Speaking is faster than typing when your head is full.",
    },
    {
        icon: PenLine,
        title: "No blank page",
        text: "You don't have to face a blank page at all.",
    },
    {
        icon: Feather,
        title: "It felt lighter",
        text: "\u201CSaying it out loud felt lighter,\u201D for me.",
    },
];

export default function VoiceHelp() {
    return (
        <section id="voice" className="scroll-mt-24 py-16 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <Reveal>
                    <p className="text-xs uppercase tracking-widest font-bold text-moss/60">
                        Why voice
                    </p>
                    <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-snug text-moss">
                        Why <em className="italic text-clay">voice</em> helps
                    </h2>
                </Reveal>

                <div className="mt-10 grid sm:grid-cols-3 gap-4 sm:gap-6">
                    {CARDS.map((c, i) => (
                        <Reveal key={c.title} delay={0.08 * i} className="h-full">
                            <div
                                data-testid={`voice-card-${i}`}
                                className="h-full bg-white/70 border border-moss/10 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                            >
                                <div className="w-11 h-11 rounded-full bg-sage/40 flex items-center justify-center">
                                    <c.icon className="w-5 h-5 text-moss" />
                                </div>
                                <h3 className="mt-4 font-serif text-xl sm:text-2xl text-moss">
                                    {c.title}
                                </h3>
                                <p className="mt-2 text-sm sm:text-base text-moss/75 leading-relaxed">
                                    {c.text}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.2}>
                    <p className="mt-10 text-center font-serif text-xl sm:text-2xl text-moss">
                        That's why this works best with Wispr Flow.
                    </p>
                    <p className="mt-5 flex items-center justify-center gap-2 text-sm text-moss/60">
                        <ShieldCheck className="w-4 h-4" />
                        Fresh Page is a reflection tool, not therapy.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
