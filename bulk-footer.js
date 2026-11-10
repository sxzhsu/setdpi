/* Homepage + single-file tool pages → Bulk DPI Changer.
   Events: bulk_footer_shown / bulk_footer_click.
   Skip localhost and ?selftest=1 so the 证伪台账 is not self-inflated. */
(function () {
  "use strict";
  var COPY_VERSION = "v1_first5_free";

  function skip() {
    try {
      var host = location.hostname || "";
      if (host === "localhost" || host === "127.0.0.1") return true;
      return /(?:^|[?&])selftest=1(?:&|$)/.test(location.search || "");
    } catch (e) {
      return false;
    }
  }

  function track(name, params) {
    if (skip()) return;
    try {
      if (typeof gtag === "function") gtag("event", name, params || {});
    } catch (e) {
      /* analytics must never break the page */
    }
  }

  var style = document.createElement("style");
  style.textContent =
    "footer .bulk-cta{flex:1 1 100%;margin:0 0 8px;font-size:14px;line-height:1.5;color:inherit}";
  document.head.appendChild(style);

  var params = {
    site: "setdpi",
    location: "single_file_footer",
    copy_version: COPY_VERSION,
    page_path: location.pathname || "/",
  };
  track("bulk_footer_shown", params);

  document.addEventListener("click", function (e) {
    var t = e.target;
    if (t && t.nodeType === 3) t = t.parentElement;
    var a = t && t.closest ? t.closest("a[data-bulk-footer]") : null;
    if (!a) return;
    track("bulk_footer_click", params);
  });
})();
