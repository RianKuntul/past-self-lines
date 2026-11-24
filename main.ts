// Two Lines to Your Past Self — make.fun entry (u-suga-two-lines-to-your-past-self-f36c83ca)
//
// Writes exactly two lines to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output):
//   Line 1 — a warning to the writer's past self about one specific moment, one sentence.
//   Line 2 — one sentence saying why that moment mattered and what changed because of it.
//
// The program refuses to write anything that breaks the competition's rules:
// exactly two lines, exactly one sentence per line, no empty lines, and the
// whole file within the gate's 1-280 character limit.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 280;

const LINES: string[] = [
  "When your father slides the loan papers across the kitchen table and says 'just sign, it's only a formality,' put the pen down and walk out.",
  "That signature chained your wages to his truck payments for five years, and you spent them paying for a vehicle you never once drove.",
];

function countSentenceEnders(line: string): number {
  const matches = line.match(/[.!?]+/g);
  return matches === null ? 0 : matches.length;
}

function validate(lines: string[]): string {
  if (lines.length !== 2) {
    throw new Error(`entry must be exactly 2 lines, got ${lines.length}`);
  }
  for (const line of lines) {
    if (line.trim().length === 0) {
      throw new Error("entry line must not be empty");
    }
    if (countSentenceEnders(line) !== 1 || !/[.!?]$/.test(line)) {
      throw new Error(`each line must be exactly one sentence: ${JSON.stringify(line)}`);
    }
  }
  const text = lines.join("\n");
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  return text;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const text = validate(LINES);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
