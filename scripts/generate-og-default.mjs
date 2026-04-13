import sharp from 'sharp';
import { mkdirSync } from 'fs';

const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0F0F0F"/>
  <rect x="0" y="0" width="8" height="630" fill="#FFD700"/>
  <text x="600" y="260" font-family="sans-serif" font-size="140" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="-4">MARKTRANS</text>
  <line x1="350" y1="310" x2="850" y2="310" stroke="#FFD700" stroke-width="4"/>
  <text x="600" y="380" font-family="sans-serif" font-size="30" fill="#999999" text-anchor="middle" letter-spacing="6">ДОСТАВКА СИПУЧИХ МАТЕРІАЛІВ</text>
  <text x="600" y="430" font-family="sans-serif" font-size="26" fill="#666666" text-anchor="middle" letter-spacing="4">КИЇВ · КИЇВСЬКА ОБЛАСТЬ · З 2015</text>
  <text x="600" y="560" font-family="monospace" font-size="20" fill="#444444" text-anchor="middle" letter-spacing="3">marktrans.com.ua · +38 050 420 42 29</text>
</svg>
`;

mkdirSync('public', { recursive: true });
await sharp(Buffer.from(svg))
  .jpeg({ quality: 85, progressive: true })
  .toFile('public/og-default.jpg');

console.log('Generated public/og-default.jpg (1200×630)');
