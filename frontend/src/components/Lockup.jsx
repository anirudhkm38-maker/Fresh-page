export default function Lockup({ size = "sm", dark = false }) {
    const dims = {
        sm: {
            circle: "w-10 h-10 text-[8px]",
            overlap: "-ml-3",
            quote:
                "text-[7px] px-1.5 py-px -top-1 left-1/2 -translate-x-1/2 whitespace-nowrap",
            side: "text-xs",
        },
        md: {
            circle: "w-16 h-16 text-[10px]",
            overlap: "-ml-5",
            quote:
                "text-[10px] px-2.5 py-1 -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap",
            side: "text-lg",
        },
        lg: {
            circle: "w-24 h-24 sm:w-28 sm:h-28 text-xs sm:text-sm",
            overlap: "-ml-8 sm:-ml-9",
            quote:
                "text-xs sm:text-sm px-3 py-1.5 -top-3 sm:-top-4 left-1/2 -translate-x-1/2 whitespace-nowrap",
            side: "text-2xl sm:text-3xl",
        },
    }[size];

    return (
        <div className="flex items-center gap-3 sm:gap-5" data-testid="collab-lockup">
            <div className="relative flex items-center pt-3">
                <div
                    className={`${dims.circle} rounded-full bg-sage text-moss font-sans font-bold flex items-center justify-center text-center leading-tight px-1 shadow-sm`}
                >
                    Wispr Flow
                </div>
                <div
                    className={`${dims.circle} ${dims.overlap} rounded-full bg-clay text-moss font-sans font-bold flex items-center justify-center text-center leading-tight px-1 shadow-sm`}
                >
                    Fresh Page
                </div>
                <span
                    className={`absolute ${dims.quote} rounded-full bg-cream border border-moss/15 font-serif italic text-moss`}
                >
                    Speak it, let it go.
                </span>
            </div>
            <span
                className={`font-serif ${dims.side} ${dark ? "text-cream" : "text-moss"}`}
            >
                Wispr Flow <span className={dark ? "text-clay" : "text-clay"}>x</span>{" "}
                Fresh Page
            </span>
        </div>
    );
}
