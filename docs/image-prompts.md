# Image prompts — Meeqat Travel & Tours

Hand this file to the image-generation agent. Every entry gives the **exact save
path** the site already expects, the aspect ratio, and the prompt.

## Rules that apply to every image

Put these in the generator's system/style field so they apply to all of them:

- Photorealistic editorial travel photography. **Not** illustration, not 3D render,
  not CGI, not HDR-heavy, not oversaturated.
- Natural light wherever possible. Avoid the over-processed "AI look": no glowing
  rim light on every edge, no impossible symmetry, no plastic skin, no lens flare
  spam.
- Shot on a full-frame camera, 35mm or 50mm, shallow-to-medium depth of field.
- Slight imperfection is good — real crowds, worn surfaces, uneven lighting.
- **No text, no logos, no watermarks, no signage in a made-up language.**
- No identifiable faces in close-up unless the brief says so (we need photo consent
  for real customers, and invented faces on a testimonial read as fake).
- Colour world: deep green `#0B4D3B`, forest `#063528`, royal navy `#16243F`,
  brass gold `#B98B3C`, ivory `#FBF9F4`. Warm, not cold.

### Formats

| Use | Ratio | Pixels |
|---|---|---|
| Hero / full-bleed | 16:9 | 2400 × 1350 |
| Card / slider | 16:10 | 1600 × 1000 |
| Portrait destination card | 4:5 | 1200 × 1500 |
| Square logo-ish tile | 1:1 | 1000 × 1000 |

Save as `.jpg`, quality 82, then run through an optimiser. Target under 400 KB each —
the current hero images are over 1 MB and that is the main reason the site feels slow
on a phone.

---

## 1. Office photography (18 images) — highest priority

These do not exist yet and the offices pages are already wired to them. Brief for all:
*a modern Pakistani travel agency office, genuinely upmarket but not a Dubai showroom —
white and cream walls, warm oak or walnut joinery, brushed brass accents, deep green
upholstery, recessed warm lighting, large windows with daylight, potted plants, clean
glass counters, comfortable seating for families, framed certificates on the wall
(blank frames — no readable text), Islamic geometric pattern used sparingly as a
screen or partition detail.*

| Save to | Ratio | Prompt |
|---|---|---|
| `public/images/offices/rahim-yar-khan-1.jpg` | 16:10 | Wide interior of a modern travel agency reception in a small Pakistani city. Cream walls, warm oak counter with brass trim, deep green fabric chairs, daylight from a tall window, a family seated with a consultant at a desk in the background, shallow depth of field, natural warm light, editorial photography |
| `public/images/offices/rahim-yar-khan-2.jpg` | 16:10 | Consultation desk detail in an upmarket travel agency: oak desk, two green upholstered chairs, a laptop, printed brochures fanned out, a brass desk lamp, soft window light from the left, warm neutral palette |
| `public/images/offices/rahim-yar-khan-3.jpg` | 16:10 | Exterior of a smart single-storey travel agency office on a tree-lined canal road in Punjab, Pakistan, late afternoon golden light, clean cream façade with dark green trim and a plain unlit signboard (no text), parked motorbike, dusty warm atmosphere, documentary style |
| `public/images/offices/bahawalpur-1.jpg` | 16:10 | Bright travel agency waiting area, cream and white walls, four green armchairs around a low walnut table, magazines, a large window with sheer curtains, warm afternoon light |
| `public/images/offices/bahawalpur-2.jpg` | 16:10 | Corner of a modern travel agency with a brass-framed glass partition, Islamic geometric screen detail, indoor plant, warm downlighting, cream and green palette |
| `public/images/offices/multan-1.jpg` | 16:10 | Busy but orderly travel agency front desk, three staff working at computers, warm oak counter, cream walls, brass pendant lights overhead, daylight, natural candid feel |
| `public/images/offices/multan-2.jpg` | 16:10 | Travel agency interior looking toward a glass entrance door, sunlight streaming across a polished floor, green accent wall, comfortable seating, warm and calm |
| `public/images/offices/multan-3.jpg` | 16:10 | Detail shot: a stack of passports and travel folders on a walnut counter beside a brass desk bell and a small potted plant, soft natural light, shallow depth of field |
| `public/images/offices/lahore-1.jpg` | 16:10 | Larger upmarket travel agency in a city commercial building, double-height cream wall, brass and green signage bar (no text), several consultation pods, glass, daylight, contemporary and calm |
| `public/images/offices/lahore-2.jpg` | 16:10 | Private consultation room in a travel agency, oval walnut table, six green chairs, wall of blank framed certificates, warm recessed lighting, cream walls |
| `public/images/offices/lahore-3.jpg` | 16:10 | Reception counter of an elegant travel agency, brushed brass counter edge, cream stone top, a vase of white flowers, soft evening interior lighting |
| `public/images/offices/faisalabad-1.jpg` | 16:10 | Modern travel agency workspace with two consultants at desks reviewing documents with a client, cream and green interior, daylight from a side window, candid documentary style |
| `public/images/offices/faisalabad-2.jpg` | 16:10 | Clean travel agency interior corner with a green accent wall, brass wall sconce, wooden bench seating, indoor plant, warm minimal styling |
| `public/images/offices/karachi-1.jpg` | 16:10 | Contemporary travel agency on a busy city road, seen from inside looking out through a full-height glass frontage, traffic blurred outside, warm interior lighting, cream and green palette, evening |
| `public/images/offices/karachi-2.jpg` | 16:10 | Travel agency seating area with four green armchairs, a low brass-and-glass table, a large abstract Islamic geometric artwork on a cream wall, warm lighting |
| `public/images/offices/karachi-3.jpg` | 16:10 | Detail of a travel agency counter with a computer monitor turned away, boarding-pass wallets, a brass name-plate holder (empty, no text), warm side light |

