'use strict'

$("#accardion button").click(function(){
    $("#accardion p").stop().slideUp()
    $(this).next().stop().slideToggle()
})

$("#tabMenu button").click(function(){
    const btnIndex=$(this).index();
    $("#tabMenu .tab-content p").stop().slideUp()
    $("#tabMenu .tab-content p").eq(btnIndex).stop().slideDown()

})