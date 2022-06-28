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