(function($){
    $(function(){
        $('.b-content-l ul li').click(function(){
            var num = $(this).index();
            $('.b-content-r>div').eq(num).addClass('current').siblings().removeClass('current');
        });
    });
})(jQuery);
