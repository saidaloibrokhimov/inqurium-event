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

  /* ---------- how it works steps ---------- */
  const STEP_ICONS = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
    presentation: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4h20M4 4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4M12 17v4M9 21h6"/></svg>',
    bulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4M8.5 14a5 5 0 1 1 7 0c-.7.6-1.5 1.3-1.5 2.5h-4c0-1.2-.8-1.9-1.5-2.5z"/></svg>'
  };
  function renderSteps() {
    document.getElementById("stepsGrid").innerHTML = CONTENT.steps.map(function (s, i) {
      return '<article class="step-card reveal">' +
        '<span class="step-num">' + (i + 1) + '</span>' +
        '<div class="step-icon">' + (STEP_ICONS[s.icon] || "") + '</div>' +
        '<h4>' + s[lang].title + '</h4><p>' + s[lang].desc + '</p>' +
      '</article>';
    }).join("");
  }

  /* ---------- impact counters (animate up on scroll) ---------- */
  const IMPACT_ICONS = {
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M15.5 6.2a3 3 0 0 1 0 5.6"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><path d="M17 13.5a5.5 5.5 0 0 1 4 5.5"/></svg>',
    layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="M3 13l9 5 9-5"/></svg>',
    presentation: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4h20M4 4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4M12 17v4M9 21h6"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z"/><path d="M9 4v14M15 6v14"/></svg>'
  };
  let impactAnimated = false;
  function renderImpact() {
    document.getElementById("impactGrid").innerHTML = CONTENT.impact.map(function (m) {
      const shown = impactAnimated
        ? (m.target + '<span class="suf">' + m.suffix + '</span>')
        : '0<span class="suf"></span>';
      return '<div class="impact-card reveal">' +
        '<div class="impact-icon">' + (IMPACT_ICONS[m.icon] || "") + '</div>' +
        '<div class="impact-num" data-target="' + m.target + '" data-suffix="' + m.suffix + '">' + shown + '</div>' +
        '<div class="impact-label">' + m[lang] + '</div>' +
      '</div>';
    }).join("");
  }
  function animateImpact() {
    if (impactAnimated) return;
    impactAnimated = true;
    document.querySelectorAll(".impact-num").forEach(function (el) {
      const target = parseInt(el.getAttribute("data-target"), 10);
      const suffix = el.getAttribute("data-suffix") || "";
      const dur = 1400, start = performance.now();
      function frame(now) {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.firstChild.nodeValue = Math.round(target * eased).toString();
        if (p < 1) requestAnimationFrame(frame);
        else el.innerHTML = target + '<span class="suf">' + suffix + '</span>';
      }
      requestAnimationFrame(frame);
    });
  }
  function setupImpactObserver() {
    const grid = document.getElementById("impactGrid");
    if (!grid) return;
    if (!("IntersectionObserver" in window)) { animateImpact(); return; }
    const io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { animateImpact(); io2.disconnect(); } });
    }, { threshold: 0.3 });
    io2.observe(grid);
  }

  /* ---------- regions: real Uzbekistan map (d3) + list ---------- */
  const REGION_DISPLAY = { tashkent: "Toshkent", sirdaryo: "Sirdaryo", fergana: "Farg'ona", namangan: "Namangan", qashqadaryo: "Qashqadaryo" };
  const ACTIVE_REGIONS = { tashkent: 1, sirdaryo: 1, fergana: 1, namangan: 1, qashqadaryo: 1 };
  function normRegion(n) {
    return String(n).toLowerCase()
      .replace("republic of ", "")
      .replace(" region", "")
      .replace("karakalpakstan", "qoraqalpogiston")
      .trim();
  }
  function buildMap() {
    const svg = document.getElementById("uzMap");
    if (!svg || svg.dataset.built) return;
    if (!window.d3 || !d3.geoMercator || !window.UZ_GEO) return;
    const W = 800, H = 560;
    const path = d3.geoPath(d3.geoMercator().fitSize([W, H], UZ_GEO));
    let html = "";
    UZ_GEO.features.forEach(function (f) {
      const key = normRegion(f.properties.shapeName);
      const active = ACTIVE_REGIONS[key] ? " active" : "";
      html += '<path class="province' + active + '" data-key="' + key + '" d="' + path(f) + '"></path>';
    });
    const labeled = {};
    UZ_GEO.features.forEach(function (f) {
      const key = normRegion(f.properties.shapeName);
      if (!ACTIVE_REGIONS[key] || labeled[key]) return;
      labeled[key] = 1;
      const c = path.centroid(f);
      if (!c || isNaN(c[0])) return;
      html += '<text class="map-label" x="' + c[0].toFixed(1) + '" y="' + (c[1] + 4).toFixed(1) + '">' + REGION_DISPLAY[key] + '</text>';
    });
    svg.innerHTML = html;
    try {
      const bb = svg.getBBox();
      if (bb && bb.width > 0) {
        const pad = 12;
        svg.setAttribute("viewBox", (bb.x - pad) + " " + (bb.y - pad) + " " + (bb.width + 2 * pad) + " " + (bb.height + 2 * pad));
      }
    } catch (e) { /* getBBox unavailable — keep default viewBox */ }
    svg.dataset.built = "1";
  }
  function renderRegions() {
    const dict = TRANSLATIONS[lang];
    buildMap();
    const svg = document.getElementById("uzMap");
    const list = document.getElementById("regionsList");
    list.innerHTML = CONTENT.regions.map(function (r) {
      const word = r.sessions === 1 ? dict["regions.session"] : dict["regions.sessions"];
      return '<li class="region-item" data-key="' + r.name.toLowerCase() + '">' +
        '<span class="r-name"><span class="rdot"></span>' + r.name + '</span>' +
        '<span class="r-sessions">' + r.sessions + ' ' + word + '</span>' +
      '</li>';
    }).join("");
    list.querySelectorAll(".region-item").forEach(function (item) {
      const prov = svg ? svg.querySelector('.province[data-key="' + item.getAttribute("data-key") + '"]') : null;
      if (!prov) return;
      item.addEventListener("mouseenter", function () { prov.classList.add("hl"); });
      item.addEventListener("mouseleave", function () { prov.classList.remove("hl"); });
    });
  }

  /* ---------- full re-render ---------- */
  function renderAll() {
    applyStatic();
    renderTimeline();
    renderSteps();
    renderImpact();
    renderRegions();
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
    }
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
      const val = fd.get(key);
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
  setupImpactObserver();
})();
