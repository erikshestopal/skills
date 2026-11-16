### Session pickup

**You own the resume point. Read the prior trail, don't redo it.**

1. Locate the prior trail. An Amp thread, found with `find_thread` scoped to this repository (`repo:<owner/repo>`), or a pushed branch. Never search other projects' threads, because that reads private chats from unrelated work. Read its current state first with `read_thread` and `context: current`, then ask with `context: full` for the decision points. Parse a long thread in a subagent and keep the reduced timeline in the main thread (the **pstack:principle-guard-the-context-window** skill). Run each subagent as a Task subagent of this thread, per the Subagents section.
2. Reconstruct operational state. The branch and the thread that owns it, what already landed (`git log`, `git diff` against the base), the open todos, the decisions made. The prior trail is authoritative input. Resist the bias to re-derive it.
3. Diff done vs pending. Compare what shipped against what was planned, name the resume point, do not re-run the prior repro or redo completed work. A "let me verify from scratch" pass means you're treating the trail as untrustworthy when it's authoritative.
4. Route the remaining work to the matching playbook and pick the verdict: continue the execution, ship a finished recommendation, ratify or override a prior conclusion, or postmortem a failed run. The pickup playbook ends here. The routed playbook owns the rest.
5. Verify the inherited claims against the original goal on the real artifact (the **pstack:principle-prove-it-works** skill). A passing prior self-report is not the proof.

**Reply:** where the prior agent stopped, what you inherited vs redid (ideally nothing redone), the resume point, and the outcome.
