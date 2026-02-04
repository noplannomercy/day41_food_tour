# Component Specs - Delicious Korea

> 재사용 가능한 핵심 컴포넌트 사양

---

## 1. Navbar

### 구조

```
┌──────────────────────────────────────────────────────────────────┐
│  [Logo Icon] Brand Name    │  Nav Links  │   [CTA Button] [Avatar]│
└──────────────────────────────────────────────────────────────────┘
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'transparent'` | `'default'` | 배경 스타일 |
| `sticky` | `boolean` | `true` | 고정 여부 |

### Variants

**Default (흰 배경)**
```
bg: white / surface-dark
border-bottom: 1px solid border
backdrop-blur: md (스크롤 시)
```

**Transparent (히어로 위)**
```
bg: transparent
text: white
```

### Anatomy

```tsx
<header className="flex items-center justify-between px-10 py-3
  sticky top-0 z-50
  border-b border-border
  bg-white/80 dark:bg-background-dark/80
  backdrop-blur-md">

  {/* Logo */}
  <div className="flex items-center gap-4">
    <Icon name="restaurant" className="text-primary size-6" />
    <span className="text-lg font-bold">Delicious Korea</span>
  </div>

  {/* Nav Links - Desktop */}
  <nav className="hidden md:flex items-center gap-9">
    <NavLink href="/tours">Tours</NavLink>
    <NavLink href="/about">About</NavLink>
    <NavLink href="/contact">Contact</NavLink>
  </nav>

  {/* Actions */}
  <div className="flex items-center gap-4">
    <Button variant="primary">Book Now</Button>
    <Avatar src={user.avatar} />
  </div>
</header>
```

### States

| State | Style |
|-------|-------|
| Default Link | `text-text-primary font-medium` |
| Hover Link | `text-primary` |
| Active Link | `text-primary font-bold` |
| Mobile | 햄버거 메뉴 → 슬라이드 드로어 |

---

## 2. Button

### Variants

| Variant | Style | Usage |
|---------|-------|-------|
| `primary` | 빨간 배경, 흰 텍스트 | 메인 CTA |
| `secondary` | 투명 배경, 테두리 | 보조 액션 |
| `ghost` | 투명 배경, 텍스트만 | 링크형 버튼 |
| `outline` | 흰 배경, 테두리 | 필터, 토글 |

### Sizes

| Size | Height | Padding | Font |
|------|--------|---------|------|
| `sm` | `32px` | `px-3` | `text-xs` |
| `md` | `40px` | `px-4` | `text-sm` |
| `lg` | `48px` | `px-6` | `text-base` |
| `xl` | `56px` | `px-8` | `text-lg` |

### Anatomy

```tsx
<button className={cn(
  // Base
  "inline-flex items-center justify-center gap-2",
  "font-bold rounded-lg transition-all",
  "focus:outline-none focus:ring-2 focus:ring-primary/50",
  "disabled:opacity-50 disabled:cursor-not-allowed",

  // Variants
  variant === 'primary' && [
    "bg-primary text-white",
    "hover:brightness-110 active:scale-95",
    "shadow-lg shadow-primary/20"
  ],
  variant === 'secondary' && [
    "bg-white/10 backdrop-blur-md",
    "border border-white/20 text-white",
    "hover:bg-white/20"
  ],
  variant === 'ghost' && [
    "text-primary hover:underline"
  ],

  // Sizes
  size === 'md' && "h-10 px-4 text-sm",
  size === 'lg' && "h-14 px-6 text-base",
)}>
  {icon && <Icon name={icon} />}
  {children}
</button>
```

### States

```
Default  →  Hover  →  Active  →  Focus  →  Disabled
   │          │         │          │          │
   │    brightness   scale-95   ring-2    opacity-50
   │       +10%                 primary
```

---

## 3. Card (Tour Card)

### 구조

