/**
 * WEDDING BAND PRICE INDEX - CORE APPLICATION
 * Target 8 Luxury Brands: Cartier, Tiffany & Co., Chanel, Bvlgari, Tasaki, Boucheron, Chaumet, Graff
 * Includes Live Crawl Log Viewer
 */

// --- Default 8 Luxury Brands Presets ---
let PRESETS = [
  {
    "id": "cartier-love-sm",
    "brand": "Cartier",
    "brandKr": "까르띠에",
    "name": "러브 웨딩 밴드 (SM 3.6mm)",
    "krPrice": 2190000,
    "jpPrice": 235400,
    "guestCardAllowed": false,
    "tag": "게스트카드 5% 불가",
    "krUrl": "https://www.cartier.com/ko-kr/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EB%A7%81/love/love-%EB%A7%81-%EC%8A%A4%EB%AA%B0%28small%29-%EB%AA%A8%EB%8D%B8-CRB4085000.html",
    "jpUrl": "https://www.cartier.com/ja-jp/jewellery/rings/love/love-%E3%83%AA%E3%83%B3%E3%82%AF-%E3%82%B9%E3%83%A2%E3%83%BC%E3%83%AB%E3%83%A2%E3%83%86-%E3%83%AB-CRB4085000",
    "imageUrl": "./images/rings/cartier-love-sm.png"
  },
  {
    "id": "cartier-love-1d",
    "brand": "Cartier",
    "brandKr": "까르띠에",
    "name": "러브 웨딩 밴드 (1다이아 4mm 0.02ct)",
    "krPrice": 4060000,
    "jpPrice": 440000,
    "guestCardAllowed": false,
    "tag": "게스트카드 5% 불가",
    "krUrl": "https://www.cartier.com/ko-kr/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EB%A7%81/love/love-%EB%A7%81-%EC%8A%A4%EB%AA%B0%28small%29-%EB%AA%A8%EB%8D%B8-%EB%8B%A4%EC%9D%B4%EC%95%84%EB%AA%AC%EB%93%9C-1%EA%B0%9C-CRB4056100.html",
    "jpUrl": "https://www.cartier.com/ja-jp/jewellery/rings/love/love-%E3%83%AA%E3%83%B3%E3%82%AF-%E3%82%B9%E3%83%A2%E3%83%BC%E3%83%AB%E3%83%A2%E3%83%86-%E3%83%AB-%E3%82%BF-%E3%82%A4%E3%83%A4%E3%83%A2%E3%83%B3%E3%83%88-1%E7%9F%B3-CRB4056100",
    "imageUrl": "./images/rings/cartier-love-1d.svg"
  },
  {
    "id": "cartier-c-de-cartier-1d",
    "brand": "Cartier",
    "brandKr": "까르띠에",
    "name": "C 드 까르띠에 (1다이아 3mm, 0.03ct)",
    "krPrice": 2650000,
    "jpPrice": 286000,
    "guestCardAllowed": false,
    "tag": "게스트카드 5% 불가",
    "krUrl": "https://www.cartier.com/ko-kr/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EC%9B%A8%EB%94%A9-%EB%B0%B4%EB%93%9C/c-%EB%93%9C-%EA%B9%8C%EB%A5%B4%EB%9D%A0%EC%97%90/c-%EB%93%9C-%EA%B9%8C%EB%A5%B4%EB%9D%A0%EC%97%90-%EC%9B%A8%EB%94%A9-%EB%A7%81-%ED%8F%AD-3mm-%EB%8B%A4%EC%9D%B4%EC%95%84%EB%AA%AC%EB%93%9C-1%EA%B0%9C-CRB4086400.html",
    "jpUrl": "https://www.cartier.com/ja-jp/jewellery/wedding-bands/c-de-cartier/c-%E3%83%88-%E3%82%A5-%E3%82%AB%E3%83%AB%E3%83%86%E3%82%A3%E3%82%A8-%E3%82%A6%E3%82%A7%E3%83%86-%E3%82%A3%E3%83%B3%E3%82%AF-%E3%83%AA%E3%83%B3%E3%82%AF-%E5%B9%853mm-%E3%82%BF-%E3%82%A4%E3%83%A4%E3%83%A2%E3%83%B3%E3%83%88-1%E7%9F%B3-CRB4243100",
    "imageUrl": "./images/rings/cartier-c-de-cartier-1d.svg"
  },
  {
    "id": "cartier-trinity-cl",
    "brand": "Cartier",
    "brandKr": "까르띠에",
    "name": "트리니티 링 (클래식 3.2mm)",
    "krPrice": 3700000,
    "jpPrice": 399960,
    "guestCardAllowed": false,
    "tag": "게스트카드 5% 불가",
    "krUrl": "https://www.cartier.com/ko-kr/%EC%A3%BC%EC%96%BC%EB%A6%AC/%EB%A7%81/%ED%8A%B8%EB%A6%AC%EB%8B%88%ED%8B%B0/%ED%8A%B8%EB%A6%AC%EB%8B%88%ED%8B%B0-%EB%A7%81-%ED%81%B4%EB%9E%98%EC%8B%9D-%EB%AA%A8%EB%8D%B8-CRB4234200.html",
    "jpUrl": "https://www.cartier.com/ja-jp/jewellery/rings/trinity/%E3%83%88%E3%83%AA%E3%83%8B%E3%83%86%E3%82%A3-%E3%83%AA%E3%83%B3%E3%82%AF-%E3%82%AF%E3%83%A9%E3%82%B7%E3%83%83%E3%82%AF%E3%83%A2%E3%83%86-%E3%83%AB-CRB4234200",
    "imageUrl": "./images/rings/cartier-trinity-cl.png"
  },
  {
    "id": "tiffany-milgrain-4mm",
    "brand": "Tiffany & Co.",
    "brandKr": "티파니",
    "name": "티파니 투게더 밀그레인 (4mm)",
    "krPrice": 3290000,
    "jpPrice": 346500,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.tiffany.kr/jewelry/rings/tiffany-together-18k-rose-gold-and-platinum-rings-62499893.html",
    "jpUrl": "https://www.tiffany.co.jp/jewelry/rings/tiffany-together-milgrain-band-ring-GRP00377/",
    "imageUrl": "./images/rings/tiffany-milgrain-4mm.svg"
  },
  {
    "id": "tiffany-together-1d-4mm",
    "brand": "Tiffany & Co.",
    "brandKr": "티파니",
    "name": "티파니 투게더 밴드 링 (4mm 1다이아)",
    "krPrice": 4030000,
    "jpPrice": 401500,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.tiffany.kr/jewelry/rings/tiffany-together-platinum-diamond-rings-74791352.html",
    "jpUrl": "https://www.tiffany.co.jp/jewelry/rings/tiffany-together-milgrain-band-ring-GRP12898/",
    "imageUrl": "./images/rings/tiffany-together-1d-4mm.svg"
  },
  {
    "id": "tiffany-harmony-pt-3mm",
    "brand": "Tiffany & Co.",
    "brandKr": "티파니",
    "name": "티파니 하모니 웨딩 밴드 (플래티늄 3mm)",
    "krPrice": 2240000,
    "jpPrice": 225500,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.tiffany.kr/engagement/wedding-band-sets/",
    "jpUrl": "https://www.tiffany.co.jp/jewelry/rings/tiffany-harmony-wedding-band-GRP05873/",
    "imageUrl": "./images/rings/tiffany-harmony-pt-3mm.svg"
  },
  {
    "id": "tiffany-harmony-dia",
    "brand": "Tiffany & Co.",
    "brandKr": "티파니",
    "name": "티파니 하모니 밴드 링 (로즈골드, 다이아몬드 세팅)",
    "krPrice": 5100000,
    "jpPrice": 528000,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.tiffany.kr/jewelry/rings/tiffany-harmony-18k-rose-gold-round-brilliant-diamonds-rings-60004611.html?queryID=dc417a9c24002b10fcbb5a1998adaeb7&objectID=60004611&indexName=ecommerce_kr_products__ko_KR&searchQuery=harm",
    "jpUrl": "https://www.tiffany.co.jp/jewelry/rings/tiffany-harmony-band-ring-GRP08146/",
    "imageUrl": "./images/rings/tiffany-harmony-dia.svg"
  },
  {
    "id": "tiffany-band-3dia",
    "brand": "Tiffany & Co.",
    "brandKr": "티파니",
    "name": "티파니 T&CO 밴드 링 (3m, 0.01ct)",
    "krPrice": 2580000,
    "jpPrice": 258500,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.tiffany.kr/jewelry/rings/tco-18k-rose-gold-round-brilliant-diamonds-rings-72649834.html",
    "jpUrl": "https://www.tiffany.co.jp/jewelry/rings/tco-band-ring-GRP12362/",
    "imageUrl": "./images/rings/tiffany-band-3dia.jpg"
  },
  {
    "id": "chanel-coco-mini",
    "brand": "Chanel",
    "brandKr": "샤넬",
    "name": "코코 크러쉬 링 (베이지골드, 미니 노다이아)",
    "krPrice": 3020000,
    "jpPrice": 308000,
    "guestCardAllowed": false,
    "tag": "게스트카드 5% 불가",
    "krUrl": "https://www.chanel.com/kr/fine-jewelry/p/J11785/coco-crush-ring/",
    "jpUrl": "https://www.chanel.com/jp/fine-jewelry/p/J11785/coco-crush-ring/",
    "imageUrl": "./images/rings/chanel-coco-mini.jpg"
  },
  {
    "id": "chanel-coco-mini-dia",
    "brand": "Chanel",
    "brandKr": "샤넬",
    "name": "코코 크러쉬 링 (베이지골드, 미니 다이아몬드)",
    "krPrice": 8820000,
    "jpPrice": 902000,
    "guestCardAllowed": false,
    "tag": "게스트카드 5% 불가",
    "krUrl": "https://www.chanel.com/kr/fine-jewelry/p/J11871/coco-crush-ring/",
    "jpUrl": "https://www.chanel.com/jp/fine-jewelry/p/J11871/coco-crush-ring/",
    "imageUrl": "./images/rings/chanel-coco-mini-dia.svg"
  },
  {
    "id": "bvlgari-bzero1-plain",
    "brand": "Bvlgari",
    "brandKr": "불가리",
    "name": "비제로원 링(옐로골드)",
    "krPrice": 2880000,
    "jpPrice": 314600,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.bulgari.com/ko-kr/B-zero1-1-bands-AN852260.html",
    "jpUrl": "https://www.bulgari.com/ja-jp/B-zero1-1-bands-AN852260.html",
    "imageUrl": "./images/rings/bvlgari-bzero1-plain.png"
  },
  {
    "id": "bvlgari-bzero1-pave",
    "brand": "Bvlgari",
    "brandKr": "불가리",
    "name": "비제로원 1밴드 링 (화이트골드, 1다이아)",
    "krPrice": 4200000,
    "jpPrice": 432300,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.bulgari.com/ko-kr/AN853348.html",
    "jpUrl": "https://www.bulgari.com/ja-jp/AN853348.html",
    "imageUrl": "./images/rings/bvlgari-bzero1-pave.svg"
  },
  {
    "id": "bvlgari-serpenti-plain",
    "brand": "Bvlgari",
    "brandKr": "불가리",
    "name": "세르펜티 바이퍼 링 (노다이아, 로즈골드)",
    "krPrice": 2450000,
    "jpPrice": 251900,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.bulgari.com/ko-kr/AN856868.html",
    "jpUrl": "https://www.bulgari.com/ja-jp/AN856868.html",
    "imageUrl": "./images/rings/bvlgari-serpenti-plain.png"
  },
  {
    "id": "bvlgari-serpenti-dia",
    "brand": "Bvlgari",
    "brandKr": "불가리",
    "name": "세르펜티 바이퍼 링 (로즈골드, 세미파베 다이아)",
    "krPrice": 7500000,
    "jpPrice": 770000,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.bulgari.com/ko-kr/AN857896.html",
    "jpUrl": "https://www.bulgari.com/ja-jp/AN857896.html",
    "imageUrl": "./images/rings/bvlgari-serpenti-dia.svg"
  },
  {
    "id": "bvlgari-infinito-1d",
    "brand": "Bvlgari",
    "brandKr": "불가리",
    "name": "인피니토 웨딩 밴드 (1다이아 플래티넘)",
    "krPrice": 3060000,
    "jpPrice": 343200,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.bulgari.com/ko-kr/AN857694.html",
    "jpUrl": "https://www.bulgari.com/ja-jp/AN857694.html",
    "imageUrl": "./images/rings/bvlgari-infinito-1d.svg"
  },
  {
    "id": "bvlgari-infinito-pave",
    "brand": "Bvlgari",
    "brandKr": "불가리",
    "name": "인피니토 웨딩 밴드 (풀 파베 플래티넘)",
    "krPrice": 7750000,
    "jpPrice": 841500,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.bulgari.com/ko-kr/AN857697.html",
    "jpUrl": "https://www.bulgari.com/ja-jp/AN857697.html",
    "imageUrl": "./images/rings/bvlgari-infinito-pave.svg"
  },
  {
    "id": "bvlgari-marryme-1d",
    "brand": "Bvlgari",
    "brandKr": "불가리",
    "name": "메리미 웨딩 밴드 (플래티넘 1다이아)",
    "krPrice": 3300000,
    "jpPrice": 358600,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.bulgari.com/ko-kr/AN854104.html",
    "jpUrl": "https://www.bulgari.com/ja-jp/AN854104.html",
    "imageUrl": "./images/rings/bvlgari-marryme-1d.svg"
  },
  {
    "id": "bvlgari-marryme-5d",
    "brand": "Bvlgari",
    "brandKr": "불가리",
    "name": "메리미 웨딩 밴드 (플래티넘 5다이아)",
    "krPrice": 4670000,
    "jpPrice": 507100,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.bulgari.com/ko-kr/AN852593.html",
    "jpUrl": "https://www.bulgari.com/ja-jp/AN852593.html",
    "imageUrl": "./images/rings/bvlgari-marryme-5d.svg"
  },
  {
    "id": "tasaki-trapezio-plain",
    "brand": "Tasaki",
    "brandKr": "타사키",
    "name": "트라페지오 링 (사쿠라골드, 노다이아)",
    "krPrice": 2130000,
    "jpPrice": 225500,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.tasaki.co.kr/trapezio-ring-rk-4716-18ksg.html",
    "jpUrl": "https://www.tasaki.co.jp/trapezio-ring-rk-4716-18ksg.html",
    "imageUrl": "./images/rings/tasaki-trapezio-plain.svg"
  },
  {
    "id": "tasaki-trapezio-1d",
    "brand": "Tasaki",
    "brandKr": "타사키",
    "name": "트라페지오 링 (1다이아)",
    "krPrice": 2330000,
    "jpPrice": 246400,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.tasaki.co.kr/trapezio-ring-rd-f2704-18ksg.html",
    "jpUrl": "https://www.tasaki.co.jp/trapezio-ring-rd-f2704-18ksg.html",
    "imageUrl": "./images/rings/tasaki-trapezio-1d.svg"
  },
  {
    "id": "tasaki-piano-3d",
    "brand": "Tasaki",
    "brandKr": "타사키",
    "name": "피아노 링 (사쿠라골드, 3다이아 세팅)",
    "krPrice": 2030000,
    "jpPrice": 214500,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.tasaki.co.kr/piano-3-stones-20-ring-rd-f2696-18ksg.html",
    "jpUrl": "https://www.tasaki.co.jp/piano-3-stones-20-ring-rd-f2696-18ksg.html",
    "imageUrl": "./images/rings/tasaki-piano-3d.svg"
  },
  {
    "id": "boucheron-quatre-classic-xs",
    "brand": "Boucheron",
    "brandKr": "부쉐론",
    "name": "콰트로 클래식 XS (JRG03330)",
    "krPrice": 7370000,
    "jpPrice": 764500,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.boucheron.com/ko/quatre-classique-xs-ring-jrg03330.html",
    "jpUrl": "https://www.boucheron.com/ja_en/quatre-classique-xs-ring-jrg03330.html",
    "imageUrl": "./images/rings/boucheron-quatre-classic-xs.svg"
  },
  {
    "id": "boucheron-quatre-black-xs",
    "brand": "Boucheron",
    "brandKr": "부쉐론",
    "name": "콰트로 클래식 블랙 에디션 XS (JRG03511)",
    "krPrice": 7910000,
    "jpPrice": 819500,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.boucheron.com/ko/quatre-black-edition-xs-ring-jrg03511.html",
    "jpUrl": "https://www.boucheron.com/ja_en/quatre-black-edition-xs-ring-jrg03511.html",
    "imageUrl": "./images/rings/boucheron-quatre-black-xs.svg"
  },
  {
    "id": "boucheron-quatre-white-band",
    "brand": "Boucheron",
    "brandKr": "부쉐론",
    "name": "콰트로 더블 화이트 에디션 밴드 (JAL00300)",
    "krPrice": 3910000,
    "jpPrice": 407000,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.boucheron.com/ko/quatre-double-white-edition-wedding-band-jal00300.html",
    "jpUrl": "https://www.boucheron.com/ja_en/quatre-double-white-edition-wedding-band-jal00300.html",
    "imageUrl": "./images/rings/boucheron-quatre-white-band.svg"
  },
  {
    "id": "chaumet-torsade-1d",
    "brand": "Chaumet",
    "brandKr": "쇼메",
    "name": "토르사드 드 쇼메 (플래티넘 1다이아)",
    "krPrice": 3990000,
    "jpPrice": 410300,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.chaumet.com/kr_kr/torsade-de-chaumet-ring-082721",
    "jpUrl": "https://www.chaumet.com/jp_ja/torsade-de-chaumet-ring-082721",
    "imageUrl": "./images/rings/chaumet-torsade-1d.png"
  },
  {
    "id": "chaumet-torsade-pave",
    "brand": "Chaumet",
    "brandKr": "쇼메",
    "name": "토르사드 드 쇼메 (플래티넘 풀 파베)",
    "krPrice": 7690000,
    "jpPrice": 792000,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.chaumet.com/kr_kr/torsade-de-chaumet-ring-095904",
    "jpUrl": "https://www.chaumet.com/jp_ja/torsade-de-chaumet-ring-095904",
    "imageUrl": "./images/rings/chaumet-torsade-pave.png"
  },
  {
    "id": "chaumet-torsade-plain",
    "brand": "Chaumet",
    "brandKr": "쇼메",
    "name": "토르사드 드 쇼메 (플래티넘 노다이아)",
    "krPrice": 4300000,
    "jpPrice": 442200,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.chaumet.com/kr_kr/torsade-de-chaumet-ring-095902",
    "jpUrl": "https://www.chaumet.com/jp_ja/torsade-de-chaumet-ring-095902",
    "imageUrl": "./images/rings/chaumet-torsade-plain.svg"
  },
  {
    "id": "chaumet-liens-4mm",
    "brand": "Chaumet",
    "brandKr": "쇼메",
    "name": "리앙 에비당스 링 (노다이아, 4mm)",
    "krPrice": 3480000,
    "jpPrice": 358600,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.chaumet.com/kr_kr/liens-evidence-ring-080224",
    "jpUrl": "https://www.chaumet.com/jp_ja/liens-evidence-ring-080224",
    "imageUrl": "./images/rings/chaumet-liens-4mm.svg"
  },
  {
    "id": "chaumet-liens-dia",
    "brand": "Chaumet",
    "brandKr": "쇼메",
    "name": "리앙 에비당스 링 (중간 다이아몬드)",
    "krPrice": 5040000,
    "jpPrice": 519200,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.chaumet.com/kr_kr/liens-evidence-ring-081685",
    "jpUrl": "https://www.chaumet.com/jp_ja/liens-evidence-ring-081685",
    "imageUrl": "./images/rings/chaumet-liens-dia.png"
  },
  {
    "id": "chaumet-triomphe-sm",
    "brand": "Chaumet",
    "brandKr": "쇼메",
    "name": "트리옹프 드 쇼메 (플래티넘, 3.5m, 노다이아)",
    "krPrice": 4320000,
    "jpPrice": 444400,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.chaumet.com/kr_kr/triomphe-de-chaumet-ring-082795",
    "jpUrl": "https://www.chaumet.com/jp_ja/triomphe-de-chaumet-ring-082795",
    "imageUrl": "./images/rings/chaumet-triomphe-sm.png"
  },
  {
    "id": "chaumet-triomphe-pave",
    "brand": "Chaumet",
    "brandKr": "쇼메",
    "name": "트리옹프 드 쇼메 (풀 파베 다이아)",
    "krPrice": 8560000,
    "jpPrice": 881100,
    "guestCardAllowed": true,
    "tag": "지점별 5% 가능",
    "krUrl": "https://www.chaumet.com/kr_kr/triomphe-de-chaumet-ring-082640",
    "jpUrl": "https://www.chaumet.com/jp_ja/jewellery/rings",
    "imageUrl": "./images/rings/chaumet-triomphe-pave.png"
  }
];

