# Custom Domain Setup: marktrans.com.ua → Vercel

## Передумови
- Vercel project: `marktrans-site` (вже задеплоєний)
- Domain: `marktrans.com.ua` (зараз на Cityhost/Cloudflare)
- Cloudflare NS вже настроєний (з 2026-04-01)

## Крок 1: Додати домен у Vercel

```bash
cd ~/marktrans-site
vercel domains add marktrans.com.ua
```

Або через Dashboard: vercel.com → Project Settings → Domains → Add `marktrans.com.ua`

## Крок 2: DNS записи у Cloudflare

В Cloudflare Dashboard → DNS:

| Type | Name | Content | Proxy |
|---|---|---|---|
| CNAME | `@` (root) | `cname.vercel-dns.com` | DNS only (grey cloud) |
| CNAME | `www` | `cname.vercel-dns.com` | DNS only (grey cloud) |

**ВАЖЛИВО:** Vercel не працює коректно з Cloudflare Proxy (orange cloud). Встановіть "DNS only" (grey cloud) для обох записів.

## Крок 3: Верифікація

```bash
vercel domains verify marktrans.com.ua
```

Або почекайте 5-10 хвилин — Vercel автоматично видасть SSL і верифікує.

## Крок 4: Перевірка

```bash
curl -I https://marktrans.com.ua
# Має повернути 302 → /uk/

curl -I https://www.marktrans.com.ua
# Має повернути 301 → https://marktrans.com.ua
```

## Крок 5: Redirects від старого сайту

Якщо старий WordPress сайт живе на Cityhost, і ви хочете перенаправити ТІЛЬКИ головний домен на Vercel, а WP залишити на api.marktrans.com.ua:

```
# В Cloudflare DNS:
CNAME  @      cname.vercel-dns.com    (DNS only)
CNAME  www    cname.vercel-dns.com    (DNS only)
CNAME  api    cityhost-ip-or-cname    (DNS only або Proxy)
CNAME  admin  cityhost-ip-or-cname    (DNS only)
```

## Після підключення

1. Оновити `astro.config.mjs` → `site: 'https://marktrans.com.ua'` (вже встановлено)
2. Перевірити canonical URLs і OG URLs — мають бути `https://marktrans.com.ua/uk/...`
3. Оновити Google Search Console — додати нову property
4. Submit sitemap: `https://marktrans.com.ua/sitemap-index.xml`
