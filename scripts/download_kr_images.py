import json
import os
import urllib.request

DATA_PATH = os.path.join(os.path.dirname(__file__), "..", "data", "rings.json")
IMG_DIR = os.path.join(os.path.dirname(__file__), "..", "images", "rings")

os.makedirs(IMG_DIR, exist_ok=True)

OFFICIAL_KR_URLS = {
    # Cartier
    "cartier-love-sm": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwc27b40c7/images/large/5c4da398fe195e5fa36ea2b5d4ce0071.png",
    "cartier-love-cl": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw47516a74/images/large/509efad81d12569981abebf66c433720.png",
    "cartier-love-1d": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw1b4e2373/images/large/262529949d2c554b9f36f6426462feef.png",
    "cartier-trinity-cl": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwae3ae765/images/large/bdddbc7c263e54ea9f1f71501fb9eede.png",
    "cartier-vendome-35": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw1bc21509/images/large/13c8ff759ea45a0592ca07bfa7c5d0eb.png",
    "cartier-vendome-pave": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw953ebfd8/images/large/92ea012019465b75a1d7f1d43a1a5ca6.png",

    # Tiffany & Co.
    "tiffany-milgrain-4mm": "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-classic-milgrain-wedding-band-ring-12002161_989758_ED_M.jpg",
    "tiffany-together-1d-4mm": "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-together-milgrain-band-ring-69683935_1033282_ED.jpg",
    "tiffany-harmony-pt-3mm": "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-harmony-wedding-band-ring-31298418_989758_ED_M.jpg",
    "tiffany-harmony-rg-3mm": "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-harmony-wedding-band-ring-31298418_989758_ED_M.jpg",
    "tiffany-harmony-dia": "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-harmony-band-ring-31298450_989758_ED_M.jpg",
    "tiffany-t-narrow-rg": "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-t-narrow-ring-33823304_996162_ED.jpg",
    "tiffany-band-3dia": "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-classic-wedding-band-ring-63064947_989758_ED_M.jpg",

    # Chaumet
    "chaumet-torsade-pg": "https://www.chaumet.com/media/catalog/product/0/8/082725_1.png",
    "chaumet-torsade-pt": "https://www.chaumet.com/media/catalog/product/0/8/082723_1.png",
    "chaumet-torsade-1d": "https://www.chaumet.com/media/catalog/product/0/8/082724_1.png",
    "chaumet-torsade-pave": "https://www.chaumet.com/media/catalog/product/0/8/082727_1.png",
    "chaumet-liens": "https://www.chaumet.com/media/catalog/product/0/8/082218_1.png",
    "chaumet-liens-dia": "https://www.chaumet.com/media/catalog/product/0/8/082219_1.png",
    "chaumet-triomphe-sm": "https://www.chaumet.com/media/catalog/product/0/8/085202_1.png",
    "chaumet-triomphe-md": "https://www.chaumet.com/media/catalog/product/0/8/085204_1.png",
    "chaumet-triomphe-pave": "https://www.chaumet.com/media/catalog/product/0/8/085203_1.png",
    "chaumet-bee": "https://www.chaumet.com/media/catalog/product/0/8/083434_1.png",
    "chaumet-bee-1d": "https://www.chaumet.com/media/catalog/product/0/8/083435_1.png",

    # Bvlgari
    "bvlgari-bzero1-plain": "https://media2.bulgari.com/f_auto,q_auto/production/dw41a59c01/images/images/1319269.png",
    "bvlgari-bzero1-pave": "https://media2.bulgari.com/f_auto,q_auto/production/dw41a59c01/images/images/1321458.png",
    "bvlgari-serpenti-plain": "https://media2.bulgari.com/f_auto,q_auto/production/dw41a59c01/images/images/1337147.png",
    "bvlgari-serpenti-dia": "https://media2.bulgari.com/f_auto,q_auto/production/dw41a59c01/images/images/1338520.png",
    "bvlgari-infinito-plain": "https://media2.bulgari.com/f_auto,q_auto/production/dw41a59c01/images/images/1336125.png",
    "bvlgari-infinito-1d": "https://media2.bulgari.com/f_auto,q_auto/production/dw41a59c01/images/images/1336128.png",
    "bvlgari-infinito-pave": "https://media2.bulgari.com/f_auto,q_auto/production/dw41a59c01/images/images/1336131.png",
    "bvlgari-bb-1d": "https://media2.bulgari.com/f_auto,q_auto/production/dw41a59c01/images/images/1325140.png",
    "bvlgari-marryme-1d": "https://media2.bulgari.com/f_auto,q_auto/production/dw41a59c01/images/images/1318524.png",
    "bvlgari-marryme-5d": "https://media2.bulgari.com/f_auto,q_auto/production/dw41a59c01/images/images/1318526.png",

    # Chanel
    "chanel-coco-sm": "https://www.chanel.com/images/as/t_one/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_600/coco-crush-ring-beige-gold-18k-beige-gold-packshot-portee-1-j10817-73266669.jpg",
    "chanel-coco-sm-dia": "https://www.chanel.com/images/as/t_one/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_600/coco-crush-ring-beige-gold-18k-diamonds-packshot-portee-1-j11970-73266669.jpg",
    "chanel-coco-mini": "https://www.chanel.com/images/as/t_one/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_600/coco-crush-ring-beige-beige-gold-packshot-portee-1-j11785-73266669.jpg",

    # Boucheron
    "boucheron-quatre-jrg00290": "https://www.boucheron.com/media/catalog/product/cache/057be03577d67f5cebb6d5ff2bbdf5b3/j/r/jrg00290_1.png",
    "boucheron-quatre-jal00280": "https://www.boucheron.com/media/catalog/product/cache/057be03577d67f5cebb6d5ff2bbdf5b3/j/a/jal00280_1.png",
    "boucheron-quatre-jal00300": "https://www.boucheron.com/media/catalog/product/cache/057be03577d67f5cebb6d5ff2bbdf5b3/j/a/jal00300_1.png",
    "boucheron-facette": "https://www.boucheron.com/media/catalog/product/cache/057be03577d67f5cebb6d5ff2bbdf5b3/j/a/jal00014_1.png",

    # Tasaki
    "tasaki-trapezio-plain": "https://www.tasaki.co.jp/medias/sys_master/images/images/h67/hd7/8834789507102/RD-F2643-18KSG_01.jpg",
    "tasaki-trapezio-1d": "https://www.tasaki.co.jp/medias/sys_master/images/images/h33/hba/8834789834782/RD-F2644-18KSG_01.jpg",
    "tasaki-piano-plain": "https://www.tasaki.co.jp/medias/sys_master/images/images/h90/he9/8834788524062/RD-F2284-18KSG_01.jpg",
    "tasaki-piano-dia": "https://www.tasaki.co.jp/medias/sys_master/images/images/h29/h1d/8834788851742/RD-F2285-18KSG_01.jpg",

    # Graff
    "graff-laurence-plain": "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd3307b39/sfcc-graff-staging/i/m/a/g/e/images_hi_res_RGR778_GR83381_Hero_1.jpg",
    "graff-laurence-semi": "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw83a218f4/sfcc-graff-staging/i/m/a/g/e/images_hi_res_RGR780_GR83383_Hero_1.jpg",
    "graff-laurence-pave": "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw10d297a7/sfcc-graff-staging/i/m/a/g/e/images_hi_res_RGR779_GR83382_Hero_1.jpg",
    "graff-spiral-plain": "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd3307b39/sfcc-graff-staging/i/m/a/g/e/images_hi_res_RGR778_GR83381_Hero_1.jpg",
    "graff-spiral-pave": "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw10d297a7/sfcc-graff-staging/i/m/a/g/e/images_hi_res_RGR779_GR83382_Hero_1.jpg",
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36'
}

with open(DATA_PATH, "r", encoding="utf-8") as f:
    data = json.load(f)

for ring in data.get("rings", []):
    ring_id = ring["id"]
    url = OFFICIAL_KR_URLS.get(ring_id)
    if not url:
        continue
    
    ext = ".png" if ".png" in url else ".jpg"
    out_file = os.path.join(IMG_DIR, f"{ring_id}{ext}")
    
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=5) as res:
            with open(out_file, "wb") as out:
                out.write(res.read())
            print(f"Downloaded {ring_id} -> {out_file}")
            ring["imageUrl"] = f"./images/rings/{ring_id}{ext}"
    except Exception as e:
        print(f"Failed download {ring_id} ({e}), keeping local SVG fallback: ./images/rings/{ring_id}.svg")
        ring["imageUrl"] = f"./images/rings/{ring_id}.svg"

with open(DATA_PATH, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated data/rings.json successfully!")
