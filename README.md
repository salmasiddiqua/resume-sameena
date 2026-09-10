# Doctor Portfolio Website

A clean, professional portfolio website for a doctor, inspired by real medical
practice websites. It includes:

- **Hero** with name, specialty, photo/monogram and key stats
- **About** — bio, credentials, languages, memberships
- **Education (Studies)** — timeline of degrees and training
- **Work Experience** — career timeline
- **Achievements & Awards**
- **Papers Published**
- **Current Research**
- **Goals & Vision**
- **Patient Testimonials**
- **Ask a Question** form (name, email, phone, topic, issue) that emails
  submissions to the doctor

Built with plain **HTML / CSS / JavaScript** — no frameworks, no build step.
Host it anywhere (GitHub Pages, Netlify, Vercel, any static host).

## Project structure

```
├── index.html    # Page structure (section skeletons)
├── style.css     # All styling (design tokens at the top)
├── data.js       # ✏️ ALL CONTENT — edit this file
├── main.js       # Renders content, navigation, form logic
└── README.md     # This file
```

## 1. Add the doctor's real content

Open **`data.js`** and replace the placeholder information (name, bio, education,
experience, achievements, publications, research, goals, testimonials, contact
details). Every section on the page updates automatically — no other file needs
editing. A comment at the top of the file marks it as the single place to edit.

**Photo:** by default the site shows an elegant initials monogram. To use a real
photo, put an image in the project (e.g. `assets/dr-mitchell.jpg`) and set:

```js
photo: "assets/dr-mitchell.jpg",
```

## 2. Make the "Ask a Question" form deliver email (free)

The form is built and validates input; to actually receive submissions by email,
use [Formspree](https://formspree.io) — a free form-backend service designed for
static sites (no server needed):

1. Create a free account at **https://formspree.io** (50 free submissions/month).
2. Click **New Form** and give it a name (e.g. "Website Questions").
3. Copy the **form ID** from the form's endpoint URL — it looks like `mzbqkxyz`.
4. In **`data.js`**, under `form:`, paste it:

   ```js
   form: {
     formspreeFormId: "mzbqkxyz",
     ...
   }
   ```

5. In your Formspree dashboard, set the **email address** you want submissions
   sent to (the doctor's inbox).

Done — when someone fills the form, you'll get an email with their name, email,
phone, topic and message. The site shows a friendly success message to the
visitor and never exposes your credentials.

> If the form ID is left empty, the form still works and shows a helpful notice
> telling you how to connect it — useful while you're still setting up.

## 3. Preview locally

Open `index.html` directly in a browser, or run a local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 4. Deploy

Any static hosting works. A few options:

- **GitHub Pages** — push this folder to a repo, enable Pages (branch root).
- **Netlify / Vercel** — drag-and-drop the folder, or connect the repo.
- **Any web host** — upload the files.

No build step, no environment variables, no backend.

## Customizing the design

Colors and fonts are defined as CSS variables at the top of **`style.css`**
(the `:root` block). Change `--color-primary` to match the practice's branding
and the whole site updates.

## Disclaimer

The medical disclaimer in the footer is standard practice for doctor websites
and is included by default. Review it with the doctor before going live.