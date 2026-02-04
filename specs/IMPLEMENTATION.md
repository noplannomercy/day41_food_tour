# IMPLEMENTATION.md - Delicious Korea

> 단계별 구현 가이드. 각 Phase 완료 후 반드시 `npm run build` 검증.

---

## Phase 0: Foundation Setup

### 0.1 Dependencies 설치
```bash
npm install @react-google-maps/api react-day-picker clsx tailwind-merge
npm install -D @tailwindcss/forms @tailwindcss/container-queries
```

### 0.2 Tailwind Config
- `tailwind.config.ts` 생성
- `docs/design/design-tokens.md` → Tailwind config 복사
- CSS Variables 설정

### 0.3 Font Setup
```typescript
// app/layout.tsx
- Plus Jakarta Sans (Google Fonts)
- Pretendard (Local Font for 한글)
```

### 0.4 Utility 함수
```
src/lib/
├── utils.ts          # cn() 함수 (clsx + tailwind-merge)
└── constants.ts      # 상수 정의
```

### 0.5 Base Components
> 상세 스펙: `docs/design/component-specs.md` 참조

```
src/components/
├── ui/
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Select.tsx
│   ├── Textarea.tsx
│   ├── Modal.tsx
│   ├── Badge.tsx
│   └── Icon.tsx
├── layout/
│   ├── Navbar.tsx
│   └── Footer.tsx
└── shared/
    ├── Card.tsx
    ├── Hero.tsx
    └── SectionHeader.tsx
```

### ✅ Phase 0 Checkpoint
```bash
npm run build  # MUST pass with no errors
```

---

## Phase 1: Core Pages (MVP)

### 1.1 Home Page
- **Route:** `/`
- **Reference:** `structure/home_-_delicious_korea/`
- **Sections:**
  - Hero (배경 이미지 + CTA)
  - Featured Tours (3 cards)
  - How It Works (3 steps)
  - Testimonials (horizontal scroll)

### 1.2 Tours Listing
- **Route:** `/tours`
- **Reference:** `structure/our_food_tours/`
- **Features:**
  - Category filter tabs
  - Sort dropdown
  - Tour cards grid (3 columns)
  - Pagination

### 1.3 Tour Detail
- **Route:** `/tours/[slug]`
- **Reference:** `structure/tour_detail__gwangjang_market_tour/`
- **Layout:** 2-column (content + sticky sidebar)
- **Components:**
  - Hero image with badges
  - Itinerary timeline
  - Google Map with route
  - Booking sidebar (DatePicker, GuestSelector)

### 1.4 About & Contact
- **Route:** `/about`
- **Reference:** `structure/about_&_contact_us/`
- **Sections:**
  - Hero
  - Our Story
  - Contact Form
  - Map + Info
  - FAQ Grid

### ✅ Phase 1 Checkpoint
```bash
npm run build  # MUST pass
# Manual: 4개 페이지 네비게이션 테스트
```

---

## Phase 2: Booking Flow

### 2.1 Secure Booking
- **Route:** `/booking`
- **Reference:** `structure/secure_booking/`
- **Features:**
  - Progress bar (3 steps)
  - Customer info form
  - Tour summary sidebar
  - Payment integration placeholder

### 2.2 Manage Booking
- **Route:** `/booking/manage`
- **Reference:** `structure/manage_your_booking/`
- **Features:**
  - Booking lookup form
  - Booking details display
  - Cancel/Modify options

### ✅ Phase 2 Checkpoint
```bash
npm run build
# Manual: 예약 플로우 전체 테스트
```

---

## Phase 3: Content Pages

### 3.1 Meet Our Guides
- **Route:** `/guides`
- **Reference:** `structure/meet_our_guides/`
- **Data:** `data/guides.csv`

### 3.2 Guest Experiences & Gallery
- **Route:** `/reviews`
- **Reference:** `structure/guest_experiences_&_gallery/`
- **Data:** `data/reviews.csv`
- **Components:** TestimonialCard, Image Gallery

### 3.3 FAQ
- **Route:** `/faq`
- **Reference:** `structure/frequently_asked_questions/`
- **Component:** Accordion

### 3.4 Blog
- **Route:** `/blog`
- **Reference:** `structure/korean_food_&_culture_blog/`
- **Features:** Blog card grid, categories

### 3.5 Write Review
- **Route:** `/reviews/write`
- **Reference:** `structure/write_a_review/`

