# Stitch + Claude Code 결합 워크플로우 메뉴얼

## 개요

Stitch(도메인 Clarify + 구조 목업)와 Claude Code(디자인 시스템 + 구현)를 결합한 랜딩 페이지 개발 워크플로우입니다.

**검증 결과:** 19개 화면을 55분 만에 빌드 에러 없이 완성 (Day 40 테스트)

---

## 필요 도구 (3종 세트)

| 도구 | 역할 | 용도 |
|------|------|------|
| **Stitch** | 도메인 Clarify + 구조 목업 | "뭘 만들지" + "어떤 구조로" |
| **Dribbble** | 스타일 레퍼런스 | "어떤 느낌으로" |
| **Claude Code + frontend-design** | 디자인 시스템 + 구현 | "실제로 빌드" |

---

## 워크플로우 다이어그램

```
[Phase 1: Stitch 도메인 탐색]
├── Stitch에 업종 + 컨텍스트 던짐
├── Stitch가 도메인 Clarify 진행
├── 대화하면서 페이지/기능 확정
└── Stitch 목업 생성 (구조 + 레이아웃 확정)
     ↓
[Phase 2: 레퍼런스 수집]
├── Stitch 목업 스크린샷 → docs/design/references/structure/
└── Dribbble 레퍼런스 → docs/design/references/style/
     ↓
[Phase 3: Design Analysis]
└── structure/ + style/ 분리 분석 → 디자인 시스템 생성
     ↓
[Phase 4: CLAUDE.md 생성]
└── 60줄 이내, 디자인 시스템 참조 경로 포함
     ↓
[Phase 5: IMPLEMENTATION.md 생성]
└── Phase별 구현 계획, npm run build 검증 포함
     ↓
[Phase 6: 병렬 구현]
└── Task agent로 Phase별 병렬 실행
```

---

## Phase별 상세 가이드

### Phase 1: Stitch 도메인 탐색

**시작 프롬프트 (구체적 버전):**

```
I want to create a landing website for a [업종].

Context:
- [비즈니스 설명]
- Name: "[브랜드명]"
- Founded [연도], [규모]
- Focus: [핵심 서비스]
- Target: [타겟 고객]

Expected pages:
- Home (hero + featured [콘텐츠] + philosophy)
- [페이지 2]
- [페이지 3]
- About/Team
- Contact

Help me refine this and design each page.
```

**진행 가이드:**
1. Stitch가 clarify 질문하면 대화하면서 기능 확정
2. 페이지별로 "Design the [페이지명] page" 요청 받으면 진행
3. 5~10개 화면 정도 나오면 "That's all I need" 로 끊기
4. 목업 스크린샷 캡처

**예상 소요 시간:** 20~30분

---

### Phase 2: 레퍼런스 수집

**폴더 구조:**
```
docs/design/references/
├── structure/     ← Stitch 목업 (페이지 구조)
│   ├── 01_home.png
│   ├── 02_portfolio.png
│   └── ...
└── style/         ← Dribbble 레퍼런스 (비주얼 톤)
    ├── style_ref_01.png
    └── style_ref_02.png
```

**Dribbble 검색 키워드 예시:**
- "[업종] website"
- "[업종] landing page"
- "minimalist [업종] website"
- "[톤] web design" (dark luxury, light minimal 등)

**레퍼런스 수:** structure 5~20장, style 2~4장

---

### Phase 3: Design Analysis

**프롬프트:**

```
docs/design/references/의 레퍼런스를 분석해줘.

references/structure/ → Stitch에서 생성된 화면 목업
references/style/ → Dribbble 스타일 레퍼런스

docs/design/에 다음 3개 파일로 디자인 시스템을 생성해줘:

1. design-tokens.md
   - style/ 기반 컬러, 타이포, 간격, 그림자
   - tailwind.config.ts에 복붙 가능한 형태로 작성

2. style-guide.md
   - style/ 기반 톤앤매너
   - structure/ 기반 레이아웃 패턴

3. component-specs.md
   - 재사용 가능한 핵심 컴포넌트만: Navbar, Button, Card, Modal, Footer, Form, Hero
   - 페이지별 컴포넌트는 IMPLEMENTATION.md에서 정의

각 파일 3~5페이지 이내.
frontend-design 스킬을 활용해서 작업해줘.

🛑 STOP: 디자인 시스템 파일 3개만 생성하고 반드시 멈춰.
절대 구현 코드 작성하지 마. 다음 지시 기다려.
```

---

### Phase 4: CLAUDE.md 생성

**프롬프트:**

