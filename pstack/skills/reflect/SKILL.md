---
name: reflect
description: Spawn three parallel review subagents over the active transcript, surface learnings, and route each to a concrete edit on an existing skill. Use when the user says reflect.
---

# Reflect

Mine the current conversation for durable learnings, then route them into skill edits.

Invoke when the user says "reflect" or "pstack:reflect". Skip when the conversation is trivial, off-topic, or already covered by an existing skill the parent followed correctly. One-offs are not learnings.

## 1. Locate this thread

Before fanning out, take this thread's URL from your environment block. Reviewers read it with `read_thread` and `context: full`. If it is too long to read whole, pass a tight digest of the session instead.

## 2. Spawn three reviewers in parallel

One message, three Task calls with `mode: "async"`, one per reviewer below. Never start a thread for a reviewer. Reviewers need MCP access to look up the tickets, chat threads, and observability traces the thread references.

Run each subagent as a Task subagent of this thread, per the Subagents section of the **pstack:poteto-mode** skill.

| Lens | Prompt template |
|---|---|
| Judgment | `references/judgment-reviewer.md` |
| Tooling | `references/tooling-reviewer.md` |
| Divergent | `references/divergent-reviewer.md` |

Pass each template verbatim, substituting the thread URL or digest where marked. Each reviewer's findings arrive as Task results.

## 3. Synthesize

One blocking Task call. It spot-verifies citations through MCP. Pass `references/synthesizer.md` verbatim, with each reviewer's full output inlined where marked. It returns an Accepted / Rejected / Backlog list.

## 4. Structural enforcement check

Move any Accepted item that a lint rule, script, metadata flag, or runtime check would enforce more reliably to Backlog. See the **pstack:principle-encode-lessons-in-structure** skill.

## 5. Apply

Present the synthesizer's full Accepted / Rejected / Backlog output and wait for explicit approval before applying any Accepted edit. The user picks the subset and may redirect routings. Skill changes affect every future agent in the org. Do not auto-apply.

File each Backlog item to your team's devex or backlog tracker without waiting. Only the Accepted list waits for approval.

Never edit a skill in a plugin's installed copy. pstack's own skills come from the `pstack` plugin, whose source is `pstack/` in `gostandpoint/dotagents`, so edit them there. For any other skill, show its destination before approval: `.agents/skills/<skill>/` in the project, or the personal or workspace skills repository. After approval, edit it there. Never open a PR or push.

Follow each approved row's Routing exactly:

- Trivial existing-skill edit (a one-line bullet, a tightened sentence, a stale fact corrected): the parent does it directly.
- Substantive existing-skill edit (a new section, a new pattern table, more than ~10 lines): hand to Amp's `building-skills` skill.
- `tune description: <skill path>` (the skill exists but didn't trigger when it should have): hand to `building-skills` to rewrite its description.
- `new skill via building-skills: <kebab-name>`: hand creation to `building-skills`. Do not invent the shape ad hoc.

If your environment ships a SKILL.md validator, run it on every touched skill before declaring done.

## 6. Summarize for the user

Short list, no preamble:

- Edits applied: `<skill path>`. What changed, one line each.
- New skills created: `<skill path>`. One line each (rare).
- Backlog filed to the devex tracker: `<issue title>` (`<tags>`). One line each.
- Dropped: one line per rejected finding + reason from the synthesizer.
