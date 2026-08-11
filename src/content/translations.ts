export type Language = 'en' | 'ur' | 'ar';

const baseTranslations = {
  en: {
    nav: {
      home: "Home",
      packages: "Umrah Packages",
      builder: "Custom Package Builder",
      visas: "Visa Services",
      destinations: "Ziyarat & Guides",
      licence: "Licence & Verification",
      about: "About Us",
      contact: "Contact & Office",
      callUs: "Call Us",
      whatsapp: "WhatsApp Inquiry"
    },
    hero: {
      licenceBadge: "Government Registered & MoRA Licensed Operator",
      title: "Your Blessed Journey to the Holy Haramain",
      subtitle: "Direct Licensed Umrah Operator with full package management, airline ticketing, hotel bookings, and Tasheer visa consultancy.",
      btnPackages: "Explore Packages",
      btnBuilder: "Custom Package Builder",
      quickInquiryTitle: "Get a Firm Quote",
      selectDeparture: "Select Departure Airport",
      selectDuration: "Select Duration",
      selectGroup: "Travelers Group Size",
      btnGetQuote: "Get Custom Quote on WhatsApp"
    },
    stats: {
      pilgrims: "10,000+ Pilgrims Served",
      experience: "15+ Years Experience",
      licence: "100% Direct License Operator",
      cities: "Agents Across Pakistan"
    },
    packagesSection: {
      tag: "Featured Inclusions",
      title: "Popular Umrah Packages",
      subtitle: "Transparent pricing starting estimates with full Nusuk BRN hotel verification, flights, and ground transportation.",
      from: "From",
      pkr: "PKR",
      perPerson: "per person",
      detailsBtn: "View Inclusions",
      quoteBtn: "Get a Firm Quote"
    },
    builderSection: {
      tag: "Interactive Tool",
      title: "Build Your Custom Umrah Journey",
      subtitle: "Tailor your stay in Makkah & Madina, select hotel ratings, transit preferences, and get instant budget estimates.",
      step1: "1. Travel Details",
      step2: "2. Makkah Hotel",
      step3: "3. Madina Hotel",
      step4: "4. Transport & Airline",
      nights: "Nights",
      distanceHaram: "Distance from Haram",
      distanceNabawi: "Distance from Masjid Nabawi",
      estimateTitle: "Estimated Package Budget",
      btnSendWhatsApp: "Send Custom Specs to WhatsApp"
    },
    visasSection: {
      tag: "Expert Consultancy",
      title: "Saudi & Global Visit Visa Services",
      subtitle: "Authorized guidance for tourist, family, and business visas with biometrics appointment scheduling.",
      tasheerNotice: "Pakistani passports require biometric verification at Tasheer centers (Lahore, Multan, Karachi)."
    },
    destinationsSection: {
      tag: "Sacred Sites",
      title: "Makkah & Madina Ziyarat Guides",
      subtitle: "Experience spiritual peace with guided tours to historical Islamic landmarks."
    },
    licenceNotice: {
      title: "Government Verified Operator",
      mora: "Ministry of Religious Affairs (MoRA) License Registered",
      dts: "Department of Tourist Services (DTS) Approved Operator",
      fraudWarning: "Official Payment Notice: All payments must be deposited directly into our official company bank account 'Meeqat Travel and Tours (Pvt) Ltd'. Never pay into personal accounts."
    },
    footer: {
      about: "Meeqat Travel & Tours is a direct licensed Hajj and Umrah tour operator based in Rahim Yar Khan, Punjab, serving pilgrims across Pakistan with dedication and spiritual honor.",
      quickLinks: "Quick Links",
      legal: "Licence & Verification",
      officeLocation: "Office Location",
      rights: "All Rights Reserved."
    }
  },
  ur: {
    nav: {
      home: "صفحہ اول",
      packages: "عمرہ پیکجز",
      builder: "کسٹم پیکج بلڈر",
      visas: "ویزہ سروسز",
      destinations: "زیارات و معلومات",
      licence: "لائسنس و تصدیق",
      about: "ہمارے بارے میں",
      contact: "رابطہ و دفتر",
      callUs: "کال کریں",
      whatsapp: "واٹس ایپ معلومات"
    },
    hero: {
      licenceBadge: "حکومت پاکستان و وزارت مذہبی امور سے منظور شدہ باقاعدہ لائسنس یافتہ آپریٹر",
      title: "حرمین شریفین کا بابرکت اور پُرآسائش سفر",
      subtitle: "ڈائریکٹ لائسنس ہولڈر کے ساتھ مکمل عمرہ پیکج، ایئر لائن ٹکٹنگ، ہوٹل بکنگ اور سعودی وزٹ ویزا کی سہولت۔",
      btnPackages: "عمرہ پیکجز دیکھیں",
      btnBuilder: "کسٹم پیکج بنائیں",
      quickInquiryTitle: "قیمت کی تصدیق حاصل کریں",
      selectDeparture: "ائیرپورٹ کا انتخاب کریں",
      selectDuration: "سفر کے دنوں کی تعداد",
      selectGroup: "مسافروں کی تعداد",
      btnGetQuote: "واٹس ایپ پر کوٹیشن لیں"
    },
    stats: {
      pilgrims: "+10,000 سے زائد مطمئن زائرین",
      experience: "+15 سالہ وسیع تجربہ",
      licence: "100% ڈائریکٹ لائسنس یافتہ",
      cities: "پاکستان بھر میں ایجنٹ نیٹ ورک"
    },
    packagesSection: {
      tag: "خصوصی عمرہ پیشکش",
      title: "مقبول ترین عمرہ پیکجز",
      subtitle: "نسک ہوٹل بی آر این کی تصدیق، فلائٹس اور ٹرانسپورٹ کے ساتھ شفاف پیکجز۔",
      from: "شروعاتی قیمت",
      pkr: "روپے",
      perPerson: "فی کس",
      detailsBtn: "تفصیلات دیکھیں",
      quoteBtn: "سیٹ محفوظ کریں"
    },
    builderSection: {
      tag: "آن لائن کیلکولیٹر",
      title: "اپنی مرضی کا عمرہ پیکج تیار کریں",
      subtitle: "مکہ اور مدینہ میں قیام کے دن، ہوٹل کی کیٹیگری اور ٹرانسپورٹ منتخب کریں اور فوراً تخمینہ حاصل کریں۔",
      step1: "1۔ سفری معلومات",
      step2: "2۔ مکہ ہوٹل",
      step3: "3۔ مدینہ ہوٹل",
      step4: "4۔ ٹرانسپورٹ و ایئرلائن",
      nights: "راتیں",
      distanceHaram: "حرم شریف سے فاصلہ",
      distanceNabawi: "مسجد نبوی سے فاصلہ",
      estimateTitle: "تخمینی پیکج بجٹ",
      btnSendWhatsApp: "واٹس ایپ پر تفصیلات بھیجیں"
    },
    visasSection: {
      tag: "ویزہ کنسلٹنسی",
      title: "سعودی عرب و دیگر ممالک وزٹ ویزہ سروسز",
      subtitle: "سعودی ملٹی پل ٹورسٹ ویزا، فیملی وزٹ اور دیگر ممالک کے ویزہ فائل کی تیاری اور تاشیر بائیو میٹرک رہنمائی۔",
      tasheerNotice: "پاکستانی پاسپورٹ ہولڈرز کے لیے تاشیر سینٹر (لاہور، ملتان، کراچی) سے بائیو میٹرک ضروری ہے۔"
    },
    destinationsSection: {
      tag: "مقدس مقامات",
      title: "مکہ مکرمہ و مدینہ منورہ کی تاریخی زیارات",
      subtitle: "مکمل رہنمائی اور ایئر کنڈیشنڈ گاڑیوں کے ساتھ زیارات کا بابرکت تجربہ۔"
    },
    licenceNotice: {
      title: "حکومتی منظور شدہ ڈائریکٹ آپریٹر",
      mora: "وزارت مذہبی امور (MoRA) سے رجسٹرڈ لائسنس",
      dts: "محکمہ ٹورسٹ سروسز (DTS) کا منظور شدہ لائسنس",
      fraudWarning: "اہم تنبیہ برائے فراڈ: تمام ادائیگیاں صرف اور صرف ہماری آفیشل کمپنی کے بینک اکاؤنٹ 'Meeqat Travel and Tours (Pvt) Ltd' میں جمع کروائیں۔ کسی نجی یا ذاتی اکاؤنٹ میں رقم منتقل نہ کریں۔"
    },
    footer: {
      about: "میقات ٹریول اینڈ ٹورز رحیم یار خان میں قائم ایک قابل اعتماد اور حکومت سے منظور شدہ عمرہ اور حج آپریٹر ہے جو پاکستان بھر کے زائرین کو اعلیٰ خدمات فراہم کرتا ہے۔",
      quickLinks: "اہم لنکس",
      legal: "لائسنس و حکومتی تصدیق",
      officeLocation: "دفتر کا پتہ",
      rights: "جملہ حقوق محفوظ ہیں۔"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      packages: "برامج العمرة",
      builder: "مصمم الرحلات المخصص",
      visas: "خدمات التأشيرات",
      destinations: "الزيارات والمعالم",
      licence: "الترخيص والتحقق",
      about: "من نحن",
      contact: "الاتصال والمكاتب",
      callUs: "اتصل بنا",
      whatsapp: "استفسار عبر واتساب"
    },
    hero: {
      licenceBadge: "مشغل معتمد ومسجل لدى وزارة الشؤون الدينية",
      title: "رحلتكم المباركة إلى الحرمين الشريفين",
      subtitle: "وكالة عمرة مرخصة مباشرة مع إدارة كاملة للبرامج، وتذاكر الطيران، وحجوزات الفنادق، واستشارات تأشيرات تسهيل.",
      btnPackages: "استكشف البرامج",
      btnBuilder: "مصمم الرحلات المخصص",
      quickInquiryTitle: "احصل على عرض سعر مؤكد",
      selectDeparture: "اختر مطار المغادرة",
      selectDuration: "اختر مدة الإقامة",
      selectGroup: "عدد المسافرين",
      btnGetQuote: "احصل على عرض السعر عبر واتساب"
    },
    stats: {
      pilgrims: "+10,000 معتمر في خدمتهم",
      experience: "+15 عاماً من الخبرة",
      licence: "مشغل مرخص مباشرة 100%",
      cities: "شبكة وكلاء في جميع أنحاء باکستان"
    },
    packagesSection: {
      tag: "باقات مميزة",
      title: "أبرز برامج العمرة",
      subtitle: "أسعار شفافة وتقديرية مع تحقق كامل من حجوزات الفنادق عبر منصة نسك، والطيران، والنقل الأرضي.",
      from: "يبدأ من",
      pkr: "روبية",
      perPerson: "للشخص الواحد",
      detailsBtn: "عرض التفاصيل",
      quoteBtn: "حجز السعر المؤكد"
    },
    builderSection: {
      tag: "أداة تفاعلية",
      title: "صمّم رحلة العمرة الخاصة بك",
      subtitle: "حدد مدة إقامتك في مكة والمدينة، واختر تصنيف الفنادق، ووسائل النقل، واحصل على تقدير ميزانية فوري.",
      step1: "1. تفاصيل السفر",
      step2: "2. فندق مكة",
      step3: "3. فندق المدينة",
      step4: "4. المواصلات والطيران",
      nights: "اليالي",
      distanceHaram: "الفاصل عن الحرم المكي",
      distanceNabawi: "الفاصل عن المسجد النبوي",
      estimateTitle: "ميزانية البرنامج التقديرية",
      btnSendWhatsApp: "إرسال المواصفات عبر واتساب"
    },
    visasSection: {
      tag: "استشارات متخصصة",
      title: "خدمات التأشيرات السعودية والدولية",
      subtitle: "إرشادات معتمدة لتأشيرات الزيارة والسياحة والعمل مع جدولة مواعيد البصمة الإلكترونية.",
      tasheerNotice: "تتطلب الجوازات الباكستانية التحقق الحيوي (البصمة) في مراكز تسهيل (لاهور، ملتان، كراتشي)."
    },
    destinationsSection: {
      tag: "المواقع المقدسة",
      title: "دليل الزيارات في مكة المكرمة والمدينة المنورة",
      subtitle: "استمتع بالسكينة والروحانية مع جولات إرشادية للميعالم الإسلامية التاريخية."
    },
    licenceNotice: {
      title: "مشغل معتمد ومتحقق منه حكومياً",
      mora: "مرخص من وزارة الشؤون الدينية والأوقاف (MoRA)",
      dts: "مرخص من دائرة الخدمات السياحية (DTS)",
      fraudWarning: "تنبيه هام للسلامة المالية: يجب إيداع جميع المدفوعات الرسمية حصرياً في الحساب البنكي الرسمي للشركة 'Meeqat Travel and Tours (Pvt) Ltd'. لا تدفع أبداً في حسابات شخصية."
    },
    footer: {
      about: "ميقات للسياحة والأسفار وكالة معتمدة ومباشرة لرحلات الحج والعمرة مقرها رحيم يار خان، إقليم البنجاب، تخدم المعتمرين في جميع أنحاء باکستان بكل تفانٍ وإخلاص.",
      quickLinks: "روابط سريعة",
      legal: "الترخيص والتحقق الحكومي",
      officeLocation: "موقع المكتب",
      rights: "جميع الحقوق محفوظة."
    }
  }
};

export const translations = baseTranslations;
