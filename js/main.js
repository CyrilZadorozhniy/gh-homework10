 $(document).ready(function () {
     $(window).on('scroll load', function () {
         var scrollTop = $(window).scrollTop();
        if (scrollTop > 50){
            $('.header-site').addClass('header-scroll');
        }
        else {
            $('.header-site').removeClass('header-scroll');
        }
     });
    $('.section-carousel').slick({
        arrows:false,
        dots: true,
        fade:true,
    });
 });