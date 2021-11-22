

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


 /// sort table

 var numericRegExp = new RegExp('^((?:NaN|-?(?:(?:\\d+|\\d*\\.\\d+)(?:[E|e][+|-]?\\d+)?|Infinity)))$')

 function isNumeric (value) {
   return numericRegExp.test(String(value))
 }
 
 function toArray (value) {
   if (!value) {
     return []
   }
   
   if (Array.isArray(value)) {
     return value
   }
   
   if (value instanceof window.NodeList || value instanceof window.HTMLCollection) {
     return Array.prototype.slice.call(value)
   }
   
   return [ value ]
 }
 
 function sortTable (table, ordering) {
   var thead = table.querySelector('thead')
   var tbody = table.querySelector('tbody')
   var rows = toArray(tbody.rows)
   var headers = toArray(thead.rows[0].cells)
 
   var current = toArray(thead.querySelectorAll('.sorting_desc, .sorting_asc'))
   
   current.filter(function (item) { return !!item }).forEach(function (item) {
     item.classList.remove('sorting_desc')
     item.classList.remove('sorting_asc')
   })
   
   headers.filter(function (item) { return !!item }).forEach(function (header) {
     header.classList.remove('sorting_desc')
     header.classList.remove('sorting_asc')
   })
   
   ordering.forEach(function (order) {
     var index = order.idx
     var direction = order.dir || 'asc'
     
     var header = headers[index]
     header.classList.add('sorting_' + direction)
   })
   
   rows.sort(function sorter (a, b) {
     var i = 0
     var order = ordering[i]
     var length = ordering.length
     var aText
     var bText
     var result = 0
     var dir
     
     while (order && result === 0) {
       dir = order.dir === 'desc' ? -1 : 1
       aText = a.cells[order.idx].textContent.trim()
       bText = b.cells[order.idx].textContent.trim()
 
       if (isNumeric(aText) && isNumeric(bText)) {
         result = dir * (parseFloat(aText) - parseFloat(bText))
       } else {
         result = dir * aText.localeCompare(bText)
       }
       
       i += 1
       order = ordering[i]
     }
     
     return result
   }).forEach(function each (row) {
     tbody.appendChild(row)
   })
 }
 
 function find (array, predicate) {
   return toArray(array).filter(predicate)[0]
 }
 
 function initSortTable (table) {
   var thead = table.querySelector('thead')
   var ordering = [{idx:2,dir:'asc'},{idx:1,dir:'asc'}]
   
   sortTable(table, ordering)
   table.__ordering = ordering
   
   thead.addEventListener('click', function onClick (event) {
     var src = event.target || event.srcElement
     var tagName = src.tagName.toLowerCase()
     
     if (tagName !== 'th') {
       return
     }
     
     if (!event.shiftKey) {
       table.__ordering = [
         {
           idx: src.cellIndex,
           dir: src.classList.contains('sorting_asc') ? 'desc' : 'asc'
         }
       ]
     } else {
       var order = find(table.__ordering, function (item) {
         return item.idx === src.cellIndex
       })
       
       if (order) {
         order.dir = order.dir === 'asc' ? 'desc' : 'asc'
       } else {
         table.__ordering.push({
           idx: src.cellIndex,
           dir: 'asc'
         })
       }
     }
     
     sortTable(table, table.__ordering)
   }, false)
 }
 
 initSortTable(document.querySelector('table'))


  // propper

tippy('.tooltip', {
   content: '<strong>Bolded content</strong>',
   allowHTML: true,
 });