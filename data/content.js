/* =============================================================
   Inquirum 4.0 — Editable content
   Edit this file to update Schedule, Speakers and Pitch rules.
   Every item has English (en) and Uzbek (uz) versions.
   ============================================================= */

const CONTENT = {

  /* --- Event schedule (from the official poster) --- */
  schedule: [
    {
      time: "10:00 – 10:45",
      en: { title: "Registration and Introduction", desc: "Check-in, welcome and opening remarks." },
      uz: { title: "Ro'yxatga olish va tanishuv", desc: "Ro'yxatdan o'tish, kutib olish va ochilish so'zi." }
    },
    {
      time: "10:45 – 11:30",
      en: { title: "Guest Speaker", desc: "Keynote talk by Asilbek Ashurov." },
      uz: { title: "Taklif etilgan ma'ruzachi", desc: "Asilbek Ashurov bilan asosiy ma'ruza." }
    },
    {
      time: "11:30 – 12:30",
      en: { title: "Final Prep Time", desc: "Teams finalize their research proposals." },
      uz: { title: "Yakuniy tayyorgarlik", desc: "Jamoalar tadqiqot takliflarini yakunlaydi." }
    },
    {
      time: "12:30 – 14:00",
      en: { title: "Presentations", desc: "Teams pitch to the panel of professors." },
      uz: { title: "Taqdimotlar", desc: "Jamoalar professorlar hay'atiga taqdimot qiladi." }
    },
    {
      time: "14:00 – 14:30",
      en: { title: "Awards Announcement & Closing", desc: "Winners announced and closing remarks." },
      uz: { title: "Mukofotlash va yopilish", desc: "G'oliblar e'lon qilinadi va yakuniy so'z." }
    },
    {
      time: "14:30 – 16:00",
      en: { title: "Pizza Party + Networking Session", desc: "Relax, connect and celebrate together." },
      uz: { title: "Pitsa ziyofati + Networking", desc: "Dam oling, tanishing va birga nishonlang." }
    }
  ],

  /* --- Guest professors (placeholders — add real photos & bios) --- */
  speakers: [
    {
      img: "assets/img/speaker-placeholder.svg",
      en: { name: "Professor Name", role: "Title · University", bio: "Short biography goes here — research area, achievements and a sentence about what they will share at the event." },
      uz: { name: "Professor ismi", role: "Lavozim · Universitet", bio: "Bu yerga qisqa biografiya — tadqiqot sohasi, yutuqlari va tadbirda nima haqida gapirishi haqida bir jumla." }
    },
    {
      img: "assets/img/speaker-placeholder.svg",
      en: { name: "Professor Name", role: "Title · University", bio: "Short biography goes here — research area, achievements and a sentence about what they will share at the event." },
      uz: { name: "Professor ismi", role: "Lavozim · Universitet", bio: "Bu yerga qisqa biografiya — tadqiqot sohasi, yutuqlari va tadbirda nima haqida gapirishi haqida bir jumla." }
    }
  ],

  /* --- Pitch / competition rules --- */
  pitch: {
    cards: [
      {
        icon: "team",
        en: { title: "Teams", text: "2–5 participants per team." },
        uz: { title: "Jamoalar", text: "Har bir jamoada 2–5 ishtirokchi." }
      },
      {
        icon: "book",
        en: { title: "Before the event", text: "With your team, research an economic issue in Uzbekistan, Central Asia, or anywhere else in the world. Prepare your analysis and presentation." },
        uz: { title: "Tadbirdan oldin", text: "Jamoangiz bilan O'zbekiston, Markaziy Osiyo yoki dunyoning istalgan joyidagi iqtisodiy muammoni tadqiq qiling. Tahlil va taqdimotni tayyorlang." }
      },
      {
        icon: "mic",
        en: { title: "On event day", text: "You'll have 30 minutes to finalize your proposal, then present your research to a panel of distinguished professors." },
        uz: { title: "Tadbir kunida", text: "Taklifni yakunlash uchun 30 daqiqa, so'ngra tadqiqotingizni nufuzli professorlar hay'atiga taqdim etasiz." }
      },
      {
        icon: "trophy",
        en: { title: "Prize", text: "500,000 UZS for the winning team." },
        uz: { title: "Mukofot", text: "G'olib jamoa uchun 500 000 so'm." }
      }
    ],
    /* Judging criteria (8) */
    criteria: [
      {
        en: { title: "Significance & Clarity of Research Question", desc: "The research question is clear, focused, measurable, and explains why the topic matters." },
        uz: { title: "Tadqiqot savolining ahamiyati va aniqligi", desc: "Tadqiqot savoli aniq, yo'naltirilgan, o'lchanadigan va mavzuning nega muhimligini tushuntiradi." }
      },
      {
        en: { title: "Novelty & Originality", desc: "The proposal presents a new question, method, or application and shows how it differs from existing work." },
        uz: { title: "Yangilik va o'ziga xoslik", desc: "Taklif yangi savol, metod yoki qo'llanilishni taqdim etadi va mavjud ishlardan qanday farqlanishini ko'rsatadi." }
      },
      {
        en: { title: "Methodology & Feasibility", desc: "The methods are appropriate, detailed, realistic, and supported by a practical execution plan." },
        uz: { title: "Metodologiya va amalga oshirish imkoniyati", desc: "Metodlar mos, batafsil, real va amaliy bajarish rejasi bilan asoslangan." }
      },
      {
        en: { title: "Impact & Future Potential", desc: "The project has measurable outcomes and potential for implementation, scaling, or further research." },
        uz: { title: "Ta'sir va kelajak salohiyati", desc: "Loyiha o'lchanadigan natijalarga hamda joriy etish, kengaytirish yoki keyingi tadqiqot uchun salohiyatga ega." }
      },
      {
        en: { title: "Team Capability & Expertise", desc: "The team has the relevant skills, experience, and clearly defined roles needed to complete the project." },
        uz: { title: "Jamoa qobiliyati va tajribasi", desc: "Jamoa loyihani yakunlash uchun zarur ko'nikma, tajriba va aniq belgilangan rollarga ega." }
      },
      {
        en: { title: "Budget, Timeline & Resources", desc: "The budget, schedule, and required resources are realistic and aligned with project milestones." },
        uz: { title: "Byudjet, vaqt jadvali va resurslar", desc: "Byudjet, jadval va kerakli resurslar real va loyiha bosqichlariga mos." }
      },
      {
        en: { title: "Presentation Quality & Visuals", desc: "The pitch is clear, concise, well-structured, visually effective, and delivered within the allocated time." },
        uz: { title: "Taqdimot sifati va vizuallar", desc: "Taqdimot aniq, ixcham, yaxshi tuzilgan, vizual jihatdan ta'sirli va ajratilgan vaqt ichida bajariladi." }
      },
      {
        en: { title: "Q&A & Defense", desc: "The team answers questions directly, demonstrates strong understanding, and defends its decisions convincingly." },
        uz: { title: "Savol-javob va himoya", desc: "Jamoa savollarga to'g'ridan-to'g'ri javob beradi, chuqur tushunchani namoyish etadi va qarorlarini ishonarli himoya qiladi." }
      }
    ]
  },

  /* --- Organizers --- */
  organizers: [
    {
      img: "assets/img/organizer-saidalo.jpg",
      name: "Ibrokhimov Saidalo",
      role: { en: "Founder & Organizer", uz: "Asoschi va tashkilotchi" },
      stats: [
        { label: { en: "SAT", uz: "SAT" }, value: "1550" },
        { label: { en: "IELTS", uz: "IELTS" }, value: "7.0" },
        { label: { en: "University", uz: "Universitet" }, value: "HKBU · full-ride scholarship · Class of 2030" }
      ],
      email: "saidaloibrokhimov04@gmail.com",
      telegram: "saidaloibrokhimovs"
    }
  ],

  /* --- Impact counters (animate up on scroll) --- */
  impact: [
    { target: 600, suffix: "+", icon: "users",        en: "Students", uz: "Talaba" },
    { target: 4,   suffix: "",  icon: "layers",       en: "Editions", uz: "Nashr" },
    { target: 7,   suffix: "",  icon: "presentation", en: "Sessions", uz: "Sessiya" },
    { target: 5,   suffix: "",  icon: "map",          en: "Regions",  uz: "Hudud" }
  ],

  /* --- How it works (3 steps) --- */
  steps: [
    { icon: "search",       en: { title: "Research", desc: "Pick a real economic issue and analyze it with your team." },
                            uz: { title: "Tadqiqot", desc: "Jamoangiz bilan real iqtisodiy muammoni tanlab, tahlil qiling." } },
    { icon: "presentation", en: { title: "Present",  desc: "Build a research-based proposal and pitch it to expert professors." },
                            uz: { title: "Taqdimot", desc: "Tadqiqotga asoslangan taklif tayyorlab, professorlarga taqdim eting." } },
    { icon: "bulb",         en: { title: "Impact",   desc: "Get feedback, win, and turn your ideas into real-world solutions." },
                            uz: { title: "Ta'sir",   desc: "Fikr-mulohaza oling, g'olib bo'ling va g'oyani real yechimga aylantiring." } }
  ],

  /* --- Regions where sessions were held (x/y are % positions on the map) --- */
  regions: [
    { name: "Tashkent",    sessions: 3, x: 76, y: 34 },
    { name: "Sirdaryo",    sessions: 1, x: 70, y: 47 },
    { name: "Namangan",    sessions: 1, x: 90, y: 40 },
    { name: "Fergana",     sessions: 1, x: 93, y: 50 },
    { name: "Qashqadaryo", sessions: 1, x: 58, y: 74 }
  ],

  /* --- Past sessions gallery. Set `img` to a photo path to replace the placeholder.
         Add more entries (e.g. several Tashkent photos) as photos come in. --- */
  sessions: [
    { img: null, en: { title: "Sessions in Tashkent" },   uz: { title: "Toshkentdagi sessiyalar" } },
    { img: null, en: { title: "Session in Namangan" },    uz: { title: "Namangandagi sessiya" } },
    { img: null, en: { title: "Session in Fergana" },     uz: { title: "Farg'onadagi sessiya" } },
    { img: null, en: { title: "Session in Sirdaryo" },    uz: { title: "Sirdaryodagi sessiya" } },
    { img: null, en: { title: "Session in Qashqadaryo" }, uz: { title: "Qashqadaryodagi sessiya" } }
  ],

  /* --- Testimonials (PLACEHOLDER — replace with real quotes) --- */
  testimonials: [
    {
      name: "Participant name",
      role: { en: "Team lead · University", uz: "Jamoa rahbari · Universitet" },
      quote: { en: "Placeholder quote — what a past participant said about their Inquirum experience.",
               uz: "Placeholder fikr — o'tgan ishtirokchining Inquirum haqidagi taassuroti." }
    },
    {
      name: "Professor name",
      role: { en: "Panel judge · University", uz: "Hakam · Universitet" },
      quote: { en: "Placeholder quote — a professor's impression of the quality of the proposals.",
               uz: "Placeholder fikr — professorning takliflar sifati haqidagi fikri." }
    },
    {
      name: "Participant name",
      role: { en: "Student · University", uz: "Talaba · Universitet" },
      quote: { en: "Placeholder quote — how the competition helped a student grow.",
               uz: "Placeholder fikr — tanlov talabaga qanday yordam bergani." }
    }
  ]
};
