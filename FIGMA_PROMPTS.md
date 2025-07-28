# 현대 macOS 블로그 피그마 디자인 프롬프트 🖥️

> **Figma AI 프롬프트 디자인용** - 현대적인 macOS Monterey/Ventura 스타일 개발자 블로그 디자인

## 🎯 기본 디자인 시스템 프롬프트

### 프롬프트 1: 메인 색상 팔레트

```
Create a color palette inspired by classic Mac OS System 7.
Use these specific colors:
- Primary Gray: #C0C0C0 (classic Mac window gray)
- Window Background: #F7F7F7 (light gray)
- Window Frame: #DDDDDD (medium gray)
- Shadow: #888888 (dark gray)
- Accent Blue: #0066CC (classic Mac blue for links)
- Black Text: #000000 (primary text)
- Secondary Text: #666666 (muted text)

Create color swatches with hex codes and usage notes for each color.
Show how they work together in a classic Mac OS interface style.
```

### 프롬프트 2: 3D UI 컴포넌트 시스템

```
Design classic Mac OS style UI components with 3D beveled effects:

1. BUTTONS: Create raised 3D buttons with:
   - Light gray gradient background (#F0F0F0 to #C0C0C0)
   - Outset border effect (raised appearance)
   - 2px border with highlight and shadow
   - 12px font size, bold text
   - Pressed state with inset border effect

2. WINDOWS: Design window frames with:
   - Light gray background (#F7F7F7)
   - 2px outset border in medium gray (#DDDDDD)
   - Drop shadow (2px offset, gray #888888)
   - Title bar with gradient (#DDDDDD to #AAAAAA)
   - Sharp corners (no border radius)

3. MENU BAR: Create classic Mac menu bar:
   - Height: 24px
   - Gradient background (#DDDDDD to #BBBBBB)
   - Bottom border (#999999)
   - Apple logo on left
   - Menu items with classic Mac font

Make it look exactly like System 7 / Mac OS 8 interface elements.
```

## 🖼️ 페이지 레이아웃 프롬프트

### 프롬프트 3: 홈페이지 레이아웃

```
Design a homepage layout inspired by classic Mac OS desktop with multiple windows:

LAYOUT STRUCTURE:
- Top: Mac OS menu bar (24px height) with Apple logo and navigation menu
- Main area: Desktop-like background with multiple floating windows
- Window 1: "Welcome" window (left side) containing:
  * Profile photo with pixelated border
  * Brief intro text in System font style
  * Skills/tech stack as icon list
- Window 2: "Recent Posts" window (right side) containing:
  * List of latest blog posts in Finder-style list view
  * Each post with small icon, title, date
  * Scroll bar on right side

VISUAL STYLE:
- Classic Mac OS System 7/8 aesthetic
- All windows have 3D beveled frames
- Use classic Mac gray color palette
- Pixel-perfect grid alignment
- Retro bitmap-style icons
- Sharp edges, no modern rounded corners

Size: Desktop layout (1200px width)
Make it nostalgic but functional for a modern developer blog.
```

### 프롬프트 4: 블로그 포스트 페이지

```
Create a blog post page layout in classic Mac OS window style:

MAIN LAYOUT:
- Mac OS menu bar at top with navigation
- Large main content window (left, 70% width):
  * Window title bar with post title
  * Article content area with classic typography
  * Code blocks with terminal-style monospace font
  * Scroll bar on right edge
- Sidebar window (right, 30% width) containing:
  * Table of Contents (TOC) mini-window
  * Author info mini-window
  * Related posts mini-window
  * Each mini-window has own title bar and frame

TYPOGRAPHY:
- Headers: Bold System font, black text
- Body: Regular System font, 14px
- Code: Monaco/monospace, terminal green
- Links: Classic Mac blue (#0066CC)

WINDOWS STYLE:
- All windows have classic Mac 3D beveled frames
- Gray gradient title bars
- Close/minimize buttons (classic Mac style)
- Drop shadows for depth
- Sharp rectangular corners

Make it look like multiple document windows in classic Mac OS Finder.
```

### 프롬프트 5: 블로그 목록 페이지 (Finder 스타일)

```
Design a blog post listing page that looks like Mac OS Finder in list view:

LAYOUT:
- Mac OS menu bar with File, Edit, View menus
- Main Finder window containing:
  * Toolbar with classic Mac buttons (Back, Forward, View options)
  * Column headers: "Name", "Date Modified", "Category", "Size"
  * List of blog posts as files/folders:
    - Small document icons (16x16 pixel style)
    - Post titles as "filenames"
    - Dates in Mac OS date format
    - Categories as folder hierarchy
    - Reading time as "file size"
  * Classic Mac scroll bars
  * Status bar at bottom showing post count

VISUAL DETAILS:
- Alternating row colors (white/light gray stripes)
- Selection highlight in classic Mac blue
- Resize handles between columns
- Classic Mac folder and document icons
- Monospace font for technical details
- Pixel-perfect grid alignment

INTERACTION STATES:
- Hover effects on list items
- Selected state with blue highlight
- Sort arrows in column headers

Size: 1200px width, make it feel exactly like browsing files in classic Mac OS Finder.
```

## 🎨 컴포넌트별 상세 프롬프트

### 프롬프트 6: 네비게이션 메뉴바

