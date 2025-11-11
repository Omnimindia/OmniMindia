# Logo PNG Files

For production, convert the SVG logos to PNG format:

```bash
# Using ImageMagick or similar tool:
convert -background none logo.svg -resize 512x512 logo.png
convert -background none logo-dark.svg -resize 512x512 logo-dark.png
```

Alternatively, use online converters:
- https://cloudconvert.com/svg-to-png
- https://svgtopng.com/

Place the generated PNGs in this directory.
