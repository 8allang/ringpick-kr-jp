import json
import os
import re
import urllib.request
import urllib.parse

DATA_PATH = os.path.join(os.path.dirname(__file__), "..", "data", "rings.json")
APP_PATH = os.path.join(os.path.dirname(__file__), "..", "app.js")
INDEX_PATH = os.path.join(os.path.dirname(__file__), "..", "index.html")
IMG_DIR = os.path.join(os.path.dirname(__file__), "..", "images", "rings")

os.makedirs(IMG_DIR, exist_ok=True)

# User's curated list (TRUE items only, FALSE/underlined excluded)
CURATED_RINGS = [
    # Cartier
    {
        "id": "cartier-love-sm",
        "brand": "Cartier",
        "brandKr": "까르띠에",
        "name": "러브 웨딩 밴드 (SM 3.6mm)",
        "krPrice": 2190000,
        "jpPrice": 235400,
        "guestCardAllowed": False,
        "tag": "게스트카드 5% 불가",
        "krUrl": "https://www.cartier.com/ko-kr/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EB%A7%81/love/love-%EB%A7%81-%EC%8A%A4%EB%AA%B0%28small%29-%EB%AA%A8%EB%8D%B8-CRB4085000.html",
        "jpUrl": "https://www.cartier.com/ja-jp/jewellery/rings/love/love-%E3%83%AA%E3%83%B3%E3%82%AF-%E3%82%B9%E3%83%A2%E3%83%BC%E3%83%AB%E3%83%A2%E3%83%86-%E3%83%AB-CRB4085000"
    },
    {
        "id": "cartier-love-1d",
        "brand": "Cartier",
        "brandKr": "까르띠에",
        "name": "러브 웨딩 밴드 (1다이아 4mm 0.02ct)",
        "krPrice": 4060000,
        "jpPrice": 440000,
        "guestCardAllowed": False,
        "tag": "게스트카드 5% 불가",
        "krUrl": "https://www.cartier.com/ko-kr/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EB%A7%81/love/love-%EB%A7%81-%EC%8A%A4%EB%AA%B0%28small%29-%EB%AA%A8%EB%8D%B8-%EB%8B%A4%EC%9D%B4%EC%95%84%EB%AA%AC%EB%93%9C-1%EA%B0%9C-CRB4056100.html",
        "jpUrl": "https://www.cartier.com/ja-jp/jewellery/rings/love/love-%E3%83%AA%E3%83%B3%E3%82%AF-%E3%82%B9%E3%83%A2%E3%83%BC%E3%83%AB%E3%83%A2%E3%83%86-%E3%83%AB-%E3%82%BF-%E3%82%A4%E3%83%A4%E3%83%A2%E3%83%B3%E3%83%88-1%E7%9F%B3-CRB4056100"
    },
    {
        "id": "cartier-c-de-cartier-1d",
        "brand": "Cartier",
        "brandKr": "까르띠에",
        "name": "C 드 까르띠에 (1다이아 3mm 0.03ct)",
        "krPrice": 2650000,
        "jpPrice": 286000,
        "guestCardAllowed": False,
        "tag": "게스트카드 5% 불가",
        "krUrl": "https://www.cartier.com/ko-kr/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EC%9B%A8%EB%94%A9-%EB%B0%B4%EB%93%9C/c-%EB%93%9C-%EA%B9%8C%EB%A5%B4%EB%9D%A0%EC%97%90/c-%EB%93%9C-%EA%B9%8C%EB%A5%B4%EB%9D%A0%EC%97%90-%EC%9B%A8%EB%94%A9-%EB%A7%81-%ED%8F%AD-3mm-%EB%8B%A4%EC%9D%B4%EC%95%84%EB%AA%AC%EB%93%9C-1%EA%B0%9C-CRB4086400.html",
        "jpUrl": "https://www.cartier.com/ja-jp/jewellery/wedding-bands/c-de-cartier/c-%E3%83%88-%E3%82%A5-%E3%82%AB%E3%83%AB%E3%83%86%E3%82%A3%E3%82%A8-%E3%82%A6%E3%82%A7%E3%83%86-%E3%82%A3%E3%83%B3%E3%82%AF-%E3%83%AA%E3%83%B3%E3%82%AF-%E5%B9%853mm-%E3%82%BF-%E3%82%A4%E3%83%A4%E3%83%A2%E3%83%B3%E3%83%88-1%E7%9F%B3-CRB4243100"
    },
    {
        "id": "cartier-trinity-cl",
        "brand": "Cartier",
        "brandKr": "까르띠에",
        "name": "트리니티 링 (클래식 3.2mm)",
        "krPrice": 3700000,
        "jpPrice": 399960,
        "guestCardAllowed": False,
        "tag": "게스트카드 5% 불가",
        "krUrl": "https://www.cartier.com/ko-kr/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EB%A7%81/%ED%8A%B8%EB%A6%AC%EB%8B%88%ED%8B%B0/%ED%8A%B8%EB%A6%AC%EB%8B%88%ED%8B%B0-%EB%A7%81-%ED%81%B4%EB%9E%98%EC%8B%9D-%EB%AA%A8%EB%8D%B8-CRB4234200.html",
        "jpUrl": "https://www.cartier.com/ja-jp/jewellery/rings/trinity/%E3%83%88%E3%83%AA%E3%83%8B%E3%83%86%E3%82%A3-%E3%83%AA%E3%83%B3%E3%82%AF-%E3%82%AF%E3%83%A9%E3%82%B7%E3%83%83%E3%82%AF%E3%83%A2%E3%83%86-%E3%83%AB-CRB4234200"
    },
    {
        "id": "cartier-vendome-35",
        "brand": "Cartier",
        "brandKr": "까르띠에",
        "name": "방돔 루이 까르띠에 웨딩 밴드 (3.5mm)",
        "krPrice": 2560000,
        "jpPrice": 224400,
        "guestCardAllowed": False,
        "tag": "게스트카드 5% 불가",
        "krUrl": "https://www.cartier.com/ko-kr/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EC%9B%A8%EB%94%A9-%EB%B0%B4%EB%93%9C/%EB%A3%A8%EC%9D%B4-%EA%B9%8C%EB%A5%B4%EB%9D%A0%EC%97%90-%EB%B0%A9%EB%8F%94/%EB%B0%A9%EB%8F%94-%EB%A3%A8%EC%9D%B4-%EA%B9%8C%EB%A5%B4%EB%9D%A0%EC%97%90-%EC%9B%A8%EB%94%A9-%EB%A7%81-%ED%8F%AD-3.5mm-CRB4052200.html",
        "jpUrl": "https://www.cartier.com/ja-jp/ジュエリー/カテゴリー/結婚指輪"
    },

    # Tiffany & Co.
    {
        "id": "tiffany-milgrain-4mm",
        "brand": "Tiffany & Co.",
        "brandKr": "티파니",
        "name": "티파니 투게더 밀그레인 (4mm)",
        "krPrice": 3290000,
        "jpPrice": 346500,
        "guestCardAllowed": True,
        "tag": "지점별 5% 가능",
        "krUrl": "https://www.tiffany.kr/jewelry/rings/tiffany-together-18k-rose-gold-and-platinum-rings-62499893.html",
        "jpUrl": "https://www.tiffany.co.jp/jewelry/rings/tiffany-together-milgrain-band-ring-GRP00377/"
    },
    {
        "id": "tiffany-together-1d-4mm",
        "brand": "Tiffany & Co.",
        "brandKr": "티파니",
        "name": "티파니 투게더 밴드 링 (4mm 1다이아)",
        "krPrice": 4030000,
        "jpPrice": 401500,
        "guestCardAllowed": True,
        "tag": "지점별 5% 가능",
        "krUrl": "https://www.tiffany.kr/jewelry/rings/tiffany-together-platinum-diamond-rings-74791352.html",
        "jpUrl": "https://www.tiffany.co.jp/jewelry/rings/tiffany-together-milgrain-band-ring-GRP12898/"
    },
    {
        "id": "tiffany-harmony-pt-3mm",
        "brand": "Tiffany & Co.",
        "brandKr": "티파니",
        "name": "티파니 하모니 웨딩 밴드 (플래티늄 3mm)",
        "krPrice": 2240000,
        "jpPrice": 225500,
        "guestCardAllowed": True,
        "tag": "지점별 5% 가능",
        "krUrl": "https://www.tiffany.kr/engagement/wedding-band-sets/",
        "jpUrl": "https://www.tiffany.co.jp/jewelry/rings/tiffany-harmony-wedding-band-GRP05873/"
    },
    {
        "id": "tiffany-harmony-dia",
        "brand": "Tiffany & Co.",
        "brandKr": "티파니",
        "name": "티파니 하모니 밴드 링 (로즈골드 다이아)",
        "krPrice": 5100000,
        "jpPrice": 528000,
        "guestCardAllowed": True,
        "tag": "지점별 5% 가능",
        "krUrl": "https://www.tiffany.kr/jewelry/rings/tiffany-harmony-18k-rose-gold-round-brilliant-diamonds-rings-60004611.html",
        "jpUrl": "https://www.tiffany.co.jp/jewelry/rings/tiffany-harmony-band-ring-GRP08146/"
    },
    {
        "id": "tiffany-band-3dia",
        "brand": "Tiffany & Co.",
        "brandKr": "티파니",
        "name": "티파니 T&CO 밴드 링 (3mm 0.01ct)",
        "krPrice": 2580000,
        "jpPrice": 258500,
        "guestCardAllowed": True,
        "tag": "지점별 5% 가능",
        "krUrl": "https://www.tiffany.kr/jewelry/rings/tco-18k-rose-gold-round-brilliant-diamonds-rings-72649834.html",
        "jpUrl": "https://www.tiffany.co.jp/jewelry/rings/tco-band-ring-GRP12362/"
    },

    # Chanel
    {
        "id": "chanel-coco-mini",
        "brand": "Chanel",
        "brandKr": "샤넬",
        "name": "코코 크러쉬 링 (베이지골드 미니 노다이아)",
        "krPrice": 3020000,
        "jpPrice": 308000,
        "guestCardAllowed": False,
        "tag": "게스트카드 5% 불가",
        "krUrl": "https://www.chanel.com/kr/fine-jewelry/p/J11785/coco-crush-ring/",
        "jpUrl": "https://www.chanel.com/jp/fine-jewelry/p/J11785/coco-crush-ring/"
    },
    {
        "id": "chanel-coco-mini-dia",
        "brand": "Chanel",
        "brandKr": "샤넬",
        "name": "코코 크러쉬 링 (베이지골드 미니 다이아)",
        "krPrice": 8820000,
        "jpPrice": 902000,
        "guestCardAllowed": False,
        "tag": "게스트카드 5% 불가",
        "krUrl": "https://www.chanel.com/kr/fine-jewelry/p/J11871/coco-crush-ring/",
        "jpUrl": "https://www.chanel.com/jp/fine-jewelry/p/J11871/coco-crush-ring/"
    },

    # Bvlgari
    {
        "id": "bvlgari-bzero1-plain",
        "brand": "Bvlgari",
        "brandKr": "불가리",
        "name": "비제로원 링 (옐로골드)",
        "krPrice": 2880000,
        "jpPrice": 314600,
        "guestCardAllowed": True,
        "tag": "지점별 5% 가능",
        "krUrl": "https://www.bulgari.com/ko-kr/B-zero1-1-bands-AN852260.html",
        "jpUrl": "https://www.bulgari.com/ja-jp/B-zero1-1-bands-AN852260.html"
    },
    {
        "id": "bvlgari-bzero1-pave",
        "brand": "Bvlgari",
        "brandKr": "불가리",
        "name": "비제로원 1밴드 링 (화이트골드 1다이아)",
        "krPrice": 4200000,
        "jpPrice": 432300,
        "guestCardAllowed": True,
        "tag": "지점별 5% 가능",
        "krUrl": "https://www.bulgari.com/ko-kr/AN853348.html",
        "jpUrl": "https://www.bulgari.com/ja-jp/AN853348.html"
    },
    {
        "id": "bvlgari-serpenti-plain",
        "brand": "Bvlgari",
        "brandKr": "불가리",
        "name": "세르펜티 바이퍼 링 (노다이아 로즈골드)",
        "krPrice": 2450000,
        "jpPrice": 251900,
        "guestCardAllowed": True,
        "tag": "지점별 5% 가능",
        "krUrl": "https://www.bulgari.com/ko-kr/AN856868.html",
        "jpUrl": "https://www.bulgari.com/ja-jp/AN856868.html"
    },
    {
        "id": "bvlgari-serpenti-dia",
        "brand": "Bvlgari",
        "brandKr": "불가리",
        "name": "세르펜티 바이퍼 링 (로즈골드 세미파베)",
        "krPrice": 7500000,
        "jpPrice": 770000,
        "guestCardAllowed": True,
        "tag": "지점별 5% 가능",
        "krUrl": "https://www.bulgari.com/ko-kr/AN857896.html",
        "jpUrl": "https://www.bulgari.com/ja-jp/AN857896.html"
    },
    {
        "id": "bvlgari-infinito-1d",
        "brand": "Bvlgari",
        "brandKr": "불가리",
        "name": "인피니토 웨딩 밴드 (1다이아 플래티넘)",
        "krPrice": 3060000,
        "jpPrice": 343200,
        "guestCardAllowed": True,
        "tag": "지점별 5% 가능",
        "krUrl": "https://www.bulgari.com/ko-kr/AN857694.html",
        "jpUrl": "https://www.bulgari.com/ja-jp/AN857694.html"
    },
    {
        "id": "bvlgari-infinito-pave",
        "brand": "Bvlgari",
        "brandKr": "불가리",
        "name": "인피니토 웨딩 밴드 (풀 파베 플래티넘)",
        "krPrice": 7750000,
        "jpPrice": 841500,
        "guestCardAllowed": True,
        "tag": "지점별 5% 가능",
        "krUrl": "https://www.bulgari.com/ko-kr/AN857697.html",
        "jpUrl": "https://www.bulgari.com/ja-jp/AN857697.html"
    },
    {
        "id": "bvlgari-marryme-1d",
        "brand": "Bvlgari",
        "brandKr": "불가리",
        "name": "메리미 웨딩 밴드 (플래티넘 1다이아)",
        "krPrice": 3300000,
        "jpPrice": 358600,
        "guestCardAllowed": True,
        "tag": "지점별 5% 가능",
        "krUrl": "https://www.bulgari.com/ko-kr/AN854104.html",
        "jpUrl": "https://www.bulgari.com/ja-jp/AN854104.html"
    },
    {
        "id": "bvlgari-marryme-5d",
        "brand": "Bvlgari",
        "brandKr": "불가리",
        "name": "메리미 웨딩 밴드 (플래티넘 5다이아)",
        "krPrice": 4670000,
        "jpPrice": 507100,
        "guestCardAllowed": True,
        "tag": "지점별 5% 가능",
        "krUrl": "https://www.bulgari.com/ko-kr/AN852593.html",
        "jpUrl": "https://www.bulgari.com/ja-jp/AN852593.html"
    }
]

# Set image paths
for item in CURATED_RINGS:
    item["imageUrl"] = f"./images/rings/{item['id']}.png"

# Save rings.json
data = {
    "lastUpdated": "2026-09-08",
    "targetBrands": ["Cartier", "Tiffany & Co.", "Chanel", "Bvlgari"],
    "rings": CURATED_RINGS
}

with open(DATA_PATH, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Updated rings.json with {len(CURATED_RINGS)} curated valid items!")

# Sync app.js PRESETS
with open(APP_PATH, "r", encoding="utf-8") as f:
    content = f.read()

presets_json = json.dumps(CURATED_RINGS, ensure_ascii=False, indent=2)
pattern = r'let PRESETS = \[[\s\S]*?\];'
replacement = f'let PRESETS = {presets_json};'

new_content = re.sub(pattern, replacement, content, count=1)

with open(APP_PATH, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Updated app.js PRESETS successfully!")
