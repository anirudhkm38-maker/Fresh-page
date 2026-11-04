# Fresh Page — PRD

## Original problem statement
Build a calm single-page mobile-first website for Anirudh, an engineer from Bangalore. It is both a personal portfolio and a small working tool called Fresh Page: a 3-minute daily reset for people stressed by work. Quiet, peaceful, with a little humor. No dashboard, no feeds, no streaks, no login, no backend. Strict privacy rule: store nothing — no database, no localStorage, no cookies, no analytics on user input.

## User choices (confirmed)
- Clay color: #D9A88F (user confirmed)
- Evening greeting: "Winding down? Let's close the day." (user confirmed)
- Obvious transcription typos fixed; all facts kept as given
- Typefaces: Fraunces (soft serif headings) + Karla (humanist sans body) — classic bookish, agent-picked

## Design system
- Palette: cream #FAF6EF (bg), sage #A8BFA3, deep moss #3F5A4A (text/accents), clay #D9A88F (one italic-serif highlighted word per main heading)
- Rounded corners, large type, short lines, 48px+ tap targets, generous whitespace
- Framer Motion scroll reveals (once, amount 0.15), lenis smooth scrolling, masked line-by-line hero reveal, subtle hero parallax, slow editorial marquee
- Reduced-motion toggle in navbar: stops all looping motion (breathing, marquee, wave bars, drifting circles, count-ups), replaces animation with simple fades, jumps scroll instantly (destroys lenis). Memory-only, honors prefers-reduced-motion as default.

## Architecture
Pure static frontend (React/CRA + Tailwind + framer-motion + lenis). No backend calls, no storage of any kind. All reset-tool text lives in React state and is cleared when the flow ends.
- src/context/MotionContext.jsx — reduced-motion provider
- src/lib/scroll.js — lenis singleton + section navigation
- src/lib/links.js — email/LinkedIn/GitHub URLs
- Components: Navbar (sticky, scroll-spy, mobile dropdown, motion toggle), Hero (breathing circle, time greeting, masked reveal, lockup), Marquee, Story, Reset (7-step tool), SeeItInAction, VoiceHelp, Timeline (count-up stats, 6-chapter alternating timeline, clay-tinted pause card, 12 wins grid), NextIdeas, HowBuilt, Contact (drifting circles, wave bars, copy-email), Footer. Original SVG favicon (two overlapping circles).

## User personas
- Stressed fresher/corporate employee who wants a private 3-minute reset
- Recruiter/connection visiting Anirudh's portfolio and reaching out

## Core requirements (static)
1. Sticky navbar with scroll-spy, mobile dropdown, LinkedIn + email icons, reduced-motion toggle
2. Hero: 8s breathing circle, time-based greeting, headline with clay italic, reset CTA, lockup
3. 7-step reset tool: chips → 4s breath → release (dictation-friendly textarea + 3s particle dissolve) → in-my-hands → 6 original affirmations → body nudge → closing, memory-only
4. Story strip, video placeholder, 3 voice-help cards, timeline + 12 wins, 3 next ideas, how-built with large lockup, lively contact with copy-email, footer with care line

## Implemented (2026 build session)
All of the above — complete and verified (desktop + mobile screenshots, full reset flow exercised, reduced-motion toggle verified, scroll-spy fix verified).

## Backlog
- P1: Replace video placeholder with real 30–60s screen recording
- P2: Managers version of the reset (the last remaining "idea, not built yet" card)

## Added (second build session)
- Sunday Night Reset and First Week at the New Job variants of the tool — variant tabs inside The reset card (daily / Sunday night / first week), each with its own chips, prompts, hands columns, 6 original affirmations, nudge and closing line; switching variants mid-flow clears everything (privacy)
- NextIdeas section updated: only the managers version remains tagged "idea, not built yet"
- Social share card: public/og-image.jpg (1200x630, cream/sage/clay brand art) + Open Graph and Twitter meta tags in index.html

## Added (fourth build session)
- "See it in action" now plays Anirudh's real screen recording (public/demo-video.mp4, 2.3 MB voiced take, 1:44 — compressed from 117 MB, 1280w H.264 + 96k AAC, faststart; audio cleaned: high-pass 90 Hz, FFT denoise, loudness normalized to −16 LUFS, peak −2.2 dB; poster public/demo-poster.jpg)
- Playback: muted autoplay + loop like a demo reel, "Tap for sound" pill unmutes the voice, sound toggle + pause control available; new caption "me, speaking it out loud. Sound on — that's the whole point."
- Reduced motion: video never autoplays or loops — first-frame poster with a "Play with sound" overlay; plays with sound only when pressed

## Ready for Deploy
No database, nothing to migrate — a Deploy press ships the site (four flavors, share card, real demo video) to the live domain.

## Added (third build session)
- Repeatable reset: flavor tabs now visible on every step including the closing screen; picking a flavor at any point clears memory and restarts that flavor; closing screen adds "Run it again anytime" line; single-use copy softened in The reset subtitle and How I Built This
- Fourth flavor "For managers": manager-day chips (avoided 1:1, team on fumes, hard feedback, pressure from above, a hire that isn't working), release prompt for the weight of being the one people lean on, hands columns (what's mine to hold / what belongs to the team or the company), six original calm-leadership affirmations, own nudge and closing line
- Ready for Deploy: no database, nothing to migrate — deploying ships the site (flavors + share card) to the live domain
