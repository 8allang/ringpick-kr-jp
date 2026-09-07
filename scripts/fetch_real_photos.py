import json
import os
import re
import urllib.request
import urllib.parse
import subprocess

DATA_PATH = os.path.join(os.path.dirname(__file__), "..", "data", "rings.json")
APP_PATH = os.path.join(os.path.dirname(__file__), "..", "app.js")
IMG_DIR = os.path.join(os.path.dirname(__file__), "..", "images", "rings")

with open(DATA_PATH, "r", encoding="utf-8") as f:
    data = json.load(f)

rings = data.get("rings", [])

# Brand direct CDN patterns and URL extractors
# For Cartier: https://www.cartier.com/dw/image/v2/BFDV_PRD/on/demandware.static/-/Sites-cartier-master/default/dw.../CRB4085000_0_cartier_rings.png
# For Tiffany: https://media.tiffany.com/is/image/tiffany/74791352_...
# For Chanel: https://www.chanel.com/images/...
# For Bvlgari: https://www.bulgari.com/dw/image/v2/BCSG_PRD/on/demandware.static/-/Sites-bulgari-master/default/...
# For Tasaki: https://www.tasaki.co.kr/media/catalog/product/...
# For Boucheron: https://www.boucheron.com/media/catalog/product/...
# For Chaumet: https://www.chaumet.com/media/catalog/product/...

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
    "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8"
}

def extract_model_code(url):
    # Extract SKU or model code from URL if present
    match = re.search(r'(CR[A-Z0-9]{8}|AN[0-9]{6}|JRG[0-9]{5}|JAL[0-9]{5}|08[0-9]{4}|09[0-9]{4}|RK-[A-Z0-9-]+|RD-[A-Z0-9-]+|[0-9]{8}|J[0-9]{5})', url)
    if match:
        return match.group(1)
    return None

for r in rings:
    ring_id = r["id"]
    kr_url = r.get("krUrl", "")
    jp_url = r.get("jpUrl", "")
    sku = extract_model_code(kr_url) or extract_model_code(jp_url)
    print(f"Processing {ring_id} (SKU: {sku})...")

print("Done scanning SKUs.")
