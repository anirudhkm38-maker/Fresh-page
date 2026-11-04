import Lockup from "@/components/Lockup";

export default function Footer() {
    return (
        <footer className="mt-10 bg-moss text-cream rounded-t-[2.5rem]">
            <div className="max-w-5xl mx-auto px-6 py-12 sm:py-16 flex flex-col items-center text-center gap-6">
                <Lockup size="md" dark />
                <p className="text-base text-cream/85 max-w-md leading-relaxed">
                    Fresh Page: my idea for a calm start-the-day, built with
                    Wispr Flow.
                </p>
                <p className="text-sm text-cream/60 max-w-md leading-relaxed">
                    If things feel heavier than a reset can hold, please talk
                    to someone you trust or a mental health professional.
                </p>
            </div>
        </footer>
    );
}
