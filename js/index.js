$(function(){
    var width = $(window).width()
    $('.swiper-container').css({
        height:width/1.7777+'px'
    })
    //   子页面--关于我们地图切换
    $('.address li').click(function(){
        var i = $(this).index()
        var arrimg = ['img/about/map.jpg','img/about/map2.jpg','img/about/map3.jpg','img/about/map4.jpg','img/about/map5.jpg']
        $('.map').css({
            'background':'url('+ arrimg[i] +')',
        })
        $(this).css({
            'border':'1px solid  #e31a49',
            'color':'#e31a49'
        }).siblings().css({
            'border':'1px solid  #cfcfcf',
            'color':'#cdcdcd'
        })
    })
    var mySwiper = new Swiper ('.swiper-container', {
        // 轮播图的方向，也可以是vertical方向
        direction:'horizontal',
        
        //播放速度
        loop: true,

        // 自动播放时间
        autoplay:2000,

        // 播放的速度
        speed:1000,
        
        // 如果需要分页器，即下面的小圆点
        pagination: '.swiper-pagination',
        
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
　　　　　

　　　　　　// 这样，即使我们滑动之后， 定时器也不会被清除
　　　　  autoplayDisableOnInteraction : false,
        
        // 如果需要滚动条
        scrollbar: '.swiper-scrollbar',
      });     
      
    
    
})