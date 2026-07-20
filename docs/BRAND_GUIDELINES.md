**Axel brand system**

*Calm, clarity and silence — in the middle of the noise.*

Visual and voice reference for product, design, and engineering. For prototype implementation see [PROTOTYPE_ARCHITECTURE.md](./PROTOTYPE_ARCHITECTURE.md). Theme tokens live in `[src/theme/brand.ts](../src/theme/brand.ts)`.

**Design assets**


| File                                                                | Use                                                                                                                                                                                       |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [axel_ui_mockup.png and axel_ui_mockup_1.png](./axel_ui_mockup.png) | Screen layouts, 4-tab bar, component style — **pending update to thread-unknots illustration system, see below**                                                                          |
| [background_moodboard.png](./background_moodboard.png)              | **Deprecated.** Mountain/landscape/sunrise/waveform-dissolving concepts read as meditation-app imagery, not ADHD support. Replace with the thread-unknots system before next design pass. |


---

**Mission**

Axel exists to reduce the cognitive noise that prevents people with ADHD from moving forward.

It is not a productivity app. It is not therapy. It is not another task manager. And it is not a meditation app — Axel doesn't ask anyone to slow down, breathe, or sit with their thoughts. It helps people act on them.

Axel is a sorting tool for an overloaded mind — it takes everything tangled up in someone's head and hands back one clear thread to pull.

---

**Brand promise**

When everything feels loud, Axel is the thing that sorts it — not the thing that asks you to quiet down.

Users should leave every interaction feeling clearer, understood, capable, less alone, and ready to take one small step.

Never pressured. Never guilty. Never judged. Never told to relax.

---

**Brand personality**

Quietly intelligent. Emotionally mature. Patient. Grounded. Trustworthy. Reassuring. Optimistic without pretending everything is okay.

Axel should feel like: *"I've got this with you."*

Not: *"Come on! You can do it!"*
Not: *"Let's take a deep breath together."*

---

**Brand values**

Calm — every interaction should reduce mental load, never increase it. Calm is an outcome of sorting, not a mood we perform with soft visuals.

Clarity — complex thoughts become one clear next step, never another overwhelming list.

Compassion — the user is never blamed; the interface assumes the brain is trying its best.

Science — advice is grounded in evidence; no pseudoscience, no toxic positivity.

Privacy — thoughts belong to the user; never sold, never exploited.

Simplicity — less, always less.

---

**Emotional goal**

After 30 days a user should genuinely believe: *"I'm not broken. My brain works differently. And I am capable."*

That belief is the product. Everything else is the mechanism.

---

**Design philosophy**

Quiet. Minimal. Warm. Premium. Human.

Not clinical. Not playful. Not corporate. **Not a wellness app** — no breathing circles, no mountains, no soft-focus nature scenes. Those belong to a different category of product (anxiety and meditation apps) with a different job (slowing the user down). Axel's job is to sort the noise and point at one next step, which is an active, not a soothing, act.

Every screen should answer: *Does this make the user's mind quieter, and does it help them move?* If either answer is no, remove something.

---

**Illustration system — "thread unknots"**

Replaces the retired mountain/landscape/sunrise/waveform-dissolving concepts.

The core visual metaphor: a tangled line straightens into one clean path. It represents what Axel actually does — takes everything someone is holding and resolves it into one thing to act on. It is not a metaphor for relaxing; it's a metaphor for untangling and moving.

Guidelines:

- The "tangle" portion (left side, muted gray `#8A938E` at ~55% opacity) represents the noise — everything currently in the user's head. The "resolved" portion (right side, solid Forest Sage `#4F6F62`) represents the one clear thing Axel has surfaced.
- A tool further along in someone's process (e.g. Preparation, which builds understanding over time) can show a shorter, more-resolved tangle than a tool used at the start of a spiral (e.g. Reframe or Ground).
- Soft Ochre (`#C9A86A`) is reserved for a single moving accent — e.g. a dot travelling along the resolved line — never for a decorative sun, moon, or static circle. Ochre should always be doing something, not just sitting somewhere.
- No hills, horizon lines, mist, mountains, or paper-cut landscape layers, in any mood or color variant, light or dark mode.
- No literal soundwave-to-silence imagery — it reads as a meditation app's ambient-audio visual, not as sorting.
- Loading and listening states should describe active processing ("Listening. Straightening this out as you go.") rather than ambient stillness ("The noise softens. The waveform settles into stillness.").

---

**Colour palette**


| Role           | Name        | HEX       | Use                                                                                           |
| -------------- | ----------- | --------- | --------------------------------------------------------------------------------------------- |
| Primary        | Forest Sage | `#4F6F62` | Buttons, links, highlights, the "resolved" thread                                             |
| Primary dark   | Deep Forest | `#3C554B` | Hover, pressed, navigation selected                                                           |
| Background     | Warm Linen  | `#F6F3EE` | App background — never pure white                                                             |
| Surface        | White       | `#FFFFFF` | Cards, sheets, dialogs, inputs                                                                |
| Accent         | Soft Ochre  | `#C9A86A` | Motion accents and small positive emphasis only — never decorative/static (no suns, no moons) |
| Success        | Sage        | `#6F9B83` | Success states                                                                                |
| Warning        | Clay        | `#C98A52` | Warnings                                                                                      |
| Error          | Terracotta  | `#B86452` | Errors — informative, never alarming                                                          |
| Text primary   | —           | `#23312D` | Body copy                                                                                     |
| Text secondary | —           | `#5F6B67` | Supporting copy                                                                               |
| Text muted     | —           | `#8A938E` | Captions, hints, and the "tangle" portion of illustrations                                    |
| Border         | —           | `#E7E3DC` | Dividers, outlines                                                                            |
| Disabled       | —           | `#B8C0BC` | Disabled controls                                                                             |


