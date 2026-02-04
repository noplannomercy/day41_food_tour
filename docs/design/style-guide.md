# Style Guide - Delicious Korea

> 톤앤매너 + 레이아웃 패턴 가이드

---

## 1. Brand Tone & Manner

### 브랜드 포지셔닝

**"서울의 맛을 영혼까지 전달하는 프리미엄 푸드 투어"**

| 속성 | 설명 |
|------|------|
| 핵심 가치 | 진정성(Authenticity), 로컬 전문성, 따뜻한 환대 |
| 타겟 | 한국 음식문화에 관심 있는 외국인 여행객 |
| 톤 | 친근하지만 전문적, 열정적이지만 과하지 않음 |

### 비주얼 무드

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│    Warm     ●────────────○─────── Cool              │
│                                                     │
│    Modern   ○────●────────────────── Traditional    │
│                                                     │
│    Bold     ●─────────○──────────── Subtle          │
│                                                     │
│    Playful  ○──────●─────────────── Serious         │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### 컬러 심리

| 컬러 | 의미 | 사용 맥락 |
|------|------|----------|
| **Korean Red** `#ee3b2b` | 열정, 맛, 에너지 | CTA, 강조, 가격 |
| **Warm Cream** `#f8f6f6` | 따뜻함, 편안함, 고급스러움 | 배경 |
| **Deep Brown** `#181211` | 신뢰, 전통, 깊이 | 텍스트 |

---

## 2. Typography Hierarchy

### 폰트 스택 (한글 + 영문)

```
영문: Plus Jakarta Sans (Google Fonts)
한글: Pretendard (권장) 또는 Noto Sans KR

Fallback: system-ui, sans-serif
```

### 헤드라인 스타일

```
Hero Headline (7xl/5xl)
─────────────────────────────────────────────────
font-size: 72px (desktop) / 48px (mobile)
font-weight: 800 (extrabold)
letter-spacing: -0.033em
color: white (on image) / text-primary

예시: "Experience the Authentic Flavors of Seoul"
```

```
Page Title (4xl)
─────────────────────────────────────────────────
font-size: 40px
font-weight: 900 (black)
letter-spacing: -0.033em

예시: "Our Food Tours"
```

```
Section Heading (2xl/3xl)
─────────────────────────────────────────────────
font-size: 28-32px
font-weight: 700 (bold)
letter-spacing: tight

예시: "Featured Food Tours"
```

```
Card Title (lg)
─────────────────────────────────────────────────
font-size: 18px
font-weight: 700 (bold)
line-height: tight

예시: "Traditional Market Adventure"
```

### 본문 스타일

```
Body Large (lg)
─────────────────────────────────────────────────
font-size: 18px
font-weight: 400
line-height: relaxed
color: text-secondary

용도: 히어로 서브텍스트, 설명 문구
```

```
Body Default (base/sm)
─────────────────────────────────────────────────
font-size: 14-16px
font-weight: 400
line-height: normal
color: text-secondary

용도: 카드 설명, 일반 본문
```

```
Label / Caption (xs/sm)
─────────────────────────────────────────────────
font-size: 12-14px
font-weight: 500-700
text-transform: uppercase (optional)
letter-spacing: widest (for uppercase)
color: primary / text-muted

용도: 태그, 메타 정보, 네비게이션
```

---

## 3. Layout Patterns

### 3.1 Page Container

```
┌──────────────────────────────────────────────────────────┐
│                    max-width: 1200px                     │
│                    mx-auto                               │
│                    px-4 md:px-10 lg:px-40                │
└──────────────────────────────────────────────────────────┘
```

**Tailwind:**
```html
<div class="max-w-[1200px] mx-auto px-4 md:px-10">
  <!-- content -->
</div>
```

### 3.2 Hero Section

