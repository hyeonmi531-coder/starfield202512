# 스타필드 하남 클론 코딩 프로젝트

이 프로젝트는 스타필드 하남 공식 웹사이트의 디자인과 주요 기능을 분석하여 구현한 클론 코딩 프로젝트입니다.  
반응형 웹 디자인을 적용하여 PC와 모바일 환경에서 최적화된 화면을 제공하며, 다양한 인터랙티브 UI 요소를 포함하고 있습니다.

## 사용 기술 (Tech Stack)

### Front-End

- **HTML5**: 시맨틱 마크업 준수
- **CSS3 / SCSS**: 스타일링 및 SCSS를 활용한 계층 구조 관리
- **Tailwind CSS (v4 CDN)**: 유틸리티 클래스 기반의 빠른 스타일링
- **DaisyUI (v5 CDN)**: Tailwind CSS 컴포넌트 라이브러리 활용
- **JavaScript / jQuery (3.7.1)**: DOM 조작 및 이벤트 처리, UI 인터랙션 구현

### Libraries

- **Swiper.js**: 터치 슬라이드 및 캐러셀 기능 구현 (Main Visual, Special Field, Best Campaign 등)
- **FontAwesome (6.7.2)**: 아이콘 폰트 사용

## 📂 폴더 구조 (Directory Structure)

```
root
├── assets
│   └── images      # 프로젝트에 사용된 이미지 리소스
├── css
│   └── main.css    # SCSS 컴파일된 최종 CSS 파일
├── js
│   └── script.js   # 주요 UI/UX 기능 구현 스크립트
├── scss
│   └── main.scss   # 스타일 소스 파일
└── index.html      # 메인 페이지
```

## 주요 기능 (Key Features)

### 1. 반응형 헤더 (Responsive Header)

- **PC 환경**:
  - 스크롤 시 상단 헤더가 변경되며 고정(Sticky Header)되는 인터랙션 구현 (`top-bar` -> `new-header`).
  - **메가 메뉴(Mega Menu)**: `nav` 호버 시 하위에 전체 메뉴가 펼쳐지는 드롭다운 기능.
  - 날씨 정보 및 로고, 유틸리티 메뉴 배치.
- **모바일 환경**:
  - 햄버거 메뉴 버튼 클릭 시 사이드바(`mobile-side-bar`) 등장.
  - **아코디언 메뉴(Accordion Menu)**: 1차 메뉴 클릭 시 2차 메뉴가 슬라이드 다운/업 되는 토글 기능 구현. 독립적인 동작을 위해 형제 요소 자동 닫힘 처리.

### 2. 다양한 슬라이드 구현 (Swiper Integration)

`Swiper.js`를 활용하여 섹션별로 다양한 형태의 슬라이더를 구현했습니다.

- **Main Visual (Section 1)**:
  - 전체 너비 슬라이드, 자동 재생(Autoplay), 루프(Loop), 페이지네이션 및 네비게이션 적용.
  - 재생/일시정지 커스텀 버튼 기능.
- **Special Field (Section 3)**:
  - `watchSlidesProgress`를 활용하여 중앙 슬라이드와 주변 슬라이드의 크기를 다르게 조절하는 3D 입체 효과 구현 (`scale` transformation).
  - 다중 슬라이드 뷰(SlidesPerView) 및 센터 모드 적용.
- **Best Campaign (Section 4)**:
  - 반응형 중단점(`breakpoints`) 설정:
    - PC (1200px+)
    - 태블릿 (801px+)
    - 모바일 (800px-)

### 3. 기타 UI/UX 요소

- **Scroll to Top**: 페이지 최상단으로 부드럽게 이동하는 버튼 구현.
- **Dropdowns**: 패밀리 사이트 및 언어 선택 메뉴의 토글 인터랙션 (외부 클릭 시 닫힘 처리 포함).
- **Video/Image Assets**: 고해상도 이미지 및 아이콘 활용하여 시각적 완성도 제고.
