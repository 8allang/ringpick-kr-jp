import json
import os
import re

raw_table = """
1	까르띠에 (Cartier)	러브 (Love)	러브 웨딩 밴드 (SM 3.6mm)	₩2,190,000	TRUE	235400	₩2,052,688	TRUE	https://www.cartier.com/ko-kr/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EB%A7%81/love/love-%EB%A7%81-%EC%8A%A4%EB%AA%B0%28small%29-%EB%AA%A8%EB%8D%B8-CRB4085000.html	https://www.cartier.com/ja-jp/jewellery/rings/love/love-%E3%83%AA%E3%83%B3%E3%82%AF-%E3%82%B9%E3%83%A2%E3%83%BC%E3%83%AB%E3%83%A2%E3%83%86-%E3%83%AB-CRB4085000
2	까르띠에 (Cartier)	러브 (Love)	러브 웨딩 밴드 (1다이아 4mm 0.02ct)	₩4,060,000	TRUE	440000	₩3,836,800	TRUE	https://www.cartier.com/ko-kr/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EB%A7%81/love/love-%EB%A7%81-%EC%8A%A4%EB%AA%B0%28small%29-%EB%AA%A8%EB%8D%B8-%EB%8B%A4%EC%9D%B4%EC%95%84%EB%AA%AC%EB%93%9C-1%EA%B0%9C-CRB4056100.html	https://www.cartier.com/ja-jp/jewellery/rings/love/love-%E3%83%AA%E3%83%B3%E3%82%AF-%E3%82%B9%E3%83%A2%E3%83%BC%E3%83%AB%E3%83%A2%E3%83%86-%E3%83%AB-%E3%82%BF-%E3%82%A4%E3%83%A4%E3%83%A2%E3%83%B3%E3%83%88-1%E7%9F%B3-CRB4056100
3	까르띠에 (Cartier)	C 드 까르띠에	C 드 까르띠에 (1다이아 3mm, 0.03ct)	₩2,650,000	TRUE	286000	₩2,493,920	TRUE	https://www.cartier.com/ko-kr/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EC%9B%A8%EB%94%A9-%EB%B0%B4%EB%93%9C/c-%EB%93%9C-%EA%B9%8C%EB%A5%B4%EB%9D%A0%EC%97%90/c-%EB%93%9C-%EA%B9%8C%EB%A5%B4%EB%9D%A0%EC%97%90-%EC%9B%A8%EB%94%A9-%EB%A7%81-%ED%8F%AD-3mm-%EB%8B%A4%EC%9D%B4%EC%95%84%EB%AA%AC%EB%93%9C-1%EA%B0%9C-CRB4086400.html	https://www.cartier.com/ja-jp/jewellery/wedding-bands/c-de-cartier/c-%E3%83%88-%E3%82%A5-%E3%82%AB%E3%83%AB%E3%83%86%E3%82%A3%E3%82%A8-%E3%82%A6%E3%82%A7%E3%83%86-%E3%82%A3%E3%83%B3%E3%82%AF-%E3%83%AA%E3%83%B3%E3%82%AF-%E5%B9%853mm-%E3%82%BF-%E3%82%A4%E3%83%A4%E3%83%A2%E3%83%B3%E3%83%88-1%E7%9F%B3-CRB4243100
4	까르띠에 (Cartier)	트리니티 (Trinity)	트리니티 링 (클래식 3.2mm)	₩3,700,000	TRUE	399960	₩3,487,651	TRUE	https://www.cartier.com/ko-kr/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EB%A7%81/%ED%8A%B8%EB%A6%AC%EB%8B%88%ED%8B%B0/%ED%8A%B8%EB%A6%AC%EB%8B%88%ED%8B%B0-%EB%A7%81-%ED%81%B4%EB%9E%98%EC%8B%9D-%EB%AA%A8%EB%8D%B8-CRB4234200.html	https://www.cartier.com/ja-jp/jewellery/rings/trinity/%E3%83%88%E3%83%AA%E3%83%8B%E3%83%86%E3%82%A3-%E3%83%AA%E3%83%B3%E3%82%AF-%E3%82%AF%E3%83%A9%E3%82%B7%E3%83%83%E3%82%AF%E3%83%A2%E3%83%86-%E3%83%AB-CRB4234200
5	티파니 (Tiffany & Co.)	밀그레인 (Milgrain)	티파니 투게더 밀그레인 (4mm)	₩3,290,000	TRUE	346500	₩3,021,480	TRUE	https://www.tiffany.kr/jewelry/rings/tiffany-together-18k-rose-gold-and-platinum-rings-62499893.html	https://www.tiffany.co.jp/jewelry/rings/tiffany-together-milgrain-band-ring-GRP00377/
6	티파니 (Tiffany & Co.)	티파니 투게더 (Together)	티파니 투게더 밴드 링 (4mm 1다이아)	₩4,030,000	TRUE	401500	₩3,501,080	TRUE	https://www.tiffany.kr/jewelry/rings/tiffany-together-platinum-diamond-rings-74791352.html	https://www.tiffany.co.jp/jewelry/rings/tiffany-together-milgrain-band-ring-GRP12898/
7	티파니 (Tiffany & Co.)	하모니 (Harmony)	티파니 하모니 웨딩 밴드 (플래티늄 3mm)	₩2,240,000	TRUE	225500	₩1,966,360	TRUE	https://www.tiffany.kr/engagement/wedding-band-sets/	https://www.tiffany.co.jp/jewelry/rings/tiffany-harmony-wedding-band-GRP05873/
8	티파니 (Tiffany & Co.)	하모니 (Harmony)	티파니 하모니 밴드 링 (로즈골드, 다이아몬드 세팅)	₩5,100,000	TRUE	528000	₩4,604,160	TRUE	https://www.tiffany.kr/jewelry/rings/tiffany-harmony-18k-rose-gold-round-brilliant-diamonds-rings-60004611.html?queryID=dc417a9c24002b10fcbb5a1998adaeb7&objectID=60004611&indexName=ecommerce_kr_products__ko_KR&searchQuery=harm	https://www.tiffany.co.jp/jewelry/rings/tiffany-harmony-band-ring-GRP08146/
9	티파니 (Tiffany & Co.)	티파니 T (Tiffany T)	티파니 T&CO 밴드 링 (3m, 0.01ct)	₩2,580,000	TRUE	258500	₩2,254,120	TRUE	https://www.tiffany.kr/jewelry/rings/tco-18k-rose-gold-round-brilliant-diamonds-rings-72649834.html	https://www.tiffany.co.jp/jewelry/rings/tco-band-ring-GRP12362/
10	샤넬 (Chanel)	코코 크러쉬 (Coco Crush)	코코 크러쉬 링 (베이지골드, 미니 노다이아)	₩3,020,000	TRUE	308000	₩2,685,760	TRUE	https://www.chanel.com/kr/fine-jewelry/p/J11785/coco-crush-ring/	https://www.chanel.com/jp/fine-jewelry/p/J11785/coco-crush-ring/
11	샤넬 (Chanel)	코코 크러쉬 (Coco Crush)	코코 크러쉬 링 (베이지골드, 미니 다이아몬드)	₩8,820,000	TRUE	902000	₩7,865,440	TRUE	https://www.chanel.com/kr/fine-jewelry/p/J11871/coco-crush-ring/	https://www.chanel.com/jp/fine-jewelry/p/J11871/coco-crush-ring/
12	불가리 (Bvlgari)	비제로원 (B.zero1)	비제로원 링(옐로골드)	₩2,880,000	TRUE	314600	₩2,743,312	TRUE	https://www.bulgari.com/ko-kr/B-zero1-1-bands-AN852260.html	https://www.bulgari.com/ja-jp/B-zero1-1-bands-AN852260.html
13	불가리 (Bvlgari)	비제로원 (B.zero1)	비제로원 1밴드 링 (화이트골드, 1다이아)	₩4,200,000	TRUE	432300	₩3,769,656	TRUE	https://www.bulgari.com/ko-kr/AN853348.html	https://www.bulgari.com/ja-jp/AN853348.html
14	불가리 (Bvlgari)	세르펜티 바이퍼 (Serpenti)	세르펜티 바이퍼 링 (노다이아, 로즈골드)	₩2,450,000	TRUE	251900	₩2,196,568	TRUE	https://www.bulgari.com/ko-kr/AN856868.html	https://www.bulgari.com/ja-jp/AN856868.html
15	불가리 (Bvlgari)	세르펜티 바이퍼 (Serpenti)	세르펜티 바이퍼 링 (로즈골드, 세미파베 다이아)	₩7,500,000	TRUE	770000	₩6,714,400	TRUE	https://www.bulgari.com/ko-kr/AN857896.html	https://www.bulgari.com/ja-jp/AN857896.html
16	불가리 (Bvlgari)	인피니토 (Infinito)	인피니토 웨딩 밴드 (1다이아 플래티넘)	₩3,060,000	TRUE	343200	₩2,992,704	TRUE	https://www.bulgari.com/ko-kr/AN857694.html	https://www.bulgari.com/ja-jp/AN857694.html
17	불가리 (Bvlgari)	인피니토 (Infinito)	인피니토 웨딩 밴드 (풀 파베 플래티넘)	₩7,750,000	TRUE	841500	₩7,337,880	TRUE	https://www.bulgari.com/ko-kr/AN857697.html	https://www.bulgari.com/ja-jp/AN857697.html
18	불가리 (Bvlgari)	메리미 (MarryMe)	메리미 웨딩 밴드 (플래티넘 1다이아)	₩3,300,000	TRUE	358600	₩3,126,992	TRUE	https://www.bulgari.com/ko-kr/AN854104.html	https://www.bulgari.com/ja-jp/AN854104.html
19	불가리 (Bvlgari)	메리미 (MarryMe)	메리미 웨딩 밴드 (플래티넘 5다이아)	₩4,670,000	TRUE	507100	₩4,421,912	TRUE	https://www.bulgari.com/ko-kr/AN852593.html	https://www.bulgari.com/ja-jp/AN852593.html
20	타사키 (Tasaki)	트라페지오 (Trapezio)	트라페지오 링 (사쿠라골드, 노다이아)	₩2,130,000	TRUE	225500	₩1,966,360	TRUE	https://www.tasaki.co.kr/trapezio-ring-rk-4716-18ksg.html	https://www.tasaki.co.jp/trapezio-ring-rk-4716-18ksg.html
21	타사키 (Tasaki)	트라페지오 (Trapezio)	트라페지오 링 (1다이아)	₩2,330,000	TRUE	246400	₩2,148,608	TRUE	https://www.tasaki.co.kr/trapezio-ring-rd-f2704-18ksg.html	https://www.tasaki.co.jp/trapezio-ring-rd-f2704-18ksg.html
22	타사키 (Tasaki)	피아노 (Piano)	피아노 링 (사쿠라골드, 3다이아 세팅)	₩2,030,000	TRUE	214500	₩1,870,440	TRUE	https://www.tasaki.co.kr/piano-3-stones-20-ring-rd-f2696-18ksg.html	https://www.tasaki.co.jp/piano-3-stones-20-ring-rd-f2696-18ksg.html
23	부쉐론 (Boucheron)	콰트로 (Quatre)	콰트로 클래식 XS (JRG03330)	₩7,370,000	TRUE	764500	₩6,666,440	TRUE	https://www.boucheron.com/ko/quatre-classique-xs-ring-jrg03330.html	https://www.boucheron.com/ja_en/quatre-classique-xs-ring-jrg03330.html
24	부쉐론 (Boucheron)	콰트로 (Quatre)	콰트로 클래식 블랙 에디션 XS (JRG03511)	₩7,910,000	TRUE	819500	₩7,146,040	TRUE	https://www.boucheron.com/ko/quatre-black-edition-xs-ring-jrg03511.html	https://www.boucheron.com/ja_en/quatre-black-edition-xs-ring-jrg03511.html
25	부쉐론 (Boucheron)	콰트로 (Quatre)	콰트로 더블 화이트 에디션 밴드 (JAL00300)	₩3,910,000	TRUE	407000	₩3,549,040	TRUE	https://www.boucheron.com/ko/quatre-double-white-edition-wedding-band-jal00300.html	https://www.boucheron.com/ja_en/quatre-double-white-edition-wedding-band-jal00300.html
33	쇼메 (Chaumet)	토르사드 (Torsade)	토르사드 드 쇼메 (핑크골드 3.5mm)	₩2,650,000	FALSE	251900	₩2,196,568	FALSE		
34	쇼메 (Chaumet)	토르사드 (Torsade)	토르사드 드 쇼메 (플래티넘 3.5mm)	₩3,100,000	FALSE	293700	₩2,561,064	FALSE		
26	쇼메 (Chaumet)	토르사드 (Torsade)	토르사드 드 쇼메 (플래티넘 1다이아)	₩3,990,000	TRUE	410300	₩3,577,816	TRUE	https://www.chaumet.com/kr_kr/torsade-de-chaumet-ring-082721	https://www.chaumet.com/jp_ja/torsade-de-chaumet-ring-082721
27	쇼메 (Chaumet)	토르사드 (Torsade)	토르사드 드 쇼메 (플래티넘 풀 파베)	₩7,690,000	TRUE	792000	₩6,906,240	TRUE	https://www.chaumet.com/kr_kr/torsade-de-chaumet-ring-095904	https://www.chaumet.com/jp_ja/torsade-de-chaumet-ring-095904
28	쇼메 (Chaumet)	토르사드 (Torsade)	토르사드 드 쇼메 (플래티넘 노다이아)	₩4,300,000	TRUE	442200	₩3,855,984	TRUE	https://www.chaumet.com/kr_kr/torsade-de-chaumet-ring-095902	https://www.chaumet.com/jp_ja/torsade-de-chaumet-ring-095902
29	쇼메 (Chaumet)	리앙 (Liens)	리앙 에비당스 링 (노다이아, 4mm)	₩3,480,000	TRUE	358600	₩3,126,992	TRUE	https://www.chaumet.com/kr_kr/liens-evidence-ring-080224	https://www.chaumet.com/jp_ja/liens-evidence-ring-080224
30	쇼메 (Chaumet)	리앙 (Liens)	리앙 에비당스 링 (중간 다이아몬드)	₩5,040,000	FALSE	519200	₩4,527,424	TRUE	https://www.chaumet.com/kr_kr/liens-evidence-ring-081685	https://www.chaumet.com/jp_ja/liens-evidence-ring-081685
31	쇼메 (Chaumet)	트리옹프 (Triomphe)	트리옹프 드 쇼메 (플래티넘, 3.5m, 노다이아)	₩4,320,000	TRUE	444400	₩3,875,168	TRUE	https://www.chaumet.com/kr_kr/triomphe-de-chaumet-ring-082795	https://www.chaumet.com/jp_ja/triomphe-de-chaumet-ring-082795
32	쇼메 (Chaumet)	트리옹프 (Triomphe)	트리옹프 드 쇼메 (풀 파베 다이아)	₩8,560,000	TRUE	881100	₩7,683,192	TRUE	https://www.chaumet.com/kr_kr/triomphe-de-chaumet-ring-082640	https://www.chaumet.com/jp_ja/jewellery/rings
"""

