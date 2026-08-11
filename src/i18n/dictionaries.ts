import type { Locale } from './config';

/**
 * UI strings for the shell and the newer pages, in one editable place —
 * consistent with keeping content out of component code.
 */
export interface Dictionary {
  nav: {
    home: string;
    umrah: string;
    builder: string;
    visas: string;
    visaGuide: string;
    destinations: string;
    offices: string;
    about: string;
    contact: string;
    licence: string;
  };
  menu: {
    umrahBlurb: string;
    visaBlurb: string;
    destinationsBlurb: string;
    officesBlurb: string;
    viewAll: string;
  };
  common: {
    getQuote: string;
    reserveSeat: string;
    callUs: string;
    whatsapp: string;
    from: string;
    perPerson: string;
    nights: string;
    readMore: string;
    lastVerified: string;
    officialSource: string;
    openInMaps: string;
    languageLabel: string;
    skipToContent: string;
    menu: string;
    close: string;
  };
  offices: {
    title: string;
    subtitle: string;
    headOffice: string;
    branch: string;
    hours: string;
    services: string;
    visitUs: string;
    findUs: string;
  };
  visaGuide: {
    title: string;
    subtitle: string;
    whoFor: string;
    documents: string;
    steps: string;
    fees: string;
    timeline: string;
    notes: string;
    disclaimer: string;
  };
}

const en: Dictionary = {
  nav: {
    home: 'Home',
    umrah: 'Umrah Packages',
    builder: 'Custom Builder',
    visas: 'Visa Services',
    visaGuide: 'Visa Guide',
    destinations: 'Destinations',
    offices: 'Our Offices',
    about: 'About',
    contact: 'Contact',
    licence: 'Licence',
  },
  menu: {
    umrahBlurb: 'Fixed group departures and fully custom itineraries, priced per person.',
    visaBlurb: 'Saudi visit, work and family visas, plus UAE, Turkey and Schengen.',
    destinationsBlurb: 'Makkah, Madina, Jeddah and the ziyarat sites, with hotel zones.',
    officesBlurb: 'Six offices across Punjab and Sindh. Walk in and speak to a consultant.',
    viewAll: 'View all',
  },
  common: {
    getQuote: 'Get a firm quote',
    reserveSeat: 'Reserve a seat',
    callUs: 'Call us',
    whatsapp: 'WhatsApp',
    from: 'From',
    perPerson: 'per person',
    nights: 'nights',
    readMore: 'Read more',
    lastVerified: 'Last verified',
    officialSource: 'Official source',
    openInMaps: 'Open in Maps',
    languageLabel: 'Choose language',
    skipToContent: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
  },
  offices: {
    title: 'Our Offices',
    subtitle:
      'Come and sit with us. Every branch is staffed by consultants who process visas and Umrah files themselves — not a call centre.',
    headOffice: 'Head Office',
    branch: 'Branch Office',
    hours: 'Opening hours',
    services: 'Services at this office',
    visitUs: 'Visit this office',
    findUs: 'Find us',
  },
  visaGuide: {
    title: 'Visa Guide',
    subtitle:
      'What each Saudi visa actually is, who can get it, what it costs and how long it takes — explained plainly, with the official source for every claim.',
    whoFor: 'Who this is for',
    documents: 'Documents you provide',
    steps: 'How the process runs',
    fees: 'Fees',
    timeline: 'Typical timeline',
    notes: 'Things people get wrong',
    disclaimer:
      'Fees and rules are set by the Saudi authorities and change without notice. We re-check every page against the official portals; the date above shows when. Always confirm with us before you pay anything.',
  },
};

