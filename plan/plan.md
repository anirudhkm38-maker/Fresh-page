# See It In Action — Your Real Demo Video

## What it is, in two lines
The dashed placeholder in "See it in action" is replaced with Anirudh's actual screen recording — speaking into the box, watching the words dissolve. The video plays the way a calm demo should: it starts moving on its own but stays silent until the viewer asks for sound.

## Who it's for
Visitors who want proof the tool works before typing their first word, and Anirudh, who shares the site link and needs the demo to play straight from his own domain — not from an upload link that could expire.

## Core features and experience
- **The real recording, in the real frame.** The uploaded 30–60 second recording replaces the placeholder inside the section's rounded, sage-bordered frame, with the section title "See it in action" unchanged. The video file is hosted with the site itself and compressed so it loads quickly on phones.
- **Playback (decided, since the brief said "you decide"):** the clip autoplays muted and loops gently, like a demo reel — captions of motion without noise. A small, calm "Tap for sound" pill sits on the video; tapping it unmutes the voice, which is the whole point of the demo. A pause control stays available.
- **Reduced motion honored.** With the reduced-motion toggle on, the video never autoplays and never loops: it shows its first frame with a clear play button, and only plays (with sound) when pressed. This follows the site's existing rule that reduced motion stops all looping motion.
- **New caption.** The old line "me, speaking it out and letting it go." is replaced (the owner asked for a change but left the wording open — this is the proposal, easy to swap): "me, speaking it out loud. Sound on — that's the whole point."

## Phase 1: what gets built now
1. Move the uploaded recording into the site's own public files and compress it to a phone-friendly size if needed.
2. Build the player into "See it in action": rounded frame, muted autoplay + loop, tap-to-unmute pill, pause control, the new caption underneath.
3. Wire the reduced-motion behavior: no autoplay, no loop, first-frame poster with a play button.
4. Verify on desktop and mobile screens — video plays, loops, unmutes, and respects the reduced-motion toggle — then hand off; any Deploy press afterwards is the owner's one-tap step.
