[![Netlify Status](https://api.netlify.com/api/v1/badges/991e932e-4216-4c8b-89f6-5949fb1426c5/deploy-status)](https://app.netlify.com/projects/norph/deploys)

# nor.ph

Portfolio site for Noriyuki Shimizu (Craft, Graphic, Typeface, Front-end Engineer)

## Tech Stack

- [Eleventy (11ty)](https://www.11ty.dev/) - Static site generator
- [Pug](https://pugjs.org/) - Template engine
- [Sass](https://sass-lang.com/) - CSS preprocessor
- [Puppeteer](https://pptr.dev/) - OG image generation

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

This starts:

- 11ty dev server (file watching + auto reload)
- Sass compilation (style.css)
- OG Sass compilation (og.css)

## Build

```bash
npm run build
```

Static files are generated in the `_site` directory.

## OG Image Generation

```bash
npm run og
```

Uses Puppeteer to generate OG images for each work.

## Preview

```bash
npm run serve
```

Serves the built `_site` directory on a local server.
