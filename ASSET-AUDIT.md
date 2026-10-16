# Static asset audit and independent hosting

## Confirmed cause

The live `https://stressgods-sl-community.vercel.app/` homepage returned HTTP 200, but its first photo request to `/__l5e/assets-v1/89a589ab-20c5-4992-801c-06cf4f8f7dc5/hero-crowd.jpg` returned HTTP 404 with HTML rather than an image. These origin-relative URLs are served by Lovable hosting, not by an independent Vercel deployment. The six `.asset.json` files contained metadata and URLs, not image bytes.

## Fix

Recovered all six original photo files from the existing published Lovable site without resizing, recompression, substitution, or visual edits. Each recovered file's byte count matches its original pointer. Files now ship in `public/images`, referenced by shared `siteImages` paths in `src/data/site.ts`. About's inline images use this same source. The old pointers are retained, but no rendered photo depends on them. No files or DNS records were removed.

| File | Bytes | Uses |
| --- | ---: | --- |
| hero-crowd.jpg | 80,265 | Homepage hero, About cover, gallery |
| stage-mic.jpg | 92,711 | Music feature, Steve Ricks, About inline, gallery/video thumbnail |
| duo-stage.jpg | 87,224 | Artists feature, About inline, gallery |
| crowd-floor.jpg | 142,788 | Community feature, About inline, gallery |
| blue-stage.jpg | 81,323 | Mo Haze, gallery |
| romano.jpg | 436,554 | Romano |

## Other asset types

- Navbar/footer logos are styled text, not missing logo image files.
- Icons are inline SVGs from Lucide, not remote image files.
- `public/favicon.ico` exists and is referenced as `/favicon.ico` by the root document.
- `public/robots.txt` exists. Neither public file needs a Lovable asset endpoint.
- No CSS background-image URLs or separate background image files are referenced. The visual covers are ordinary image elements. The link underline uses a CSS `linear-gradient(currentColor, currentColor)`, not an external asset.
- Styles are bundled by Vite; Google Fonts provides Archivo/Archivo Black through absolute HTTPS stylesheet URLs. These are independent of Lovable, unchanged.
- The video player uses an absolute YouTube embed URL, also independent of Lovable and unchanged.
- No image case mismatches were found. All six shared photo paths match the local filenames exactly.
- Each content page has its own title, description, Open Graph title/description, type, and Twitter card. No relative image URL is used as social-preview metadata.

## Domain check

The supplied `stressgod-sl-community.online` failed DNS resolution from the audit environment. The domain diagnostic reported no nameservers. No domains are connected to this project's Lovable hosting. The Vercel address serves this StressGods site, but an unresolved custom domain cannot be compared with it to establish a matching Vercel project/deployment. The photo failure is independently reproduced on the Vercel address, so it is not solely a custom-domain mapping issue. No DNS changes were made.

## Deployment handoff

## Verification completed

Browser checks confirmed all images load on the homepage (9 instances), About (4), Artists (3), and Media (8). Connect has no photo elements. All six `/images/*.jpg` responses returned HTTP 200 and were byte-identical to their local files. The favicon returned HTTP 200 with `image/x-icon`. The founding year is visible on both requested pages, the Media video opens the correct YouTube embed, and the four image-bearing pages have no horizontal overflow at 390px. No browser runtime errors were observed; the latest automatic build reported `build OK`. Git ignore checks did not exclude the restored images. Production verification of the changed commit remains pending redeployment.

## Required redeployment

After GitHub sync finishes, deploy the new commit on the Vercel project serving `stressgods-sl-community.vercel.app`. Ensure `public/images` is present in that commit. The root `/images/hero-crowd.jpg` URL should return an image, not HTML. Check the homepage, About, Artists and Media pages, and then check the custom domain once it resolves. Deployment settings and DNS ownership require access to the user's Vercel/registrar account; this audit does not change them.