### ✅ Phase 3 Checkpoint
```bash
npm run build
```

---

## Phase 4: Specialty Pages

### 4.1 Cooking Classes
- **Route:** `/cooking-classes`
- **Reference:** `structure/traditional_cooking_classes/`

### 4.2 Gift Experiences
- **Route:** `/gift`
- **Reference:** `structure/gift_food_experiences/`

### 4.3 Corporate Events
- **Route:** `/corporate`
- **Reference:** `structure/corporate_&_group_events/`

### 4.4 Partner With Us
- **Route:** `/partner`
- **Reference:** `structure/partner_with_us/`

### ✅ Phase 4 Checkpoint
```bash
npm run build
```

---

## Phase 5: Utility Pages

### 5.1 Search Results
- **Route:** `/search`
- **Reference:** `structure/search_results/`

### 5.2 404 Page
- **Route:** `not-found.tsx`
- **Reference:** `structure/404_-_page_not_found/`

### 5.3 Legal & Privacy
- **Route:** `/legal`
- **Reference:** `structure/legal_&_privacy_policy/`

### ✅ Phase 5 Checkpoint
```bash
npm run build
npm run lint
```

---

## Data Structure

### data/tours.csv
```csv
id,slug,title,description,price,duration,maxGuests,rating,reviewCount,category,image,badge
1,gwangjang-market,Gwangjang Market Tour,Explore Seoul's oldest market...,65,3,8,4.9,120,market,gwangjang.webp,BEST SELLER
```

### data/guides.csv
```csv
id,name,title,bio,languages,experience,image
1,Kim Min-jun,Lead Food Guide,Passionate about Korean cuisine...,English|Korean|Japanese,8,minjun.webp
```

### data/reviews.csv
```csv
id,tourId,author,country,rating,content,date,avatar
1,1,Sarah M.,United States,5,Amazing experience...,2024-12-15,sarah.webp
```

---

## Image Assets

### 저장 경로
```
public/images/
├── hero/           # Hero backgrounds
├── tours/          # Tour card images
├── guides/         # Guide portraits
├── gallery/        # Guest photos
└── icons/          # Custom icons
```

### Pexels 검색 규칙
> ⚠️ **MUST:** 영문 키워드만 사용
> 참조: `docs/design/style-guide.md` Section 9

| 용도 | 검색어 예시 |
|------|------------|
| Hero | `korean food spread table top view` |
| Tour Card | `korean street food market night` |
| Guide | `asian tour guide smiling portrait` |
| Gallery | `people eating korean bbq restaurant` |

---

## File Structure (Final)

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx              # Home
│   ├── not-found.tsx         # 404
│   ├── tours/
│   │   ├── page.tsx          # Tours listing
│   │   └── [slug]/page.tsx   # Tour detail
│   ├── booking/
│   │   ├── page.tsx          # Secure booking
│   │   └── manage/page.tsx   # Manage booking
│   ├── guides/page.tsx
│   ├── reviews/
│   │   ├── page.tsx          # Gallery
│   │   └── write/page.tsx
│   ├── faq/page.tsx
│   ├── blog/page.tsx
│   ├── cooking-classes/page.tsx
│   ├── gift/page.tsx
│   ├── corporate/page.tsx
│   ├── partner/page.tsx
│   ├── about/page.tsx
│   ├── search/page.tsx
│   └── legal/page.tsx
├── components/
│   ├── ui/
│   ├── layout/
│   ├── shared/
│   └── features/
│       ├── tour/
│       ├── booking/
│       └── review/
├── lib/
│   ├── utils.ts
│   ├── constants.ts
│   └── data.ts              # CSV 파싱 유틸
├── types/
│   └── index.ts             # 타입 정의
└── styles/
    └── globals.css
```

---

## Verification Checklist

| Phase | Pages | Build | Lint |
|-------|-------|-------|------|
| 0 | Components | ✅ | ✅ |
| 1 | Home, Tours, Detail, About | ✅ | ✅ |
| 2 | Booking, Manage | ✅ | ✅ |
| 3 | Guides, Reviews, FAQ, Blog | ✅ | ✅ |
| 4 | Classes, Gift, Corporate, Partner | ✅ | ✅ |
| 5 | Search, 404, Legal | ✅ | ✅ |

**Final Validation:**
```bash
npm run build && npm run lint
# Zero errors required before deployment
```
