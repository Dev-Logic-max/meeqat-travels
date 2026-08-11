/**
 * Branch network.
 *
 * IMPORTANT — street addresses, phone numbers and opening hours below are
 * PLACEHOLDERS for every branch except Rahim Yar Khan. Replace them with the
 * real details before this is advertised. `verified: false` marks the ones
 * still to confirm; the UI shows a quiet "details being confirmed" note for
 * those so nothing false is presented as fact.
 */

export interface Office {
  slug: string;
  city: string;
  cityUrdu: string;
  cityArabic: string;
  province: string;
  isHeadOffice: boolean;
  addressLine: string;
  addressUrdu: string;
  /** Used to build a Google Maps search link — no API key needed. */
  mapQuery: string;
  phone: string;
  whatsapp: string;
  hours: { days: string; time: string }[];
  /** What this branch actually handles day to day. */
  services: string[];
  /** Nearest practical international airport for departures from this branch. */
  nearestAirport: string;
  /** Short, specific paragraph — not marketing filler. */
  intro: string;
  images: string[];
  verified: boolean;
}

const standardHours = [
  { days: 'Monday – Saturday', time: '9:00 am – 8:00 pm' },
  { days: 'Friday', time: '9:00 am – 12:30 pm, 2:30 pm – 8:00 pm' },
  { days: 'Sunday', time: 'Closed' },
];