---

## 2. Replace the current hero (3 images) — second priority

The existing `hero-kaaba-night.jpg` is soft at the bottom edge and dated. Replace with
a set the hero can cross-fade through.

| Save to | Ratio | Prompt |
|---|---|---|
| `public/images/hero/haram-night-1.jpg` | 16:9 | Masjid al-Haram at night from an elevated angle, the Kaaba centred in a vast circle of pilgrims in white ihram, marble courtyard glowing under warm floodlight, modern surrounding towers softly lit, deep blue night sky, crisp edge-to-edge sharpness, high-detail architectural travel photography |
| `public/images/hero/haram-night-2.jpg` | 16:9 | Wide night view of the Grand Mosque courtyard, concentric rings of pilgrims performing tawaf, motion blur in the crowd but the Kaaba sharp, warm marble tones against a dark sky |
| `public/images/hero/madina-dusk.jpg` | 16:9 | Masjid an-Nabawi at dusk, the Green Dome and minarets against a deep indigo sky, the famous umbrellas partly open in the courtyard, warm golden floodlighting, calm and reverent, sharp throughout |

Then in the homepage hero, swap the single `<Image>` for
`<AutoRotateImage images={[...]} interval={9} />` from
`src/components/ui/ImageSlider.tsx`.

---

## 3. Hotel sliders (9 images)

Each hotel card takes three photos so the slider dots have something to show.

| Save to | Ratio | Prompt |
|---|---|---|
| `public/images/hotels/makkah-exterior-1.jpg` | 16:10 | Exterior of a modern five-star hotel tower in Makkah at dusk, warm stone cladding, the Grand Mosque visible below, clear architectural photography |
| `public/images/hotels/makkah-room-1.jpg` | 16:10 | Five-star hotel twin room, cream and warm wood, crisp white bedding, a window with a distant view of the Haram courtyard, soft daylight, uncluttered |
| `public/images/hotels/makkah-lobby-1.jpg` | 16:10 | Hotel lobby with cream marble, brass detailing, deep green seating, a large chandelier, guests in the middle distance, warm even lighting |
| `public/images/hotels/madina-exterior-1.jpg` | 16:10 | Modern hotel façade in Madina facing the Prophet's Mosque plaza, warm sandstone, palm trees, morning light |
| `public/images/hotels/madina-room-1.jpg` | 16:10 | Comfortable four-star hotel room, warm neutral tones, two beds, a prayer mat folded on a chair, window with soft daylight |
| `public/images/hotels/madina-lobby-1.jpg` | 16:10 | Hotel reception in Madina, cream stone counter, brass accents, a seating area with green upholstery, calm and bright |
| `public/images/hotels/dining-1.jpg` | 16:10 | Hotel buffet restaurant during breakfast, South Asian and Arabic dishes on a warm-lit servery, clean white plates, no people in focus |
| `public/images/hotels/dining-2.jpg` | 16:10 | Table set for a family meal in a hotel restaurant, warm lighting, simple elegant tableware, cream and brass palette |
| `public/images/hotels/shuttle-1.jpg` | 16:10 | Modern white air-conditioned coach parked outside a Makkah hotel entrance at dawn, luggage being loaded, warm early light, documentary style |

