let headerIsOpen = false;

$(document).ready(function(){

    //Аниация списка в meet-box
    $("#meet-box .features h3").click(function(){
        $("#meet-box .features p").animate({"height" : "0"});
        $(this).next().animate({"height" : "60px"});
    });

    //Скрытие/показ шапки при скролле страницы
    let _window = $(window);  
    _window.scroll(function(){
        if(!headerIsOpen && _window.scrollTop() >= 120){
            ShowHeader();
        }
        else if(headerIsOpen && _window.scrollTop() < 120){
            HideHeader();
        }
    })

    //Анимация скролла к разделам
    $(".to-our-features").click(function(){
        ScrollTo($("#our-features").offset().top);
    });
    $(".to-price-list").click(function(){
        ScrollTo($("#price-list").offset().top);
    });
    $(".to-contacts").click(function(){
        ScrollTo($("footer").offset().top);
    });
    $(".to-how-we-work").click(function(){
        ScrollTo($("#how-we-work").offset().top);
    });
    $(".to-gallery").click(function(){
        ScrollTo($("#gallery").offset().top);
    });

    //Слайдер с партнерами в our-features
    $("#our-features .arrow-left").click(
        {
            "slider": $("#our-features .slider .wrapper"),
            "shift": $("#our-features .slider img").outerWidth(true)*-1
        },
        MoveSlider
    );
    $("#our-features .arrow-right").click(
        {
            "slider": $("#our-features .slider .wrapper"),
            "shift": $("#our-features .slider img").outerWidth(true)
        },
        MoveSlider
    );

    //Настрока галелеи
    InitGallery();

    //Открытие/закрытие формы заявки
    let header = $("#top-header");
    let orderForm = $("#order-form")
    let shadow = $("#order-form .dark")
    let formBox = $("#order-form .wrapper")

    $(".open-form, #top-header .circle").click(function(){
        header.addClass("big");
        orderForm.css("display", "flex");
        shadow.animate({"opacity" : 1}, 400);
        formBox.css({"transform": "translateY(0px)"});
    });
    shadow.click(function(){
        header.removeClass("big");
        formBox.css({"transform": "translateY(-800px)"});
        shadow.animate({"opacity" : 0}, 400, function(){
            orderForm.css("display", "none");
        });
    });
});

function ShowHeader(){
    headerIsOpen = true;
    $("header").animate({"top": "30px"}, 500)
}
function HideHeader(){
    headerIsOpen = false;
    $("header").animate({"top": "-75px"}, 500)
}

function ScrollTo(offset){
    $("html, body").stop().animate({"scrollTop": offset-140}, 800);
}

function MoveSlider(evetnt){
    let slider = evetnt.data.slider;
    slider.animate({"scrollLeft": slider.scrollLeft()+evetnt.data.shift}, 400);
}

function InitGallery(){
    let imageList = $(".image-list");

    let currnet_box = $(".image-view .current");
    let currnet = 1;
    currnet_box.text(currnet);

    let all = imageList.children().length;
    let all_box = $(".image-view .all");
    all_box.text(all);

    $(".image-view .previous").click(function(){
        if(currnet > 1){
            currnet_box.text(--currnet);
            imageList.stop().animate({
                "scrollLeft": imageList.children().outerWidth(true)*(currnet - 1)},
                400
            );
        }
    });
    $(".image-view .next").click(function(){
        if(currnet < all){
            currnet_box.text(++currnet);
            imageList.stop().animate({
                "scrollLeft": imageList.children().outerWidth(true)*(currnet - 1)},
                400
            );
        }
    });
}