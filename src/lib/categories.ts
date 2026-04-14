export const categoryLabels: Record<string, { uk: string; ru: string }> = {
  shcheben: { uk: 'Щебінь', ru: 'Щебень' },
  pesok: { uk: 'Пісок', ru: 'Песок' },
  asfaltobeton: { uk: 'Асфальтобетон', ru: 'Асфальтобетон' },
  'vtorichnyy-shcheben': { uk: 'Вторинний щебінь', ru: 'Вторичный щебень' },
  'kamen-but': { uk: 'Камінь бут', ru: 'Камень бут' },
  grunt: { uk: 'Ґрунт', ru: 'Грунт' },
  shchps: { uk: 'ЩПС', ru: 'ЩПС' },
  sol: { uk: 'Сіль технічна', ru: 'Соль техническая' },
  pidsypka: { uk: 'Підсипка', ru: 'Подсыпка' },
  beton: { uk: 'Бетон', ru: 'Бетон' },
};

export function getCategoryLabel(category: string, locale: 'uk' | 'ru'): string {
  return categoryLabels[category]?.[locale] ?? category;
}

export function getAllCategories(): string[] {
  return Object.keys(categoryLabels);
}
