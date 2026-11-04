import { Users } from "lucide-react";
import Reveal from "@/components/Reveal";

const IDEAS = [
    {
        icon: Users,
        title: "A version for managers",
        text: "Because the person on the other side of the table is human too.",
    },
];

export default function NextIdeas() {
    return (
        <section id="next" className="scroll-mt-24 py-16 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <Reveal>
                    <p className="text-xs uppercase tracking-widest font-bold text-moss/60">
                        On the horizon
                    </p>
                    <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-snug text-moss">
                        What I'd build{" "}
                        <em className="italic text-clay">next</em>
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-moss/75 leading-relaxed max-w-xl">
                        Two of these just became real — the Sunday night reset
                        and the first-week reset now live in The reset above.
                        This one's still on the whiteboard.
                    </p>
                </Reveal>
                <div className="mt-10 grid sm:grid-cols-3 gap-4 sm:gap-6">
                    {IDEAS.map((idea, i) => (
                        <Reveal
                            key={idea.title}
                            delay={0.08 * i}
                            className="h-full sm:col-start-2"
                        >
                            <div
                                data-testid={`idea-card-${i}`}
                                className="h-full bg-white/70 border border-moss/10 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                            >
                                <span className="inline-block text-[10px] uppercase tracking-wider font-bold bg-sage/30 text-moss rounded-full px-2.5 py-1">
                                    idea, not built yet
                                </span>
                                <div className="mt-4 w-11 h-11 rounded-full bg-sage/40 flex items-center justify-center">
                                    <idea.icon className="w-5 h-5 text-moss" />
                                </div>
                                <h3 className="mt-4 font-serif text-xl sm:text-2xl text-moss">
                                    {idea.title}
                                </h3>
                                <p className="mt-2 text-sm sm:text-base text-moss/75 leading-relaxed">
                                    {idea.text}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
