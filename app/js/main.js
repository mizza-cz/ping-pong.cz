$(function(){
   
   $('.mob-menu').on('click', function () {
      $('.header__inner').slideToggle();
    });
    $('.navbar__menu-item').on('click', function () {
      $(this).closest('.navbar__menu-list').toggleClass('active');
    });
        // tabs


    $('.hp-extraliga__inner .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.hp-extraliga__inner').find('.hp-extraliga__content').removeClass('tab-active').hide();
      $('.hp-extraliga__inner .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id)
        .addClass('tab-active')
        .fadeIn();
      return false;
    });
    $('.posts__inner .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.posts__inner').find('.posts__content').removeClass('tab-active').hide();
      $('.posts__inner .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id)
        .addClass('tab-active')
        .fadeIn();
      return false;
    });
    $('.scoarboard__inner').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay:true,
      infinite:true,
      prevArrow: '<button class="scoarboard__btn scoarboard__btnprev"><img src="images/svg/arrow-left.svg" alt="" ></button> ',
      nextArrow: ' <button class="scoarboard__btn scoarboard__btnnext"><img src="images/svg/arrow-right.svg" alt = "" ></button > ',
      responsive: [
         {
            breakpoint: 1900,
            settings: {
               slidesToShow: 4,
            }
         },
         {
            breakpoint: 1520,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 1220,
            settings: {
               slidesToShow: 2,
               arrows: false,
            }
         },
         {
          breakpoint: 680,
          settings: {
             slidesToShow: 1,
             arrows: false,
          }
       },
      ]

   });
   $('.hp-tv__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay:true,
    infinite:true,
    centerMode:true,
    variableWidth:true,
    prevArrow: '<button class="hp-tv__btn hp-tv__btnprev"><img src="images/svg/arrow-left-w.svg" alt="" ></button> ',
    nextArrow: ' <button class="hp-tv__btn hp-tv__btnnext"><img src="images/svg/arrow-right-w.svg" alt = "" ></button > ',
    responsive: [
       {
          breakpoint: 1440,
          settings: {
             arrows:false,
          }
       },
     
       {
          breakpoint: 1220,
          settings: {
            
             slidesToShow: 2,
             arrows: false,
          }
       },
       {
        breakpoint: 680,
        settings: {
           slidesToShow: 3,
           arrows: false,
        }
     },
    ]

 });
   // $('select, input.radio, input.checkbox').styler();
 

// end
});