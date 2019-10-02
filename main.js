$(document).ready(function(){
    $("#meet-box .features h3").click(function(){
        $("#meet-box .features p").animate({height : "0"});
        $(this).next().animate({height : "60px"});
    });
});