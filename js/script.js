let thumbnails = new Swiper('.slide-thumbnail', {
    slidesPerView: 5,
    spaceBetween: 30,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
       slidesPerView: 3.1,
       spaceBetween: 10,
      },
 
      767: {
       slidesPerView: 5.1,
       spaceBetween: 10,
      },
 
      1024: {
       slidesPerView: 5.1,
       spaceBetween: 30,
      },
 
      1200: {
       slidesPerView: 5,
       spaceBetween: 25,
      }
     }
})

let slide = new Swiper('.slide-images', {
    effect: 'fade',
    speed: 800,
    grabCursor: true,
    thumbs: {
      swiper: thumbnails
    }
})
