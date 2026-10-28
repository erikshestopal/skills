---
name: writing-prose
description: Writes and revises prose for the user. Use before you write a commit message, a PR title or body, a review reply, a code comment, a doc, or a chat answer, and after every push to a branch that has an open PR.
---

# Writing prose

Every piece of prose has one reader, the **cold reader**. The cold reader is an experienced engineer who knows the language, the framework, and the domain basics. They don't know this table, trigger, module, ticket, person, or local term. They read the text once, with no chat history. Write for that reader, in the user's voice.

## Steps

1. Name the surface and load its file. Each file adds the shape and rules for one kind of text.

   | Surface                                  | File                  |
   |------------------------------------------|-----------------------|
   | Commit message                           | `surfaces/commit.md`  |
   | PR title or body, new or after a push    | `surfaces/pr.md`      |
   | Review reply, or a question for the user | `surfaces/reply.md`   |
   | Code comment or docstring                | `surfaces/comment.md` |
   | README, design doc, or other doc         | `surfaces/doc.md`     |
   | Chat answer                              | `surfaces/chat.md`    |

2. Find the **intent**. Answer three questions: what problem or cost exists today, what changes, and what someone can now do or stop doing. Take the answers from the user's words, the ticket, or the spec. If they aren't clear, ask the user one question and wait. A restatement of the diff is a change, and it isn't intent.
3. Collect the evidence for each claim you plan to make: a query result, a snippet, a benchmark, or a source line you read. Drop each claim that has no evidence.
4. Write the draft with the rules in this file and the surface file.
5. Check the draft. Run the cold reader check below on every sentence, then read `reference/tells.md` and fix every tell. The draft is done when every sentence passes both. When you revise existing text, the new version is shorter than the old one.

## Cold reader check

Read each sentence against these eight points:

1. **Resolve every reference.** Each table, column, trigger, error code, constant, module, ticket, PR number, person, and local term is defined in the same sentence or the one before it. Define it in one clause, or cut it. For a coded label, such as a section number, decision ID, or milestone, write the plain description and put the label in parentheses after it.
2. **State a consequence only when it's needed.** Say what a thing is and stop. Add what it excludes, what happens when it's empty, or which edge cases it covers only when the reader would otherwise get it wrong, and give the reason in the same sentence.
3. **Show first.** When the point is behavior or data, lead with a short snippet, sample rows, or a before/after. Prose carries only what the snippet can't.
4. **Cut what the code says.** A sentence that restates the code beside it, or lists what the diff shows, goes.
5. **Stay under the ceiling.** Explain local things only. Give at most one clause to the language, the framework, a gem the repo already uses, or a well known EHR fact.
6. **Name the concrete event.** "An ending attempt" becomes "an attempt that succeeds, fails, or is abandoned". Point at real things, such as "this installation", and not at labels like A and B.
7. **Write full sentences.** Each sentence has a subject, a verb, and an object.
8. **Delete it in your head.** If the reader loses nothing they'd act on, delete it for real. Sentences that protect the writer, such as sources, caveats, and counts, usually fail.

```
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

Prose about code explains why, shows a decision, or shows a consequence. Keep:

- The problem and the outcome.
- Each design decision, with its reason in the same sentence.
- Surprising behavior, with a short example.
- **Why-evidence**, placed under the claim it supports: a benchmark when speed is the point, or a production query that shows a case can't happen.
- The **current state** of the code. How the work got here stays in the chat.

The diff is the **inventory** of files, methods, and line numbers, so the prose skips it. Test counts, CI, lint, and other validation results go to the user in chat. So does provenance: commit SHAs, branch names, "as of <date>", "verified against", and the sources you read. Keep a version only when the reader must pin it or act on it.

## Visuals

Pick the smallest view that makes the point. Use prose when two sentences carry it.

- A before/after snippet or a focused `diff` is usually the best view.
- Use pseudocode for logic and a call tree for runtime order.
- Use a diagram only for behavior that isn't linear, such as a race, routing between services, or branches that prose can't carry. Render it with `bunx ondine@0.0.3 --ascii x.mmd 2>/dev/null` and paste the output in a `text` block under 80 columns.
- In a terminal, draw tables with borders (`+---+`). On GitHub, use Markdown tables.

## Sentences

- Write complete sentences. A heading, a table cell, or a list fragment is the only exception.
- Keep a step to 20 words or fewer and a description to 25 words or fewer.
- When two actions share a subject, write one sentence with "and": "The job reads the rows and then writes the totals."
- Join related ideas with "and", "because", or "so". End the sentence when the ideas aren't related.
- Separate clauses with a period or a comma. Write ranges with "to": "10 to 20 seconds".
- Use parentheses only for an identifier, a coded label, or a first-use abbreviation: "electronic health record (EHR)". Put an aside in its own clause.
- Use "can" for a real possibility. State a proven claim as a fact. For an unknown, say what you didn't check.
- Contractions are fine.
- Use active voice. Use passive voice only when the actor is unknown.
- Use one term for one concept, everywhere in the text.
- Use the plain word, straight quotes, sentence case headings, and bold only for a real warning.
- For STE grammar and the word list, read `reference/ste.md` when a sentence still reads stiff or vague.

## Voice

| Surface                          | Voice                                                     |
|----------------------------------|-----------------------------------------------------------|
| Commit, PR, comment, doc         | Neutral and plain. No "I", no opinions, no selling.       |
| Chat answer, review reply        | The user's voice. "I" and a clear opinion are welcome.    |

The user writes short and direct. When a sentence tries hard to sell a simple fact, state the fact.
