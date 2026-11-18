# Personal website of Issam Abdo Ahmad

A plain HTML and CSS site that works on laptops and phones. It needs no build step, so GitHub Pages serves it as is.

## Publish it (about 10 minutes, no Git needed)

1. Sign in to github.com and create a new **public** repository named exactly `issamabdoahmad.github.io` (replace issamabdoahmad with your GitHub username).
2. In the new repository, click **Add file**, then **Upload files**. Drag in everything from this folder (keep the `assets` folder structure) and click **Commit changes**.
3. Go to **Settings**, then **Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**, and save.
4. After a minute or two, the site is live at `https://issamabdoahmad.github.io`.

## Connect issamabdoahmad.com (after you buy it)

1. In **Settings**, then **Pages**, type `issamabdoahmad.com` under "Custom domain" and save.
2. At your registrar, add these DNS records:
   * Four **A** records for `@` pointing to 185.199.108.153, 185.199.109.153, 185.199.110.153 and 185.199.111.153
   * One **CNAME** record for `www` pointing to `issamabdoahmad.github.io`
3. Once the domain shows as verified, tick **Enforce HTTPS**.

## What to edit

Search every file for `EDIT` and replace each placeholder with your real content. Edit files directly on github.com with the pencil icon; each save republishes the site.

| File | What to change |
|---|---|
| `index.html` | Bio sentence if you want different wording |
| `research.html` | Publications (title, authors, journal, DOI), Google Scholar link, current projects |
| `cv.html` | Years, past roles |
| `tutoring.html` | Subjects, format, levels, rates, booking link |
| `hiking.html` | Intro, trail names, details, group hike booking link |
| All pages (footer) | Email, LinkedIn and ORCID links. The footer is repeated in every page, so change it in each file |
| `assets/img/portrait.jpg` | Replace with your photo (square, about 600 by 600 pixels) |
| `assets/docs/cv.pdf` | Replace with your real CV, keeping the file name `cv.pdf` |

## Adding hiking photos

1. Resize each photo to about 1600 pixels wide and compress it (for example with squoosh.app) so it is under 400 KB.
2. Upload it to `assets/img/`, for example `assets/img/mont-tremblant.jpg`.
3. In `hiking.html`, replace a placeholder line
   `<div class="ph" role="img" aria-label="Photo placeholder"></div>`
   with
   `<img src="assets/img/mont-tremblant.jpg" alt="View from the summit of Mont Tremblant" loading="lazy">`

## Bookings and payments

Keep bookings and payments on an outside service (such as Calendly or Google Calendar appointment schedules, with Stripe for payment) and paste its link into the "Book a session" and "Join a group hike" buttons. GitHub Pages does not allow sites built mainly to process commercial transactions, so the site should present your services and send people elsewhere to book and pay.
