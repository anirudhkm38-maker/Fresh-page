import { Asterisk } from "lucide-react";
import { useMotion } from "@/context/MotionContext";

const ITEMS = [
    "Breathe in",
    "Speak it out",
    "Let it go",
    "Begin again tomorrow",
    "Nothing saved, ever",
    "No streaks, no pressure",
];

function Row() {
    return (
        <div className="flex items-center gap-8 pr-8 shrink-0">
            {ITEMS.map((t, i) => (
                <span key={i} className="flex items-center gap-8">
                    <span className="font-serif italic text-moss/70 text-lg whitespace-nowrap">
                        {t}
                    </span>
                    <Asterisk className="w-4 h-4 text-clay shrink-0" />
                </span>
            ))}
        </div>
    );
}

export default function Marquee() {
    const { reduced } = useMotion();
    return (
        <div
            aria-hidden="true"
            className="border-y border-moss/10 bg-sage/10 py-5 overflow-hidden"
        >
            <div className={`flex w-max ${reduced ? "" : "marquee-track"}`}>
                <Row />
                <Row />
            </div>
        </div>
    );
}
