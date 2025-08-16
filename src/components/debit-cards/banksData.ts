export interface BankData {
  name: string;
  logo: string;
  logoAlt: string;
  description: string;
  features: Array<{ text: string }>;
  buttonColor: string;
  buttonHoverColor: string;
  href?: string;
  isPopular?: boolean;
  logoBackground?: string;
}

export const banksData: BankData[] = [
  {
    name: "Альфа-Банк",
    logo: "https://cdn.poehali.dev/files/9b4f5a12-30fc-4131-9894-a36140607880.png",
    logoAlt: "Альфа-Банк логотип",
    description: "Лидер по популярности поисковых запросов. Дебетовая карта Альфа-Банка привлекает клиентов бесплатным обслуживанием и выгодными условиями кэшбэка.",
    features: [
      { text: "Бесплатная дебетовая карта навсегда" },
      { text: "Доставка карты на дом" },
      { text: "Кэшбэк до 33% в категориях" },
      { text: "Процент на остаток до 7%" }
    ],
    buttonColor: "bg-red-500",
    buttonHoverColor: "hover:bg-red-600",
    href: "https://trk.ppdu.ru/click/eL7cQDik?erid=2SDnjcyvkUv",
    isPopular: true
  },
  {
    name: "ВТБ",
    logo: "https://cdn.poehali.dev/files/33088dd0-04f7-440c-a15a-c31a0df99e73.jpeg",
    logoAlt: "ВТБ логотип",
    description: "Дебетовая карта ВТБ занимает второе место по популярности среди пользователей. Банк предлагает надежные условия обслуживания.",
    features: [
      { text: "Карта с бесплатным обслуживанием" },
      { text: "Онлайн-оформление за 5 минут" },
      { text: "Кэшбэк в популярных категориях" },
      { text: "Широкая сеть банкоматов" }
    ],
    buttonColor: "bg-blue-600",
    buttonHoverColor: "hover:bg-blue-700",
    href: "https://trk.ppdu.ru/click/bHNbRcC7?erid=Kra23bfT9"
  },
  {
    name: "Т-Банк",
    logo: "https://cdn.poehali.dev/files/84ed8de6-276a-4766-8272-b3ffe9b8dd2d.jpg",
    logoAlt: "Т-Банк логотип",
    description: "Дебетовая карта Т-Банка известна инновационными решениями и удобным мобильным приложением.",
    features: [
      { text: "100% онлайн-банк" },
      { text: "Бесплатная доставка дебетовой карты" },
      { text: "Процент на остаток" },
      { text: "Развитая программа лояльности" }
    ],
    buttonColor: "bg-yellow-500",
    buttonHoverColor: "hover:bg-yellow-600",
    href: "https://trk.ppdu.ru/click/mtU4XYwQ?erid=Kra23xCCG"
  },
  {
    name: "Сбербанк",
    logo: "https://cdn.poehali.dev/files/f18a694f-e978-42e9-9578-b7f6d2130161.jpg",
    logoAlt: "Сбербанк логотип",
    description: "Дебетовая карта Сбербанка остается классическим выбором для консервативных клиентов.",
    features: [
      { text: "Самая большая сеть отделений" },
      { text: "Надежность и стабильность" },
      { text: "Различные типы дебетовых карт" },
      { text: "Интеграция с госуслугами" }
    ],
    buttonColor: "bg-green-600",
    buttonHoverColor: "hover:bg-green-700"
  },
  {
    name: "ОТП Банк",
    logo: "https://cdn.poehali.dev/files/7b79c919-c2af-4142-8afc-8dc962b5dc6d.png",
    logoAlt: "ОТП Банк логотип",
    description: "Европейский банк с современными решениями и выгодными условиями для дебетовых карт.",
    features: [
      { text: "Высокий процент на остаток" },
      { text: "Бесплатное обслуживание" },
      { text: "Выгодный кэшбэк в категориях" },
      { text: "Европейские стандарты качества" }
    ],
    buttonColor: "bg-lime-500",
    buttonHoverColor: "hover:bg-lime-600",
    href: "https://go.leadgid.ru/aff_c?aff_id=132201&offer_id=6626&p=9546&erid=2W5zFJQ1CVE",
    logoBackground: "bg-lime-400"
  },
  {
    name: "МТС Банк",
    logo: "https://cdn.poehali.dev/files/18969298-ba70-42de-ac9c-a8083a775752.png",
    logoAlt: "МТС Банк логотип",
    description: "Дебетовая карта МТС Банка предлагает уникальные возможности для клиентов оператора связи.",
    features: [
      { text: "Кэшбэк за мобильную связь" },
      { text: "Интеграция с услугами МТС" },
      { text: "Выгодные тарифы" },
      { text: "Бесплатное обслуживание карты" }
    ],
    buttonColor: "bg-red-600",
    buttonHoverColor: "hover:bg-red-700",
    href: "https://trk.ppdu.ru/click/C7TpQFKa?erid=2SDnje1Rojj"
  }
];

