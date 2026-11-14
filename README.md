# ADSA Camp — ഔദ്യോഗിക വെബ്സൈറ്റ് (Official Website)

> **ഉസ്താദിനൊപ്പം ഏഴ് ദിനങ്ങൾ**  
> SUFFA ദർസ് നെറ്റ്‌വർക്കിന് കീഴിലെ 30 ദർസുകളിലെ വിദ്യാർത്ഥികൾക്കായി ADSA (Aripra Dars Students Association) ഒരുക്കുന്ന 7 ദിവസത്തെ റസിഡൻഷ്യൽ ക്യാമ്പ്.

---

## 🌟 പ്രോജക്റ്റ് സവിശേഷതകൾ (Features)

- **ഫുൾ-വിഡ്ത്ത് എഡിറ്റോറിയൽ ലേഔട്ട്**: ഇരുണ്ട ബാക്ക്ഗ്രൗണ്ട് (`#1E1F22`), അസമമായ ഡിസൈൻ ഗ്രിഡുകൾ, ടോക്കൺ വേരിയബിളുകൾ.
- **കസ്റ്റം ആർട്ട് സിസ്റ്റം**: ഫ്ലാറ്റ് വെക്ടർ ഐക്കണുകൾ, ജയന്റ് `<SevenMark/>`, 3-ലെയർ പാരാലാക്സ് `<Panorama/>`, പേജിലുടനീളം പടരുന്ന `<Vine/>`.
- **ഉസ്താദിൽ തുടങ്ങി ഉസ്താദിൽ ഒടുങ്ങുന്ന ഘടന**: ഹീറോ സെക്ഷനിലും ക്ലോസിംഗ് സെക്ഷനിലും ഉസ്താദിന്റെ സാന്നിധ്യം.
- **7 ദിനചര്യ ഷെഡ്യൂൾ**: ഓരോ ദിവസത്തെയും പ്രഭാത സുബ്ഹ് - ഖുർആൻ - ബുഖാരി സബഖ് ഫിക്സഡ് ലൈനും സെഷനുകളും.
- **സൗജന്യ രജിസ്ട്രേഷൻ ഫോം**: 2-ഘട്ട ഫോം, ക്ലയന്റ് വാലിഡേഷൻ, ഹണിപോട്ട് ആന്റി-സ്പാം, ഗൂഗിൾ ആപ്പ്സ് സ്ക്രിപ്റ്റ് എൻഡ്പോയിന്റ് സപ്പോർട്ട് (ഡെമോ മോഡ് ഫാൾബാക്ക്).
- **ആക്സസിബിലിറ്റി & മോഷൻ**: Lenis സ്മൂത്ത് സ്ക്രോൾ, GSAP ScrollTrigger ആനിമേഷനുകൾ, `prefers-reduced-motion` സപ്പോർട്ട്.

---

## 🛠️ സാങ്കേതിക വിവരങ്ങൾ (Tech Stack)

- **ഫ്രെയിംവർക്ക്**: React 19 + Vite 8
- **സ്റ്റൈലിംഗ്**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **ആനിമേഷൻ**: GSAP 3 (ScrollTrigger)
- **സ്മൂത്ത് സ്ക്രോൾ**: Lenis
- **ഫോണ്ടുകൾ**: Anek Malayalam, Noto Sans Malayalam, Sora
- **Node വേർഷൻ**: Node 20 (`.nvmrc` ഫയൽ അടങ്ങിയിരിക്കുന്നു)

---

## 💻 ലോക്കൽ സെറ്റപ്പ് (Local Development)

```bash
# 1. ഡിപൻഡൻസികൾ ഇൻസ്റ്റാൾ ചെയ്യുക
npm install

# 2. ഡെവലപ്‌മെന്റ് സെർവർ പ്രവർത്തിപ്പിക്കുക
npm run dev

# 3. പ്രൊഡക്ഷൻ ബിൽഡ് എടുക്കുക
npm run build

# 4. പ്രൊഡക്ഷൻ ബിൽഡ് പ്രിവ്യൂ കാണുക
npm run preview
```

---

## ☁️ Cloudflare Pages ഡിപ്ലോയ്മെന്റ് നിർദ്ദേശങ്ങൾ (Step-by-Step)

