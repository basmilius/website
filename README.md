<a href="https://bas.dev" target="_blank" rel="noopener">
	<img src="https://bmcdn.nl/assets/branding/logo.svg" alt="Bas Milius Logo" height="60" width="60" />
</a>

---

# Personal Website
Source code of my personal website [bas.dev](https://bas.dev). Built with
[React Router](https://reactrouter.com) and deployed to [Cloudflare Workers](https://workers.cloudflare.com).

### 🎲 Get started
To run the local development server, make sure the `bun` package manager is installed, then:
- **Clone** the project with `git clone https://github.com/basmilius/website`.
- **Install** dependencies with `bun install`.
- **Start** the development server with `bun run dev` (runs on port 8080).

### 🧱 Tech stack
- **React Router** in framework mode with **React 19**, on the Cloudflare Vite plugin.
- **Tailwind CSS 4**, with the design tokens in `app/app.css`.
- **Web fonts** served from `font.bmcdn.nl` (Geist, JetBrains Mono).
- **Lucide** icons, and **Simple Icons** for brand logos.
- Content lives in `app/data/*`, no CMS.

### 🚀 Production build & deploy
The site is prerendered and served from Cloudflare Workers.
- **Build** with `bun run build` (prerenders every route into `build/client`).
- **Preview** the Worker locally with `bun run preview`.
- **Deploy** to Cloudflare with `bun run deploy` (`react-router build && wrangler deploy`).
- Redirects for old URLs live in `workers/app.ts`.