```
┌─────────────────────────────────────┐
│  ┌───────────────────────────────┐  │
│  │                               │  │
│  │        IMAGE AREA             │  │ aspect-[4/3]
│  │        (hover: scale)         │  │
│  │   [BADGE]                     │  │ absolute top-3 left-3
│  │                               │  │
│  └───────────────────────────────┘  │
│                                     │
│  Title                       $XX    │ flex justify-between
│                              ★ 4.8  │
│                                     │
│  Description text that can span     │ line-clamp-2
│  multiple lines with truncation...  │
│                                     │
│  ⏱ 3 hours    👥 Max 8              │ meta row
│                                     │
│  ┌───────────────────────────────┐  │
│  │     [ View Details → ]        │  │ full-width button
│  └───────────────────────────────┘  │
│                                     │
└─────────────────────────────────────┘
```

### Props

| Prop | Type | Description |
|------|------|-------------|
| `image` | `string` | 이미지 URL |
| `title` | `string` | 투어 제목 |
| `description` | `string` | 설명 (2줄 제한) |
| `price` | `number` | 가격 |
| `rating` | `number` | 평점 |
| `duration` | `string` | 소요 시간 |
| `maxGuests` | `number` | 최대 인원 |
| `badge` | `string?` | 뱃지 텍스트 |
| `href` | `string` | 링크 URL |

### Anatomy

```tsx
<article className="group flex flex-col
  bg-white dark:bg-surface-dark
  rounded-xl overflow-hidden
  border border-black/5
  shadow-sm hover:shadow-md
  transition-shadow">

  {/* Image */}
  <div className="relative aspect-[4/3] overflow-hidden">
    <img
      src={image}
      className="w-full h-full object-cover
        transition-transform duration-500
        group-hover:scale-110"
    />
    {badge && (
      <span className="absolute top-3 left-3
        bg-white/90 dark:bg-black/70
        px-2 py-1 rounded
        text-[10px] font-bold uppercase tracking-wider">
        {badge}
      </span>
    )}
  </div>

  {/* Content */}
  <div className="p-5 flex flex-col flex-1">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-lg font-bold leading-tight
        group-hover:text-primary transition-colors">
        {title}
      </h3>
      <div className="flex items-center gap-1 text-primary">
        <Icon name="star" filled />
        <span className="text-sm font-bold">{rating}</span>
      </div>
    </div>

    <p className="text-sm text-text-secondary mb-4 line-clamp-2">
      {description}
    </p>

    {/* Meta */}
    <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
      <span className="flex items-center gap-1">
        <Icon name="schedule" size="sm" /> {duration}
      </span>
      <span className="flex items-center gap-1">
        <Icon name="group" size="sm" /> Max {maxGuests}
      </span>
    </div>

    {/* CTA */}
    <div className="mt-auto">
      <Button variant="tertiary" fullWidth>
        View Details <Icon name="arrow_forward" />
      </Button>
    </div>
  </div>
</article>
```

---

## 4. Modal

### 구조

```
┌────────────────────────────────────────────┐
│  ░░░░░░░░░░░ BACKDROP (black/50) ░░░░░░░░░░│
│  ░░░░░┌──────────────────────────┐░░░░░░░░░│
│  ░░░░░│  Header            [×]   │░░░░░░░░░│
│  ░░░░░├──────────────────────────┤░░░░░░░░░│
│  ░░░░░│                          │░░░░░░░░░│
│  ░░░░░│        CONTENT           │░░░░░░░░░│
│  ░░░░░│                          │░░░░░░░░░│
│  ░░░░░├──────────────────────────┤░░░░░░░░░│
│  ░░░░░│  [Cancel]    [Confirm]   │░░░░░░░░░│
│  ░░░░░└──────────────────────────┘░░░░░░░░░│
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
└────────────────────────────────────────────┘
```

### Props

| Prop | Type | Description |
|------|------|-------------|
| `open` | `boolean` | 열림 상태 |
| `onClose` | `() => void` | 닫기 핸들러 |
| `title` | `string` | 제목 |
| `size` | `'sm' \| 'md' \| 'lg'` | 크기 |
| `children` | `ReactNode` | 내용 |

### Sizes

| Size | Max Width |
|------|-----------|
| `sm` | `400px` |
| `md` | `500px` |
| `lg` | `640px` |

### Anatomy

