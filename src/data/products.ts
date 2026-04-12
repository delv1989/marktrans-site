// Дані по матеріалам — потім мігрує на WPGraphQL Content Collections

export interface Product {
  slug: string;
  name: string;
  category: string;
  fraction?: string;
  spec?: string;
  price: number;
  unit: string;
  badge?: string;
  image: string;
  alt: string;
  description?: string;
}

export const shchebenProducts: Product[] = [
  { slug: 'shcheben-0-5',   name: 'Щебінь 0-5 (відсів)', category: 'shcheben', fraction: '0-5 мм',  spec: 'ДРІБНА ФРАКЦІЯ · ПІДСИПКА', price: 170, unit: 'тонна', badge: 'ГРАНІТНИЙ', image: 'https://picsum.photos/seed/mt-shch-05/800/600', alt: 'Відсів 0-5 мм' },
  { slug: 'shcheben-5-10',  name: 'Щебінь 5-10',         category: 'shcheben', fraction: '5-10 мм', spec: 'ДСТУ Б В.2.7-75-98',       price: 265, unit: 'тонна', badge: 'ГРАНІТНИЙ', image: 'https://picsum.photos/seed/mt-shch-510/800/600', alt: 'Щебінь 5-10 мм' },
  { slug: 'shcheben-5-20',  name: 'Щебінь 5-20',         category: 'shcheben', fraction: '5-20 мм', spec: 'БЕТОН · ТРОТУАРНА ПЛИТКА',  price: 255, unit: 'тонна', badge: 'ГРАНІТНИЙ', image: 'https://picsum.photos/seed/mt-shch-520/800/600', alt: 'Щебінь 5-20 мм' },
  { slug: 'shcheben-10-20', name: 'Щебінь 10-20',        category: 'shcheben', fraction: '10-20 мм', spec: 'ДОРОЖНЄ ПОКРИТТЯ',         price: 250, unit: 'тонна', badge: 'ГРАНІТНИЙ', image: 'https://picsum.photos/seed/mt-shch-1020/800/600', alt: 'Щебінь 10-20 мм' },
  { slug: 'shcheben-20-40', name: 'Щебінь 20-40',        category: 'shcheben', fraction: '20-40 мм', spec: 'ФУНДАМЕНТ · ДОРОГИ',        price: 245, unit: 'тонна', badge: 'ГРАНІТНИЙ', image: 'https://picsum.photos/seed/mt-shch-2040/800/600', alt: 'Щебінь 20-40 мм' },
  { slug: 'shcheben-40-70', name: 'Щебінь 40-70',        category: 'shcheben', fraction: '40-70 мм', spec: 'ДОРОЖНЄ БУДІВНИЦТВО',       price: 230, unit: 'тонна', badge: 'ГРАНІТНИЙ', image: 'https://picsum.photos/seed/mt-shch-4070/800/600', alt: 'Щебінь 40-70 мм' },
  { slug: 'shcheben-70-120', name: 'Щебінь 70-120',      category: 'shcheben', fraction: '70-120 мм', spec: 'ВЕЛИКОКАЛІБЕРНИЙ',          price: 220, unit: 'тонна', badge: 'ГРАНІТНИЙ', image: 'https://picsum.photos/seed/mt-shch-70120/800/600', alt: 'Щебінь 70-120 мм' },
  { slug: 'but-kamin',      name: 'Бут камінь',          category: 'shcheben', spec: 'ФУНДАМЕНТИ · ПІДПІРНІ СТІНИ', price: 210, unit: 'тонна', image: 'https://picsum.photos/seed/mt-but/800/600', alt: 'Бут камінь' },
  { slug: 'shcheben-dekor',  name: 'Щебінь декоративний', category: 'shcheben', spec: 'ЛАНДШАФТНИЙ ДИЗАЙН · БІЛИЙ',   price: 380, unit: 'тонна', badge: 'ДЕКОРАТИВНИЙ', image: 'https://picsum.photos/seed/mt-shch-dekor/800/600', alt: 'Декоративний білий щебінь' },
];

export const faqShcheben = [
  { question: 'Скільки тонн щебню в кубометрі?', answer: '1 м³ гранітного щебню фракції 5-20 важить приблизно 1.4 тонни. Для фракції 20-40 — близько 1.35 тонни.' },
  { question: 'Який щебінь кращий для фундаменту?', answer: 'Для стрічкового фундаменту — гранітний 20-40 мм. Для плитного — 5-20 мм. Морозостійкість не нижче F300.' },
  { question: 'Різниця між гранітним і вапняковим щебнем?', answer: 'Гранітний міцніший (М1200+) і морозостійкіший (F300+). Вапняковий дешевший, підходить для легких конструкцій.' },
  { question: 'Що таке лещадність?', answer: 'Відсоток плоских та голковідних зерен. Для бетону оптимально ≤15%. Чим менше — тим краще зчеплення.' },
  { question: 'Яка морозостійкість гранітного щебню?', answer: 'Від F300 до F400 — витримує 300-400 циклів замерзання/відтавання без руйнування.' },
  { question: 'Чи доставляєте в Броварщину?', answer: 'Так, доставляємо по всій Київській області в радіусі 200 км. Бровари, Ірпінь, Вишгород, Васильків — звичайні маршрути.' },
  { question: 'Як оформити замовлення?', answer: 'Телефоном +38 050 420 42 29, через Telegram @marktrans_bot, або через форму на сайті. Диспетчер доступний 24/7.' },
  { question: 'Яка мінімальна партія?', answer: 'Стандартний мінімум — 1 повна машина (20 тонн ACTROS). Менші об\'єми (від 5 тонн) — за домовленістю.' },
];
