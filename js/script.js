console.clear();

/* 모바일 사이드바 구현 시작 */

function mobileSideBarInit() {
  $("#mobile-menu-btn").click(function () {
    mobileSideBarShow();
  });

  $("#mobile-side-bar").click(function () {
    mobileSideBarHide();
  });

  $("#close-btn").click(function () {
    mobileSideBarHide();
  });

  $("#side-bar-content").click(function (e) {
    // e.stopproPagation();
    return false;
  });
}

mobileSideBarInit();

// 모바일 사이드바 등장
function mobileSideBarShow() {
  $("html").addClass("overflow-hidden");
  $("#mobile-side-bar").addClass("active");
}

// 모바일 사이드바 숨김
function mobileSideBarHide() {
  $("html").removeClass("overflow-hidden");
  $("#mobile-side-bar").removeClass("active");
  $(".mobile-menu > ul ul").stop().slideUp();
  $(".mobile-menu ul > li.active").removeClass("active");
}

/* 모바일 사이드바 구현 끝 */

/* 아코디언 메뉴 구현 시작 */

function mobileSideMenuInit() {
  // depth1 li 에 마우스 올렸을 때 열기
  $(".mobile-menu ul > li").click(function () {
    let $this = $(this);
    let has = $this.hasClass("active");

    $this.siblings(".active").find("ul").stop().slideUp(500);

    // 클릭 당한 대상의 형제들 중에서 active가 붙어 있는 녀석 들 중에서
    // active가 붙어 있는 후손이 있으면 active를 제거해라
    $this.siblings(".active").find(".active").removeClass("active");

    // 클릭 당한 대상의 형제들 중에서 active가 붙어 있으면 제거
    $this.siblings(".active").removeClass("active");

    if (has) {
      $this.find("> ul").stop().slideUp(500);
      $this.find(".active").removeClass("active");
      $this.removeClass("active");
    } else {
      $this.find("> ul").stop().slideDown(500);
      $this.addClass("active");
    }
  });

  $(".mobile-menu ul").click(function (e) {
    // e.stopPropagation();
    return false;
  });
}

mobileSideMenuInit();

/* 아코디언 메뉴 구현 끝 */

$(function () {
  var $win = $(window);
  var trigger = 120; // === 전환위치
  var mobileWidth = 801; // 모바일 기준

  function onScroll() {
    var winW = $win.width();

    if (winW <= mobileWidth) {
      // 모바일은 스크롤헤더 비활성화
      $(".new-header").removeClass("active"); // 모바일일때 기본상태 유지
      $(".header-top-bar").removeClass("hide");
      return; // 아래 pc코드 실행x
    }

    // === 여기부터 PC 전용 스크롤 헤더 ===
    var s = $win.scrollTop(); // 얼마나 스크롤 되었는지(px)

    if (s > trigger) {
      $(".new-header").addClass("active"); // 스크롤 한 헤더 ON
      $(".header-top-bar").addClass("hide"); // 기존 헤더 OFF
    } else {
      $(".new-header").removeClass("active"); // 스크롤 헤더 OFF
      $(".header-top-bar").removeClass("hide"); // 기존 헤더 ON
    }
  }
  onScroll(); // 첫 로딩 시 체크
  $win.on("scroll", onScroll); //스크롤 감지
});

function section1SwiperInit() {
  const swiper = new Swiper(".section-1 .swiper", {
    // Optional parameters
    direction: "horizontal",
    // 한 번에 보여줄 슬라이드 개수 (기본값)
    slidesPerView: 1,

    // 슬라이드 간 간격 (픽셀)
    spaceBetween: 20,

    // 한 번에 넘길 슬라이드 그룹 수
    slidesPerGroup: 1,

    // 활성 슬라이드를 중앙에 배치
    centeredSlides: false,

    // 무한 루프 활성화
    loop: true,

    // 슬라이드 전환 속도 (밀리초)
    speed: 600,

    // 자동 재생 설정
    autoplay: {
      delay: 5000, // 5초마다 자동 전환
      disableOnInteraction: false, // 사용자 상호작용 후에도 자동재생 유지
      pauseOnMouseEnter: true, // 마우스 호버 시 일시정지
    },
    // 전환 효과: 'slide', 'fade', 'cube', 'coverflow', 'flip'
    effect: "slide",
    // fadeEffect: { crossFade: true }

    pagination: {
      el: ".section-1 .swiper-pagination",
      // 'progressbar' | 'bullets' | 'fraction' | 'custom'
      type: "bullets",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".section-1 .swiper-button-next",
      prevEl: ".section-1 .swiper-button-prev",
    },
  });

  // 재생/일시정지
  const autoplayBtn = document.querySelector(".swiper-pagination-btn-control");

  autoplayBtn.addEventListener("click", () => {
    let isContains = autoplayBtn.classList.contains("active");

    if (isContains) {
      autoplayBtn.classList.remove("active");
      swiper.autoplay.start();
    } else {
      autoplayBtn.classList.add("active");
      swiper.autoplay.stop();
    }
  });
}

section1SwiperInit();

