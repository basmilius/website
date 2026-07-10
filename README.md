<a href="https://bas.dev" target="_blank" rel="noopener">
	<img src="https://bmcdn.nl/assets/branding/logo.svg" alt="Bas Milius Logo" height="60" width="60" />
</a>

---

# Personal Website
Source code of my personal website [bas.dev](https://bas.dev). Built with
[Nuxt 4](https://nuxt.com) and deployed to [Cloudflare Workers](https://workers.cloudflare.com).

### ‼️ Please note
This website requires a Font Awesome Pro license. You can get one [here](https://fontawesome.com/).
Make sure the `FONTAWESOME_NPM_AUTH_TOKEN` environment variable is set before installing.

### 🎲 Get started
To run the local development server, make sure the `bun` package manager is installed and the
Font Awesome npm token is defined, then:
- **Clone** the project with `git clone https://github.com/basmilius/website`.
- **Install** dependencies with `bun install`.
- **Start** the development server with `bun run dev` (runs on port 8080).

### 🧱 Tech stack
- **Nuxt 4** / **Vue 3** with `<script setup>` and scoped SCSS.
- **@nuxt/fonts** (self-hosted Space Grotesk, JetBrains Mono, Inter).
- **@nuxtjs/color-mode** for the light/dark theme.
- **Font Awesome Pro** icons, rendered inline (`app/utils/icons.ts`).
- Content lives in `app/data/*` — no CMS.

### 🚀 Production build & deploy
The site is prerendered and served from Cloudflare Workers.
- **Build** with `bun run build` (prerenders every route into `.output`).
- **Preview** the Worker locally with `bun run preview`.
- **Deploy** to Cloudflare with `bun run deploy` (`nuxt build && wrangler deploy`).
