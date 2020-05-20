$(function() {
  /*Slider*/

  if ($("#header").length) {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      autoplay: {
        delay: 1500,
        disableOnInteraction: false
      },
      //   navigation: {
      //     nextEl: ".swiper-button-next",
      //     prevEl: ".swiper-button-prev"
      //   },
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
  // плавное перемещение страницы к нужному блоку
  $("a.footer-arow").click(function(e) {
    e.preventDefault();
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({ scrollTop: destination }, 800);
  });
  $("a.menu__link").click(function(e) {
    e.preventDefault();
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({ scrollTop: destination }, 800);
  });
  $("a.tel-btn").click(function(e) {
    e.preventDefault();
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({ scrollTop: destination }, 800);
  });
});

/* Hamburger menu*/

$(".menu-icon-link").on("click", function() {
  $(".hamburger-menu").toggle();
});

$(".hamburger-menu__close").on("click", function() {
  $(".hamburger-menu").hide();
});

$(".hamburger-menu").on("click", function() {
  $(".hamburger-menu").hide();
});

$(".hamburger-menu__wrap").click(function(event) {
  event.preventDefault(); // Будут отменен переход по ссылке
  event.stopPropagation(); // Отмена всплытия
});

$(".hamburger-menu__link").bind("click", function() {
  $("a.hamburger-menu__link").click(function(e) {
    e.preventDefault();
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({ scrollTop: destination }, 800);
  });
  $(".hamburger-menu__link").on("click", function() {
    $(".hamburger-menu").hide();
  });
});
