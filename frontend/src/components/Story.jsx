import Reveal from "@/components/Reveal";

export default function Story() {
    return (
        <section id="story" className="scroll-mt-24 py-16 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <Reveal>
                    <p className="text-xs uppercase tracking-widest font-bold text-moss/60">
                        Story
                    </p>
                    <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-snug text-moss">
                        Why I <em className="italic text-clay">built</em> this
                    </h2>
                </Reveal>

                <Reveal delay={0.1}>
                    <blockquote className="mt-10 relative">
                        <span className="absolute -top-6 -left-1 sm:-left-4 font-serif text-7xl sm:text-8xl text-clay/60 select-none">
                            &ldquo;
                        </span>
                        <p className="relative font-serif text-2xl sm:text-3xl lg:text-4xl leading-snug text-moss">
                            It can feel like you're asking for sympathy when
                            you have never asked for it before.
                        </p>
                    </blockquote>
                </Reveal>

                <div className="mt-12 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <Reveal delay={0.15}>
                        <p className="text-base sm:text-lg text-moss/85 leading-relaxed">
                            As a fresher in corporate life I had no place to
                            simply say what I was feeling. Speaking my thoughts
                            out loud with Wispr Flow helped — so I built Fresh
                            Page, a private place to speak it out, let it go,
                            and begin again tomorrow.
                        </p>
                    </Reveal>
                    <Reveal delay={0.25}>
                        <img
                            src="https://images.unsplash.com/photo-1659834742686-4becf04e8976?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHw0fHxwZWFjZWZ1bCUyMG5hdHVyZSUyMGdyZWVuJTIwc2FnZSUyMG9yZ2FuaWMlMjBsZWF2ZXN8ZW58MHx8fHwxNzkzNzk0NDQwfDA&ixlib=rb-4.1.0&q=85"
                            alt="Peaceful sage leaves"
                            loading="lazy"
                            className="w-full h-56 sm:h-72 object-cover rounded-3xl"
                            data-testid="story-image"
                        />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
