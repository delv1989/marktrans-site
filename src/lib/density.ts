/**
 * Насипна щільність сипучих матеріалів (т/м³)
 * Джерела: ДСТУ Б В.2.7-32:2007, ДСТУ Б В.2.7-75-98, прайс Каменяр
 * Ключ = slug матеріалу (обидві локалі)
 */
export const MATERIAL_DENSITY: Record<string, number> = {
  // Пісок — uk
  'pisok-richkovyy': 1.65,
  'pisok-yaruzhnyy': 1.45,
  // Пісок — ru
  'pesok-rechnoj': 1.65,
  'pesok-ovrazniy': 1.45,

  // Щебінь — uk (shchebin)
  'shchebin-fraktsii-0-5-mm': 1.50,
  'shchebin-fraktsii-5-10-mm': 1.45,
  'shchebin-fraktsii-5-20-mm': 1.40,
  'shchebin-fraktsii-10-20-mm': 1.40,
  'shchebin-fraktsii-20-40-mm': 1.36,
  'shchebin-fraktsii-20-70-mm': 1.35,
  'shchebin-fraktsii-40-70-mm': 1.34,
  'shchebin-fraktsii-70-plus-mm': 1.32,
  // Щебінь — ru (shcheben)
  'shcheben-fraktsii-0-5-mm': 1.50,
  'shcheben-fraktsii-5-10-mm': 1.45,
  'shcheben-fraktsii-5-20-mm': 1.40,
  'shcheben-fraktsii-10-20-mm': 1.40,
  'shcheben-fraktsii-20-40-mm': 1.36,
  'shcheben-fraktsii-20-70-mm': 1.35,
  'shcheben-fraktsii-40-70-mm': 1.34,
  'shcheben-fraktsii-70-mm': 1.32,

  // ЩПС — uk
  'shchps-0x40-mm': 1.80,
  'shchps-0x70-mm': 1.80,
  // ЩПС — ru
  'shchps-0-40-mm': 1.80,
  'shchps-0-70-mm': 1.80,

  // Вторинний щебінь — uk
  'biy-betonu': 1.30,
  'biy-asfaltu': 1.40,
  'asfaltova-krykhta': 1.70,
  // Вторинний — ru
  'boy-betona': 1.30,
  'boy-asfalta': 1.40,
  'asfaltnaya-kroshka': 1.70,

  // Підсипка — uk
  'suglynok-pidsypka': 1.70,
  'supisok-pidsypka': 1.60,
  // Підсипка — ru
  'suglinok': 1.70,
  'supisok': 1.60,

  // Ґрунт — uk
  'grunt-roslynnyy': 1.30,
  'gruntova-sumish': 1.40,
  // Ґрунт — ru
  'grunt-rastitelnyj': 1.30,
  'gruntovaya-smes': 1.40,

  // Камінь бут — uk
  'kamin-but-siryy': 1.50,
  'kamin-but-granitnyy': 1.55,
  'kamin-but-kvartsytnyy': 1.60,
  // Камінь бут — ru
  'kamen-but': 1.50,
  'kamen-but-granitnyj': 1.55,
  'kamen-but-kvarcitnyj': 1.60,
}

/**
 * Категорії релевантні для калькулятора B (обʼєм по площі)
 * Виключено: sol, asfaltobeton, beton
 */
export const CALCULATOR_B_CATEGORIES: readonly string[] = [
  'pesok',
  'shcheben',
  'shchps',
  'grunt',
  'kamen-but',
  'vtorichnyy-shcheben',
  'pidsypka',
]

/**
 * Щільність будівельного сміття (т/м³) — для калькулятора C
 */
export const WASTE_TYPES = [
  { id: 'brick', uk: 'Цегляний бій', ru: 'Кирпичный бой', density: 1.40 },
  { id: 'concrete', uk: 'Бетонний бій', ru: 'Бетонный бой', density: 2.00 },
  { id: 'reinforced-concrete', uk: 'Залізобетон', ru: 'Железобетон', density: 2.30 },
  { id: 'asphalt', uk: 'Старий асфальт', ru: 'Старый асфальт', density: 1.40 },
  { id: 'mixed', uk: 'Будівельне змішане', ru: 'Строительное смешанное', density: 1.00 },
  { id: 'wood-drywall', uk: 'Дерево, гіпсокартон', ru: 'Дерево, гипсокартон', density: 0.45 },
  { id: 'soil-excavation', uk: 'Ґрунт виїмки', ru: 'Грунт выемки', density: 1.70 },
  { id: 'clay', uk: 'Глина, суглинок', ru: 'Глина, суглинок', density: 1.75 },
  { id: 'metal-scrap', uk: 'Металобрухт', ru: 'Металлолом', density: 0.75 },
  { id: 'glass', uk: 'Бій скла', ru: 'Бой стекла', density: 0.50 },
] as const

/**
 * Моделі самоскидів — для калькулятора C
 */
export const DUMP_TRUCKS = [
  { capacity: 5, volume: 4, uk: '5-тонний (4 м³)', ru: '5-тонный (4 м³)', desc: 'small' },
  { capacity: 10, volume: 8, uk: '10-тонний (8 м³)', ru: '10-тонный (8 м³)', desc: 'medium' },
  { capacity: 20, volume: 15, uk: '20-тонний (15 м³)', ru: '20-тонный (15 м³)', desc: 'large' },
] as const

/**
 * Марки бетону — для калькулятора D
 */
export const CONCRETE_GRADES = [
  { mark: 'М100', cls: 'B7.5', uk: 'Підбетонка, легкі підлоги', ru: 'Подбетонка, лёгкие полы' },
  { mark: 'М150', cls: 'B12.5', uk: 'Стяжки, доріжки', ru: 'Стяжки, дорожки' },
  { mark: 'М200', cls: 'B15', uk: 'Фундаменти легких будинків', ru: 'Фундаменты лёгких домов' },
  { mark: 'М250', cls: 'B20', uk: 'Стрічкові фундаменти, стіни', ru: 'Ленточные фундаменты, стены' },
  { mark: 'М300', cls: 'B22.5', uk: 'Фундаменти багатоповерхових', ru: 'Фундаменты многоэтажных' },
  { mark: 'М350', cls: 'B25', uk: 'Колони, ригелі', ru: 'Колонны, ригели' },
  { mark: 'М400', cls: 'B30', uk: 'Гідротехнічні споруди', ru: 'Гидротехнические сооружения' },
] as const
