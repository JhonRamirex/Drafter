#!/usr/bin/env node
// Simple image pipeline: generate AVIF/WebP 800/1200/1600 and tiny LQIP
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = process.cwd();
const PUBLIC_DIRS = [
  path.join(ROOT, 'public'),
  path.join(ROOT, ''),
];

const VALID_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp']);
const TARGET_WIDTHS = [800, 1200, 1600];

async function walk(dir, out = []) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      await walk(full, out);
    } else {
      const ext = path.extname(e.name).toLowerCase();
      if (VALID_EXT.has(ext)) out.push(full);
    }
  }
  return out;
}

async function ensure(file, w, format) {
  const dir = path.dirname(file);
  const base = path.basename(file, path.extname(file));
  const out = path.join(dir, `${base}-${w}.${format}`);
  try {
    await fs.promises.access(out, fs.constants.F_OK);
    return; // exists
  } catch {}
  const buf = await sharp(file).resize({ width: w, withoutEnlargement: true }).toFormat(format, { quality: 70 }).toBuffer();
  await fs.promises.writeFile(out, buf);
}

async function ensureLqip(file) {
  const dir = path.dirname(file);
  const base = path.basename(file, path.extname(file));
  const out = path.join(dir, `${base}-lqip.webp`);
  try {
    await fs.promises.access(out, fs.constants.F_OK);
    return;
  } catch {}
  const buf = await sharp(file).resize({ width: 24 }).webp({ quality: 35 }).toBuffer();
  await fs.promises.writeFile(out, buf);
}

async function processFile(file) {
  for (const w of TARGET_WIDTHS) {
    await ensure(file, w, 'webp');
    await ensure(file, w, 'avif');
  }
  await ensureLqip(file);
}

(async () => {
  const files = [];
  for (const dir of PUBLIC_DIRS) {
    if (fs.existsSync(dir)) {
      const f = await walk(dir);
      files.push(...f);
    }
  }
  console.log(`Found ${files.length} images. Generating variants...`);
  for (const f of files) {
    try {
      await processFile(f);
      console.log('Processed:', path.relative(ROOT, f));
    } catch (e) {
      console.warn('Skip:', f, e.message);
    }
  }
  console.log('Done.');
})();


