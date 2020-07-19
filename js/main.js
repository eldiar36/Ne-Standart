
window.onscroll = function showHeader() {
    let header =    document.querySelector(".header-fixed_wrapper");
    let header1 =    document.querySelector(".header");
    if (window.pageYOffset > 300) {
        header.classList.add("header-fixed");
        header1.classList.add("header-fixed")
    }
    else  {
        header.classList.remove("header-fixed")
    }
};
$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });



});
function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find(".burger-button-wrap");
    let links = menu.find("burger-menu_link");
    let overlay = menu.find("burger-menu_overlay");
    button.on("click",(e) => {
        e.preventDefault();
        toogleMenu();
    });
    links.on("click", () => toogleMenu());
    overlay.on("click", () => toogleMenu());
    function toogleMenu() {
        menu.toggleClass('burger-menu_active');

       /* if (menu.hasClass('burger-menu_active')) {
            $('body').css("overflow","hidden");
        }else  {
            $("body").css("overflow","visible")
        }*/
    }
}
burgerMenu('.burger-menu');

const accordions = document.querySelectorAll(".accordion-wrapper");
for (const accordion of accordions) {
    const panels = accordion.querySelectorAll(".accordion");
    for (const panel of panels) {
        const head = panel.querySelector(".accordion-header");
        head.addEventListener('click', () => {
            for (const otherPanel of panels) {
                if (otherPanel !== panel) {
                    otherPanel.classList.remove('accordion-expanded');
                }
            }
            panel.classList.toggle('accordion-expanded');
        });
    }
}
$(document).ready(function(){
    $(".home-slider").owlCarousel({
        items: 1,
        loop:true,
        nav:false,
        navText:true,
        margin:0,
        animateIn: true,
        autoWidth: false,
        autoHeight: true,
        responsive: {
            0:{
                items: 1
            },
            480:{
                items:1
            },
            767:{
                items:1
            },
            991:{
                items:1
            }
        }
    });
});
AOS.init({
    offset: 0,
});

jQuery(document).ready(function($) {
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        fixedContentPos: true

    });
});