export const additionalBanksData: BankData[] = [
  {
    name: "Газпромбанк",
    logo: "https://cdn.poehali.dev/files/1010a91b-9317-4397-8dba-53ec69d3b936.png",
    logoAlt: "Газпромбанк логотип",
    description: "Дебетовая карта Газпромбанка предлагает стабильные условия и надежность одного из крупнейших банков России.",
    features: [
      { text: "Бесплатное обслуживание карты" },
      { text: "Выгодный кэшбэк по категориям" },
      { text: "Процент на остаток по счету" },
      { text: "Широкая сеть банкоматов" }
    ],
    buttonColor: "bg-blue-700",
    buttonHoverColor: "hover:bg-blue-800"
  },
  {
    name: "Уралсиб",
    logo: "https://cdn.poehali.dev/files/c29517c3-0737-4cc1-bc26-c86969812176.jpg",
    logoAlt: "Уралсиб логотип",
    description: "Дебетовая карта Уралсиб предлагает удобные условия обслуживания и привлекательные возможности для экономии.",
    features: [
      { text: "Бесплатное ведение счета" },
      { text: "Кэшбэк в партнерских магазинах" },
      { text: "Льготное снятие наличных" },
      { text: "Онлайн-банкинг и мобильное приложение" }
    ],
    buttonColor: "bg-red-600",
    buttonHoverColor: "hover:bg-red-700"
  },
  {
    name: "Банк ПСБ",
    logo: "https://cdn.poehali.dev/files/5e078e9b-ae42-456a-8009-0d9629e92dfa.jpg",
    logoAlt: "ПСБ логотип",
    description: "Дебетовая карта ПСБ (Промсвязьбанк) предлагает современные банковские решения и выгодные условия для клиентов.",
    features: [
      { text: "Бесплатное обслуживание карты" },
      { text: "Высокий процент на остаток" },
      { text: "Кэшбэк за покупки" },
      { text: "Современное мобильное приложение" }
    ],
    buttonColor: "bg-green-600",
    buttonHoverColor: "hover:bg-green-700",
    href: "https://trk.ppdu.ru/click/PkSfuNTn?erid=2SDnjehD1C8"
  },
  {
    name: "УБРиР",
    logo: "https://cdn.poehali.dev/files/47de067e-62ea-45c2-bbaf-e161d4a9f09e.jpg",
    logoAlt: "УБРиР логотип",
    description: "Уральский банк реконструкции и развития предлагает дебетовые карты с выгодными условиями и региональными преимуществами.",
    features: [
      { text: "Бесплатное годовое обслуживание" },
      { text: "Выгодный кэшбэк на заправках" },
      { text: "Процент на остаток средств" },
      { text: "Региональные партнерские программы" }
    ],
    buttonColor: "bg-red-700",
    buttonHoverColor: "hover:bg-red-800",
    href: "https://trk.ppdu.ru/click/NjZ2wVHJ?erid=2SDnjdU9bbN"
  },
  {
    name: "Кредит Европа Банк",
    logo: "https://cdn.poehali.dev/files/5f8ecd5d-cc80-4d30-aeca-728ac70fbad6.jpg",
    logoAlt: "Кредит Европа Банк логотип",
    description: "Дебетовая карта Кредит Европа Банка предлагает европейские стандарты обслуживания и выгодные условия для российских клиентов.",
    features: [
      { text: "Бесплатное ведение карты" },
      { text: "Европейские стандарты качества" },
      { text: "Кэшбэк в популярных категориях" },
      { text: "Выгодный процент на остаток" }
    ],
    buttonColor: "bg-blue-600",
    buttonHoverColor: "hover:bg-blue-700",
    href: "https://trk.ppdu.ru/click/vHB7jJr1?erid=2SDnjcYvm8c"
  },
  {
    name: "МКБ",
    logo: "https://cdn.poehali.dev/files/11907ecb-a647-4e2d-b529-b5d8e8815b4e.jpg",
    logoAlt: "МКБ логотип",
    description: "Московский Кредитный Банк предлагает современные дебетовые карты с выгодными условиями и широкими возможностями.",
    features: [
      { text: "Бесплатное обслуживание карты" },
      { text: "Кэшбэк в различных категориях" },
      { text: "Высокий процент на остаток" },
      { text: "Удобное мобильное приложение" }
    ],
    buttonColor: "bg-red-500",
    buttonHoverColor: "hover:bg-red-600",
    href: "https://trk.ppdu.ru/click/d4h5GJ9G?erid=Kra24BgpE"
  }
];