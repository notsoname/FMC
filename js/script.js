window.addEventListener('click', () => {
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.hamburger__menu'),
          close = document.querySelector('.hamburger__menu-close');
          

    hamburger.addEventListener('click', () => {
        menu.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        menu.classList.remove('show');
        document.body.style.overflow = '';
    });

    menu.addEventListener('click', (e) => {
        if (e.target == menu) {
            menu.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    //* slider
/*     $(document).ready(function(){
      $('.experts__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/slider/left-arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/slider/right-arrow.svg"></button>',
        responsive: [
          {
            breakpoint: 993,
            settings: {
              arrows: false,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 1
            }
          }
            ]
          });
      }); */
});