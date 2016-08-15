// Created by Hivan Du 2016 (Siso brand interactive team).

"use strict";

$(function() {
  // 根据设备尺寸，限定根字体大小
  var size = $(window).width() / 25;
  $('html').css('font-size', size);
});

//  limit browser drag move
// document.addEventListener('touchmove', function(e) {
//   e.preventDefault();
// }, true);

var videosArr = document.querySelectorAll(".myVideo");

var app = {
  preload: function() {
    var that = this;
    var imgArr = document.getElementsByTagName('img');
    var imgAmounts = 0;
    var loadedAmounts = 0;
    var isLoaded = false;
    //  get img amounts
    for (var i = 0; i < imgArr.length; i++) {
      if (imgArr[i].hasAttribute('lazy-src')) {
        imgAmounts++;
      }
    }

    //  load each img
    for (var i = 0; i < imgArr.length; i++) {
      var curImg = imgArr[i];

      if (curImg.hasAttribute('lazy-src')) {
        var img = new Image();
        img.src = curImg.getAttribute('lazy-src');
        img.index = i;

        img.onload = function() {
          loadedAmounts++;
          imgArr[this.index].src = this.src;
          /* check img load progress */
          if (checkIsAllMainImagesLoaded() && isLoaded == false) {
            goMainProcess();
          }
        };

        img.onerror = function(error) {
          imgAmounts -= 1;
          /* check img load progress */
          if (checkIsAllMainImagesLoaded() && isLoaded == false) {
            goMainProcess();
          }
        };
      }
    }

    function checkIsAllMainImagesLoaded() {
      if (isLoaded == false) {
        var loadedRate = 0.9;
        if (parseInt(loadedAmounts / imgAmounts * 100) == 90) {
          $('.loading .dot').text('100%');
        } else {
          $('.loading .dot').text(parseInt(loadedAmounts / imgAmounts * 100) + '%');
        }
        return loadedAmounts / imgAmounts >= loadedRate;
      }
    }

    function goMainProcess() {
      isLoaded = true;
      app.start();

      setTimeout(function() {
        $('.loading').addClass('leave');

        setTimeout(function() {
          $('.loading').addClass('leaved');
          $('.scene').addClass('loaded');
        }, 1200);
      }, 1500);
    }
  },

  create: function() {
    var activeIndex;
    app.mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      // init
      onInit: function() {
        console.log("init");
        $('.slide-icon').hide();
        $('.btn-start').on('touchend', function(){
          $('.begin').addClass('fadeout');
          setTimeout(function(){
            $('.begin').addClass('leaved');
          }, 800);
          setTimeout(function(){
            $('.slide1').addClass('fadein');
            $('.slide-icon').show();
          }, 800);
        })
        setTimeout(function() {
          // $('#audio')[0].play();
        }, 1600);
      },
      onTransitionStart: function(swiper) {
        activeIndex = swiper.previousIndex;
        console.log(activeIndex);
      },
      onTransitionEnd: function(swiper) {
        if (activeIndex != swiper.activeIndex) {
          console.log(swiper.activeIndex)
          if ((navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPod') != -1) || (navigator.userAgent.indexOf('iPad') != -1)) {
            if (videosArr[swiper.activeIndex]) {
              videosArr[swiper.activeIndex].play();
              videosArr[swiper.activeIndex].addEventListener("canplay", function() {
                //if(videosArr[0].currentTime){
                videosArr[swiper.activeIndex].pause();
                //}
              }, false);
            }
          }


          var index = swiper.activeIndex;
          var nowSwiper = $('.swiper-slide')[index];
          console.log(nowSwiper);
          $('.slide-icon').show();

          if (index % 2 === 0) {
            $(nowSwiper).children('.text-anim').addClass('left');
            setTimeout(function() {
              $(nowSwiper).children('.text-anim2').addClass('left');
            }, 200);
          } else if (index != 3 && index != 7) {
            $(nowSwiper).children('.text-anim').addClass('right');
            setTimeout(function() {
              $(nowSwiper).children('.text-anim2').addClass('right');
            }, 200);
          } else {
            $(nowSwiper).children('.text-anim').addClass('slide_down');
            setTimeout(function() {
              $(nowSwiper).children('.text-anim2').addClass('slide_down');
            }, 200);
          }

          function leftTop(){

          }

          function rightBottom(){

          }

          function leftBottom() {
            
          }

          function rightTop(){

          }

          $('.pointer').hide();
        }
        $('.triangle').removeClass('end-paly');
      }
    });

    //click mp3 box
    $('.audio-click').click(function() {
      var audio = document.getElementById('audio');
      $(this).toggleClass('active');
      if (!audio.paused) {
        $('#audio')[0].pause();
      } else {
        $('#audio')[0].play();
      }
    })
  },

  start: function() {
    this.create();
  }
};

$(function() {
  // init app
  app.preload();
  console.log('app started success...\nhivandu.github.io&doo[at]hivan.me');
});