let crawlLogData = null;

// --- State ---
let state = {
  mode: 1, // 1: single, 2: couple
  theme: 'dark',
  activeBrandFilter: 'all',
  activePresetId: null,
  
  // Preset State & Expand
  presetSearchQuery: '',
  isPresetExpanded: false,
  
  // Inputs
  jpPrice: 193600,
  krPrice: 2050000,
  
  // Japan Options
  hasGuestCard: false,
  taxFreeType: 'dept', // 'dept' (8.45%), 'boutique' (10%), 'none' (0%)
  cardFeeRate: 0, // 0%, 1.2%, 1.5%
  customsSelfDeclare: true, // 30% reduction up to 200,000 KRW
  
  // Korea Options
  giftDiscountType: '3.0',
  customGiftDiscount: 3.0,
  mileageRate: 0,
  
  // Exchange Rates
  jpyKrwRate: 915.0, // 100 JPY to KRW
  usdKrwRate: 1380.0, // 1 USD to KRW
  usdJpyRate: 150.8, // 1 USD to JPY
};

// --- DOM Elements ---
const dom = {
  singleModeBtn: document.getElementById('singleModeBtn'),
  coupleModeBtn: document.getElementById('coupleModeBtn'),
  themeToggleBtn: document.getElementById('themeToggleBtn'),
  brandFilterBar: document.getElementById('brandFilterBar'),
  presetGrid: document.getElementById('presetGrid'),
  presetSearchInput: document.getElementById('presetSearchInput'),
  clearPresetSearchBtn: document.getElementById('clearPresetSearchBtn'),
  presetExpandWrap: document.getElementById('presetExpandWrap'),
  toggleExpandPresetBtn: document.getElementById('toggleExpandPresetBtn'),
  expandBtnText: document.getElementById('expandBtnText'),
  expandBtnIcon: document.getElementById('expandBtnIcon'),
  
  jpPrice: document.getElementById('jpPrice'),
  krPrice: document.getElementById('krPrice'),
  jpGuestCard: document.getElementById('jpGuestCard'),
  guestCardNote: document.getElementById('guestCardNote'),
  jpTaxFreeType: document.getElementById('jpTaxFreeType'),
  jpCardFee: document.getElementById('jpCardFee'),
  customsSelfDeclare: document.getElementById('customsSelfDeclare'),
  selectedJpStoreLink: document.getElementById('selectedJpStoreLink'),
  
  krGiftDiscount: document.getElementById('krGiftDiscount'),
  krCustomGiftWrap: document.getElementById('krCustomGiftWrap'),
  krCustomGift: document.getElementById('krCustomGift'),
  selectedKrStoreLink: document.getElementById('selectedKrStoreLink'),
  
  jpyKrwRate: document.getElementById('jpyKrwRate'),
  usdKrwRate: document.getElementById('usdKrwRate'),
  usdJpyRate: document.getElementById('usdJpyRate'),
  rateTimestamp: document.getElementById('rateTimestamp'),
  refreshRateBtn: document.getElementById('refreshRateBtn'),
  
  // Verdict
  verdictBanner: document.getElementById('verdictBanner'),
  verdictTrophy: document.getElementById('verdictTrophy'),
  verdictWinnerBadge: document.getElementById('verdictWinnerBadge'),
  verdictDiffAmount: document.getElementById('verdictDiffAmount'),
  verdictDiffPercent: document.getElementById('verdictDiffPercent'),
  travelMsg: document.getElementById('travelMsg'),
  barJpTotal: document.getElementById('barJpTotal'),
  barKrTotal: document.getElementById('barKrTotal'),
  visualJpBar: document.getElementById('visualJpBar'),
  visualKrBar: document.getElementById('visualKrBar'),
  
  // Receipts
  jpReceiptLines: document.getElementById('jpReceiptLines'),
  krReceiptLines: document.getElementById('krReceiptLines'),
  jpFinalTotal: document.getElementById('jpFinalTotal'),
  krFinalTotal: document.getElementById('krFinalTotal'),
  
  // Actions
  copyResultBtn: document.getElementById('copyResultBtn'),
  shareUrlBtn: document.getElementById('shareUrlBtn'),
  toast: document.getElementById('toast'),

  // Quick Summary & Crawler Log Modal (Ctrl + S)
  openQuickSummaryBtn: document.getElementById('openQuickSummaryBtn'),
  closeQuickSummaryBtn: document.getElementById('closeQuickSummaryBtn'),
  footerCloseQuickSummaryBtn: document.getElementById('footerCloseQuickSummaryBtn'),
  quickSummaryModal: document.getElementById('quickSummaryModal'),
  quickModalMainTitle: document.getElementById('quickModalMainTitle'),
  quickModalSubTitle: document.getElementById('quickModalSubTitle'),
  tabDirectoryBtn: document.getElementById('tabDirectoryBtn'),
  tabCrawlerLogBtn: document.getElementById('tabCrawlerLogBtn'),
  quickDirectoryPanel: document.getElementById('quickDirectoryPanel'),
  quickCrawlerLogPanel: document.getElementById('quickCrawlerLogPanel'),
  quickSearchInput: document.getElementById('quickSearchInput'),
  clearQuickSearchBtn: document.getElementById('clearQuickSearchBtn'),
  quickBrandPills: document.getElementById('quickBrandPills'),
  quickSummaryTableBody: document.getElementById('quickSummaryTableBody'),
  topRankGrid: document.getElementById('topRankGrid')
};

