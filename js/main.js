$(document).ready(function(){


    /* перевод картинки svg в код */
    $('.advantages_element img, .mailing_form img').each(function(){
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
            var $svg = $(data).find('svg');
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
        }, 'xml');
    });
    /* end перевод картинки svg в код */


    var arrow='<span class="arrow"></span>';
    $('.main_menu .sub-menu').before(arrow);

    $('.search_btn').click(function(){
        $(this).parent().toggleClass('show');
    });
    $('.search_close').click(function(){
        $('.search_box').removeClass('show');
    });


    $('.main_menu .arrow').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('act');
    });

    $('.hamburger').click(function () {
        $('.main_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.main_menu .mm_close').click(function () {
            $('.main_menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".main_menu.open").length) {
            $(".main_menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });


    if($('.main_slider > div').length >1){
        $('.main_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots:true,
            fade:true,
            //autoplay: true,
            //speed: 1000,
            //autoplaySpeed:9000,
            //dotsClass: 'custom_paging',
        });
    }


    $(window).resize(function(){
        var header_height = $('header').outerHeight();
        $('.main_orange_box, .page_orange_box').css({'margin-top': -header_height+'px'});
    });
    $(window).resize();


    $('.product_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        //fade: true,
        asNavFor: '.product_slider_nav'
    });
    $('.product_slider_nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.product_slider',
        dots: false,
        arrows:true,
        //centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 575,

                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });


});


