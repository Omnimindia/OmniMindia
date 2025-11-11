# OmniMindia Brand Guidelines

## Brand Identity

OmniMindia represents the convergence of edge computing, cloud infrastructure, and intelligent systems. Our brand conveys **innovation, reliability, and human-centric technology**.

---

## Logo

### Primary Logo

The OmniMindia logo combines three visual elements:
1. **Infinity symbol** - Continuous, scalable infrastructure
2. **Network nodes** - Distributed intelligence
3. **Container grid** - Modern infrastructure

**Files:**
- `frontend/src/assets/logo.svg` (Light backgrounds)
- `frontend/src/assets/logo-dark.svg` (Dark backgrounds)
- `frontend/src/assets/logo.png` (Raster, 512x512)
- `frontend/src/assets/logo-dark.png` (Raster, 512x512)

### Logo Usage

**DO:**
- Use on solid backgrounds
- Maintain clear space (minimum 20px on all sides)
- Scale proportionally
- Use approved color variations

**DON'T:**
- Stretch or distort
- Change colors outside brand palette
- Add effects (shadows, glows, gradients beyond approved)
- Place on busy backgrounds without backdrop

### Clear Space

Minimum clear space equals the height of the "O" in OmniMindia on all sides.

```
┌─────────────────────────────┐
│                             │
│   [  LOGO CLEAR SPACE  ]    │
│                             │
└─────────────────────────────┘
```

---

## Color Palette

### Primary Colors

**Saffron Orange (Brand Primary)**
```css
#FF6A00  /* Hex */
rgb(255, 106, 0)
hsl(25, 100%, 50%)
```

**Orange Light (Gradient End)**
```css
#FFA733  /* Hex */
rgb(255, 167, 51)
hsl(34, 100%, 60%)
```

**Orange Dark (Accents)**
```css
#CC5500  /* Hex */
rgb(204, 85, 0)
hsl(25, 100%, 40%)
```

### Secondary Colors

**Deep Tech Blue (Brand Secondary)**
```css
#002B5C  /* Hex */
rgb(0, 43, 92)
hsl(208, 100%, 18%)
```

**Blue Light (Interactive States)**
```css
#004A99  /* Hex */
rgb(0, 74, 153)
hsl(211, 100%, 30%)
```

**Blue Dark (Depth)**
```css
#001A3D  /* Hex */
rgb(0, 26, 61)
hsl(214, 100%, 12%)
```

### Neutral Colors

**Gray Scale**
```css
#F5F5F5  /* Gray 50  - Backgrounds */
#E5E5E5  /* Gray 100 - Borders */
#CCCCCC  /* Gray 200 - Dividers */
#999999  /* Gray 300 - Disabled text */
#666666  /* Gray 400 - Secondary text */
#333333  /* Gray 500 - Body text */
```

### Gradient Usage

**Primary Gradient (Orange)**
```css
background: linear-gradient(to right, #FF6A00, #FFA733);
background: linear-gradient(135deg, #FF6A00, #FFA733);
```

**Accent Gradient (Orange to Blue)**
```css
background: linear-gradient(to bottom right, #FF6A00, #FFA733, #002B5C);
```

---

## Typography

### Font Families

**UI Text: Inter**
- Source: Google Fonts
- Weights: 300, 400, 500, 600, 700, 800
- Use for: Body text, headings, buttons, navigation

```css
font-family: 'Inter', system-ui, -apple-system, sans-serif;
```

**Code/Console: JetBrains Mono**
- Source: Google Fonts
- Weights: 400, 500, 600
- Use for: Code snippets, console output, technical data

```css
font-family: 'JetBrains Mono', monospace;
```

### Type Scale

```
Heading 1 (H1): 48px / 3rem / font-weight: 700
Heading 2 (H2): 36px / 2.25rem / font-weight: 700
Heading 3 (H3): 30px / 1.875rem / font-weight: 600
Heading 4 (H4): 24px / 1.5rem / font-weight: 600
Heading 5 (H5): 20px / 1.25rem / font-weight: 600

Body Large: 18px / 1.125rem / font-weight: 400
Body Regular: 16px / 1rem / font-weight: 400
Body Small: 14px / 0.875rem / font-weight: 400
Caption: 12px / 0.75rem / font-weight: 400

Button: 16px / 1rem / font-weight: 600
Code: 14px / 0.875rem / font-weight: 400
```

### Line Height

- Headings: 1.2
- Body text: 1.6
- Code: 1.5

---

## UI Components

### Buttons

