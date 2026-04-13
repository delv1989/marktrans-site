import { getCollection } from 'astro:content';

export type CollectionName = 'materials' | 'equipment' | 'works' | 'info';
export type Locale = 'uk' | 'ru';

export interface HreflangAlternates {
  uk?: string;
  ru?: string;
}

const COLLECTION_PATHS: Record<CollectionName, string> = {
  materials: '/materialy',
  equipment: '/orenda',
  works: '/roboty',
  info: '',
};

export async function getHreflangAlternatesByConcept(
  conceptId: string,
  collectionName: CollectionName
): Promise<HreflangAlternates> {
  const entries = await getCollection(collectionName);
  const pairs = entries.filter(
    (e) => (e.data as Record<string, unknown>).conceptId === conceptId
  );

  const result: HreflangAlternates = {};
  const prefix = COLLECTION_PATHS[collectionName];

  for (const entry of pairs) {
    const data = entry.data as Record<string, unknown>;
    const loc = data.locale as Locale;
    const slug = data.slug as string;
    if (prefix) {
      result[loc] = `/${loc}${prefix}/${slug}/`;
    } else {
      result[loc] = `/${loc}/${slug}/`;
    }
  }

  return result;
}

export function getHreflangAlternatesStatic(
  currentPath: string
): HreflangAlternates {
  const pathWithoutLocale = currentPath.replace(/^\/(uk|ru)/, '') || '/';
  return {
    uk: `/uk${pathWithoutLocale}`,
    ru: `/ru${pathWithoutLocale}`,
  };
}
