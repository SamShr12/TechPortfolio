var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView:1,
    parallax: true,
    speed: 800,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    autoplay: {
        delay: 5000,
    },
  });

// var swiper2 = new Swiper('.p', {
//     parallax: true,
//     speed: 600,
//     autoplay: {
//         delay: 5000,
//     },
//     pagination: {
//         el: ".sp-pag",
//         clickable:true,
//     }
// });

var fixmeTop = $('nav').offset().top;       // get initial position of the element

$(window).scroll(function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('nav').css({                      // scroll to that element or below it
            position: 'fixed',
            top: '0',
            left: '0'
        });
    } else {                                   // apply position: static
        $('nav').css({                      // if you scroll above it
            position: 'static'
        });
    }

});