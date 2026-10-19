# Jefferson Machado CRM landing page — design brief

## Intent

Create a focused commercial landing page for Jefferson Machado's CRM solution for micro and small businesses in Brazil. The page must reduce the anxiety of "losing the thread" of customer conversations and make the next action obvious: start a direct WhatsApp conversation with Jefferson.

## Audience and moment

The visitor is a small-business owner or operator who currently keeps customer information in scattered chats, notes, spreadsheets, or memory. They arrive wanting a practical explanation, not enterprise jargon. The key emotional shift is from "my operation is improvised" to "I can see what is happening and what to do next".

## Goals

- Explain the value of a structured CRM in plain Brazilian Portuguese.
- Make the product tangible through a believable CRM interface visualization.
- Connect the benefits to everyday operations: customer base, WhatsApp follow-up, service funnel, next steps, and visibility.
- Drive conversion through repeated, high-clarity WhatsApp calls to action.
- Establish a credible direct-contact path through WhatsApp and e-mail.
- Publish a fast, dependency-free static site on GitHub Pages.

## Non-goals and anti-goals

- No invented testimonials, customer logos, performance statistics, pricing, guarantees, or unsupported integrations.
- No login, backend, lead database, real chat integration, or form submission in this first page.
- No generic "digital transformation" copy that could describe any software.
- No visual overload that makes the owner feel the CRM is complex.

## Content architecture

1. Header: Jefferson Machado wordmark, anchor navigation, WhatsApp CTA.
2. Hero: operational promise, two CTAs, trust signal, and a stylized CRM cockpit showing funnel stages and WhatsApp follow-up.
3. Problem-to-outcome strip: scattered conversations become a visible operation.
4. Benefits: base organizada, atendimento que não se perde, funil com clareza, and decisions with context.
5. How it works: organize, follow up, and grow, expressed as a three-step flow.
6. Product detail: customer timeline, pipeline stages, next-action card, and WhatsApp-ready follow-up.
7. Confidence section: calm reassurance about knowing who needs attention and what is next.
8. FAQ: concise objection handling without inventing technical commitments.
9. Final CTA: direct WhatsApp contact with Jefferson and e-mail fallback.
10. Footer: contact details, copyright, and privacy-conscious note that this is a direct conversation.

## Visual direction

Use a dark evergreen foundation (#09281f / #0d3a2b), soft off-white surfaces, and a sharp lime accent (#c8ff73) for actions and active states. The tone should feel like a modern operations tool: composed, high-signal, trustworthy, and human. Use a bold display face paired with a readable sans-serif loaded from Google Fonts with system fallbacks. Use CSS-built interface cards and line/number accents instead of stock imagery so the product story remains the focus.

## Interaction and accessibility

- All WhatsApp CTAs use the normalized number `5548991138058` and a helpful prefilled message in Portuguese.
- E-mail CTA uses `jeffersonmachado81@gmail.com`.
- FAQ uses native `<details>` elements.
- Navigation anchors use meaningful section ids; the mobile menu is keyboard accessible.
- Respect `prefers-reduced-motion`; reveal effects are supplemental only.
- Maintain visible focus styles, sufficient contrast, semantic headings, and responsive layouts from 320px upward.

## SEO and deployment

- Title, description, canonical, Open Graph, Twitter, JSON-LD `ProfessionalService`, and visible commercial terms.
- Root `sitemap.xml`, `robots.txt`, and `llms.txt` point at the expected GitHub Pages URL: `https://jorgediasdsg.github.io/jefferson-machado-crm/`.
- GitHub Pages is enabled from the repository's `main` branch root.

## Calls made by the builder

- The e-mail was normalized from the supplied phrase to `jeffersonmachado81@gmail.com`.
- The page uses a product visualization rather than photography because no brand assets or portrait were supplied.
- The site remains buildless HTML/CSS/JS so GitHub Pages can serve it directly with no runtime dependency.
