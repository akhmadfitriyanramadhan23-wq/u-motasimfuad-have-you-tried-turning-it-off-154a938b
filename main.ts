import { mkdirSync, writeFileSync } from "node:fs";

// A hopeless tech support agent's one-liner, under 200 characters:
// rule -> literal violation -> flat consequence. The agent takes
// "turn it off and on again" literally and escalates it through
// the laptop, the router and the customer's will to live, then
// files it under a real ticket number like any other outage.
const lines = [
  "Have you tried turning it off and on again? Your laptop, your router, your will to live — in that order, and call me back on ticket #4815 if the will to live boots first.",
];

const text = lines.join("\n") + "\n";

// Guard: the gate requires 1-199 characters and exactly one line.
// Character count is measured on the line itself, without the newline.
const lineChars = [...lines[0]].length;
if (lineChars < 1 || lineChars > 199) {
  throw new Error(`entry must be 1-199 characters, got ${lineChars}`);
}
if (lines.length !== 1 || lines.some((line) => !line.trim())) {
  throw new Error("entry must be exactly one non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
