$(window).on("load", function () {

    "use strict";

    $(".loader__circle").addClass('fade');
    setTimeout(function () {
        $(".loader").addClass('loaded');
    }, 300);
});

$(function () {

    "use strict";

    if (navigator.userAgent.match(/Trident\/7\./)) {
        $('body').on("mousewheel", function () {
            event.preventDefault();

            var wheelDelta = event.wheelDelta;

            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });

        $('body').keydown(function (e) {
            e.preventDefault();
            var currentScrollPosition = window.pageYOffset;

            switch (e.which) {

                case 38:
                    window.scrollTo(0, currentScrollPosition - 120);
                    break;

                case 40:
                    window.scrollTo(0, currentScrollPosition + 120);
                    break;

                default: return;
            }
        });
    }
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function () {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {
    };
    $("img, a").on("dragstart", function (event) { event.preventDefault(); });
    function fullscreenLayout() {
        $(".fullscreen").css({
            height: $(window).height()
        });
    };
    fullscreenLayout();
    $(window).resize(function () {
        fullscreenLayout();
    });
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 500,
        $back_to_top = $('.to-top');

    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('fade-out');
        }
    });

    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration
        );
    });
    var scrollToPreview = $('.scroll-to-preview');

    scrollToPreview.on('click', function (event) {
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    function smoothScroll(target) {
        $('body,html').animate({
            scrollTop: target.offset().top,
        }, 500);
    };
    $('.hover-white, .hover-gradient, .circle, .inner-video-trigger')
        .on('mouseenter', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('em').css({ top: relY, left: relX })
        })
        .on('mouseout', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('em').css({ top: relY, left: relX })
        });
});