```
┌──────────────────────────────────────────────────────────┐
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░░░░░░  BACKGROUND IMAGE  ░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░░░░░░  with gradient     ░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                          │
│         ┌─────────────────────────────────┐              │
│         │      HEADLINE TEXT              │              │
│         │      Subheadline text           │              │
│         │                                 │              │
│         │   [Primary CTA]  [Secondary]    │              │
│         └─────────────────────────────────┘              │
│                                                          │
│  min-height: 400-600px  │  rounded-xl (내부 컨테이너)    │
└──────────────────────────────────────────────────────────┘
```

**Gradient Overlay:**
```css
background-image: linear-gradient(
  rgba(0, 0, 0, 0.4) 0%,
  rgba(0, 0, 0, 0.7) 100%
), url("hero-image.jpg");
```

### 3.3 Card Grid

```
Desktop (lg+): 3 columns
┌─────────┐ ┌─────────┐ ┌─────────┐
│  Card   │ │  Card   │ │  Card   │
└─────────┘ └─────────┘ └─────────┘

Tablet (md): 2 columns
┌─────────┐ ┌─────────┐
│  Card   │ │  Card   │
└─────────┘ └─────────┘

Mobile: 1 column
┌─────────────────────┐
│        Card         │
└─────────────────────┘
```

**Tailwind:**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <!-- cards -->
</div>
```

### 3.4 Detail Page (2-Column)

```
┌──────────────────────────────────────────────────────────┐
│                      BREADCRUMB                          │
├────────────────────────────────┬─────────────────────────┤
│                                │                         │
│     MAIN CONTENT               │    SIDEBAR              │
│     (lg:col-span-2)            │    (sticky top-24)      │
│                                │                         │
│     - Hero Image               │    - Booking Card       │
│     - Description              │    - Price              │
│     - Itinerary                │    - Date Picker        │
│     - Map                      │    - CTA Button         │
│                                │    - Quick Info         │
│                                │                         │
├────────────────────────────────┴─────────────────────────┤
│                        FOOTER                            │
└──────────────────────────────────────────────────────────┘
```

**Tailwind:**
```html
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
  <div class="lg:col-span-2"><!-- Main --></div>
  <div class="lg:col-span-1">
    <div class="sticky top-24"><!-- Sidebar --></div>
  </div>
