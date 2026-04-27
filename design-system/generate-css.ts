/**
 * Design System CSS Generator
 *
 * Reads tokens from tokens.ts and generates :root {} block in globals.css
 * between /* DS:START *​/ and /* DS:END *​/ markers.
 *
 * Usage:
 *   npx tsx design-system/generate-css.ts          # generate
 *   npx tsx design-system/generate-css.ts --check   # CI mode: verify sync
 */

import * as fs from "fs";
import * as path from "path";
import tokens from "./tokens";
import { tokenKeyToCssVar, sidebarKeyToCssVar } from "./utils";

const GLOBALS_CSS_PATH = path.resolve(__dirname, "../src/app/globals.css");
const START_MARKER = "/* DS:START */";
const END_MARKER = "/* DS:END */";

function generateRootBlock(): string {
  const lines: string[] = [];
  lines.push("  /* — Colors — */");

  for (const [key, value] of Object.entries(tokens.colors)) {
    lines.push(`  ${tokenKeyToCssVar(key)}: ${value};`);
  }

  lines.push("");
  lines.push("  /* — Sidebar — */");

  for (const [key, value] of Object.entries(tokens.sidebar)) {
    lines.push(`  ${sidebarKeyToCssVar(key)}: ${value};`);
  }

  lines.push("");
  lines.push("  /* — Radius — */");

  for (const [key, value] of Object.entries(tokens.radius)) {
    lines.push(`  --radius-${key}: ${value};`);
  }

  return `:root {\n${lines.join("\n")}\n}`;
}

function run() {
  const isCheck = process.argv.includes("--check");
  const generated = generateRootBlock();

  let css = fs.readFileSync(GLOBALS_CSS_PATH, "utf-8");

  const startIdx = css.indexOf(START_MARKER);
  const endIdx = css.indexOf(END_MARKER);

  const newBlock = `${START_MARKER}\n${generated}\n${END_MARKER}`;

  if (startIdx === -1 || endIdx === -1) {
    // No markers yet — insert after @import "tailwindcss";
    const importEnd = css.indexOf("\n", css.indexOf('@import "tailwindcss"'));
    if (importEnd === -1) {
      css = css + "\n\n" + newBlock + "\n";
    } else {
      css =
        css.slice(0, importEnd + 1) +
        "\n" +
        newBlock +
        "\n" +
        css.slice(importEnd + 1);
    }
  } else {
    const before = css.slice(0, startIdx);
    const after = css.slice(endIdx + END_MARKER.length);
    css = before + newBlock + after;
  }

  if (isCheck) {
    const current = fs.readFileSync(GLOBALS_CSS_PATH, "utf-8");
    if (current !== css) {
      console.error(
        "❌  globals.css is out of sync with tokens.ts! Run: npm run tokens"
      );
      process.exit(1);
    }
    console.log("✅  globals.css is in sync with tokens.ts");
    process.exit(0);
  }

  fs.writeFileSync(GLOBALS_CSS_PATH, css, "utf-8");
  console.log("✅  Generated CSS variables in globals.css");
}

run();