export const offices: Office[] = [
  {
    slug: 'rahim-yar-khan',
    city: 'Rahim Yar Khan',
    cityUrdu: 'رحیم یار خان',
    cityArabic: 'رحيم يار خان',
    province: 'Punjab',
    isHeadOffice: true,
    addressLine:
      'Near Abbasia Canal Petrol Pump, Main Canal Road, Rahim Yar Khan, Punjab',
    addressUrdu: 'نزد عباسیہ کینال پیٹرول پمپ، مین کینال روڈ، رحیم یار خان، پنجاب',
    mapQuery: 'Abbasia Canal Petrol Pump, Canal Road, Rahim Yar Khan, Pakistan',
    phone: '+92 300 6842111',
    whatsapp: '923006842111',
    hours: standardHours,
    services: [
      'Umrah packages and group departures',
      'Saudi visit, family and work visa files',
      'Nusuk hotel booking and BRN confirmation',
      'Air ticketing and date changes',
      'Document checking and attestation guidance',
      'Agent network support for southern Punjab',
    ],
    nearestAirport: 'Multan (MUX) — about 3 hours by road',
    intro:
      'Our head office, and where every file is finally checked before submission. If your Umrah group departs from Multan or Karachi, this is the desk that arranges the coach, the hotel BRN and the visa.',
    images: [
      '/images/offices/rahim-yar-khan-1.jpg',
      '/images/offices/rahim-yar-khan-2.jpg',
      '/images/offices/rahim-yar-khan-3.jpg',
    ],
    verified: true,
  },
  {
    slug: 'bahawalpur',
    city: 'Bahawalpur',
    cityUrdu: 'بہاولپور',
    cityArabic: 'بهاولبور',
    province: 'Punjab',
    isHeadOffice: false,
    addressLine: 'Ahmadpur Road, near Fawara Chowk, Bahawalpur, Punjab',
    addressUrdu: 'احمد پور روڈ، نزد فوارہ چوک، بہاولپور، پنجاب',
    mapQuery: 'Fawara Chowk, Bahawalpur, Pakistan',
    phone: '+92 301 7923444',
    whatsapp: '923006842111',
    hours: standardHours,
    services: [
      'Umrah bookings and seat reservations',
      'Saudi visit visa applications',
      'Document collection and forwarding',
      'Tasheer appointment guidance',
    ],
    nearestAirport: 'Multan (MUX) — about 1 hour 45 minutes by road',
    intro:
      'Serves Bahawalpur division and the Cholistan belt. Families here usually depart from Multan, which keeps the road transfer short and the package cheaper than routing through Lahore.',
    images: [
      '/images/offices/bahawalpur-1.jpg',
      '/images/offices/bahawalpur-2.jpg',
    ],
    verified: false,
  },
  {
    slug: 'multan',
    city: 'Multan',
    cityUrdu: 'ملتان',
    cityArabic: 'مولتان',
    province: 'Punjab',
    isHeadOffice: false,
    addressLine: 'Abdali Road, near Chowk Kumharanwala, Multan, Punjab',
    addressUrdu: 'عبدالی روڈ، نزد چوک کمہرانوالہ، ملتان، پنجاب',
    mapQuery: 'Abdali Road, Multan, Pakistan',
    phone: '+92 301 7923444',
    whatsapp: '923006842111',
    hours: standardHours,
    services: [
      'Airport departures and group send-offs',
      'Umrah packages and custom itineraries',
      'Saudi visit and family visa files',
      'Tasheer biometrics assistance',
      'Last-minute seat availability',
    ],
    nearestAirport: 'Multan International (MUX) — in the city',
    intro:
      'Our departure hub. Most Meeqat groups fly out of Multan International, so this office handles airport send-offs, last-minute seat changes and the Tasheer biometrics run.',
    images: [
      '/images/offices/multan-1.jpg',
      '/images/offices/multan-2.jpg',
      '/images/offices/multan-3.jpg',
    ],
    verified: false,
  },
  {
    slug: 'lahore',
    city: 'Lahore',
    cityUrdu: 'لاہور',
    cityArabic: 'لاهور',
    province: 'Punjab',
    isHeadOffice: false,
    addressLine: 'Main Boulevard, Gulberg III, Lahore, Punjab',
    addressUrdu: 'مین بلیوارڈ، گلبرگ ٹو، لاہور، پنجاب',
    mapQuery: 'Main Boulevard Gulberg III, Lahore, Pakistan',
    phone: '+92 300 6842111',
    whatsapp: '923006842111',
    hours: standardHours,
    services: [
      'Full visa consultancy — Saudi, UAE, Turkey, Schengen',
      'Umrah packages and premium hotel bookings',
      'Tasheer centre appointments and biometrics',
      'Corporate and business travel',
      'Work visa and Iqama guidance',
    ],
    nearestAirport: 'Allama Iqbal International (LHE) — in the city',
    intro:
      'Our largest visa desk. Lahore has a Tasheer centre, so applicants from central Punjab can complete biometrics and submit in the same trip rather than travelling twice.',
    images: [
      '/images/offices/lahore-1.jpg',
      '/images/offices/lahore-2.jpg',
      '/images/offices/lahore-3.jpg',
    ],
    verified: false,
  },
  {
    slug: 'faisalabad',
    city: 'Faisalabad',
    cityUrdu: 'فیصل آباد',
    cityArabic: 'فيصل آباد',
    province: 'Punjab',
    isHeadOffice: false,
    addressLine: 'Kotwali Road, near Clock Tower, Faisalabad, Punjab',
    addressUrdu: 'کوتوالی روڈ، نزد گھنٹہ گھر، فیصل آباد، پنجاب',
    mapQuery: 'Clock Tower, Kotwali Road, Faisalabad, Pakistan',
    phone: '+92 301 7923444',
    whatsapp: '923006842111',
    hours: standardHours,
    services: [
      'Umrah group bookings',
      'Saudi work visa and Iqama documentation',
      'Visit visa applications',
      'Attestation and Dataflow guidance',
    ],
    nearestAirport: 'Lahore (LHE) — about 2 hours 15 minutes by road',
    intro:
      'Faisalabad sends more workers to the Gulf than almost anywhere else in Punjab, so this branch spends most of its time on work visa files, attestation and Iqama questions rather than on tourism.',
    images: [
      '/images/offices/faisalabad-1.jpg',
      '/images/offices/faisalabad-2.jpg',
    ],
    verified: false,
  },
  {
    slug: 'karachi',
    city: 'Karachi',
    cityUrdu: 'کراچی',
    cityArabic: 'كراتشي',
    province: 'Sindh',
    isHeadOffice: false,
    addressLine: 'Shahrah-e-Faisal, near Nursery, Karachi, Sindh',
    addressUrdu: 'شاہراہِ فیصل، نزد نرسری، کراچی، سندھ',
    mapQuery: 'Shahrah-e-Faisal Nursery, Karachi, Pakistan',
    phone: '+92 300 6842111',
    whatsapp: '923006842111',
    hours: standardHours,
    services: [
      'Direct Jeddah and Madinah flight departures',
      'Umrah packages for Sindh and Balochistan',
      'Saudi visit, business and family visas',
      'Tasheer biometrics assistance',
      'Seaman and business traveller documentation',
    ],
    nearestAirport: 'Jinnah International (KHI) — in the city',
    intro:
      'Karachi has the widest choice of direct flights to Jeddah and Madinah, which usually makes it the cheapest departure for travellers from Sindh — often cheaper than flying up to Lahore first.',
    images: [
      '/images/offices/karachi-1.jpg',
      '/images/offices/karachi-2.jpg',
      '/images/offices/karachi-3.jpg',
    ],
    verified: false,
  },
];

export function getOffice(slug: string): Office | undefined {
  return offices.find((o) => o.slug === slug);
}

export function mapsUrl(office: Office): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    office.mapQuery
  )}`;
}
