# Inquirum 4.0 — Event Website

Static, bilingual (EN/UZ) landing page for the **Inquirum Research Proposal Competition in Tashkent 4.0** — July 15, 2026.

No build step. Open `index.html` in a browser, or serve the folder.

## Run locally
```bash
# any static server works, e.g.
python -m http.server 8000
# then open http://localhost:8000
```

## Structure
```
index.html          # all sections (one-page)
css/styles.css      # dark theme, responsive
js/i18n.js          # EN/UZ text for static UI
js/main.js          # rendering, language toggle, menu, form
data/content.js     # Schedule, Speakers, Pitch rules — EDIT HERE
assets/img/         # logo + speaker images
```

## What to customize (placeholders to replace)
| Item | Where |
|------|-------|
| **Logo** | replace `assets/img/logo.svg` with the official file (keep the same name) |
| **Speaker photos & bios** | `data/content.js → speakers[]` and add real images to `assets/img/` |
| **Judging criteria** | `data/content.js → pitch.criteria` |
| **Venue address** | `js/i18n.js → location.placeholder` (both `en` and `uz`) |
| **Google Map** | replace the `.map-placeholder` div in `index.html` with an `<iframe>` embed |
| **Registration backend** | set `FORM_ENDPOINT` in `js/main.js` (Formspree URL or Google Apps Script web-app URL) |
| **Social links** | `index.html` footer — Telegram / Instagram / LinkedIn `href="#"` |
| **Contact email** | `js/i18n.js → footer.contact` |

## Registration form
The form runs in **demo mode** until you set `FORM_ENDPOINT` in `js/main.js`:
- **Formspree** (easiest): create a free form, paste its `https://formspree.io/f/xxxx` URL.
- **Google Sheets**: deploy an Apps Script web app that appends rows, paste its URL.

Field names sent: `name`, `email`, `phone`, `organization`, `team`, `pitch`.

## Deploy (free)
- **Netlify**: drag-and-drop the folder, or connect the git repo.
- **GitHub Pages**: push to a repo, enable Pages on the root.
