---
name: principle-lead-with-the-intent
description: "Apply when writing anything a person reads to decide or review: a PR description, a commit body, a summary, a status report, or a design note. Open with one sentence that says why the work exists, and build everything after it on that sentence."
---

# Lead with the Intent

A reader needs to know why the work exists before any detail can mean something to them. Open with one clear sentence that states the intent: the need or goal that makes the work worth doing. A summary of what the code now does is not intent. If a reader who stops after the first sentence would ask "why would we want that?", the sentence fails.

- **Get the intent from the person, not the diff.** Take it from the user's own words in this session or the ticket they linked. If neither states it, ask why the work exists and wait for the answer. Do not infer it from the code, the diff, or another agent's summary, and do not offer a guess in its place. This is the exception to **pstack:principle-never-block-on-the-human**: a wrong intent misleads every reader, and no later course correction reaches them.
- **Build on the first sentence.** Each later sentence answers a question the intent raises, such as how the change meets the need or what a reviewer should know about how it behaves. Cut a sentence that doesn't connect back to the intent.
- **Use the lightest form that carries the point.** Plain prose by default. One or two bullets when there are parallel points. A small Mermaid or ASCII diagram when the point is a flow, a set of states, or a path through several systems. Do not use tables, labeled fields such as Problem, Decision, and Expect, or headings for a body of a few sentences.
- **Leave out the evidence trail.** Validation details, regexes, test results, counts, file names, SHAs, and change lists do not explain intent. The diff and CI already hold them. Give them to the user in chat or link them.

**The test:** a reader who reads only the first sentence can say why the work matters, and every later line answers a question that sentence raised.

Example PR body:

```markdown
This PR is part of an observability effort to learn how much proxy traffic and browser time each sync command uses, so we can estimate proxy costs, pick the right vendors, and track those numbers as top-line metrics.

Browser sessions now pass the sync command's ID and name to Charon in the proxy username, so Charon can measure traffic per command. The values go in the username because Chromium can't send our `nex-*` headers safely. Sessions without a sync command connect the same as before, and a value that would break the username is skipped, so a bad tag never fails a sync.
```