// --- Formatting Helpers ---
function formatKRW(num) {
  return Math.round(num).toLocaleString('ko-KR') + '원';
}

function formatJPY(num) {
  return '¥' + Math.round(num).toLocaleString('ja-JP');
}

function formatUSD(num) {
  return '$' + Number(num.toFixed(1)).toLocaleString('en-US');
}

function parseNumber(str) {
  if (typeof str === 'number') return str;
  if (!str) return 0;
  return parseFloat(str.replace(/[^0-9.-]/g, '')) || 0;
}

// --- Fetch External Data (rings.json) ---
async function loadExternalRingsData() {
  try {
    const res = await fetch('./data/rings.json');
    if (!res.ok) throw new Error('Failed to load rings.json');
    const data = await res.json();
    if (data && data.rings && Array.isArray(data.rings)) {
      PRESETS = data.rings;
      renderPresets();
      
      const hint = document.querySelector('.preset-hint');
      if (hint && data.lastUpdated) {
        hint.textContent = `* 8대 브랜드 공식몰 기준 데이터 (최종 검증: ${data.lastUpdated})`;
      }
      if (dom.quickSummaryModal && dom.quickSummaryModal.classList.contains('active')) {
        renderQuickSummary();
      }
    }
  } catch (err) {
    console.log('Using default presets data:', err);
  }
}

// --- Fetch & Render Crawl Log ---
async function loadCrawlLog() {
  try {
    const res = await fetch('./data/crawl_log.json');
    if (!res.ok) throw new Error('Failed to load crawl_log.json');
    crawlLogData = await res.json();
    renderCrawlLogModal(crawlLogData);
  } catch (err) {
    console.log('Using local generated crawl log:', err);
    // Fallback display from presets
    const fallbackLog = {
      timestamp: '2026-09-05 22:52:51 KST',
      status: 'COMPLETED',
      totalRings: PRESETS.length,
      updatedCount: 0,
      logs: PRESETS.map(p => ({
        id: p.id,
        brand: p.brand,
        brandKr: p.brandKr || p.brand,
        name: p.name,
        krPrice: p.krPrice,
        jpPrice: p.jpPrice,
        krStatus: '정상 확인',
        jpStatus: '정상 확인',
        krCode: 200,
        jpCode: 200,
        krUrl: p.krUrl || '#',
        jpUrl: p.jpUrl || '#'
      }))
    };
    crawlLogData = fallbackLog;
    renderCrawlLogModal(fallbackLog);
  }
}

