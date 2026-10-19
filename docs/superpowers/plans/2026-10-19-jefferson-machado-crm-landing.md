# Implementation plan: Jefferson Machado CRM landing page

## Context

Implement the approved design brief in `docs/superpowers/specs/2026-10-19-jefferson-machado-crm-landing-design.md` as a dependency-free static site ready for GitHub Pages. The repository is new, so there is no existing application pattern to preserve.

## Global constraints

- Use plain HTML, CSS, and browser JavaScript only.
- Keep the runtime free of external packages; Google Fonts may be a progressive enhancement with system fallbacks.
- Use the exact WhatsApp number `5548991138058` and e-mail `jeffersonmachado81@gmail.com`.
- Do not invent social proof or unsupported product claims.
- Use `rtk` for shell commands and `apply_patch` for file edits.

## File map

- `index.html`: semantic landing page structure, copy, CTAs, CRM visual, FAQ, metadata, JSON-LD.
- `styles.css`: visual system, responsive layout, CRM dashboard styling, focus states, motion preferences.
- `script.js`: mobile navigation, scroll progress, reveal-on-scroll enhancement, current-year label.
- `tests/site.test.js`: dependency-free contract tests for required content, contacts, SEO files, and public assets.
- `package.json`: `npm test` entry point without runtime dependencies.
- `sitemap.xml`: single-page sitemap for the public URL.
- `robots.txt`: allow indexable content and advertise the sitemap.
- `llms.txt`: concise business context for AI-readable discovery.
- `README.md`: local preview, validation, and GitHub Pages notes.
- `.nojekyll`: keep GitHub Pages from applying Jekyll processing.

## Task 1 — establish the site contract with a failing test

1. Create `package.json` with a `test` script that runs `node --test tests/site.test.js`.
2. Write `tests/site.test.js` before implementation. Assert that `index.html`, `styles.css`, `script.js`, `.nojekyll`, `sitemap.xml`, `robots.txt`, and `llms.txt` exist; HTML has the Jefferson title, required section anchors, accessible main landmark, WhatsApp link containing `5548991138058`, and `mailto:jeffersonmachado81@gmail.com`; root SEO files reference the GitHub Pages URL; CSS and JS are linked.
3. Run `npm test` and confirm it fails because the implementation files do not exist.

Expected: a deterministic failing test with missing-file or missing-content assertions, not a test-runner error.

## Task 2 — implement the semantic landing page and SEO contract

1. Add the full semantic `index.html` with header/nav, hero, benefits, process, CRM visualization, confidence block, FAQ, final CTA, and footer.
2. Make every primary CTA a direct WhatsApp link with a relevant prefilled message; include the e-mail fallback.
3. Add the metadata and JSON-LD described in the spec, keeping the canonical and structured data URL aligned with the expected GitHub Pages URL.
4. Add `sitemap.xml`, `robots.txt`, `llms.txt`, and `.nojekyll`.
5. Run `npm test`; all assertions must pass.

Expected: the static content contract passes and all required public files are present.

## Task 3 — add the visual system and interactions

1. Add `styles.css` with the evergreen/lime visual system, responsive sections, CSS-built CRM cockpit, accessible focus states, mobile layout, reduced-motion handling, and details disclosure styling.
2. Add `script.js` for mobile menu state, scroll progress, reveal enhancement via `IntersectionObserver` with a safe fallback, and the current year.
3. Run `npm test` again and inspect the source for broken asset references.

Expected: the contract remains green and the page has no missing local references.

## Task 4 — document and verify the public experience

1. Add `README.md` with local preview (`python3 -m http.server 4173`) and validation commands.
2. Start a local server, request `/`, `/sitemap.xml`, `/robots.txt`, and `/llms.txt`, and confirm HTTP 200 responses.
3. If a headless Chrome path is available, capture a desktop and narrow viewport screenshot for visual QA; otherwise record the limitation and use source-level checks.
4. Run `npm test` as the final local verification.

Expected: HTTP 200 for all public files and `npm test` exits 0.

## Task 5 — publish to GitHub Pages

1. Initialize git, commit the site, create the public repository `jorgediasdsg/jefferson-machado-crm`, and push `main`.
2. Enable GitHub Pages for the `main` branch root using `gh api`.
3. Poll the Pages build/status endpoint until the site is published or the failure is explicit.
4. Verify the deployed URL and root SEO files over HTTPS.

Expected: a public URL at `https://jorgediasdsg.github.io/jefferson-machado-crm/` returning the built page, with the WhatsApp CTA present in the deployed HTML.

## Review focus

- WhatsApp links must use the correct country code and phone digits, with no accidental spaces or truncation.
- The e-mail must be the normalized address from the request.
- No claims may imply real customers, metrics, or integrations that were not supplied.
- Mobile navigation and FAQ must remain usable without JavaScript-heavy behavior.
- GitHub Pages relative paths must work under the repository subpath.