lines = raw_table.strip().split("\n")

def brand_to_en(b_str):
    if "까르띠에" in b_str: return ("Cartier", "까르띠에")
    if "티파니" in b_str: return ("Tiffany & Co.", "티파니")
    if "샤넬" in b_str: return ("Chanel", "샤넬")
    if "불가리" in b_str: return ("Bvlgari", "불가리")
    if "타사키" in b_str: return ("Tasaki", "타사키")
    if "부쉐론" in b_str: return ("Boucheron", "부쉐론")
    if "쇼메" in b_str: return ("Chaumet", "쇼메")
    return (b_str, b_str)

def get_guest_card(brand_en):
    if brand_en in ["Cartier", "Chanel"]:
        return False, "게스트카드 5% 불가"
    return True, "지점별 5% 가능"

filtered_rings = []
seen_ids = set()

# Mapping to canonical IDs where possible
ID_MAP = {
    "러브 웨딩 밴드 (SM 3.6mm)": "cartier-love-sm",
    "러브 웨딩 밴드 (1다이아 4mm 0.02ct)": "cartier-love-1d",
    "C 드 까르띠에 (1다이아 3mm, 0.03ct)": "cartier-c-de-cartier-1d",
    "트리니티 링 (클래식 3.2mm)": "cartier-trinity-cl",
    "티파니 투게더 밀그레인 (4mm)": "tiffany-milgrain-4mm",
    "티파니 투게더 밴드 링 (4mm 1다이아)": "tiffany-together-1d-4mm",
    "티파니 하모니 웨딩 밴드 (플래티늄 3mm)": "tiffany-harmony-pt-3mm",
    "티파니 하모니 밴드 링 (로즈골드, 다이아몬드 세팅)": "tiffany-harmony-dia",
    "티파니 T&CO 밴드 링 (3m, 0.01ct)": "tiffany-band-3dia",
    "코코 크러쉬 링 (베이지골드, 미니 노다이아)": "chanel-coco-mini",
    "코코 크러쉬 링 (베이지골드, 미니 다이아몬드)": "chanel-coco-mini-dia",
    "비제로원 링(옐로골드)": "bvlgari-bzero1-plain",
    "비제로원 1밴드 링 (화이트골드, 1다이아)": "bvlgari-bzero1-pave",
    "세르펜티 바이퍼 링 (노다이아, 로즈골드)": "bvlgari-serpenti-plain",
    "세르펜티 바이퍼 링 (로즈골드, 세미파베 다이아)": "bvlgari-serpenti-dia",
    "인피니토 웨딩 밴드 (1다이아 플래티넘)": "bvlgari-infinito-1d",
    "인피니토 웨딩 밴드 (풀 파베 플래티넘)": "bvlgari-infinito-pave",
    "메리미 웨딩 밴드 (플래티넘 1다이아)": "bvlgari-marryme-1d",
    "메리미 웨딩 밴드 (플래티넘 5다이아)": "bvlgari-marryme-5d",
    "트라페지오 링 (사쿠라골드, 노다이아)": "tasaki-trapezio-plain",
    "트라페지오 링 (1다이아)": "tasaki-trapezio-1d",
    "피아노 링 (사쿠라골드, 3다이아 세팅)": "tasaki-piano-3d",
    "콰트로 클래식 XS (JRG03330)": "boucheron-quatre-classic-xs",
    "콰트로 클래식 블랙 에디션 XS (JRG03511)": "boucheron-quatre-black-xs",
    "콰트로 더블 화이트 에디션 밴드 (JAL00300)": "boucheron-quatre-white-band",
    "토르사드 드 쇼메 (플래티넘 1다이아)": "chaumet-torsade-1d",
    "토르사드 드 쇼메 (플래티넘 풀 파베)": "chaumet-torsade-pave",
    "토르사드 드 쇼메 (플래티넘 노다이아)": "chaumet-torsade-plain",
    "리앙 에비당스 링 (노다이아, 4mm)": "chaumet-liens-4mm",
    "트리옹프 드 쇼메 (플래티넘, 3.5m, 노다이아)": "chaumet-triomphe-sm",
    "트리옹프 드 쇼메 (풀 파베 다이아)": "chaumet-triomphe-pave",
}

