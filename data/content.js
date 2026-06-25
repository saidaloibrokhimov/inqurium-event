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
    /* Judging criteria — PLACEHOLDER, replace with real criteria */
    criteria: [
      { en: "Criterion 1 — placeholder (e.g. Relevance of the problem)", uz: "Mezon 1 — placeholder (masalan, muammoning dolzarbligi)" },
      { en: "Criterion 2 — placeholder (e.g. Quality of analysis)", uz: "Mezon 2 — placeholder (masalan, tahlil sifati)" },
      { en: "Criterion 3 — placeholder (e.g. Feasibility of solution)", uz: "Mezon 3 — placeholder (masalan, yechimning amaliyligi)" },
      { en: "Criterion 4 — placeholder (e.g. Presentation & teamwork)", uz: "Mezon 4 — placeholder (masalan, taqdimot va jamoaviylik)" }
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
  ]
};
