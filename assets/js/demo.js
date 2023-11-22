var menuObject = {
  bigger_cursor: false,
};
// ------------------------------modal-btn-1-------------------------------
let font = 14;
$(".modal-btn1").on("click", function() {
  console.log("I ma clicked");
  font = font + 5;
  // $("body").css("cursor", "url('https://abs.twimg.com/emoji/v2/72x72/1f525.png') 100 36, auto !important");
  $("body").attr("style", `font-size: ${font}px !important; `);
  $("h1").attr("style", `font-size: ${font}px !important;`);
  $("p").attr("style", `font-size: ${font}px !important;`);
  //   $("img").attr("style", `display: none !important;`);
  //   let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  //         console.log(randomColor)
  //         $(':root').get(0).style.setProperty('--primary-color', randomColor, 'important');

  // const subtitles = document.getElementById("subtitles");
});

// ------------------------------modal-btn-1-end-------------------------------

// ------------------------------modal-btn-2-------------------------------
$(".modal-btn2").on("click", function() {
  console.log("pushed");
  $("body").css("cursor", "url('assets/img/cursor (1).png') 100 36, auto");
});

// ------------------------------modal-btn-2-end-------------------------------

// ------------------------------modal-btn-3-------------------------------
$(".modal-btn3").on("click", function() {
  $("img").attr("style", `display: none !important;`);
});
// ------------------------------modal-btn-3-end-------------------------------

// reading-line------------------------------------------------------------------
$(document).ready(function() {
  $(".accessibility_line").css("display", "none");
  $(".reading-line").on("click", function() {
      $(".accessibility_line").css("display", "block");
      $(document).on("mousemove", function(e) {
          var scrollPosition = $(window).scrollTop();
          $(".accessibility_line").css("top", e.clientY + "px");
      });
  });
  /*  $(".assessbility_reading_mask_dark").on("click", function () {
      // $(".accessibility_line").css("display", "block");
      $(document).on("mousemove", function (e) {
        var scrollPosition = $(window).scrollTop();
        $(".accessibility_line").css("height", e.clientY  + "px");
      });
    }); */
});

// reading-line------------------------------------------------------------------

// -------------------------------changefont--------------------------------------

$(".changefont").on("click", function() {
  let fontfamily = "'Zilla Slab', serif";
  let font = 32;
  $("body").attr(
      "style",
      `font-family: ${fontfamily} !important; font-size: ${font}px !important;`
  );
  $("h1").attr(
      "style",
      `font-family: ${fontfamily}!important; font-size: ${font}px !important;`
  );
  $("p").attr(
      "style",
      `font-family: ${fontfamily} !important; font-size: ${font}px !important;`
  );
});

// ---------------------------------change-fontend-------------
let brightness = 50;
$(".brightness").on("click", function() {
  brightness = brightness + 50;
  console.log("pushed", brightness);
  $("html").attr("style", `filter: brightness(${brightness}%) !important;`);
});
// ------------------------------------------Invert-----------------------------------------------
$(".invert").on("click", function() {
  let darkColor = "#03b3fd"; // Change this to the dark color of your choice
  $("body").css("background-color", darkColor);
  $("body").css("color", darkColor); // Optional: change text color to contrast with background
  $("h1").css("color", "#feb45d");
  $("li").css("color", "#ffffff");
  $("p").attr("style", `color: #ffffff;`);

  // For changing CSS variables (works in modern browsers)
  // document.documentElement.style.setProperty('--primary-color', darkColor);
});

/* ----------------------------------------------------------------------Line height */
let lineheight = 1.5; // Set the initial line height value (adjust as needed)

$(".lineheight").on("click", function() {
  // Increase the line height by a specific factor (e.g., 1.5 times the current line height)
  lineheight += 0.1; // You can adjust the increment value as needed

  // Set the new line height using .css() method
  $("body").css("line-height", lineheight);
});

// ----------------------------------------contrast----------------------------

let contrast = 100; // Initial contrast value (adjust as needed)

$(".contrast").on("click", function() {
  contrast += 50; // Increase contrast by 50 units (adjust as needed)
  console.log("Contrast increased to", contrast);
  $("html").css("filter", `contrast(${contrast}%)`);
});

// -----------------------------Saturation--------------------------

let saturation = 100; // Initial saturation value (adjust as needed)

$(".saturation").on("click", function() {
  saturation += 50; // Increase saturation by 50 units (adjust as needed)
  console.log("Saturation increased to", saturation);
  $("html").css("filter", `saturate(${saturation}%)`);
});

// --------------------------------Grayscale--------------------

let grayscaleValue = 0; // Initial grayscale value (0% means no grayscale, 100% means full grayscale)

$(".grayscale").on("click", function() {
  grayscaleValue += 50; // Increase grayscale by 50 units (adjust as needed)
  console.log("Grayscale increased to", grayscaleValue);
  $("html").css("filter", `grayscale(${grayscaleValue}%)`);
});
// ---------------------------------------Reading mask---------------------------------
$(document).ready(function() {
  $(".readingmask").on("click", function() {
      $(document).on("mousemove", function(e) {
          var scrollPosition = $(window).scrollTop();
          $(".assessbility_reading_mask").css(
              "top",
              e.clientY + scrollPosition + "px"
          );
      });
  });

  // Initially hide the .accessibility_line element

  $(".assessbility_reading_mask").css("display", "none");

  // Show .accessibility_line element when .reading-line is clicked
  $(".readingmask").on("click", function() {
      $(".assessbility_reading_mask").css("display", "block");
  });
});

$(document).ready(function() {
  $(".readingmaskdark").on("click", function() {
      $(document).on("mousemove", function(e) {
          var scrollPosition = $(window).scrollTop();
          $(".assessbility_reading_mask_dark").css(
              "top",
              e.clientY + scrollPosition + "px"
          );
      });
  });

  // Initially hide the .accessibility_line element

  $(".assessbility_reading_mask_dark").css("display", "none");

  // Show .accessibility_line element when .reading-line is clicked
  $(".readingmask").on("click", function() {
      $(".assessbility_reading_mask_dark").css("display", "block");
  });
});

$(".appreadingmask").on("click", function() {
  $(document).ready(function() {
      // Cache the jQuery objects for better performance
      const myDivTop = $(".accessibly-app-reading-mask-top");
      const myDivBottom = $(".accessibly-app-reading-mask-bottom");
      const readingMask = $(".accessibly-app-reading-mask");
      const windowHeight = $(window).height();

      $(document).on("mousemove", function(e) {
          // Calculate the new top and bottom positions
          const newTop = e.clientY - myDivTop.height() - 30;
          const newBottom = windowHeight - e.clientY - 30;

          // Set the background color and z-index for the reading mask
          readingMask.css({
              "background-color": "rgba(0, 0, 0, 0.5)",
              "z-index": 100000000000000020000,
          });
          // if(newTop > 1){
          //   newTop = -newTop;
          // }

          // Apply the new heights to the top and bottom parts of the reading mask
          myDivTop.css({
              top: newTop + "px"
          });
          myDivTop.css({
              height: e.clientY + "px"
          });
          myDivBottom.css({
              height: newBottom + "px"
          });
      });
  });
});