# J&J CAPLYTA

White-label brand derived from the PhilRx MyPhil base flow. Only brand identity,
the screen set, the copy tone, and the payment model differ from that base.

**This project is self-contained** — it carries the slice of the PhilRx design
system it uses in `ds/`, so it builds and deploys on its own with no monorepo
present.

> Exported from the `philrx-patient-journey` monorepo
> (`projects/jnj-caplyta`), which remains the upstream source. Changes made here
> do not flow back automatically.

## Run it

    npm install
    npm run dev

Opens at `/flow`, the journey navigator. `/` redirects there.

## Deploy it

**Live: [jnj-caplyta-six.vercel.app](https://jnj-caplyta-six.vercel.app)** — `/flow` for the navigator.

Vercel needs no configuration — `vercel.json` already sets the SPA rewrites and
the framework preset is detected from `package.json`. Point Vercel at this repo
and it builds.

Note the `-six` suffix: `jnj-caplyta.vercel.app` is held by a **different Vercel
account** and serves an older, unrelated mockup — the pre-PA version with no
payment variants and no journey navigator. It does not build from this repo and
pushing here does not update it. Check the live URL above, not that one.

**On `ds/`:** it is a snapshot of the shared PhilRx design system, taken at
export time. Upstream fixes do not reach this repo on their own — they arrive
only when someone re-runs `scripts/vendor-ds.mjs` in the monorepo and re-exports.
That is deliberate: a client-dedicated repo wants a frozen, reviewable design
system rather than one that shifts underneath it.

## What's brand-specific

| Area | File |
|---|---|
| Colors (`--sky` family, secondary, tagline) | `src/brand-theme.css` |
| Marketing header logo + tagline | `src/components/BrandHeader.jsx` |
| In-app header logo | `src/components/BrandAppHeader.jsx` |
| Johnson & Johnson footer | `src/components/JnjFooter.jsx` |
| Four payment coverage variants | `src/paymentCoverages.js` |
| Screen set and order | `src/pageRegistry.js` |
| Navigator stage/screen metadata | `src/flow/flowData.js` |

And two generated folders, both produced by `node scripts/vendor-ds.mjs` and
**not edited by hand**:

| Folder | What it is |
|---|---|
| `ds/` | The slice of the shared design system this brand imports (26 files, ~365 KB). `@ds` resolves here. |
| `reference/autocomms/` | The copy-tone reference, carried along so a standalone checkout has it |

Primary is `#00587D`; hover / disabled / tint are derived from it. Secondary is
`#B587B8`. Everything else stays on base defaults.

## Copy tone

SMS copy is written in **V2 — Professional**, per
`reference/autocomms/README.md`: lead with the fact, no exclamation marks, no
motivational framing, imperative instructions, compliance footer verbatim.

`/sms` follows message `STD1.1` V2 directly. The other eight SMS screens belong
to journey stages whose autocomms **have not been supplied yet** (prior
authorization, payment approval, shipping & delivery, refills) — their copy was
written to match the professional register, not lifted from an approved source.
Treat it as provisional until the PM sends those exports.

`src/assets/caplyta-logo.svg` is the real CAPLYTA lockup — wordmark, J&J ribbon
and the `(lumateperone) capsules` generic-name line, so it is wider and shorter
than a bare wordmark (169×63, roughly 2.7:1). Both `BrandHeader` and
`BrandAppHeader` render it at `height: 28`; much below that and the generic name
stops being readable. The J&J footer mark (`src/assets/jnj-logo.svg`) is likewise the
real asset from the client's Figma file.

## Screen flow

Enrollment (8 screens, progress bar on `/welcome` → `/enrollment-success`):

    /sms → /welcome → /insurance-details → /contact-information
         → /hipaa-authorization → /savings-enrollment
         → /enrollment-success → /create-password

`/hipaa-authorization` and `/savings-enrollment` are both optional — "No thanks"
and "Decline enrollment" continue the flow rather than blocking it.

Then the funnel continues, each stage carrying its SMS autocomms and its app
screens: **Prior Authorization** → **Payment Approval** → **Shipping & Delivery**
→ **Refills**. Refills sit at the end: the refill SMS routes through the log-in
chain (`/login?next=refill`), not straight into the review screen.

**Excluded from the base flow:** caregiver modal, insurance card upload/review,
combined coupon-enrollment screen, and the second-chance / dual-pricing payment
scenarios.

## Payment approval

One screen at four coverage types, each its own route so the navigator can
deep-link them. Defined in `src/paymentCoverages.js`:

| Coverage | Total | PAP banner |
|---|---|---|
| Commercial — covered | $0 | no |
| Commercial — not covered | $100 | no |
| Uninsured | $450 | yes |
| Government-sponsored | $450 | yes |

The patient-assistance banner links to
`https://www.portal.jnjwithme.com/patient-assistance` and sits inside the order
summary, matching Figma `10Tk5IOa5hql2baZEgZMeu` node `2373:9370`.

Prices are client-supplied placeholders — `$100` and `$450` especially.

## Journey side panels

`/flow` shows the preview between two panels: `FlowSidebar.jsx` on the left lists
every stage and screen in order with the patient's position ("Step N of 36",
completed steps checked), and `FlowInfoPanel.jsx` on the right explains the
selected screen's trigger and system action.

## Verification

    npm run dev
    node scripts/record-journey.mjs http://localhost:<port>

Walks all 36 screens, writes `scripts/out/journey/NN-<name>.png` plus
`caplyta-journey.webm`, and asserts: no base-brand string survives in visible
copy or attributes, text notifications and auto-refill default to checked, the
PAP banner appears on exactly the uninsured and government coverages, the log-in
chain reaches the one-time code, `?next=refill` returns to the refill review, all
nine SMS screens stay in the professional register (no exclamation marks, no
motivational phrasing), and the sidebar reports journey position. Exits non-zero
on any failure or console error.

To confirm the project really is portable:

    cp -R . /tmp/standalone && cd /tmp/standalone
    rm -rf node_modules dist && npm install && npm run build

It should produce byte-identical bundle hashes to a build run in place.

`scripts/verify-baseline.mjs` and `verify-progress-bar.mjs` carry over from the
base flow and target its port.

## Known limitations

Same as the base flow: no TypeScript and no unit tests, so `npm run build` won't
catch a design-system component's prop contract changing. The SMS screens keep
their iOS status-bar chrome, since they recreate native Messages screenshots.
