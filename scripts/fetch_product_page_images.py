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

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
    "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8"
}

for r in rings:
    ring_id = r["id"]
    kr_url = r.get("krUrl", "")
    jp_url = r.get("jpUrl", "")
    
    img_found = None
    
    # Try fetching HTML from krUrl to find og:image or schema image
    if kr_url:
        try:
            req = urllib.request.Request(urllib.parse.quote(kr_url, safe=':/?='), headers=headers)
            with urllib.request.urlopen(req, timeout=6) as res:
                html = res.read().decode('utf-8', errors='ignore')
                
                # Check og:image
                og_match = re.search(r'<meta\s+(?:property|name)=["\']og:image["\']\s+content=["\']([^"\']+)["\']', html, re.I)
                if not og_match:
                    og_match = re.search(r'<meta\s+content=["\']([^"\']+)["\']\s+(?:property|name)=["\']og:image["\']', html, re.I)
                
                if og_match:
                    img_found = og_match.group(1)
                    if img_found.startswith('//'):
                        img_found = 'https:' + img_found
        except Exception as e:
            print(f"[{ring_id}] HTML fetch error: {e}")
            
    if img_found:
        ext = ".png" if ".png" in img_found else ".jpg"
        out_file = os.path.join(IMG_DIR, f"{ring_id}{ext}")
        cmd = [
            "curl", "-s", "-f", "-L",
            "-A", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
            "-e", "https://www.google.com/",
            "--connect-timeout", "6",
            "-o", out_file,
            img_found
        ]
        res = subprocess.run(cmd)
        if res.returncode == 0 and os.path.exists(out_file) and os.path.getsize(out_file) > 1000:
            print(f"SUCCESS DOWNLOAD: {ring_id} -> {out_file} ({os.path.getsize(out_file)} bytes)")
            r["imageUrl"] = f"./images/rings/{ring_id}{ext}"
        else:
            print(f"DOWNLOAD FAILED for {ring_id}, fallback to SVG/PNG")
    else:
        print(f"NO OG:IMAGE for {ring_id}")

with open(DATA_PATH, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

with open(APP_PATH, "r", encoding="utf-8") as f:
    content = f.read()

presets_json = json.dumps(rings, ensure_ascii=False, indent=2)
pattern = r'let PRESETS = \[[\s\S]*?\];'
replacement = f'let PRESETS = {presets_json};'

new_content = re.sub(pattern, replacement, content, count=1)

with open(APP_PATH, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Finished fetching product page images!")
