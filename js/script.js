$(function($){
  
    //lightbox js
    new VenoBox({
        selector: ".product_gallery",
        spinner: 'grid'
    });

    //wow js 
    new WOW().init();

    //counter js 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //banner js
    $('#banner').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        arrows: true,
        prevArrow: '<i class="fa-solid fa-angle-left pre_arrwo"></i>',
        nextArrow: '<i class="fa-solid fa-angle-right nxt_arrow"></i>',
    });

    //category_slider js 
    $('.category_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        infinite: true,
        prevArrow: '<i class="fa-solid fa-angle-left pre_arrwo"></i>',
        nextArrow: '<i class="fa-solid fa-angle-right nxt_arrow"></i>',
        arrows: false,
        dots: true,
        dotsClass: "custom_dot"
    });

    //filter js
    var mixer = mixitup('.filter_container');

    $('.men_women ul li').on('click', function(){
        $('.men_women ul li').removeClass('active');
        $(this).addClass('active');
    });

   

});