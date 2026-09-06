import json
import os
import math

RINGS_PATH = os.path.join(os.path.dirname(__file__), "..", "data", "rings.json")
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "images", "rings")

os.makedirs(OUTPUT_DIR, exist_ok=True)

with open(RINGS_PATH, "r", encoding="utf-8") as f:
    data = json.load(f)

rings = data.get("rings", [])

def get_metal_gradient(brand, name):
    name_lower = name.lower()
    if "로즈" in name or "핑크" in name or "rg" in name_lower or "pg" in name_lower or "beige" in name_lower:
        return {
            "main": "#E8A598",
            "light": "#FCECE9",
            "dark": "#B86B5D",
            "shadow": "#7E3B2F",
            "glow": "rgba(232, 165, 152, 0.4)",
            "type": "rose"
        }
    elif "플래티" in name or "pt" in name_lower or "white" in name_lower or "화이트" in name_lower or "노다이아 플래티넘" in name or "1다이아 플래티넘" in name or "풀 파베 플래티넘" in name:
        return {
            "main": "#D1D5DB",
            "light": "#FFFFFF",
            "dark": "#9CA3AF",
            "shadow": "#4B5563",
            "glow": "rgba(209, 213, 219, 0.4)",
            "type": "platinum"
        }
    else:
        return {
            "main": "#EAB308",
            "light": "#FEF08A",
            "dark": "#CA8A04",
            "shadow": "#854D0E",
            "glow": "rgba(234, 179, 8, 0.4)",
            "type": "gold"
        }

