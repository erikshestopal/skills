# Review replies

The reader is **the cold reader**, as a reviewer on GitHub. The reply gives them enough to decide.

## Shape

1. Context, only what the reviewer needs to follow the answer: what the thing is, and a short snippet or sample rows that show the problem.
2. The answer, or your question.
3. What each answer changes.

Keep it short enough to read in one pass. This reply was approved:

```
`rsc` is the Dentrix table that holds providers. It has a view, `v_provider`,
that renames some of its columns:

  admin.rsc (real column)   admin.v_provider (view name)
  lastname                  last_name
  zipcode                   zip_code

The base factory inserts only columns that exist in `admin.rsc` and silently
drops every other name. So `ProviderFactory(last_name="Smith")` doesn't fail.
The "Smith" is thrown away.

The fix is to delete the view-name lines. They have no effect today, so no
test result changes. Should I?
```

## Rules

- Answer the reviewer's actual question, not a nearby one.
- When the reviewer is right, say what you changed and point at the commit.
- When the reviewer is wrong, show the evidence: the snippet, the query, or the version that proves it.
- Write each paragraph as one line, and let GitHub wrap it.