for line in lines:
    cols = [c.strip() for c in line.split("\t")]
    if len(cols) < 9:
        continue
    
    num_str = cols[0]
    brand_raw = cols[1]
    series = cols[2]
    model_name = cols[3]
    kr_price_raw = cols[4]
    flag1 = cols[5].upper()
    jp_price_raw = cols[6]
    flag2 = cols[8].upper() if len(cols) > 8 else "FALSE"
    
    kr_url = cols[9] if len(cols) > 9 else ""
    jp_url = cols[10] if len(cols) > 10 else ""
    
    # INCLUDE ONLY IF flag1 is TRUE and flag2 is TRUE (or flag1 is TRUE)
    if flag1 != "TRUE" or flag2 != "TRUE":
        print(f"EXCLUDING (FALSE): No {num_str} - {brand_raw} {model_name}")
        continue
        
    kr_price = int(re.sub(r'[^0-9]', '', kr_price_raw))
    jp_price = int(re.sub(r'[^0-9]', '', jp_price_raw))
    
    brand_en, brand_kr = brand_to_en(brand_raw)
    guest_ok, tag_text = get_guest_card(brand_en)
    
    ring_id = ID_MAP.get(model_name)
    if not ring_id:
        clean_name = re.sub(r'[^a-zA-Z0-9]', '', model_name.lower())
        ring_id = f"{brand_en.lower()}-{clean_name[:15]}"
        
    img_url = f"./images/rings/{ring_id}.svg"
    png_path = os.path.join(os.path.dirname(__file__), "..", "images", "rings", f"{ring_id}.png")
    jpg_path = os.path.join(os.path.dirname(__file__), "..", "images", "rings", f"{ring_id}.jpg")
    if os.path.exists(png_path):
        img_url = f"./images/rings/{ring_id}.png"
    elif os.path.exists(jpg_path):
        img_url = f"./images/rings/{ring_id}.jpg"
        
    if not kr_url.startswith("http") and kr_url:
        kr_url = "https://" + kr_url
    if not jp_url.startswith("http") and jp_url:
        jp_url = "https://" + jp_url
        
    filtered_rings.append({
        "id": ring_id,
        "brand": brand_en,
        "brandKr": brand_kr,
        "name": model_name,
        "krPrice": kr_price,
        "jpPrice": jp_price,
        "guestCardAllowed": guest_ok,
        "tag": tag_text,
        "krUrl": kr_url,
        "jpUrl": jp_url,
        "imageUrl": img_url
    })

print(f"\nTotal Valid Verified Rings: {len(filtered_rings)}")

# Brand breakdown
brand_counts = {}
for r in filtered_rings:
    brand_counts[r['brand']] = brand_counts.get(r['brand'], 0) + 1

print("Brand counts:", brand_counts)

# Save data/rings.json
DATA_PATH = os.path.join(os.path.dirname(__file__), "..", "data", "rings.json")
APP_PATH = os.path.join(os.path.dirname(__file__), "..", "app.js")
INDEX_PATH = os.path.join(os.path.dirname(__file__), "..", "index.html")

data = {
    "lastUpdated": "2026-09-08",
    "targetBrands": list(brand_counts.keys()),
    "rings": filtered_rings
}

with open(DATA_PATH, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated data/rings.json successfully!")

# Update app.js PRESETS
with open(APP_PATH, "r", encoding="utf-8") as f:
    app_content = f.read()

presets_json = json.dumps(filtered_rings, ensure_ascii=False, indent=2)
pattern = r'let PRESETS = \[[\s\S]*?\];'
replacement = f'let PRESETS = {presets_json};'

new_content = re.sub(pattern, replacement, app_content, count=1)

with open(APP_PATH, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Updated app.js PRESETS successfully!")

