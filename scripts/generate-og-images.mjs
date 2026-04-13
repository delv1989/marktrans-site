import sharp from 'sharp';
import { readdir, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONFIG = { width: 1200, height: 630, bg: '#0F0F0F', accent: '#FFD700', text: '#FFFFFF', muted: '#666666', outputDir: 'public/og' };

function buildSVG({ title, price, category, unit, locale }) {
  const safe = (title || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const display = safe.length > 30 ? safe.slice(0, 28) + '...' : safe;
  const brand = locale === 'uk' ? 'MARKTRANS · КИЇВ' : 'MARKTRANS · КИЕВ';
  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="${CONFIG.bg}"/>
  <rect x="0" y="0" width="1200" height="60" fill="${CONFIG.accent}"/>
  <text x="60" y="40" font-family="sans-serif" font-size="24" font-weight="700" fill="${CONFIG.bg}" letter-spacing="2">${(category || '').toUpperCase()}</text>
  <text x="60" y="220" font-family="sans-serif" font-size="64" font-weight="900" fill="${CONFIG.text}" letter-spacing="-2">${display}</text>
  ${price ? `<text x="60" y="380" font-family="monospace" font-size="28" fill="${CONFIG.muted}" letter-spacing="2">${locale === 'uk' ? 'ВІД' : 'ОТ'}</text>
  <text x="60" y="470" font-family="sans-serif" font-size="120" font-weight="900" fill="${CONFIG.accent}" letter-spacing="-3">${price}</text>
  <text x="60" y="520" font-family="monospace" font-size="32" fill="${CONFIG.text}" letter-spacing="2">₴/${unit || 'т'}</text>` : ''}
  <line x1="60" y1="570" x2="1140" y2="570" stroke="${CONFIG.accent}" stroke-width="2"/>
  <text x="60" y="605" font-family="monospace" font-size="20" font-weight="700" fill="${CONFIG.muted}" letter-spacing="3">${brand}</text>
  <text x="1140" y="605" font-family="monospace" font-size="20" fill="${CONFIG.muted}" letter-spacing="3" text-anchor="end">marktrans.com.ua</text>
</svg>`;
}

async function gen(collectionName, urlPrefix) {
  const dir = `src/content/${collectionName}`;
  if (!existsSync(dir)) return 0;
  let count = 0;
  for (const locale of ['uk', 'ru']) {
    const locDir = path.join(dir, locale);
    if (!existsSync(locDir)) continue;
    const files = await readdir(locDir);
    for (const file of files) {
      if (!file.endsWith('.md')) continue;
      const raw = await readFile(path.join(locDir, file), 'utf8');
      const { data } = matter(raw);
      const slug = data.slug || file.replace('.md', '');
      const outDir = urlPrefix ? path.join(CONFIG.outputDir, locale, urlPrefix) : path.join(CONFIG.outputDir, locale);
      await mkdir(outDir, { recursive: true });
      const svg = buildSVG({ title: data.title || data.h1 || '', price: data.priceFrom, category: data.category || collectionName, unit: collectionName === 'materials' ? 'т' : collectionName === 'equipment' ? 'год' : 'м²', locale });
      await sharp(Buffer.from(svg)).jpeg({ quality: 85, progressive: true }).toFile(path.join(outDir, `${slug}.jpg`));
      count++;
    }
  }
  return count;
}

console.log('Generating og:images...');
const start = Date.now();
const stats = {
  materials: await gen('materials', 'materialy'),
  equipment: await gen('equipment', 'orenda'),
  works: await gen('works', 'roboty'),
  info: await gen('info', ''),
};
const total = Object.values(stats).reduce((a, b) => a + b, 0);
console.log(`Done: ${total} images in ${((Date.now() - start) / 1000).toFixed(1)}s`);
console.log('Breakdown:', stats);
