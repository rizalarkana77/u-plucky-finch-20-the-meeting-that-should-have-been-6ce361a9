import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "We met for an hour to agree it should have been an email, then scheduled a follow-up to confirm.";

function validateLine(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`LINE must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("LINE must not be whitespace only");
  }
  if (line !== line.trim()) {
    throw new Error("LINE must not have leading or trailing whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("LINE must be a single line with no newline");
  }
}

validateLine(LINE);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

const readBack = readFileSync(outPath, "utf8");
if (readBack !== LINE) {
  throw new Error("Read-back verification failed: file content does not match LINE");
}

const sha256 = createHash("sha256").update(readBack, "utf8").digest("hex");

console.log(`wrote ${outPath} (${LINE.length} chars, sha256 ${sha256})`);
