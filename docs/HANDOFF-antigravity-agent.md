# Handoff brief — Meeqat Travel & Tours

**For:** the Antigravity / Gemini agent taking over images and the remaining build.
**Repo:** https://github.com/Dev-Logic-max/meeqat-travels
**Live:** https://meeqat-travels.vercel.app
**Project root:** `F:\My Projects\Travelling Agency\meeqat-travels`

Read this file, then `docs/image-prompts.md`, then `CLAUDE.md` in the parent folder
(`F:\My Projects\Travelling Agency\CLAUDE.md`) for the locked brand and regulatory
decisions. Do not re-open the decisions recorded there.

---

## 0. Read this before you change anything

**This is Next.js 16.3, not 15.** The bundled docs at
`node_modules/next/dist/docs/` are authoritative and differ from most training data.
Three things that have already bitten this project:

1. `middleware.ts` is **deprecated**. This repo uses `src/proxy.ts` exporting
   `export function proxy(request: NextRequest)`. Do not rename it back.
2. `params` in pages and layouts is a **Promise**. Use `use(params)` in client
   components or `await params` in server components, with the typed helpers
   `PageProps<'/route'>` / `LayoutProps<'/route'>`.
3. The root layout lives at `src/app/[locale]/layout.tsx`, not `src/app/layout.tsx`.
   It sets `<html lang dir>`. **Never** add `dir=` to an inner element — doing so
   silently breaks Arabic. That bug already existed once and was removed.

**Encoding warning.** Source files are UTF-8 without BOM and contain Urdu and Arabic.
PowerShell 5.1's `Get-Content`/`Set-Content` will corrupt them (`م` becomes `Ù…`).
If you script edits, use:

```powershell
$enc = New-Object System.Text.UTF8Encoding($false)
$c = [System.IO.File]::ReadAllText($path, $enc)
[System.IO.File]::WriteAllText($path, $c, $enc)
```

Also note PowerShell treats `[locale]` in a path as a wildcard — always use
`-LiteralPath`.

**Verify before you claim done.** Run `npm run build`, then `npm run start`, then
actually request the URLs. A previous handoff summary claimed pages were created that
already existed and claimed images were placed that were not.

---

## 1. Current state

### Working and deployed
- Locales `en` / `ur` / `ar` with real URLs, correct `lang` + `dir`, and a cookie-aware
  redirect in `src/proxy.ts`.
- Navbar with hover mega-menus (desktop), mobile drawer, flag language dropdown.
- Pages: home, umrah-packages (+ detail), package-builder, visas (+ detail),
  destinations/[city] (makkah, madina, jeddah, riyadh), offices (+ 6 branches),
  visa-guide (+ 6 guides), licence, about, contact.
- `ImageSlider` (dots, arrows, swipe) and `AutoRotateImage` (cross-fade) in
  `src/components/ui/ImageSlider.tsx`.

### Known gaps — your job
| # | Gap | Where |
|---|---|---|
| 1 | 46 images missing; office photos are placeholders | `docs/image-prompts.md` |
| 2 | Airline and portal cards have no imagery | `src/components/OfficialPortalsSection.tsx` |
| 3 | Hero is a single static image; should cross-fade 3 | `src/app/[locale]/page.tsx` |
| 4 | Legacy page bodies show English under `/ar` | `src/content/translations.ts` |
| 5 | Legacy pages not audited at phone widths | all `src/app/[locale]/*/page.tsx` |
| 6 | Office addresses for 5 branches are placeholders | `src/content/offices.ts` |

---

## 2. Task 1 — Images (do this first)

Follow `docs/image-prompts.md` exactly. It lists all 46 images with the **exact save
path each one must land at**, the aspect ratio, and the prompt. The style rules at the
top of that file matter more than the individual prompts — they are what stops the
output looking AI-generated, which is the client's single biggest complaint.

Summary of the sets:

