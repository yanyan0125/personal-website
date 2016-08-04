/**
 * Created by libing on 2016/5/17.
 */
$(function(){
    banner();
    wjsTabSwipe();
    $('[data-toggle="tooltip"]').tooltip();
});

function banner() {
    var data = [
        {
            "bac": "images/slide_01_2000x410.jpg",
            "img": "images/slide_01_640x340.jpg"
        },
        {
            "bac": "images/slide_02_2000x410.jpg",
            "img": "images/slide_02_640x340.jpg"
        },
        {
            "bac": "images/slide_03_2000x410.jpg",
            "img": "images/slide_03_640x340.jpg"
        },
        {
            "bac": "images/slide_04_2000x410.jpg",
            "img": "images/slide_04_640x340.jpg"
        }
    ];

    function render(){
        //获取屏幕的宽度
        var width = $(window).width();
        var isMobile = false;

        //判断屏幕的宽度
        if(width<768){
            isMobile = true;

        }
        //把字符串转化成模板函数
        var pointTemplate = _.template($('#point_template').html());
        var imgTemplate = _.template($('#img_template').html());
        /*传入数据 解析成 html 字符*/
        var pointHtml = pointTemplate({model:data});
        var imgHtml = imgTemplate({model:data,isMobile:isMobile});
        $('.carousel-indicators').html(pointHtml);
        $('.carousel-inner').html(imgHtml);
    }
    //监听屏幕的宽度
    $(window).on('resize',function(){
        render();
    }).trigger('resize');

    var startX = 0, moveX = 0, distanceX= 0,isMove = 0;
    $('.carousel-inner').on('touchstart',function(e){
        //开始滑动的坐标
        startX = e.originalEvent.touches[0].clientX;
    }).on('touchmove',function(e){
        moveX = e.originalEvent.touches[0].clientX;
        distanceX = moveX - startX;
        isMove = true;
    }).on('touchend',function(e){
        /*当我们滑动的距离超过了 50 的时候就认为是一个手势*/
        if( Math.abs(distanceX) > 50 && isMove){
            /*判断手势的方向*/
            if(distanceX > 0){
                /*向右滑 上一张*/
                $('.carousel').carousel('prev');
            }else{
                /*向左滑 下一张*/
                $('.carousel').carousel('next');
            }
        }
        /*重置参数*/
        startX = 0, moveX = 0 , distanceX = 0 , isMove = false;
    });

}

//tab 栏  移动端的特效
function wjsTabSwipe(){
    var $ulParent = $(".wjs-nav-tabs-partent");
    var $ul = $ulParent.find("ul");
    var $lis = $ul.find("li");
    var widthSum = 0;
    $lis.each(function(i,items){
        widthSum += $(items).innerWidth();
    });
    $ul.width(widthSum);
    itcast.iScroll({
        swipeDom:$ulParent.get(0),
        swipeType:'x',
        swipeDistance:20
    });
}












