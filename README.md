# Techo Traders — Corporate Website

A Node.js + Express + EJS corporate website for Techo Traders (Pvt) Ltd, the parent organization of three subsidiaries: Techo Labs, Techo Xpress, and Techo Connect.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the server
npm start

# 3. Open in browser
http://localhost:3000
```

For development with auto-reload:
```bash
npm run dev
```

## Project Structure

```
techo-traders/
├── server.js              # Express app entry point
├── package.json
├── routes/
│   ├── home.js
│   ├── portfolio.js
│   ├── about.js
│   ├── partners.js
│   ├── insights.js
│   └── contact.js
├── views/
│   ├── home.ejs
│   ├── portfolio.ejs
│   ├── about.ejs
│   ├── partners.ejs
│   ├── insights.ejs
│   ├── contact.ejs
│   ├── 404.ejs
│   └── partials/
│       ├── head.ejs
│       ├── nav.ejs
│       └── footer.ejs
└── public/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── favicon.svg
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, Trinity cards, Philosophy |
| Portfolio | `/portfolio` | Techo Labs, Xpress, Connect detail sections |
| About | `/about` | Company story, values, mission |
| Partners | `/partners` | Investor & partner relations, Techo Synergy |
| Insights | `/insights` | Techo Insights blog listing |
| Contact | `/contact` | Contact form with department selector |

## Customization

### Add your contact details
Edit `views/partials/footer.ejs` and `views/contact.ejs` with real phone/email.

### Add email functionality to contact form
Install nodemailer and configure in `routes/contact.js`:
```bash
npm install nodemailer
```

### Add Techo Connect website URL
In `views/portfolio.ejs`, update the "Visit Techo Connect" button href.

### Add blog articles
In `routes/insights.js`, add entries to the `articles` array.

## Design System

- **Primary Font:** Bebas Neue (display headings)
- **Body Font:** Outfit (body text)
- **Mono Font:** JetBrains Mono (labels, tags, code)
- **Primary Blue:** `#0A4FD4`
- **Labs Accent:** `#0A4FD4` (blue)
- **Xpress Accent:** `#D44F0A` (orange)
- **Connect Accent:** `#0AAD6E` (green)
