# Day 41: Delicious Korea - 한국 미식 투어 여행사

> Knack 50 Challenge | Stitch + Claude Code + AI Image Generation

---

## 📋 프로젝트 개요

외국인 대상 한국 미식 투어 여행사 웹사이트. 서울의 로컬 푸드 투어를 예약하고 체험할 수 있는 플랫폼.

**핵심 테스트 목표:**
- 이미지 핸들링 워크플로우 검증
- Gemini AI 이미지 생성 Skill 테스트
- 한글 → 영문 키워드 변환 전략

---

## 🛠 기술 스택

| 구분 | 기술 |
|------|------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS + CSS Variables |
| Maps | Google Maps API |
| Fonts | Plus Jakarta Sans + Pretendard |
| Image Gen | Gemini 2.0 Flash (via Skill) |

---

## 📁 프로젝트 구조

```
day41_food_tour/
├── .claude/
│   ├── agents/                    # 커스텀 에이전트
│   └── skills/
│       ├── gemini-imagegen/       # AI 이미지 생성
│       │   ├── SKILL.md
│       │   ├── main.py
│       │   ├── pyproject.toml
│       │   └── .env.example
│       └── optimize-images/       # WebP 변환
│           ├── SKILL.md
│           ├── README.md
│           ├── requirements.txt
│           └── scripts/
├── docs/design/
│   ├── design-tokens.md           # 색상, 타이포, 스페이싱
│   ├── style-guide.md             # 톤앤매너, 레이아웃, 이미지 규칙
│   ├── component-specs.md         # 컴포넌트 명세
│   └── references/
│       └── structure/             # Stitch 목업 (18개 화면)
├── specs/
│   └── IMPLEMENTATION.md          # 구현 가이드
├── CLAUDE.md                      # 프로젝트 규칙 (60줄)
└── src/
    ├── app/                       # Next.js 페이지
    ├── components/                # UI 컴포넌트
    └── lib/                       # 유틸리티
```

---

## 🎨 Skills 사용법

### 1. gemini-imagegen (AI 이미지 생성)

**설정:**
```bash
# .env 파일에 추가
GOOGLE_API_KEY=your_api_key_here
```

**사용:**
```
gemini-imagegen skill로 다음 이미지 생성해줘:
- prompt: "Delicious Korean bibimbap in hot stone bowl, top view, food photography"
- output: public/images/bibimbap.png
- aspect: square
```

**프롬프트 예시 (한국 음식):**
| 음식 | 영문 프롬프트 |
|------|--------------|
| 비빔밥 | "Colorful bibimbap in stone bowl, top view, food photography, warm lighting" |
| 삼겹살 | "Korean BBQ pork belly grilling on charcoal grate, smoke rising, appetizing" |
| 떡볶이 | "Tteokbokki in red sauce, Korean street food stall setting" |
| 불고기 | "Korean bulgogi beef with side dishes, traditional table setting" |

### 2. optimize-images (WebP 변환)

**사용:**
```
optimize-images skill로 public/images/ 폴더의 이미지들을 WebP로 변환해줘
```

**권장 사이즈:**
| 용도 | 크기 |
|------|------|
| Hero | 1920x1080 |
| Card | 800x600 |
| Thumbnail | 400x300 |

---

## ⏱ 시간 기록

| 단계 | 소요 시간 |
|------|----------|
| Stitch 목업 생성 | 29min |
| Design System 분석 + 수정 | ~15min |
| CLAUDE.md + IMPLEMENTATION.md | ~10min |
| 구현 (병렬) | ~40min |
| 버그 수정 | ~10min |
| **총합** | **~105min** |

---

## 📸 화면 목록 (18개)

1. home_-_delicious_korea (홈)
2. our_food_tours (투어 목록)
3. tour_detail:_gwangjang_market_tour (투어 상세)
4. traditional_cooking_classes (요리 체험)
5. secure_booking (예약)
6. about_&_contact_us (소개/연락)
7. meet_our_guides (가이드 소개)
8. frequently_asked_questions (FAQ)
9. korean_food_&_culture_blog (블로그)
10. guest_experiences_&_gallery (후기/갤러리)
11. gift_food_experiences (선물하기)
12. corporate_&_group_events (기업/단체)
13. manage_your_booking (예약 관리)
14. write_a_review (리뷰 작성)
15. legal_&_privacy_policy (법적 고지)
16. 404_-_page_not_found (404)
17. search_results (검색 결과)
18. partner_with_us (파트너십)

---

## 💡 핵심 발견사항

### 이미지 소싱 전략

```
1순위: gemini-imagegen Skill (한국 음식 특화, 고품질)
2순위: Pexels (일반 배경, 인물 - 영문 키워드 필수)
```

**Gemini 장점:**
- 한국 음식 특화 이미지 생성 가능
- 밑반찬 세팅까지 프롬프트로 제어
- 실사급 퀄리티 (~$0.003/장)

### Design System 수정사항

| 파일 | 추가 내용 |
|------|----------|
| design-tokens.md | 한글 폰트 fallback (Pretendard, Noto Sans KR) |
| style-guide.md | 섹션 9 "Image Guidelines" (한글→영문 키워드 매핑) |
| component-specs.md | Map, DatePicker, Filter, Testimonial, GuestSelector |

---

## 🚀 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버
npm run dev

# 빌드 검증
npm run build

# 린트
npm run lint
```

---

## 📚 참고 문서

- [CLAUDE.md](./CLAUDE.md) - 프로젝트 규칙
- [IMPLEMENTATION.md](./specs/IMPLEMENTATION.md) - 구현 가이드
- [design-tokens.md](./docs/design/design-tokens.md) - 디자인 토큰
- [style-guide.md](./docs/design/style-guide.md) - 스타일 가이드
- [component-specs.md](./docs/design/component-specs.md) - 컴포넌트 명세

---

## 📝 License

MIT 