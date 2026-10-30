# PR titles and bodies

The reader is **the cold reader**, as a reviewer. Save the body to a file and pass it with `gh pr create --body-file` or `gh pr edit --body-file`.

## Modes

- **Write:** for a new PR, or when the user asks for a description. Produce the title and body.
- **Audit:** when the user asks to check, fix, or trim a body. Produce the fixed body.
- **Refresh:** after every push to a branch that has an open PR. Update the body without asking.

Refresh is part of every push. Before you report a push as done, compare the title and body with the code:

```sh
gh pr view --json title,body,baseRefName
git diff "origin/$base"...HEAD
```

Fix each sentence that no longer matches the code with `gh pr edit --body-file`, and fix the title the same way. In Audit and Refresh, the new body is no longer than the old one unless the code gained a decision the reader needs. Then tell the user in one line what changed. The user never has to ask for this.

## Shape

```markdown
<intent: the problem, the change, the outcome. 1 to 3 sentences.>

<optional: one before/after snippet, benchmark table, or ondine diagram>

- <decision>. <reason, in the same bullet>
- <surprising behavior>. <short example>

<optional: steps a person must do by hand, numbered>

<optional: Related: org/other-repo#123>
```

Open with the intent. When the change has two goals, name both in the first sentence. This opening is the user's own:

> These PRs do two things. CI pulls each EHR image by a moving tag, so it always gets the newest build and ECR doesn't fill up with old tags. All three EHR repos also run their tests the same way, inside the test container.

Use at most three bullets and at most two visuals. A body has more paragraphs than code blocks.

## Sections and links

- Each section in the body carries content. When a section has nothing to say, it isn't there. Evidence, Merge Danger, Blast Radius, and Door sections are never used.
- When the repo has a PR template, keep its structure and its human-owned checkboxes as they are. Delete each template section that doesn't apply.
- GitHub shows the order of a stack, so the body doesn't repeat it. Link a PR only when it lives in another repo, as `nex-health/terraform-aws#1494`.
- Show the code a claim depends on as a small inline snippet. Nobody opens a `file.rb:42` reference.
- Write each paragraph as one line, and let GitHub wrap it to the reader's width.

## Title

The title names the outcome, and not the mechanism. On every refresh, read the title again against the body.

```text
Mechanism:  Add lifecycle_state to data sources
Outcome:    Stop counting unfinished setups as live data sources
```
