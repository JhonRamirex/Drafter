import { Plugin } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

export default function pictureTransform(): Plugin {
  return {
    name: 'vite-picture-transform',
    enforce: 'post',
    apply: 'build',
    transformIndexHtml(html) {
      const manifestPath = path.resolve('public/optimized/manifest.images.json');
      if (!fs.existsSync(manifestPath)) return html;
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
      const map = new Map(manifest.map((m: any) => [m.src.replace(/^\//, ''), m]));

      return html.replace(/<img([^>]*?)src="([^"]+)"([^>]*)>/g, (match, pre, src, post) => {
        const hasOptOut = /data-no-picture/.test(pre) || /data-no-picture/.test(post);
        if (hasOptOut) return match;

        const cleanSrc = src.replace(/^\//, '');
        const rec = map.get(cleanSrc);
        if (!rec) return match;

        const avifSet = rec.variants.map((v: any) => `/${v.avif} ${v.w}w`).join(', ');
        const webpSet = rec.variants.map((v: any) => `/${v.webp} ${v.w}w`).join(', ');
        const fallback = '/' + (rec.variants.find((v: any) => v.w === 960)?.webp || rec.variants.at(-1).webp);
        const width = rec.width || '';
        const height = rec.height || '';
        const sizes = '(max-width: 768px) 100vw, 50vw';

        return `\n<picture>\n  <source type="image/avif" srcset="${avifSet}" sizes="${sizes}">\n  <source type="image/webp" srcset="${webpSet}" sizes="${sizes}">\n  <img ${pre} src="${fallback}" ${post} width="${width}" height="${height}" loading="lazy" decoding="async">\n</picture>`;
      });
    }
  };
}



