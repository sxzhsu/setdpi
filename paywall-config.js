/* SetDPI bulk paywall — public Payment Link URLs only.
   NEVER put Stripe secret keys, webhook secrets, or .env values in this file.
   Before go-live: replace PLACEHOLDER_* with real https://buy.stripe.com/... links
   from the SetDPI Stripe account (user-supplied; see 00_Workspace/步骤_setdpi_Stripe建户_20261102.md).
*/
var SETDPI_PAYWALL = {
  FREE_LIMIT: 5,
  DAY_PASS_USD: 3.99,
  LIFETIME_USD: 39.99,
  DAY_PASS_HOURS: 24,
  STORAGE_KEY: "setdpi_bulk_unlock_v1",
  /* Obvious placeholders until the user pastes live Payment Link URLs. */
  PLACEHOLDER_DAY_PASS_URL: "PLACEHOLDER_DAY_PASS_URL",
  PLACEHOLDER_LIFETIME_URL: "PLACEHOLDER_LIFETIME_URL",
  /* Prefer these once filled; empty → fall back to PLACEHOLDER_* above. */
  DAY_PASS_URL: "",
  LIFETIME_URL: ""
};

function setdpiPaywallUrl(tier) {
  var cfg = SETDPI_PAYWALL;
  var raw =
    tier === "lifetime"
      ? String(cfg.LIFETIME_URL || cfg.PLACEHOLDER_LIFETIME_URL || "").trim()
      : String(cfg.DAY_PASS_URL || cfg.PLACEHOLDER_DAY_PASS_URL || "").trim();
  return raw;
}

function setdpiPaywallUrlReady(url) {
  return /^https?:\/\//i.test(url || "");
}
