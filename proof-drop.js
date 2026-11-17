/* One-shot print-proof motion: crop marks settle and a registration
   cross aligns after the first file is on the sheet. Skip reduced-motion. */
(function () {
  "use strict";
  function reduced() {
    try {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (e) {
      return false;
    }
  }
  function register() {
    var drop = document.getElementById("drop");
    if (!drop || drop.classList.contains("is-registered")) return;
    drop.classList.add("is-registered");
    if (reduced()) drop.style.setProperty("--inset", "6px");
  }
  function bind() {
    var rows = document.getElementById("rows");
    if (!rows) return;
    var mo = new MutationObserver(function () {
      if (rows.children.length) register();
    });
    mo.observe(rows, { childList: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bind);
  else bind();
})();
