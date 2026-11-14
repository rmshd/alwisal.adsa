/**
 * Al-Wisal Store (Versioned localStorage)
 * Front-end only reactive store with rich seeded demo data.
 */

import DARS_DATA from '../data/dars.json';
import { CAMP_FACTS } from '../config';

const STORE_KEY = 'alwisal_store_v1';

// 7 seeded FAQs
export const SEED_FAQS = [
  {
    id: 'faq-1',
    q: 'Who is eligible to participate in Al-Wisal 2026?',
    qArabic: 'مَنْ هُمُ المُؤَهَّلُونَ لِلْمُشَارَكَةِ فِي مُخَيَّمِ الوِصَالِ؟',
    a: 'The camp is organized strictly for graduating students and senior alumni of the SUFFA Dars network across Kerala. Attendance is residential for all 7 days.',
    category: 'Eligibility'
  },
  {
    id: 'faq-2',
    q: 'What is the daily sabaq curriculum?',
    qArabic: 'مَا هُوَ المَنْهَجُ اليَوْمِيُّ لِلسَّبَقِ؟',
    a: 'Each morning begins at dawn with Fajr congregation, followed by 30 minutes of collective Qur\'an recitation and the foundational Sahih al-Bukhari sabaq taught directly by Dr. C. K. Abdurahman Faizy.',
    category: 'Academic'
  },
  {
    id: 'faq-3',
    q: 'What is the registration fee for the camp?',
    qArabic: 'مَا هِيَ رُسُومُ التَّسْجِيلِ فِي المَخَيَّمِ؟',
    a: 'Registration and full residential boarding are complimentary for selected SUFFA Dars graduates, sponsored through ADSA endowment and community patrons.',
    category: 'Logistics'
  },
  {
    id: 'faq-4',
    q: 'What accommodation and dining facilities are provided?',
    qArabic: 'مَا هِيَ تَسْهِيلَاتُ الإِقَامَةِ وَالإِعَاشَةِ المُقَدَّمَةُ؟',
    a: 'Full residential boarding is arranged within the Alathurpadi Dars precinct, including comfortable lodging, nutritious meals, study halls, and 24-hour reception coordination.',
    category: 'Logistics'
  },
  {
    id: 'faq-5',
    q: 'What should delegates bring to the camp?',
    qArabic: 'مَاذَا يَجِبُ عَلَى الطَّالِبِ إِحْضَارُهُ مَعَهُ؟',
    a: 'Delegates must bring their white prayer attire, notebooks, personal copies of Sahih al-Bukhari (if preferred), bedding essentials, and their official camp entry pass (digital or printed).',
    category: 'Preparation'
  },
  {
    id: 'faq-6',
    q: 'How are travel arrivals coordinated on 24 December?',
    qArabic: 'كَيْفَ يَتِمُّ تَنْسِيقُ الوُصُولِ فِي ٢٤ دِيسَمْبِر؟',
    a: 'An ADSA volunteer reception desk will operate at Calicut Airport (CCJ), Tirur Railway Station, and Malappuram Municipal Bus Stand from morning on 24 Dec to guide delegates.',
    category: 'Travel'
  },
  {
    id: 'faq-7',
    q: 'What is the deadline for registration?',
    qArabic: 'مَا هُوَ آخِرُ مَوْعِدٍ لِلتَّسْجِيلِ؟',
    a: 'Applications close strictly on 10 December 2026 at 23:59 IST, or earlier if the 100-delegate residential capacity is reached.',
    category: 'Admission'
  }
];

