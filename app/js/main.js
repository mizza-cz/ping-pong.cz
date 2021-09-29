$(function(){
  $('select, .shop__check').styler();
  //presmerovani pomoci selectu
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
     {
      breakpoint: 479,
      settings: {
         slidesToShow: 1,
         arrows: false,
         centerMode: true,
      }
   },
    ]

 });
   // $('select, input.radio, input.checkbox').styler();
   $('.main__filtr .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.main__filtr').find('.category').removeClass('tab-active').hide();
      $('.main__filtr .main__tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id)
        .addClass('tab-active')
        .fadeIn();
      return false;
    });
    var _gallery_loading = false;

    $('a[data-gallery]').click(function () {
      if (_gallery_loading) return;
      _gallery_loading = true;
    
      var mode = $(this).data('gallery');
      var url = '/inc/gallery_ajax.asp?mode=' + mode;
    
      if (mode == 1 || mode == 2) {
        url += '&id=' + $(this).data('gallery-id');
      }
    
      $.getJSON(url, { format: 'json' })
        .done(function (e) {
          $(this).lightGallery({
            hash: false,
            share: false,
            dynamic: true,
            dynamicEl: e,
            download: false,
            backdropDuration: 500,
          });
        })
        .fail(function (e, textStatus, error) {
          alert('Nastala chyba při načítání galerie. Prosím zkuste to znovu.');
          console.error('getJSON failed, status: ' + textStatus + ', error: ' + error);
          console.error(e);
        })
        .always(function () {
          _gallery_loading = false;
        });
    
      return false;
    });
// end
});