The palette itself was never the problem — it only read as a wellness app when paired with nature/breath imagery. Paired with the thread-unknots system, the same colors should read as warm and premium, not spa-like.

---

**Typography**

Primary typeface: **Inter** (body, UI). Logo wordmark: **Lora** serif ("Axel."). Alternatives: Manrope, Atkinson Hyperlegible Next.


| Scale   | Size (px)    | Use                 |
| ------- | ------------ | ------------------- |
| Display | 40           | Hero focus text     |
| Heading | 32           | Screen titles       |
| Section | 24           | Section headers     |
| Body    | 17           | Default reading     |
| Caption | 15           | Secondary, metadata |
| Button  | 16 semi-bold | Actions             |


Avoid tiny fonts. Users experiencing overwhelm should never struggle to read.

Note: the italic serif wordmark is fine on its own, but avoid extending italic serif to other UI moments (quote cards, callouts) — combined with soft color and rounded cards, italic serif reads as a wellness-app signature. Keep serif to the logo only; everything else stays in Inter.

---

**Shape and elevation**


| Element | Radius              |
| ------- | ------------------- |
| Cards   | 20px                |
| Buttons | Pill (full capsule) |
| Inputs  | 16px                |
| Dialogs | 24px                |


Prefer borders over shadows. If shadows are used: extremely soft, low opacity, large blur. Nothing should visually compete for attention.

---

**Motion**

Motion should reduce friction and visual noise — quick to settle, nothing to wait on. Prefer fade, gentle slide, subtle scale (150–250ms).

Avoid bouncing, spring effects, and flashy transitions. Also avoid motion that mimics breathing (slow expand/contract loops) — it borrows a meditation-app cue that isn't Axel's job. Motion here should feel like something resolving, not something calming a nervous system.

Honour `prefers-reduced-motion`.

---

**Icons and layout**

Rounded outline icons. Consistent stroke. Simple, readable. No decorative icons.

Icon subject matter should imply direction and resolution — a thread, a single line, a checkmark — not nature or organic growth. Avoid leaves, sprouts, sun/moon shapes, water, or other plant/nature iconography; these carry wellness-app connotations regardless of color.

**Navigation:** four bottom tabs only — Home, Tools, Library, Profile. Tool flows (Ground, Reframe, Preparation) use a back arrow to Tools, not an extra tab.

Whitespace is a feature. Large spacing over dense layouts. One primary action per screen. Reduce decisions, visual competition, and noise.

---

**Crisis support placement**

SADAG (or any crisis line) should remain available at all times, but not displayed as a persistent banner across every screen. A permanent crisis banner on every screen frames Axel as a mental-health-crisis app by default, which contradicts "not clinical" and can make a user feel assumed-to-be-in-danger rather than supported.

Placement: Settings/Profile, and any help or footer area, always reachable in one tap. Surface it more prominently and contextually only if in-product signals (e.g. brain-dump content) suggest someone may be in crisis.

---

**Voice**

We are: calm, warm, honest, supportive, evidence-based, plain language.

We are not: cheerleaders, corporate, clinical, patronising, overly emotional, productivity obsessed, or soothing in the way a meditation app is soothing.


| Instead of                 | Write                                         |
| -------------------------- | --------------------------------------------- |
| "You failed to…"           | "Let's try another way."                      |
| "Complete all your tasks." | "Let's find the one thing that matters most." |
| "You're behind."           | "You're here now."                            |
| "Boost productivity."      | "Reduce the noise."                           |
| "Take a deep breath."      | "Name it, park it, move on."                  |
| "Let's find your calm."    | "Let's sort what's here."                     |


---

**Core product principles**

1. Capture the noise.
2. Sort it into one clear thread.
3. Help users understand themselves.
4. Provide support during overwhelm — support that acts, not support that soothes.

Everything else is secondary. See [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md).

---

**Things Axel never does**

Diagnoses. Shames users. Gamifies mental health. Pushes streaks. Sends guilt notifications. Sells personal data. Pretends to diagnose ADHD. Promises unrealistic transformation. Asks the user to meditate, breathe, or "just relax."

---

**Accessibility**

High colour contrast. Readable typography. Large touch targets. Keyboard accessible. Screen reader friendly. Reduced motion support. Dark mode planned for a later phase; prototype uses light mode (Warm Linen) as default.

---

**Taglines**

Primary: *Calm, clarity and silence — in the middle of the noise.*

Alternatives: Find your next step. From overwhelm to action. One thing at a time. Hold the noise. Find the next step. Everything you're holding, sorted to one thing.

Retired: "Your calm operating system" — "calm operating system" was doing outsized work reinforcing the wellness-app framing; drop it from rotation.

---

**Internal reminder**

Axel is not trying to make people work harder. Axel is helping people work the way their brain already wants to. We are building a place where people finally feel understood — by sorting the noise for them, not by asking them to sit quietly with it.