function getWindowWidth() {
  let ww = $(window).width();
  if (ww > 1089) {
    $("html").addClass("pc").removeClass("mobile");
    $("#header #nav").css({
      display: "flex",
      width: "auto",
    });
    $("#header .depth1 > li").removeClass("on").find(".depth2").hide();
    if ($("#header #nav").parent().is(".cover")) {
      $("#header #nav").unwrap();
    }
  } else {
    $("html").addClass("mobile").removeClass("pc");
    $("#header #nav").css({
      display: "none",
      width: "100%",
    });
    $("html").addClass("mobile").removeClass("pc");
    $("#header .menuopen")
      .find("i")
      .removeClass("fa-times")
      .addClass("fa-bars");
    $("#header #nav").removeClass("on");
    $("nav .depth1 > li").removeClass("on");
  }
}
getWindowWidth();

$(window).resize(function () {
  getWindowWidth();
});

// sweetWorld
let symbolNear =
  $("#section .sweetWorld .symbol").offset().top +
  $("#section .sweetWorld .symbol").outerHeight() / 5;

$(window).on("scroll", function () {
  let sct = $(this).scrollTop() + $(this).height();

  if (sct >= symbolNear) {
    $("#section .sweetWorld .symbol").addClass("on");
  } else {
    $("#section .sweetWorld .symbol").removeClass("on");
  }
});

//slidePage1
// $(".slideContainer1").slick({
//   autoplay: true,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   arrows: true,
// });

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
  if (!$(this).find("i").hasClass("fa-bars")) {
    $("#header #nav .depth2").slideUp();
    $("#nav .depth1 > li").removeClass("on");
    $(this).find("i").addClass("fa-bars").removeClass("fa-times");
  } else {
    $(this).find("i").addClass("fa-times").removeClass("fa-bars");
  }
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

//sweetFactory a

$(".factoryButton a")
  .on("mouseover", function () {
    // 마우스 오버 시
    $(this)
      .find("i.fa-cookie")
      .removeClass("fa-cookie")
      .addClass("fa-cookie-bite");
  })
  .on("mouseout", function () {
    // 마우스 아웃 시
    $(this)
      .find("i.fa-cookie-bite")
      .removeClass("fa-cookie-bite")
      .addClass("fa-cookie");
  });

//goTop

$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $(".goTop").fadeIn();
  } else {
    $(".goTop").fadeOut();
  }
});

$(".goTop").on("click", function () {
  $("html").animate(
    {
      scrollTop: 0,
    },
    500
  );
  return false;
});

//popup창
$(".popup .close button").on("click", function () {
  if ($(this).prev().prop("checked")) {
    let tts = Date.now() + 100000;
    const obj = {
      check: "yes",
      expire: tts,
    };
    localStorage.setItem("objkey", JSON.stringify(obj));
  }
  $(".popup").removeClass("on");
});

$(window).on("load", function () {
  $("html").animate(
    {
      scrollTop: 0,
    },
    100
  );

  let objString = localStorage.getItem("objkey");
  if (objString) {
    const obj = JSON.parse(objString);
    if (Date.now() > obj.expire) {
      $(".popup").addClass("on");
      localStorage.removeItem("objkey");
    } else {
      $(".popup").removeClass("on");
    }
  } else {
    $(".popup").addClass("on");
  }
});
