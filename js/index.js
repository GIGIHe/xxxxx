$(function(){
    $(window).scroll(function(){
        // 注入ht
        var top = $(".zgm1").offset().top;//获取指定位置
        var scrollTop = $(window).scrollTop();
        if(scrollTop>top){
            $(".navbar").addClass('active');
        }else{
            $(".navbar").removeClass('active');
        }
    })
  // <!-- 刷题计划 弹窗-->
    $(".tab_i3").click(function(){
        $(".mask").fadeIn();
        $(".code").fadeIn();
    })
     $(".close_code").click(function(){
        $(".mask").hide();
        $(".code").hide();
    })
      $(".tab_bar a").click(function(){
           $(".tab_bar a").removeClass("on")
           $(this).addClass("on")
    })
})