// Seeded Speakers
export const SEED_SPEAKERS = [
  {
    id: 'speaker-faizy',
    name: 'Dr. C. K. Abdurahman Faizy Aripra',
    nameArabic: 'د. عبد الرحمن فيضي أريبرا',
    role: 'Patron & Master Teacher',
    org: 'Chairman, SUFFA Dars Network · Chief Mudarris, Alathurpadi',
    image: '/images/ustad.jpg',
    bio: 'Renowned traditional scholar, educator, and visionary patron guiding generations of Dars students in authentic classical scholarship.',
    isKeynote: true
  },
  {
    id: 'speaker-jifri',
    name: 'Sayyid Muhammad Jifri Muthukkoya Thangal',
    nameArabic: 'سيد محمد جفري متوكويا تنغل',
    role: 'Distinguished Guest of Honour',
    org: 'President, Samastha Kerala Jamiyyathul Ulama',
    image: '/images/guests/3.webp',
    bio: 'Supreme spiritual leader of the traditional Kerala Islamic fraternity, blessing the camp opening session.',
    isKeynote: true
  },
  {
    id: 'speaker-koyyode',
    name: 'Koyyod P. Umar Musliyar',
    nameArabic: 'كويود بي. عمر مسليار',
    role: 'Eminent Scholar & Mentor',
    org: 'General Secretary, Samastha Kerala Jamiyyathul Ulama',
    image: '/images/guests/6.webp',
    bio: 'Master of classical Islamic jurisprudence and revered educator delivering the Fiqh Methodology intensives.',
    isKeynote: true
  },
  {
    id: 'speaker-skssf',
    name: 'SKSSF State Leadership Council',
    nameArabic: 'المجلس القيادي لـ SKSSF',
    role: 'Special Session Mentors',
    org: 'Samastha Kerala Sunni Students Federation',
    image: '/images/guests/12.webp',
    bio: 'Youth leadership directors facilitating sessions on student activism, grassroots community service, and public intellectual work.',
    isKeynote: false
  },
  {
    id: 'speaker-guest-1',
    name: 'Hadith Specialisation Faculty',
    nameArabic: 'نخبة من علماء الحديث',
    role: 'Guest Muhaddith',
    org: 'Al-Wisal Visiting Academic Council',
    image: '/images/guests/13.webp',
    bio: 'Visiting scholars in classical Isnad preservation and text analysis.',
    isKeynote: false
  },
  {
    id: 'speaker-guest-2',
    name: 'Contemporary Fiqh Scholar (TBA)',
    nameArabic: 'عالم فقهي معاصر',
    role: 'Seminar Guest',
    org: 'Fatwa Research Division',
    image: '/images/guests/14.webp',
    bio: 'Guest lecturer on emerging financial, bio-ethical, and social contemporary rulings.',
    isKeynote: false
  }
];

