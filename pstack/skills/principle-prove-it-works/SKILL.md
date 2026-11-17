---
name: principle-prove-it-works
description: "Apply after completing a task, before declaring done. Verify against the real artifact (run the feature, read the actual value, inspect the diff), not a proxy, self-report, or 'it compiles.'"
---

# Prove It Works

Verify every task output by checking the real thing directly. Do not infer from proxies, self-reports, or "it compiles."

**Why:** Unverified work has unknown correctness. Indirect verification (file mtimes, output freshness, agent self-reports, cached screenshots) feels cheaper than direct observation. Acting on a wrong inference costs far more than checking the source.

Check the real thing, not a proxy:
- Check process liveness directly, not indirectly through derived state
- Read the actual value, not a cached or derived representation
- When verification fails, suspect the observation method before suspecting the system

## Script the check when you can

The strongest proof is a deterministic script that re-runs the same comparison, not a one-time eyeball. Write the script, run it, and keep its output as an artifact a reviewer can re-run instead of trusting your word.

For an API, Gateway or other service change, the script is plain bash that the reviewer runs in the thread's Terminal:
- Make every request a real `curl` call against the running stack.
- For each request, print the exact `curl` command with tokens shown as `$NAME`, then the HTTP status, then the response through `jq`.
- Before each step that tests a rule, print what to expect, such as `# Bob asks to be primary. Expect 409 primary_logged_in.`
- Set up the scenario's data with the same visible curl calls. When bash can't build a body, such as a signed protobuf upload, a small encoder may write it to a file, and curl still sends it.

Run the script yourself until every step shows what it should. Then give the reviewer the command and what each step returned. A report or Markdown write-up that a script or agent produced is not proof, and neither is a dev playground scenario built for the review. Proof stays in the thread. Never put it in a gist or any other outside paste service.

Keep the artifact visible for the human. Commit it only for large or complex work where the trail has to be auditable later, like a big port or migration (the **pstack:show-me-your-work** skill).
