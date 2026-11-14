/**
 * Al-Wisal / ADSA Camp 2026 - Master Single Source of Truth
 * All facts, demo credentials, dates, and contacts are defined here.
 */

export const CAMP_FACTS = {
  name: 'Al-Wisal',
  nameArabic: 'الوصال',
  tagline: 'Towards the Beloved',
  taglineArabic: 'نَحْوَ الحَبِيبِ',
  organiser: 'Alathurpadi Dars Students Association (ADSA)',
  organiserMalayalam: 'ആലത്തൂർപ്പടി ദർസ് സ്റ്റുഡന്റ്സ് അസോസിയേഷൻ (ADSA)',
  audience: 'graduating students of SUFFA Dars',
  audienceDescription: 'SUFFA = Scholars Union For Fundamental Activities, the Alathurpadi Dars Students Union',
  
  // Camp Dates
  startDate: '2026-12-24',
  endDate: '2026-12-30',
  startDateISO: '2026-12-24T05:00:00+05:30',
  endDateISO: '2026-12-30T21:00:00+05:30',
  deadlineDate: '2026-12-10',
  deadlineDateISO: '2026-12-10T23:59:59+05:30',
  durationDays: 7,
  timezone: 'Asia/Kolkata',

  // Venue & Capacity
  venueName: 'Alathurpadi Dars',
  venuePlace: 'Melmuri, Malappuram, Kerala',
  venueFull: 'Alathurpadi Dars, Melmuri, Malappuram, Kerala',
  venuePin: '676517',
  capacity: 100,
  suffaDarsCount: '39+',
  mapsLink: 'https://maps.app.goo.gl/c8PnXU7Jufx1KgoH6',

  // Patron & Tradition
  patron: 'Dr. C. K. Abdurahman Faizy Aripra',
  patronRole: 'Chief Mentor & Patron',
  dailyRoutineSummary: "Fajr, Qur'an recitation 30 min, Sahih al-Bukhari with the Ustad, then sessions.",

  // Transit Guide
  transit: {
    airport: 'Calicut International Airport (CCJ / Karipur) — ~22 km',
    railway: 'Tirur Railway Station (~32 km) and Kozhikode Railway Station (~45 km)',
    road: 'Direct road connectivity via Malappuram / Manjeri (Alathurpadi stop on Melmuri road)',
    receptionNote: 'An ADSA reception team coordinates arrivals on 24 Dec.'
  },

  // Public Contact Details (Public contact ONLY, never a login)
  contact: {
    phone: '+91 90745 25205',
    phoneRaw: '+919074525205',
    whatsapp: '+91 90745 25205',
    whatsappClean: '919074525205',
    email: 'alathurpadidars@gmail.com',
    website: 'https://alathurpadidars.in/',
    address: 'Alathurpadi Dars, Melmuri, Malappuram, Kerala, India — PIN 676517',
  },

  // Social Channels
  socials: [
    { id: 'facebook', label: 'Facebook', handle: 'alathoorpadidars', url: 'https://www.facebook.com/alathoorpadidars/' },
    { id: 'instagram', label: 'Instagram', handle: 'alathurpadi_dars', url: 'https://www.instagram.com/alathurpadi_dars' },
    { id: 'twitter', label: 'X (Twitter)', handle: 'ALATHURPADARS', url: 'https://twitter.com/ALATHURPADARS' },
    { id: 'youtube', label: 'YouTube', handle: 'alathurpadidars', url: 'https://www.youtube.com/alathurpadidars' },
  ],

  // Demo Credentials (Shown clearly in login boxes)
  demoCredentials: {
    admin: {
      email: 'admin@alwisal.demo',
      password: 'Wisal@2026',
      label: 'Admin Portal',
    },
    student: {
      phone: '9876543210',
      password: 'wisal123',
      name: 'Ahmad Farooq (Sample Delegate)',
      dars: 'Dars 01 (Alathurpadi)',
      passRef: 'AW26-784219',
      label: 'Student Pass Dashboard',
    },
  },
};

// Shorthand exports for backwards compatibility across existing components
export const CONTACT = {
  phones: [
    { label: 'Helpline / Office', number: CAMP_FACTS.contact.phoneRaw, display: CAMP_FACTS.contact.phone },
  ],
  whatsapp: {
    number: CAMP_FACTS.contact.phoneRaw,
    cleanNumber: CAMP_FACTS.contact.whatsappClean,
    message: 'Al-Wisal ക്യാമ്പിനെക്കുറിച്ച് അറിയാൻ ആഗ്രഹിക്കുന്നു',
  },
  email: CAMP_FACTS.contact.email,
  address: CAMP_FACTS.contact.address,
  mapsUrl: CAMP_FACTS.mapsLink,
};

export const SOCIALS = CAMP_FACTS.socials;

export const CONFIG = {
  CAMP_NAME: CAMP_FACTS.name,
  CAMP_TAGLINE: CAMP_FACTS.tagline,
  CAMP_START: CAMP_FACTS.startDateISO,
  CAMP_END: CAMP_FACTS.endDateISO,
  DEADLINE: CAMP_FACTS.deadlineDateISO,
  CAPACITY: CAMP_FACTS.capacity,
  VENUE: {
    NAME: CAMP_FACTS.venueName,
    NAME_EN: CAMP_FACTS.venueFull,
    PLACE: CAMP_FACTS.venuePlace,
    ADDRESS: CAMP_FACTS.contact.address,
    MAPS_URL: CAMP_FACTS.mapsLink,
  },
  CONTACT,
  SOCIALS,
  WHATSAPP_CHAT_URL: `https://wa.me/${CAMP_FACTS.contact.whatsappClean}?text=${encodeURIComponent(
    'Al-Wisal ക്യാമ്പിനെക്കുറിച്ച് അറിയാൻ ആഗ്രഹിക്കുന്നു'
  )}`,
  FORM_ENDPOINT: import.meta.env.VITE_FORM_ENDPOINT || '',
};

export function getDaysRemaining() {
  const target = new Date(CAMP_FACTS.startDateISO).getTime();
  const now = Date.now();
  const diff = target - now;
  if (diff <= 0) return 0;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
