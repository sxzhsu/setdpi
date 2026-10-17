/* Affiliate URLs for SetDPI. Keep every partner link in this file.
   An empty string means that module is not rendered.
   The markup below keeps the placeholder href="{{PRINTFUL_AFF_URL}}"
   until a non-empty PRINTFUL_AFF_URL replaces it at mount time.
   Do not put a real affiliate URL here until the account is approved. */
var SETDPI_AFFILIATES = {
  PRINTFUL_AFF_URL: ""
};

var SETDPI_AFFILIATE_DISCLOSURE = "We may earn a commission";

var SETDPI_PRINTFUL_MODULE_HTML = [
  '<aside class="printful-aff" aria-label="Printful">',
  "<p><strong>Print it: turn your 300 DPI image into posters/mugs</strong></p>",
  '<p><a href="{{PRINTFUL_AFF_URL}}" target="_blank" rel="sponsored noopener">Print it: turn your 300 DPI image into posters/mugs</a></p>',
  "<p>" + SETDPI_AFFILIATE_DISCLOSURE + "</p>",
  "</aside>"
].join("");

function setdpiMountPrintful(slot, show) {
  if (!slot) return;
  while (slot.firstChild) slot.removeChild(slot.firstChild);
  var url = "";
  if (typeof SETDPI_AFFILIATES !== "undefined" && SETDPI_AFFILIATES) {
    url = String(SETDPI_AFFILIATES.PRINTFUL_AFF_URL || "").trim();
  }
  if (!show || !url) return;
  var html = SETDPI_PRINTFUL_MODULE_HTML.split("{{PRINTFUL_AFF_URL}}").join(url);
  slot.insertAdjacentHTML("beforeend", html);
}
