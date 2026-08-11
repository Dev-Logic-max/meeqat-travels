/**
 * Visa guide content.
 *
 * Every figure here is sourced and dated. Saudi fees and rules change often —
 * `lastVerified` is rendered on the page so a visitor can see how fresh it is.
 * Re-check each guide against the linked official portal each quarter and move
 * the date forward only when you have actually re-read the source.
 */

export interface VisaStep {
  title: string;
  detail: string;
  /** Who is doing the work at this step — sets expectations honestly. */
  actor: 'You' | 'Meeqat' | 'Saudi authorities' | 'Employer';
}

export interface VisaGuide {
  slug: string;
  category: 'pilgrimage' | 'visit' | 'work' | 'residency' | 'platform';
  title: string;
  titleUrdu: string;
  titleArabic: string;
  /** One line a person can repeat to their family. */
  summary: string;
  heroImage: string;
  images: string[];
  whoFor: string[];
  documents: string[];
  steps: VisaStep[];
  fees: { label: string; amount: string; note?: string }[];
  timeline: string;
  validity: string;
  notes: string[];
  officialLinks: { label: string; url: string }[];
  lastVerified: string;
}

export const visaGuides: VisaGuide[] = [
  {
    slug: 'umrah-visa',
    category: 'pilgrimage',
    title: 'Umrah Visa',
    titleUrdu: 'عمرہ ویزہ',
    titleArabic: 'تأشيرة العمرة',
    summary:
      'Issued through Nusuk by a licensed operator. It cannot be applied for until your hotel and transport are already confirmed and booked.',
    heroImage: '/images/kaaba.jpg',
    images: ['/images/kaaba.jpg', '/images/hero-kaaba-night.jpg', '/images/madina-nabawi-sunset.jpg'],
    whoFor: [
      'Anyone performing Umrah, at any time of year outside the Hajj season',
      'Families travelling together — children are included on their own visas',
      'First-time pilgrims who want the hotel, flights and ziyarat handled as one package',
    ],
    documents: [
      'Passport valid at least 6 months, with two blank pages',
      'Recent white-background photograph, face clearly visible',
      'CNIC copy (B-Form for children)',
      'Vaccination record as required at the time of travel',
      'Mahram documentation where applicable',
    ],
    steps: [
      {
        actor: 'You',
        title: 'Choose dates, hotels and departure city',
        detail:
          'We agree the itinerary first, because the visa application depends on it. Nothing can be submitted from a blank form.',
      },
      {
        actor: 'Meeqat',
        title: 'Book hotels on Nusuk and obtain the BRN',
        detail:
          'Since 10 June 2025 an Umrah visa application must carry a Nusuk-confirmed hotel Booking Reference Number plus confirmed transport. We book on Nusuk Masar as a licensed operator and attach the BRN.',
      },
      {
        actor: 'Meeqat',
        title: 'Create or link your Nusuk pilgrim profile',
        detail:
          'Your profile carries your permits during the trip — including Rawdah booking in Madina — so it must be set up correctly before departure.',
      },
      {
        actor: 'Saudi authorities',
        title: 'Visa issued electronically',
        detail:
          'The visa is returned against your passport and Nusuk profile. There is no instant confirmation and no operator can promise one.',
      },
      {
        actor: 'Meeqat',
        title: 'Tickets, transfers and group briefing',
        detail:
          'We issue tickets, confirm airport transfers and the Makkah–Madina leg, and brief the group before departure.',
      },
    ],
    fees: [
      { label: 'Visa and processing', amount: 'Included in package', note: 'Quoted as part of your per-person price, never separately inflated' },
      { label: 'Mandatory insurance', amount: 'Included in package' },
      { label: 'Hotel, flights, transport', amount: 'Depends on season and hotel band', note: 'Ramadan’s last ten nights cost several times the normal rate' },
    ],
    timeline:
      'Plan 3–4 weeks ahead in normal seasons. For Ramadan, book 3–4 months ahead — hotels near the Haram sell out long before the visas open.',
    validity:
      'The visa expires 30 days after issue if you have not entered Saudi Arabia. Once you enter, you may stay up to 90 days. You may travel to any Saudi city and may enter and leave through different airports.',
    notes: [
      'No agent can issue an Umrah visa "instantly". If someone promises that, they are either not licensed or not telling you the truth.',
      'The 30-day clock starts from the issue date, not your flight date — which is why we do not apply too early.',
      'A multiple-entry Umrah visa valid 365 days, with a cumulative 90-day stay, was announced on 20 July 2026 and is issued through Nusuk.',
      'MoRA entertains complaints only against approved companies. Check any operator against the official list before you pay.',
    ],
    officialLinks: [
      { label: 'Nusuk — official Saudi pilgrimage platform', url: 'https://www.nusuk.sa' },
      { label: 'Saudi Ministry of Hajj and Umrah', url: 'https://www.haj.gov.sa' },
      { label: 'Pakistan Ministry of Religious Affairs (MoRA)', url: 'https://www.mora.gov.pk' },
    ],
    lastVerified: '11 August 2026',
  },
  {
    slug: 'saudi-visit-visa',
    category: 'visit',
    title: 'Saudi Tourist / Visit Visa',
    titleUrdu: 'سعودی وزٹ ویزہ',
    titleArabic: 'تأشيرة الزيارة السياحية',
    summary:
      'For tourism and visiting the Kingdom. Pakistani passport holders cannot use the online e-visa route — biometrics at a Tasheer centre are required.',
    heroImage: '/images/visa.jpg',
    images: ['/images/visa.jpg', '/images/airport-terminal.jpg', '/images/family-travel.jpg'],
    whoFor: [
      'Tourists visiting Saudi Arabia outside the pilgrimage system',
      'Travellers combining a Saudi trip with Umrah performed on this visa',
      'Business travellers attending short meetings or events',
    ],
    documents: [
      'Passport valid 6–8 months with two blank pages',
      'Two recent passport photographs, white background',
      'Bank statement, typically 3–6 months, showing consistent balance',
      'Proof of accommodation and return ticket',
      'Employment or business proof',
    ],
    steps: [
      { actor: 'You', title: 'Bring documents to any Meeqat office', detail: 'We check the file first. Most rejections are avoidable paperwork errors caught at this stage.' },
      { actor: 'Meeqat', title: 'File prepared and Enjaz registration completed', detail: 'Enjaz registration is mandatory before entry to the Kingdom; we complete it as part of the file.' },
      { actor: 'You', title: 'Attend a Tasheer centre for biometrics', detail: 'Fingerprints and photograph are captured in person. Centres operate in Islamabad, Rawalpindi, Lahore and Karachi; we book the appointment and tell you exactly what to carry.' },
      { actor: 'Saudi authorities', title: 'Assessment and decision', detail: 'The application is assessed by the Saudi mission. Neither we nor any agent can influence or accelerate the outcome.' },
      { actor: 'Meeqat', title: 'Passport returned with the decision', detail: 'We collect and return your passport and explain the result and next steps.' },
    ],
    fees: [
      { label: 'Saudi visa fee', amount: 'From about SAR 300', note: 'Set by the Saudi authorities; converts to roughly PKR 23,000 and moves with the exchange rate' },
      { label: 'Mandatory health insurance', amount: 'Added to the visa fee' },
      { label: 'Tasheer centre service charge', amount: 'Paid at the centre' },
      { label: 'Meeqat service fee', amount: 'Quoted before you commit', note: 'Always told to you up front, never added later' },
    ],
    timeline: 'Typically 7–14 working days after biometrics, though the Saudi mission sets the pace and busy seasons run longer.',
    validity:
      'As of February 2025 Pakistani nationals receive a single-entry tourist visa valid 30 days; the previous one-year multiple-entry option is suspended. Holders of a valid UK, US or Schengen visa or residence may qualify for the e-visa or visa-on-arrival route instead.',
    notes: [
      'Pakistani passport holders are not eligible for the direct Saudi e-visa — anyone telling you otherwise is describing a different nationality’s process.',
      'Bank statements matter more than people expect. Thin or suddenly-topped-up accounts are a common cause of refusal.',
      'A visit visa is not an Umrah visa, though Umrah may be performed on it. If Umrah is your purpose, the Nusuk route is usually simpler and cheaper.',
    ],
    officialLinks: [
      { label: 'Tasheer — Saudi visa and biometrics in Pakistan', url: 'https://vcsa.tasheer.com' },
      { label: 'Saudi Ministry of Foreign Affairs', url: 'https://www.mofa.gov.sa' },
      { label: 'Saudi Visa — official portal', url: 'https://visa.mofa.gov.sa' },
    ],
    lastVerified: '11 August 2026',
  },
  {
    slug: 'family-visit-visa',
    category: 'visit',
    title: 'Family Visit Visa',
    titleUrdu: 'فیملی وزٹ ویزہ',
    titleArabic: 'تأشيرة الزيارة العائلية',
    summary:
      'For close relatives of someone already living in Saudi Arabia. Sponsored by the resident from inside the Kingdom, then completed here.',
    heroImage: '/images/family-travel.jpg',
    images: ['/images/family-travel.jpg', '/images/airport-terminal.jpg'],
    whoFor: [
      'Parents, spouses and children of a Saudi resident (Iqama holder) or citizen',
      'Families joining a working relative for an extended visit',
      'Relatives combining a family visit with Umrah',
    ],
    documents: [
      'Sponsor’s Iqama copy and employment letter',
      'Proof of relationship — nikah nama, B-Form or family registration certificate, attested',
      'Applicant passport valid 6 months with blank pages',
      'Photographs, white background',
      'Sponsor’s salary certificate where requested',
    ],
    steps: [
      { actor: 'Employer', title: 'Sponsor applies from inside Saudi Arabia', detail: 'The resident raises the request through the Ministry of Foreign Affairs portal or their employer, and receives an approved visa authorisation number.' },
      { actor: 'You', title: 'Bring the authorisation number and documents to us', detail: 'We verify the relationship documents are attested correctly — this is where most family files stall.' },
      { actor: 'Meeqat', title: 'Application lodged and appointment booked', detail: 'We complete the submission and arrange the Tasheer biometrics appointment.' },
      { actor: 'You', title: 'Biometrics at a Tasheer centre', detail: 'Attendance is in person; there is no remote alternative for Pakistani passports.' },
      { actor: 'Saudi authorities', title: 'Visa issued and stamped', detail: 'Processing runs alongside standard visit visa timelines.' },
    ],
    fees: [
      { label: 'Family visit visa fee', amount: 'About SAR 300 per visa' },
      { label: 'Mandatory health insurance', amount: 'About SAR 500 per visitor', note: 'Together roughly SAR 800 per person' },
      { label: 'Attestation of relationship documents', amount: 'Varies by document' },
      { label: 'Meeqat service fee', amount: 'Quoted before you commit' },
    ],
    timeline: 'Sponsor-side approval is the slow part and is outside anyone’s control here. Once the authorisation number exists, 7–14 working days is typical.',
    validity:
      'Commonly issued as single entry valid 90 days with a 30-day stay, extendable once; multiple-entry versions valid 6 months or 1 year allow up to 90 days per visit. The exact grant depends on the sponsor’s status.',
    notes: [
      'Only first-degree relatives can normally be sponsored — parents, spouse and children. Cousins and siblings are usually refused.',
      'Relationship documents must be properly attested in Pakistan before they will be accepted. Doing this first saves weeks.',
      'The sponsor must have a valid Iqama with sufficient remaining validity, or the request will not generate.',
    ],
    officialLinks: [
      { label: 'Saudi Visa — official portal', url: 'https://visa.mofa.gov.sa' },
      { label: 'Absher — Saudi Ministry of Interior services', url: 'https://www.absher.sa' },
      { label: 'Tasheer Pakistan', url: 'https://vcsa.tasheer.com' },
    ],
    lastVerified: '11 August 2026',
  },
  {
    slug: 'work-visa-iqama',
    category: 'work',
    title: 'Work Visa & Iqama',
    titleUrdu: 'ورک ویزہ اور اقامہ',
    titleArabic: 'تأشيرة العمل والإقامة',
    summary:
      'Employer-sponsored. The visa gets you into the Kingdom; the Iqama is the residence permit your employer must issue within 90 days of arrival.',
    heroImage: '/images/airport-terminal.jpg',
    images: ['/images/airport-terminal.jpg', '/images/visa.jpg'],
    whoFor: [
      'Workers with a confirmed job offer and a Saudi employer willing to sponsor',
      'Skilled and professional staff whose qualifications need Dataflow verification',
      'Anyone already offered a contract who wants the paperwork handled properly',
    ],
    documents: [
      'Passport valid at least 6 months',
      'Signed employment contract or offer letter from the Saudi employer',
      'Educational certificates, attested — and Dataflow verification for regulated professions',
      'GAMCA / Wafid approved medical examination report',
      'Police character certificate',
      'Photographs to Saudi specification',
    ],
    steps: [
      { actor: 'Employer', title: 'Employer obtains a block visa and Qiwa approval', detail: 'Labour approvals run through Qiwa. Without this, nothing downstream can start — and no agent can create it for you.' },
      { actor: 'You', title: 'Medical, attestation and Dataflow', detail: 'GAMCA/Wafid approved medical, degree attestation, and Dataflow primary source verification where your profession requires it. We guide the sequence so nothing expires while you wait for something else.' },
      { actor: 'Meeqat', title: 'Visa application lodged and biometrics booked', detail: 'Application submitted against the employer’s authorisation, with a Tasheer appointment arranged.' },
      { actor: 'Saudi authorities', title: 'Work visa issued', detail: 'You travel on this visa. It is an entry permit, not yet residence.' },
      { actor: 'Employer', title: 'Iqama issued within 90 days of arrival', detail: 'Your employer applies through Absher and Muqeem. After biometrics and medicals inside the Kingdom, the Iqama is issued electronically and appears on Absher and Muqeem.' },
    ],
    fees: [
      { label: 'Work visa fee', amount: 'About SAR 100', note: 'Government fee' },
      { label: 'Iqama issuance', amount: 'About SAR 650 per year', note: 'Normally an employer cost' },
      { label: 'Dependent levy', amount: 'About SAR 400 per dependent per month', note: 'If your family joins you on your Iqama' },
      { label: 'Employer total burden', amount: 'Roughly SAR 8,000–12,000 per year', note: 'Visa, Iqama, expatriate levy and insurance combined' },
      { label: 'Medical, attestation, Dataflow', amount: 'Paid in Pakistan, varies by profession' },
    ],
    timeline:
      'Realistically 6–12 weeks end to end, dominated by attestation, Dataflow and the employer’s own approvals. The Iqama itself is issued electronically within about 24 hours once in-Kingdom formalities are done.',
    validity:
      'The Iqama is typically issued for one year and renewed by your employer. You remain on the work visa only for the first 90 days after arrival, during which the Iqama must be issued.',
    notes: [
      'Your Iqama is tied to your employer. Changing jobs is a formal transfer process, not simply resigning.',
      'Never pay a "visa fee" to an individual. Legitimate government fees are paid through official channels — see the fraud warning in our footer.',
      'Degree attestation and Dataflow are the two steps that delay almost every file. Start them the day you accept the offer.',
      'Check that your employer is genuinely registered on Qiwa before you resign from anything in Pakistan.',
    ],
    officialLinks: [
      { label: 'Qiwa — Saudi labour platform', url: 'https://qiwa.sa' },
      { label: 'Absher — Ministry of Interior services', url: 'https://www.absher.sa' },
      { label: 'Muqeem — residency and visa management', url: 'https://muqeem.sa' },
      { label: 'Wafid — approved medical examinations', url: 'https://wafid.com' },
    ],
    lastVerified: '11 August 2026',
  },
  {
    slug: 'absher-and-muqeem',
    category: 'platform',
    title: 'Absher, Muqeem & Nusuk explained',
    titleUrdu: 'ابشر، مقیم اور نسک کی وضاحت',
    titleArabic: 'شرح أبشر ومقيم ونُسك',
    summary:
      'Three Saudi government platforms people constantly confuse. Knowing which one does what saves a lot of wasted trips.',
    heroImage: '/images/visa.jpg',
    images: ['/images/visa.jpg'],
    whoFor: [
      'Anyone holding or applying for a Saudi Iqama',
      'Pilgrims who need Nusuk permits for Rawdah and the Haramain',
      'Families whose sponsor manages their status from inside the Kingdom',
    ],
    documents: [
      'Iqama or National ID number for Absher registration',
      'A Saudi mobile number registered in your own name',
      'Passport details for Nusuk profile creation',
    ],
    steps: [
      { actor: 'You', title: 'Absher — the Ministry of Interior account', detail: 'Established in 2010 and now carrying hundreds of government services: appointments, official documents, exit/re-entry visas and status checks. Register at absher.sa or in the app with your ID, phone and email.' },
      { actor: 'You', title: 'Activate the Absher account', detail: 'Activation happens in person — at a bank, an ATM, a self-service kiosk or a Jawazat office. This step catches people out; the online registration alone does not give you a working account.' },
      { actor: 'Employer', title: 'Muqeem — residency and visa management', detail: 'Employers use Muqeem to issue and renew Iqamas, raise exit and re-entry visas and manage employee records. As a worker you mostly see the results of it, not the platform itself.' },
      { actor: 'Meeqat', title: 'Nusuk — pilgrimage permits and bookings', detail: 'Nusuk holds your pilgrim profile, hotel bookings and permits including Rawdah. Nusuk Masar is the operator-side portal we use to submit Umrah visas.' },
    ],
    fees: [
      { label: 'Absher registration', amount: 'Free' },
      { label: 'Muqeem services', amount: 'Employer account, government fees apply' },
      { label: 'Nusuk profile', amount: 'Free', note: 'Permits themselves are free; hotels and transport are not' },
    ],
    timeline: 'Absher registration takes minutes online; activation depends on getting to a bank or kiosk. Nusuk profiles we set up as part of your Umrah file.',
    validity: 'Accounts remain valid while your underlying status does. An expired Iqama disables most Absher services until renewed.',
    notes: [
      'Absher is for residents and citizens inside the system — it is not where a Pakistani tourist applies for a visa.',
      'Your Saudi mobile number must be registered in your own name or Absher activation will fail.',
      'Nusuk permits for Rawdah open on a schedule and fill quickly. We book them as soon as your window opens.',
    ],
    officialLinks: [
      { label: 'Absher', url: 'https://www.absher.sa' },
      { label: 'Muqeem', url: 'https://muqeem.sa' },
      { label: 'Nusuk', url: 'https://www.nusuk.sa' },
    ],
    lastVerified: '11 August 2026',
  },
  {
    slug: 'premium-residency',
    category: 'residency',
    title: 'Premium Residency',
    titleUrdu: 'پریمیم ریزیڈنسی',
    titleArabic: 'الإقامة المميزة',
    summary:
      'Saudi Arabia’s long-stay residence that does not require an employer sponsor. Expensive, and genuinely relevant only to a small number of people.',
    heroImage: '/images/hotel.jpg',
    images: ['/images/hotel.jpg'],
    whoFor: [
      'Investors and business owners establishing themselves in the Kingdom',
      'Senior professionals who want residence independent of an employer',
      'Families seeking long-term stability without repeated Iqama transfers',
    ],
    documents: [
      'Passport with substantial remaining validity',
      'Proof of financial standing appropriate to the category',
      'Clean criminal record certificate',
      'Medical fitness report',
    ],
    steps: [
      { actor: 'You', title: 'Confirm which category fits', detail: 'Categories differ sharply in cost and eligibility. Getting this wrong wastes a large application fee.' },
      { actor: 'Meeqat', title: 'Document preparation and attestation', detail: 'We prepare and attest the Pakistan-side paperwork.' },
      { actor: 'Saudi authorities', title: 'Assessment by the Premium Residency Centre', detail: 'Assessed directly by the Saudi authority; no agent has influence over the decision.' },
    ],
    fees: [
      { label: 'Limited duration (annual)', amount: 'About SAR 100,000 per year' },
      { label: 'Unlimited duration (one-off)', amount: 'About SAR 800,000' },
    ],
    timeline: 'Several months. This is not a fast route and should not be presented as one.',
    validity:
      'Limited duration renews annually; unlimited duration is permanent. Both allow entry and exit without an employer sponsor and without exit/re-entry visas.',
    notes: [
      'For the overwhelming majority of Pakistani applicants this is not the right route — a work visa and Iqama is. We will tell you so rather than sell you a file.',
      'Figures above are the headline government costs and exclude professional and attestation fees.',
    ],
    officialLinks: [
      { label: 'Saudi Premium Residency Center', url: 'https://premiumresidency.sa' },
      { label: 'Absher', url: 'https://www.absher.sa' },
    ],
    lastVerified: '11 August 2026',
  },
];

export function getVisaGuide(slug: string): VisaGuide | undefined {
  return visaGuides.find((g) => g.slug === slug);
}

export const visaCategoryLabels: Record<VisaGuide['category'], string> = {
  pilgrimage: 'Pilgrimage',
  visit: 'Visit & Tourism',
  work: 'Work & Employment',
  residency: 'Long-term Residency',
  platform: 'Government Platforms',
};