</div>
```

### 3.5 Header (Sticky Navigation)

```
┌──────────────────────────────────────────────────────────┐
│  [Logo]              Nav Links              [CTA Button] │
│                                                          │
│  position: sticky  │  top: 0  │  backdrop-blur-md        │
│  border-bottom: 1px solid border  │  z-50                │
└──────────────────────────────────────────────────────────┘
```

### 3.6 Footer

```
┌──────────────────────────────────────────────────────────┐
│                    4-Column Grid (md+)                   │
├──────────────┬──────────────┬──────────────┬─────────────┤
│    BRAND     │    TOURS     │   COMPANY    │  NEWSLETTER │
│    Logo      │    Links     │   Links      │   Input     │
│    Desc      │              │              │   Button    │
├──────────────┴──────────────┴──────────────┴─────────────┤
│  © Copyright                              Privacy │ Terms │
└──────────────────────────────────────────────────────────┘
```

### 3.7 Google Maps Layout (Tour Detail)

```
┌──────────────────────────────────────────────────────────┐
│  Tour Route                                    [Expand]  │
├──────────────────────────────────────────────────────────┤
│  ┌────────────────────────────────────────────────────┐  │
│  │                                                    │  │
│  │              GOOGLE MAP                            │  │
│  │                                                    │  │
│  │    ●━━━━━━━━━●━━━━━━━━━●━━━━━━━━━●                │  │
│  │    1         2         3         4                 │  │
│  │    Start   Stop 1    Stop 2     End                │  │
│  │                                                    │  │
│  └────────────────────────────────────────────────────┘  │
│  height: 400px  │  rounded-xl  │  overflow-hidden        │
├──────────────────────────────────────────────────────────┤
│  [1] Gwangjang Market (10:00) - Start Point             │
│  [2] Tongin Market (11:30) - Dosirak Experience         │
│  [3] Namdaemun Market (13:00) - Street Food             │
│  [4] Myeongdong (14:30) - End Point                     │
└──────────────────────────────────────────────────────────┘
```

**Tailwind:**
```html
<div class="space-y-4">
  <div class="flex justify-between items-center">
    <h3 class="text-lg font-bold">Tour Route</h3>
    <Button variant="ghost" size="sm">Expand</Button>
  </div>
  
  <div class="rounded-xl overflow-hidden h-[400px]">
    <GoogleMap
      center={{ lat: 37.5665, lng: 126.9780 }}
      zoom={13}
      markers={tourStops}
      polyline={routePath}
    />
  </div>
  
  <div class="space-y-2">
    {stops.map((stop, i) => (
      <div class="flex items-center gap-3 p-3 bg-surface rounded-lg">
        <span class="w-6 h-6 bg-primary text-white rounded-full 
          flex items-center justify-center text-xs font-bold">
          {i + 1}
        </span>
        <div>
          <p class="font-medium">{stop.name}</p>
          <p class="text-sm text-text-secondary">{stop.time} - {stop.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>
```

---

## 4. Component Styling Patterns

### 4.1 Card Pattern

```
┌───────────────────────────────┐
│  ┌─────────────────────────┐  │  ← Image (aspect-4/3)
│  │                         │  │    with hover scale
│  │      [BADGE]            │  │    ← absolute positioned
│  │                         │  │
│  └─────────────────────────┘  │
│                               │
│  Title                  $XX   │  ← flex justify-between
│  Description text...          │  ← line-clamp-2
│                               │
│  ⏱ 3 hrs    👥 Max 8          │  ← meta info
│                               │
│  [ View Details → ]           │  ← CTA button
│                               │
└───────────────────────────────┘

bg: white / surface-dark
border: border-black/5
rounded: xl
shadow: sm → md on hover
padding: p-3 (outer) / p-5 (content)
```

### 4.2 Button Hierarchy

| Type | Style | Usage |
|------|-------|-------|
| **Primary** | `bg-primary text-white font-bold` | 메인 CTA |
| **Secondary** | `bg-white/10 backdrop-blur border border-white/20 text-white` | 보조 액션 (히어로) |
| **Tertiary** | `bg-surface-hover text-text-primary` | 덜 중요한 액션 |
| **Ghost** | `text-primary hover:underline` | 링크 스타일 |

### 4.3 Input Fields

```css
/* Base Input */
.input {
  height: 48px;          /* h-12 */
  padding: 0 16px;       /* px-4 */
  border-radius: 8px;    /* rounded-lg */
  border: 1px solid var(--color-border);
  background: var(--color-surface);
}

.input:focus {
  border-color: var(--color-primary);
  ring: 1px var(--color-primary);
}
```

### 4.4 Badge/Tag Pattern

```
[ BEST SELLER ]

bg: white/90 (on image) or primary
text: primary or white
font-size: 10-12px
font-weight: bold
text-transform: uppercase
letter-spacing: wider
padding: px-2 py-1
border-radius: rounded or rounded-full
```

---

## 5. Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm` | 640px | 모바일 랜드스케이프 |
| `md` | 768px | 태블릿 |
| `lg` | 1024px | 데스크탑 |
| `xl` | 1280px | 와이드 데스크탑 |

### Mobile-First Patterns

```html
<!-- Typography -->
<h1 class="text-4xl md:text-5xl lg:text-7xl">

<!-- Padding -->
<section class="px-4 md:px-10 lg:px-40">

<!-- Grid -->
<div class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

<!-- Navigation -->
<nav class="hidden md:flex">
```

---

## 6. Animation Guidelines

### Hover Effects

| Element | Effect |
|---------|--------|
| Card Image | `scale-110` over `500ms` |
| Button | `brightness-110` or `opacity-90` |
| Link | `text-primary` transition |
| Card Shadow | `shadow-sm → shadow-md` |

### Page Transitions

```css
/* Color transitions */
transition-colors duration-200

/* Layout transitions */
transition-all duration-300

/* Transform transitions */
transition-transform duration-500
```

### Micro-interactions

- Button press: `active:scale-95`
- Focus ring: `focus:ring-1 focus:ring-primary`
- Backdrop blur on header: `backdrop-blur-md`

---

## 7. Dark Mode Strategy

### 자동 전환 클래스

```html
<body class="bg-background-light dark:bg-background-dark">
  <div class="text-text-primary dark:text-white">
    <p class="text-text-secondary dark:text-text-dark-muted">
```

### 컴포넌트별 Dark Mode

| Component | Light | Dark |
|-----------|-------|------|
| Background | `#f8f6f6` | `#221210` |
| Card | `#ffffff` | `#2d1a18` |
| Border | `#e6dcdb` | `#3a2a28` |
| Text Primary | `#181211` | `#ffffff` |
| Text Secondary | `#896561` | `#c0a8a5` |

---

## 8. Accessibility Checklist

- [ ] Color contrast ratio >= 4.5:1 (WCAG AA)
- [ ] Focus states visible on all interactive elements
- [ ] Alt text for all images
- [ ] Semantic HTML structure
- [ ] Keyboard navigation support
- [ ] Touch targets >= 44x44px on mobile

---

## 9. Image Guidelines (CRITICAL)

### Pexels 검색 규칙

> ⚠️ **MUST:** 모든 검색어는 **영문**으로 작성
> ⚠️ **NEVER:** 한글 키워드로 Pexels 검색 금지

### 한글 → 영문 키워드 매핑

| 한글 | Pexels 검색어 | 비고 |
|------|--------------|------|
| 광장시장 | `korean market food stall` | 시장 음식 |
| 비빔밥 | `bibimbap korean rice bowl` | 대표 음식 |
| 삼겹살 | `korean bbq pork belly grill` | 바베큐 |
| 떡볶이 | `tteokbokki korean street food` | 길거리 음식 |
| 김치 | `kimchi fermented vegetables` | 반찬 |
| 불고기 | `bulgogi korean beef` | 고기 요리 |
| 냉면 | `korean cold noodles` | 면 요리 |
| 전 | `korean pancake pajeon` | 전/부침개 |
| 막걸리 | `makgeolli rice wine` | 술 |
| 요리 체험 | `cooking class asian kitchen` | 쿠킹 클래스 |
| 시장 투어 | `asian street market tour` | 투어 |
| 한복 | `hanbok traditional korean dress` | 전통 의상 |
| 서울 | `seoul city skyline` | 도시 |
| 경복궁 | `gyeongbokgung palace korea` | 관광지 |

### 이미지 스타일 가이드

| 용도 | 스타일 | 검색어 예시 |
|------|--------|------------|
| Hero | 넓은 구도, 조명 좋음 | `korean food spread table` |
| Card | 정사각형/4:3, 음식 클로즈업 | `korean bbq closeup` |
| Background | 블러 가능, 분위기 | `korean restaurant interior` |
| Team/Guide | 인물, 밝은 표정 | `asian tour guide smiling` |

### AI 이미지 대체 (Fallback)

Pexels에서 적합한 이미지를 찾지 못할 경우:

```
Midjourney 프롬프트 예시:
"A vibrant Korean street food market stall with colorful tteokbokki 
and sundae, warm lighting, appetizing food photography style, 4:3 aspect ratio"
```

### 이미지 최적화

| 용도 | 권장 크기 | 포맷 |
|------|----------|------|
| Hero | 1920x1080 | WebP |
| Card | 800x600 | WebP |
| Thumbnail | 400x300 | WebP |
| Avatar | 200x200 | WebP |

```typescript
// next.config.js 이미지 최적화
images: {
  domains: ['images.pexels.com'],
  formats: ['image/webp'],
}
```