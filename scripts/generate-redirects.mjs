import fs from 'fs';

const urlMap = JSON.parse(fs.readFileSync('url-map.json', 'utf8'));

const redirects = urlMap.map(({ old: source, new: destination }) => ({
  source,
  destination,
  permanent: true,
}));

// Hub redirects (not in url-map.json)
redirects.push(
  { source: '/sypuchie-materialy/', destination: '/uk/materialy/', permanent: true },
  { source: '/sypuchi-materialy/', destination: '/uk/materialy/', permanent: true },
  { source: '/arenda-spetstehniki/', destination: '/uk/orenda/', permanent: true },
  { source: '/orenda-spetstehniky/', destination: '/uk/orenda/', permanent: true },
  { source: '/zemlyanie-raboti/', destination: '/uk/roboty/', permanent: true },
  { source: '/zemlyani-roboty/', destination: '/uk/roboty/', permanent: true },
  { source: '/o-kompanii/', destination: '/uk/pro-kompaniyu/', permanent: true },
  { source: '/pro-kompaniyu/', destination: '/uk/pro-kompaniyu/', permanent: true },
  { source: '/kontakti/', destination: '/uk/kontakty/', permanent: true },
  { source: '/kontakty/', destination: '/uk/kontakty/', permanent: true },
  { source: '/dostavka-i-oplata/', destination: '/uk/kontakty/', permanent: true },
  { source: '/blog/', destination: '/uk/blog/', permanent: true },
);

// Preserve existing vercel.json (headers from Phase 0)
const existing = fs.existsSync('vercel.json')
  ? JSON.parse(fs.readFileSync('vercel.json', 'utf8'))
  : {};

existing.redirects = redirects;

fs.writeFileSync('vercel.json', JSON.stringify(existing, null, 2));
console.log(`Generated ${redirects.length} redirects in vercel.json`);
