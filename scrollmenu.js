$(function(){
    $('#fotoanima').slick({
        dots: false,
        prevArrow: false,
        nextArrow: false,
        autoplay:true,
        autoplaySpeed:500,
        speed:4000,
        responsive:[
            {
                breakpoint:600,
                settings: {
                    infinite: true,
                    dots: false,
                    prevArrow: false,
                    nextArrow: false,
                    autoplay:true,
                    autoplaySpeed:500,
                    speed:4000,
                  }
            },
        ]
    })
})