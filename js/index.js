$(document).ready(function () {
  $(window).scroll(function () {
      if ($(this).scrollTop()) {
          $('header').addClass("onScroll");
      }
      else {
          $('header').removeClass("onScroll");
      }
  });
});

// hàm bật cái menu
function dropDownMenu() {
  // dom tới cái meunu_item
  document.getElementById("drop-down-content").style.display = "block"
  // xong style.display = "block" là xong
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("movetop").style.display = "block";
  } else {
      document.getElementById("movetop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


$(function () {
  $('.navbar-toggler').click(function () {
      $('body').toggleClass('noscroll');
  })
});