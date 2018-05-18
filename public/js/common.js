//定位顶部导航栏
$(".nav-right .nav-list").hover(function(){
   
    var this_left = $(this).offset().left;
    var w_width = $(document).width();
    var this_width = $(document).width() -  $(this).offset().left;
    console.log(w_width,this_width);
    $(this).find('.nav-list-menu').css('width',this_width);
    $(this).find('.nav-list-menu').show();
},function(){
    $(this).find('.nav-list-menu').hide();
   
});

//导航栏选中状态
var search = window.location.search
var loc = search.substring(search.lastIndexOf('=')+1, search.length);
var model ='';
var menu ='';

$(function(){
    var mySwiper = new Swiper('.swiper-container', { //swiper4 
        autoplay: {
            // el:5000,//可选选项，自动滑动
        },
        autoplayDisableOnInteraction: {
            el:false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
            // bulletClass : 'my-bullet',
        },
    
    });
    if(loc&&loc!=''){
        // $('.nav-right .nav-list').removeClass('list-active');
        // $('.nav-list-menu .menu-list').removeClass('active');
        
        if(loc.indexOf('-')>=0){
            model = loc.split('-')[0].replace(/[^0-9]/ig,"");
            menu = loc;
            model = 'model'+model;
            console.log(menu);
            $('.nav-list-menu .'+menu).addClass('active').siblings().removeClass('active');
            $('.nav-right .'+model).addClass('list-active').siblings().removeClass('list-active');
       
        }else{
            model = loc
            $('.nav-right .'+model).addClass('list-active').siblings().removeClass('list-active');
            // console.log(model)
        }
    };
    //中英文切换
    $('.nav-right .language').on('click','.language-list',function(){
        $(this).addClass('language-active').siblings().removeClass('language-active');
    });


})
