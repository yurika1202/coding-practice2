/* header-bg
--------------------------------- */
jQuery(window).on('scroll', function () {
    if (700 < jQuery(this).scrollTop()) {
        jQuery('.header').addClass('_change-bg');
    } else {
        jQuery('.header').removeClass('_change-bg');
    }
});

/* header-nav
--------------------------------- */
$(".nav__btn").click(function (e) {
    e.preventDefault();
    $(this).toggleClass('_open');
    $(".open__nav").toggleClass('__panel-active');
    $(".open__bg").toggleClass('__bg-active');
    return false;
});
    
$(".nav__items a").click(function () {
    $(".nav__btn").removeClass('_open');
    $(".open__nav").removeClass('__panel-active');
    $(".open__bg").removeClass('__bg-active');
    return false;
});

/* scroll
--------------------------------- */
$('.nav__items a[href^="#"]').click(function() {
    var elHash = $(this).attr('href');
    var smPos = $(elHash).offset().top-100;
    $('body,html').animate({scrollTop: smPos}, 500);
    return false;
});

/* top-scroll
--------------------------------- */
$('.header__logo').click(function() {
    $("body, html").animate({ scrollTop: 0 }, 500);
});