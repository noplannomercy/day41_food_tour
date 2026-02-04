# Design Tokens - Delicious Korea

> Tailwind CSS에 복붙 가능한 디자인 토큰 시스템

---

## 1. Color Palette

### Primary Colors

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#ee3b2b` | 주요 액션, CTA 버튼, 강조 |
| `primary-hover` | `#d63527` | 호버 상태 |
| `primary-light` | `#fee2e0` | 배경 하이라이트 |
| `primary-10` | `rgba(238, 59, 43, 0.1)` | 아이콘 배경 |

### Neutral Colors (Light Mode)

| Token | Value | Usage |
|-------|-------|-------|
| `background` | `#f8f6f6` | 페이지 배경 |
| `surface` | `#ffffff` | 카드, 모달 배경 |
| `surface-hover` | `#f4f0f0` | 호버 배경 |
| `border` | `#e6dcdb` | 기본 테두리 |
| `border-light` | `#f4f0f0` | 연한 테두리 |

### Text Colors (Light Mode)

| Token | Value | Usage |
|-------|-------|-------|
| `text-primary` | `#181211` | 헤드라인, 주요 텍스트 |
| `text-secondary` | `#896561` | 부가 설명, 캡션 |
| `text-muted` | `#b59b98` | 비활성 텍스트 |

### Dark Mode Colors

| Token | Value | Usage |
|-------|-------|-------|
| `background-dark` | `#221210` | 페이지 배경 |
| `surface-dark` | `#2d1a18` | 카드 배경 |
| `surface-dark-alt` | `#1a0d0b` | 대체 카드 배경 |
| `border-dark` | `#3a2a28` | 테두리 |
| `text-dark-muted` | `#c0a8a5` | 부가 텍스트 |

### Semantic Colors

| Token | Value | Usage |
|-------|-------|-------|
| `success` | `#22c55e` | 성공 상태 |
| `warning` | `#f59e0b` | 경고, 별점 |
| `error` | `#ef4444` | 에러 상태 |
| `info` | `#3b82f6` | 정보 알림 |

---

## 2. Typography

### Font Family

```css
/* 영문 + 한글 지원 폰트 스택 */
--font-display: "Plus Jakarta Sans", "Pretendard", "Noto Sans KR", system-ui, sans-serif;
```

### Font Loading (Next.js)

```typescript
// app/layout.tsx
import { Plus_Jakarta_Sans } from 'next/font/google';
import localFont from 'next/font/local';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

// Pretendard 로컬 폰트 (한글)
const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
});
```

### Font Weights

| Token | Value | Usage |
|-------|-------|-------|
| `normal` | `400` | 본문 |
| `medium` | `500` | 네비게이션, 라벨 |
| `semibold` | `600` | 서브헤딩 |
| `bold` | `700` | 버튼, 강조 |
| `extrabold` | `800` | 히어로 헤드라인 |

### Font Sizes

| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `xs` | `12px` | `16px` | 캡션, 태그 |
| `sm` | `14px` | `20px` | 본문 작음, 네비게이션 |
| `base` | `16px` | `24px` | 본문 기본 |
| `lg` | `18px` | `28px` | 본문 크게 |
| `xl` | `20px` | `28px` | 서브헤딩 |
| `2xl` | `24px` | `32px` | 섹션 제목 |
| `3xl` | `30px` | `36px` | 페이지 제목 |
| `4xl` | `40px` | `44px` | 히어로 제목 |
| `5xl` | `48px` | `1` | 히어로 대형 |
| `7xl` | `72px` | `1` | 메인 히어로 |

### Letter Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `tight` | `-0.015em` | 네비게이션 |
| `tighter` | `-0.033em` | 대형 헤드라인 |
| `widest` | `0.1em` | 대문자 라벨 |

---

## 3. Spacing Scale

Tailwind 기본 스케일 사용 + 커스텀 확장