function section3SwiperInit() {
  const swiper = new Swiper(".section-3 .swiper", {
    // 한 번에 보여줄 슬라이드 개수 (기본값)
    slidesPerView: 4.1,

    // 활성 슬라이드를 중앙에 배치
    centeredSlides: true,

    // 무한 루프 활성화
    loop: true,

    // 슬라이드 전환 속도 (밀리초)
    speed: 600,

    // 자동 재생 설정
    autoplay: {
      delay: 4000, // 4초마다 자동 전환
      disableOnInteraction: false, // 사용자 상호작용 후에도 자동재생 유지
      pauseOnMouseEnter: true, // 마우스 호버 시 일시정지
    },

    // Navigation arrows
    navigation: {
      nextEl: ".section-3 .swiper-button-next",
      prevEl: ".section-3 .swiper-button-prev",
    },
    // 핵심: 슬라이드 진행률 감지
    watchSlidesProgress: true,
    on: {
      progress: function (swiper) {
        const scaleStep = 0.15;

        for (let i = 0; i < swiper.slides.length; i++) {
          const slide = swiper.slides[i];

          // slide.progress 값 설명:
          // 중앙 = 0
          // 바로 오른쪽 = 1, 바로 왼쪽 = -1
          // 그 다음 오른쪽 = 2, 그 다음 왼쪽 = -2

          // 2. 거리의 절댓값 계산 (왼쪽/오른쪽 동일하게 처리하기 위함)
          const distance = Math.abs(slide.progress);

          // 3. 스케일 계산 공식
          // 기본 1에서 (거리 * 줄어들 비율) 만큼 뺍니다.
          let scale = 1 - distance * scaleStep;

          // 4. 최소 크기 제한 (너무 작아져서 안 보이는 것 방지)
          if (scale < 0.5) scale = 0.5;

          // 5. 스타일 적용
          slide.style.transform = `scale(${scale})`;
        }
      },
    },
  });

  // 재생/일시정지
  const autoplayBtn = document.querySelector(".btnFieldPlay");

  autoplayBtn.addEventListener("click", () => {
    let isContains = autoplayBtn.classList.contains("active");

    if (isContains) {
      autoplayBtn.classList.remove("active");
      swiper.autoplay.start();
    } else {
      autoplayBtn.classList.add("active");
      swiper.autoplay.stop();
    }
  });
}

section3SwiperInit();

// let activedSlide = $(".swiper-slide-active");
// activedSlide.prev().css("transform", "scale(0.88)");
// activedSlide.next().css("transform", "scale(0.88)");
// activedSlide.prev().prev().css("transform", "scale(0.84)");
// activedSlide.next().prev().css("transform", "scale(0.84)");

function section4SwiperInit() {
  const swiper = new Swiper(".section-4 .swiper", {
    slidesPerView: 3,

    // Optional parameters
    // direction: "horizontal",

    // 슬라이드 간 간격 (픽셀)
    spaceBetween: 20,

    // 한 번에 넘길 슬라이드 그룹 수
    slidesPerGroup: 1,

    // 활성 슬라이드를 중앙에 배치
    centeredSlides: true,

    // 슬라이드 진행 상태 감시 (클릭 이동을 위해 중요)
    watchSlidesProgress: true,

    // 커스텀 CSS를 위한 활성 클래스 이름 재정의
    slideActiveClass: "swiper-slide-active",

    // 무한 루프 활성화
    loop: true,

    watchOverflow: false, // 슬라이드가 적어도 loop 꺼지지 않게
    loopPreventsSliding: false, // loop 계산 중 슬라이드 막힘 방지
    // loop 안정화
    loopedSlides: 3,
    // loopAdditionalSlides: 3, // 복제 슬라이드 여유
    /* watchSlidesProgress: true,
		watchSlidesVisibility: true, */

    observer: true, // DOM/사이즈 변화 감지
    observeParents: true,

    // 슬라이드 전환 속도 (밀리초)
    speed: 600,

    breakpoints: {
      // 화면 너비가 1200px 이상일 때 (PC)
      1200: {
        slidesPerView: "3", //
        spaceBetween: 20, // PC 환경 간격 조정
      },

      // 화면 너비가 801px 이상일 때 (태블릿)
      801: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      // 화면 너비가 800px 이하일 때 (모바일)
      0: {
        slidesPerView: 1.3,
        spaceBetween: 10,
      },
    },

    pagination: {
      el: ".section-4 .swiper-pagination",
      // 'progressbar' | 'bullets' | 'fraction' | 'custom'
      type: "bullets",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".section-4 .swiper-button-next",
      prevEl: ".section-4 .swiper-button-prev",
    },

    // 클릭이벤트/ data-swiper-slide-index는 Swiper가 loop 복제할 때 원본 index를 자동으로 넣어줌.
    on: {
      init() {
        const swiper = this;

        swiper.slides.forEach((slide) => {
          slide.addEventListener("click", () => {
            const realIndex = slide.getAttribute("data-swiper-slide-index");
            swiper.slideToLoop(realIndex);
          });
        });
      },
    },
  });

  window.addEventListener("load", () => {
    swiper.update();
    swiper.loopFix();
  });
}

section4SwiperInit();

// 스크롤 top버튼
$(function () {
  $(".btnTop").on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
});

// 패밀리사이트 dropdown 토글
$(function () {
  const $familySite = $(".familiy-site");
  const $familyBtn = $(".family-list");

  $familyBtn.on("click", function (e) {
    e.stopPropagation();
    $familySite.toggleClass("active");
  });

  $familySite.on("mouseleave", function () {
    $familySite.removeClass("active");
  });

  $familySite.on("click", function () {
    $familySite.removeClass("active");
  });
});

// 언어lan dropdown 토글
$(function () {
  const $lan = $(".lan");
  const $lanBtn = $(".lan-form");
  const $lanList = $(".lan-list");

  $lanBtn.on("click", function (e) {
    e.stopPropagation();

    const $current = $(this).closest(".lan");
    $current.toggleClass("active");
  });

  $lan.on("mouseleave", function () {
    $(this).removeClass("active");
  });

  $lanList.on("click", function () {
    $(this).closest(".lan").removeClass("active");
  });
});
