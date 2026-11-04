import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Check, Leaf, Lock } from "lucide-react";
import { useMotion } from "@/context/MotionContext";
import Reveal from "@/components/Reveal";

const CHIPS = [
    "Before standing up",
    "Before standup",
    "After a hard meeting",
    "Shutting down for the day",
    "Sunday night dread",
    "Just need a reset",
];

const AFFIRMATIONS = [
    "This page is already turning. So can I.",
    "The day ahead doesn't owe the day behind.",
    "I can put it down and pick it up tomorrow.",
    "One calm step is still a step forward.",
    "I don't have to carry it all to care about it all.",
    "Right now is enough to begin from.",
];

const STEP_LABELS = [
    "Pick your moment",
    "One breath",
    "Release",
    "In my hands",
    "Fresh thought",
    "Body nudge",
    "Done",
];

export default function Reset() {
    const { reduced } = useMotion();
    const [step, setStep] = useState(0);
    const [chip, setChip] = useState(null);
    const [releaseText, setReleaseText] = useState("");
    const [particles, setParticles] = useState(null);
    const [handsA, setHandsA] = useState("");
    const [handsB, setHandsB] = useState("");
    const [affirmation, setAffirmation] = useState(null);
    const taRef = useRef(null);

    useEffect(() => {
        if (step !== 1) return;
        const t = setTimeout(() => setStep(2), 4000);
        return () => clearTimeout(t);
    }, [step]);

    useEffect(() => {
        if (step === 2 && !particles) taRef.current?.focus();
    }, [step, particles]);

    const letItGo = () => {
        const words = releaseText.split(/\s+/).filter(Boolean);
        if (!words.length) return;
        if (reduced) {
            setReleaseText("");
            setStep(3);
            return;
        }
        setParticles(
            words.map((w, i) => ({
                w,
                dx: (Math.random() * 80 - 40).toFixed(0),
                dy: (90 + Math.random() * 60).toFixed(0),
                rot: (Math.random() * 14 - 7).toFixed(0),
                dur: (1.8 + Math.random()).toFixed(2),
                delay: (i * 0.04).toFixed(2),
            }))
        );
        setTimeout(() => {
            setParticles(null);
            setReleaseText("");
            setStep(3);
        }, 3000);
    };

    const clearAll = () => {
        setReleaseText("");
        setHandsA("");
        setHandsB("");
        setAffirmation(null);
        setParticles(null);
    };

    const fade = (children, key) => (
        <AnimatePresence mode="wait">
            <motion.div
                key={key}
                initial={{ opacity: 0, y: reduced ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduced ? 0 : -12 }}
                transition={{ duration: reduced ? 0.2 : 0.45 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );

    const BackBtn = ({ to }) => (
        <button
            data-testid="reset-back-button"
            onClick={() => setStep(to)}
            className="flex items-center gap-1 text-xs font-bold text-moss/50 hover:text-moss transition-colors"
        >
            <ArrowLeft className="w-3.5 h-3.5" /> Back
        </button>
    );

    let content = null;

    if (step === 0) {
        content = fade(
            <div>
                <p className="text-xs uppercase tracking-widest font-bold text-moss/60">
                    Pick your moment · optional
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {CHIPS.map((c) => (
                        <button
                            key={c}
                            data-testid={`reset-chip-${c.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                            onClick={() =>
                                setChip((prev) => (prev === c ? null : c))
                            }
                            className={`min-h-[44px] px-4 rounded-full border text-sm font-semibold transition-all duration-200 ${
                                chip === c
                                    ? "bg-moss text-cream border-moss"
                                    : "border-moss/25 text-moss/75 hover:border-moss/50 hover:bg-sage/15"
                            }`}
                        >
                            {c}
                        </button>
                    ))}
                </div>
                <button
                    data-testid="reset-continue-button"
                    onClick={() => setStep(1)}
                    className="mt-8 min-h-[48px] px-7 rounded-full bg-moss text-cream font-bold hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                >
                    Continue
                </button>
            </div>,
            "moment"
        );
    } else if (step === 1) {
        content = fade(
            <div className="py-6 flex flex-col items-center text-center">
                <div
                    className={`w-32 h-32 rounded-full bg-sage/70 flex items-center justify-center ${
                        reduced
                            ? ""
                            : "animate-[breathe_4s_ease-in-out_infinite]"
                    }`}
                    data-testid="reset-breath-circle"
                >
                    <Leaf className="w-8 h-8 text-moss" />
                </div>
                <p className="mt-6 font-serif text-2xl text-moss">
                    Take one slow breath
                </p>
                {!reduced && (
                    <div className="mt-6 w-40 h-1 rounded-full bg-moss/10 overflow-hidden">
                        <motion.div
                            className="h-full bg-sage rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 4, ease: "linear" }}
                        />
                    </div>
                )}
            </div>,
            "breath"
        );
    } else if (step === 2 && particles) {
        content = fade(
            <div
                data-testid="release-particles"
                className="min-h-[220px] flex items-center text-xl sm:text-2xl leading-relaxed text-moss/80"
            >
                <p>
                    {particles.map((p, i) => (
                        <span
                            key={i}
                            className="particle-word inline-block"
                            style={{
                                "--dx": `${p.dx}px`,
                                "--dy": `${p.dy}px`,
                                "--rot": `${p.rot}deg`,
                                animationDuration: `${p.dur}s`,
                                animationDelay: `${p.delay}s`,
                            }}
                        >
                            {p.w}&nbsp;
                        </span>
                    ))}
                </p>
            </div>,
            "particles"
        );
    } else if (step === 2) {
        content = fade(
            <div>
                <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-widest font-bold text-moss/60">
                        Release
                    </p>
                    <BackBtn to={0} />
                </div>
                <p className="mt-3 font-serif text-xl sm:text-2xl text-moss leading-snug">
                    What's weighing on you? Say it out loud or type it. No one
                    is reading this.
                </p>
                <textarea
                    ref={taRef}
                    data-testid="release-textarea"
                    value={releaseText}
                    onChange={(e) => setReleaseText(e.target.value)}
                    rows={6}
                    placeholder="Say it here..."
                    className="mt-4 w-full rounded-2xl border border-moss/15 bg-white/80 p-4 text-base leading-relaxed text-moss placeholder:text-moss/35 resize-none focus:outline-none"
                />
                <p className="mt-2 text-sm text-moss/60">
                    Tip: Dictate with Wispr Flow, or just type.
                </p>
                <button
                    data-testid="let-it-go-button"
                    onClick={letItGo}
                    disabled={!releaseText.trim()}
                    className="mt-5 min-h-[48px] px-7 rounded-full bg-moss text-cream font-bold hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
                >
                    Let it go
                </button>
            </div>,
            "release"
        );
    } else if (step === 3) {
        content = fade(
            <div>
                <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-widest font-bold text-moss/60">
                        In my hands
                    </p>
                    <BackBtn to={2} />
                </div>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-bold text-moss/75">
                            What's in my hands today
                        </label>
                        <textarea
                            data-testid="hands-today-textarea"
                            value={handsA}
                            onChange={(e) => setHandsA(e.target.value)}
                            rows={5}
                            placeholder="The few things that are actually mine to carry..."
                            className="mt-2 w-full rounded-2xl border border-moss/15 bg-white/80 p-4 text-base leading-relaxed text-moss placeholder:text-moss/35 resize-none focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-bold text-moss/75">
                            What isn't?
                        </label>
                        <textarea
                            data-testid="hands-not-textarea"
                            value={handsB}
                            onChange={(e) => setHandsB(e.target.value)}
                            rows={5}
                            placeholder="The rest of it. Not yours. Put it down here..."
                            className="mt-2 w-full rounded-2xl border border-moss/15 bg-white/80 p-4 text-base leading-relaxed text-moss placeholder:text-moss/35 resize-none focus:outline-none"
                        />
                    </div>
                </div>
                <button
                    data-testid="hands-continue-button"
                    onClick={() => setStep(4)}
                    className="mt-6 min-h-[48px] px-7 rounded-full bg-moss text-cream font-bold hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                >
                    Continue
                </button>
            </div>,
            "hands"
        );
    } else if (step === 4) {
        content = fade(
            <div>
                <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-widest font-bold text-moss/60">
                        Fresh thought
                    </p>
                    <BackBtn to={3} />
                </div>
                <p className="mt-3 font-serif text-xl text-moss">
                    Pick a line to carry with you.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {AFFIRMATIONS.map((a, i) => (
                        <button
                            key={i}
                            data-testid={`affirmation-option-${i}`}
                            onClick={() => setAffirmation(i)}
                            className={`min-h-[44px] px-4 rounded-full border text-sm font-semibold transition-all duration-200 ${
                                affirmation === i
                                    ? "bg-sage text-moss border-sage"
                                    : "border-moss/25 text-moss/75 hover:border-moss/50 hover:bg-sage/15"
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
                {affirmation !== null && (
                    <p
                        data-testid="affirmation-display"
                        className="mt-6 font-serif text-2xl sm:text-3xl leading-snug text-moss border-l-2 border-clay pl-5"
                    >
                        {AFFIRMATIONS[affirmation]}
                    </p>
                )}
                <button
                    data-testid="affirmation-continue-button"
                    onClick={() => setStep(5)}
                    disabled={affirmation === null}
                    className="mt-7 min-h-[48px] px-7 rounded-full bg-moss text-cream font-bold hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
                >
                    Continue
                </button>
            </div>,
            "thought"
        );
    } else if (step === 5) {
        content = fade(
            <div className="text-center py-4">
                <p className="text-xs uppercase tracking-widest font-bold text-moss/60">
                    Body nudge
                </p>
                <p className="mt-4 font-serif text-2xl sm:text-3xl leading-snug text-moss">
                    Drink some water, eat something that makes you feel good.
                </p>
                <p className="mt-4 text-base text-moss/70">
                    Look away from the screen for 20 seconds. No tracking, no
                    logging.
                </p>
                <button
                    data-testid="reset-finish-button"
                    onClick={() => {
                        clearAll();
                        setStep(6);
                    }}
                    className="mt-8 min-h-[48px] px-7 rounded-full bg-moss text-cream font-bold hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                >
                    Okay, done
                </button>
            </div>,
            "nudge"
        );
    } else {
        content = fade(
            <div
                data-testid="reset-closing"
                className="py-10 flex flex-col items-center text-center"
            >
                <div className="w-20 h-20 rounded-full bg-sage/60 flex items-center justify-center">
                    <Check className="w-9 h-9 text-moss" />
                </div>
                <p className="mt-6 font-serif text-3xl sm:text-4xl text-moss">
                    You're done. See you tomorrow.
                </p>
            </div>,
            "done"
        );
    }

    return (
        <section id="reset" className="scroll-mt-24 py-16 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <Reveal>
                    <p className="text-xs uppercase tracking-widest font-bold text-moss/60">
                        The tool
                    </p>
                    <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-snug text-moss">
                        The <em className="italic text-clay">reset</em>
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-moss/75 leading-relaxed max-w-xl">
                        One screen at a time. About three minutes. Then it
                        closes — on purpose.
                    </p>
                </Reveal>

                <Reveal delay={0.1}>
                    <div
                        data-testid="reset-card"
                        className="mt-10 bg-white/70 border border-moss/10 rounded-3xl shadow-sm p-6 sm:p-10 min-h-[420px] flex flex-col justify-center"
                    >
                        {step < 6 && (
                            <div className="flex items-center gap-2 mb-8">
                                {STEP_LABELS.map((_, i) => (
                                    <span
                                        key={i}
                                        className={`h-2 rounded-full transition-all duration-300 ${
                                            i === step
                                                ? "w-6 bg-moss"
                                                : i < step
                                                  ? "w-2 bg-sage"
                                                  : "w-2 bg-moss/15"
                                        }`}
                                    />
                                ))}
                            </div>
                        )}
                        {content}
                    </div>
                </Reveal>

                <p className="mt-5 flex items-center justify-center gap-2 text-sm text-moss/60 text-center">
                    <Lock className="w-4 h-4 shrink-0" />
                    Your words never leave this device. No database, no
                    cookies, no analytics — they clear when the flow ends.
                </p>
            </div>
        </section>
    );
}