// Seeded Sessions (7 Days: Fajr / Qur'an / Bukhari block, then Ustad session, guest session, afternoon activity)
export const SEED_SESSIONS = [
  // Day 1 - 24 Dec 2026
  {
    id: 'sess-101', day: 1, date: '2026-12-24', time: '05:00 - 05:45',
    title: 'Fajr & Collective Qur\'an Recitation',
    titleArabic: 'صلاة الفجر وتلاوة القرآن الكريم',
    speaker: 'Alathurpadi Qari Council', category: 'Sabaq'
  },
  {
    id: 'sess-102', day: 1, date: '2026-12-24', time: '06:00 - 08:30',
    title: 'Sahih al-Bukhari: Kitab Bad\' al-Wahy',
    titleArabic: 'صحيح البخاري: بدء الوحي',
    speaker: 'Dr. C. K. Abdurahman Faizy Aripra', category: 'Ustad'
  },
  {
    id: 'sess-103', day: 1, date: '2026-12-24', time: '10:00 - 12:30',
    title: 'Inaugural Plenary: Towards the Beloved (Al-Wisal)',
    titleArabic: 'الجلسة الافتتاحية: نحو الحبيب',
    speaker: 'Sayyid Muhammad Jifri Muthukkoya Thangal', category: 'Guest'
  },
  {
    id: 'sess-104', day: 1, date: '2026-12-24', time: '14:30 - 16:30',
    title: 'Fraternal Orientation & SUFFA Network Alignment',
    titleArabic: 'التوجيه الأخوي ومواءمة شبكة الصفة',
    speaker: 'ADSA Central Council', category: 'Activity'
  },
  {
    id: 'sess-105', day: 1, date: '2026-12-24', time: '19:30 - 21:00',
    title: 'Majlis al-Noor & Spiritual Introspection (Tazkiyah)',
    titleArabic: 'مجلس النور والتزكية القلبية',
    speaker: 'Ustad & Visiting Shuyukh', category: 'Logistics'
  },

  // Day 2 - 25 Dec 2026
  {
    id: 'sess-201', day: 2, date: '2026-12-25', time: '05:00 - 05:45',
    title: 'Fajr & 30-Min Qur\'an Muraja\'ah',
    titleArabic: 'الفجر ومراجعة القرآن الكريم',
    speaker: 'Camp Imams', category: 'Sabaq'
  },
  {
    id: 'sess-202', day: 2, date: '2026-12-25', time: '06:00 - 08:30',
    title: 'Sahih al-Bukhari: Kitab al-Iman (Faith & Action)',
    titleArabic: 'صحيح البخاري: كتاب الإيمان',
    speaker: 'Dr. C. K. Abdurahman Faizy Aripra', category: 'Ustad'
  },
  {
    id: 'sess-203', day: 2, date: '2026-12-25', time: '10:00 - 12:30',
    title: 'Classical Hermeneutics: Reading the Traditional Text',
    titleArabic: 'المنهجية التقليدية في قراءة المتون',
    speaker: 'Koyyod P. Umar Musliyar', category: 'Guest'
  },
  {
    id: 'sess-204', day: 2, date: '2026-12-25', time: '14:30 - 16:30',
    title: 'Manuscript Workshop: Preserving Kerala Dars Heritage',
    titleArabic: 'ورشة عمل المخطوطات وتراث دارس كيرالا',
    speaker: 'Academic Heritage Cell', category: 'Activity'
  },
  {
    id: 'sess-205', day: 2, date: '2026-12-25', time: '19:30 - 21:00',
    title: 'Night of Hadith: Oral Isnad Transmissions',
    titleArabic: 'ليلة الرواية والإجازات الحديثية',
    speaker: 'Dr. C. K. Abdurahman Faizy', category: 'Ustad'
  },

  // Day 3 - 26 Dec 2026
  {
    id: 'sess-301', day: 3, date: '2026-12-26', time: '05:00 - 05:45',
    title: 'Fajr & Qur\'an Recitation Block',
    titleArabic: 'الفجر وحلقة التلاوة',
    speaker: 'Camp Imams', category: 'Sabaq'
  },
  {
    id: 'sess-302', day: 3, date: '2026-12-26', time: '06:00 - 08:30',
    title: 'Sahih al-Bukhari: Kitab al-Ilm (Sciences of Revelation)',
    titleArabic: 'صحيح البخاري: كتاب العلم',
    speaker: 'Dr. C. K. Abdurahman Faizy Aripra', category: 'Ustad'
  },
  {
    id: 'sess-303', day: 3, date: '2026-12-26', time: '10:00 - 12:30',
    title: 'Usul al-Fiqh: Navigating Modern Dilemmas',
    titleArabic: 'أصول الفقه ومعالجة النوازل المعاصرة',
    speaker: 'Visiting Mufti Council', category: 'Guest'
  },
  {
    id: 'sess-304', day: 3, date: '2026-12-26', time: '14:30 - 16:30',
    title: 'Colloquium: Scholar Activism in the Digital Age',
    titleArabic: 'النشاط الدعوي للعلماء في العصر الرقمي',
    speaker: 'SKSSF State Leadership', category: 'Activity'
  },
  {
    id: 'sess-305', day: 3, date: '2026-12-26', time: '19:30 - 21:00',
    title: 'Qasidah Burdah & Salawat Fellowship',
    titleArabic: 'إنشاد البردة والصلوات المحمدية',
    speaker: 'Alathurpadi Munshids', category: 'Logistics'
  },

  // Day 4 - 27 Dec 2026
  {
    id: 'sess-401', day: 4, date: '2026-12-27', time: '05:00 - 05:45',
    title: 'Fajr & 30-Min Qur\'an Tadabbur',
    titleArabic: 'الفجر وتدبر القرآن الكريم',
    speaker: 'Camp Imams', category: 'Sabaq'
  },
  {
    id: 'sess-402', day: 4, date: '2026-12-27', time: '06:00 - 08:30',
    title: 'Sahih al-Bukhari: Kitab al-Wudu wa al-Salah',
    titleArabic: 'صحيح البخاري: أبواب الطهارة والصلاة',
    speaker: 'Dr. C. K. Abdurahman Faizy Aripra', category: 'Ustad'
  },
  {
    id: 'sess-403', day: 4, date: '2026-12-27', time: '10:00 - 12:30',
    title: 'Community Leadership & Pastoral Care in Dars Zones',
    titleArabic: 'القيادة المجتمعية والرعاية الدعوية',
    speaker: 'Senior Samastha Scholars', category: 'Guest'
  },
  {
    id: 'sess-404', day: 4, date: '2026-12-27', time: '14:30 - 16:30',
    title: 'Group Case Study: Resolving Village Disputes via Fiqh',
    titleArabic: 'دراسات تطبيقية: حل النزاعات الأهلية',
    speaker: 'Faculty Panel', category: 'Activity'
  },
  {
    id: 'sess-405', day: 4, date: '2026-12-27', time: '19:30 - 21:00',
    title: 'Evening Dialogue: Mentorship Circles with Ustad',
    titleArabic: 'حوار المساء: حلقات التوجيه المباشر',
    speaker: 'Dr. C. K. Abdurahman Faizy', category: 'Ustad'
  },

  // Day 5 - 28 Dec 2026
  {
    id: 'sess-501', day: 5, date: '2026-12-28', time: '05:00 - 05:45',
    title: 'Fajr & Daily Qur\'an Recitation',
    titleArabic: 'الفجر وتلاوة الأجزاء القرآنية',
    speaker: 'Camp Imams', category: 'Sabaq'
  },
  {
    id: 'sess-502', day: 5, date: '2026-12-28', time: '06:00 - 08:30',
    title: 'Sahih al-Bukhari: Kitab al-Jana\'iz & Akhirah',
    titleArabic: 'صحيح البخاري: الجنائز وعبر الآخرة',
    speaker: 'Dr. C. K. Abdurahman Faizy Aripra', category: 'Ustad'
  },
  {
    id: 'sess-503', day: 5, date: '2026-12-28', time: '10:00 - 12:30',
    title: 'Contemporary Financial Contracts & Islamic Banking',
    titleArabic: 'المعاملات المالية المعاصرة',
    speaker: 'Islamic Economics Researcher', category: 'Guest'
  },
  {
    id: 'sess-504', day: 5, date: '2026-12-28', time: '14:30 - 16:30',
    title: 'Dars Leadership Hackathon: Student Union Innovations',
    titleArabic: 'مختبر الابتكار الطلابي في الدوارس',
    speaker: 'ADSA Innovation Team', category: 'Activity'
  },
  {
    id: 'sess-505', day: 5, date: '2026-12-28', time: '19:30 - 21:00',
    title: 'Sufic Poetry of Malabar & Spiritual Chants',
    titleArabic: 'مدائح الصوفية وتراث ملبار',
    speaker: 'Heritage Munshids', category: 'Logistics'
  },

  // Day 6 - 29 Dec 2026
  {
    id: 'sess-601', day: 6, date: '2026-12-29', time: '05:00 - 05:45',
    title: 'Fajr & 30-Min Qur\'an Recitation',
    titleArabic: 'الفجر وحلقة القرآن الكريم',
    speaker: 'Camp Imams', category: 'Sabaq'
  },
  {
    id: 'sess-602', day: 6, date: '2026-12-29', time: '06:00 - 08:30',
    title: 'Sahih al-Bukhari: Kitab al-Buyu\' (Ethical Commerce)',
    titleArabic: 'صحيح البخاري: كتاب البيوع',
    speaker: 'Dr. C. K. Abdurahman Faizy Aripra', category: 'Ustad'
  },
  {
    id: 'sess-603', day: 6, date: '2026-12-29', time: '10:00 - 12:30',
    title: 'Higher Research Pathways for Dars Graduates',
    titleArabic: 'مسارات الدراسات العليا لطلاب الدوارس',
    speaker: 'University Deans & Research Fellows', category: 'Guest'
  },
  {
    id: 'sess-604', day: 6, date: '2026-12-29', time: '14:30 - 16:30',
    title: 'SUFFA 39 Dars Presidents Summit & Resolution',
    titleArabic: 'قمة رؤساء دوارس الصفة وإعلان البيان',
    speaker: 'Dars Delegates', category: 'Activity'
  },
  {
    id: 'sess-605', day: 6, date: '2026-12-29', time: '19:30 - 21:00',
    title: 'Heartfelt Reflections & Senior Graduate Testimonies',
    titleArabic: 'شهادات الخريجين ومشاهد الوفاء',
    speaker: 'Alumni Network', category: 'Logistics'
  },

  // Day 7 - 30 Dec 2026
  {
    id: 'sess-701', day: 7, date: '2026-12-30', time: '05:00 - 05:45',
    title: 'Fajr & Khatm al-Qur\'an Du\'a',
    titleArabic: 'الفجر ودعاء ختم القرآن الكريم',
    speaker: 'Dr. C. K. Abdurahman Faizy', category: 'Sabaq'
  },
  {
    id: 'sess-702', day: 7, date: '2026-12-30', time: '06:00 - 09:00',
    title: 'Khatm al-Bukhari & Sanad Authorization Ceremony',
    titleArabic: 'ختم صحيح البخاري وتوزيع الإجازات بالسند المتصل',
    speaker: 'Dr. C. K. Abdurahman Faizy Aripra', category: 'Ustad'
  },
  {
    id: 'sess-703', day: 7, date: '2026-12-30', time: '10:30 - 13:00',
    title: 'Grand Valedictory Assembly: The Wisal Pledge',
    titleArabic: 'المؤتمر الختامي العام وميثاق الوصال',
    speaker: 'Samastha & ADSA Presidium', category: 'Guest'
  },
  {
    id: 'sess-704', day: 7, date: '2026-12-30', time: '14:30 - 16:00',
    title: 'Award of Fellowships, Certificates & Passports',
    titleArabic: 'توزيع شهادات الزمالة التكريمية',
    speaker: 'ADSA Office Bearers', category: 'Activity'
  },
  {
    id: 'sess-705', day: 7, date: '2026-12-30', time: '16:30 - 18:00',
    title: 'Farewell Du\'a & Departure Coordination',
    titleArabic: 'دعاء الوداع وتنظيم مغادرة الوفود',
    speaker: 'Ustad & Elders', category: 'Logistics'
  }
];

