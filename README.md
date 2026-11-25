# The Meeting That Should Have Been an Email

[![make.fun](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9?ref=9f4fsyjb)
[![Rank](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/rizalarkana77/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9?ref=9f4fsyjb)
[![Reward](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/rizalarkana77/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9?ref=9f4fsyjb)

A make.fun entry for the "The Meeting That Should Have Been an Email" bounty: one plain-text line, at most 200 characters, that is a single joke about a meeting that should have been an email. The line is the whole entry — no setup, no second sentence to lean on.

## The line

> We met for an hour to agree it should have been an email, then scheduled a follow-up to confirm.

96 characters.

## Why this angle

Most entries on this theme stop at the complaint: the meeting was pointless, it could have been an email. This line takes one step further and makes the complaint itself the trap. The group does not just waste an hour reaching the obvious conclusion — they immediately institutionalize the waste by scheduling a follow-up to confirm it. The turn is the last clause: the meeting about the meeting spawns another meeting, so the joke lands as a loop rather than a gripe. It needs no setup because every reader has sat in that room, and every word earns its place: "for an hour" sets the cost, "agree" makes it unanimous and therefore indefensible, and "to confirm" is the bureaucratic reflex that turns a realization into a calendar invite. At 96 characters it stays tight enough that the punchline arrives before the reader can brace for it.

## How it works

Run with Node (standard library only, deterministic):

```bash
MAKEFUN_OUTPUT_DIR=/tmp/out-meeting node main.ts
```

Expected output:

```text
wrote /tmp/out-meeting/entry.txt (96 chars, sha256 6f71c9f7b936cdeb16c35d039f7e942f7fa9cdfb9e573d2860bd1306b9b81d2d)
```

The program validates the line (1–200 characters, not whitespace-only, no newline), writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt`, reads it back, verifies the text and its SHA-256, and prints the confirmation above.