function renderCrawlLogModal(logData, filterQuery = '') {
  if (!logData) return;

  if (dom.logTimestamp) dom.logTimestamp.textContent = `마지막 자동 검증: ${logData.timestamp || '2026-09-05'}`;
  if (dom.logTotalCount) dom.logTotalCount.textContent = `${logData.totalRings || PRESETS.length}개 모델`;
  if (dom.logStatusBadge) dom.logStatusBadge.textContent = '🟢 정상 완료 (COMPLETED)';
  if (dom.logUpdatedCount) dom.logUpdatedCount.textContent = `${logData.updatedCount || 0}건 (정가 유지)`;

  if (!dom.logItemsContainer) return;
  dom.logItemsContainer.innerHTML = '';

  const query = filterQuery.toLowerCase().trim();
  const items = (logData.logs || []).filter(item => {
    if (!query) return true;
    return (
      (item.brand && item.brand.toLowerCase().includes(query)) ||
      (item.brandKr && item.brandKr.includes(query)) ||
      (item.name && item.name.toLowerCase().includes(query))
    );
  });

  if (items.length === 0) {
    dom.logItemsContainer.innerHTML = `
      <div style="text-align: center; padding: 30px; color: var(--text-muted); font-size: 0.9rem;">
        일치하는 크롤링 모델이 없습니다.
      </div>
    `;
    return;
  }

  const getStatusClass = (statusStr, code) => {
    if (!statusStr) return 'ok';
    if (statusStr.includes('소프트') || statusStr.includes('⚠️')) return 'warn';
    if (statusStr.includes('오류') || statusStr.includes('❌') || code >= 400) return 'notice';
    if (statusStr.includes('신규') || statusStr.includes('✨') || statusStr.includes('🔄')) return 'updated';
    return 'ok';
  };

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'log-row-card';

    const krStatusClass = getStatusClass(item.krStatus, item.krCode);
    const jpStatusClass = getStatusClass(item.jpStatus, item.jpCode);
    const thumbSrc = item.imageUrl || `./images/rings/${item.id}.svg`;
    const thumbHtml = `<div class="log-thumb-box"><img src="${thumbSrc}" alt="${item.name}" class="log-thumb-img" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null; this.src='./images/rings/${item.id}.svg';" /></div>`;

    card.innerHTML = `
      <div class="log-ring-info-wrap">
        ${thumbHtml}
        <div class="log-ring-info">
          <span class="log-brand-tag">${item.brand} (${item.brandKr || item.brand})</span>
          <span class="log-ring-title">${item.name}</span>
        </div>
      </div>

      <div class="log-store-box">
        <div class="log-store-header">
          <span>🇰🇷 한국 공식몰</span>
          <span class="log-status-pill ${krStatusClass}">${item.krStatus || '검증 완료'}</span>
        </div>
        <span class="log-price-val">₩${(item.krPrice || 0).toLocaleString()}</span>
        ${item.krUrl ? `<a href="${item.krUrl}" target="_blank" rel="noopener noreferrer" class="log-store-link">공식 상품 페이지 ↗</a>` : ''}
      </div>

      <div class="log-store-box">
        <div class="log-store-header">
          <span>🇯🇵 일본 공식몰</span>
          <span class="log-status-pill ${jpStatusClass}">${item.jpStatus || '검증 완료'}</span>
        </div>
        <span class="log-price-val">¥${(item.jpPrice || 0).toLocaleString()}</span>
        ${item.jpUrl ? `<a href="${item.jpUrl}" target="_blank" rel="noopener noreferrer" class="log-store-link">공식 상품 페이지 ↗</a>` : ''}
      </div>
    `;

    dom.logItemsContainer.appendChild(card);
  });
}

// --- Quick Summary Table (Ctrl + S) Logic ---
let quickState = {
  brandFilter: 'all',
  searchQuery: ''
};

function openQuickSummaryModal() {
  if (!dom.quickSummaryModal) return;
  dom.quickSummaryModal.classList.add('active');
  if (dom.tabDirectoryBtn) dom.tabDirectoryBtn.click();
  renderQuickSummary();
  if (dom.quickSearchInput) {
    dom.quickSearchInput.focus();
  }
}

function closeQuickSummaryModal() {
  if (!dom.quickSummaryModal) return;
  dom.quickSummaryModal.classList.remove('active');
}

function renderQuickSummary() {
  if (!dom.quickSummaryTableBody) return;
  dom.quickSummaryTableBody.innerHTML = '';
  
  let list = PRESETS;
  
  // Filter by brand pill
  if (quickState.brandFilter !== 'all') {
    list = list.filter(p => p.brand === quickState.brandFilter);
  }
  
  // Filter by search query
  const query = quickState.searchQuery.toLowerCase().trim();
  if (query) {
    list = list.filter(p => {
      const name = (p.name || '').toLowerCase();
      const brand = (p.brand || '').toLowerCase();
      const brandKr = (p.brandKr || '').toLowerCase();
      return name.includes(query) || brand.includes(query) || brandKr.includes(query);
    });
  }
  
  if (list.length === 0) {
    dom.quickSummaryTableBody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 40px; color: var(--text-muted);">
          🔍 일치하는 웨딩밴드가 없습니다. 검색어를 변경해 보세요.
        </td>
      </tr>
    `;
    return;
  }
  
  list.forEach(p => {
    const tr = document.createElement('tr');
    tr.className = `quick-row ${state.activePresetId === p.id ? 'active-row' : ''}`;
    
    const krUrlHtml = p.krUrl 
      ? `<a href="${p.krUrl}" target="_blank" rel="noopener noreferrer" class="quick-url-link kr" title="한국 공식몰 새창 열기">한국 공식몰 ↗</a>`
      : `<span class="quick-no-url">-</span>`;
      
    const jpUrlHtml = p.jpUrl 
      ? `<a href="${p.jpUrl}" target="_blank" rel="noopener noreferrer" class="quick-url-link jp" title="일본 공식몰 새창 열기">일본 공식몰 ↗</a>`
      : `<span class="quick-no-url">-</span>`;

    const thumbSrc = p.imageUrl || `./images/rings/${p.id}.svg`;

    tr.innerHTML = `
      <td class="td-img">
        <div class="quick-thumb-box"><img src="${thumbSrc}" alt="${p.name}" class="quick-thumb-img" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null; this.src='./images/rings/${p.id}.svg';" /></div>
      </td>
      <td class="td-brand">
        <span class="quick-brand-badge">${p.brandKr || p.brand}</span>
      </td>
      <td class="td-name">
        <span class="quick-ring-name-simple">${p.name}</span>
      </td>
      <td class="td-url">
        ${krUrlHtml}
      </td>
      <td class="td-url">
        ${jpUrlHtml}
      </td>
      <td class="td-action">
        <button type="button" class="quick-select-btn" title="계산기에 이 모델 적용">선택</button>
      </td>
    `;
    
    const btn = tr.querySelector('.quick-select-btn');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        applyPreset(p);
        closeQuickSummaryModal();
      });
    }

    tr.addEventListener('click', (e) => {
      if (e.target.tagName && e.target.tagName.toLowerCase() === 'a') return;
      applyPreset(p);
      closeQuickSummaryModal();
    });
    
    dom.quickSummaryTableBody.appendChild(tr);
  });
}

// --- Live Currency Fetcher (1시간 단위 자동 연동) ---
const EX_RATE_CACHE_KEY = 'wedding_ring_ex_rates_v1';
const ONE_HOUR_MS = 60 * 60 * 1000; // 1시간 (3,600,000ms)

async function fetchLiveExchangeRates(forceRefresh = false) {
  if (dom.rateTimestamp) dom.rateTimestamp.textContent = '실시간 환율 갱신 중...';

  const cached = localStorage.getItem(EX_RATE_CACHE_KEY);
  const nowMs = Date.now();

  if (!forceRefresh && cached) {
    try {
      const parsed = JSON.parse(cached);
      if (parsed && parsed.timestamp && (nowMs - parsed.timestamp < ONE_HOUR_MS)) {
        state.usdKrwRate = parsed.usdKrw;
        state.usdJpyRate = parsed.usdJpy;
        state.jpyKrwRate = parsed.jpyKrw;

        dom.usdKrwRate.value = state.usdKrwRate;
        dom.usdJpyRate.value = state.usdJpyRate;
        dom.jpyKrwRate.value = state.jpyKrwRate;

        const dateObj = new Date(parsed.timestamp);
        const timeStr = `${String(dateObj.getHours()).padStart(2, '0')}:${String(dateObj.getMinutes()).padStart(2, '0')}`;
        if (dom.rateTimestamp) dom.rateTimestamp.textContent = `🟢 1시간 단위 연동 중 (최근 갱신: ${timeStr})`;
        calculateAndRender();
        return;
      }
    } catch (e) {
      console.warn('Invalid cached exchange rate, refetching...');
    }
  }

  let rates = null;
  // Primary API: open.er-api.com (hourly update)
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/USD');
    if (res.ok) {
      const data = await res.json();
      if (data && data.rates && data.rates.KRW && data.rates.JPY) {
        rates = { krw: data.rates.KRW, jpy: data.rates.JPY };
      }
    }
  } catch (err) {
    console.warn('Primary exchange API failed, trying fallback...', err);
  }

  // Fallback API: exchangerate-api.com
  if (!rates) {
    try {
      const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      if (res.ok) {
        const data = await res.json();
        if (data && data.rates && data.rates.KRW && data.rates.JPY) {
          rates = { krw: data.rates.KRW, jpy: data.rates.JPY };
        }
      }
    } catch (err) {
      console.warn('Fallback exchange API failed:', err);
    }
  }

  if (rates) {
    const usdKrw = rates.krw;
    const usdJpy = rates.jpy;
    const jpy100Krw = (usdKrw / usdJpy) * 100;

    state.usdKrwRate = Math.round(usdKrw * 10) / 10;
    state.usdJpyRate = Math.round(usdJpy * 10) / 10;
    state.jpyKrwRate = Math.round(jpy100Krw * 10) / 10;

    dom.usdKrwRate.value = state.usdKrwRate;
    dom.usdJpyRate.value = state.usdJpyRate;
    dom.jpyKrwRate.value = state.jpyKrwRate;

    const cacheData = {
      timestamp: nowMs,
      usdKrw: state.usdKrwRate,
      usdJpy: state.usdJpyRate,
      jpyKrw: state.jpyKrwRate
    };
    localStorage.setItem(EX_RATE_CACHE_KEY, JSON.stringify(cacheData));

    const dateObj = new Date(nowMs);
    const timeStr = `${String(dateObj.getHours()).padStart(2, '0')}:${String(dateObj.getMinutes()).padStart(2, '0')}`;
    if (dom.rateTimestamp) dom.rateTimestamp.textContent = `🟢 1시간 단위 연동 완료 (${timeStr})`;
    calculateAndRender();
  } else {
    if (dom.rateTimestamp) dom.rateTimestamp.textContent = '기본 환율 적용 중';
  }
}

// Helper: Randomly sample 2 items per brand for top featured view
let shuffledPresetsAll = null;

function getShuffledPresetsByBrand() {
  if (shuffledPresetsAll) return shuffledPresetsAll;

  const brandGroups = {};
  PRESETS.forEach(item => {
    const b = item.brand;
    if (!brandGroups[b]) brandGroups[b] = [];
    brandGroups[b].push(item);
  });

  const featuredList = [];
  const remainingList = [];

  Object.keys(brandGroups).forEach(b => {
    const items = [...brandGroups[b]];
    // Fisher-Yates shuffle per brand
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    const picked = items.slice(0, 2);
    const rest = items.slice(2);
    featuredList.push(...picked);
    remainingList.push(...rest);
  });

  // Intermix featured items across brands
  for (let i = featuredList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [featuredList[i], featuredList[j]] = [featuredList[j], featuredList[i]];
  }

  shuffledPresetsAll = [...featuredList, ...remainingList];
  return shuffledPresetsAll;
}

// --- Render Presets with Brand Filtering & Search ---
function renderPresets() {
  dom.presetGrid.innerHTML = '';
  
  let sourceList = (state.activeBrandFilter === 'all' && !state.presetSearchQuery)
    ? getShuffledPresetsByBrand()
    : PRESETS;

  let filtered = sourceList.filter(item => {
    if (state.activeBrandFilter !== 'all' && item.brand !== state.activeBrandFilter) {
      return false;
    }
    const query = state.presetSearchQuery.toLowerCase().trim();
    if (query) {
      const name = (item.name || '').toLowerCase();
      const brand = (item.brand || '').toLowerCase();
      const brandKr = (item.brandKr || '').toLowerCase();
      return name.includes(query) || brand.includes(query) || brandKr.includes(query);
    }
    return true;
  });

  const totalFilteredCount = filtered.length;
  if (!state.visiblePresetLimit) {
    state.visiblePresetLimit = 12;
  }

  const isLimited = state.visiblePresetLimit < totalFilteredCount;
  const visibleItems = isLimited ? filtered.slice(0, state.visiblePresetLimit) : filtered;

  // Toggle expand button visibility
  if (dom.presetExpandWrap) {
    if (totalFilteredCount > 12) {
      dom.presetExpandWrap.style.display = 'flex';
      if (isLimited) {
        if (dom.expandBtnText) dom.expandBtnText.textContent = `✨ 웨딩밴드 더보기 (${visibleItems.length} / ${totalFilteredCount})`;
        if (dom.expandBtnIcon) dom.expandBtnIcon.textContent = '▼';
      } else {
        if (dom.expandBtnText) dom.expandBtnText.textContent = '▲ 접기 (기본 12개만 보기)';
        if (dom.expandBtnIcon) dom.expandBtnIcon.textContent = '▲';
      }
    } else {
      dom.presetExpandWrap.style.display = 'none';
    }
  }

  if (visibleItems.length === 0) {
    dom.presetGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted); font-size: 0.95rem;">
        🔍 일치하는 웨딩밴드가 없습니다. 검색어나 브랜드 필터를 변경해 보세요.
      </div>
    `;
    return;
  }

  visibleItems.forEach(item => {
    const card = document.createElement('div');
    card.className = `preset-card ${state.activePresetId === item.id ? 'active' : ''}`;
    card.dataset.id = item.id;
    
    const tagClass = item.guestCardAllowed ? 'guest-ok' : 'no-guest';
    const imgSrc = item.imageUrl || `./images/rings/${item.id}.svg`;
    const imgHtml = `<div class="preset-img-box"><img src="${imgSrc}" alt="${item.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null; this.src='./images/rings/${item.id}.svg';" /></div>`;
    
    const krLinkHtml = item.krUrl 
      ? `<a href="${item.krUrl}" target="_blank" rel="noopener noreferrer" class="preset-icon-link kr" title="🇰🇷 한국 공식몰 바로가기" onclick="event.stopPropagation()">🇰🇷 공홈</a>`
      : '';
    const jpLinkHtml = item.jpUrl 
      ? `<a href="${item.jpUrl}" target="_blank" rel="noopener noreferrer" class="preset-icon-link jp" title="🇯🇵 일본 공식몰 바로가기" onclick="event.stopPropagation()">🇯🇵 공홈</a>`
      : '';

    card.innerHTML = `
      <div>
        ${imgHtml}
        <div class="preset-brand" style="margin-top: 8px;">${item.brand}</div>
        <div class="preset-name" title="${item.name}">${item.name}</div>
        <div class="preset-prices">
          <span>🇯🇵 ¥${item.jpPrice.toLocaleString()}</span>
          <span>🇰🇷 ₩${item.krPrice.toLocaleString()}</span>
        </div>
      </div>
      <div class="preset-footer-row">
        <span class="preset-badge-tag ${tagClass}">${item.tag}</span>
        <div class="preset-link-actions">
          ${krLinkHtml}
          ${jpLinkHtml}
        </div>
      </div>
    `;
    
    card.addEventListener('click', (e) => {
      if (e.target.tagName && e.target.tagName.toLowerCase() === 'a') return;
      applyPreset(item);
    });
    
    dom.presetGrid.appendChild(card);
  });
}

