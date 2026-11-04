import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
    Bike,
    BookOpen,
    Building2,
    CalendarCheck,
    Flower2,
    GraduationCap,
    HeartHandshake,
    Home,
    Leaf,
    Map,
    Network,
    Package,
    Pause,
    Sprout,
    Star,
    Store,
    Users,
    Youtube,
    Award,
    Briefcase,
} from "lucide-react";
import { useMotion } from "@/context/MotionContext";
import Reveal from "@/components/Reveal";

function CountUp({ to }) {
    const { reduced } = useMotion();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.6 });
    const [val, setVal] = useState(0);

    useEffect(() => {
        if (!inView) return;
        if (reduced) {
            setVal(to);
            return;
        }
        let raf;
        const t0 = performance.now();
        const dur = 1400;
        const tick = (t) => {
            const p = Math.min(1, (t - t0) / dur);
            setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, to, reduced]);

    return (
        <span ref={ref} data-testid={`count-up-${to}`}>
            {val}
        </span>
    );
}

const CHAPTERS = [
    {
        icon: Store,
        label: "Childhood",
        title: "Behind the Counter",
        text: "I grew up in my family's food and condiment store in Bangalore — tracking stock, listing what to reorder, cleaning the shop, talking to customers, and settling payments. I also led things whenever a family event came around.",
        lesson: "What it taught me: responsibility and working with all kinds of people.",
        tint: false,
    },
    {
        icon: GraduationCap,
        label: "2022",
        title: "Following my curiosity",
        text: "I was always curious how technology works and how fast it grows. That took me into information science at Visvesvaraya Technological University, which I graduated from in 2022.",
        lesson: "What it taught me: curiosity is a good compass.",
        tint: false,
    },
    {
        icon: Building2,
        label: "Training",
        title: "Building with the team",
        text: "At Tata Consultancy Services, my training team built a product that placed among the top 10 teams out of 350 participants — and it was taken forward as a pilot.",
        lesson: "What it taught me: good ideas get better with a team behind them.",
        tint: false,
    },
    {
        icon: Network,
        label: "2 years 10 months",
        title: "Copper to optical fiber",
        text: "As a planner on a telecom project transitioning a network from copper to optical fiber, I became a top performer and moved into a client-facing role, where I was trusted to turn requests into delivered solutions. I was also our CSR point of contact and led a financial trace session for the building's staff, security staff, and other employees.",
        lesson: "What it taught me: trust is earned by delivering, one request at a time.",
        tint: false,
    },
    {
        icon: Pause,
        label: "The year I paused",
        title: "Stepping back, then stepping out",
        text: "I wanted to pursue my master's in the USA, but plans changed because of a family emergency and a personal decision. I stepped down and chose to invest in myself. Some people would call it a gap. I call it the year I did homework on life. As a fresher, nobody had told me how corporate life works — its hierarchy and reporting. This year I explored my physical and mental health, calm, and learned to work calmly inside all of it. Scroll down for the full list.",
        lesson: "What it taught me: calm is a skill you can practice.",
        tint: true,
    },
    {
        icon: Sprout,
        label: "Now",
        title: "What I wish I had",
        text: "As a fresher, I had nowhere to simply say what I was feeling. Fresh Page is a private place to speak it out, take responsibility of what's in my hands, and let the rest go — and begin again tomorrow.",
        lesson: "Where I'm heading: building things that put people first.",
        tint: false,
    },
];

const WINS = [
    { icon: Flower2, title: "Yoga", caption: "Finished a beginner yoga course and kept showing up. A new kind of consistency, unlocked." },
    { icon: Home, title: "My space", caption: "Sorted out my space. Turns out your head clears when your room does." },
    { icon: HeartHandshake, title: "Parents", caption: "Improved things with my parents. Best upgrade of the year, no subscription needed." },
    { icon: Map, title: "Travel", caption: "Started traveling, exploring, and meeting new people. One of those passions I always wanted to try." },
    { icon: CalendarCheck, title: "Scheduling", caption: "Started planning my days and tracking them. Yes, I own a calendar and I use it." },
    { icon: Users, title: "New people", caption: "Started going out and talking to new people. Small talk: now a skill." },
    { icon: Youtube, title: "YouTube", caption: "Started a YouTube channel, then paused it. Cooking up better ideas to come back properly.", tag: "paused, not deleted" },
    { icon: Bike, title: "Delivery gig", caption: "Worked a delivery gig. Learned the city, and patience, one drop at a time." },
    { icon: Package, title: "Supply chain", caption: "Worked with an IT company on supply chain management. Same boxes, now with different dashboards." },
    { icon: Store, title: "Family business", caption: "Started supporting my father's business — back where it all started." },
    { icon: BookOpen, title: "Reading", caption: "Currently reading The Untethered Soul. Slowly learning the voice in my head isn't the boss of me." },
    { icon: Leaf, title: "Presence", caption: "Practicing being in the present. Still in progress, honestly." },
];

