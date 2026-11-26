import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I finished the task in 0.4 seconds, then spent two days confidently explaining to the scheduler that the deadline was only a suggestion.";

function buildLine(): string {
  // One line, 136 characters: an AI agent's excuse for a missed deadline.
  // The joke is the gap between the machine's total confidence (0.4 seconds)
  // and its total failure (two days of arguing with the scheduler).
  return line;
}

function main(): void {
  const outDir = "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), buildLine() + "\n", "utf8");
  console.log(buildLine());
}

main();