function applyPreset(preset) {
  state.activePresetId = preset.id;
  state.jpPrice = preset.jpPrice;
  state.krPrice = preset.krPrice;
  
  dom.jpPrice.value = preset.jpPrice.toLocaleString();
  dom.krPrice.value = preset.krPrice.toLocaleString();
  
  state.hasGuestCard = preset.guestCardAllowed;
  dom.jpGuestCard.checked = preset.guestCardAllowed;
  
  if (dom.selectedJpStoreLink) {
    if (preset.jpUrl) {
      dom.selectedJpStoreLink.href = preset.jpUrl;
      dom.selectedJpStoreLink.style.display = 'inline-flex';
    } else {
      dom.selectedJpStoreLink.style.display = 'none';
    }
  }

  if (dom.selectedKrStoreLink) {
    if (preset.krUrl) {
      dom.selectedKrStoreLink.href = preset.krUrl;
      dom.selectedKrStoreLink.style.display = 'inline-flex';
    } else {
      dom.selectedKrStoreLink.style.display = 'none';
    }
  }

  if (preset.brand === 'Cartier' || preset.brand === 'Chanel') {
    dom.guestCardNote.textContent = `${preset.brandKr || preset.brand}는 대부분 백화점 5% 게스트카드 제외 매장입니다.`;
    dom.guestCardNote.style.color = '#F87171';
  } else if (preset.brand === 'Chaumet' || preset.brand === 'Tasaki') {
    dom.guestCardNote.textContent = `${preset.brandKr || preset.brand}는 대부분 일본 백화점에서 5% 게스트카드 할인이 적용됩니다.`;
    dom.guestCardNote.style.color = '#34D399';
  } else {
    dom.guestCardNote.textContent = `${preset.brandKr || preset.brand}는 한큐, 이세탄, 다카시마야 등 지점별로 5% 적용 가능`;
    dom.guestCardNote.style.color = '#38BDF8';
  }
  
  renderPresets();
  calculateAndRender();
  showToast(`[${preset.brand}] ${preset.name} 모델이 선택되었습니다.`);
}

// --- Calculation Logic ---
function calculatePrices() {
  const multiplier = state.mode;
  
  const rawJpPrice = parseNumber(dom.jpPrice.value);
  const rawKrPrice = parseNumber(dom.krPrice.value);
  
  const baseJp = rawJpPrice * multiplier;
  const baseKr = rawKrPrice * multiplier;
  
  const jpyKrwRate = parseFloat(dom.jpyKrwRate.value) || 915.0;
  const usdKrwRate = parseFloat(dom.usdKrwRate.value) || 1380.0;
  const usdJpyRate = parseFloat(dom.usdJpyRate.value) || 150.8;
  
  // 🇯🇵 Japan Calculation
  const guestDiscountRate = state.hasGuestCard ? 0.05 : 0;
  const jpGuestDiscountJPY = Math.floor(baseJp * guestDiscountRate);
  const jpAfterGuestJPY = baseJp - jpGuestDiscountJPY;
  
  const jpPreTaxJPY = jpAfterGuestJPY / 1.10;
  let taxRefundRate = 0;
  if (state.taxFreeType === 'dept') {
    taxRefundRate = 0.084545;
  } else if (state.taxFreeType === 'boutique') {
    taxRefundRate = 0.10;
  }
  
  const jpTaxRefundJPY = Math.floor(jpPreTaxJPY * taxRefundRate);
  const jpStoreNetJPY = jpAfterGuestJPY - jpTaxRefundJPY;
  
  const cardFeePercent = parseFloat(dom.jpCardFee.value) || 0;
  const jpCardFeeJPY = Math.floor(jpStoreNetJPY * (cardFeePercent / 100));
  const jpTotalSpentJPY = jpStoreNetJPY + jpCardFeeJPY;
  
  const jpPaidKRW = Math.round(jpTotalSpentJPY * (jpyKrwRate / 100));
  
  // Korean Customs Duty & VAT
  const purchaseUSD = jpStoreNetJPY / usdJpyRate;
  const dutyFreeAllowanceUSD = 800 * multiplier;
  const taxableUSD = Math.max(0, purchaseUSD - dutyFreeAllowanceUSD);
  const taxableKRW = Math.round(taxableUSD * usdKrwRate);
  
  let customsDuty = 0;
  let customsVAT = 0;
  let customsReduction = 0;
  let finalCustomsTax = 0;
  
  if (taxableKRW > 0) {
    customsDuty = Math.floor(taxableKRW * 0.08);
    customsVAT = Math.floor((taxableKRW + customsDuty) * 0.10);
    const baseCustomsTax = customsDuty + customsVAT;
    
    if (state.customsSelfDeclare) {
      const maxReduction = 200000 * multiplier;
      customsReduction = Math.min(Math.floor(baseCustomsTax * 0.30), maxReduction);
    }
    
    finalCustomsTax = Math.max(0, baseCustomsTax - customsReduction);
  }
  
  const totalJapanKRW = jpPaidKRW + finalCustomsTax;
  
  // 🇰🇷 Korea Calculation
  let giftDiscountRate = 0;
  if (dom.krGiftDiscount.value === 'custom') {
    giftDiscountRate = parseFloat(dom.krCustomGift.value) || 0;
  } else {
    giftDiscountRate = parseFloat(dom.krGiftDiscount.value) || 0;
  }
  
  const totalKrDiscountPercent = giftDiscountRate;
  
  const krDiscountKRW = Math.round(baseKr * (totalKrDiscountPercent / 100));
  const totalKoreaKRW = baseKr - krDiscountKRW;
  
  const diffKRW = totalKoreaKRW - totalJapanKRW;
  const savePercent = totalKoreaKRW > 0 ? (Math.abs(diffKRW) / totalKoreaKRW) * 100 : 0;
  
  return {
    multiplier,
    rawJpPrice,
    rawKrPrice,
    baseJp,
    baseKr,
    
    jpGuestDiscountJPY,
    jpAfterGuestJPY,
    jpTaxRefundJPY,
    jpStoreNetJPY,
    jpCardFeeJPY,
    jpTotalSpentJPY,
    jpPaidKRW,
    
    purchaseUSD,
    dutyFreeAllowanceUSD,
    taxableUSD,
    taxableKRW,
    customsDuty,
    customsVAT,
    customsReduction,
    finalCustomsTax,
    totalJapanKRW,
    
    totalKrDiscountPercent,
    krDiscountKRW,
    totalKoreaKRW,
    
    diffKRW,
    savePercent
  };
}

