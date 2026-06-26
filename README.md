# 🚀 Anass — Personal myportfolio

A high-fidelity Bento Grid myportfolio built with **Nuxt 3**, **Vue 3**, **TypeScript**, **Tailwind CSS**, and **@vueuse/motion**.

## Tech Stack

| Layer      | Technology                                        |
|------------|---------------------------------------------------|
| Framework  | Nuxt 3 (Vue 3 + TypeScript)                       |
| Styling    | Tailwind CSS with custom dark/light token system  |
| Animations | @vueuse/motion (Framer Motion for Vue)            |
| Icons      | lucide-vue-next                                   |
| Theming    | @nuxtjs/color-mode (system-aware dark/light)      |

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server → http://localhost:3000
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
app/
├── assets/css/main.css        ← Global styles + Tailwind layers
├── components/
│   ├── NavBar.vue             ← Sticky navbar + theme toggle
│   ├── HeroSection.vue        ← Intro grid (name, stats, CTA)
│   ├── AboutSection.vue       ← About me + summary card
│   ├── ServicesSection.vue    ← What I do (3 service cards)
│   ├── ProjectGrid.vue        ← Bento project cards (tilt on hover)
│   ├── TechStack.vue          ← Marquee rows + category breakdown
│   ├── ExperienceSection.vue  ← Timeline + education
│   ├── ContactSection.vue     ← Contact info + message form
│   ├── FooterSection.vue      ← Links + social icons
│   └── BaseCard.vue           ← Reusable card with 3D tilt effect
├── composables/
│   ├── useColorMode.ts        ← Color-mode shim
│   └── useMotion.ts           ← Motion presets
└── pages/
    └── index.vue              ← Page assembly
tailwind.config.ts             ← Custom color tokens
nuxt.config.ts                 ← Modules + head config
```

## Customising Your Data

All placeholder data is **clearly commented** inside each component. Find and replace:

### 1. Personal info — `HeroSection.vue`
- Name, location, tagline, CTA links
- Drop your photo at `public/avatar.jpg` and update the `<img>` tag

### 2. Projects — `ProjectGrid.vue`
- Replace the `projects` array with your real projects
- Fields: `title`, `description`, `tags`, `github`, `live`, `icon`

### 3. Experience — `ExperienceSection.vue`
- Replace the `experience` array and `education` array

### 4. About & socials — `AboutSection.vue`, `FooterSection.vue`
- Update bio text, social URLs, contact email

### 5. Tech stack — `TechStack.vue`
- Adjust `row1`, `row2` marquee items and `categories`

### 6. Contact form — `ContactSection.vue`
- Swap the fake `setTimeout` in `sendMessage()` for a real service:
  - [EmailJS](https://emailjs.com) — no backend needed
  - [Resend](https://resend.com) — modern email API
  - Netlify Forms — if deploying to Netlify

## Adding Your Photo

```
public/
└── avatar.jpg   ← 400×400px recommended, square crop
```

Then in `HeroSection.vue`, replace the `<User />` icon block with:

```html
<img src="/avatar.jpg" alt="Your Name" class="w-full h-full object-cover" />
```

## Deployment

```bash
# Netlify / Vercel — push to GitHub and connect your repo
# The build command is: npm run build
# Output directory: .output/public (static) or root for SSR

# Cloudflare Pages
npm run generate   # static generation
# Publish: .output/public
```

## Color Tokens

All tokens are in `tailwind.config.ts`. The key palettes:

| Token            | Dark value  | Purpose              |
|------------------|-------------|----------------------|
| `bg-primary`     | `#0a0f1a`   | Page background      |
| `bg-card`        | `#111827`   | Card background      |
| `bg-border`      | `#1e2d45`   | Border / subtle fill |
| `accent-blue`    | `#3b82f6`   | Primary accent       |
| `accent-cyan`    | `#06b6d4`   | Secondary accent     |
| `text-primary`   | `#f1f5f9`   | Main text            |
| `text-secondary` | `#94a3b8`   | Body text            |
| `text-muted`     | `#64748b`   | Labels / metadata    |