| Set | Count | Path prefix | Priority |
|---|---|---|---|
| Office interiors and exteriors | 16 | `public/images/offices/` | **Highest** — currently placeholders |
| Hero (cross-fade set) | 3 | `public/images/hero/` | High — current hero is soft at the bottom |
| Hotel sliders | 9 | `public/images/hotels/` | Medium |
| Airline cards | 4 | `public/images/airlines/` | Medium |
| Government portal cards | 4 | `public/images/portals/` | Medium |
| Ziyarat sites | 8 | `public/images/ziyarat/` | Medium |

**Hard constraints:**
- No text, logos, watermarks or signage in any image.
- No airline liveries or tail logos — generic aircraft only.
- No fabricated official documents, seals or government letterheads.
- No identifiable close-up faces (we need written consent for real customers, and
  invented faces on testimonials read as fake).
- Target under 400 KB each. The current heroes are over 1 MB and that is the main
  reason the site feels slow on a mid-range Android phone.

---

## 3. Task 2 — Wire the images in

### 3a. Hero cross-fade
In `src/app/[locale]/page.tsx`, the hero currently renders one `<Image>`. Replace with:

```tsx
import { AutoRotateImage } from '@/components/ui/ImageSlider';

<AutoRotateImage
  images={[
    '/images/hero/haram-night-1.jpg',
    '/images/hero/haram-night-2.jpg',
    '/images/hero/madina-dusk.jpg',
  ]}
  alt="Masjid al-Haram at night"
  className="absolute inset-0"
  sizes="100vw"
  interval={9}
  priority
/>
```

Keep the existing gradient overlay `div` above it. Do not change the hero copy or
layout — the client explicitly asked for the homepage to stay as it is.

### 3b. Airline and portal cards
`src/components/OfficialPortalsSection.tsx` renders three tabs. The tab order is
already correct (**Hotels → Airlines → Portals**, hotels default) — do not change it.

Add a 16:10 image at the top of each airline card and each portal card, using
`ImageSlider` where there is more than one photo and `next/image` where there is one.
Map them by index from `public/images/airlines/` and `public/images/portals/`.

### 3c. Hotel cards
Give each hotel card an `ImageSlider` with its three photos so the dots have content.

### 3d. Ziyarat
`src/app/[locale]/destinations/[city]/page.tsx` has a `cityData` map with `images`
arrays pointing at reused files. Point them at the new `public/images/ziyarat/` files
and add the missing sites.

---

## 4. Task 3 — Finish the Arabic and Urdu content

`src/content/translations.ts` currently ends with:

```ts
export const translations = { ...baseTranslations, ar: baseTranslations.en };
```

That is a deliberate placeholder: Arabic pages render English body copy. Replace the
`ar` entry with a real Arabic translation matching the `en` shape exactly. Use
`src/i18n/dictionaries.ts` as the reference for tone and terminology — its Arabic and
Urdu are already written properly.

Do the same audit for `ur`: several legacy pages still have hardcoded English strings
inside JSX rather than reading from `translations`. Move those into the dictionary.

**Nastaliq rule:** Urdu needs `line-height` around 2.1 or descenders clip. This is
already set in `globals.css`. Test on Android Chrome specifically — that is where it
breaks.

---

## 5. Task 4 — Responsive audit

New pages (offices, visa-guide, package detail, visa detail) are built mobile-first.
The **legacy** pages have not been checked at real phone widths. Test each at 360 px,
390 px and 768 px:

- `/[locale]` (home)
- `/[locale]/umrah-packages`
- `/[locale]/package-builder` ← most likely to break; it is a multi-step wizard
- `/[locale]/visas`
- `/[locale]/about`, `/contact`, `/licence`
- `/[locale]/destinations/makkah`

Look for: horizontal overflow, text colliding with icons, buttons under 44 px tall,
tables that do not scroll, and the Urdu/Arabic RTL mirror of each.

