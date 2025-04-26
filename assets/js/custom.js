$("#webticker-update-example").webTicker({
    height: "100px",
    duplicate: true,
    rssfrequency: 0,
    startEmpty: false,
    hoverpause: true,
    transition: "ease",
  });
   function openNav() {
     document.getElementById("mySidenav").style.width = "300px";
   }
  
   function closeNav() {
     document.getElementById("mySidenav").style.width = "0";
   }
  
  $(document).ready(function () {
    $(".dropdown-submenu .dropdown-item").on("click", function (event) {
      event.stopPropagation();
    });
   
    
    $("button, .showed-content").hover(function () {
      setTimeout(function () {
        $(".main-heading").fadeOut("slow");
      }, 1500);
    });
  
    $(".").click(function () {
      setTimeout(function () {
        $(".scrlBotm").fadeOut("slow");
      }, 500);
  
      $("html, body").animate(
        {
          scrollTop: $(document).height(),
        },
        1000
      );
      return false;
    });
    $(window).scroll(function () {
      var top = 0;
      var st = $(this).scrollTop();
      if (st == top) {
        setTimeout(function () {
          $(".scrlBotm").fadeIn("slow");
        }, 500);
  
        setTimeout(function () {
          $(".scrlTop").fadeOut("slow");
        }, 500);
        $(".scrlTop").css("visibility", "hidden");
      } else {
        setTimeout(function () {
          $(".scrlBotm").fadeOut("slow");
        }, 500);
        $(".scrlTop").css("visibility", "visible");
      }
    });
    $(".scrlTop").click(function () {
      setTimeout(function () {
        $(".scrlTop").fadeOut("slow");
      }, 500);
  
      $("html, body").animate(
        {
          scrollTop: "0px",
        },
        1000
      );
      return false;
    });
  
    $(window).scroll(function () {
      var minHeight = $(window).scrollTop();
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 100
      ) {
        setTimeout(function () {
          $(".scrlTop").fadeIn("slow");
        }, 500);
      } else if (minHeight > 500) {
        $(".scrlTop").fadeOut(200);
      } else {
      }
    });
  
    $(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow:
        "<button class='slick-prev slick-arrow'><iconify-icon icon='fluent:arrow-circle-up-48-regular'></iconify-icon></iconify-icon></button>",
      nextArrow:
        "<button class='slick-next slick-arrow'><iconify-icon icon='fluent:arrow-circle-up-48-regular'></iconify-icon></button>",
      fade: true,
      asNavFor: ".slider-nav",
    });
    $(".slider-nav").slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      asNavFor: ".slider-for",
      dots: false,
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 6,
          },
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  
    $(window).scroll(function () {
      if ($(window).scrollTop() > 76) {
        $("header").addClass("sticky");
      } else {
        $("header").removeClass("sticky");
      }
    });
  
    $(".responsive").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow:
        "<button class='slick-prev slick-arrow'><iconify-icon icon='fluent:arrow-circle-up-48-regular'></iconify-icon></iconify-icon></button>",
      nextArrow:
        "<button class='slick-next slick-arrow'><iconify-icon icon='fluent:arrow-circle-up-48-regular'></iconify-icon></button>",
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  
    $(".approach").slick({
      dots: false,
  
      infinite: false,
  
      speed: 300,
  
      slidesToShow: 1,
  
      slidesToScroll: 1,
  
      arrows: true,
  
      autoplay: true,
  
      autoplaySpeed: 6000,
  
      prevArrow:
        "<button class='slick-prev slick-arrow slick-disabled'><iconify-icon icon='ph:arrow-circle-left-light'></iconify-icon><span>Back</span></button>",
  
      nextArrow:
        "<button class='slick-next slick-arrow'><span>Next</span><iconify-icon icon='ph:arrow-circle-right-light'></iconify-icon></button>",
    });
  
    $(".info-approach .slick-prev").hide();
  
    $(".approach").on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        if (nextSlide === 0) {
          $(".slick-prev").hide();
        } else {
          $(".slick-prev").show();
        }
      }
    );
  
    $(".approach").on("afterChange", function (event, slick, currentSlide) {
      if (currentSlide === slick.slideCount - 1) {
        $(".slick-next").hide();
      } else {
        $(".slick-next").show();
      }
    });
  
    $(".partners").slick({
      dots: true,
  
      infinite: true,
  
      speed: 300,
  
      slidesToShow: 1,
  
      slidesToScroll: 1,
  
      arrows: false,
  
      autoplay: true,
  
      autoplaySpeed: 3000,
  
      adaptiveHeight: true,
  
      prevArrow:
        "<button class='slick-prev slick-arrow slick-disabled'><iconify-icon icon='ph:arrow-circle-left-light'></iconify-icon><span>Back</span></button>",
  
      nextArrow:
        "<button class='slick-next slick-arrow'><span>Next</span><iconify-icon icon='ph:arrow-circle-right-light'></iconify-icon></button>",
    });
  
    $(".industries-scroll .autoplay").slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      arrows: false,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 6,
          },
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });
   function playVideo(videoUrl) {
          var video = document.getElementById("myVideo");
          var thumbnail = document.getElementById("thumbnail");
  
          // Set the video source
          video.querySelector("source").src = videoUrl;
  
          // Load the new source
          video.load();
  
          // Hide the thumbnail and play the video
          thumbnail.style.display = "none";
          video.play();
   }
  
  
   document.addEventListener("DOMContentLoaded", function () {
          const anchorLinks = document.querySelectorAll(
              '.table-content a[href^="#"]'
          );
          const offset = 100;
          anchorLinks.forEach((link) => {
              link.addEventListener("click", function (e) {
                  e.preventDefault();
                  const targetId = link.getAttribute("href");
                  const targetElement = document.querySelector(targetId);
                  if (targetElement) {
                      setTimeout(function () {
                          const topOffset = targetElement.getBoundingClientRect().top;
                          window.scrollTo({
                              top: topOffset + window.scrollY - offset,
                              behavior: "smooth",
                          });
                      }, 200);
                  } 
              });
          });
          window.onbeforeunload = function () {
              window.scrollTo(0, 0);
          };
   });   
  
   $(document).ready(function () {
          $(document).on("click", ".tabbing-outer .nav-link", function () {
              let tabbing_background = $(".tabbing-outer .nav-link.active").data(
                  "background-color"
              );
              document.documentElement.style.setProperty(
                  "--bs-tabing-outer",
                  tabbing_background
              );
          });
   });  