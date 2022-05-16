$(function(){
    $('.gridovka').slick({
        slidesToShow:3,
        slidesToScroll:3,
        responsive:[
            {
                breakpoint:600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                  }
            },
        ]
    })
})