**Primary Button**
```css
background: linear-gradient(to right, #FF6A00, #FFA733);
color: #FFFFFF;
padding: 12px 24px;
border-radius: 8px;
font-weight: 600;
```

**Secondary Button**
```css
background: #002B5C;
color: #FFFFFF;
padding: 12px 24px;
border-radius: 8px;
font-weight: 600;
```

**Outline Button**
```css
background: transparent;
border: 2px solid #FF6A00;
color: #FF6A00;
padding: 12px 24px;
border-radius: 8px;
font-weight: 600;
```

### Cards

```css
background: #FFFFFF;
border-radius: 12px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
padding: 24px;
```

### Input Fields

```css
border: 1px solid #E5E5E5;
border-radius: 8px;
padding: 12px 16px;
font-size: 16px;
background: #FFFFFF;
```

---

## Voice & Tone

### Brand Voice

**Confident** - We know infrastructure inside and out
**Concise** - No fluff, just value
**Slightly Witty** - Professional but personable
**Human-first** - Technology serves people, not the other way around

### Do's and Don'ts

**DO:**
- Use active voice: "Deploy your app" not "Your app can be deployed"
- Be specific: "60% faster" not "much faster"
- Show, don't just tell: Include metrics and examples
- Respect user's time: Get to the point

**DON'T:**
- Use unnecessary jargon without explanation
- Make unsubstantiated claims
- Be condescending or assume ignorance
- Copy competitor language

### Example Copy

**Good:**
```
"Deploy edge AI in minutes. Process data locally, reduce latency by 90%, 
and keep sensitive information on-device."
```

**Bad:**
```
"Our revolutionary, best-in-class edge AI solution leverages cutting-edge 
paradigms to synergistically optimize your infrastructure."
```

---

## Iconography

### Style

- Outline style, 1.5-2px stroke
- Rounded corners (border-radius: 2px on strokes)
- 24x24 default size
- Use Heroicons or similar for consistency

### Color

- Primary icons: `#FF6A00`
- Secondary icons: `#002B5C`
- Neutral icons: `#666666`
- Active state: `#FFA733`

---

## Imagery

### Photography Style

**Characteristics:**
- Modern, clean environments
- Diverse people interacting with technology
- Natural lighting, slight warm tone
- High contrast, sharp focus

**Avoid:**
- Overly staged or stock-looking
- Dark or moody lighting
- People staring at screens without context
- Generic "tech" imagery (servers in dark rooms)

### Illustrations

**Style:**
- Geometric, clean lines
- Isometric or flat design
- Brand color palette
- Simple, uncluttered

---

## Animation

### Timing

- Micro-interactions: 150-300ms
- Component transitions: 300-500ms
- Page transitions: 500-800ms
- Loading states: 1000-2000ms loop

### Easing

```css
/* Default */
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

/* Enter (from offscreen) */
transition-timing-function: cubic-bezier(0, 0, 0.2, 1);

/* Exit (leave screen) */
transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
```

### Motion Principles

1. **Purposeful** - Animation serves function, not decoration
2. **Snappy** - Quick but not jarring
3. **Natural** - Follows physics (ease-in-out)
4. **Respectful** - Honor `prefers-reduced-motion`

---

## Accessibility

### Contrast Ratios (WCAG AA)

- Body text: Minimum 4.5:1
- Large text (18px+): Minimum 3:1
- UI components: Minimum 3:1

### Focus States

All interactive elements must have visible focus state:
```css
.element:focus-visible {
  outline: 2px solid #FF6A00;
  outline-offset: 2px;
}
```

### Screen Readers

- Use semantic HTML
- Include ARIA labels where needed
- Ensure logical tab order
- Provide text alternatives for images

---

## File Naming Conventions

### Images
```
omnimindia-logo-primary.svg
omnimindia-logo-dark.svg
omnimindia-icon-512x512.png
case-study-warehouse-hero.jpg
```

### Components
```
PascalCase: HeroNucleus.jsx, OmniWidget.jsx
```

### Utilities
```
camelCase: useNucleusAnimation.js, formatDate.js
```

---

## Brand Applications

### Email Signatures

```
[Your Name]
[Job Title]
OmniMindia
www.omnimindia.com

[Logo Image]
```

### Social Media

**Profile Image:** Logo on white or brand gradient background
**Cover Image:** Hero with tagline: "Unified Intelligence for Edge & Cloud"
**Posts:** Use brand colors, Inter font, high-quality images

---

## Questions?

For brand usage questions, contact: brand@omnimindia.com

**Last Updated:** 2025-01-01
**Version:** 1.0