```
프로젝트 루트에 CLAUDE.md를 생성해줘.

참조 문서:
- docs/design/references/structure/
- docs/design/references/style/
- docs/design/design-tokens.md
- docs/design/style-guide.md
- docs/design/component-specs.md

포함 내용:
- 프로젝트 개요
- 기술 스택 (Next.js, TypeScript, Tailwind CSS)
- 디자인 시스템 참조 경로
- 핵심 규칙 (토큰 사용 필수, hardcoded 값 금지)
- 이미지 소싱 (Pexels 키워드)

⚠️ 60줄 이내로 작성 (CRITICAL)
강한 키워드 사용: MUST, NEVER, ALWAYS

🛑 STOP: CLAUDE.md만 생성하고 멈춰. 구현하지 마.
```

---

### Phase 5: IMPLEMENTATION.md 생성

**프롬프트:**

```
코드베이스와 다음 문서들을 분석해서 IMPLEMENTATION.md를 생성해줘:
- CLAUDE.md
- docs/design/references/structure/
- docs/design/design-tokens.md
- docs/design/style-guide.md
- docs/design/component-specs.md

IMPLEMENTATION.md 규칙:
- 페이즈별 구현 순서 정의
- 각 페이즈 완료 후 npm run build 검증 명시
- 컴포넌트 구현은 component-specs.md 참조로 대체 (중복 작성 금지)
- 데이터는 data/*.csv 사용
- 이미지는 Pexels 스톡 이미지 사용, public/images/에 저장

Save to: specs/IMPLEMENTATION.md

🛑 STOP: IMPLEMENTATION.md만 생성하고 멈춰. 구현하지 마.
```

---

### Phase 6: 병렬 구현

**프롬프트:**

```
IMPLEMENTATION.md를 따라 구현을 시작해줘.

병렬 처리:
- Phase 0 (공통 레이아웃, Navbar, Footer) 완료 후
- 나머지 Phase들을 병렬 실행

참조 문서:
- CLAUDE.md
- specs/IMPLEMENTATION.md
- docs/design/references/structure/
- docs/design/design-tokens.md
- docs/design/component-specs.md

이미지: Pexels에서 다운로드 → public/images/

Phase 0 완료 후 병렬 구현 시작해줘.
```

**발견:** "병렬 실행해줘"만 해도 Task agent 알아서 띄움 (subagent 명시 불필요)

---

## 환경 설정

### 프로젝트 초기화

```bash
mkdir [project_name]
cd [project_name]
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
mkdir -p docs/design/references/structure docs/design/references/style data
```

### frontend-design 스킬 설치

```bash
# .claude/settings.json
{
  "permissions": {
    "allow": ["Read(mnt/skills/public/frontend-design/*)"]
  }
}
```

---

## 시간 측정 템플릿

| 단계 | 시작 | 완료 | 소요 |
|------|------|------|------|
| Stitch 도메인 탐색 | : | : | min |
| 레퍼런스 수집 | : | : | min |
| Design Analysis | : | : | min |
| CLAUDE.md | : | : | min |
| IMPLEMENTATION.md | : | : | min |
| 구현 (병렬) | : | : | min |
| **총합** | | | min |

**Day 40 벤치마크:** 19개 화면, 55분 완성

---

## 알려진 이슈 및 개선점

### 이슈 1: Stitch 목업 대비 디자인 품질 저하
- **원인:** Design Analysis 스킵 시 디자인 토큰 추출 부정확
- **해결:** Design Analysis 단계 반드시 진행

### 이슈 2: Claude Code가 멈추지 않고 구현까지 진행
- **원인:** "멈춰" 지시가 약함
- **해결:** 🛑 STOP 이모지 + "절대 구현하지 마" 강조

### 이슈 3: Pexels 이미지 검색 부정확 (특히 한글 키워드)
- **원인:** 한글 검색어 인식 불량
- **해결:** 영문 키워드 사용 권장

### 이슈 4: 병렬 구현 시 스타일 일관성 부족
- **원인:** Task agent들이 각자 독립적으로 구현
- **해결:** 구현 후 "전체 스타일 일관성 체크해줘" 추가 단계

---

## 체크리스트

### Stitch 단계
- [ ] 컨텍스트 충분히 제공
- [ ] 페이지/기능 확정
- [ ] 목업 스크린샷 캡처

### 레퍼런스 수집
- [ ] structure/ 폴더에 Stitch 목업
- [ ] style/ 폴더에 Dribbble 레퍼런스 (2~4장)

### Claude Code 단계
- [ ] Design Analysis 완료 (3개 파일)
- [ ] CLAUDE.md 60줄 이내
- [ ] IMPLEMENTATION.md Phase별 구분
- [ ] npm run build 에러 없음

---

## 버전 히스토리

| 버전 | 날짜 | 변경 내용 |
|------|------|----------|
| 1.0 | 2025-02-03 | 초기 버전 (Day 40 테스트 기반) |