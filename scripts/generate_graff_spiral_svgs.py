import math
import os

IMG_DIR = os.path.join(os.path.dirname(__file__), "..", "images", "rings")
os.makedirs(IMG_DIR, exist_ok=True)

def generate_graff_spiral_svg(is_pave=False):
    ring_id = "graff-spiral-pave" if is_pave else "graff-spiral-plain"
    name = "스파이럴 밴드 링 (파베 다이아)" if is_pave else "스파이럴 밴드 링 (노다이아)"
    
    metal_light = "#FFFFFF"
    metal_main = "#D1D5DB"
    metal_dark = "#9CA3AF"
    metal_shadow = "#4B5563"
    
    # Helical spiral path elements wrapping around the ring
    spiral_paths = ""
    for turn in range(4):
        offset_y = turn * 14
        spiral_paths += f'''
        <path d="M 94,{175+offset_y} Q 200,{145+offset_y} 306,{175+offset_y} Q 200,{215+offset_y} 94,{175+offset_y}" fill="none" stroke="{metal_light}" stroke-width="4.5" opacity="0.85" />
        <path d="M 94,{177+offset_y} Q 200,{147+offset_y} 306,{177+offset_y} Q 200,{217+offset_y} 94,{177+offset_y}" fill="none" stroke="{metal_shadow}" stroke-width="2" opacity="0.6" />
        '''

    diamond_sparkles = ""
    if is_pave:
        paves = ""
        for turn in range(3):
            offset_y = turn * 14
            for angle in range(15, 165, 15):
                rad = math.radians(angle)
                dx = 200 + 104 * math.cos(rad)
                dy = (185 + offset_y) + 48 * math.sin(rad)
                paves += f'''
                <g transform="translate({dx:.1f}, {dy:.1f})">
                  <circle cx="0" cy="0" r="3.2" fill="#FFFFFF" />
                  <circle cx="0" cy="0" r="2.2" fill="#E2E8F0" />
                  <path d="M-3.5,0 L3.5,0 M0,-3.5 L0,3.5" stroke="#FFFFFF" stroke-width="0.7" />
                </g>
                '''
        diamond_sparkles = paves

    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <linearGradient id="metalGrad_{ring_id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{metal_light}" />
      <stop offset="30%" stop-color="{metal_main}" />
      <stop offset="70%" stop-color="{metal_dark}" />
      <stop offset="100%" stop-color="{metal_shadow}" />
    </linearGradient>

    <linearGradient id="innerGrad_{ring_id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="{metal_dark}" />
      <stop offset="50%" stop-color="{metal_shadow}" />
      <stop offset="100%" stop-color="{metal_dark}" />
    </linearGradient>

    <radialGradient id="bgGrad_{ring_id}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1E293B" />
      <stop offset="100%" stop-color="#0F172A" />
    </radialGradient>

    <filter id="glow_{ring_id}" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <filter id="sparkle_{ring_id}" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <!-- Dark Luxury Background -->
  <rect width="400" height="400" fill="url(#bgGrad_{ring_id})" rx="24" />

  <!-- Glow Aura -->
  <ellipse cx="200" cy="205" rx="130" ry="70" fill="rgba(209, 213, 219, 0.4)" filter="url(#glow_{ring_id})" opacity="0.6" />

  <!-- Header -->
  <text x="200" y="44" font-family="'Cinzel', 'Georgia', serif" font-size="14" font-weight="700" fill="{metal_light}" letter-spacing="3" text-anchor="middle" opacity="0.9">GRAFF</text>
  <line x1="160" y1="54" x2="240" y2="54" stroke="{metal_main}" stroke-width="1" opacity="0.4" />

  <!-- MAIN RING 3D HELICAL SPIRAL STRUCTURE -->
  <g id="ring_body">
    <!-- Outer Base Body -->
    <path d="M 90,185 A 110,55 0 0,0 310,185 L 310,215 A 110,55 0 0,1 90,215 Z" fill="{metal_shadow}" />
    <path d="M 90,183 A 110,55 0 0,0 310,183 L 310,213 A 110,55 0 0,1 90,213 Z" fill="url(#metalGrad_{ring_id})" />

    <!-- Inner Hole Wall -->
    <ellipse cx="200" cy="183" rx="86" ry="42" fill="url(#innerGrad_{ring_id})" stroke="{metal_dark}" stroke-width="1.5" />
    
    <!-- Top & Bottom Rims -->
    <ellipse cx="200" cy="183" rx="110" ry="55" fill="none" stroke="{metal_light}" stroke-width="2.5" opacity="0.85" />
    <ellipse cx="200" cy="213" rx="110" ry="55" fill="none" stroke="{metal_shadow}" stroke-width="1.5" opacity="0.6" />

    <!-- Graff Distinctive Continuous Spiral Twist Ribbon Overlay -->
    {spiral_paths}

    <!-- Diamond Sparkles for Pave Version -->
    {diamond_sparkles}
  </g>

  <!-- Footer Pill -->
  <g transform="translate(200, 355)">
    <rect x="-140" y="-16" width="280" height="32" rx="16" fill="rgba(15, 23, 42, 0.75)" stroke="{metal_main}" stroke-width="1" />
    <text x="0" y="5" font-family="'Pretendard', sans-serif" font-size="12" font-weight="600" fill="#F8FAFC" text-anchor="middle">{name}</text>
  </g>
</svg>
"""
    return svg

# Write SVG files for plain and pave Graff Spiral rings
plain_svg = generate_graff_spiral_svg(is_pave=False)
pave_svg = generate_graff_spiral_svg(is_pave=True)

with open(os.path.join(IMG_DIR, "graff-spiral-plain.svg"), "w", encoding="utf-8") as f:
    f.write(plain_svg)

with open(os.path.join(IMG_DIR, "graff-spiral-pave.svg"), "w", encoding="utf-8") as f:
    f.write(pave_svg)

print("Generated distinct Graff Spiral Plain and Pave SVGs!")
