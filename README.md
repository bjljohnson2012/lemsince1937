# LEM Since 1937

Public website for the Lutheran Evangelistic Movement. A straightforward brochure: Home, About, Events, Give, and Contact.

## Run locally

Requires Node.js 20 or newer (22 is a good match for Hostinger).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm start
```

## Deploy on Hostinger Node.js Git

Hostinger’s Next.js preset builds this repo and starts the server. No environment variables are required.

1. In hPanel, go to **Websites → Add Website → Node.js web app**.
2. Choose **Import Git repository** and connect GitHub.
3. Select this repository and the branch you want to publish (usually `main` after review).
4. Confirm the detected settings:
   - **Framework:** Next.js
   - **Node.js version:** 22, or any 20+
   - **Build command:** `build` (the npm script)
   - **Output directory:** `.next`
   - **Entry file:** leave empty. Hostinger ignores it for Next.js.
5. Deploy. Later pushes to that branch rebuild the site.

Hostinger runs `npm install`, then the build script. It applies `output: "standalone"` for you and starts the bundled server. `next.config.ts` exports a plain object so that merge works. Do not switch the config to a function, and do not set `output: "export"`.

If the app is created with the generic Node.js preset instead of Next.js, use:

- Install: `npm ci`
- Build: `npm run build`
- Start: `npm run start -- -p $PORT`
- Node.js 20 or newer

Giving and Midwinter registration stay on Amplify. This site links out. It does not take card payments.

### Hero media

The home page paints the poster immediately and starts the background video only after first paint (`preload="none"`, then `src` is set from `requestIdleCallback`, or a short timeout where that API is missing). The clip is a normal HTML5 video with `object-fit: cover`. There is no YouTube embed and no extra scale.

- Poster: `https://share.benjohnson.ai/files/2026/10/330cd065-hero-poster.jpg?v=3`
- Video: `https://share.benjohnson.ai/files/2026/10/7a405a2b-hero-bg.mp4?v=3`

Those URLs live in `src/lib/site.ts`.

Further down the home page, under the Midwinter band, a rounded card embeds the AFLC Vimeo talk “Remembering God’s Mighty Works” (`player.vimeo.com/video/112103006`, starting at 17.5 seconds). The player is lazy-loaded. The file is not downloaded into this repo. If AFLC removes that video, the card will show Vimeo’s unavailable message.

### Public facts on the site

- Phone: 805-807-8336
- Email: pastor@jamesljohnson.com
- Mail: PO Box 358, Mora, MN 55051
- Midwinter Arizona Retreat: January 31 – February 2, 2027. Theme: We’re waking up!
- Mornings: The Source Church, 7205 Southern Ave (Mesa)
- Evenings: Calvary Free Lutheran, 509 N. 96th Street

The logo is `public/logo.png`. Other photographs are in `public/images/`.
