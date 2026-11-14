/**
 * ADSA Camp Configuration
 * All editable event dates, venue details, and contact points
 */

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
  ORGANIZATION: 'ADSA (Aripra Dars Students Association)',
  DARS_NETWORK: 'SUFFA Dars Network (30 ദർസുകൾ)',
  
  // Venue
  VENUE: {
    NAME: 'മർകസുസ്സഖാഫത്തിൽ ഇസ്‌ലാമിയ്യ കാമ്പസ്',
    PLACE: 'അരിപ്ര, പെരിന്തൽമണ്ണ',
    DISTRICT: 'മലപ്പുറം, കേരളം',
    PIN: '679322',
    GOOGLE_MAPS_URL: 'https://maps.google.com/?q=Aripra+Malappuram',
    HOW_TO_REACH: 'പെരിന്തൽമണ്ണയിൽ നിന്ന് 8 കി.മീ. നിലമ്പൂർ റോഡിൽ അരിപ്ര ജംഗ്ഷനിൽ ഇറങ്ങി 500 മീറ്റർ.',
  },

  // Contact & Social
  WHATSAPP_NUMBER: '+919847000000',
  WHATSAPP_GROUP_URL: 'https://chat.whatsapp.com/placeholder-adsa-camp',
  PHONE_DISPLAY: '+91 98470 00000 / +91 94470 00000',
  EMAIL: 'contact@adsacamp.org',
  
  // Form submission endpoint (Google Apps Script web app URL)
  // If empty or failing, form enters demo mode with simulated success
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