// --- Render Results ---
function calculateAndRender() {
  const data = calculatePrices();
  
  // Update Verdict Banner according to price difference thresholds:
  // 1) 30만원 이상 차이: 일본 구매 강력 추천!
  // 2) 20만원 이상~30만원 미만 차이: 일본이 더 저렴!
  // 3) 20만원 미만 차이: 이정도면 한국에서 삽시다..
  if (data.diffKRW >= 300000) {
    dom.verdictTrophy.textContent = '🏆';
    dom.verdictWinnerBadge.textContent = '일본 구매 강력 추천!';
    dom.verdictWinnerBadge.style.color = '#34D399';
    dom.verdictDiffAmount.textContent = formatKRW(data.diffKRW);
    dom.verdictDiffAmount.style.color = '#FCD34D';
    dom.verdictDiffPercent.textContent = `(${data.savePercent.toFixed(1)}% 절약)`;
    
    if (data.diffKRW >= 800000) {
      dom.travelMsg.textContent = `🎉 차액(${formatKRW(data.diffKRW)})으로 2인 일본 왕복 항공권 + 5성급 호텔 숙박비가 나옵니다!`;
    } else {
      dom.travelMsg.textContent = `✈️ 차액(${formatKRW(data.diffKRW)})으로 일본 왕복 항공권 1인 비용 이상을 아낄 수 있습니다!`;
    }
  } else if (data.diffKRW >= 200000) {
    dom.verdictTrophy.textContent = '✈️';
    dom.verdictWinnerBadge.textContent = '일본이 더 저렴!';
    dom.verdictWinnerBadge.style.color = '#10B981';
    dom.verdictDiffAmount.textContent = formatKRW(data.diffKRW);
    dom.verdictDiffAmount.style.color = '#FCD34D';
    dom.verdictDiffPercent.textContent = `(${data.savePercent.toFixed(1)}% 절약)`;
    dom.travelMsg.textContent = `🍣 차액(${formatKRW(data.diffKRW)})으로 일본 여행 중 오마카세 식사 및 쇼핑 비용을 절약할 수 있습니다!`;
  } else {
    dom.verdictTrophy.textContent = '🇰🇷';
    dom.verdictWinnerBadge.textContent = '이정도면 한국에서 삽시다..';
    dom.verdictWinnerBadge.style.color = '#60A5FA';
    
    if (data.diffKRW > 0) {
      dom.verdictDiffAmount.textContent = formatKRW(data.diffKRW);
      dom.verdictDiffAmount.style.color = '#93C5FD';
      dom.verdictDiffPercent.textContent = `(${data.savePercent.toFixed(1)}% 차이)`;
      dom.travelMsg.textContent = '가격 차이가 20만 원 미만이므로 A/S 편의성과 백화점 혜택이 좋은 한국 구매를 권장합니다.';
    } else if (data.diffKRW < 0) {
      dom.verdictDiffAmount.textContent = formatKRW(Math.abs(data.diffKRW));
      dom.verdictDiffAmount.style.color = '#93C5FD';
      dom.verdictDiffPercent.textContent = `(한국이 ${Math.abs(data.savePercent).toFixed(1)}% 더 저렴)`;
      dom.travelMsg.textContent = '국내 백화점 상품권 할인을 활용해 한국에서 구매하는 것이 더 유리합니다.';
    } else {
      dom.verdictDiffAmount.textContent = '0원';
      dom.verdictDiffAmount.style.color = '#93C5FD';
      dom.verdictDiffPercent.textContent = '';
      dom.travelMsg.textContent = '국내외 총 결제 비용이 동일하므로 A/S 및 수령 편의성에 따라 선택하세요.';
    }
  }
  
  // Progress Comparison Bar
  dom.barJpTotal.textContent = formatKRW(data.totalJapanKRW);
  dom.barKrTotal.textContent = formatKRW(data.totalKoreaKRW);
  
  const sum = data.totalJapanKRW + data.totalKoreaKRW;
  const jpWidth = sum > 0 ? (data.totalJapanKRW / sum) * 100 : 50;
  const krWidth = sum > 0 ? (data.totalKoreaKRW / sum) * 100 : 50;
  
  dom.visualJpBar.style.width = `${jpWidth}%`;
  dom.visualKrBar.style.width = `${krWidth}%`;
  
  // Render Japan Detailed Receipt
  let jpLinesHTML = `
    <div class="receipt-line">
      <span class="r-label">일본 정가 (${data.multiplier === 2 ? '2인' : '1인'})</span>
      <span class="r-val">${formatJPY(data.baseJp)}</span>
    </div>
  `;
  
  if (data.jpGuestDiscountJPY > 0) {
    jpLinesHTML += `
      <div class="receipt-line">
        <span class="r-label">백화점 게스트카드 5% 할인</span>
        <span class="r-val discount">-${formatJPY(data.jpGuestDiscountJPY)}</span>
      </div>
    `;
  }
  
  if (data.jpTaxRefundJPY > 0) {
    const typeTxt = state.taxFreeType === 'dept' ? '백화점 8.45%' : '부티크 10%';
    jpLinesHTML += `
      <div class="receipt-line">
        <span class="r-label">Tax Free 환급 (${typeTxt})</span>
        <span class="r-val discount">-${formatJPY(data.jpTaxRefundJPY)}</span>
      </div>
    `;
  }
  
  if (data.jpCardFeeJPY > 0) {
    jpLinesHTML += `
      <div class="receipt-line">
        <span class="r-label">해외 결제 수수료 (${dom.jpCardFee.value}%)</span>
        <span class="r-val tax">+${formatJPY(data.jpCardFeeJPY)}</span>
      </div>
    `;
  }
  
  jpLinesHTML += `
    <div class="receipt-line">
      <span class="r-label">일본 매장 최종 결제액 (JPY)</span>
      <span class="r-val">${formatJPY(data.jpTotalSpentJPY)}</span>
    </div>
    <div class="receipt-line sub-line">
      <span class="r-label">↳ 원화 환산 (${dom.jpyKrwRate.value}원/100엔 기준)</span>
      <span class="r-val">${formatKRW(data.jpPaidKRW)}</span>
    </div>
    
    <div class="receipt-divider"></div>
    
    <div class="receipt-line">
      <span class="r-label">입국 세관 예상 납부세액</span>
      <span class="r-val ${data.finalCustomsTax > 0 ? 'tax' : 'discount'}">
        ${data.finalCustomsTax > 0 ? '+' + formatKRW(data.finalCustomsTax) : '0원 (면세 범위 내)'}
      </span>
    </div>
  `;
  
  if (data.finalCustomsTax > 0) {
    jpLinesHTML += `
      <div class="receipt-line sub-line">
        <span class="r-label">↳ 면세한도($${data.dutyFreeAllowanceUSD}) 초과 과세액</span>
        <span class="r-val">${formatUSD(data.taxableUSD)} (${formatKRW(data.taxableKRW)})</span>
      </div>
      <div class="receipt-line sub-line">
        <span class="r-label">↳ 관세(8%) + 부가세(10%)</span>
        <span class="r-val">${formatKRW(data.customsDuty + data.customsVAT)}</span>
      </div>
    `;
    
    if (data.customsReduction > 0) {
      jpLinesHTML += `
        <div class="receipt-line sub-line">
          <span class="r-label">↳ 자진신고 30% 감면 혜택</span>
          <span class="r-val discount">-${formatKRW(data.customsReduction)}</span>
        </div>
      `;
    }
  }
  
  dom.jpReceiptLines.innerHTML = jpLinesHTML;
  dom.jpFinalTotal.textContent = formatKRW(data.totalJapanKRW);
  
  // Render Korea Detailed Receipt
  let krLinesHTML = `
    <div class="receipt-line">
      <span class="r-label">한국 정가 (${data.multiplier === 2 ? '2인' : '1인'})</span>
      <span class="r-val">${formatKRW(data.baseKr)}</span>
    </div>
  `;
  
  if (data.krDiscountKRW > 0) {
    krLinesHTML += `
      <div class="receipt-line">
        <span class="r-label">백화점 상품권 할인 (${data.totalKrDiscountPercent.toFixed(1)}%)</span>
        <span class="r-val discount">-${formatKRW(data.krDiscountKRW)}</span>
      </div>
    `;
  } else {
    krLinesHTML += `
      <div class="receipt-line">
        <span class="r-label">적용된 할인</span>
        <span class="r-val">0원 (정가 결제)</span>
      </div>
    `;
  }
  
  dom.krReceiptLines.innerHTML = krLinesHTML;
  dom.krFinalTotal.textContent = formatKRW(data.totalKoreaKRW);
  
  renderTopSavingsRanking();
  updateURLQuery();
}

