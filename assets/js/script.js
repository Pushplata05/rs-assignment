var menuObject = {
  bigger_cursor: false,
  show_images: false,
  show_mask: false,
};

// Initial state
var initialState = {
  font: 28,
  brightness: 100,
  contrast: 100,
  saturation: 100,
  grayscaleValue: 0,
  lineheight: 1.5,
  backgroundColor: "white",
  fontColor: "black",
  fontFamily: "'Zilla Slab', serif",
};
var tempstate = initialState;

function showReadingMask() {
  const myDivTop = $(".accessibly-app-reading-mask-top");
  const myDivBottom = $(".accessibly-app-reading-mask-bottom");
  const readingMask = $(".accessibly-app-reading-mask");
  const windowHeight = $(window).height();

  // Unbind the previous event listener to avoid multiple bindings
  $(document).off("mousemove");

  if (menuObject.show_mask) {
   
    $(document).on("mousemove", function (e) {
      console.log(menuObject.show_mask);
      // Calculate the new top and bottom positions
      const newTop = e.clientY - myDivTop.height() - 30;
      const newBottom = windowHeight - e.clientY - 30;

      // Set the background color and z-index for the reading mask
      readingMask.css({
        "background-color": "rgba(0, 0, 0, 0.5)",
        "z-index": 100000000000000020000,
      });

      // Apply the new heights to the top and bottom parts of the reading mask
      myDivTop.css({
        top: newTop + "px",
        height: e.clientY + "px",
      });

      myDivBottom.css({
        height: newBottom + "px",
      });
    });
  } else {
   
    myDivTop.css({ top: "0px", height: "0px" });
    myDivBottom.css({ height: "0px" });
    readingMask.css({ "z-index": -9999999 });
  }
}


// ------------------------------Font-btn-1-------------------------------
$(".modal-btn1").on("click", function () {
  tempstate.font += 5;
  $("body").attr(
    "style",
    `font-family: ${tempstate.fontFamily}; font-size: ${tempstate.font}px !important;`
  );
  $("h1").attr(
    "style",
    `font-family: ${tempstate.fontFamily}; font-size: ${tempstate.font}px !important;`
  );
  $("p").attr(
    "style",
    `font-family: ${tempstate.fontFamily}; font-size: ${tempstate.font}px !important;`
  );
});

// ------------------------------Currsor-btn-2-------- bigger_curso : true/ false-----------------------
$(".modal-btn2").on("click", function () {
  menuObject.bigger_cursor = !menuObject.bigger_cursor;
  if (menuObject.bigger_cursor) {
    $(".modal-btn2").text("Default cursor")
    $("body").css("cursor", "url('assets/img/cursor (1).png'), auto");
  } else {
    $(".modal-btn2").text("Bigger cursor")
    $("body").css("cursor", "auto");
  }
});
// ------------------------------modal-btn-3------ Images: true/false-------------------------
$(".modal-btn3").on("click", function () {
  menuObject.show_images = !menuObject.show_images;
  if (menuObject.show_images) {
    $(".modal-btn3").text("Show Images")
    $("img").attr("style", `display: none !important;`);
  } else {
    $(".modal-btn3").text("Hide Images")
    $("img").attr("style", `display: inline-block !important;`);
  }

});

$(".reading-line").on("click", function () {
  $(".accessibility_line").css("display", "block");
  $(document).on("mousemove", function (e) {
    var scrollPosition = $(window).scrollTop();
    $(".accessibility_line").css("top", e.clientY + "px");
  });
});

// -------------------------------changefont--------------------------------------
$(".changefont").on("click", function () {
  tempstate.fontfamily = "'Zilla Slab', serif";
  tempstate.font = 42;
  $("body").attr(
    "style",
    `font-family: ${tempstate.fontfamily}; font-size: ${tempstate.font}px !important;`
  );
  $("h1").attr(
    "style",
    `font-family: ${tempstate.fontfamily}; font-size: ${tempstate.font}px !important;`
  );
  $("p").attr(
    "style",
    `font-family: ${tempstate.fontfamily}; font-size: ${tempstate.font}px !important;`
  );
});

// ---------------------------------change-fontend-------------
$(".brightness").on("click", function () {
  tempstate.brightness += 50;
  $("html").attr(
    "style",
    `filter: brightness(${tempstate.brightness}%) !important;`
  );
});

$(".invert").on("click", function () {
  let darkColor = "#03b3fd"; // Change this to the dark color of your choice
  $("body").css("background-color", darkColor);
  $("body").css("color", darkColor); // Optional: change text color to contrast with background
  $("h1").css("color", "#feb45d");
  $("li").css("color", "#ffffff");
  $("p").attr("style", `color: #ffffff;`);
});
$(".lineheight").on("click", function () {
  tempstate.lineheight += 0.1;
  $("body").css("line-height", tempstate.lineheight);
});

$(".contrast").on("click", function () { tempstate.contrast += 50; $("html").css("filter", `contrast(${tempstate.contrast}%)`); });
$(".saturation").on("click", function () { tempstate.saturation += 50; $("html").css("filter", `saturate(${tempstate.saturation}%)`); });
$(".grayscale").on("click", function () { tempstate.grayscaleValue += 50; $("html").css("filter", `grayscale(${tempstate.grayscaleValue}%)`); });

$(document).ready(function () {
  $(".appreadingmask").on("click", function () {
    menuObject.show_mask = !menuObject.show_mask;
    showReadingMask()
  })
});

// ... (other button handlers)

// Reset button



function resetChanges() {

  let initialState = {
    font: 28,
    brightness: 100,
    contrast: 100,
    saturation: 100,
    grayscaleValue: 0,
    lineheight: 1.5,
    backgroundColor: "white",
    fontColor: "black",
    fontFamily: "'Zilla Slab', serif",
  };
  console.log(initialState, tempstate)
  $("body").attr("style", `font-family: ${initialState.fontFamily}; font-size: ${initialState.font}px !important;`);
  $("h1").attr("style", `font-family: ${initialState.fontFamily}; font-size: ${initialState.font}px !important;`);
  $("p").attr("style", `font-family: ${initialState.fontFamily}; font-size: ${initialState.font}px !important;`);

  // Reset cursor
  menuObject.bigger_cursor = false;
  menuObject.show_images = false;
  menuObject.show_mask = false;
  showReadingMask()
  $(".accessibility_line").css("display", "none");
  $("body").css("cursor", "auto");
  $("img").attr("style", `display: inline-block !important;`);
  // Reset brightness, contrast, saturation, grayscale, line height
  $("html").css(
    "filter",
    `brightness(${initialState.brightness}%) contrast(${initialState.contrast}%) saturate(${initialState.saturation}%) grayscale(${initialState.grayscaleValue}%)`
  );
  $("body").css("line-height", initialState.lineheight);

  // Reset background and font color
  $("body").css("background-color", initialState.backgroundColor);
  $("body").css("color", initialState.fontColor);
  $("h1").css("color", initialState.fontColor);
  $("li").css("color", initialState.fontColor);
  $("p").attr("style", `color: ${initialState.fontColor};`);
}
$(".reset-btn").on("click", function () {
  resetChanges();
});

