---
name: principle-lead-with-the-intent
description: "Apply when writing anything a person reads to decide or review: a PR description, a commit body, a summary, a status report, or a design note. Open with one sentence that says why the work exists, and build everything after it on that sentence."
---

# Lead with the Intent

A reader needs to know why the work exists before any detail can mean something to them. Open with one clear sentence that states the intent: the need or goal that makes the work worth doing. A summary of what the code now does is not intent. If a reader who stops after the first sentence would ask "why would we want that?", the sentence fails.

- **Get the intent from the person, not the diff.** Take it from the user's own words in this session or the ticket they linked. If neither states it, ask why the work exists and wait for the answer. Do not infer it from the code, the diff, or another agent's summary, and do not offer a guess in its place. This is the exception to **pstack:principle-never-block-on-the-human**: a wrong intent misleads every reader, and no later course correction reaches them.
- **Build on the first sentence.** Each later sentence answers a question the intent raises, such as how the change meets the need or what a reviewer should know about how it behaves. Cut a sentence that doesn't connect back to the intent.
- **Format the body for a reader who scans.** Put the intent sentence first, with no heading above it. Give each question it raises its own `##` heading that names what the section covers, such as "How Charon learns a browser session's command", rather than a fixed label like "What changes", "Related", or "Not in this PR". Inside a section, write a few sentences of prose that explain the reason, then a list when there are parallel items. A small Mermaid or ASCII diagram fits when the point is a flow or a path through several systems. A body of two or three sentences needs no headings. Add a "Breaking changes" section only when something a caller relies on actually breaks.
- **Stay inside the PR.** Describe only what this PR does. Leave out related PRs, follow-ups, and work it deliberately doesn't do.
- **Leave out the evidence trail.** Validation details, regexes, test results, counts, file names, SHAs, and change lists do not explain intent. The diff and CI already hold them. Give them to the user in chat or link them.

**The test:** a reader who reads only the first sentence can say why the work matters, and every later line answers a question that sentence raised.

Example PR body:

```markdown
This PR is part of an observability effort to learn how much proxy traffic and browser time each sync command uses, so we can estimate proxy costs, pick the right vendors, and track those numbers as top-line metrics.

## How Charon learns a browser session's command

Chromium can't send our `nex-*` headers safely, so browser-manager puts the sync command's ID, name and trace context in the proxy username, next to `emr`. Chrome sends the username only to Charon, so no origin or redirect target sees it.

## Keeping checkouts safe

A value that would corrupt the username, such as one containing `,` or `=`, is skipped with a warning, and the rest of the username stays intact. A bad tag never fails a checkout, and sessions without a sync command connect exactly as before.
```
