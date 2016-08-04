(function ($) {
    //banner 轮播效果
    $(function(){
        var mySwiper = new Swiper('#banner-container', {
            autoplay: 2000,
            loop : true,
            pagination : '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            paginationClickable :true,
            autoplayDisableOnInteraction : false   //点击之后，可以继续轮播
        });
        $('.wei-f').mouseover(function(){
            $(this).children('div').stop().slideDown(200);
        });
        $('.wei-f').mouseout(function(){
            $(this).children('div').stop().slideUp(200);
        });
    })






})(jQuery);