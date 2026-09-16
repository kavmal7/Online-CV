# Kavya Malhotra — Portfolio

A React/Vite portfolio in English and Norwegian Bokmål, with a cool white, navy, and blue visual theme, selected research projects, professional experience, and a print-friendly portfolio view. Styling uses plain CSS; no UI framework is required.

## Develop and check

Use Node.js 24 or newer (Node.js 22.13+ is also supported) and npm. For a fresh checkout, install the versions recorded in the lockfile:

```sh
npm ci
npm start
```

Run the checks and preview the production build:

```sh
npm run lint
npm test
npm run build
npm run preview
```

Vite serves the site under `/Online-CV/`; open the URL printed in the terminal. Production files are written to `build/`. Run `npm run build` again after changing source files if you are using the production preview. `npm run test:watch` reruns tests while editing.

To preview on a smartphone connected to the same Wi-Fi network, run `npm start -- --host 0.0.0.0` and open the terminal's Network URL with `/Online-CV/` on the phone. Allow the development server through the local firewall if prompted. The same responsive site serves desktop and mobile browsers.

`npm run deploy` builds and publishes `build/` to the repository's `gh-pages` branch using the configured Git credentials. Local development, testing, and building do not publish changes.

## Content and translation

- `src/content.js`: all portfolio copy in `en` and `no`, plus shared project URLs.
- Each language's `hero.intro` is a list of paragraphs; edit the quoted strings to update the introduction while preserving paragraph breaks.
- `src/certificates.js`: certificate links and official course titles (retained in English).
- `src/useLanguage.js`: URL, saved preference, browser history, and reading-position behavior.
- `src/App.jsx`: page composition, translated metadata, and the initial section-link scroll fallback.
- `src/index.css` and `src/App.css`: browser defaults, typography, palette, responsive layout, focus states, reduced motion, and print styling.

Share `?lang=en` or `?lang=no`; section anchors can be appended, for example `?lang=no#projects`.
An explicit URL takes precedence over a saved language preference. A first visit defaults to English. Norwegian uses the document language `nb`.
The switch remains visible on mobile and preserves the current section and expanded project list.

Section links use native browser anchors and smooth scrolling, with space for the sticky header. Reduced-motion preferences disable the animation. On an initial visit or refresh, the app retries a missed section scroll after the page and fonts load, provided the browser has not restored another position and the visitor has not interacted.

Update both language entries when changing facts; translation is maintained manually. In particular, keep `hero.note` and `education.items` consistent. Currently the Norwegian MSc education status says `Fullført`, while the English education status and both introductory notes still describe expected completion in September 2026; confirm the intended status before publishing.

Content was adapted from the supplied research and industry CVs. The dissertation manuscript is in preparation and has no invented repository or publication link. Group projects are labeled as such, and findings refer to the reported experiments. Personal contact details are limited to the email and profile links already on the public portfolio; the supplied PDF files are not bundled.

## Visual assets and sharing

The supplied blue KM logo is cropped and stored in `public/km-logo.png`, with its neutral exterior made transparent. Its geometry, blue gradient, and navy strokes are retained; no AI image generation was used. The favicon (`public/km-favicon.png`) and app icons use the same mark. The tab icon has a new filename to avoid the old logo's browser cache. Project illustrations are simple HTML/CSS method diagrams, not AI-generated images or measured result plots.

`public/social-preview.svg` is the editable source for the 1200 × 630 sharing card; `public/social-preview.png` is its browser-rendered export. If the SVG changes, regenerate the PNG. Open Graph defaults are in `index.html`; React updates title, description, and locale after a language switch. Social crawlers that do not run JavaScript see the English defaults.

## Printing and contact

The “Print this page” / “Skriv ut / lagre CV” button opens the browser print dialog for the portfolio in the current language. It does not open either original CV PDF. Print styles include the introduction, featured work, experience, education, skills, and contact email, while omitting navigation, additional projects, and certificates even when expanded. Choose “Save as PDF” to export the page.

“Ask about this research” / “Spør om forskningen” opens a `mailto:` link with a prefilled subject; it requires an email handler configured in the browser or operating system. It is not a contact form. The email address is also visible in the contact section.

## Repository maintenance

Keep `package-lock.json` committed so installations are reproducible. `build/` and `node_modules/` are generated and excluded from Git. App icons, the web manifest, and both sharing-card files are maintained assets, even though some are not imported by React. After dependency changes, run the checks above and `npm audit`.