```tsx
<Dialog open={open} onClose={onClose}>
  {/* Backdrop */}
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

  {/* Panel */}
  <div className="fixed inset-0 flex items-center justify-center p-4">
    <div className={cn(
      "bg-white dark:bg-surface-dark",
      "rounded-2xl shadow-xl",
      "w-full overflow-hidden",
      size === 'md' && "max-w-[500px]"
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-border">
        <h2 className="text-xl font-bold">{title}</h2>
        <button onClick={onClose} className="text-text-secondary hover:text-text-primary">
          <Icon name="close" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {children}
      </div>

      {/* Footer (optional) */}
      {footer && (
        <div className="flex justify-end gap-3 p-6 border-t border-border">
          {footer}
        </div>
      )}
    </div>
  </div>
</Dialog>
```

---

## 5. Footer

### 구조

```
┌──────────────────────────────────────────────────────────────────┐
│                         FOOTER CONTENT                           │
│                                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────────────┐   │
│  │  BRAND   │  │  TOURS   │  │ COMPANY  │  │   NEWSLETTER   │   │
│  │  Logo    │  │  Link    │  │  Link    │  │   Email Input  │   │
│  │  Desc    │  │  Link    │  │  Link    │  │   [Subscribe]  │   │
│  │          │  │  Link    │  │  Link    │  │                │   │
│  └──────────┘  └──────────┘  └──────────┘  └────────────────┘   │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  © 2024 Delicious Korea                    Privacy │ Terms       │
└──────────────────────────────────────────────────────────────────┘
```

### Anatomy

```tsx
<footer className="bg-[#181211] text-white py-16 px-4 md:px-10 lg:px-40">
  <div className="max-w-[1200px] mx-auto">

    {/* Main Grid */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

      {/* Brand */}
      <div className="col-span-1">
        <div className="flex items-center gap-3 mb-6">
          <Icon name="restaurant" className="text-primary" />
          <span className="text-xl font-bold">Delicious Korea</span>
        </div>
        <p className="text-gray-400 text-sm">
          Unveiling the soul of Seoul through its food.
        </p>
      </div>

      {/* Link Columns */}
      <FooterLinkGroup
        title="Tours"
        links={[
          { label: 'Market Tours', href: '/tours/market' },
          { label: 'BBQ Experiences', href: '/tours/bbq' },
          // ...
        ]}
      />

      {/* Newsletter */}
      <div>
        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-primary">
          Newsletter
        </h4>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Email"
            className="bg-[#2d1a18] border-none rounded-lg px-4 py-2 text-sm w-full"
          />
          <Button variant="primary" size="sm">
            <Icon name="send" />
          </Button>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="pt-8 border-t border-white/10
      flex flex-col md:flex-row justify-between items-center gap-4
      text-xs text-gray-500">
      <p>© 2024 Delicious Korea. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="/privacy" className="hover:text-white">Privacy Policy</a>
        <a href="/terms" className="hover:text-white">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
```

---

## 6. Form Components

### 6.1 Input Field

```tsx
<div className="flex flex-col gap-2">
  <label className="text-sm font-medium text-text-primary">
    {label}
    {required && <span className="text-primary">*</span>}
  </label>
  <input
    type={type}
    placeholder={placeholder}
    className={cn(
      "h-12 px-4 rounded-lg",
      "border border-border",
      "bg-surface dark:bg-surface-dark",
      "focus:border-primary focus:ring-1 focus:ring-primary",
      "placeholder:text-text-muted",
      error && "border-red-500"
    )}
  />
  {error && <span className="text-xs text-red-500">{error}</span>}
</div>
```

### 6.2 Select

```tsx
<select className="h-12 px-4 rounded-lg border border-border
  bg-surface focus:border-primary focus:ring-1 focus:ring-primary">
  <option value="">Select...</option>
  {options.map(opt => (
    <option key={opt.value} value={opt.value}>{opt.label}</option>
  ))}
</select>
```

### 6.3 Textarea

```tsx
<textarea
  rows={4}
  className="p-4 rounded-lg border border-border
    bg-surface focus:border-primary focus:ring-1 focus:ring-primary
    resize-none"
  placeholder={placeholder}
/>
```

---

## 7. Hero Section

### Variants

| Variant | Description |
|---------|-------------|
| `full` | 전체 화면 높이, 중앙 정렬 텍스트 |
| `compact` | 300-400px 높이, 하단 정렬 텍스트 |

### Anatomy

