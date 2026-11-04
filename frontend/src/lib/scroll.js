import Lenis from "lenis";

let lenis = null;
let looping = false;

function loop(t) {
    if (lenis) lenis.raf(t);
    requestAnimationFrame(loop);
}

export function startLenis() {
    if (lenis) return;
    lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    if (!looping) {
        looping = true;
        requestAnimationFrame(loop);
    }
}

export function stopLenis() {
    if (lenis) {
        lenis.destroy();
        lenis = null;
    }
}

export function scrollToSection(id) {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) {
        lenis.scrollTo(el, { offset: -88, duration: 1.2 });
    } else {
        el.scrollIntoView({ behavior: "auto", block: "start" });
    }
}