| Token | Value | Usage |
|-------|-------|-------|
| `0` | `0` | - |
| `1` | `4px` | 아이콘 갭 |
| `2` | `8px` | 요소 내부 갭 |
| `3` | `12px` | 카드 내부 패딩 |
| `4` | `16px` | 섹션 내부 갭 |
| `5` | `20px` | - |
| `6` | `24px` | 컴포넌트 갭 |
| `8` | `32px` | 섹션 갭 |
| `10` | `40px` | 페이지 패딩 |
| `12` | `48px` | 섹션 패딩 |
| `16` | `64px` | 대형 섹션 |
| `20` | `80px` | 히어로 패딩 |
| `40` | `160px` | 데스크탑 사이드 패딩 |

---

## 4. Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `DEFAULT` | `4px` | 입력 필드 |
| `md` | `6px` | 작은 버튼 |
| `lg` | `8px` | 버튼, 카드 |
| `xl` | `12px` | 카드, 모달 |
| `2xl` | `16px` | 대형 카드 |
| `full` | `9999px` | 아바타, 태그 |

---

## 5. Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `sm` | `0 1px 2px rgba(0,0,0,0.05)` | 카드 기본 |
| `DEFAULT` | `0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)` | 카드 호버 |
| `md` | `0 4px 6px rgba(0,0,0,0.1)` | 드롭다운 |
| `lg` | `0 10px 15px rgba(0,0,0,0.1)` | 모달, 플로팅 |
| `xl` | `0 20px 25px rgba(0,0,0,0.1)` | 히어로 카드 |
| `primary` | `0 4px 14px rgba(238,59,43,0.25)` | CTA 버튼 |

---

## 6. Transitions

| Token | Value | Usage |
|-------|-------|-------|
| `fast` | `150ms ease` | 호버 상태 |
| `DEFAULT` | `200ms ease` | 색상 변경 |
| `slow` | `300ms ease` | 레이아웃 |
| `transform` | `500ms ease` | 이미지 스케일 |

---

## 7. Tailwind Config (복붙용)

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ee3b2b",
          hover: "#d63527",
          light: "#fee2e0",
          10: "rgba(238, 59, 43, 0.1)",
        },
        background: {
          light: "#f8f6f6",
          dark: "#221210",
        },
        surface: {
          DEFAULT: "#ffffff",
          hover: "#f4f0f0",
          dark: "#2d1a18",
          "dark-alt": "#1a0d0b",
        },
        border: {
          DEFAULT: "#e6dcdb",
          light: "#f4f0f0",
          dark: "#3a2a28",
        },
        text: {
          primary: "#181211",
          secondary: "#896561",
          muted: "#b59b98",
          "dark-muted": "#c0a8a5",
        },
      },
      fontFamily: {
        display: [
          "Plus Jakarta Sans",
          "Pretendard",
          "Noto Sans KR",
          "system-ui",
          "sans-serif"
        ],
      },
      borderRadius: {
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
      },
      boxShadow: {
        primary: "0 4px 14px rgba(238, 59, 43, 0.25)",
      },
      transitionDuration: {
        fast: "150ms",
        DEFAULT: "200ms",
        slow: "300ms",
        transform: "500ms",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};

export default config;
```

---

## 8. CSS Variables (선택적)

```css
:root {
  /* Colors */
  --color-primary: #ee3b2b;
  --color-primary-hover: #d63527;
  --color-background: #f8f6f6;
  --color-surface: #ffffff;
  --color-text-primary: #181211;
  --color-text-secondary: #896561;
  --color-border: #e6dcdb;

  /* Typography - 한글 지원 */
  --font-display: "Plus Jakarta Sans", "Pretendard", "Noto Sans KR", system-ui, sans-serif;

  /* Spacing */
  --space-unit: 4px;

  /* Radius */
  --radius-lg: 8px;
  --radius-xl: 12px;
}

.dark {
  --color-background: #221210;
  --color-surface: #2d1a18;
  --color-text-primary: #ffffff;
  --color-text-secondary: #c0a8a5;
  --color-border: #3a2a28;
}
```