```tsx
<section
  className="relative min-h-[600px] flex items-center justify-center
    bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden"
  style={{
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)),
      url("${image}")
    `
  }}
>
  <div className="flex flex-col gap-4 max-w-[800px] text-center p-6">
    <h1 className="text-white text-5xl md:text-7xl font-extrabold
      leading-tight tracking-tighter">
      {title}
    </h1>
    <p className="text-white/90 text-lg md:text-xl">
      {subtitle}
    </p>
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      <Button variant="primary" size="lg">{primaryCta}</Button>
      <Button variant="secondary" size="lg">{secondaryCta}</Button>
    </div>
  </div>
</section>
```

---

## 8. Icon System

### 사용 폰트
Google Material Symbols Outlined

### 공통 아이콘

| Icon | Name | Usage |
|------|------|-------|
| `restaurant` | 로고, 음식 | 브랜드 |
| `schedule` | 시간 | 투어 시간 |
| `group` | 인원 | 최대 인원 |
| `location_on` | 위치 | 지도, 미팅 포인트 |
| `star` | 별 | 평점 (FILL: 1) |
| `arrow_forward` | 화살표 | 버튼, 링크 |
| `calendar_month` | 캘린더 | 날짜 선택 |
| `payments` | 결제 | 가격 |
| `search` | 검색 | 검색창 |
| `close` | 닫기 | 모달 |
| `menu` | 메뉴 | 모바일 햄버거 |

### Icon Component

```tsx
<span
  className={cn(
    "material-symbols-outlined",
    size === 'sm' && "text-base",
    size === 'md' && "text-xl",
    size === 'lg' && "text-2xl",
  )}
  style={{
    fontVariationSettings: filled
      ? "'FILL' 1, 'wght' 400"
      : "'FILL' 0, 'wght' 400"
  }}
>
  {name}
</span>
```

---

## 9. Google Map Component

### 구조

```
┌─────────────────────────────────────────────────┐
│  ┌─────────────────────────────────────────────┐│
│  │                                             ││
│  │              GOOGLE MAP                     ││
│  │                                             ││
│  │    ●━━━━━━━━━●━━━━━━━━━●━━━━━━━━━●          ││
│  │    1         2         3         4          ││
│  │                                             ││
│  └─────────────────────────────────────────────┘│
│  height: 400px  │  rounded-xl                   │
└─────────────────────────────────────────────────┘
```

### Props

| Prop | Type | Description |
|------|------|-------------|
| `center` | `{ lat: number, lng: number }` | 지도 중심 |
| `zoom` | `number` | 줌 레벨 (기본: 13) |
| `markers` | `Marker[]` | 마커 배열 |
| `polyline` | `LatLng[]` | 경로 라인 |
| `height` | `string` | 높이 (기본: 400px) |

### Marker Type

```typescript
interface Marker {
  position: { lat: number; lng: number };
  title: string;
  label?: string; // 숫자 라벨 (1, 2, 3...)
  info?: string;  // 인포윈도우 내용
}
```

### Anatomy

```tsx
import { GoogleMap, LoadScript, Marker, Polyline } from '@react-google-maps/api';

