import fs from "node:fs";
import path from "node:path";

// llms.txt og llms-full.txt lå tidligere som statiske filer i public/, og
// driftet ut av synk med resten av siden. Nå ligger kildeteksten i
// src/content/llms/ med plassholdere, og innholdet settes sammen her.
const LLMS_DIR = path.join(process.cwd(), "src", "content", "llms");

type LlmsFile = "llms.txt" | "llms-full.txt";

/**
 * Leser kildefila og fyller inn plassholderne.
 */
export function renderLlmsFile(file: LlmsFile): string {
  const raw = fs.readFileSync(path.join(LLMS_DIR, file), "utf8");

  return raw.replaceAll("{{LAST_UPDATED}}", new Date().toISOString().slice(0, 10));
}
