# 현대 macOS 블로그 디자인 가이드 🖥️

> **선택된 컨셉**: 현대적인 macOS Monterey/Ventura 스타일 블로그  
> Session 0.1, 0.2 작업을 위한 구체적인 디자인 가이드

## 🎨 현대 macOS 디자인 컨셉

### 핵심 아이디어
```
컨셉: Modern macOS inspired sophisticated blog
키워드: 세련됨, 현대성, 유리 morphism, 프리미엄 경험
특징: 카드 레이아웃, SF Pro 폰트, 둥근 모서리, 부드러운 그림자
목표: Apple의 디자인 철학을 반영한 가장 우아한 개발자 블로그
```

### 🎯 현대 macOS 레이아웃 구조
```
┌─────────────────────────────────────┐
│  Navigation Bar (52px)             │ ← 현대적인 네비게이션 바
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────┐  ┌───────────────┐ │
│  │    Card     │  │     Card      │ │ ← 블로그 콘텐츠를 카드로 표현
│  │   (Post)    │  │  (Sidebar)    │ │
│  │ [12px 둥근]  │  │ [유리효과]     │ │
│  └─────────────┘  └───────────────┘ │
│                                     │
└─────────────────────────────────────┘
```

## 🎨 현대 macOS 색상 시스템

### Apple Human Interface Guidelines 색상 체계
```css
/* Light Mode - System Colors */
--system-background: #FFFFFF        /* 시스템 배경 */
--secondary-background: #F2F2F7     /* 카드 배경 */
--tertiary-background: #FFFFFF      /* 보조 배경 */
--grouped-background: #F2F2F7       /* 그룹핑 배경 */

/* Text Colors - Light Mode */
--label: #000000                    /* 주요 텍스트 */
--secondary-label: #3C3C43          /* 보조 텍스트 */
--tertiary-label: #3C3C4399         /* 세 번째 텍스트 */

/* Accent Colors */
--system-blue: #007AFF              /* 액센트 파란색 */
--system-blue-light: #007AFF1A      /* 연한 파란색 */

/* Separator & Fill */
--separator: #C6C6C8                /* 경계선 */
--quaternary-fill: #7676801F        /* 미세한 채움 */

/* Dark Mode - System Colors */
--system-background-dark: #000000   /* 시스템 배경 */
--secondary-background-dark: #1C1C1E /* 카드 배경 */
--tertiary-background-dark: #2C2C2E  /* 보조 배경 */

/* Text Colors - Dark Mode */
--label-dark: #FFFFFF               /* 주요 텍스트 */
--secondary-label-dark: #EBEBF5     /* 보조 텍스트 */
--system-blue-dark: #0A84FF         /* 액센트 파란색 */
```

## 🖼️ 현대 macOS UI 요소들

### 1. 카드 스타일 (Glass Morphism)
```css
.macos-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: 24px;
}

.macos-card-dark {
  background: rgba(28, 28, 30, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

### 2. 버튼 스타일 (현대적)
```css
.macos-button {
  background: #007AFF;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-family: 'SF Pro Text', -apple-system, sans-serif;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0, 122, 255, 0.3);
  transition: all 0.2s ease;
}

.macos-button:hover {
  background: #0056CC;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.4);
}

.macos-button:active {
  background: #004499;
  transform: translateY(0);
}
```

### 3. 네비게이션 바 스타일
```css
.macos-navbar {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  height: 52px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
}

