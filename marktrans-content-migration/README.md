# MARKTRANS Content Migration Package

Згенеровано парсером з WP export (146 товарів). Містить повний контент, зображення і URL map для інтеграції в існуючий Astro проект.

## Статистика

- **146 markdown файлів** (73 концепти × 2 локалі uk/ru)
  - Materials: 30 концептів × 2 = 60 файлів
  - Equipment: 35 концептів × 2 = 70 файлів
  - Works: 8 концептів × 2 = 16 файлів
- **204 зображення**:
  - 125 product (featured + gallery)
  - 79 inline (вставлені в тіло статті)
- **146 URL map entries** для 301 redirects
- **Загальний контент**: ~335 KB тексту, середня стаття ~2300 символів

## Структура пакету

```
src/
  content/
    config.ts                 # Astro content collections schema
    materials/
      uk/*.md                 # 30 uk material pages
      ru/*.md                 # 30 ru material pages
    equipment/
      uk/*.md
      ru/*.md
    works/
      uk/*.md
      ru/*.md

public/
  uploads/
    products/                 # 125 featured + gallery images
    img/                      # 79 inline images (різні підпапки зі старого WP)

url-map.json                  # Old WP URL → New Astro URL для 301 redirects
parser-report.md              # Статистика парсера
README.md                     # Цей файл
```

## Frontmatter schema

Кожен markdown файл має frontmatter:

```yaml
---
title: "Назва товару (короткий)"
h1: "Повний H1 як на старому сайті"
metaTitle: "Google SERP title ≤60 chars"
metaDescription: "Google SERP description ≤160 chars"
locale: uk | ru
category: "pesok" | "shcheben" | "daf" | ...  # optional, категорія групування
slug: "pisok-richkovyy"                        # URL slug у цій локалі
conceptId: "pesok-rechnoy"                     # ID для пари uk↔ru
oldUrl: "/sypuchi-materialy/pisok/pisok-richkovyy/"  # для 301
priceFrom: 230                                 # гривні за тонну/годину/м²
image: "/uploads/products/pesok-rechnoj.jpg"   # featured image
gallery:                                       # optional, для галереї
  - /uploads/products/pesok-rechnoj.jpg
  - /uploads/products/pesok_rechnoi_1.jpg
---
```

## Як інтегрувати в проект

### 1. Видалити старі тестові сторінки

```bash
# В корені marktrans-site/
rm -rf src/content/materials src/content/equipment src/content/works
rm -rf src/pages/uk/materialy/[slug].astro   # якщо є
rm -rf src/pages/uk/orenda/[slug].astro
rm -rf src/pages/uk/roboty/[slug].astro
```

### 2. Скопіювати новий контент

```bash
cp -r content-migration/src/content/* src/content/
cp -r content-migration/public/uploads/* public/uploads/
cp content-migration/url-map.json .
```

### 3. Оновити `astro.config.mjs` для i18n

```js
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://marktrans.com.ua',
  i18n: {
    defaultLocale: 'uk',
    locales: ['uk', 'ru'],
    routing: {
      prefixDefaultLocale: true,   // варіант C: обидві локалі з префіксом
    },
  },
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'uk',
      locales: { uk: 'uk-UA', ru: 'ru-UA' },
    },
  })],
})
```

### 4. Створити dynamic routes

`src/pages/[locale]/materialy/[slug].astro`:

```astro
---
import { getCollection } from 'astro:content'
import BaseLayout from '@/layouts/BaseLayout.astro'

export async function getStaticPaths() {
  const materials = await getCollection('materials')
  return materials.map((entry) => ({
    params: { locale: entry.data.locale, slug: entry.data.slug },
    props: { entry },
  }))
}

const { entry } = Astro.props
const { Content } = await entry.render()
---
<BaseLayout
  title={entry.data.metaTitle}
  description={entry.data.metaDescription}
  locale={entry.data.locale}
>
  <article>
    <h1>{entry.data.h1}</h1>
    {entry.data.image && <img src={entry.data.image} alt={entry.data.title} />}
    <Content />
  </article>
</BaseLayout>
```

Аналогічно для `/[locale]/orenda/[slug].astro` (collection=`equipment`) та `/[locale]/roboty/[slug].astro` (collection=`works`).

### 5. 301 redirects у `vercel.json`

Прочитати `url-map.json` і згенерувати redirects блок:

```js
// scripts/generate-redirects.mjs
import urlMap from './url-map.json' assert { type: 'json' }
import fs from 'fs'

const redirects = urlMap.map(({ old, new: dest }) => ({
  source: old,
  destination: dest,
  permanent: true,
}))

const vercelJson = JSON.parse(fs.readFileSync('vercel.json', 'utf8'))
vercelJson.redirects = redirects
fs.writeFileSync('vercel.json', JSON.stringify(vercelJson, null, 2))
```

Це сгенерує 146 permanent redirects у вигляді:

```json
{
  "redirects": [
    {"source": "/sypuchie-materialy/pesok/pesok-rechnoj/", "destination": "/ru/materialy/pesok-rechnoj/", "permanent": true},
    ...
  ]
}
```

**КРИТИЧНО**: ці redirects мають бути активні до переключення domain marktrans.com.ua на новий проект, інакше втратимо всі rankings зі старих URLs.

## Known issues / TODO

1. **Один inline image не знайдений**: `img/sol-tehnicheskaya/certificate.jpg` — використати placeholder або прибрати з контенту. Перевірити вручну `src/content/materials/*/sol-tehnicheskaja.md`.

2. **URL map не включає hub-сторінки**: `/sypuchie-materialy/`, `/arenda-spetstehniki/`, `/zemlyanie-raboti/` → треба додати redirects на `/ru/materialy/`, `/ru/orenda/`, `/ru/roboty/`. Аналогічно для uk. Це зроби в scripts/generate-redirects.mjs як extra entries.

3. **URL map не включає інфо-сторінки**: `/o-kompanii/`, `/kontakti/`, `/dostavka-i-oplata/`, `/blog/*` — ці сторінки існували на старому сайті, треба окремий URL map файл коли створиш відповідні нові сторінки.

4. **Slugs збережені з WP без модифікації** — це спеціально, бо Google вже ранжує `/arenda-spetstehniki/iveco-stralis/` і ми не хочемо ламати link equity. Тому на новому сайті URL буде `/ru/orenda/iveco-stralis` з тим самим slug'ом.

5. **Переклади uk/ru НЕ ідентичні за довжиною** — старий сайт має різну якість перекладу по різних сторінках. Деякі uk-версії коротші за ru (бо ru було first, uk переклали пізніше). Це OK — ми не правимо контент, тільки переносимо. Покращення перекладів — окрема задача пізніше.

## Пригадайте що робити потім

Після інтеграції цього пакету:
- Phase 2: Створити hub-сторінки (`/uk/materialy/`, `/ru/orenda/` і т.д.) які list'ять дочірні
- Phase 3: JSON-LD per-page schemas (`Product`, `Service`)
- Phase 4: Мігрувати блог і інфо-сторінки (`/pro-kompaniyu/`, `/kontakty/`, `/dostavka-i-oplata/`)
- Phase 5: Cutover: зняти noindex з vercel.app, переключити DNS marktrans.com.ua на новий проект
