# Commit messages

This file owns the commit message. Save the message to a file and commit it with `git commit -F "$msg"`.

A commit is a decision record. A reader three months from now, with no chat history, learns from it why the code is the way it is.

## Shape

```text
fix: record deactivated when sync teardown runs

<problem today: what breaks, for whom>

<what this commit changes, and the consequence>

<optional: why-evidence, or a short before/after>

<optional: Resolves: PROJ-123>
```

- Write the subject in the imperative. It completes "If applied, this commit will ...".
- Keep the subject to 50 characters after the Conventional Commits prefix, with no final period.
- Every commit that changes behavior has a body. Only mechanical commits, such as a rename, formatting, or a dependency bump, stand on the subject alone.
- Wrap the body at 72 characters. Separate it from the subject with a blank line.
- Add a trailer only for a ticket that records the requirement. The host already links the commit to its PR.

## Body

Write the body as paragraphs. Use bullets only for separate consequences or references.

Put the why-evidence in the body when the change rests on a fact the diff can't show:

```text
test: remove tests for patients with no provider

Dentrix refuses to save a patient whose primary provider is empty,
so these tests set up a row that production never holds. A query of
161,318 patients in 11 practices found no patient with a blank
provider. The writers keep their fallback for a blank provider.
```

When a short before/after shows the effect faster than prose, put it in the body as plain indented text.

## Check

Run the cold reader check from `SKILL.md` on the body. A reader with only `git log` must understand why the commit exists.