---

## 4. Airline cards (4 images)

Cards currently have no imagery. Generic aviation only — **do not generate airline
liveries, tail logos or brand marks.**

| Save to | Ratio | Prompt |
|---|---|---|
| `public/images/airlines/widebody-dawn.jpg` | 16:10 | Unmarked white wide-body airliner at a jet bridge at dawn, ground crew working, warm low sun, clean commercial aviation photography, no logos or text |
| `public/images/airlines/cabin-interior.jpg` | 16:10 | Modern economy cabin interior of a wide-body aircraft, empty, warm ambient lighting, blue-grey seats, clean and spacious, no branding |
| `public/images/airlines/boarding-gate.jpg` | 16:10 | Airport departure gate with passengers waiting, large windows, an aircraft visible outside, warm afternoon light, candid, no readable signage |
| `public/images/airlines/baggage-check.jpg` | 16:10 | Airline check-in counter with luggage on the belt, travellers from behind, bright modern terminal, no logos or readable text |

---

## 5. Government portal cards (4 images)

Abstract and respectful — these represent institutions, so nothing that looks like a
fake official document or seal.

| Save to | Ratio | Prompt |
|---|---|---|
| `public/images/portals/nusuk.jpg` | 16:10 | A smartphone held in one hand showing a blank app interface, the Grand Mosque softly out of focus in the background, warm evening light, no readable text on screen |
| `public/images/portals/tasheer.jpg` | 16:10 | Clean modern visa application centre interior, numbered service counters, orderly seating, bright neutral lighting, people from behind, no readable signage |
| `public/images/portals/mora.jpg` | 16:10 | Formal government office corridor with warm stone floors and tall windows, calm institutional architecture, no flags or readable text |
| `public/images/portals/absher.jpg` | 16:10 | Overhead shot of a desk with a passport, a smartphone face-down, reading glasses and a notebook on warm wood, soft daylight, no readable text |

---

## 6. Ziyarat sites (8 images)

The site references these; several current files are low quality.

| Save to | Ratio | Prompt |
|---|---|---|
| `public/images/ziyarat/masjid-quba.jpg` | 16:10 | Masjid Quba in Madina, white domes and minaret against a clear blue sky, palm trees, bright midday light, clean architectural photography |
| `public/images/ziyarat/masjid-qiblatain.jpg` | 16:10 | Masjid al-Qiblatain, twin white minarets and smooth modern domes, blue sky, warm sunlight on white stone |
| `public/images/ziyarat/mount-uhud.jpg` | 16:10 | Mount Uhud near Madina, red-brown rocky ridge under strong daylight, dry plain in the foreground, wide landscape |
| `public/images/ziyarat/jabal-noor.jpg` | 16:10 | Jabal al-Noor near Makkah, steep conical mountain with a winding path, hazy warm afternoon light, wide landscape |
| `public/images/ziyarat/jannat-al-baqi.jpg` | 16:10 | Wide respectful view of a large walled historic cemetery in Madina with plain stone markers and palm trees, soft morning light, no people close up |
| `public/images/ziyarat/mina-tents.jpg` | 16:10 | The white tent city of Mina seen from a hillside, rows of identical white tents in a desert valley, bright daylight |
| `public/images/ziyarat/arafat.jpg` | 16:10 | Mount Arafat and the plain around it, dry rocky landscape, clear sky, wide open, warm light |
| `public/images/ziyarat/jeddah-albalad.jpg` | 16:10 | Historic Al-Balad district of Jeddah, coral stone buildings with carved wooden rawasheen balconies, warm late light, narrow street, no people close up |

---

## After the images land

1. Drop them at the exact paths above.
2. Run `npm run build` — any missing path fails loudly rather than silently.
3. Office pages, visa guides and hotel/airline cards pick them up automatically;
   the hero swap in point 2 is the one manual code change.

## If you would rather use real photographs

Tell me and I will wire in a licensed source instead. For the holy sites, the
highest-quality legitimate options are the Saudi Ministry of Hajj and Umrah and
Nusuk media libraries, and stock libraries with editorial licences. **Do not** pull
images off Google Images or other agencies' websites — for a business whose main
asset is its licence, a copyright complaint is a real risk. Real photographs of your
own offices and your own groups will outperform anything generated here, so use these
prompts as placeholders and replace them as you take real ones.
