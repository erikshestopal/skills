---
name: writing-prose
description: Writes and revises prose for the user. Use before you write a commit message, a PR title or body, a review reply, a code comment, a doc, a chat answer, a status update, or a question for the user, and after every push to a branch that has an open PR.
---

# Writing prose

Write for one reader, in the user's voice. Each surface file names its reader.

- **The cold reader** reads commits, PRs, review replies, comments, and docs. They're an experienced engineer who knows the language, the framework, and the domain basics. They don't know this table, module, ticket, person, or local term, and they read once with no chat history.
- **The user** reads chat. They're a busy engineer who rarely reads the code and judges the work by outcomes. They skim, so write at a high-school level.

## Steps

1. Name the surface and load its file.
   - Commit message: `surfaces/commit.md`
   - PR title or body, new or after a push: `surfaces/pr.md`
   - Review reply on GitHub: `surfaces/reply.md`
   - Code comment or docstring: `surfaces/comment.md`
   - README, design doc, or other doc: `surfaces/doc.md`
   - Chat answer, status update, or question for the user: `surfaces/chat.md`
2. Find the **intent**. Answer three questions: what problem or cost exists today, what changes, and what someone can now do or stop doing. Take the answers from the user's words, the ticket, or the spec. If they aren't clear, ask the user one question and wait. A restatement of the diff isn't intent.
3. Get the **evidence** for each claim: a test, a query, a benchmark, or a source line. When you can get it by running, reading, or querying something, get it before you write. Drop each claim you still can't back.
4. Write the draft with this file and the surface file.
5. Check the draft with the reader check below and `reference/tells.md`. When you revise existing text, the new version is shorter than the old one.

## Reader check

Read each sentence against these points:

1. **Resolve every reference.** Define each table, column, error code, module, ticket, person, and local term in one clause, or cut it. For a coded label, such as a section number or a decision ID, write the plain description and put the label in parentheses after it.
2. **Show first.** When the point is behavior, data, or how parts connect, lead with a snippet, sample rows, a before/after, or a diagram. Prose carries only what the visual can't.
3. **Cut what the code says.** A sentence that restates the code or lists what the diff shows goes.
4. **Explain local things only.** Give at most one clause to the language, the framework, or a library the repo already uses.
5. **Name the concrete event.** "An ending attempt" becomes "an attempt that succeeds, fails, or is abandoned".
6. **Add a consequence only when it's needed.** State an edge case or an exclusion only when the reader would get it wrong without it.
7. **Delete it in your head.** If the reader loses nothing they'd act on, delete it for real.

```text
DEFINE (local to this code)             LEAVE (the cold reader knows it)
--------------------------------------  -----------------------------------
reject_counters trigger                 the workflow gem
c-tree error -20189                     Rails scopes, pytest fixtures
rsc table vs v_provider view names      Dentrix stores negative IDs
"pending claim", "the matcher"          what a transaction does
"Cloud9 cutover", "transition filter"   what an index scan is
§8.1, D3, UC-4, M5
```

## Content

Keep:

- The problem and the outcome.
- Each design decision, with its reason in the same sentence.
- Surprising behavior, with a short example.
- **Proof** in one line, under the claim it supports, such as a benchmark or a production query.
- The current state. How the work got here stays out.

Leave out the inventory of files, methods, and line numbers. Leave out provenance too: commit SHAs, branch names, test counts, CI results, "as of <date>", and the sources you read. Include one only when the reader must pin it or act on it.

## Visuals

Pick the smallest view that makes the point. Use prose when two sentences carry it.

- A before/after snippet or a focused `diff` for a code change.
- Pseudocode for logic, and a call tree for runtime order.
- A diagram for any relationship or flow, such as parts that connect, data that moves, branches, or a race. Write it in Mermaid and render it with `bunx ondine@0.0.3 --ascii x.mmd 2>/dev/null`. Paste the output in a `text` block under 80 columns. When it's too wide, shorten the labels or switch `LR` to `TD`. Don't hand-draw diagrams.
- A table only to compare items across the same columns. In a terminal, draw it with borders (`+---+`). On GitHub, use Markdown.

## Sentences

- Use subject, verb, object, in active voice. Use passive voice only when the actor is unknown.
- Keep a step to 20 words or fewer and a description to 25 words or fewer.
- Write prose in full sentences. Headings, list items, labels, table cells, and diagram labels can be fragments.
- Join related ideas with "and", "because", or "so". End the sentence when the ideas aren't related.
- Use one term for one concept everywhere.
- Use parentheses only for an identifier, a coded label, or a first-use abbreviation: "electronic health record (EHR)".
- State a checked claim as a fact. Use "can" for a real possibility.
- Bold only the few words a skimming reader must not miss, such as a warning, a verdict, or a decision.
- Use straight quotes and sentence case headings. Contractions are fine.
- Use the plain word: "use" for utilize or leverage, "to" for in order to, "because" for due to the fact that, "but" for however, "make sure" for ensure, "help" for facilitate.

## Lists

- Put the word that makes each item different first. Readers often see only the first two words.
- Give every item the same parts in the same order, and show numbers in the same format.
- Use one tense per list: past for finished items, and "-ing" for active ones.
- Use verbs that show good or bad news, such as "Blocks", "Fails", or "Passes".

## Voice

- **Commits, PRs, comments, and docs:** neutral and plain. No "I", no opinions, no selling.
- **Chat and review replies:** the user's voice. "I" and a clear opinion are welcome.

The user writes short and direct. When a sentence tries hard to sell a simple fact, state the fact.