Already fixed, do not redo: the verified-information tab bar now scrolls instead of
overflowing, the homepage stats strip is a 2-up grid on mobile, and `text-wrap: balance`
plus `overflow-wrap: break-word` are applied globally to headings and body text.

---

## 6. Task 5 — Real data to replace

These are **placeholders and must not be advertised as fact.** They are currently live.

| Field | Current placeholder | In |
|---|---|---|
| DTS licence no. | `DTS-PK-7842` | `src/content/rates.json` → `agency.licenceNumber` |
| MoRA registration | `MoRA-Umrah-2026-RYK` | `agency.moraLicence` |
| Bank account | `0105-0104829102` | `agency.bankDetails` |
| IBAN | `PK36MEZN0001050104829102` | `agency.bankDetails` |
| Phones | `+92 300 6842111`, `+92 301 7923444` | `agency.phonePrimary/Secondary` |
| Branch addresses | 5 of 6 invented | `src/content/offices.ts` |

The bank details are the serious one: the footer displays them under *"All payments
must be deposited to this account"*. A fabricated account number under a payment
instruction is dangerous if anyone acts on it. Branches with `verified: false` already
render a "details being confirmed" notice — keep that behaviour until the owner
supplies real details, and set `verified: true` only for confirmed ones.

---

## 7. Rules the content must obey

From `CLAUDE.md`. These are regulatory, not stylistic:

- **Never "Book Now."** An Umrah visa cannot be filed without a Nusuk-confirmed hotel
  BRN and confirmed transport, so instant booking is impossible. Use "Get a firm quote"
  or "Reserve a seat".
- **No Hajj prices** until MoRA quota is confirmed for the season.
- **No document upload** — no passport, CNIC or bank-statement upload anywhere.
- **Do not claim embassy affiliation.** Permitted phrasing: submits through Tasheer and
  official channels; holds its own licence; MoRA-approved.
- **Photo consent** before publishing any real customer's face.
- Palette: green `#0B4D3B`, forest `#063528`, navy `#16243F`, brass `#B98B3C`,
  soft gold `#E3C77E`, ivory `#FBF9F4`, charcoal `#141B22`. Gold is an **accent only** —
  never a fill or gradient. Never tint photography green.

---

## 8. Definition of done

```powershell
cd "F:\My Projects\Travelling Agency\meeqat-travels"
npm run build          # must exit 0
npm run start
```

Then request every route and confirm 200:

```
/en /ur /ar
/en/umrah-packages  /en/umrah-packages/vip-gold-14d
/en/visas           /en/visas/saudi-umrah  /en/visas/saudi-tourist-multiple
/en/visa-guide      /en/visa-guide/work-visa-iqama
/en/offices         /en/offices/rahim-yar-khan
/en/destinations/makkah  /madina  /jeddah  /riyadh
/en/package-builder /en/about /en/contact /en/licence
```

Then check, on `/ar`: `<html dir="rtl">` is present and **no** inner `dir="ltr"` exists.

Then deploy:

```powershell
git add -A
git commit -F <message-file>     # use -F, not -m; inline quotes break in PowerShell
git push origin main
npx vercel deploy --prod --yes
```

Valid visa IDs: `saudi-umrah`, `saudi-tourist-multiple`, `uae-tourist`,
`turkey-evisa`, `schengen-consultancy`.
Valid package IDs: `vip-gold-14d`, `standard-15d`, `economy-21d`.
Valid office slugs: `rahim-yar-khan`, `bahawalpur`, `multan`, `lahore`,
`faisalabad`, `karachi`.

---

## 9. If you would rather use real photographs

Better than anything generated, and worth raising with the owner:

- **Their own** office and group photos — these outperform everything else, and the
  owner already has past-group photos. Consent required for visible faces.
- **Saudi Ministry of Hajj and Umrah / Nusuk** media libraries for the holy sites.
- **Editorial stock** with a proper licence.

Do **not** pull images from Google Images or other agencies' websites. For a business
whose main asset is its operator licence, a copyright complaint is a real risk.
