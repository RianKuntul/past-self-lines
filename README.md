# Two Lines to Your Past Self

[![make.fun](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca)
[![Rank](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/RianKuntul/past-self-lines/rank.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca)
[![Reward](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/RianKuntul/past-self-lines/reward.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca)

Entry for the make.fun bounty "Two Lines to Your Past Self". The program writes
exactly two lines to `entry.txt`: the first warns the writer's past self about
one specific moment — a father sliding loan papers across the kitchen table and
calling the signature a formality — and the second traces the real consequence
of that signature, five years of wages chained to truck payments for a vehicle
never driven. Before writing, the program validates its own output (exactly two
lines, exactly one sentence per line, no empty lines, 1–280 characters) and
refuses to write anything that breaks the rules.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/suga-past-self-out node main.ts
```

This writes `/tmp/suga-past-self-out/entry.txt`. Requires Node 22 or later
(`node main.ts` runs the TypeScript directly; no build step, no dependencies).
