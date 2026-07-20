**The mental model: one product, three layers**

The app is not a suite of features — it's one coherent experience built around a single idea: helping someone understand their own mind, navigate a system that wasn't built for them, and find their way to real support. Everything is in service of that. Features that don't serve it get cut.

The three layers are: Understand, Navigate, and Act. They're sequential for a new user, but non-linear in daily use.

---

**Layer 1 — Understand**

This is the entry point and the most important layer, because without it, nothing else sticks. A person who doesn't have language for their own experience can't use tools designed for people who do.

What it contains:

A psychoeducation library — not articles, but short, conversational explanations of what ADHD actually is and isn't. Grounded in the clinical literature from question 1. Explains inattentive vs hyperactive-impulsive vs combined presentations, because many adults — especially women — go undiagnosed precisely because they don't present as the stereotypical hyperactive child. Explains executive dysfunction concretely: why starting a task feels physically impossible, why time blindness is real, why the emotional dysregulation is not a personality flaw.

An "explain it to someone else" generator. The user describes their situation in their own words, and the app helps them shape that into something a parent, teacher, partner, or employer can understand without medical jargon. This is one of the most underserved needs in the space and is not difficult to build well with an AI backbone.

A stigma-dismantling layer — not inspirational quotes, but real reframing. The divergent thinking and hyperfocus evidence from the research, presented honestly (including the nuance that these aren't universal superpowers). Stories from people in similar contexts.

---

**Layer 2 — Navigate**

This is the pre-diagnosis support layer, and it's the most legally sensitive. The architecture here is deliberate.

What it contains:

A structured experience journal — not a symptom checker, which would imply clinical validity, but a reflective journal with guided prompts. The prompts are drawn from the kinds of questions a psychologist or GP needs answered in an assessment: how long have these patterns been present? In which contexts? What's the impact on work, relationships, school, daily function? The user builds this over time at their own pace. It is explicitly their document, not a clinical output.

A "prepare for your appointment" tool. When a user is ready to seek professional support, this tool helps them organise their journal entries into a structured summary they can bring to a GP or mental health practitioner. It doesn't conclude anything. It helps them articulate. This is the core of the legal defensibility — the app is a preparation tool, not an assessment tool.

A resource directory for SA specifically. SADAG. The Goldilocks and the Bear Foundation, which already works on ADHD access in SA. University teaching hospitals that offer lower-cost psychiatric assessments. Public sector pathways with realistic descriptions of what to expect. This directory needs to be maintained and verified — it's not a one-time build.

Clear, prominent, repeated framing throughout this entire layer: "This app does not diagnose. It helps you understand and prepare. Only a qualified health professional can diagnose ADHD."

---

**Layer 3 — Act**

This is daily use. The tools a person reaches for when they're in the middle of a hard moment or trying to get something done.

What it contains:

The brain dump tool. The most important single feature in the whole product. When someone is paralysed by overwhelm — too many thoughts, can't start, can't choose — they open this and type or voice-record everything in their head. The AI sorts it, identifies what's urgent vs noise, and surfaces one single next step. Not a to-do list. One next step. This is grounded in research on ADHD and task initiation — the barrier is almost never capability, it's initiation. Reducing the decision to one thing breaks the paralysis.

Micro-session learning. Five to eight minutes maximum. A topic the user chooses or the app suggests based on what they're struggling with. Structured as short-burst, conversational, no walls of text. For both school-age users and adults. Not a full tutoring curriculum — that's a separate product — but a "help me understand this one thing right now" mode.

An emotional check-in that doesn't feel clinical. Not a mood tracker with graphs. A simple, low-friction moment at whatever frequency the user chooses. "How's the noise level today?" One to five. No streaks. No guilt for missing days. The data is only ever shown back to the user, never used against them, never monetised.

Grounding tools for dysregulation. Short, specific exercises drawn from evidence-based approaches — breathing, body scans, sensory anchoring. Not meditation apps with ambient music. Practical, fast, interruptible. For the moment when the emotional flood hits.

---

**Core technical architecture**

Platform: Progressive Web App first. Same reasoning as the maths app — WhatsApp-shareable link, no app store friction, works on basic Android. Native app as a later phase if retention data justifies it.

AI backbone: Claude via API (or equivalent) for the brain dump sorter, the "explain to others" generator, and the micro-session learning. All prompts engineered to stay within the information and reflection boundary — never inferring, never concluding clinically.

Data architecture: Everything personal stays on-device by default. Journal entries, check-ins, brain dumps — local storage, encrypted, synced to a Supabase backend only if the user explicitly opts in with full POPIA-compliant consent. The app works fully offline for all core features. No health data is processed server-side without explicit informed consent. No third-party data sharing of any kind.

Language: English and Afrikaans at launch, with isiZulu and isiXhosa as a near-term priority. Audio narration for all key content — literacy levels and reading difficulties (which co-occur with ADHD frequently) make text-only a barrier.

Monetisation: Core access permanently free. A modest subscription (R79–R120/month) unlocks unlimited AI interactions, advanced journal features, and the appointment preparation tool. Schools and organisations pay a per-user licence for group access and reporting. No advertising. No data sales. Ever.

---

**What we absolutely cannot overlook**

These are the non-negotiables — things that, if missed, either break the product or cause real harm.

One: Clinical advisory from day one. Not a disclaimer reviewed by a lawyer. An actual relationship with a SA psychiatrist or clinical psychologist, ideally from the ADHD special interest group at SASOP, who reviews the psychoeducation content, the journal prompts, and the AI framing before a single user touches it. This protects users and gives the product credibility.

Two: Lived experience in the design process. Not as a checkbox — as a structural part of how the product is built. People with ADHD, particularly from under-resourced SA communities, need to be involved in what the app asks of them, how it speaks to them, and what it assumes they know. Without this, you'll build something that works for diagnosed, English-speaking, middle-class users and misses everyone else.

Three: The shame architecture. Every interaction in the app must be designed with the question: could this make someone feel worse about themselves? Missed days, incomplete journals, unanswered check-ins — none of these should generate notifications that imply failure. The research is consistent that shame is not a motivator for ADHD brains. It is a paralytic.

Four: POPIA compliance built in, not bolted on. Health-adjacent data is the most sensitive category in POPIA. Consent must be granular, specific, and genuinely informed — not buried in terms. A 14-year-old using this app needs age-appropriate consent handling. 

Five: The crisis pathway. Some users will open this app in acute distress. There must be a visible, always-accessible pathway to SADAG's helpline (0800 21 22 23) and crisis text support. This is not a feature — it is a safeguard. It must be tested, maintained, and kept current.