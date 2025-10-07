import fs from 'node:fs/promises';
import path from 'node:path';

const DIST_DIR = process.env.DIST_DIR || 'dist';

function classify(ext) {
  const e = ext.toLowerCase();
  if (e === '.html') return 'html';
  if (e === '.js' || e === '.mjs' || e === '.cjs') return 'js';
  if (e === '.css') return 'css';
  if (['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif', '.svg'].includes(e)) return 'images';
  if (['.woff2', '.woff', '.ttf', '.otf', '.eot'].includes(e)) return 'fonts';
  return 'other';
}

async function walk(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const ent of entries) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      out.push(...await walk(p));
    } else if (ent.isFile()) {
      const st = await fs.stat(p);
      out.push({ path: p, size: st.size });
    }
  }
  return out;
}

function nowStamp() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}`;
}

async function main() {
  const files = await walk(DIST_DIR);
  const summary = {
    totalBytes: 0,
    byType: { html: 0, js: 0, css: 0, images: 0, fonts: 0, other: 0 },
    top: [],
  };
  for (const f of files) {
    const ext = path.extname(f.path);
    const type = classify(ext);
    summary.totalBytes += f.size;
    summary.byType[type] += f.size;
  }
  summary.top = files.sort((a,b)=>b.size-a.size).slice(0, 20);

  const outDir = path.join('.perf', nowStamp());
  await fs.mkdir(outDir, { recursive: true });
  const outPath = path.join(outDir, 'size.json');
  await fs.writeFile(outPath, JSON.stringify(summary, null, 2));
  console.log(JSON.stringify(summary));
}

main().catch((e)=>{
  console.error(e);
  process.exit(0);
});



