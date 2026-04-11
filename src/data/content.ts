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
    image: 'https://picsum.photos/seed/marktrans-sand/800/600',
    href: '/uk/materialy/pisok/',
    alt: 'Пісок річковий',
  },
  {
    num: '02',
    title: 'Щебінь',
    image: 'https://picsum.photos/seed/marktrans-gravel/800/600',
    href: '/uk/materialy/shcheben/',
    alt: 'Щебінь гранітний',
  },
  {
    num: '03',
    title: 'Вторинний\nщебінь',
    image: 'https://picsum.photos/seed/marktrans-recycled-gravel/800/600',
    href: '/uk/materialy/vtorynnyi-shcheben/',
    alt: 'Вторинний щебінь',
  },
  {
    num: '04',
    title: 'Підсипка',
    image: 'https://picsum.photos/seed/marktrans-bedding/800/600',
    href: '/uk/materialy/pidsypka/',
    alt: 'Підсипка',
  },
  {
    num: '05',
    title: 'Солі',
    image: 'https://picsum.photos/seed/marktrans-salt/800/600',
    href: '/uk/materialy/soli/',
    alt: 'Технічна сіль',
  },
  {
    num: '06',
    title: 'Ґрунт',
    image: 'https://picsum.photos/seed/marktrans-soil/800/600',
    href: '/uk/materialy/grunt/',
    alt: 'Ґрунт',
  },
  {
    num: '07',
    title: 'Камінь\nбут',
    image: 'https://picsum.photos/seed/marktrans-boulder/800/600',
    href: '/uk/materialy/kamin-but/',
    alt: 'Камінь бут',
  },
  {
    num: '08',
    title: 'Підсипка',
    image: 'https://picsum.photos/seed/marktrans-bedding-two/800/600',
    href: '/uk/materialy/pidsypka-shchebeneva/',
    alt: 'Підсипка щебенева',
  },
  {
    num: '09',
    title: 'ЩПС',
    image: 'https://picsum.photos/seed/marktrans-shchps/800/600',
    href: '/uk/materialy/shchps/',
    alt: 'Щебенево-піщана суміш',
  },
];

export const equipment: ContentCard[] = [
  {
    num: '01',
    title: 'Оренда\nсамоскида',
    subtitle: 'Вантажопідйомність 25 т',
    image: 'https://picsum.photos/seed/marktrans-tipper/1200/800',
    href: '/uk/orenda/samoskyd/',
    alt: 'Самоскид Mercedes ACTROS',
  },
  {
    num: '02',
    title: 'Оренда\nбульдозера',
    subtitle: 'Планування та котловани',
    image: 'https://picsum.photos/seed/marktrans-bulldozer/1200/800',
    href: '/uk/orenda/buldozer/',
    alt: 'Бульдозер',
  },
  {
    num: '03',
    title: 'Оренда\nнавантажувача',
    subtitle: 'Фронтальний · телескопічний',
    image: 'https://picsum.photos/seed/marktrans-loader/1200/800',
    href: '/uk/orenda/navantazhuvach/',
    alt: 'Фронтальний навантажувач',
  },
  {
    num: '04',
    title: 'Оренда\nгідромолота',
    subtitle: 'Демонтаж · роздроблення',
    image: 'https://picsum.photos/seed/marktrans-hammer/1200/800',
    href: '/uk/orenda/gidromolot/',
    alt: 'Гідромолот',
  },
];

export const works: ContentCard[] = [
  {
    num: '01',
    title: 'Асфальтування\nдоріг',
    image: 'https://picsum.photos/seed/marktrans-asphalt/600/400',
    href: '/uk/roboty/asfaltuvannya/',
    alt: 'Асфальтування доріг',
  },
  {
    num: '02',
    title: 'Щебеневі\nподушки',
    image: 'https://picsum.photos/seed/marktrans-cushion/600/400',
    href: '/uk/roboty/shchebenevi-podushky/',
    alt: 'Щебеневі подушки',
  },
  {
    num: '03',
    title: 'Планування\nтериторії',
    image: 'https://picsum.photos/seed/marktrans-grading/600/400',
    href: '/uk/roboty/planuvannya/',
    alt: 'Планування території',
  },
  {
    num: '04',
    title: 'Вивіз\nґрунту',
    image: 'https://picsum.photos/seed/marktrans-soil-removal/600/400',
    href: '/uk/roboty/vyviz-gruntu/',
    alt: 'Вивіз ґрунту',
  },
  {
    num: '05',
    title: 'Будівництво\nдоріг',
    image: 'https://picsum.photos/seed/marktrans-roads/600/400',
    href: '/uk/roboty/budivnyctvo-dorig/',
    alt: 'Будівництво доріг',
  },
  {
    num: '06',
    title: 'Демонтаж\nспоруд',
    image: 'https://picsum.photos/seed/marktrans-demo/600/400',
    href: '/uk/roboty/demontazh/',
    alt: 'Демонтаж будівель',
  },
  {
    num: '07',
    title: 'Вивіз\nсміття',
    image: 'https://picsum.photos/seed/marktrans-waste/600/400',
    href: '/uk/roboty/vyviz-smittya/',
    alt: 'Вивіз будівельного сміття',
  },
  {
    num: '08',
    title: 'Розробка\nкотлованів',
    image: 'https://picsum.photos/seed/marktrans-excavation/600/400',
    href: '/uk/roboty/kotlovany/',
    alt: 'Розробка котлованів',
  },
];