.macos-navbar-dark {
  background: rgba(28, 28, 30, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
```

## 🔤 현대 macOS 타이포그래피

### SF Pro 폰트 시스템
```css
/* Primary: SF Pro Display (대형 텍스트) */
font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;

/* Secondary: SF Pro Text (일반 텍스트) */
font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;

/* Monospace: SF Mono (코드) */
font-family: 'SF Mono', 'Monaco', 'Inconsolata', monospace;

/* Korean Support */
font-family: 'SF Pro Text', 'Apple SD Gothic Neo', -apple-system, sans-serif;
```

### 타이포그래피 스케일 (Apple 표준)
```css
--large-title: 34px;      /* 큰 제목 */
--title-1: 28px;          /* 제목 1 */
--title-2: 22px;          /* 제목 2 */
--title-3: 20px;          /* 제목 3 */
--headline: 17px;         /* 헤드라인 */
--body: 17px;             /* 본문 */
--callout: 16px;          /* 콜아웃 */
--subhead: 15px;          /* 서브헤드 */
--footnote: 13px;         /* 각주 */
--caption-1: 12px;        /* 캡션 1 */
--caption-2: 11px;        /* 캡션 2 */
```

## 🎯 페이지별 레이아웃 계획

### 홈페이지 (Hero + Card Grid)
```
┌─────────────────────────────────────┐
│  Navigation Bar (52px, 유리효과)    │
├─────────────────────────────────────┤
│  ┌─────────────────────────────────┐ │
│  │        Hero Section             │ │ ← 큰 제목과 소개
│  │    [Large Title + Subtitle]     │ │
│  └─────────────────────────────────┘ │
│  ┌─────────────┐ ┌─────────────────┐ │
│  │ Profile Card│ │   Recent Posts  │ │ ← 카드 그리드 레이아웃
│  │ [12px 둥근] │ │   Card Grid     │ │
│  │ [유리효과]  │ │   [3x2 격자]    │ │
│  └─────────────┘ └─────────────────┘ │
└─────────────────────────────────────┘
```

### 블로그 포스트 페이지 (읽기 최적화)
```
┌─────────────────────────────────────┐
│  Navigation Bar (52px, 유리효과)    │
├─────────────────────────────────────┤
│  ┌─────────────────────────────────┐ │
│  │        Post Header              │ │ ← 제목, 날짜, 태그
│  │    [Title + Meta Info]          │ │
│  └─────────────────────────────────┘ │
│  ┌─────────────────┐ ┌─────────────┐ │
│  │   Article Card  │ │  Side Card  │ │ ← 70% + 30% 레이아웃
│  │   [읽기 최적화]  │ │  [TOC, 관련]│ │
│  │   SF Pro Text   │ │  [작은 카드]│ │
│  └─────────────────┘ └─────────────┘ │
└─────────────────────────────────────┘
```

## 🛠️ Tailwind CSS 구현 가이드

### 현대 macOS 커스텀 클래스 정의
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'system': {
          'background': '#FFFFFF',
          'secondary': '#F2F2F7',
          'tertiary': '#FFFFFF',
          'grouped': '#F2F2F7'
        },
        'label': {
          'primary': '#000000',
          'secondary': '#3C3C43',
          'tertiary': '#3C3C4399'
        },
        'system-blue': {
          'light': '#007AFF1A',
          'DEFAULT': '#007AFF',
          'dark': '#0A84FF'
        },
        'separator': '#C6C6C8'
      },
      fontFamily: {
        'sf-pro': ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'sf-text': ['SF Pro Text', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'sf-mono': ['SF Mono', 'Monaco', 'Inconsolata', 'monospace']
      },
      fontSize: {
        'large-title': '34px',
        'title-1': '28px',
        'title-2': '22px',
        'title-3': '20px',
        'headline': '17px',
        'callout': '16px',
        'subhead': '15px',
        'footnote': '13px',
        'caption-1': '12px',
        'caption-2': '11px'
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'DEFAULT': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px'
      }
    }
  }
}
```

### 현대 macOS 컴포넌트 클래스
```css
@layer components {
  .macos-card {
    @apply bg-white/80 backdrop-blur-xl rounded-xl border border-white/20;
    @apply shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-6;
  }
  
  .macos-card-dark {
    @apply bg-gray-900/80 border-white/10;
    @apply shadow-[0_8px_32px_rgba(0,0,0,0.3)];
  }
  
  .macos-button {
    @apply bg-system-blue text-white border-none rounded-lg px-6 py-3;
    @apply font-sf-text text-callout font-medium;
    @apply shadow-[0_2px_8px_rgba(0,122,255,0.3)];
    @apply transition-all duration-200 ease-out;
  }
  
  .macos-button:hover {
    @apply bg-blue-600 -translate-y-0.5;
    @apply shadow-[0_4px_12px_rgba(0,122,255,0.4)];
  }
  
  .macos-navbar {
    @apply bg-white/80 backdrop-blur-xl border-b border-black/10;
    @apply h-13 px-6 flex items-center sticky top-0 z-50;
  }
}

## 🖥️ 현대 macOS 디자인 참고 자료

### Apple 공식 디자인 리소스
- **Apple Human Interface Guidelines**: https://developer.apple.com/design/human-interface-guidelines/
- **Apple Design Resources**: https://developer.apple.com/design/resources/
- **SF Symbols**: https://developer.apple.com/sf-symbols/ (아이콘 시스템)
- **Apple Figma Resources**: 공식 macOS 컴포넌트 라이브러리

### 현대 macOS UI 요소들
- **Glass Morphism**: 유리 효과와 backdrop blur
- **카드 기반 레이아웃**: 12px 둥근 모서리
- **SF Pro 폰트 시스템**: Display, Text, Mono
- **동적 색상**: 라이트/다크 모드 자동 전환

### 색상 참고 (Apple HIG)
- **System Blue**: #007AFF (액센트, 링크)
- **System Background**: #FFFFFF (라이트), #000000 (다크)
- **Secondary Background**: #F2F2F7 (라이트), #1C1C1E (다크)
- **Label**: #000000 (라이트), #FFFFFF (다크)

## 🛠 Tailwind CSS 커스터마이징 팁

### 색상 팔레트 확장
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

### 폰트 패밀리 추가
```javascript
fontFamily: {
  'display': ['Inter', 'system-ui', 'sans-serif'],
  'body': ['Inter', 'system-ui', 'sans-serif'],
  'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
}
```

### 커스텀 그라데이션
```javascript
backgroundImage: {
  'hero-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
}
```

## 💡 디자인 결정할 때 고려사항

### 기술적 제약
- Gatsby 정적 사이트 특성 고려
- Tailwind CSS 기반 디자인
- 다크모드 지원 필수
- 모바일 퍼스트 반응형

### 성능 고려
- 웹폰트 로딩 최적화
- 이미지 lazy loading
- 애니메이션은 적당히
- Core Web Vitals 지표 고려

### 접근성 고려
- 색상 대비 4.5:1 이상
- 키보드 네비게이션 지원
- 스크린 리더 호환성
- 텍스트 크기 조절 가능

## 📝 디자인 문서 템플릿

```markdown
# 블로그 디자인 컨셉

## 컨셉
- 이름: [예: 미니멀 개발자]
- 키워드: [예: 깔끔, 전문적, 집중]
- 한 줄 설명: [예: 코드와 내용에 집중할 수 있는 미니멀한 기술 블로그]

## 색상 팔레트
- Primary: #3b82f6 (파란색)
- Secondary: #10b981 (초록색)
- Accent: #f59e0b (주황색)
- Neutral: #6b7280 (회색)

## 타이포그래피
- 제목: Inter Bold
- 본문: Inter Regular
- 코드: JetBrains Mono

## 레이아웃
- 최대 너비: 1200px
- 사이드바: 우측 고정 (데스크톱)
- 네비게이션: 상단 고정
```