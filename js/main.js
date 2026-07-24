/* =============================================================
   Inquirum 4.0 — interactions, i18n & rendering
   ============================================================= */
(function () {
  "use strict";

  /* current language: saved choice or default English */
  let lang = localStorage.getItem("inquirum-lang") || "en";

  /* ---- small inline icon set for pitch cards ---- */
  const ICONS = {
    team: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.2"/><path d="M3 19c0-3 3-5 6-5s6 2 6 5"/><path d="M15 14c2.5 0 6 1.5 6 5"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z"/><path d="M18 3v18"/></svg>',
    mic:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4"/></svg>',
    trophy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 4h10v4a5 5 0 0 1-10 0z"/><path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3M9 14h6M10 21h4M12 14v7"/></svg>'
  };

  /* ---------- render dynamic sections ---------- */
  function renderTimeline() {
    const el = document.getElementById("timeline");
    const arrow = '<svg viewBox="0 0 24 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v28"/><path d="M5 25l7 8 7-8"/></svg>';
    const steps = CONTENT.schedule;
    let html = "";
    steps.forEach(function (s, i) {
      const side = i % 2 === 0 ? "left" : "right";
      html +=
        '<div class="flow-step ' + side + ' reveal">' +
          '<article class="flow-card">' +
            '<div class="flow-card-head">' +
              '<span class="flow-num">' + (i + 1) + '</span>' +
              '<span class="flow-time">' + s.time + '</span>' +
            '</div>' +
            '<h3>' + s[lang].title + '</h3><p>' + s[lang].desc + '</p>' +
          '</article>' +
        '</div>';
      if (i < steps.length - 1) {
        const dir = i % 2 === 0 ? "to-right" : "to-left";
        html += '<div class="flow-arrow ' + dir + ' reveal" aria-hidden="true">' + arrow + '</div>';
      }
    });
    el.innerHTML = html;
  }

  function renderSpeakers() {
    const el = document.getElementById("speakersGrid");
    el.innerHTML = CONTENT.speakers.map(function (sp) {
      return '<article class="speaker-card reveal">' +
        '<img src="' + sp.img + '" alt="' + sp[lang].name + '" />' +
        '<div class="speaker-body"><h3>' + sp[lang].name + '</h3>' +
        '<p class="speaker-role">' + sp[lang].role + '</p>' +
        '<p>' + sp[lang].bio + '</p></div>' +
      '</article>';
    }).join("");
  }

  function renderPitch() {
    document.getElementById("pitchGrid").innerHTML = CONTENT.pitch.cards.map(function (c) {
      return '<article class="pitch-card reveal">' +
        '<div class="pitch-icon">' + (ICONS[c.icon] || "") + '</div>' +
        '<h3>' + c[lang].title + '</h3><p>' + c[lang].text + '</p>' +
      '</article>';
    }).join("");

    document.getElementById("criteriaList").innerHTML = CONTENT.pitch.criteria.map(function (c) {
      return '<li><span class="crit-title">' + c[lang].title + '</span>' +
        '<span class="crit-desc">' + c[lang].desc + '</span></li>';
    }).join("");
  }

  function renderOrganizers() {
    const dict = TRANSLATIONS[lang];
    const mailIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>';
    const tgIcon = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.3 18.7 19.4c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.7 13.1l-4.8-1.5c-1-.3-1-1 .2-1.5l18.7-7.2c.9-.3 1.6.2 1.3 1.4z"/></svg>';
    document.getElementById("organizersGrid").innerHTML = CONTENT.organizers.map(function (o) {
      const stats = o.stats.map(function (s) {
        return '<div class="org-stat"><b>' + s.value + '</b><span>' + s.label[lang] + '</span></div>';
      }).join("");
      return '<article class="organizer-card reveal">' +
        '<img class="organizer-photo" src="' + o.img + '" alt="' + o.name + '" ' +
        'onerror="this.onerror=null;this.src=\'assets/img/speaker-placeholder.svg\'" />' +
        '<div class="organizer-info">' +
          '<h3>' + o.name + '</h3>' +
          '<p class="organizer-role">' + o.role[lang] + '</p>' +
          '<div class="org-stats">' + stats + '</div>' +
          '<div class="org-links">' +
            '<a class="org-link" href="mailto:' + o.email + '">' + mailIcon + o.email + '</a>' +
            '<a class="org-link" href="https://t.me/' + o.telegram + '" target="_blank" rel="noopener">' + tgIcon + '@' + o.telegram + ' · ' + dict["organizers.telegram"] + '</a>' +
          '</div>' +
        '</div>' +
      '</article>';
    }).join("");
  }

  /* ---------- apply static translations ---------- */
  function applyStatic() {
    const dict = TRANSLATIONS[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      const key = node.getAttribute("data-i18n");
      if (dict[key] !== undefined) node.textContent = dict[key];
    });
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang-toggle [data-lang]").forEach(function (s) {
      s.classList.toggle("active", s.getAttribute("data-lang") === lang);
    });
  }

  /* ---------- full re-render ---------- */
  function renderAll() {
    applyStatic();
    renderTimeline();
    renderSpeakers();
    renderPitch();
    renderOrganizers();
    observeReveals();
  }

  /* ---------- theme (mint light / dark) ---------- */
  const root = document.documentElement;
  let theme = localStorage.getItem("inquirum-theme") || "light";
  root.setAttribute("data-theme", theme);
  document.getElementById("themeToggle").addEventListener("click", function () {
    theme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", theme);
    localStorage.setItem("inquirum-theme", theme);
  });

  /* ---------- countdown to event ---------- */
  const EVENT_DATE = new Date("2026-07-15T10:00:00").getTime();
  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function tickCountdown() {
    const diff = EVENT_DATE - Date.now();
    const set = function (k, v) {
      const el = document.querySelector('[data-cd="' + k + '"]');
      if (el) el.textContent = pad(v);
    };
    if (diff <= 0) { set("days", 0); set("hours", 0); set("minutes", 0); set("seconds", 0); return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    set("days", d); set("hours", h); set("minutes", m); set("seconds", s);
  }
  tickCountdown();
  setInterval(tickCountdown, 1000);

  /* ---------- language toggle ---------- */
  document.getElementById("langToggle").addEventListener("click", function () {
    lang = lang === "en" ? "uz" : "en";
    localStorage.setItem("inquirum-lang", lang);
    renderAll();
  });

  /* ---------- mobile menu ---------- */
  const nav = document.getElementById("nav");
  const menuBtn = document.getElementById("menuBtn");
  menuBtn.addEventListener("click", function () {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- scroll reveal ---------- */
  let io;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(function (n) { n.classList.add("visible"); });
      return;
    }
    if (io) io.disconnect();
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal:not(.visible)").forEach(function (n) { io.observe(n); });
  }

  /* ---------- registration form → Google Form ----------
     Submissions are POSTed into a Google Form, which collects them in its
     Responses tab (with a live count) and an optional linked Google Sheet.
     To activate, fill GOOGLE_FORM.action with the form's formResponse URL and
     each field's entry ID — both are found in the form's "Get pre-filled link".
     While `action` is empty the form runs in demo mode (shows success only).
  ------------------------------------------------------ */
  const GOOGLE_FORM = {
    action: "https://docs.google.com/forms/d/e/1FAIpQLSfmNdI1Vd6mH3tfbsUzn25eEFvx-_U2FVZw5RrKXPXefx8g3Q/formResponse",
    fields: {
      name:              "entry.2096695767",
      email:             "entry.601137859",
      phone:             "entry.697604464",
      organization:      "entry.2128259469",
      telegram_username: "entry.154398502"
      // NOTE: the linked Google Form has no "pitch" question yet, so the
      // registration form's pitch radio is not forwarded. Add a Yes/No
      // question to the form and map its entry ID here to capture it.
    },
    // maps our radio values to the Google Form's option text (used if `pitch` is added above)
    pitchLabels: { yes: "Yes", no: "No" }
  };

  const form = document.getElementById("regForm");
  const success = document.getElementById("formSuccess");

  function showSuccess() {
    success.hidden = false;
    form.reset();
    success.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    /* validation — all fields required */
    let ok = true;
    ["f-name", "f-email", "f-phone", "f-org", "f-telegram"].forEach(function (id) {
      const input = document.getElementById(id);
      const valid = input.value.trim() !== "" && (input.type !== "email" || /\S+@\S+\.\S+/.test(input.value));
      input.classList.toggle("invalid", !valid);
      if (!valid) ok = false;
    });
    if (!ok) return;

    /* demo mode until the Google Form is connected */
    if (!GOOGLE_FORM.action) { showSuccess(); return; }

    const fd = new FormData(form);
    const params = new URLSearchParams();
    Object.keys(GOOGLE_FORM.fields).forEach(function (key) {
      let val = fd.get(key);
      if (key === "pitch") val = GOOGLE_FORM.pitchLabels[val] || val;
      params.append(GOOGLE_FORM.fields[key], val != null ? val : "");
    });

    /* no-cors: Google Forms returns no CORS headers, but the POST still records */
    fetch(GOOGLE_FORM.action, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString()
    })
      .then(function () { showSuccess(); })
      .catch(function () { alert("Something went wrong. Please try again later."); });
  });

  /* ---------- footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- init ---------- */
  renderAll();
})();
