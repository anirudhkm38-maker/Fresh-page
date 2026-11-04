import { useEffect, useState } from "react";
import { Linkedin, Mail, Menu, Waves, X } from "lucide-react";
import { useMotion } from "@/context/MotionContext";
import { scrollToSection } from "@/lib/scroll";
import { GMAIL_URL, LINKEDIN_URL } from "@/lib/links";

const LINKS = [
    { id: "story", label: "Story" },
    { id: "reset", label: "Reset" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
];

export default function Navbar() {
    const [active, setActive] = useState("");
    const [open, setOpen] = useState(false);
    const { reduced, toggle } = useMotion();

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => {
                    if (e.isIntersecting)
                        setActive(e.target.id === "home" ? "" : e.target.id);
                }),
            { rootMargin: "-35% 0px -60% 0px" }
        );
        ["home", ...LINKS.map(({ id }) => id)].forEach((id) => {
            const el = document.getElementById(id);
            if (el) obs.observe(el);
        });
        return () => obs.disconnect();
    }, []);

    const go = (id) => {
        setOpen(false);
        scrollToSection(id);
    };

    return (
        <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-moss/15">
            <nav className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
                <button
                    data-testid="brand-button"
                    onClick={() => go("home")}
                    className="font-serif text-xl sm:text-2xl font-medium text-moss shrink-0"
                >
                    Fresh Page
                </button>

                <div className="hidden md:flex items-center gap-7">
                    {LINKS.map((l) => (
                        <button
                            key={l.id}
                            data-testid={`nav-link-${l.id}`}
                            onClick={() => go(l.id)}
                            className={`text-sm font-bold transition-colors duration-200 ${
                                active === l.id
                                    ? "text-moss underline decoration-sage decoration-2 underline-offset-8"
                                    : "text-moss/55 hover:text-moss"
                            }`}
                        >
                            {l.label}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2">
                    <button
                        data-testid="reduced-motion-toggle"
                        onClick={toggle}
                        aria-pressed={reduced}
                        title={
                            reduced
                                ? "Reduced motion is on — turn it off"
                                : "Turn on reduced motion"
                        }
                        className={`flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-bold transition-colors duration-200 ${
                            reduced
                                ? "bg-moss text-cream border-moss"
                                : "border-moss/25 text-moss/70 hover:border-moss/50 hover:text-moss"
                        }`}
                    >
                        <Waves className="w-4 h-4" />
                        <span className="hidden sm:inline">
                            {reduced ? "Motion off" : "Motion on"}
                        </span>
                    </button>
                    <a
                        data-testid="nav-linkedin"
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Anirudh on LinkedIn"
                        className="p-2.5 rounded-full text-moss/70 hover:text-moss hover:bg-sage/25 transition-colors duration-200"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        data-testid="nav-email"
                        href={GMAIL_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Email Anirudh"
                        className="p-2.5 rounded-full text-moss/70 hover:text-moss hover:bg-sage/25 transition-colors duration-200"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                    <button
                        data-testid="nav-menu-button"
                        onClick={() => setOpen((o) => !o)}
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        className="md:hidden p-2.5 rounded-full text-moss hover:bg-sage/25 transition-colors duration-200"
                    >
                        {open ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </nav>

            {open && (
                <div
                    data-testid="mobile-menu"
                    className="md:hidden border-t border-moss/10 bg-cream/95 backdrop-blur-md"
                >
                    {LINKS.map((l) => (
                        <button
                            key={l.id}
                            data-testid={`mobile-nav-link-${l.id}`}
                            onClick={() => go(l.id)}
                            className="block w-full text-left px-6 py-4 font-serif text-xl text-moss border-b border-moss/5 last:border-0"
                        >
                            {l.label}
                        </button>
                    ))}
                </div>
            )}
        </header>
    );
}
