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
- P2: Sunday-night reset variant, first-week-at-job variant, managers version (the three "idea, not built yet" cards)
- P2: OG image for link sharing