const ur: Dictionary = {
  nav: {
    home: 'ہوم',
    umrah: 'عمرہ پیکجز',
    builder: 'اپنا پیکج بنائیں',
    visas: 'ویزہ سروسز',
    visaGuide: 'ویزہ گائیڈ',
    destinations: 'مقاماتِ مقدسہ',
    offices: 'ہمارے دفاتر',
    about: 'ہمارے بارے میں',
    contact: 'رابطہ',
    licence: 'لائسنس',
  },
  menu: {
    umrahBlurb: 'مقررہ گروپ روانگی اور مکمل اپنی مرضی کے پیکجز، فی کس قیمت کے ساتھ۔',
    visaBlurb: 'سعودی وزٹ، ورک اور فیملی ویزہ، نیز یو اے ای، ترکی اور شینگن۔',
    destinationsBlurb: 'مکہ، مدینہ، جدہ اور زیارات، ہوٹل کے علاقوں کے ساتھ۔',
    officesBlurb: 'پنجاب اور سندھ میں چھ دفاتر۔ تشریف لائیں اور مشیر سے بات کریں۔',
    viewAll: 'سب دیکھیں',
  },
  common: {
    getQuote: 'حتمی قیمت حاصل کریں',
    reserveSeat: 'سیٹ محفوظ کریں',
    callUs: 'کال کریں',
    whatsapp: 'واٹس ایپ',
    from: 'شروع',
    perPerson: 'فی کس',
    nights: 'راتیں',
    readMore: 'مزید پڑھیں',
    lastVerified: 'آخری تصدیق',
    officialSource: 'سرکاری ذریعہ',
    openInMaps: 'نقشے میں کھولیں',
    languageLabel: 'زبان منتخب کریں',
    skipToContent: 'مواد پر جائیں',
    menu: 'مینو',
    close: 'بند کریں',
  },
  offices: {
    title: 'ہمارے دفاتر',
    subtitle:
      'تشریف لائیں اور ہمارے ساتھ بیٹھیں۔ ہر برانچ میں وہی مشیر موجود ہیں جو خود ویزہ اور عمرہ فائل پر کام کرتے ہیں — کوئی کال سینٹر نہیں۔',
    headOffice: 'مرکزی دفتر',
    branch: 'برانچ دفتر',
    hours: 'اوقاتِ کار',
    services: 'اس دفتر کی خدمات',
    visitUs: 'اس دفتر تشریف لائیں',
    findUs: 'ہم تک پہنچیں',
  },
  visaGuide: {
    title: 'ویزہ گائیڈ',
    subtitle:
      'ہر سعودی ویزہ اصل میں کیا ہے، کون حاصل کر سکتا ہے، خرچ کتنا ہے اور وقت کتنا لگتا ہے — آسان زبان میں، ہر بات کے سرکاری حوالے کے ساتھ۔',
    whoFor: 'یہ ویزہ کن کے لیے ہے',
    documents: 'مطلوبہ دستاویزات',
    steps: 'مرحلہ وار کارروائی',
    fees: 'فیس',
    timeline: 'عام دورانیہ',
    notes: 'عام غلط فہمیاں',
    disclaimer:
      'فیس اور قواعد سعودی حکام مقرر کرتے ہیں اور بغیر اطلاع تبدیل ہو سکتے ہیں۔ ہم ہر صفحہ سرکاری پورٹلز سے دوبارہ جانچتے ہیں؛ اوپر دی گئی تاریخ اسی کی ہے۔ ادائیگی سے پہلے ہمیشہ ہم سے تصدیق کریں۔',
  },
};

const ar: Dictionary = {
  nav: {
    home: 'الرئيسية',
    umrah: 'باقات العمرة',
    builder: 'صمّم باقتك',
    visas: 'خدمات التأشيرات',
    visaGuide: 'دليل التأشيرات',
    destinations: 'الوجهات',
    offices: 'مكاتبنا',
    about: 'من نحن',
    contact: 'اتصل بنا',
    licence: 'الترخيص',
  },
  menu: {
    umrahBlurb: 'رحلات جماعية بمواعيد ثابتة وبرامج مخصصة بالكامل، بسعر لكل شخص.',
    visaBlurb: 'تأشيرات الزيارة والعمل والعائلة للسعودية، وكذلك الإمارات وتركيا وشنغن.',
    destinationsBlurb: 'مكة والمدينة وجدة ومواقع الزيارة، مع مناطق الفنادق.',
    officesBlurb: 'ستة مكاتب في البنجاب والسند. تفضل بزيارتنا وتحدث مع مستشار.',
    viewAll: 'عرض الكل',
  },
  common: {
    getQuote: 'احصل على عرض سعر نهائي',
    reserveSeat: 'احجز مقعدًا',
    callUs: 'اتصل بنا',
    whatsapp: 'واتساب',
    from: 'ابتداءً من',
    perPerson: 'للشخص الواحد',
    nights: 'ليالٍ',
    readMore: 'اقرأ المزيد',
    lastVerified: 'آخر تحقق',
    officialSource: 'المصدر الرسمي',
    openInMaps: 'افتح في الخرائط',
    languageLabel: 'اختر اللغة',
    skipToContent: 'انتقل إلى المحتوى',
    menu: 'القائمة',
    close: 'إغلاق',
  },
  offices: {
    title: 'مكاتبنا',
    subtitle:
      'تفضل بالجلوس معنا. كل فرع يعمل به مستشارون يتولون بأنفسهم معاملات التأشيرات والعمرة — وليس مركز اتصال.',
    headOffice: 'المكتب الرئيسي',
    branch: 'مكتب فرعي',
    hours: 'ساعات العمل',
    services: 'الخدمات في هذا المكتب',
    visitUs: 'زر هذا المكتب',
    findUs: 'كيف تصل إلينا',
  },
  visaGuide: {
    title: 'دليل التأشيرات',
    subtitle:
      'ما هي كل تأشيرة سعودية فعليًا، ومن يستحقها، وكم تكلفتها، وكم تستغرق — بلغة واضحة، مع المصدر الرسمي لكل معلومة.',
    whoFor: 'لمن هذه التأشيرة',
    documents: 'المستندات المطلوبة',
    steps: 'كيف تسير الإجراءات',
    fees: 'الرسوم',
    timeline: 'المدة المعتادة',
    notes: 'أخطاء شائعة',
    disclaimer:
      'الرسوم والأنظمة تحددها الجهات السعودية وقد تتغير دون إشعار. نراجع كل صفحة مقابل البوابات الرسمية؛ التاريخ أعلاه يوضح موعد آخر مراجعة. تأكد منا دائمًا قبل أي دفع.',
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, ur, ar };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
