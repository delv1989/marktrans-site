// Централізовані дані секцій головної сторінки
// Коли піде на headless WP — тут буде WPGraphQL client

export interface ContentCard {
  num: string;
  title: string;
  subtitle?: string;
  image: string;
  href: string;
  alt: string;
}

export const materials: ContentCard[] = [
  {
    num: '01',
    title: 'Пісок',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop&q=80',
    href: '/uk/materialy/pisok/',
    alt: 'Пісок річковий',
  },
  {
    num: '02',
    title: 'Щебінь',
    image: 'https://images.unsplash.com/photo-1580706483913-b6ea7db27c34?w=800&h=600&fit=crop&q=80',
    href: '/uk/materialy/shcheben/',
    alt: 'Щебінь гранітний',
  },
  {
    num: '03',
    title: 'Вторинний\nщебінь',
    image: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=800&h=600&fit=crop&q=80',
    href: '/uk/materialy/vtorynnyi-shcheben/',
    alt: 'Вторинний щебінь',
  },
  {
    num: '04',
    title: 'Підсипка',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80',
    href: '/uk/materialy/pidsypka/',
    alt: 'Підсипка',
  },
  {
    num: '05',
    title: 'Солі',
    image: 'https://images.unsplash.com/photo-1482731215275-a1f151646268?w=800&h=600&fit=crop&q=80',
    href: '/uk/materialy/soli/',
    alt: 'Технічна сіль',
  },
  {
    num: '06',
    title: 'Ґрунт',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop&q=80',
    href: '/uk/materialy/grunt/',
    alt: 'Ґрунт',
  },
  {
    num: '07',
    title: 'Камінь\nбут',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&h=600&fit=crop&q=80',
    href: '/uk/materialy/kamin-but/',
    alt: 'Камінь бут',
  },
  {
    num: '08',
    title: 'Підсипка',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop&q=80&sat=-50',
    href: '/uk/materialy/pidsypka-shchebeneva/',
    alt: 'Підсипка щебенева',
  },
  {
    num: '09',
    title: 'ЩПС',
    image: 'https://images.unsplash.com/photo-1621922688758-1cafab2b0191?w=800&h=600&fit=crop&q=80',
    href: '/uk/materialy/shchps/',
    alt: 'Щебенево-піщана суміш',
  },
];

export const equipment: ContentCard[] = [
  {
    num: '01',
    title: 'Оренда\nсамоскида',
    subtitle: 'Вантажопідйомність 25 т',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop&q=80',
    href: '/uk/orenda/samoskyd/',
    alt: 'Самоскид Mercedes ACTROS',
  },
  {
    num: '02',
    title: 'Оренда\nбульдозера',
    subtitle: 'Планування та котловани',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop&q=80',
    href: '/uk/orenda/buldozer/',
    alt: 'Бульдозер',
  },
  {
    num: '03',
    title: 'Оренда\nнавантажувача',
    subtitle: 'Фронтальний · телескопічний',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop&q=80',
    href: '/uk/orenda/navantazhuvach/',
    alt: 'Фронтальний навантажувач',
  },
  {
    num: '04',
    title: 'Оренда\nгідромолота',
    subtitle: 'Демонтаж · роздроблення',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&h=800&fit=crop&q=80',
    href: '/uk/orenda/gidromolot/',
    alt: 'Гідромолот',
  },
];

export const works: ContentCard[] = [
  {
    num: '01',
    title: 'Асфальтування\nдоріг',
    image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&h=400&fit=crop&q=80',
    href: '/uk/roboty/asfaltuvannya/',
    alt: 'Асфальтування доріг',
  },
  {
    num: '02',
    title: 'Щебеневі\nподушки',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80',
    href: '/uk/roboty/shchebenevi-podushky/',
    alt: 'Щебеневі подушки',
  },
  {
    num: '03',
    title: 'Планування\nтериторії',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop&q=80',
    href: '/uk/roboty/planuvannya/',
    alt: 'Планування території',
  },
  {
    num: '04',
    title: 'Вивіз\nґрунту',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&q=80',
    href: '/uk/roboty/vyviz-gruntu/',
    alt: 'Вивіз ґрунту',
  },
  {
    num: '05',
    title: 'Будівництво\nдоріг',
    image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&h=400&fit=crop&q=75',
    href: '/uk/roboty/budivnyctvo-dorig/',
    alt: 'Будівництво доріг',
  },
  {
    num: '06',
    title: 'Демонтаж\nспоруд',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop&q=80',
    href: '/uk/roboty/demontazh/',
    alt: 'Демонтаж будівель',
  },
  {
    num: '07',
    title: 'Вивіз\nсміття',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop&q=80',
    href: '/uk/roboty/vyviz-smittya/',
    alt: 'Вивіз будівельного сміття',
  },
  {
    num: '08',
    title: 'Розробка\nкотлованів',
    image: 'https://images.unsplash.com/photo-1621922688758-1cafab2b0191?w=600&h=400&fit=crop&q=80',
    href: '/uk/roboty/kotlovany/',
    alt: 'Розробка котлованів',
  },
];