// 28 Seeded Registrations with varied Dars, districts, statuses, and dates
export const SEED_REGISTRATIONS = [
  { id: 'REG-101', ref: 'AW26-784219', name: 'Ahmad Farooq', phone: '9876543210', parentPhone: '9847123456', dars: 'Dars 01 - Markaz Aripra', district: 'Malappuram', higherStudy: 'Hadith Specialisation', status: 'Confirmed', date: '2026-11-01T10:14:00Z' },
  { id: 'REG-102', ref: 'AW26-319402', name: 'Muhammad Bilal K.', phone: '9745123890', parentPhone: '9447654321', dars: 'Dars 02 - Majlis Angadipuram', district: 'Malappuram', higherStudy: 'Usul al-Fiqh', status: 'Confirmed', date: '2026-11-02T11:20:00Z' },
  { id: 'REG-103', ref: 'AW26-902341', name: 'Umar Mukhtar V.P.', phone: '9895341209', parentPhone: '9846112233', dars: 'Dars 03 - Noorul Islam Melattur', district: 'Malappuram', higherStudy: 'Fatwa Studies', status: 'Confirmed', date: '2026-11-02T14:45:00Z' },
  { id: 'REG-104', ref: 'AW26-441209', name: 'Zainul Abid M.', phone: '9633129845', parentPhone: '9446781234', dars: 'Dars 04 - Hidayathul Muslimeen Manjeri', district: 'Malappuram', higherStudy: 'Kalam & Logic', status: 'Confirmed', date: '2026-11-03T09:12:00Z' },
  { id: 'REG-105', ref: 'AW26-120984', name: 'Salmanul Faris P.', phone: '9544321098', parentPhone: '9847998877', dars: 'Dars 05 - Taleemul Islam Perinthalmanna', district: 'Malappuram', higherStudy: 'Tafsir Hermeneutics', status: 'Confirmed', date: '2026-11-03T16:30:00Z' },
  { id: 'REG-106', ref: 'AW26-887123', name: 'Abdul Basith C.H.', phone: '9744567890', parentPhone: '9447334455', dars: 'Dars 06 - Darul Hidaya Tirur', district: 'Malappuram', higherStudy: 'Arabic Rhetoric (Balagha)', status: 'Pending', date: '2026-11-04T10:05:00Z' },
  { id: 'REG-107', ref: 'AW26-665401', name: 'Hasanul Banna T.', phone: '9846789012', parentPhone: '9895445566', dars: 'Dars 07 - Jamia Kottakkal', district: 'Malappuram', higherStudy: 'Islamic Jurisprudence', status: 'Confirmed', date: '2026-11-04T13:22:00Z' },
  { id: 'REG-108', ref: 'AW26-223409', name: 'Ibrahim Khalil K.', phone: '9605123456', parentPhone: '9446113355', dars: 'Dars 08 - Anwarul Huda Kondotty', district: 'Malappuram', higherStudy: 'Qira\'at Sciences', status: 'Confirmed', date: '2026-11-05T08:40:00Z' },
  { id: 'REG-109', ref: 'AW26-554120', name: 'Anas Thangal M.B.', phone: '9947890123', parentPhone: '9847224466', dars: 'Dars 13 - Mishkath Kozhikode', district: 'Kozhikode', higherStudy: 'Hadith & Rijal', status: 'Confirmed', date: '2026-11-05T15:18:00Z' },
  { id: 'REG-110', ref: 'AW26-778901', name: 'Shamsudheen V.K.', phone: '9747120987', parentPhone: '9895667788', dars: 'Dars 14 - Al-Madina Vadakara', district: 'Kozhikode', higherStudy: 'Community Leadership', status: 'Confirmed', date: '2026-11-06T11:30:00Z' },
  { id: 'REG-111', ref: 'AW26-334512', name: 'Nawaf Rahman K.P.', phone: '9847556677', parentPhone: '9447889900', dars: 'Dars 15 - Sunniyya Koyilandy', district: 'Kozhikode', higherStudy: 'Comparative Fiqh', status: 'Pending', date: '2026-11-06T17:42:00Z' },
  { id: 'REG-112', ref: 'AW26-990124', name: 'Fayis Rahman C.', phone: '9633887766', parentPhone: '9846332211', dars: 'Dars 16 - Raudathul Uloom Feroke', district: 'Kozhikode', higherStudy: 'Dawah Methodologies', status: 'Confirmed', date: '2026-11-07T09:55:00Z' },
  { id: 'REG-113', ref: 'AW26-445678', name: 'Luqmanul Hakeem T.K.', phone: '9562112233', parentPhone: '9895001122', dars: 'Dars 17 - Irshadiyya Thamarassery', district: 'Kozhikode', higherStudy: 'Usul al-Hadith', status: 'Confirmed', date: '2026-11-07T14:10:00Z' },
  { id: 'REG-114', ref: 'AW26-112349', name: 'Suhail Muhammad P.', phone: '9744001122', parentPhone: '9446445566', dars: 'Dars 18 - Madrasathul Huda Koduvally', district: 'Kozhikode', higherStudy: 'Manuscript Editing', status: 'Confirmed', date: '2026-11-08T10:20:00Z' },
  { id: 'REG-115', ref: 'AW26-889012', name: 'Rashid Wafi K.M.', phone: '9846223344', parentPhone: '9847554433', dars: 'Dars 19 - Darussalam Sulthan Bathery', district: 'Wayanad', higherStudy: 'Islamic History & Isnad', status: 'Confirmed', date: '2026-11-08T16:04:00Z' },
  { id: 'REG-116', ref: 'AW26-667890', name: 'Arshad Ali M.', phone: '9605334455', parentPhone: '9895778899', dars: 'Dars 20 - Anwarul Islam Kalpetta', district: 'Wayanad', higherStudy: 'Moral Philosophy', status: 'Pending', date: '2026-11-09T08:50:00Z' },
  { id: 'REG-117', ref: 'AW26-224567', name: 'Tahir Hussain V.', phone: '9947445566', parentPhone: '9447119988', dars: 'Dars 21 - Badrul Huda Mananthavady', district: 'Wayanad', higherStudy: 'Qur\'an Phonetics', status: 'Confirmed', date: '2026-11-09T13:15:00Z' },
  { id: 'REG-118', ref: 'AW26-556789', name: 'Mubashir K.T.', phone: '9747556677', parentPhone: '9846887766', dars: 'Dars 23 - Jamia Mannarkkad', district: 'Palakkad', higherStudy: 'Fatwa Formulations', status: 'Confirmed', date: '2026-11-10T10:40:00Z' },
  { id: 'REG-119', ref: 'AW26-770123', name: 'Junaid Ahmad C.P.', phone: '9847667788', parentPhone: '9895223344', dars: 'Dars 24 - Darul Uloom Ottapalam', district: 'Palakkad', higherStudy: 'Classical Arabic Grammar', status: 'Confirmed', date: '2026-11-10T15:25:00Z' },
  { id: 'REG-120', ref: 'AW26-336789', name: 'Musthafa Kamal P.K.', phone: '9633778899', parentPhone: '9446334455', dars: 'Dars 25 - Markazul Huda Pattambi', district: 'Palakkad', higherStudy: 'Sufic Sciences', status: 'Pending', date: '2026-11-11T09:18:00Z' },
  { id: 'REG-121', ref: 'AW26-992345', name: 'Ziyadurrahman K.', phone: '9562889900', parentPhone: '9847665544', dars: 'Dars 27 - Sirajul Islam Chavakkad', district: 'Thrissur', higherStudy: 'Shafi\'i Jurisprudence', status: 'Confirmed', date: '2026-11-11T14:35:00Z' },
  { id: 'REG-122', ref: 'AW26-447890', name: 'Adil Shahin M.P.', phone: '9744990011', parentPhone: '9895887766', dars: 'Dars 28 - Hidayathul Muslimeen Kodungallur', district: 'Thrissur', higherStudy: 'Contemporary Bioethics', status: 'Confirmed', date: '2026-11-12T11:05:00Z' },
  { id: 'REG-123', ref: 'AW26-114567', name: 'Hamza Faizy K.T.', phone: '9846001122', parentPhone: '9447556677', dars: 'Dars 31 - Jamia Thalassery', district: 'Kannur', higherStudy: 'Hadith Canonisation', status: 'Confirmed', date: '2026-11-12T16:50:00Z' },
  { id: 'REG-124', ref: 'AW26-881234', name: 'Sinanudheen V.K.', phone: '9605112233', parentPhone: '9846443322', dars: 'Dars 32 - Markazul Ma\'arif Payyanur', district: 'Kannur', higherStudy: 'Arabic Lexicography', status: 'Confirmed', date: '2026-11-13T09:44:00Z' },
  { id: 'REG-125', ref: 'AW26-669012', name: 'Ramees Ahmad K.', phone: '9947223344', parentPhone: '9895112233', dars: 'Dars 35 - Sa\'adiyya Kanhangad', district: 'Kasaragod', higherStudy: 'Usul & Maqasid', status: 'Confirmed', date: '2026-11-13T13:20:00Z' },
  { id: 'REG-126', ref: 'AW26-226789', name: 'Ammar Yasir B.', phone: '9747334455', parentPhone: '9446778899', dars: 'Dars 36 - Sirajul Huda Uppala', district: 'Kasaragod', higherStudy: 'Tafsir Traditions', status: 'Pending', date: '2026-11-13T17:10:00Z' },
  { id: 'REG-127', ref: 'AW26-558901', name: 'Faris Muhammad E.', phone: '9847445566', parentPhone: '9847889911', dars: 'Dars 38 - Al-Bayan Aluva', district: 'Ernakulam', higherStudy: 'Interfaith Dialogues', status: 'Confirmed', date: '2026-11-14T10:30:00Z' },
  { id: 'REG-128', ref: 'AW26-772345', name: 'Irfan Habib T.', phone: '9633556677', parentPhone: '9895334455', dars: 'Dars 39 - Tuhfatul Ward Alathurpadi', district: 'Malappuram', higherStudy: 'Hadith Specialisation', status: 'Confirmed', date: '2026-11-14T12:00:00Z' }
];

