import { useState } from "react";
import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { EMAIL, GITHUB_URL, GMAIL_URL, LINKEDIN_URL } from "@/lib/links";
import { useMotion } from "@/context/MotionContext";
import Reveal from "@/components/Reveal";

const BARS = [
    10, 18, 26, 34, 22, 14, 30, 38, 20, 12, 28, 36, 24, 16, 32, 26, 18, 34, 22,
    12, 28, 20, 14, 24,
];

export default function Contact() {
    const { reduced } = useMotion();
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <section id="contact" className="scroll-mt-24 py-16 sm:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-sage/15 border border-moss/10">
                    <div
                        aria-hidden="true"
                        className={`absolute -top-12 -left-12 w-72 h-72 rounded-full bg-sage/40 blur-2xl ${reduced ? "" : "animate-[drift-a_24s_ease-in-out_infinite]"}`}
                    />
                    <div
                        aria-hidden="true"
                        className={`absolute -bottom-16 -right-10 w-80 h-80 rounded-full bg-clay/35 blur-2xl ${reduced ? "" : "animate-[drift-b_28s_ease-in-out_infinite]"}`}
                    />

                    <div className="relative z-10 px-6 py-14 sm:px-14 sm:py-20 text-center">
                        <div
                            aria-hidden="true"
                            data-testid="wave-bars"
                            className="flex justify-center items-end gap-[3px] h-10 mb-8"
                        >
                            {BARS.map((h, i) => (
                                <span
                                    key={i}
                                    className={`w-[3px] rounded-full bg-sage-dark ${reduced ? "" : "wave-bar"}`}
                                    style={{
                                        height: `${h}px`,
                                        animationDelay: `${(i % 7) * 0.12}s`,
                                        animationDuration: `${1 + (i % 5) * 0.14}s`,
                                    }}
                                />
                            ))}
                        </div>

                        <Reveal>
                            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-snug text-moss">
                                Let's <em className="italic text-clay">talk</em>
                                , like humans
                            </h2>
                            <p className="mt-4 text-base sm:text-lg text-moss/75 leading-relaxed max-w-lg mx-auto">
                                No form to fill. Just say hello the way you
                                would say it out loud.
                            </p>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                                <a
                                    data-testid="contact-email-button"
                                    href={GMAIL_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="min-h-[52px] px-7 py-3.5 rounded-full bg-moss text-cream font-bold flex items-center gap-2.5 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                                >
                                    <Mail className="w-5 h-5" />
                                    Email me
                                </a>
                                <button
                                    data-testid="copy-email-button"
                                    onClick={copyEmail}
                                    className={`min-h-[52px] px-6 py-3.5 rounded-full border-2 font-bold flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 ${
                                        copied
                                            ? "bg-sage border-sage text-moss"
                                            : "border-moss/30 text-moss hover:border-moss/60"
                                    }`}
                                >
                                    {copied ? (
                                        <Check className="w-4 h-4" />
                                    ) : (
                                        <Copy className="w-4 h-4" />
                                    )}
                                    {copied ? "Copied" : "Copy email address"}
                                </button>
                            </div>
                            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                                <a
                                    data-testid="contact-linkedin-button"
                                    href={LINKEDIN_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="min-h-[52px] px-7 py-3.5 rounded-full border-2 border-moss/30 text-moss font-bold flex items-center gap-2.5 hover:-translate-y-0.5 hover:border-moss/60 hover:shadow-md transition-all duration-300"
                                >
                                    <Linkedin className="w-5 h-5" />
                                    Find me on LinkedIn
                                </a>
                                <a
                                    data-testid="contact-github-button"
                                    href={GITHUB_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="min-h-[52px] px-7 py-3.5 rounded-full border-2 border-moss/30 text-moss font-bold flex items-center gap-2.5 hover:-translate-y-0.5 hover:border-moss/60 hover:shadow-md transition-all duration-300"
                                >
                                    <Github className="w-5 h-5" />
                                    GitHub
                                </a>
                            </div>
                        </Reveal>

                        <Reveal delay={0.15}>
                            <p className="mt-12 font-serif italic text-xl sm:text-2xl text-moss/85">
                                Today is a fresh page.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