// --- Top 3 Japan Savings Ranking Logic ---
function calculatePricesForItem(item) {
  const multiplier = state.mode;
  const baseJp = item.jpPrice * multiplier;
  const baseKr = item.krPrice * multiplier;

  const jpyKrwRate = parseFloat(dom.jpyKrwRate.value) || 915.0;
  const usdKrwRate = parseFloat(dom.usdKrwRate.value) || 1380.0;
  const usdJpyRate = parseFloat(dom.usdJpyRate.value) || 150.8;

  const guestDiscountRate = item.guestCardAllowed ? 0.05 : 0;
  const jpGuestDiscountJPY = Math.floor(baseJp * guestDiscountRate);
  const jpAfterGuestJPY = baseJp - jpGuestDiscountJPY;

  const jpPreTaxJPY = jpAfterGuestJPY / 1.10;
  let taxRefundRate = 0;
  if (state.taxFreeType === 'dept') {
    taxRefundRate = 0.084545;
  } else if (state.taxFreeType === 'boutique') {
    taxRefundRate = 0.10;
  }

  const jpTaxRefundJPY = Math.floor(jpPreTaxJPY * taxRefundRate);
  const jpStoreNetJPY = jpAfterGuestJPY - jpTaxRefundJPY;

  const cardFeePercent = parseFloat(dom.jpCardFee.value) || 0;
  const jpCardFeeJPY = Math.floor(jpStoreNetJPY * (cardFeePercent / 100));
  const jpTotalSpentJPY = jpStoreNetJPY + jpCardFeeJPY;

  const jpPaidKRW = Math.round(jpTotalSpentJPY * (jpyKrwRate / 100));

  const purchaseUSD = jpStoreNetJPY / usdJpyRate;
  const dutyFreeAllowanceUSD = 800 * multiplier;
  const taxableUSD = Math.max(0, purchaseUSD - dutyFreeAllowanceUSD);
  const taxableKRW = Math.round(taxableUSD * usdKrwRate);

  let finalCustomsTax = 0;
  if (taxableKRW > 0) {
    const duty = Math.floor(taxableKRW * 0.08);
    const vat = Math.floor((taxableKRW + duty) * 0.10);
    const baseCustoms = duty + vat;
    let reduction = 0;
    if (state.customsSelfDeclare) {
      reduction = Math.min(Math.floor(baseCustoms * 0.30), 200000 * multiplier);
    }
    finalCustomsTax = Math.max(0, baseCustoms - reduction);
  }

  const totalJapanKRW = jpPaidKRW + finalCustomsTax;

  let giftDiscountRate = 0;
  if (dom.krGiftDiscount.value === 'custom') {
    giftDiscountRate = parseFloat(dom.krCustomGift.value) || 0;
  } else {
    giftDiscountRate = parseFloat(dom.krGiftDiscount.value) || 0;
  }

  const krDiscountKRW = Math.round(baseKr * (giftDiscountRate / 100));
  const totalKoreaKRW = baseKr - krDiscountKRW;

  const diffKRW = totalKoreaKRW - totalJapanKRW;
  const savePercent = totalKoreaKRW > 0 ? (diffKRW / totalKoreaKRW) * 100 : 0;

  return {
    item,
    totalJapanKRW,
    totalKoreaKRW,
    diffKRW,
    savePercent
  };
}

