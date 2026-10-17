/**
 * Printful module stays unrendered while PRINTFUL_AFF_URL is empty.
 * Run: node scripts/test-affiliate.mjs
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const code = readFileSync(join(root, "affiliates.js"), "utf8");
const home = readFileSync(join(root, "index.html"), "utf8");
const preset = readFileSync(join(root, "convert-image-to-300-dpi/index.html"), "utf8");

let failed = 0;
function check(name, cond) {
  if (cond) console.log(`  ok    ${name}`);
  else {
    failed += 1;
    console.log(`  FAIL  ${name}`);
  }
}

function slot() {
  return {
    child: null,
    html: "",
    get firstChild() {
      return this.child;
    },
    removeChild() {
      this.child = null;
      this.html = "";
    },
    insertAdjacentHTML(_pos, html) {
      this.html = html;
      this.child = { nodeType: 1 };
    },
  };
}

const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

check("constant starts empty", sandbox.SETDPI_AFFILIATES.PRINTFUL_AFF_URL === "");
check("source keeps the placeholder href", code.includes('href="{{PRINTFUL_AFF_URL}}"'));
check("source sets rel=sponsored noopener", code.includes('rel="sponsored noopener"'));
check("source includes the disclosure", code.includes("We may earn a commission"));
check("source includes the print headline", code.includes("Print it: turn your 300 DPI image into posters/mugs"));

const hidden = slot();
sandbox.setdpiMountPrintful(hidden, true);
check("empty constant does not render", hidden.html === "" && hidden.firstChild === null);

sandbox.SETDPI_AFFILIATES.PRINTFUL_AFF_URL = "   ";
const blank = slot();
sandbox.setdpiMountPrintful(blank, true);
check("whitespace constant does not render", blank.html === "");

sandbox.SETDPI_AFFILIATES.PRINTFUL_AFF_URL = "https://example.com/printful";
const idle = slot();
sandbox.setdpiMountPrintful(idle, false);
check("no result does not render", idle.html === "");

const shown = slot();
sandbox.setdpiMountPrintful(shown, true);
check("non-empty url renders the headline", shown.html.includes("Print it: turn your 300 DPI image into posters/mugs"));
check("rendered href is the constant", shown.html.includes('href="https://example.com/printful"'));
check("rendered rel is sponsored noopener", shown.html.includes('rel="sponsored noopener"'));
check("rendered module has the disclosure", shown.html.includes("We may earn a commission"));
check("placeholder is replaced before insert", !shown.html.includes("{{PRINTFUL_AFF_URL}}"));

for (const [name, html] of [["home", home], ["300", preset]]) {
  check(`${name} loads affiliates.js`, html.includes('<script src="/affiliates.js"></script>'));
  check(`${name} has a result slot`, html.includes('id="printful-slot"'));
  check(`${name} footer discloses the commission`, html.includes("We may earn a commission"));
  check(`${name} does not hardcode a Printful url`, !/printful\.com/i.test(html));
}

if (failed) {
  console.log(`\n${failed} failed`);
  process.exit(1);
}
console.log("\naffiliate gate ok");
