import fg from 'fast-glob';
import path from 'node:path';
import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import sharp from 'sharp';

const SIZES = (process.env.IMG_SIZES || '320,640,960,1280,1920').split(',').map((s) => parseInt(s.trim(), 10));
const INPUT_DIRS = ['public/img', 'public/images', 'public/arquitectura', 'public/gastronomia', 'public/Moda', 'public/social', 'public/SVG', 'public/Portafolio Drafter 2025 julio', 'public'];
const OUT_DIR = 'public/optimized';
const CACHE_FILE = path.join(OUT_DIR, '.cache.json');

async function sha1(file) {
  const buf = await fs.readFile(file);
  return crypto.createHash('sha1').update(buf).digest('hex');
}

async function loadCache() {
  try { return JSON.parse(await fs.readFile(CACHE_FILE, 'utf8')); }
  catch { return {}; }
}
async function saveCache(c) {
  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.writeFile(CACHE_FILE, JSON.stringify(c, null, 2));
}

function isOptimizedDir(p) {
  return /(^|\\|\/)optimized(\\|\/)/.test(p) || /(^|\\|\/)optimized-images(\\|\/)/.test(p);
}

async function processOne(src, cache) {
  if (isOptimizedDir(src)) return null;
  const rel = src.replace(/^public[\\/]/, '');
  const hash = await sha1(src);
  if (cache[rel] === hash) return null;

  const img = sharp(src);
  const meta = await img.metadata();
  const origWidth = meta.width || undefined;
  const origHeight = meta.height || undefined;
  const baseDir = path.join(OUT_DIR, path.dirname(rel));
  await fs.mkdir(baseDir, { recursive: true });

  const name = path.basename(src, path.extname(src));
  const variants = [];

  for (const w of SIZES) {
    if (origWidth && w > origWidth) continue;

    const avifOut = path.join(baseDir, `${name}.${w}w.avif`);
    const webpOut = path.join(baseDir, `${name}.${w}w.webp`);

    await sharp(src).resize({ width: w }).avif({ quality: 50 }).toFile(avifOut);
    await sharp(src).resize({ width: w }).webp({ quality: 68 }).toFile(webpOut);

    variants.push({
      w,
      avif: avifOut.replace(/^public[\\/]/, ''),
      webp: webpOut.replace(/^public[\\/]/, '')
    });
  }

  cache[rel] = hash;
  return { src: rel, width: origWidth, height: origHeight, variants };
}

async function main() {
  const patterns = INPUT_DIRS.flatMap((d) => [
    `${d}/**/*.{png,jpg,jpeg,webp,avif}`
  ]);
  const files = await fg(patterns, { dot: false, onlyFiles: true, suppressErrors: true });
  const cache = await loadCache();
  const manifest = [];

  for (const f of files) {
    try {
      const rec = await processOne(f, cache);
      if (rec) manifest.push(rec);
    } catch (e) {
      console.error('Error with', f, e.message || e);
    }
  }

  await saveCache(cache);
  await fs.writeFile(path.join(OUT_DIR, 'manifest.images.json'), JSON.stringify(manifest, null, 2));
}
main();



