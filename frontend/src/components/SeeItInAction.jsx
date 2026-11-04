import { Play } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function SeeItInAction() {
    return (
        <section id="action" className="scroll-mt-24 py-16 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <Reveal>
                    <p className="text-xs uppercase tracking-widest font-bold text-moss/60">
                        Demo
                    </p>
                    <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-snug text-moss">
                        See it in <em className="italic text-clay">action</em>
                    </h2>
                </Reveal>
                <Reveal delay={0.1}>
                    <div
                        data-testid="video-placeholder"
                        className="mt-10 aspect-video rounded-3xl border-2 border-dashed border-sage bg-sage/10 flex flex-col items-center justify-center gap-5 p-8 text-center"
                    >
                        <div className="w-16 h-16 rounded-full bg-cream shadow-md flex items-center justify-center">
                            <Play className="w-6 h-6 text-moss ml-1" />
                        </div>
                        <p className="max-w-md text-sm sm:text-base text-moss/70 leading-relaxed">
                            [Replace with a 30- to 60-second screen recording:
                            speaking into the box with Wispr Flow, then the
                            words dissolving]
                        </p>
                    </div>
                    <p className="mt-4 text-center font-serif italic text-moss/70">
                        me, speaking it out and letting it go.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