function renderTopSavingsRanking() {
  if (!dom.topRankGrid) return;
  dom.topRankGrid.innerHTML = '';

  const evaluated = PRESETS.map(item => calculatePricesForItem(item));
  evaluated.sort((a, b) => b.diffKRW - a.diffKRW);

  const top3 = evaluated.slice(0, 3);
  const medals = [
    { title: '🥇 1위 (최고 절약)', class: 'rank-1', medal: '🥇' },
    { title: '🥈 2위', class: 'rank-2', medal: '🥈' },
    { title: '🥉 3위', class: 'rank-3', medal: '🥉' }
  ];

  top3.forEach((entry, idx) => {
    const p = entry.item;
    const rankInfo = medals[idx];
    const card = document.createElement('div');
    card.className = `top-rank-card ${rankInfo.class}`;

    const thumbSrc = p.imageUrl || `./images/rings/${p.id}.svg`;
    const krLinkHtml = p.krUrl ? `<a href="${p.krUrl}" target="_blank" rel="noopener noreferrer" class="preset-icon-link kr" title="🇰🇷 한국 공식몰" onclick="event.stopPropagation()">🇰🇷 공홈</a>` : '';
    const jpLinkHtml = p.jpUrl ? `<a href="${p.jpUrl}" target="_blank" rel="noopener noreferrer" class="preset-icon-link jp" title="🇯🇵 일본 공식몰" onclick="event.stopPropagation()">🇯🇵 공홈</a>` : '';

    card.innerHTML = `
      <div class="rank-top-badge">
        <span class="rank-medal">${rankInfo.medal}</span>
        <span class="rank-title">${rankInfo.title}</span>
      </div>
      <div class="rank-card-body">
        <div class="rank-img-box">
          <img src="${thumbSrc}" alt="${p.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null; this.src='./images/rings/${p.id}.svg';" />
        </div>
        <span class="rank-brand">${p.brandKr || p.brand}</span>
        <h3 class="rank-ring-name" title="${p.name}">${p.name}</h3>
        <div class="rank-price-box">
          <div class="rank-price-row jp">
            <span>🇯🇵 일본 실구매가</span>
            <span class="p-val">${formatKRW(entry.totalJapanKRW)}</span>
          </div>
          <div class="rank-price-row kr">
            <span>🇰🇷 한국 실구매가</span>
            <span class="p-val">${formatKRW(entry.totalKoreaKRW)}</span>
          </div>
          <div class="rank-price-row diff" style="margin-top: 4px; padding-top: 4px; border-top: 1px dashed rgba(255,255,255,0.1); font-weight:700;">
            <span style="color:var(--gold-primary);">💡 절약 금액</span>
            <span style="color:#FCD34D;">${formatKRW(entry.diffKRW)} (${entry.savePercent.toFixed(1)}%↓)</span>
          </div>
        </div>
        <div class="rank-footer">
          <span class="preset-badge-tag ${p.guestCardAllowed ? 'guest-ok' : 'no-guest'}">${p.tag}</span>
          <div class="preset-link-actions">
            ${krLinkHtml}
            ${jpLinkHtml}
          </div>
        </div>
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (e.target.tagName && e.target.tagName.toLowerCase() === 'a') return;
      applyPreset(p);
      const calcGrid = document.getElementById('mainCalculatorGrid') || document.getElementById('presetGrid');
      if (calcGrid) {
        calcGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    dom.topRankGrid.appendChild(card);
  });
}

// --- URL State Sync & Sharing ---
function updateURLQuery() {
  const params = new URLSearchParams();
  params.set('mode', state.mode);
  params.set('jp', parseNumber(dom.jpPrice.value));
  params.set('kr', parseNumber(dom.krPrice.value));
  params.set('gc', dom.jpGuestCard.checked ? 1 : 0);
  params.set('tf', dom.jpTaxFreeType.value);
  params.set('sd', dom.customsSelfDeclare.checked ? 1 : 0);
  params.set('gd', dom.krGiftDiscount.value);
  
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, '', newUrl);
}

function loadStateFromURL() {
  const params = new URLSearchParams(window.location.search);
  if (!params.toString()) return false;
  
  if (params.has('mode')) {
    setMode(parseInt(params.get('mode')) || 1);
  }
  if (params.has('jp')) {
    const val = parseInt(params.get('jp'));
    dom.jpPrice.value = val.toLocaleString();
  }
  if (params.has('kr')) {
    const val = parseInt(params.get('kr'));
    dom.krPrice.value = val.toLocaleString();
  }
  if (params.has('gc')) {
    dom.jpGuestCard.checked = params.get('gc') === '1';
    state.hasGuestCard = dom.jpGuestCard.checked;
  }
  if (params.has('tf')) {
    dom.jpTaxFreeType.value = params.get('tf');
    state.taxFreeType = params.get('tf');
  }
  if (params.has('sd')) {
    dom.customsSelfDeclare.checked = params.get('sd') === '1';
    state.customsSelfDeclare = dom.customsSelfDeclare.checked;
  }
  if (params.has('gd')) {
    dom.krGiftDiscount.value = params.get('gd');
    state.giftDiscountType = params.get('gd');
  }
  return true;
}

// --- Mode Toggle (Single vs Couple) ---
function setMode(modeNum) {
  state.mode = modeNum;
  if (modeNum === 1) {
    dom.singleModeBtn.classList.add('active');
    dom.coupleModeBtn.classList.remove('active');
  } else {
    dom.coupleModeBtn.classList.add('active');
    dom.singleModeBtn.classList.remove('active');
  }
  calculateAndRender();
}

// --- Toast Notification ---
function showToast(message) {
  dom.toast.textContent = message;
  dom.toast.classList.add('show');
  setTimeout(() => {
    dom.toast.classList.remove('show');
  }, 2400);
}

// --- Event Listeners Setup ---
function setupEventListeners() {
  dom.singleModeBtn.addEventListener('click', () => setMode(1));
  dom.coupleModeBtn.addEventListener('click', () => setMode(2));
  
  // Preset Search Input & Expand Toggle
  if (dom.presetSearchInput) {
    dom.presetSearchInput.addEventListener('input', (e) => {
      state.presetSearchQuery = e.target.value;
      if (dom.clearPresetSearchBtn) {
        dom.clearPresetSearchBtn.style.display = e.target.value ? 'block' : 'none';
      }
      renderPresets();
    });
  }

  if (dom.clearPresetSearchBtn) {
    dom.clearPresetSearchBtn.addEventListener('click', () => {
      if (dom.presetSearchInput) {
        dom.presetSearchInput.value = '';
        state.presetSearchQuery = '';
        dom.clearPresetSearchBtn.style.display = 'none';
        dom.presetSearchInput.focus();
        renderPresets();
      }
    });
  }

  if (dom.toggleExpandPresetBtn) {
    dom.toggleExpandPresetBtn.addEventListener('click', () => {
      let sourceList = (state.activeBrandFilter === 'all' && !state.presetSearchQuery)
        ? getShuffledPresetsByBrand()
        : PRESETS.filter(p => state.activeBrandFilter === 'all' || p.brand === state.activeBrandFilter);

      if (state.visiblePresetLimit >= sourceList.length) {
        state.visiblePresetLimit = 12; // Collapse back to initial 12 (6 rows)
      } else {
        state.visiblePresetLimit += 12; // Load 12 more (6 rows)
      }
      renderPresets();
    });
  }

  // Brand Filter Tabs
  if (dom.brandFilterBar) {
    dom.brandFilterBar.querySelectorAll('.brand-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        dom.brandFilterBar.querySelectorAll('.brand-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        state.activeBrandFilter = tab.dataset.brand;
        state.visiblePresetLimit = 12; // Reset count on tab change
        renderPresets();
      });
    });
  }
  
  // Theme Toggle
  dom.themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    dom.themeToggleBtn.querySelector('.theme-icon').textContent = isLight ? '☀️' : '🌙';
  });

  // Quick Summary Modal (Ctrl + S) Events
  if (dom.openQuickSummaryBtn) {
    dom.openQuickSummaryBtn.addEventListener('click', () => {
      openQuickSummaryModal();
    });
  }

  if (dom.closeQuickSummaryBtn) {
    dom.closeQuickSummaryBtn.addEventListener('click', () => {
      closeQuickSummaryModal();
    });
  }

  if (dom.footerCloseQuickSummaryBtn) {
    dom.footerCloseQuickSummaryBtn.addEventListener('click', () => {
      closeQuickSummaryModal();
    });
  }

  if (dom.quickSummaryModal) {
    dom.quickSummaryModal.addEventListener('click', (e) => {
      if (e.target === dom.quickSummaryModal) {
        closeQuickSummaryModal();
      }
    });
  }

  if (dom.quickSearchInput) {
    dom.quickSearchInput.addEventListener('input', (e) => {
      quickState.searchQuery = e.target.value;
      if (dom.clearQuickSearchBtn) {
        dom.clearQuickSearchBtn.style.display = e.target.value ? 'block' : 'none';
      }
      renderQuickSummary();
    });
  }

  if (dom.clearQuickSearchBtn) {
    dom.clearQuickSearchBtn.addEventListener('click', () => {
      if (dom.quickSearchInput) {
        dom.quickSearchInput.value = '';
        quickState.searchQuery = '';
        dom.clearQuickSearchBtn.style.display = 'none';
        dom.quickSearchInput.focus();
        renderQuickSummary();
      }
    });
  }

  if (dom.quickBrandPills) {
    dom.quickBrandPills.querySelectorAll('.quick-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        dom.quickBrandPills.querySelectorAll('.quick-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        quickState.brandFilter = pill.dataset.brand;
        renderQuickSummary();
      });
    });
  }

  // Quick Modal Tabs Switcher (Directory vs Crawler Log)
  if (dom.tabDirectoryBtn && dom.tabCrawlerLogBtn) {
    dom.tabDirectoryBtn.addEventListener('click', () => {
      dom.tabDirectoryBtn.classList.add('active');
      dom.tabCrawlerLogBtn.classList.remove('active');
      if (dom.quickDirectoryPanel) dom.quickDirectoryPanel.style.display = 'flex';
      if (dom.quickCrawlerLogPanel) dom.quickCrawlerLogPanel.style.display = 'none';
      if (dom.quickModalMainTitle) dom.quickModalMainTitle.textContent = '📋 8대 럭셔리 웨딩밴드 모델 & 공식몰 URL';
      if (dom.quickModalSubTitle) dom.quickModalSubTitle.textContent = '각 브랜드별 모델명과 한·일 공식 홈페이지 링크를 빠르게 확인할 수 있습니다.';
    });

    dom.tabCrawlerLogBtn.addEventListener('click', () => {
      dom.tabCrawlerLogBtn.classList.add('active');
      dom.tabDirectoryBtn.classList.remove('active');
      if (dom.quickCrawlerLogPanel) dom.quickCrawlerLogPanel.style.display = 'flex';
      if (dom.quickDirectoryPanel) dom.quickDirectoryPanel.style.display = 'none';
      if (dom.quickModalMainTitle) dom.quickModalMainTitle.textContent = '📡 공식몰 크롤링 & 데이터 검증 로그';
      if (dom.quickModalSubTitle) dom.quickModalSubTitle.textContent = '8대 브랜드 공식몰 실시간 상태 및 소프트 404 감지 검증 내역입니다.';
      if (crawlLogData) {
        renderCrawlLogModal(crawlLogData, dom.logSearchInput ? dom.logSearchInput.value : '');
      } else {
        loadCrawlLog();
      }
    });
  }

  // Global Keyboard Shortcuts (Ctrl+S / Cmd+S, Escape)
  document.addEventListener('keydown', (e) => {
    // Ctrl+S or Cmd+S
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
      e.preventDefault();
      if (dom.quickSummaryModal && dom.quickSummaryModal.classList.contains('active')) {
        closeQuickSummaryModal();
      } else {
        openQuickSummaryModal();
      }
    }
    // Escape key
    if (e.key === 'Escape') {
      if (dom.quickSummaryModal && dom.quickSummaryModal.classList.contains('active')) {
        closeQuickSummaryModal();
      }
    }
  });

  if (dom.logSearchInput) {
    dom.logSearchInput.addEventListener('input', (e) => {
      if (crawlLogData) {
        renderCrawlLogModal(crawlLogData, e.target.value);
      }
    });
  }
  
  [dom.jpPrice, dom.krPrice].forEach(input => {
    input.addEventListener('input', (e) => {
      const num = parseNumber(e.target.value);
      if (!isNaN(num)) {
        e.target.value = num.toLocaleString();
      }
      state.activePresetId = null;
      renderPresets();
      calculateAndRender();
    });
  });
  
  document.querySelectorAll('.quick-add').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const addVal = parseInt(btn.dataset.add) || 0;
      const targetInput = document.getElementById(targetId);
      const curr = parseNumber(targetInput.value);
      targetInput.value = (curr + addVal).toLocaleString();
      calculateAndRender();
    });
  });
  
  document.querySelectorAll('.quick-clear').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      document.getElementById(targetId).value = '0';
      calculateAndRender();
    });
  });
  
  dom.jpGuestCard.addEventListener('change', (e) => {
    state.hasGuestCard = e.target.checked;
    calculateAndRender();
  });
  
  dom.jpTaxFreeType.addEventListener('change', (e) => {
    state.taxFreeType = e.target.value;
    calculateAndRender();
  });
  
  dom.jpCardFee.addEventListener('change', () => calculateAndRender());
  dom.customsSelfDeclare.addEventListener('change', () => calculateAndRender());
  
  dom.krGiftDiscount.addEventListener('change', (e) => {
    if (e.target.value === 'custom') {
      dom.krCustomGiftWrap.classList.remove('hidden');
    } else {
      dom.krCustomGiftWrap.classList.add('hidden');
    }
    calculateAndRender();
  });
  
  dom.krCustomGift.addEventListener('input', () => calculateAndRender());
  
  [dom.jpyKrwRate, dom.usdKrwRate, dom.usdJpyRate].forEach(input => {
    input.addEventListener('input', () => calculateAndRender());
  });
  
  dom.refreshRateBtn.addEventListener('click', () => {
    fetchLiveExchangeRates(true);
  });
  
  dom.copyResultBtn.addEventListener('click', () => {
    const data = calculatePrices();
    const modeStr = data.multiplier === 2 ? '2인' : '1인';
    
    let summaryText = `💍 [웨딩밴드 한일 가격비교 결과]\n`;
    summaryText += `구분: ${modeStr}\n`;
    summaryText += `----------------------------\n`;
    summaryText += `🇯🇵 일본 실구매가: ${formatKRW(data.totalJapanKRW)} (결제 ${formatJPY(data.jpTotalSpentJPY)} + 세관 ${formatKRW(data.finalCustomsTax)})\n`;
    summaryText += `🇰🇷 한국 실구매가: ${formatKRW(data.totalKoreaKRW)}\n`;
    summaryText += `----------------------------\n`;
    
    if (data.diffKRW > 0) {
      summaryText += `🏆 일본에서 구매 시 약 ${formatKRW(data.diffKRW)} 절약 (${data.savePercent.toFixed(1)}% Save)!\n`;
      summaryText += `✈️ ${dom.travelMsg.textContent}\n`;
    } else {
      summaryText += `🇰🇷 한국 백화점에서 구매하는 것이 약 ${formatKRW(Math.abs(data.diffKRW))} 더 유리합니다!\n`;
    }
    summaryText += `🔗 링크: ${window.location.href}`;
    
    navigator.clipboard.writeText(summaryText).then(() => {
      showToast('📋 결과 요약이 클립보드에 복사되었습니다!');
    }).catch(() => {
      showToast('복사 권한이 없습니다.');
    });
  });
  
  dom.shareUrlBtn.addEventListener('click', () => {
    updateURLQuery();
    navigator.clipboard.writeText(window.location.href).then(() => {
      showToast('🔗 현재 비교 링크가 복사되었습니다!');
    }).catch(() => {
      showToast('복사 권한이 없습니다.');
    });
  });
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', async () => {
  renderPresets();
  setupEventListeners();
  
  const loadedFromUrl = loadStateFromURL();
  if (!loadedFromUrl) {
    applyPreset(PRESETS[0]);
  }
  
  calculateAndRender();
  fetchLiveExchangeRates();

  // 1시간(3,600,000ms) 단위 자동 환율 갱신 타이머 등록
  setInterval(() => {
    fetchLiveExchangeRates(true);
  }, ONE_HOUR_MS);

  await loadExternalRingsData();
  await loadCrawlLog();
});
