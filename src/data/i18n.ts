// Centralized i18n strings for uk/ru

export type Locale = 'uk' | 'ru';

export const t = {
  home: {
    uk: {
      title: 'MARKTRANS — Доставка сипучих будматеріалів у Києві',
      description: 'Гранітний щебінь, пісок, асфальт, бетон — власним автопарком з кар\u2019єру до вас у день замовлення. Київ і Київська область з 2015 року.',
      heroEyebrow: 'Київ · Київська область · З 2015 року',
      heroLine1: 'МІЦНИЙ ФУНДАМЕНТ', heroLine2: 'ПОЧИНАЄТЬСЯ З', heroAccent: 'ЯКІСНОГО МАТЕРІАЛУ',
      heroLead: "Гранітний щебінь, пісок, асфальт, бетон — власним автопарком з кар'єру до вас у день замовлення. Працюємо по всій Київській області з 2015 року. Чесні ціни, гарантований об'єм, оплата після приймання.",
      ctaPrimary: 'Замовити доставку →', ctaSecondary: 'Розрахувати вартість',
      materialsEyebrow: '01 / КАТАЛОГ', materialsTitle: 'СИПУЧІ', materialsAccent: 'МАТЕРІАЛИ',
      equipmentEyebrow: '02 / ТЕХНІКА', equipmentTitle: 'ОРЕНДА', equipmentAccent: 'СПЕЦТЕХНІКИ',
      servicesEyebrow: '03 / ПОСЛУГИ', servicesTitle: 'БУДІВЕЛЬНІ', servicesAccent: 'РОБОТИ',
    },
    ru: {
      title: 'MARKTRANS — Доставка сыпучих стройматериалов в Киеве',
      description: 'Гранитный щебень, песок, асфальт, бетон — собственным автопарком с карьера к вам в день заказа. Киев и Киевская область с 2015 года.',
      heroEyebrow: 'Киев · Киевская область · С 2015 года',
      heroLine1: 'КРЕПКИЙ ФУНДАМЕНТ', heroLine2: 'НАЧИНАЕТСЯ С', heroAccent: 'КАЧЕСТВЕННОГО МАТЕРИАЛА',
      heroLead: 'Гранитный щебень, песок, асфальт, бетон — собственным автопарком с карьера к вам в день заказа. Работаем по всей Киевской области с 2015 года. Честные цены, гарантированный объём, оплата после приёмки.',
      ctaPrimary: 'Заказать доставку →', ctaSecondary: 'Рассчитать стоимость',
      materialsEyebrow: '01 / КАТАЛОГ', materialsTitle: 'СЫПУЧИЕ', materialsAccent: 'МАТЕРИАЛЫ',
      equipmentEyebrow: '02 / ТЕХНИКА', equipmentTitle: 'АРЕНДА', equipmentAccent: 'СПЕЦТЕХНИКИ',
      servicesEyebrow: '03 / УСЛУГИ', servicesTitle: 'СТРОИТЕЛЬНЫЕ', servicesAccent: 'РАБОТЫ',
    },
  },
} as const;