ഈ വെബ്സൈറ്റ് Cloudflare Pages-ൽ GitHub വഴി സ്വയം ഡിപ്ലോയ് ചെയ്യാൻ താഴെ പറയുന്ന ഘട്ടങ്ങൾ പിന്തുടരുക:

### 1. Git & GitHub റിപോസിറ്ററി സജ്ജീകരിക്കൽ

റിപ്പോസിറ്ററി ലിങ്ക്: `https://github.com/rmshd/alwisal.adsa.git`

```bash
# Git ഇനിഷ്യലൈസ് ചെയ്യുക
git init

# ഫയലുകൾ സ്റ്റേജ് ചെയ്യുക
git add .

# ആദ്യത്തെ കമ്മിറ്റ് ചെയ്യുക
git commit -m "feat: complete ADSA Camp official website scaffold and sections"

# ബ്രാഞ്ച് main ആക്കുക
git branch -M main

# റിമോട്ട് ഒറിജിൻ ചേർക്കുക
git remote add origin https://github.com/rmshd/alwisal.adsa.git

# GitHub-ലേക്ക് പുഷ് ചെയ്യുക
git push -u origin main
```

*(ഒരുപക്ഷേ റിമോട്ടിൽ ഫയലുകൾ ഉണ്ടെങ്കിൽ `git push -u origin main --force` ഉപയോഗിക്കുക)*

### 2. Cloudflare Pages-ൽ കണക്റ്റ് ചെയ്യുക

1. [Cloudflare Dashboard](https://dash.cloudflare.com/)-ൽ ലോഗിൻ ചെയ്യുക.
2. ഇടത് മെനുവിൽ നിന്ന് **Workers & Pages** ക്ലിക്ക് ചെയ്യുക.
3. **Create** ക്ലിക്ക് ചെയ്ത് **Pages** ടാബ് തിരഞ്ഞെടുക്കുക.
4. **Connect to Git** ക്ലിക്ക് ചെയ്ത് `rmshd/alwisal.adsa` റിപോസിറ്ററി തിരഞ്ഞെടുക്കുക.
5. ബിൽഡ് സെറ്റിംഗ്സ് നൽകുക:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js Version**: Environment Variable ആയി `NODE_VERSION` = `20` നൽകുക.
6. **Environment Variables**:
   - `VITE_FORM_ENDPOINT`: രജിസ്ട്രേഷൻ ഡാറ്റ സൂക്ഷിക്കാനുള്ള Google Apps Script Web App URL നൽകുക (നൽകിയില്ലെങ്കിൽ സൈറ്റ് ഡെമോ മോഡിൽ പ്രവർത്തിക്കും).
7. **Save and Deploy** ക്ലിക്ക് ചെയ്യുക.

ഇനി മുതൽ `main` ബ്രാഞ്ചിലേക്ക് പുഷ് ചെയ്യുന്ന ഓരോ മാറ്റവും Cloudflare Pages തനിയെ ബിൽഡ് ചെയ്ത് തത്സമയം പബ്ലിഷ് ചെയ്യും!

---

## 📁 കോൺഫിഗറേഷൻ & എഡിറ്റ് ചെയ്യേണ്ട ഫയലുകൾ

എല്ലാ വിവരങ്ങളും എളുപ്പത്തിൽ മാറ്റിയെഴുതാവുന്ന വിധത്തിലാണ് ക്രമീകരിച്ചിരിക്കുന്നത്:

- `src/config.js`: ക്യാമ്പ് തീയതികൾ (`CAMP_START`), വേദി വിവരങ്ങൾ, WhatsApp നമ്പർ, ഗ്രൂപ്പ് ലിങ്ക്.
- `src/data/schedule.json`: 7 ദിനങ്ങളുടെ ഷെഡ്യൂളും സമയക്രമങ്ങളും.
- `src/data/guests.json`: അതിഥികളുടെ പേരുകൾ, പദവി, വിവരങ്ങൾ.
- `src/data/dars.json`: 30 SUFFA ദർസുകളുടെ ലിസ്റ്റും സ്ഥലങ്ങളും.
- `src/data/gallery.json`: ഗാലറി ചിത്രങ്ങളും അടിക്കുറിപ്പുകളും.
- `src/data/faq.json`: പതിവ് ചോദ്യോത്തരങ്ങൾ.
