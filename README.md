# Getting in

How Australia decides who gets a university place, and what that means for students from Malaysia.

FIT3179 Data Visualisation 2, Monash University. Author: [YOUR NAME], [DATE].

## Structure

```
index.html            the single scrolling page
css/style.css         design tokens, type scale, grid
js/main.js            chart registry and shared Vega-Lite theme
specs/                one Vega-Lite / Vega spec per chart (c1_... to c14_...)
data/                 cleaned, size-reduced data files used by the specs
sketch/sketch.pdf     scanned hand-drawn sketch
```

## Run locally

Specs are loaded with `fetch`, so the page must be served over HTTP, not opened as a file:

```
python -m http.server 8000
```

Then open http://localhost:8000.

## Data sources

- Department of Education (2026). Undergraduate applications and offers 2025. CC BY 4.0.
- Further sources are listed in the page footer.
