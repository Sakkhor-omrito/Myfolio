$(function(){

let menuTop =$('.customNav').offset().top;

//scroll effect
$(window).on('scroll',function(){

let scrollToTop =$(window).scrollTop();

//menu js
if(scrollToTop > menuTop){
    $('.customNav').addClass("menufix");
}else{
    $('.customNav').removeClass("menufix");
}

//back to top
if(scrollToTop>400){
    $('.back_top').fadeIn(1000);
}else{
    $('.back_top').fadeOut(1000);
}

});
//back to top js
$('.back_top').on('click',function(){

    $('html,body').animate({
       scrollTop:0
       
    },3000);
});

});