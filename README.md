# SetDPI — Free Image DPI Changer

Change image DPI (72 → 300 and any other value) without re-encoding pixels. Runs entirely in your browser — nothing is uploaded.

**Live site:** https://setdpi.com

## Tools

- [Image DPI Changer](https://setdpi.com/) — Change image DPI to 300 online, free
- [DPI Checker](https://setdpi.com/dpi-checker/) — Check image DPI online, free and instant
- [Convert Image to 300 DPI](https://setdpi.com/convert-image-to-300-dpi/) — Free, in-browser, no upload
- [Increase Image DPI](https://setdpi.com/increase-image-dpi/) — Losslessly, in your browser
- [DPI vs PPI](https://setdpi.com/dpi-vs-ppi/) — What's the difference, and when it matters
- [Change Image DPI to 150](https://setdpi.com/change-dpi-to-150/) — Free, in-browser, no upload
- [Change Image DPI to 200](https://setdpi.com/change-dpi-to-200/) — Free, in-browser, no upload
- [72 DPI to 300 DPI](https://setdpi.com/72-dpi-to-300-dpi/) — Convert screen images to print-ready
- [Convert Image to 600 DPI](https://setdpi.com/convert-image-to-600-dpi/) — Free, lossless, in-browser
- [Convert Image to 1200 DPI](https://setdpi.com/convert-image-to-1200-dpi/) — Free, lossless, in-browser
- [DPI Calculator](https://setdpi.com/dpi-calculator/) — Pixels, inches, and print size

## How it works

SetDPI rewrites only the density metadata: JFIF density, EXIF `XResolution`/`YResolution`, and PNG `pHYs`. Pixel data is never re-encoded, so quality stays lossless. JPEG and PNG are supported. There is no server and nothing is uploaded; once loaded, the pages work offline.

## Tech

Single-file HTML per page, vanilla JavaScript, no build step, no dependencies. Deployed via GitHub Pages.

## License

MIT
