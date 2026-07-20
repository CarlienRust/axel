**Axel brand system**

*Calm, clarity and silence — in the middle of the noise.*

Visual and voice reference for product, design, and engineering. For prototype implementation see [PROTOTYPE_ARCHITECTURE.md](./PROTOTYPE_ARCHITECTURE.md). Theme tokens live in [`src/theme/brand.ts`](../src/theme/brand.ts).

**Design assets**


| File                                                                | Use                                         |
| ------------------------------------------------------------------- | ------------------------------------------- |
| [axel_ui_mockup.png and axel_ui_mockup_1.png](./axel_ui_mockup.png) | Screen layouts, 4-tab bar, component style  |
| [background_moodboard.png](./background_moodboard.png)              | App background splash variants (light mode) |


---

**Mission**

Axel exists to reduce the cognitive noise that prevents people with ADHD from moving forward.

It is not a productivity app. It is not therapy. It is not another task manager.

It is a calm operating system that helps people move from overwhelm to action — one step at a time.

---

**Brand promise**

When everything feels loud, Axel becomes the quietest place in your day.

Users should leave every interaction feeling calmer, understood, capable, less alone, and ready to take one small step.

Never pressured. Never guilty. Never judged.

---

**Brand personality**

Quietly intelligent. Emotionally mature. Patient. Grounded. Trustworthy. Reassuring. Optimistic without pretending everything is okay.

Axel should feel like: *"I've got this with you."*

Not: *"Come on! You can do it!"*

---

**Brand values**

Calm — every interaction should reduce mental load, never increase it.

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

Not clinical. Not playful. Not corporate.

Every screen should answer: *Does this make the user's mind quieter?* If not, remove something.

---

**Colour palette**


| Role           | Name        | HEX       | Use                                                     |
| -------------- | ----------- | --------- | ------------------------------------------------------- |
| Primary        | Forest Sage | `#4F6F62` | Buttons, links, highlights                              |
| Primary dark   | Deep Forest | `#3C554B` | Hover, pressed, navigation selected                     |
| Background     | Warm Linen  | `#F6F3EE` | App background — never pure white                       |
| Surface        | White       | `#FFFFFF` | Cards, sheets, dialogs, inputs                          |
| Accent         | Soft Ochre  | `#C9A86A` | Selected items, small positive emphasis — use sparingly |
| Success        | Sage        | `#6F9B83` | Success states                                          |
| Warning        | Clay        | `#C98A52` | Warnings                                                |
| Error          | Terracotta  | `#B86452` | Errors — informative, never alarming                    |
| Text primary   | —           | `#23312D` | Body copy                                               |
| Text secondary | —           | `#5F6B67` | Supporting copy                                         |
| Text muted     | —           | `#8A938E` | Captions, hints                                         |
| Border         | —           | `#E7E3DC` | Dividers, outlines                                      |
| Disabled       | —           | `#B8C0BC` | Disabled controls                                       |


---

**Typography**

Primary typeface: **Inter** (body, UI). Logo wordmark: **Lora** serif (“Axel.”). Alternatives: Manrope, Atkinson Hyperlegible Next.


| Scale   | Size (px)    | Use                 |
| ------- | ------------ | ------------------- |
| Display | 40           | Hero focus text     |
| Heading | 32           | Screen titles       |
| Section | 24           | Section headers     |
| Body    | 17           | Default reading     |
| Caption | 15           | Secondary, metadata |
| Button  | 16 semi-bold | Actions             |


Avoid tiny fonts. Users experiencing overwhelm should never struggle to read.

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

Motion should reduce anxiety — like breathing. Prefer fade, gentle slide, subtle scale (150–250ms).

Avoid bouncing, spring effects, and flashy transitions. Honour `prefers-reduced-motion`.

---

**Icons and layout**

Rounded outline icons. Consistent stroke. Simple, readable. No decorative icons.

**Navigation:** four bottom tabs only — Home, Tools, Library, Profile. Tool flows (Ground, Reframe, Preparation) use a back arrow to Tools, not an extra tab.

Whitespace is a feature. Large spacing over dense layouts. One primary action per screen. Reduce decisions, visual competition, and noise.

---

**Voice**

We are: calm, warm, honest, supportive, evidence-based, plain language.

We are not: cheerleaders, corporate, clinical, patronising, overly emotional, productivity obsessed.


| Instead of                 | Write                                         |
| -------------------------- | --------------------------------------------- |
| "You failed to…"           | "Let's try another way."                      |
| "Complete all your tasks." | "Let's find the one thing that matters most." |
| "You're behind."           | "You're here now."                            |
| "Boost productivity."      | "Reduce the noise."                           |


---

**Core product principles**

1. Capture the noise.
2. Create clarity.
3. Help users understand themselves.
4. Provide support during overwhelm.

Everything else is secondary. See [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md).

---

**Things Axel never does**

Diagnoses. Shames users. Gamifies mental health. Pushes streaks. Sends guilt notifications. Sells personal data. Pretends to diagnose ADHD. Promises unrealistic transformation.

---

**Accessibility**

High colour contrast. Readable typography. Large touch targets. Keyboard accessible. Screen reader friendly. Reduced motion support. Dark mode planned for a later phase; prototype uses light mode (Warm Linen) as default.

---

**Taglines**

Primary: *Calm, clarity and silence — in the middle of the noise.*

Alternatives: Find your next step. From overwhelm to action. Your calm operating system. One thing at a time. Hold the noise. Find the next step.

---

**Internal reminder**

Axel is not trying to make people work harder. Axel is helping people work the way their brain already wants to. We are building a place where people finally feel understood.