/*
 * Chart loader.
 * Each chart's spec lives in its own readable JSON file under /specs.
 * The shared theme below keeps fonts and colours consistent across all charts,
 * so individual specs only describe their data, marks and encodings.
 */

// Add one line here each time a new chart is built.
const CHARTS = {
  c1: "specs/c1_waffle.vl.json",
  c2: "specs/c2_gantt.vl.json",
  c3: "specs/c3_connected_scatter.vl.json",
  c4: "specs/c4_choropleth.vl.json",
  c5: "specs/c5_symbol_map.vl.json",
  c6: "specs/c6_treemap.vg.json",
};

const THEME = {
  background: null,                 // let the page colour show through
  font: "'Public Sans', Arial, sans-serif",
  view: { stroke: null },           // no border box around plots (data-ink)
  title: {
    font: "'Source Serif 4', Georgia, serif",
    fontSize: 20,
    fontWeight: 600,
    color: "#1D2433",
    anchor: "start",
    subtitleFont: "'Public Sans', Arial, sans-serif",
    subtitleFontSize: 13,
    subtitleColor: "#5A6475",
    offset: 12,
  },
  axis: {
    labelFont: "Public Sans",
    labelFontSize: 12,
    labelColor: "#5A6475",
    titleFont: "Public Sans",
    titleFontSize: 12,
    titleFontWeight: 500,
    titleColor: "#5A6475",
    domainColor: "#9AA3AE",
    tickColor: "#9AA3AE",
    gridColor: "#E4E8EB",
  },
  legend: {
    labelFont: "Public Sans",
    labelFontSize: 12,
    labelColor: "#1D2433",
    titleFont: "Public Sans",
    titleFontSize: 12,
    titleColor: "#5A6475",
    symbolType: "square",
  },
  text: { font: "Public Sans", fontSize: 12, color: "#1D2433" },
  range: {
    // Sequential blues for Australian data; marigold reserved for Malaysia.
    ramp: ["#E3EEF3", "#A9CBD8", "#5B9AB3", "#1F6F8B", "#12384A"],
  },
};

const EMBED_OPTIONS = {
  actions: false,     // hide the "..." menu; the page is for reading, not exporting
  renderer: "svg",    // crisp at any zoom, and text stays selectable
  config: THEME,
};

// Wait until the web fonts have loaded, so Vega measures text with the real
// typeface. Otherwise titles can be sized for the fallback font and get clipped.
document.fonts.ready.then(() => {
  for (const [id, spec] of Object.entries(CHARTS)) {
    vegaEmbed(`#${id}`, spec, EMBED_OPTIONS)
      .then(() => document.getElementById(id).closest(".chart")?.classList.remove("pending"))
      .catch((err) => console.error(`Chart ${id} failed to load`, err));
  }
});
