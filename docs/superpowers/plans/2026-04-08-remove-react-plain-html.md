# Remove React — Plain HTML + CSS Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the React portfolio site to plain HTML + CSS with zero JavaScript, keeping Vite as the build tool.

**Architecture:** Single `index.html` with all content inlined, one consolidated `src/style.css`, all images under `src/images/`. Vite handles dev server and production builds. No JS shipped to users.

**Tech Stack:** HTML, CSS, Vite

---

### Task 1: Restructure images into `src/images/`

Move all images from their component-specific directories into a flat `src/images/` directory.

**Files:**
- Create: `src/images/` (directory)
- Move: all `.webp` from `src/Components/Portfolio/images/` and `src/Components/Services/images/`
- Move: `src/Components/Header/images/avatar.svg`

- [ ] **Step 1: Create directory and move images**

```bash
mkdir -p src/images
cp src/Components/Portfolio/images/*.webp src/images/
cp src/Components/Services/images/*.webp src/images/
cp src/Components/Header/images/avatar.svg src/images/
```

- [ ] **Step 2: Verify all images are present**

```bash
ls src/images/ | wc -l
```

Expected: All image files present (avatar.svg + all .webp files from both directories).

- [ ] **Step 3: Commit**

```bash
git add src/images/
git commit -m "chore: copy images to src/images/"
```

---

### Task 2: Consolidate CSS into `src/style.css`

Merge all component CSS files into one file. Order: App.css (tokens + base), Header, Toolbar, IconCard, PortfolioItem, Contact, Footer.

**Files:**
- Create: `src/style.css`

- [ ] **Step 1: Create consolidated CSS file**

Concatenate in this order, with section comments between each:
1. `src/Components/App/App.css` (contains design tokens, reset, typography, buttons, grids)
2. `src/Components/Header/Header.css`
3. `src/Components/Toolbar/Toolbar.css`
4. `src/Components/IconCard/IconCard.css`
5. `src/Components/Portfolio/PortfolioItem.css`
6. `src/Components/Contact/Contact.css`
7. `src/Components/Footer/Footer.css`

Remove the `toolbar--scrolled` class (scroll shadow effect is being dropped).

- [ ] **Step 2: Verify the file looks correct**

Visually inspect `src/style.css` — all design tokens, all component styles present, no duplicate selectors.

- [ ] **Step 3: Commit**

```bash
git add src/style.css
git commit -m "chore: consolidate all CSS into src/style.css"
```

---

### Task 3: Build the HTML

Replace `index.html` with the complete site, inlining all content from the React components and data files. Reference images via `src/images/` paths.

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Write the complete `index.html`**

The HTML must include:
- Same `<head>` content (meta tags, fonts, manifest, title)
- `<link rel="stylesheet" href="/src/style.css">` instead of the React script
- Remove `<script type="module" src="/src/main.jsx"></script>`
- Remove `<noscript>` tag and `<div id="root">`
- Skip link (`<a class="skip-link" href="#main">`)
- Header section with the SVG avatar inlined directly (the full SVG markup from `avatar.svg`)
- Toolbar nav (sticky, no scroll-shadow JS — just the static `toolbar` class)
- Services section: 4 icon cards from `servicesData.js`, each as an `<div class="icon-card icon-card--services">` with `<img>` and `<p>`
- Tools section: 18 icon cards from `toolsData.js`, each as `<div class="icon-card icon-card--tools">` with `<img>` and `<p>`
- Portfolio section: 9 portfolio items from `portfolioData.js`, each as an `<article class="portfolioArticle">` containing an `<a class="portfolioItem">` with image, client, title, description, and tool logos
- Contact section
- Footer

All image `src` attributes use paths like `src/images/Privacy.webp` (Vite resolves these from the project root).

Reference the existing component JSX and data files for exact class names, text content, and structure. Every class name must match the CSS exactly.

- [ ] **Step 2: Verify in browser**

```bash
npx vite --open
```

Check: all sections render, images load, styles match, links work, scroll anchors work.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: replace React with plain HTML"
```

---

### Task 4: Simplify Vite config and package.json

Remove React dependencies and simplify configuration.

**Files:**
- Modify: `vite.config.js`
- Modify: `package.json`

- [ ] **Step 1: Simplify `vite.config.js`**

```js
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
});
```

- [ ] **Step 2: Simplify `package.json`**

Remove all React-related dependencies and test infrastructure. Keep only:

```json
{
  "name": "RedmondeLearning",
  "homepage": ".",
  "version": "0.3.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "start": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "7.3.2"
  }
}
```

- [ ] **Step 3: Reinstall dependencies**

```bash
rm -rf node_modules package-lock.json
npm install
```

- [ ] **Step 4: Verify build works**

```bash
npm run build
```

Expected: Successful build with output in `dist/`.

- [ ] **Step 5: Commit**

```bash
git add vite.config.js package.json package-lock.json
git commit -m "chore: remove React deps, simplify vite config"
```

---

### Task 5: Remove old React source files

Delete all React components, data files, test setup, main.jsx, and eslint config.

**Files:**
- Delete: `src/Components/` (entire directory)
- Delete: `src/data/` (entire directory)
- Delete: `src/main.jsx`
- Delete: `src/test/`
- Delete: `eslint.config.js`

- [ ] **Step 1: Remove old files**

```bash
rm -rf src/Components src/data src/main.jsx src/test eslint.config.js
```

- [ ] **Step 2: Verify project structure**

```bash
find . -not -path './node_modules/*' -not -path './.git/*' -not -path './dist/*' -type f | sort
```

Expected files:
```
./index.html
./package.json
./package-lock.json
./public/favicon.ico
./public/manifest.json
./public/robots.txt
./src/images/(...all images...)
./src/style.css
./vite.config.js
```

- [ ] **Step 3: Final verification**

```bash
npm run dev
```

Open in browser. Verify: all sections render correctly, all images load, all links work, navigation anchors scroll correctly, responsive layout works.

```bash
npm run build
npx vite preview
```

Verify the production build also works correctly.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: remove React source files and eslint config"
```
