import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useMotion } from "@/context/MotionContext";
import Reveal from "@/components/Reveal";

export default function SeeItInAction() {
    const { reduced } = useMotion();
    const videoRef = useRef(null);
    const [sound, setSound] = useState(false);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        if (!reduced && videoRef.current) videoRef.current.muted = true;
    }, [reduced]);

    const enableSound = () => {
        const v = videoRef.current;
        if (!v) return;
        v.muted = false;
        v.volume = 1;
        setSound(true);
    };

    const toggleMute = () => {
        const v = videoRef.current;
        if (!v) return;
        v.muted = !v.muted;
        setSound(!v.muted);
    };

    const togglePlay = () => {
        const v = videoRef.current;
        if (!v) return;
        if (v.paused) v.play();
        else v.pause();
    };

    const startWithSound = () => {
        const v = videoRef.current;
        if (!v) return;
        v.muted = false;
        v.volume = 1;
        setSound(true);
        v.play();
    };

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
                        data-testid="demo-video-frame"
                        className="relative mt-10 rounded-3xl border-2 border-sage bg-sage/10 overflow-hidden"
                    >
                        <video
                            ref={videoRef}
                            data-testid="demo-video"
                            src="/demo-video.mp4"
                            poster="/demo-poster.jpg"
                            className="block w-full aspect-video object-cover"
                            playsInline
                            preload="metadata"
                            {...(reduced
                                ? {}
                                : { autoPlay: true, muted: true, loop: true })}
                            onPlay={() => setPlaying(true)}
                            onPause={() => setPlaying(false)}
                        />

                        {reduced && !playing && (
                            <button
                                data-testid="demo-play-button"
                                onClick={startWithSound}
                                className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-moss/25"
                            >
                                <span className="w-16 h-16 rounded-full bg-cream shadow-md flex items-center justify-center">
                                    <Play className="w-6 h-6 text-moss ml-1" />
                                </span>
                                <span className="rounded-full bg-cream/95 border border-moss/15 px-4 py-2 text-sm font-bold text-moss">
                                    Play with sound
                                </span>
                            </button>
                        )}

                        {!reduced && !sound && (
                            <button
                                data-testid="tap-for-sound-pill"
                                onClick={enableSound}
                                className="absolute bottom-4 left-1/2 -translate-x-1/2 min-h-[44px] px-4 rounded-full bg-cream/95 border border-moss/15 text-sm font-bold text-moss flex items-center gap-2 shadow-sm hover:-translate-y-0.5 transition-all duration-200"
                            >
                                <VolumeX className="w-4 h-4" />
                                Tap for sound
                            </button>
                        )}

                        {(sound || reduced) && (
                            <button
                                data-testid="demo-sound-toggle"
                                onClick={toggleMute}
                                aria-label={sound ? "Mute" : "Unmute"}
                                className="absolute top-3 left-3 w-11 h-11 rounded-full bg-cream/90 border border-moss/15 text-moss flex items-center justify-center shadow-sm hover:bg-cream transition-colors duration-200"
                            >
                                {sound ? (
                                    <Volume2 className="w-5 h-5" />
                                ) : (
                                    <VolumeX className="w-5 h-5" />
                                )}
                            </button>
                        )}

                        {(playing || reduced) && (
                            <button
                                data-testid="demo-play-pause-button"
                                onClick={togglePlay}
                                aria-label={playing ? "Pause" : "Play"}
                                className="absolute top-3 right-3 w-11 h-11 rounded-full bg-cream/90 border border-moss/15 text-moss flex items-center justify-center shadow-sm hover:bg-cream transition-colors duration-200"
                            >
                                {playing ? (
                                    <Pause className="w-5 h-5" />
                                ) : (
                                    <Play className="w-5 h-5 ml-0.5" />
                                )}
                            </button>
                        )}
                    </div>
                    <p className="mt-4 text-center font-serif italic text-moss/70">
                        me, speaking it out loud. Sound on — that's the whole
                        point.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
