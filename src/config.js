/**
 * ADSA Camp Configuration
 * Verified contact details and social links from alathurpadidars.in
 */

export const CONTACT = {
  phones: [
    { label: 'ഹെൽപ്‌ലൈൻ / ഓഫീസ്', number: '+919074525205', display: '+91 90745 25205' },
  ],
  whatsapp: {
    number: '+919074525205',
    cleanNumber: '919074525205',
    message: 'ADSA ക്യാമ്പിനെക്കുറിച്ച് അറിയാൻ ആഗ്രഹിക്കുന്നു',
  },
  email: 'info@alathurpadidars.in',
  address: 'Alathurpadi Dars Campus & Mosque Precinct, Alathurpadi Juma Masjid, Melmuri Post, Malappuram, Kerala, India — PIN: 676517',
  addressMalayalam: 'ആലത്തൂർപടി ജുമാമസ്ജിദ് കാമ്പസ്, മേൽമുറി പി.ഒ, മലപ്പുറം, കേരളം — PIN: 676517',
  mapsUrl: '', // Left empty as not published on alathurpadidars.in
};

export const SOCIALS = [
  { id: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/alathoorpadidars/' },
  { id: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/alathurpadi_dars' },
  { id: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/alathurpadidars' },
  { id: 'twitter', label: 'X (Twitter)', url: 'https://twitter.com/alathurpadidars' },
];

export const CONFIG = {
  // Camp Schedule
  CAMP_START: '2026-12-20T05:30:00+05:30',
  CAMP_END: '2026-12-26T20:00:00+05:30',
  CAMP_DATES_LABEL: 'ഡിസംബർ 20–26',
  CAMP_DAYS_COUNT: 7,

  // Tagline & Subtitle
  TITLE_MALAYALAM: 'ഉസ്താദിനൊപ്പം ഏഴ് ദിനങ്ങൾ',
  SUBTITLE_MALAYALAM: 'SUFFA ദർസ് വിദ്യാർത്ഥികൾക്കായി ADSA ഒരുക്കുന്ന ഏഴ് ദിവസത്തെ ക്യാമ്പ്',
  FEE_LABEL: 'ഫീസില്ല · സൗജന്യം',

  // Leadership & Network
  USTAD_NAME: 'ഡോ. സി.കെ അബ്ദുറഹ്മാൻ ഫൈസി അരിപ്ര',
  USTAD_TITLE: 'ചെയർമാൻ, SUFFA ദർസ് നെറ്റ്‌വർക്ക് & അധ്യക്ഷൻ, ADSA',
  ORGANIZATION: 'ADSA (ആലത്തൂർപടി ദർസ് സ്റ്റുഡന്റ്സ് അസോസിയേഷൻ)',
  ORGANIZATION_EN: 'Alathurpadi Dars Students Association (ADSA)',
  DARS_NETWORK: 'SUFFA Dars Network (30 ദർസുകൾ)',

  // Venue details
  VENUE: {
    NAME: 'ആലത്തൂർപടി ദർസ് കാമ്പസ് & ജുമാമസ്ജിദ്',
    NAME_EN: 'Alathurpadi Dars Campus & Mosque Precinct',
    PLACE: 'മേൽമുറി, മലപ്പുറം',
    DISTRICT: 'മലപ്പുറം, കേരളം',
    PIN: '676517',
    ADDRESS: CONTACT.addressMalayalam,
    MAPS_URL: CONTACT.mapsUrl, // Will not render if empty
    HOW_TO_REACH: 'മലപ്പുറം ടൗണിൽ നിന്ന് മേൽമുറി റോഡിലൂടെ ആലത്തൂർപടി ജുമാമസ്ജിദ് കാമ്പസിൽ എത്തിച്ചേരാം.',
  },

  // Contact points shorthand referencing CONTACT
  CONTACT,
  SOCIALS,

  // WhatsApp Pre-filled URL
  WHATSAPP_CHAT_URL: `https://wa.me/${CONTACT.whatsapp.cleanNumber}?text=${encodeURIComponent(
    CONTACT.whatsapp.message
  )}`,

  // Form submission endpoint (Google Apps Script web app URL)
  // If empty or failing, form runs in demo mode with simulated success
  FORM_ENDPOINT: import.meta.env.VITE_FORM_ENDPOINT || '',
};

/**
 * Calculates remaining days until CAMP_START
 */
export function getDaysRemaining() {
  const target = new Date(CONFIG.CAMP_START).getTime();
  const now = new Date().getTime();
  const diff = target - now;
  if (diff <= 0) return 0;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
