$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('header').addClass("onScroll");
        }
        else{
            $('header').removeClass("onScroll");
        }
    });
});