export function getInitialStore() {
  return {
    version: 1,
    settings: {
      name: CAMP_FACTS.name,
      nameArabic: CAMP_FACTS.nameArabic,
      tagline: CAMP_FACTS.tagline,
      taglineArabic: CAMP_FACTS.taglineArabic,
      organiser: CAMP_FACTS.organiser,
      startDate: CAMP_FACTS.startDate,
      endDate: CAMP_FACTS.endDate,
      deadlineDate: CAMP_FACTS.deadlineDate,
      capacity: CAMP_FACTS.capacity,
      venueName: CAMP_FACTS.venueName,
      venuePlace: CAMP_FACTS.venuePlace,
      contactPhone: CAMP_FACTS.contact.phone,
      contactEmail: CAMP_FACTS.contact.email,
      mapsLink: CAMP_FACTS.mapsLink
    },
    sessions: SEED_SESSIONS,
    speakers: SEED_SPEAKERS,
    faqs: SEED_FAQS,
    darsList: DARS_DATA,
    registrations: SEED_REGISTRATIONS,
    reminders: []
  };
}

export function loadStore() {
  if (typeof window === 'undefined') return getInitialStore();
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) {
      const initial = getInitialStore();
      localStorage.setItem(STORE_KEY, JSON.stringify(initial));
      return initial;
    }
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.version !== 1) {
      const fresh = getInitialStore();
      localStorage.setItem(STORE_KEY, JSON.stringify(fresh));
      return fresh;
    }
    return parsed;
  } catch (err) {
    console.error('Failed to parse alwisal store from localStorage:', err);
    return getInitialStore();
  }
}

export function saveStore(store) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(store));
    window.dispatchEvent(new CustomEvent('alwisal_store_updated', { detail: store }));
  } catch (err) {
    console.error('Failed to save store to localStorage:', err);
  }
}

export function resetDemoData() {
  const fresh = getInitialStore();
  saveStore(fresh);
  return fresh;
}

export function getSchedule() {
  const store = loadStore();
  return store.sessions || SEED_SESSIONS;
}

export function getSpeakers() {
  const store = loadStore();
  return store.speakers || SEED_SPEAKERS;
}

export function getFAQs() {
  const store = loadStore();
  return store.faqs || SEED_FAQS;
}

export function getDarsList() {
  const store = loadStore();
  return store.dars || DARS_DATA;
}
