# Getting in

How Australia decides who gets a university place, and what that means for students from Malaysia.

FIT3179 Data Visualisation 2, Monash University. Author: Lee Jun Wen, 25 October 2026.

Live page: https://waynelee921.github.io/dv2_admissions/

## Structure

```
index.html            the single scrolling page
css/style.css         design tokens, type scale, grid layout
js/main.js            chart registry and shared Vega-Lite / Vega theme
specs/                one spec per chart: c1 to c13 (.vl.json = Vega-Lite, .vg.json = Vega)
data/                 CSV and TopoJSON files loaded by the specs
data/raw/             original source files, unaltered
DV2_Sketch.pdf        scanned hand-drawn sketch (PDF)
```

## Run locally

Specs are loaded with `fetch`, so serve the folder over HTTP rather than opening the file directly:

```
python -m http.server 8000
```

Then open http://localhost:8000.

## Data sources

- Department of Education (2026). Undergraduate applications and offers 2025. CC BY 4.0.
- Department of Education (2026). International student data, December 2025 year-to-date.
- Australian Bureau of Statistics (2026). Labour Force, Australia, Table 1. CC BY 4.0.
- Universities Admissions Centre (2026). Undergraduate applications, offers and key dates.
- Natural Earth. Admin 0 and Admin 1 boundaries, 1:50m. Public domain.

AI use: Claude (Anthropic) assisted with code, layout and copy editing.