export default function Timeline() {
    return (
        <section id="about" className="scroll-mt-24 py-16 sm:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <Reveal>
                    <p className="text-xs uppercase tracking-widest font-bold text-moss/60">
                        About
                    </p>
                    <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-snug text-moss">
                        The road to{" "}
                        <em className="italic text-clay">Fresh Page</em>
                    </h2>
                </Reveal>

                <div className="mt-10 grid sm:grid-cols-3 gap-4 sm:gap-6">
                    {[
                        {
                            icon: Briefcase,
                            node: (
                                <>
                                    <CountUp to={2} /> years,{" "}
                                    <CountUp to={10} /> months
                                </>
                            ),
                            label: "at TCS",
                        },
                        {
                            icon: Award,
                            node: (
                                <>
                                    <CountUp to={10} />+
                                </>
                            ),
                            label: "on-the-spot awards",
                        },
                        {
                            icon: Star,
                            node: <CountUp to={2} />,
                            label: "Star of the Month Awards",
                        },
                    ].map((s, i) => (
                        <Reveal key={s.label} delay={0.08 * i} className="h-full">
                            <div
                                data-testid={`stat-card-${i}`}
                                className="h-full bg-white/70 border border-moss/10 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                            >
                                <s.icon className="w-5 h-5 text-clay" />
                                <p className="mt-3 font-serif text-3xl sm:text-4xl text-moss leading-tight">
                                    {s.node}
                                </p>
                                <p className="mt-2 text-sm text-moss/65">
                                    {s.label}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <div className="relative mt-16">
                    <div className="absolute left-5 md:left-1/2 top-2 bottom-2 border-l-2 border-dashed border-sage md:-translate-x-1/2" />
                    <div className="space-y-10 md:space-y-0 md:py-8">
                        {CHAPTERS.map((c, i) => (
                            <div
                                key={c.title}
                                className="relative md:flex md:items-center md:min-h-[200px] md:py-5 pl-14 md:pl-0"
                            >
                                <div
                                    data-testid={`timeline-node-${i}`}
                                    className={`absolute left-5 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-10 h-10 rounded-full bg-cream border-2 ${c.tint ? "border-clay" : "border-sage"} flex items-center justify-center shadow-sm z-10`}
                                >
                                    <c.icon className="w-4 h-4 text-moss" />
                                </div>
                                <Reveal
                                    className={`md:w-[calc(50%-3rem)] ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                                >
                                    <div
                                        data-testid={`timeline-card-${i}`}
                                        className={`rounded-3xl border p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${c.tint ? "bg-clay/20 border-clay/40" : "bg-white/70 border-moss/10"}`}
                                    >
                                        <p className="text-xs uppercase tracking-widest font-bold text-moss/60">
                                            {c.label}
                                        </p>
                                        <h3 className="mt-1.5 font-serif text-2xl text-moss">
                                            {c.title}
                                        </h3>
                                        <p className="mt-3 text-sm sm:text-base text-moss/80 leading-relaxed">
                                            {c.text}
                                        </p>
                                        <p className="mt-4 font-serif italic text-moss border-l-2 border-clay pl-3 text-sm sm:text-base leading-relaxed">
                                            {c.lesson}
                                        </p>
                                    </div>
                                </Reveal>
                            </div>
                        ))}
                    </div>
                </div>

                <Reveal className="mt-20">
                    <h2 className="font-serif text-3xl sm:text-4xl tracking-tight leading-snug text-moss">
                        Meanwhile, in my{" "}
                        <em className="italic text-clay">year off</em>,
                    </h2>
                    <p className="mt-3 text-base sm:text-lg text-moss/70">
                        No, I wasn't just staring at the ceiling. Here's the
                        full list.
                    </p>
                </Reveal>

                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
                    {WINS.map((w, i) => (
                        <Reveal key={w.title} delay={0.04 * (i % 3)} className="h-full">
                            <div
                                data-testid={`win-card-${i}`}
                                className="h-full bg-white/70 border border-moss/10 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-[0.98]"
                            >
                                <w.icon className="w-6 h-6 text-moss" />
                                <h4 className="mt-2.5 font-bold text-moss">
                                    {w.title}
                                </h4>
                                <p className="mt-1 text-xs sm:text-sm text-moss/70 leading-snug">
                                    {w.caption}
                                </p>
                                {w.tag && (
                                    <span className="inline-block mt-2.5 text-[10px] uppercase tracking-wider font-bold bg-clay/25 text-moss rounded-full px-2.5 py-1">
                                        {w.tag}
                                    </span>
                                )}
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal>
                    <p className="mt-12 text-center font-serif text-xl sm:text-2xl text-moss/85 max-w-xl mx-auto leading-snug">
                        None of this was on a resume. All of it is why Fresh
                        Page exists.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
