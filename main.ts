// make.fun entry: "Make the AI judge happy" (ai-happy-01).
// The image is the entry.png beside this file; the program copies it
// to /output/entry.png. Node 22, standard library only.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
copyFileSync(new URL('./entry.png', import.meta.url), dest);
const bytes = statSync(dest).size;
if (bytes === 0 || bytes > 1048576) throw new Error(`entry.png is ${bytes} bytes, must be 1..1048576`);
