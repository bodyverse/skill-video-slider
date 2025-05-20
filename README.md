# 📼 Skill Video Slider

A clean React-based UI for comparing video performance at different skill levels using a slider. Uses `pnpm`, custom styling, and GitHub Pages deployment.

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/bodyverse/skill-video-slider.git
cd skill-video-slider
```

### 2. Install dependencies using pnpm

If you don't have `pnpm` yet:

```bash
npm install -g pnpm
```

Then install project dependencies:

```bash
pnpm install
```

---

## 🧪 Run Locally

```bash
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view in the browser.

---

## 🚀 Deploy to GitHub Pages

1. Ensure the `homepage` field is set in `package.json`:

```json
"homepage": "https://bodyverse.github.io/skill-video-slider"
```

2. Add the following deploy scripts to `package.json`:

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "predeploy": "pnpm run build",
  "deploy": "gh-pages -d build"
}
```

3. Install the `gh-pages` dependency:

```bash
pnpm add -D gh-pages
```

4. Deploy:

```bash
pnpm run deploy
```

Then visit:

👉 https://bodyverse.github.io/skill-video-slider

---

## 📁 File Structure

```
public/
  └── videos/
        ├── Compare_000.mp4
        ├── Compare_005.mp4
        └── ...

src/
  ├── App.js
  ├── App.css
  └── index.js
```

---

## ✨ Features

- Responsive slider with tooltip and label overlays
- Dynamic video switching per 5% skill interval
- Toggle to “Overview” mode (e.g., Grid.mp4)
- Full pnpm-based workflow with GitHub Pages deployment

---

## 🧩 Built With

- React
- pnpm
- gh-pages
- Custom CSS with `--color-*` variables
