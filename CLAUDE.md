# CLAUDE.md - Delicious Korea

## Project Overview
외국인 대상 한국 미식 투어 여행사 웹사이트. 서울의 로컬 푸드 투어를 예약하고 체험할 수 있는 플랫폼.

## Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS + CSS Variables
- **Maps:** Google Maps API (@react-google-maps/api)
- **Fonts:** Plus Jakarta Sans (영문) + Pretendard (한글)

## Design System References
```
docs/design/
├── design-tokens.md     # Colors, Typography, Spacing, Shadows
├── style-guide.md       # Tone, Layout Patterns, Image Guidelines
└── component-specs.md   # Navbar, Button, Card, Modal, Footer, Form, Hero, Map
```

## Core Rules

### Styling (CRITICAL)
- **MUST** use design tokens from `design-tokens.md` for all colors, spacing, typography
- **NEVER** hardcode color values (e.g., `#ee3b2b`) - use `text-primary`, `bg-primary`
- **NEVER** hardcode spacing - use Tailwind scale (`p-4`, `gap-6`, `mb-8`)
- **ALWAYS** support dark mode with `dark:` variants

### Components
- **MUST** follow specs in `component-specs.md` for all core components
- **MUST** use `cn()` utility for conditional class merging
- **ALWAYS** use Material Symbols Outlined for icons

### Image Sourcing (CRITICAL)
- **MUST** search Pexels with **ENGLISH keywords only**
- **NEVER** use Korean (한글) keywords for image searches
- **ALWAYS** translate: 광장시장 → `korean market food stall`, 떡볶이 → `tteokbokki korean street food`
- See `docs/design/style-guide.md` Section 9 for full keyword mapping

### Code Quality
- **MUST** use TypeScript strict mode
- **NEVER** use `any` type
- **ALWAYS** define interfaces for props and data

## Key Colors (Quick Reference)
| Token | Light | Dark |
|-------|-------|------|
| `primary` | #ee3b2b | #ee3b2b |
| `background` | #f8f6f6 | #221210 |
| `surface` | #ffffff | #2d1a18 |
| `text-primary` | #181211 | #ffffff |
| `text-secondary` | #896561 | #c0a8a5 |

## Commands
```bash
npm run dev      # Development server
npm run build    # Production build
npm run lint     # ESLint check
```
