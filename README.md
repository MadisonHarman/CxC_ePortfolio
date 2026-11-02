# Madison Harman — Public Portfolio (LSU Distinguished Communicator)

Static site: plain HTML/CSS/JS, no build step. Hosted on GitHub Pages.

## Structure

```
index.html        Home: hero, elevator pitch video, three threads, beyond-the-classroom, CTA
projects.html     10 project entries (current work first) with evidence tags + Credits section
experience.html   Timeline + leadership story + mentorship
about.html        Education, skills, honors, evidence index for reviewers, contact
styles.css        All styling (edit :root colors to re-theme)
script.js         Mobile nav + current-page highlight
assets/           Resume PDF, images, pitch video
ELEVATOR_PITCH.md Script + variants for the spoken sample
PLANNING.md       Answers to the CxC worksheets (for your faculty advisor)
```

## Deploy to GitHub Pages (5 minutes)

1. Create a new **public** repo on GitHub, e.g. `madison-portfolio`.
   - If you name it `<your-username>.github.io`, the site lives at the root URL. Otherwise it'll be at `https://<your-username>.github.io/madison-portfolio/`. Either works — all links in the site are relative.
2. Upload every file in this folder (drag-and-drop in the browser works, or `git init && git add . && git commit -m "Portfolio" && git push`).
3. Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main` / folder `/ (root)` → Save.
4. Wait ~1 minute; the URL appears at the top of the Pages settings.

`.nojekyll` is included so GitHub serves files as-is.

## Before you submit the draft (Nov 1 deadline for spring grads was the draft; final + Dear Reviewer letter due Feb 1)

Search the HTML for `TODO` and the word `placeholder` / `Add` — each marks something only you can fill:

- [ ] `assets/madison-elevator-pitch.mp4` (or YouTube iframe) — delete the `.video-placeholder` div once the video is in
- [ ] `assets/pitch-poster.jpg` — a frame from the video (optional)
- [ ] Optional: add one specific real moment from the housing-liaison role to `experience.html#leadership` (an event you hosted, a problem you helped solve)
- [ ] Confirm the people in the Chevron photos are OK being on a public site.
- [ ] Written-evidence PDFs: consider linking an excerpt of a POWERCAST phase note and your labeling-conventions file.

## Updating the resume

Replace `assets/madison-harman-resume.pdf` with the new file, same name. Every "Download résumé" link points there.

## Re-theming

All colors are CSS variables at the top of `styles.css`. Fonts are Fraunces (headings) and Inter (body) from Google Fonts.