```
Create a pixel-perfect classic Mac OS menu bar for a developer blog:

SPECIFICATIONS:
- Exact height: 24px
- Background: Linear gradient from #DDDDDD to #BBBBBB
- Bottom border: 1px solid #999999
- Left side: Apple logo (black) + "Yongho's Blog" in bold
- Menu items: "Home", "Blog", "About", "Contact"
- Right side: Date/time display in classic Mac format

TYPOGRAPHY:
- Font: Classic Mac system font (Chicago or similar)
- Size: 12px
- Color: Black (#000000)
- Bold weight for active menu

INTERACTIVE STATES:
- Hover: Slight highlight effect
- Active: Inverted colors (white text on dark background)
- Dropdown menus with classic Mac styling

Make it identical to System 7 menu bar with modern navigation functionality.
```

### 프롬프트 7: 코드 블록 디자인 (터미널 스타일)

```
Design code blocks that blend classic Mac OS aesthetics with terminal/code display:

WINDOW STYLE:
- Black terminal window with classic Mac frame
- Green phosphor text (#00FF00) on black background
- Window title bar: "Terminal" or language name
- Classic Mac window controls (close, minimize, zoom)

CODE STYLING:
- Font: Monaco, Courier, or classic monospace
- Size: 12px (pixel-perfect)
- Colors:
  * Keywords: Bright green (#00FF41)
  * Strings: Yellow (#FFFF00)
  * Comments: Dim green (#008F11)
  * Variables: White (#FFFFFF)
- Line numbers in left gutter
- Cursor: Blinking green block

FRAME DETAILS:
- 2px beveled border in classic Mac style
- Drop shadow for depth
- Copy button in top-right (classic Mac button style)
- Scroll bars if content overflows

Make it look like a classic Mac terminal window displaying modern code.
```

### 프롬프트 8: 아이콘 시스템

```
Create a set of 16x16 and 32x32 pixel icons in classic Mac OS bitmap style:

REQUIRED ICONS:
- Blog post (document with lines)
- Code file (document with brackets </>)
- Folder (classic Mac folder icon)
- User profile (person silhouette)
- Search (magnifying glass)
- Home (house)
- Email (envelope)
- GitHub (stylized 'G' or cat)
- Link/External (chain or arrow)
- Date (calendar)
- Tag (price tag)
- Settings (gear)

STYLE REQUIREMENTS:
- Pure pixel art (no anti-aliasing)
- Limited color palette (Mac OS classic colors)
- Sharp edges and clear shapes
- Consistent visual weight
- High contrast for readability
- Recognizable at small sizes

Create both light and dark versions for different backgrounds.
Make them instantly recognizable as classic Mac OS style icons.
```

## 🖥️ 전체 시스템 통합 프롬프트

### 프롬프트 9: 완전한 블로그 디자인 시스템

```
Create a comprehensive design system for a developer blog inspired by modern macOS:

OVERALL CONCEPT:
A sophisticated developer blog that embodies the modern macOS Monterey/Ventura design language with glass morphism and clean card layouts for a premium web experience.

DESIGN PRINCIPLES:
1. Modern macOS clean and refined visual language
2. Glass morphism with subtle shadow effects
3. Rounded corners and card-based layouts
4. Dynamic color system (light/dark mode support)
5. Modern UX focused on accessibility and readability

KEY COMPONENTS TO DESIGN:
- Apple Human Interface Guidelines based color system
- Multilingual modern typography system (Korean/English):
  * UI Text: SF Pro Display, Apple SD Gothic Neo (Korean), 14-16px
  * Headings: SF Pro Display Bold, Apple SD Gothic Neo Bold (Korean), 28-48px
  * Subheadings: SF Pro Text Semibold, Apple SD Gothic Neo Medium (Korean), 20-24px
  * Body: SF Pro Text, Apple SD Gothic Neo (Korean), 16-18px
  * Code: SF Mono, D2Coding (Korean), 14-16px
  * Captions: SF Pro Text, Apple SD Gothic Neo (Korean), 12-14px
- Modern buttons and interactions (hover, focus, active states)
- Glass morphism cards and containers
- SF Symbols style icon library
- Modern form elements (rounded input fields, dropdowns)
- Tab bar and navigation patterns
- Grid and card-based content layouts

PAGES TO INCLUDE:
1. Homepage (hero section + card grid layout)
2. Blog listing (modern card grid + filtering)
3. Single blog post (clean reading experience + sidebar)
4. About page (profile card + career timeline)

RESPONSIVE CONSIDERATIONS:
- Desktop: Wide margins and multi-column layouts (max 1200px)
- Tablet: Adaptive grids and touch-friendly interface
- Mobile: Single column, large touch areas, native app-like experience

OUTPUT:
Provide a design system that developers can implement with HTML/CSS/JavaScript while perfectly recreating the sophisticated and modern feel of the latest macOS.

Create the most elegant and functional developer blog design reflecting Apple's design philosophy.
```

## 📱 반응형 버전 프롬프트

### 프롬프트 10: 모바일 적응 버전

```
Adapt the classic Mac OS blog design for mobile devices while preserving the retro aesthetic:

MOBILE LAYOUT STRATEGY:
- Single column layout with stacked "windows"
- Collapsible menu bar that expands to full-screen overlay
- Touch-friendly button sizes (minimum 44px)
- Simplified window chrome but maintain 3D beveled look

SPECIFIC ADAPTATIONS:
1. Menu bar becomes hamburger menu with classic Mac folder-style dropdown
2. Multiple windows stack vertically instead of side-by-side
3. Window title bars become swipe targets for navigation
4. Code blocks get horizontal scroll with classic Mac scroll bar
5. Icon sizes scale up for touch (32x32 minimum)

PRESERVE MAC AESTHETIC:
- Keep 3D beveled effects scaled appropriately
- Maintain classic Mac color palette
- Use classic Mac interaction patterns adapted for touch
- Sharp edges and pixel-perfect alignment at all sizes

Create mobile mockups that feel like using a Mac Classic on a small screen.
```
