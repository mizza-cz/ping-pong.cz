

$(function(){
   $('.open-popup').magnificPopup({
      type: 'inline',
      midClick: true,
      mainClass: 'mfp-fade'
    });
  $('select, .shop__check').styler();
  //presmerovani pomoci selectu
   $('.mob-menu').on('click', function () {
      $('.header__inner, .head__tv').slideToggle();
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
    var firstSlide = $('.scoarboard__inner').attr('data-first-slide');
    var firstSlide = firstSlide-2;
    $('.scoarboard__inner').slick({
      initialSlide: firstSlide,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay:true,
      infinite:true,
      prevArrow: '<button class="scoarboard__btn scoarboard__btnprev"><img class="scoarboard__btn--white" src="images/svg/arrow-left.svg" alt="" ><img class="scoarboard__btn--dark" src="images/svg/arrowl.svg" alt="" ></button> ',
      nextArrow: ' <button class="scoarboard__btn  scoarboard__btnnext"><img class="scoarboard__btn--white" src="images/svg/arrow-right.svg" alt = "" ><img class="scoarboard__btn--dark" src="images/svg/arrowr.svg" alt="" ></button>',
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
                initialSlide: firstSlide+1,
               arrows: false,
            }
         },
         {
          breakpoint: 680,
          settings: {
             slidesToShow: 1,
              initialSlide: firstSlide+1,
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
    prevArrow: '<button class="hp-tv__btn hp-tv__btnprev"><img class="hp-tv__btn--white" src="images/svg/arrow-left-w.svg" alt="" ><img class="hp-tv__btn--dark" src="images/svg/arrow_tv-l.svg" alt = "" ></button> ',
    nextArrow: ' <button class="hp-tv__btn hp-tv__btnnext"><img class="hp-tv__btn--white" src="images/svg/arrow-right-w.svg" alt = "" ><img class="hp-tv__btn--dark" src="images/svg/arrow_tv-r.svg" alt = "" ></button > ',
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
  
   $('.main__filtr .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.main__filtr').find('.category, .fotogalerie-page, .oddil__content, .hrac-page__content, .extraliga, .druzstvo-page__content').removeClass('tab-active').hide();
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

(function () {
   const url = new URL(window.location.href);
   const forcedTheme = url.searchParams.get('theme');
   const savedTheme = forcedTheme || window.localStorage.theme || 'light';

   const changeTheme = (value) => {
       // remove old theme
       const currentTheme = value === 'light' ? 'dark' : 'light';
       document.documentElement.classList.remove(`theme-${currentTheme}`);
       // set new theme
       document.documentElement.classList.add(`theme-${value}`);
       // save theme
       window.localStorage.theme = value;
   };

   // change theme
   changeTheme(savedTheme);

   // theme toggle event listener
   window.addEventListener('DOMContentLoaded', () => {
       // get toggle
       const toggles = document.querySelectorAll('.js-theme-toggle');
       // add event listeneer
       toggles.forEach((toggle) => {
           toggle.addEventListener('click', (e) => {
               // stop default action
               e.preventDefault();
               // set new theeme
               const newTheme = window.localStorage.theme === 'light' ? 'dark' : 'light';
               // change theme
               changeTheme(newTheme);
           });
       });
   });
})();

;(function($){
  
   /**
    * jQuery function to prevent default anchor event and take the href * and the title to make a share popup
    *
    * @param  {[object]} e           [Mouse event]
    * @param  {[integer]} intWidth   [Popup width defalut 500]
    * @param  {[integer]} intHeight  [Popup height defalut 400]
    * @param  {[boolean]} blnResize  [Is popup resizeabel default true]
    */
   $.fn.customerPopup = function (e, intWidth, intHeight, blnResize) {
     
     // Prevent default anchor event
     e.preventDefault();
     
     // Set values for window
     intWidth = intWidth || '500';
     intHeight = intHeight || '400';
     strResize = (blnResize ? 'yes' : 'no');
 
     // Set title and open popup with focus on it
     var strTitle = ((typeof this.attr('title') !== 'undefined') ? this.attr('title') : 'Social Share'),
         strParam = 'width=' + intWidth + ',height=' + intHeight + ',resizable=' + strResize,            
         objWindow = window.open(this.attr('href'), strTitle, strParam).focus();
   }
   
   /* ================================================== */
   // share social
   $(document).ready(function ($) {
     $('.customer.share').on("click", function(e) {
       $(this).customerPopup(e);
     });
   });
     
 }(jQuery));


 

  // propper

tippy('.tooltip', {
   content: '<strong>Bolded content</strong>',
   allowHTML: true,
 });

 // table sort
 new Tablesort(document.getElementById('table-id'));