/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {

  'use strict';

  Drupal.behaviors.nmrf = {
    attach: function(context, settings) {

      // Custom code here

      var jPanelMenu = {};
      $(function() {
        $('pre').each(function(i, e) {hljs.highlightBlock(e)});
        
        jPanelMenu = $.jPanelMenu({
          menu: '#header',
          animated: false,
          openPosition: '34em',
          direction: 'right',
          afterOpen: function() {
            $('body').addClass('jpanel-menu-open');
          },
          afterClose: function() {
            $('body').removeClass('jpanel-menu-open');
          }
        });
        jPanelMenu.on();
      });

      /** hero slider event */
      $('.paragraph-hero-slider').slick({
        dots: true,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      });

      // slick slider center mode
      $(".view-publications .view-content").slick({
        dots: false,
        centerMode: true,
        centerPadding: '20%',
        prevArrow: '<button class="slick-prev"><svg class="icon-svg icon-search" viewbox="0 0 29 32"> <use xlink:href="/themes/custom/nmrf/images/icons/icons.svg#prev"></use> </svg></button>',
        nextArrow: '<button class="slick-next"><svg class="icon-svg icon-search" viewbox="0 0 29 32"> <use xlink:href="/themes/custom/nmrf/images/icons/icons.svg#next"></use> </svg></button>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
              dots: false,
            }
          }
        ]
      });
    }
  };

})(jQuery, Drupal);