var menuObject = {
  "bigger_cursor": false,

};

let font = 14;
$(".modal-btn1").on("click", function () {
  console.log("I ma clicked")
  font = font + 5;
  console.log(font)

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
$(".modal-btn2").on("click", function () {
  console.log("pushed")
  $("body").css("cursor", "url('assets/img/cursor (1).png') 100 36, auto");
});
$(".modal-btn3").on("click", function () {

  $("img").attr("style", `display: none !important;`);
  let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor)
  $(':root').get(0).style.setProperty('--primary-color', randomColor, 'important');

  const subtitles = document.getElementById("subtitles");

});


$(".modal-btn4").on("click", function () {

  $("body").css("cursor", "url('https://abs.twimg.com/emoji/v2/72x72/1f525.png') 100 36, auto !important");

});




// reading-line------------------------------------------------------------------
$(document).ready(function () {
  $(".reading-line").on("click", function () {
    $(document).on("mousemove", function (e) {
      var scrollPosition = $(window).scrollTop();
      $(".accessibility_line").css("top", e.clientY + scrollPosition + "px");
    });
  });

  // Initially hide the .accessibility_line element
  $(".accessibility_line").css("display", "none");

  // Show .accessibility_line element when .reading-line is clicked
  $(".reading-line").on("click", function () {
    $(".accessibility_line").css("display", "block");
  });
});

// reading-line------------------------------------------------------------------



$(document).ready(function () {
  $('#clickElement').on('click', function () {
    $(this).css('background-color', 'lightgreen');
  });
});
$(document).ready(function () {
  $('#invertElement').click(function () {
    var currentColor = $(this).css('background-color');
    var invertedColor = invertColor(currentColor);
    $(this).css('background-color', invertedColor);
  });

  function invertColor(hex) {
    // Remove the hash sign if it exists
    hex = hex.replace(/^#/, '');

    // Convert the hex color to RGB
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);

    // Invert the RGB values
    r = 255 - r;
    g = 255 - g;
    b = 255 - b;

    // Convert the inverted RGB values back to hex
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    // Pad single-digit hex values with a leading zero
    if (r.length === 1) r = '0' + r;
    if (g.length === 1) g = '0' + g;
    if (b.length === 1) b = '0' + b;

    // Combine the inverted RGB values to get the inverted color
    return '#' + r + g + b;
  }
});

