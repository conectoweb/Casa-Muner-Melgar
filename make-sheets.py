#!/usr/bin/env python3
"""Genera hojas de contacto 3x3 con etiquetas para revisar fotos."""
import sys
from pathlib import Path
from PIL import Image, ImageDraw

CELL_W, CELL_H, LABEL_H = 340, 280, 24
COLS = 3
PER_SHEET = 9

def make_sheets(files, out_prefix):
    for sheet_idx in range(0, len(files), PER_SHEET):
        batch = files[sheet_idx:sheet_idx + PER_SHEET]
        rows = (len(batch) + COLS - 1) // COLS
        sheet = Image.new("RGB", (COLS * CELL_W, rows * (CELL_H + LABEL_H)), "white")
        draw = ImageDraw.Draw(sheet)
        for i, f in enumerate(batch):
            col, row = i % COLS, i // COLS
            x, y = col * CELL_W, row * (CELL_H + LABEL_H)
            try:
                im = Image.open(f).convert("RGB")
                im.thumbnail((CELL_W - 8, CELL_H - 8))
                sheet.paste(im, (x + (CELL_W - im.width) // 2, y + (CELL_H - im.height) // 2))
            except Exception as e:
                draw.text((x + 8, y + 8), f"ERROR: {e}", fill="red")
            draw.rectangle([x, y + CELL_H, x + CELL_W, y + CELL_H + LABEL_H], fill="#222")
            draw.text((x + 6, y + CELL_H + 5), Path(f).name[:48], fill="white")
        out = f"{out_prefix}-{sheet_idx // PER_SHEET + 1}.jpg"
        sheet.save(out, quality=82)
        print(out)

if __name__ == "__main__":
    pattern, out_prefix = sys.argv[1], sys.argv[2]
    files = sorted(Path(".").glob(pattern))
    print(f"{len(files)} archivos")
    make_sheets([str(f) for f in files], out_prefix)
