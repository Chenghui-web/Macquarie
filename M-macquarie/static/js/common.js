//点击顶部菜单栏 
$('.common-header').on('click','.menu-icon',function(){
    $(".common-header .menu-contain").toggleClass("this-hidden");
    $(".common-header .menu-icon").toggleClass("menu-icon-close");
    $(".bg").toggleClass("this-hidden");
})
$('.bg').click(function(){
    $(".common-header .menu-contain").toggleClass("this-hidden");
    $(".common-header .menu-icon").toggleClass("menu-icon-close");
    $(".bg").toggleClass("this-hidden");
});

//点击导航栏 切换不同内容
$('.nav-contain').on('click','.nav-list',function(){
    $(this).addClass('nav-list-active').siblings().removeClass('nav-list-active');
    var _id = $(this).find('a').attr('class');
    var _html = $(this).find('a').html();
    // console.log(_html);
    $('.index-contain .banner .this-title').html(_html);
    $('#'+_id).addClass('detain-show').siblings().removeClass('detain-show');
    isScroll();
    
});

window.onload=function(){
    isScroll();
    var search  = window.location.search;
    if(search){
        var loc = search.substring(search.lastIndexOf('=')+1, search.length);
        $('.menu-contain .menu-list').eq(loc).addClass('menu-active').siblings().removeClass('menu-active');
    }
    
    
};
var isScroll = function(){
    var e_height = document.body.scrollHeight;
    var w_height = document.documentElement.clientHeight;
    // console.log(e_height,w_height)
    if(w_height>=e_height){
        $('.common-footer').addClass('footer-fixed')  ;      
        $('.common-contain').addClass('padding-contain')  ;      
    }else{
        $('.common-footer').removeClass('footer-fixed') ;   
        $('.common-contain').removeClass('padding-contain') ;   
    }
}