def generate_svg_for_ring(ring):
    ring_id = ring["id"]
    brand = ring["brand"]
    name = ring["name"]
    metal = get_metal_gradient(brand, name)

    has_diamond = "다이아" in name or "dia" in ring_id or "pave" in ring_id or "1d" in ring_id or "3d" in ring_id or "5d" in ring_id
    is_pave = "파베" in name or "pave" in ring_id or "풀 파베" in name
    
    metal_defs = f"""
    <defs>
      <linearGradient id="metalGrad_{ring_id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="{metal['light']}" />
        <stop offset="30%" stop-color="{metal['main']}" />
        <stop offset="70%" stop-color="{metal['dark']}" />
        <stop offset="100%" stop-color="{metal['shadow']}" />
      </linearGradient>

      <linearGradient id="innerGrad_{ring_id}" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="{metal['dark']}" />
        <stop offset="50%" stop-color="{metal['shadow']}" />
        <stop offset="100%" stop-color="{metal['dark']}" />
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
    """

    pattern_elements = ""
    
    if "cartier" in ring_id:
        if "trinity" in ring_id or "vendome" in ring_id:
            pattern_elements = """
            <ellipse cx="200" cy="180" rx="108" ry="52" fill="none" stroke="#E8A598" stroke-width="12" opacity="0.8" />
            <ellipse cx="196" cy="188" rx="108" ry="52" fill="none" stroke="#EAB308" stroke-width="12" opacity="0.85" />
            <ellipse cx="204" cy="196" rx="108" ry="52" fill="none" stroke="#E2E8F0" stroke-width="12" opacity="0.9" />
            """
        elif "love" in ring_id:
            screws = ""
            for angle_deg in [30, 75, 120, 165, 210, 255, 300, 345]:
                rad = math.radians(angle_deg)
                sx = 200 + 105 * math.cos(rad)
                sy = 192 + 50 * math.sin(rad)
                screws += f'''
                <g transform="translate({sx:.1f}, {sy:.1f}) scale(0.6)">
                  <circle cx="0" cy="0" r="7" fill="none" stroke="{metal['shadow']}" stroke-width="1.8" />
                  <line x1="-5" y1="0" x2="5" y2="0" stroke="{metal['shadow']}" stroke-width="1.8" />
                </g>
                '''
            pattern_elements = screws

    elif "tiffany" in ring_id:
        if "milgrain" in ring_id or "together" in ring_id:
            dots = ""
            for i in range(36):
                rad = math.radians(i * 10)
                dx1 = 200 + 108 * math.cos(rad)
                dy1 = 188 + 52 * math.sin(rad)
                dx2 = 200 + 108 * math.cos(rad)
                dy2 = 202 + 52 * math.sin(rad)
                dots += f'<circle cx="{dx1:.1f}" cy="{dy1:.1f}" r="1.5" fill="{metal["light"]}" />'
                dots += f'<circle cx="{dx2:.1f}" cy="{dy2:.1f}" r="1.5" fill="{metal["light"]}" />'
            pattern_elements = dots
        elif "t-narrow" in ring_id:
            pattern_elements = f"""
            <path d="M 120,185 L 140,185 M 130,185 L 130,205" stroke="{metal['light']}" stroke-width="3" />
            <path d="M 260,185 L 280,185 M 270,185 L 270,205" stroke="{metal['light']}" stroke-width="3" />
            """

    elif "chanel" in ring_id:
        grid = ""
        for i in range(16):
            rad = math.radians(i * 22.5)
            x1 = 200 + 108 * math.cos(rad)
            y1 = 188 + 52 * math.sin(rad)
            x2 = 200 + 108 * math.cos(rad + 0.3)
            y2 = 204 + 52 * math.sin(rad + 0.3)
            grid += f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{metal["shadow"]}" stroke-width="1.5" opacity="0.7" />'
        pattern_elements = grid

    elif "chaumet" in ring_id:
        if "bee" in ring_id:
            hexes = ""
            for i in range(12):
                rad = math.radians(i * 30)
                hx = 200 + 106 * math.cos(rad)
                hy = 195 + 50 * math.sin(rad)
                hexes += f'<polygon points="{hx-6},{hy-3} {hx},{hy-6} {hx+6},{hy-3} {hx+6},{hy+3} {hx},{hy+6} {hx-6},{hy+3}" fill="none" stroke="{metal["light"]}" stroke-width="1.2" />'
            pattern_elements = hexes
        elif "torsade" in ring_id:
            twists = ""
            for i in range(20):
                rad = math.radians(i * 18)
                tx1 = 200 + 108 * math.cos(rad)
                ty1 = 188 + 51 * math.sin(rad)
                tx2 = 200 + 104 * math.cos(rad + 0.4)
                ty2 = 204 + 51 * math.sin(rad + 0.4)
                twists += f'<line x1="{tx1:.1f}" y1="{ty1:.1f}" x2="{tx2:.1f}" y2="{ty2:.1f}" stroke="{metal["light"]}" stroke-width="2" />'
            pattern_elements = twists
        elif "liens" in ring_id:
            pattern_elements = f"""
            <path d="M 190,175 L 210,215 M 210,175 L 190,215" stroke="{metal['light']}" stroke-width="4" />
            """

    elif "bvlgari" in ring_id:
        if "serpenti" in ring_id:
            scales = ""
            for i in range(14):
                rad = math.radians(i * 25.7)
                sx = 200 + 107 * math.cos(rad)
                sy = 194 + 50 * math.sin(rad)
                scales += f'<polygon points="{sx-7},{sy} {sx},{sy-7} {sx+7},{sy} {sx},{sy+7}" fill="none" stroke="{metal["light"]}" stroke-width="1.4" />'
            pattern_elements = scales
        elif "bzero1" in ring_id:
            pattern_elements = f"""
            <line x1="100" y1="192" x2="300" y2="192" stroke="{metal['shadow']}" stroke-width="3" stroke-dasharray="6,4" />
            <line x1="100" y1="198" x2="300" y2="198" stroke="{metal['shadow']}" stroke-width="3" stroke-dasharray="6,4" />
            """

    elif "boucheron" in ring_id:
        if "quatre" in ring_id:
            pattern_elements = """
            <ellipse cx="200" cy="186" rx="108" ry="52" fill="none" stroke="#D4AF37" stroke-width="4" />
            <ellipse cx="200" cy="191" rx="108" ry="52" fill="none" stroke="#E2E8F0" stroke-width="4" />
            <ellipse cx="200" cy="196" rx="108" ry="52" fill="none" stroke="#5C3A21" stroke-width="4" />
            <ellipse cx="200" cy="201" rx="108" ry="52" fill="none" stroke="#EAB308" stroke-width="4" />
            """
        elif "facette" in ring_id:
            facets = ""
            for i in range(16):
                rad = math.radians(i * 22.5)
                fx = 200 + 107 * math.cos(rad)
                fy = 194 + 50 * math.sin(rad)
                facets += f'<polygon points="{fx-8},{fy-4} {fx+8},{fy-4} {fx},{fy+6}" fill="{metal["light"]}" opacity="0.3" stroke="{metal["shadow"]}" stroke-width="1" />'
            pattern_elements = facets

    elif "graff" in ring_id:
        if "laurence" in ring_id:
            facets = ""
            for i in range(16):
                rad = math.radians(i * 22.5)
                fx = 200 + 107 * math.cos(rad)
                fy = 194 + 50 * math.sin(rad)
                facets += f'<polygon points="{fx-7},{fy} {fx},{fy-6} {fx+7},{fy} {fx},{fy+6}" fill="{metal["light"]}" opacity="0.4" stroke="{metal["dark"]}" stroke-width="1" />'
            pattern_elements = facets

    elif "tasaki" in ring_id:
        if "piano" in ring_id:
            keys = ""
            for i in range(16):
                rad = math.radians(i * 22.5)
                kx = 200 + 107 * math.cos(rad)
                ky = 194 + 50 * math.sin(rad)
                keys += f'<rect x="{kx-2}" y="{ky-8}" width="4" height="14" fill="{metal["shadow"]}" opacity="0.6" />'
            pattern_elements = keys

    diamond_elements = ""
    if is_pave:
        paves = ""
        for angle in range(10, 170, 12):
            rad = math.radians(angle)
            dx = 200 + 107 * math.cos(rad)
            dy = 196 + 50 * math.sin(rad)
            paves += f'''
            <g transform="translate({dx:.1f}, {dy:.1f})">
              <circle cx="0" cy="0" r="3.5" fill="#FFFFFF" />
              <circle cx="0" cy="0" r="2.5" fill="#E2E8F0" />
              <path d="M-4,0 L4,0 M0,-4 L0,4" stroke="#FFFFFF" stroke-width="0.8" />
            </g>
            '''
        diamond_elements = paves
    elif has_diamond:
        diamond_elements = f"""
        <g transform="translate(200, 245)" filter="url(#sparkle_{ring_id})">
          <polygon points="0,-12 4,-4 12,0 4,4 0,12 -4,4 -12,0 -4,-4" fill="#FFFFFF" />
          <circle cx="0" cy="0" r="5.5" fill="#FFFFFF" />
          <circle cx="0" cy="0" r="3.2" fill="#E0F2FE" />
        </g>
        """

    svg_content = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  {metal_defs}

  <!-- Dark Luxury Background -->
  <rect width="400" height="400" fill="url(#bgGrad_{ring_id})" rx="24" />

  <!-- Subtle Glow Aura behind ring -->
  <ellipse cx="200" cy="205" rx="130" ry="70" fill="{metal['glow']}" filter="url(#glow_{ring_id})" opacity="0.6" />

  <!-- Brand Signature Header -->
  <text x="200" y="44" font-family="'Cinzel', 'Georgia', serif" font-size="14" font-weight="700" fill="{metal['light']}" letter-spacing="3" text-anchor="middle" opacity="0.9">{brand.upper()}</text>
  <line x1="160" y1="54" x2="240" y2="54" stroke="{metal['main']}" stroke-width="1" opacity="0.4" />

  <!-- MAIN RING 3D STRUCTURE -->
  <g id="ring_body">
    <!-- Outer Ring Base Shadow & Body -->
    <path d="M 90,190 A 110,55 0 0,0 310,190 L 310,210 A 110,55 0 0,1 90,210 Z" fill="{metal['shadow']}" />

    <!-- Main Outer Band Wall -->
    <path d="M 90,188 A 110,55 0 0,0 310,188 L 310,208 A 110,55 0 0,1 90,208 Z" fill="url(#metalGrad_{ring_id})" />

    <!-- Inner Ring Hole / Depth Wall -->
    <ellipse cx="200" cy="188" rx="86" ry="42" fill="url(#innerGrad_{ring_id})" stroke="{metal['dark']}" stroke-width="1.5" />
    
    <!-- Top Edge Rim Highlight -->
    <ellipse cx="200" cy="188" rx="110" ry="55" fill="none" stroke="{metal['light']}" stroke-width="2.5" opacity="0.85" />
    <ellipse cx="200" cy="208" rx="110" ry="55" fill="none" stroke="{metal['shadow']}" stroke-width="1.5" opacity="0.6" />
    
    <!-- Brand Patterns -->
    {pattern_elements}

    <!-- Diamonds -->
    {diamond_elements}
  </g>

  <!-- Model Name Footer Pill -->
  <g transform="translate(200, 355)">
    <rect x="-140" y="-16" width="280" height="32" rx="16" fill="rgba(15, 23, 42, 0.75)" stroke="{metal['main']}" stroke-width="1" />
    <text x="0" y="5" font-family="'Pretendard', sans-serif" font-size="12" font-weight="600" fill="#F8FAFC" text-anchor="middle">{name}</text>
  </g>
</svg>
"""
    return svg_content

for ring in rings:
    svg_code = generate_svg_for_ring(ring)
    out_path = os.path.join(OUTPUT_DIR, f"{ring['id']}.svg")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(svg_code)

print(f"Successfully generated {len(rings)} SVG ring images in {OUTPUT_DIR}")
