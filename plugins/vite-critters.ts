import type { Plugin } from 'vite';
import fs from 'node:fs/promises';
import fssync from 'node:fs';
import path from 'node:path';
import Critters from 'critters';

async function findHtmlFiles(dir: string): Promise<string[]> {
  const out: string[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const ent of entries) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      out.push(...await findHtmlFiles(p));
    } else if (ent.isFile() && p.toLowerCase().endsWith('.html')) {
      out.push(p);
    }
  }
  return out;
}

export default function crittersPlugin(options: Partial<ConstructorParameters<typeof Critters>[0]> = {}): Plugin {
  return {
    name: 'vite-critters',
    apply: 'build',
    closeBundle: async () => {
      const outDir = path.resolve('dist');
      if (!fssync.existsSync(outDir)) return;
      const htmlFiles = await findHtmlFiles(outDir);
      if (htmlFiles.length === 0) return;

      const critters = new Critters({
        path: outDir,
        preload: 'swap',
        fonts: true,
        pruneSource: false,
        compress: true,
        inlineFonts: true,
        ...options,
      } as any);

      for (const file of htmlFiles) {
        try {
          const html = await fs.readFile(file, 'utf8');
          const processed = await critters.process(html);
          await fs.writeFile(file, processed);
          // eslint-disable-next-line no-console
          console.log(`[critters] inlined critical CSS: ${path.relative(outDir, file)}`);
        } catch (e: any) {
          // eslint-disable-next-line no-console
          console.warn('[critters] failed for', file, e?.message || e);
        }
      }
    }
  };
}



