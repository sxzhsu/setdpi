/* SetDPI bulk paywall — public Payment Link URLs only.
   NEVER put Stripe secret keys, webhook secrets, or .env values in this file.
   Live buy.stripe.com links from SetDPI Stripe account (user-supplied 2026-11-04).
   Duplicate Lifetime link buy.stripe.com/...q01 must stay out of this file; deactivate in Dashboard.
*/
var SETDPI_PAYWALL = {
  FREE_LIMIT: 5,
  DAY_PASS_USD: 3.99,
  LIFETIME_USD: 39.99,
  DAY_PASS_HOURS: 24,
  STORAGE_KEY: "setdpi_bulk_unlock_v1",
  /* Kept as comments-style fallbacks only; real URLs live in DAY_PASS_URL / LIFETIME_URL. */
  PLACEHOLDER_DAY_PASS_URL: "PLACEHOLDER_DAY_PASS_URL",
  PLACEHOLDER_LIFETIME_URL: "PLACEHOLDER_LIFETIME_URL",
  DAY_PASS_URL: "https://buy.stripe.com/cNi7sKfLD4vR8GY84bb3q00",
  LIFETIME_URL: "https://buy.stripe.com/5kQ3cueHz6DZf5macjb3q02"
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