const TourMap = ({ center, markers, polyline, height = '400px' }) => {
  return (
    <div className="rounded-xl overflow-hidden" style={{ height }}>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          zoom={13}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
            styles: mapStyles, // 커스텀 스타일
          }}
        >
          {/* Markers */}
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker.position}
              label={{
                text: String(index + 1),
                color: 'white',
                fontWeight: 'bold',
              }}
              icon={{
                url: '/marker-primary.svg',
                scaledSize: new google.maps.Size(32, 32),
              }}
            />
          ))}

          {/* Route Line */}
          {polyline && (
            <Polyline
              path={polyline}
              options={{
                strokeColor: '#ee3b2b',
                strokeWeight: 3,
                strokeOpacity: 0.8,
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
```

### Map Styles (Minimal)

```typescript
const mapStyles = [
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'transit',
    stylers: [{ visibility: 'off' }],
  },
];
```

---

## 10. DatePicker Component

### 구조

```
┌─────────────────────────────────────────────────┐
│  Select Date                                    │
├─────────────────────────────────────────────────┤
│  ◀  January 2024  ▶                            │
├─────────────────────────────────────────────────┤
│  Sun  Mon  Tue  Wed  Thu  Fri  Sat             │
│   31    1    2    3    4    5    6              │
│    7    8    9   10   11  [12]  13              │
│   14   15   16   17   18   19   20              │
│   21   22   23   24   25   26   27              │
│   28   29   30   31    1    2    3              │
└─────────────────────────────────────────────────┘
```

### Props

| Prop | Type | Description |
|------|------|-------------|
| `selected` | `Date` | 선택된 날짜 |
| `onChange` | `(date: Date) => void` | 변경 핸들러 |
| `minDate` | `Date` | 최소 선택 가능 날짜 |
| `disabledDates` | `Date[]` | 비활성 날짜 |

### Anatomy

```tsx
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const DatePicker = ({ selected, onChange, minDate }) => {
  return (
    <div className="bg-surface border border-border rounded-xl p-4">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={onChange}
        disabled={{ before: minDate || new Date() }}
        modifiersClassNames={{
          selected: 'bg-primary text-white rounded-lg',
          today: 'font-bold text-primary',
          disabled: 'text-text-muted opacity-50',
        }}
        classNames={{
          caption: 'flex justify-between items-center mb-4',
          caption_label: 'text-lg font-bold',
          nav_button: 'p-2 hover:bg-surface-hover rounded-lg',
          head_cell: 'text-xs text-text-muted font-medium w-10',
          cell: 'w-10 h-10',
          day: 'w-10 h-10 rounded-lg hover:bg-surface-hover transition-colors',
        }}
      />
    </div>
  );
};
```

---

## 11. Filter/Tab Component

### 구조

```
┌─────────────────────────────────────────────────────────────────┐
│  [All Tours]  [Market Tours]  [BBQ]  [Cooking Class]  [Night]  │
└─────────────────────────────────────────────────────────────────┘
   ↑ active     ↑ default       ...
```

### Props

| Prop | Type | Description |
|------|------|-------------|
| `options` | `FilterOption[]` | 필터 옵션 |
| `value` | `string` | 선택된 값 |
| `onChange` | `(value: string) => void` | 변경 핸들러 |
| `variant` | `'pills' \| 'underline'` | 스타일 |

### Anatomy (Pills)

```tsx
const FilterTabs = ({ options, value, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            value === option.value
              ? "bg-primary text-white"
              : "bg-surface-hover text-text-secondary hover:text-text-primary"
          )}
        >
          {option.label}
          {option.count && (
            <span className="ml-1 text-xs opacity-70">({option.count})</span>
          )}
        </button>
      ))}
    </div>
  );
};
```

### Anatomy (Underline)

```tsx
const FilterTabs = ({ options, value, onChange }) => {
  return (
    <div className="flex gap-6 border-b border-border">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            "pb-3 text-sm font-medium transition-colors relative",
            value === option.value
              ? "text-primary"
              : "text-text-secondary hover:text-text-primary"
          )}
        >
          {option.label}
          {value === option.value && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>
      ))}
    </div>
  );
};
```

---

## 12. Testimonial/Review Card

### 구조

```
┌─────────────────────────────────────────────────┐
│  ★★★★★  5.0                                     │
│                                                 │
│  "Amazing experience! Our guide was so          │
│   knowledgeable about Korean food history..."   │
│                                                 │
│  ┌────┐                                         │
│  │ 👤 │  Sarah M.                               │
│  └────┘  United States • Dec 2024               │
│                                                 │
│  Tour: Gwangjang Market Adventure               │
└─────────────────────────────────────────────────┘
```

### Props

| Prop | Type | Description |
|------|------|-------------|
| `rating` | `number` | 평점 (1-5) |
| `content` | `string` | 리뷰 내용 |
| `author` | `{ name, avatar?, country }` | 작성자 |
| `date` | `string` | 작성일 |
| `tourName` | `string?` | 투어 이름 |

### Anatomy

```tsx
const TestimonialCard = ({ rating, content, author, date, tourName }) => {
  return (
    <article className="bg-surface dark:bg-surface-dark rounded-xl p-6 
      border border-border shadow-sm">
      
      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex text-warning">
          {[...Array(5)].map((_, i) => (
            <Icon 
              key={i} 
              name="star" 
              filled={i < rating} 
              size="sm"
              className={i < rating ? 'text-warning' : 'text-text-muted'}
            />
          ))}
        </div>
        <span className="text-sm font-bold">{rating}.0</span>
      </div>

      {/* Content */}
      <p className="text-text-secondary mb-6 line-clamp-4">
        "{content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        {author.avatar ? (
          <img 
            src={author.avatar} 
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-primary/10 
            flex items-center justify-center text-primary font-bold">
            {author.name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-medium">{author.name}</p>
          <p className="text-xs text-text-muted">
            {author.country} • {date}
          </p>
        </div>
      </div>

      {/* Tour Badge */}
      {tourName && (
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-text-muted">
            Tour: <span className="text-primary font-medium">{tourName}</span>
          </p>
        </div>
      )}
    </article>
  );
};
```

---

## 13. Guest Selector Component

### 구조

```
┌─────────────────────────────────────────────────┐
│  Number of Guests                               │
├─────────────────────────────────────────────────┤
│  Adults (13+)                                   │
│  ₩89,000 per person          [ - ]  2  [ + ]   │
├─────────────────────────────────────────────────┤
│  Children (3-12)                                │
│  ₩49,000 per person          [ - ]  0  [ + ]   │
├─────────────────────────────────────────────────┤
│  Infants (0-2)                                  │
│  Free                        [ - ]  0  [ + ]   │
└─────────────────────────────────────────────────┘
```

### Props

| Prop | Type | Description |
|------|------|-------------|
| `value` | `GuestCount` | 현재 인원 |
| `onChange` | `(value: GuestCount) => void` | 변경 핸들러 |
| `maxGuests` | `number` | 최대 인원 |
| `prices` | `{ adult, child, infant }` | 가격 |

### Anatomy

```tsx
interface GuestCount {
  adults: number;
  children: number;
  infants: number;
}

const GuestSelector = ({ value, onChange, maxGuests, prices }) => {
  const total = value.adults + value.children + value.infants;

  const updateCount = (type: keyof GuestCount, delta: number) => {
    const newValue = { ...value, [type]: Math.max(0, value[type] + delta) };
    const newTotal = newValue.adults + newValue.children + newValue.infants;
    if (newTotal <= maxGuests) {
      onChange(newValue);
    }
  };

  return (
    <div className="space-y-4">
      <h4 className="font-medium">Number of Guests</h4>
      
      {/* Adult Row */}
      <div className="flex items-center justify-between py-3 border-b border-border">
        <div>
          <p className="font-medium">Adults (13+)</p>
          <p className="text-sm text-text-secondary">
            ₩{prices.adult.toLocaleString()} per person
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => updateCount('adults', -1)}
            disabled={value.adults <= 1}
            className="w-8 h-8 rounded-full border border-border 
              flex items-center justify-center
              disabled:opacity-50 hover:bg-surface-hover"
          >
            -
          </button>
          <span className="w-6 text-center font-medium">{value.adults}</span>
          <button
            onClick={() => updateCount('adults', 1)}
            disabled={total >= maxGuests}
            className="w-8 h-8 rounded-full border border-border 
              flex items-center justify-center
              disabled:opacity-50 hover:bg-surface-hover"
          >
            +
          </button>
        </div>
      </div>

      {/* Children, Infants rows similar... */}
    </div>
  );
};
```

---

## Component Checklist

| Component | Status | Priority |
|-----------|--------|----------|
| Navbar | Required | P0 |
| Button | Required | P0 |
| Card | Required | P0 |
| Modal | Required | P0 |
| Footer | Required | P0 |
| Form (Input/Select/Textarea) | Required | P0 |
| Hero | Required | P0 |
| **Google Map** | Required | P0 |
| **DatePicker** | Required | P0 |
| **Filter/Tab** | Required | P0 |
| **Testimonial** | Required | P0 |
| **GuestSelector** | Required | P1 |
| Badge | Optional | P1 |
| Avatar | Optional | P1 |
| Pagination | Optional | P1 |
| Breadcrumb | Optional | P2 |
| Progress Bar | Optional | P2 |