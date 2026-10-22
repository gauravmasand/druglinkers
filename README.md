# DrugLinkers website

A single-page static website for DrugLinkers (a working name), a scientific software
company made in India. It presents the AI drug discovery platform in development
(toxicity prediction first), PyChem-Pro, PyChem-Dock and the licensed molecular
descriptor software.

Live site: https://gauravmasand.github.io/druglinkers/

Plain HTML, CSS and a few lines of JavaScript: no build step, no dependencies and no
third-party requests, so it can be hosted free on GitHub Pages.

## Structure

```
index.html              All page content
assets/css/styles.css   Styles
assets/js/main.js       Mobile menu and current-section highlighting (optional)
assets/fonts/           Source Serif 4 and IBM Plex Sans, self-hosted (SIL OFL 1.1)
assets/img/             Product screenshots from the PyChem-Pro repository, and the favicon
.nojekyll               Tells GitHub Pages to serve the files as they are
```

The sections, in page order, are `#home`, `#impact`, `#products`, `#technology`,
`#contact` and `#vision-mission`. The navigation bar links to Home, Products,
Technology and Contact Us. Product entries also have anchors (`#ai-platform`,
`#pychem-pro`, `#pychem-dock`, `#descriptors`).

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. You can also open `index.html` directly.

## Deployment

GitHub Pages publishes the site from the root of the `main` branch (**Settings →
Pages**). Every push to `main` redeploys it, usually within a minute or two.

If the address changes (a custom domain or a renamed repository), update the
`canonical`, `og:url` and `og:image` tags at the top of `index.html`.

## Editing

All content is in `index.html`. Keep the text short: one line per item.

- **Company name:** find and replace `DrugLinkers`.
- **Contact email:** vijaymasand@gmail.com, in the Contact section and the footer.
  Find and replace it to change it.
- **AI platform:** it is marked "In development" in Products and Technology, and the
  hero says "We are building". Change all three when it is released, and keep the
  testing caveat.
- **Availability:** public tools can link to downloads and repositories. Licensed
  technologies (`#descriptors`) and research work (`#ai-platform`) must only link to
  publications or the contact section.
- **Figures and statistics:** only publish numbers that have a source, and say what
  they measure.

### Where the figures come from

- **129 publications:** the PyDescriptor / PyDescriptorC* citation list at
  https://sites.google.com/view/pydescriptorcstar/citations. It has 134 entries with
  five duplicate pairs (8/9, 72/73, 81/83, 100/101 and 119/122).
- **78 of those:** publications with none of the PyDescriptorC* developers among their
  authors (Masand, Al-Hussain, Jawarkar, Rastija and Zaki).
- **About 700 users:** the team's estimate for the free version of PyChem-Pro.
- **Descriptor counts:** the PyDescriptorC* preprint (112,194, of which 15,150 are
  chirality-aware) and the PyDes-GPU product page (more than 123,000).

Update these when the sources change.
