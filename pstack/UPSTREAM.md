# Upstream

`pstack/` is an Amp port of [pstack](https://github.com/cursor/plugins/tree/main/pstack) by Lauren Tan (MIT, `LICENSE`).

| Source | Commit | Path |
| --- | --- | --- |
| pstack 0.15.42 | `bf0c7cd80abdbf7fe47b634978a7d1b4071f71a7` | `pstack/skills`, `pstack/agents` |
| cursor-team-kit | `bf0c7cd80abdbf7fe47b634978a7d1b4071f71a7` | `cursor-team-kit/skills/{deslop,control-cli,control-ui,verify-this}` (MIT, `LICENSE.cursor-team-kit`) |

pstack references the four cursor-team-kit skills without bundling them, so they are vendored here.

Left out: `statechart`, `setup-pstack`, `automate-me`, `make-bot-ui`, `automations/benny`, `docs/guide`, the Claude Code harness, and the worktree-cleanup playbook with `scripts/worktree-audit.sh`.

Amp changes: skills load as `pstack:<name>` from `index.ts`, and every subagent, verifiers included, runs as an Amp `Task` subagent inside the calling thread, never as a new thread. Upstream's per-role models are dropped, because Task runs on the calling thread's model; independence comes from a fresh subagent with its own brief. `pstack_spawn` only builds the Task call, prepending a persona from `agents/` and an optional read-only rule. Parallel writers use git worktrees, as upstream does. Chat history is read with `find_thread` and `read_thread` instead of transcript files. Recurring checks use thread schedules and GitHub subscriptions instead of `/loop`. Skill authoring uses Amp's `building-skills`. Bugbot references are generalized to review bots, and the `watch-pr` script no longer special-cases Bugbot.

