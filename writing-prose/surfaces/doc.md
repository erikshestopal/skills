# Docs

A README tells the reader which commands to run to get a result. When a command already does the work, the README names the command and the result, and the steps inside the command stay in the command.

```markdown
## Refresh the test database

Run `make database-tests`. It rebuilds the database image and runs the suite
against it.
```

## Shape

- Start with the reader's goal or the result of the task.
- Put each prerequisite before the steps that need it.
- Write steps as a numbered list, one action in each step, in the imperative.
- Keep concepts in their own section, apart from the steps.
- Use link text that names the destination.

## Design docs and plans

- Document confirmed requirements only. A speculative concept or an escape hatch stays out until someone confirms it.
- Open with the problem and the decision. Put the evidence under the claim it supports.
- Use the same terms as the code and the repo's `GLOSSARY.md`.
- When the reader knows the product but not the code, such as a PM or a partner team, say what each part does in plain words. Name only the identifiers the reader must act on.
