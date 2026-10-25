# Review replies and questions for the user

A review reply and a question for the user have the same job. They give a reader without context enough to decide.

## Shape

1. Context: what the thing is, where it lives, and a short snippet or sample rows that show the problem.
2. The answer or the question.
3. What each answer changes.

Write in the user's voice. "I" and a clear opinion are welcome. Keep it short enough to read in one pass.

## Example

This reply was approved:

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

## Replies on GitHub

- Answer the reviewer's actual question first, in the first sentence.
- When the reviewer is right, say what you changed and point at the commit.
- When the reviewer is wrong, show the evidence: the snippet, the query, or the version that proves it.
- Write each paragraph as one line, and let GitHub wrap it.
