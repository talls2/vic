$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20){
            $('.navbar').addClass('sticky')
        }else{
            $('.navbar').removeClass('sticky')
        }

    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    })

    // typing animation 
    var typed = new Typed(".typing",{
        strings: ["Designer", "Artist", "illustrator", "Pixel artist", "Dreamer", "ID maker" ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
    var typed = new Typed(".typing-2",{
        strings: ["Designer", "Artist", "illustrator", "Pixel artist", "Dreamer", "ID maker" ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

});
