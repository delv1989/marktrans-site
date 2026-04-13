import sharp from 'sharp';
import { mkdir } from 'fs/promises';

const svg = `<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#0F0F0F"/>
  <text x="256" y="280" font-family="sans-serif" font-size="120" font-weight="900" fill="#FFD700" text-anchor="middle" letter-spacing="-6">MT</text>
  <line x1="180" y1="320" x2="332" y2="320" stroke="#FFD700" stroke-width="4"/>
  <text x="256" y="360" font-family="monospace" font-size="24" fill="#FFFFFF" text-anchor="middle" letter-spacing="3">MARKTRANS</text>
</svg>`;

await mkdir('public', { recursive: true });
const buffer = Buffer.from(svg);

for (const size of [192, 512, 180]) {
  const out = size === 180 ? 'public/apple-touch-icon.png' : `public/icon-${size}.png`;
  await sharp(buffer).resize(size, size).png().toFile(out);
  console.log(`✓ ${out}`);
}

await sharp(buffer).resize(32, 32).png().toFile('public/favicon.ico');
console.log('✓ public/favicon.ico');
