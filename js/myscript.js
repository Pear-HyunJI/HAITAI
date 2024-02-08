function getWindowWidth() {
  let ww = $(window).width();
  if (ww > 910) {
    $("html").addClass("pc").removeClass("mobile");
    $("#header .menuopen")
      .find("i")
      .removeClass("fa-times")
      .addClass("fa-bars");
    $("#header #nav").css({
      display: "flex",
      width: "auto",
    });
  } else {
    $("html").addClass("mobile").removeClass("pc");
    $("#header #nav").css({
      display: "none",
      width: "100%",
    });
  }
}

getWindowWidth();

$(window).resize(function () {
  getWindowWidth();
});

//slidePage1
$(".slideContainer1").slick({
  autoplay: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
});

$(".productSlideInner").slick({
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 300,
  arrows: false,
});
$(".eventSlideInner").slick({
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 300,
  arrows: false,
});
$(".mallSlideInner").slick({
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 300,
  arrows: false,
});

// slide1 반응형 tap

if ($(window).width() <= 10089) {
  $(".tapTitle > li").on("click", function () {
    $(this).addClass("on").siblings().removeClass("on");
    let num = $(this).index();
    $(this)
      .parent()
      .next()
      .find(".tapContent")
      .eq(num)
      .addClass("on")
      .siblings()
      .removeClass("on");
  });
} else {
}

//slidePage2
$(".honeySlideInner").slick({
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 300,
  arrows: true,
  prevArrow:
    '<button class="slick-prev slick-arrow" aria-label="previous" type="button" ><i class="fa-solid fa-chevron-left"></i></button>',
  nextArrow:
    '<button class="slick-next slick-arrow" aria-label="Next" type="button" ><i class="fa-solid fa-chevron-right"></i></button>',
});

// nav

$("#nav .depth1 > li").on("mouseover mouseout", function () {
  if ($("html").hasClass("pc")) {
    $(".subbg").stop().slideToggle(200);
    $(".subnavImg").stop().slideToggle(200);
    $(".depth2").stop().slideToggle(200);
  }
});
$("#nav .depth1 .depth2 > li").on("mouseover mouseout", function () {
  if ($("html").hasClass("pc")) {
    $(this).parent().parent().toggleClass("on");
    $(this).parent().parent().siblings().removeClass("on");
  }
});
$("#nav .depth1 > li").on("click", function () {
  if ($("html").hasClass("mobile")) {
    $(this).toggleClass("on");
    $(this).siblings().removeClass("on");
  }
});
$("#nav .depth1 .depth2 > li").on("mouseover mouseout", function () {
  $(this).toggleClass("on");
  $(this).siblings().removeClass("on");
});

$("#header .menuopen").on("click", function () {
  $(this).next().stop().slideToggle(200);
  $(this).find("i").toggleClass("fa-bars fa-times");
});

// $("#nav .depth1 > li").hover(
//   function () {
//     // 마우스 오버 시
//     let index = $(this).index();
//     $(".subnavImg").addClass("sn" + index);
//   },
//   function () {
//     // 마우스 아웃 시
//     $(".subnavImg").removeClass("sn" + index);
//   }
// );

$("#nav .depth1 > li").hover(
  function () {
    // 마우스 오버 시
    let index = $(this).index();
    $(".subnavImg").addClass("sn" + index);
    $(this).data("hoveredIndex", index);
  },
  function () {
    // 마우스 아웃 시
    let index = $(this).data("hoveredIndex");
    $(".subnavImg").removeClass("sn" + index);
  }
);
