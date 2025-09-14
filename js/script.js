$(function(){
    $("#hide").click(function(){
        $(".box").hide(1000)
    })
})
$(function(){
    $("#show").click(function(){
        $(".box").show(1000)
    })
})
$(function(){
    $("#hideShow").click(function(){
        $(".box").toggle(1000)
    })
})
$(function(){
    $("#fadeOut").click(function(){
        $(".box").fadeOut(1000)
    })
})
$(function(){
    $("#fadeIn").click(function(){
        $(".box").fadeIn(1000)
    })
})
$(function(){
    $("#slideUpDown").click(function(){
        $(".box").slideToggle(1000)
    })
})
$(function() {
    const countDownDate = new Date("Dec 25, 2025 00:00:00").getTime();
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        $("#days").html(days);
        $("#hours").html(hours);
        $("#minutes").html(minutes);
        $("#seconds").html(seconds);
        if (distance < 0) {
            clearInterval(x);
            $("#countdownpart").html("<h2>COUNTDOWN FINISHED!</h2>");
            $("#countdownpart h2").css({
                "color": "#fff",
                "text-align": "center",
                "font-size": "2em"
            });
        }
    }, 1000);
});
