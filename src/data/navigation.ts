// Централізовані дані для навігації — використовуються Header + Footer + sitemap

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: Record<'uk' | 'ru', NavItem[]> = {
  uk: [
    { label: 'Матеріали', href: '/uk/materialy/' },
    { label: 'Оренда', href: '/uk/orenda/' },
    { label: 'Роботи', href: '/uk/roboty/' },
    { label: 'Блог', href: '/uk/blog/' },
    { label: 'Про компанію', href: '/uk/pro-kompaniyu/' },
    { label: 'Контакти', href: '/uk/kontakty/' },
  ],
  ru: [
    { label: 'Материалы', href: '/ru/materialy/' },
    { label: 'Аренда', href: '/ru/orenda/' },
    { label: 'Работы', href: '/ru/roboty/' },
    { label: 'Блог', href: '/ru/blog/' },
    { label: 'О компании', href: '/ru/pro-kompaniyu/' },
    { label: 'Контакты', href: '/ru/kontakty/' },
  ],
};

export const contacts = {
  phones: ['+38 050 420 42 29', '+38 068 742 60 61'],
  phonesRaw: ['+380504204229', '+380687426061'],
  email: 'service@marktrans.com.ua',
  address: {
    uk: { city: 'Київ', street: 'вул. Жилянська, 101', zip: '01135' },
    ru: { city: 'Киев', street: 'ул. Жилянская, 101', zip: '01135' },
  },
  hours: {
    uk: 'Пн-Нд · 08:00 — 20:00',
    ru: 'Пн-Вс · 08:00 — 20:00',
  },
} as const;
