# ASPIRE ENTERPRISES

Responsive packaging company website built with React, TypeScript, Next.js-compatible App Router and the Vinext Sites runtime.

## Included

- Home, catalogue, 18 individual product pages, custom packaging, company overview, presence, contact and privacy pages.
- Original Aspire mark, product photographs, client logos and company profile extracted from the supplied PDF.
- Searchable, category-filtered catalogue and product-specific quotation handoff.
- Self-contained SVG India map with keyboard-accessible city/state coverage, Gulf regional information, 4 India warehouses and 15+ clients.
- Mobile navigation, keyboard-accessible dialogs, FAQs, reduced-motion support and responsive layouts.
- Per-page metadata, canonical URLs, sitemap, robots, Organization and Product structured data.
- Contact form prepares an enquiry for email or WhatsApp. It does not claim to send messages and requires no server-side mail credentials.

## Development

Use Node 22.13+ and pnpm. Install with `pnpm install`, start with `pnpm dev`, and build with `pnpm build`.

For the managed Sites environment use its supervised preview workflow. The runtime and hosting configuration are included for reproducible Sites deployments.

## Vercel deployment

Import this repository with the Next.js framework preset and the repository root as the Root Directory. The committed `vercel.json` runs `npm run build:vercel` (`next build`) and uses `.next` as the output directory. The separate `pnpm build` command produces the Sites/Cloudflare build and must not be used as Vercel's build command.

Pushes to the connected production branch trigger Vercel deployments. To check the Vercel build locally, run `pnpm run build:vercel`.

## Business content

Edit `lib/aspire.ts` for products, contact details, client brands and locations. Business photographs are in `public/images`; the original company profile is `public/aspire-company-profile.pdf`.

The locations represent service coverage. Only office and warehouse addresses explicitly provided in the profile are listed as premises. Gulf countries are presented as regional coverage rather than invented individual offices.

No prices, customer reviews, certification claims or delivery promises have been invented. Request confirmed pricing, MOQ and timelines from the sales team.

## Enquiries

The form validates required inputs, prepares a message, and opens an email draft or WhatsApp. To add direct form delivery later, connect an approved email service and add spam protection and server validation.

## SEO and domain

Set `NEXT_PUBLIC_SITE_URL` to the final public HTTPS origin before building for a custom domain. It is used for canonical metadata, structured data and sitemap URLs. On Vercel, the default uses `VERCEL_PROJECT_PRODUCTION_URL`; other hosts retain the Sites origin fallback. Private deployment access prevents search-engine indexing until the site is shared publicly. Search ranking is not guaranteed.

## Map

The SVG in `lib/india-map.ts` is simplified from all 36 state/union-territory geometries in [DataMeet state boundaries](https://github.com/datameet/maps/tree/master/States), credited under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The boundary and markers use the same projection. It includes the northeast and islands and makes no external tile requests. Ten labelled service regions have keyboard-accessible callouts and region buttons; selecting a region highlights it and lists its cities separately to avoid crowded labels. City selection updates the enquiry link. Gulf coverage has a separate regional view.

Typography uses a self-hosted Latin subset of Manrope, distributed under the SIL Open Font License; the license is included at `public/fonts/OFL-Manrope.txt`.

## Visual assets

The catalogue retains the photographs supplied in the company profile. `public/images/packaging-editorial.webp` is a generated, illustrative packaging still life for the homepage, created with the built-in image-generation tool; it is not a photograph of a customer order or facility.

Image brief: a premium editorial studio photograph of unbranded kraft corrugated and rigid presentation boxes, a paper shopping bag, an ivory carton, a kraft stand-up pouch and paper cups, on warm limestone blocks. Warm ivory backdrop, natural daylight and shadows, deep forest green / cream / kraft palette, realistic paper texture. No lettering, logos or watermarks.

## Validation

Run `pnpm exec tsc --noEmit` and `pnpm build`. Confirm contact recipients and business claims before changing them. Do not commit secret credentials, environment files or customer enquiries.
