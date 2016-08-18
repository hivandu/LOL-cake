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
            $('.slide-icon').hide();
            $('.loading').addClass('leave');
            setTimeout(function() {
                $('.start-title').addClass('start-title-anim');
                $('.start-line').addClass('start-line-anim');
                setTimeout(function() {
                    $('.loading').addClass('leaved');
                    $('.scene').addClass('loaded');
                    console.log('start');
                    $('.startPage-main').addClass('fadeInUp');
                    setTimeout(function() {
                        $('.start-bg').addClass('fadeIn');
                        $('.startPage .logo').addClass('fadeInDown');
                        $('.start-cloud-1').addClass('rightLeft');
                        $('.start-cloud-2').addClass('rightLeft');
                        $('.start-cloud-3').addClass('leftRight');
                    }, 200);
                    setTimeout(function() {
                        $('.start-moon').addClass('fadeInUp');
                        $('.start-img3').addClass('fadeInUp');
                    }, 400);
                    setTimeout(function() {
                        $('.start-img1').addClass('fadeInUp');
                        $('.start-img2').addClass('fadeInUp');
                    }, 600);
                    setTimeout(function() {
                        $('.start-img5').addClass('fadeIn')
                    }, 1600);
                    setTimeout(function() {
                        $('.start-img4').addClass('fadeIn');
                    }, 2000);
                }, 400);
            }, 400);
        }
    },

    create: function() {
        var activeIndex;
        app.mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            // init
            onInit: function() {
                console.log("init");
                setTimeout(function() {
                    $('.begin').addClass('fadeout');
                    setTimeout(function() {
                        $('.begin').addClass('leaved');
                    }, 800);
                    setTimeout(function() {
                        $('.secondPage').addClass('fadein');
                        $('.second-title').addClass('zoomInX');
                        $('.second-line').addClass('fadeInDown');
                        $('.second-1').addClass('fadeInRightBig');
                        setTimeout(function() {
                            $('.second-2').addClass('fadeInRightBig');
                            $('.second-4').addClass('fadeInRightBig');
                        }, 100);
                        $('.second-3').addClass('fadeInLeftBig');
                        $('.second-5').addClass('fadeInRightBig');
                        setTimeout(function() {
                            $('.screen').addClass('fadeIn');
                            typeStart();
                        }, 1100);
                    }, 800);
                }, 5000);

                $('.typeContainer').on('touchend', function() {
                    console.log('second out');
                    $('.typeContainer').hide(200);
                    $('.touch-hand').hide(200);
                    $('.letter').hide().css('opacity', 0);
                    $('.screen-light').show(100).addClass('light-scale');
                    setTimeout(function() {
                        $('.secondPage').css('display', 'block').removeClass('fadein').addClass('fadeOut');
                        setTimeout(function() {
                            $('.secondPage').addClass('leaved').css('display', 'none');
                            $('.slide-icon').show(200);
                            setTimeout(function() {
                                $('.slide1').addClass('fadeIn');
                            }, 100);
                            $('.slide1-2').addClass('fadeIn');
                            setTimeout(function() {
                                $('.slide1-bg').addClass('fadeIn');
                            }, 500);
                            setTimeout(function() {
                                $('.slide1-3').addClass('fadeIn');
                                $('.slide1 .slide-font').addClass('slide-font-trans')
                            }, 400);
                            setTimeout(function() {
                                $('.slide1-t-1').addClass('fadeInLeft')
                                $('.slide1-t-4').addClass('fadeInRight')
                            }, 400);
                            setTimeout(function() {
                                $('.slide1-t-2').addClass('fadeInUp')
                                $('.slide1-t-3').addClass('fadeInRight')
                            }, 400);
                        }, 800);
                    }, 1200);
                })

                // 月亮按钮点击
                $('.btn-moon').on('touchend', function() {
                    $('.scale-moon-outer').css('display', 'block');
                    $('.swiper-container').addClass('fadeOut');
                    setTimeout(function() {
                        $('.scale-moon').addClass('scale-moon-anim');
                    }, 600);
                    setTimeout(function() {
                        $('.swiper-container').addClass('leaved');
                        $('.scale-moon-outer').addClass('fadeout');
                        $('.endPage').addClass('fadeIn');
                    }, 2600);
                    setTimeout(function() {
                        $('.scale-moon-outer').css('display', 'none');
                        $('.end-title1').addClass('fadeInUp');;
                        $('.end-title2').addClass('fadeInUp');
                        $('.end-product').addClass('fadeInUp');
                        $('.end-price').addClass('fadeIn');
                        $('.end-text').addClass('fadeIn');
                    }, 3600);
                    setTimeout(function() {
                        $('.btn-buy').addClass('fadein');
                        $('.btn-share').addClass('fadein');
                    }, 4400);
                })

                // 加载背景音乐
                setTimeout(function() {
                    $('#audio')[0].play();
                }, 800);
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
                    $('.slide-icon').show(400);

                    // 滑动自动播放
                    switch (index) {
                        case 0:
                            setTimeout(function() {
                                $('.slide1').addClass('fadeIn');
                            }, 100);
                            break;
                        case 1:
                            $('.slide2').addClass('fadeIn');
                            $('.slide2-2').addClass('fadeIn');
                            setTimeout(function() {
                                $('.slide2-3').addClass('fadeIn');
                                $('.slide2 .slide-font').addClass('fadein');
                            }, 400);
                            setTimeout(function() {
                                $('.slide2-t-1').addClass('fadeInLeft')
                                $('.slide2-t-4').addClass('fadeInRight')
                            }, 400);
                            setTimeout(function() {
                                $('.slide2-t-2').addClass('fadeInUp')
                                $('.slide2-t-3').addClass('fadeInRight')
                            }, 400);
                            break;
                        case 2:
                            $('.slide3').addClass('fadeIn');
                            $('.slide3-2').addClass('fadeIn');
                            setTimeout(function() {
                                $('.slide3-3').addClass('fadeIn');
                                $('.slide3 .slide-font').addClass('fadein');
                            }, 800);
                            setTimeout(function() {
                                $('.slide3-t-1').addClass('fadeInLeft')
                                $('.slide3-t-4').addClass('fadeInRight')
                            }, 400);
                            setTimeout(function() {
                                $('.slide3-t-2').addClass('fadeInUp')
                                $('.slide3-t-3').addClass('fadeInRight')
                            }, 400);
                            break;
                        case 3:
                            $('.slide4').addClass('fadeIn');
                            $('.slide4-2').addClass('fadeIn');
                            setTimeout(function() {
                                $('.slide4 .slide-font').addClass('fadein');
                            }, 800);
                            setTimeout(function() {
                                $('.slide4-t-1').addClass('fadeInLeft')
                                $('.slide4-t-4').addClass('fadeInRight')
                            }, 400);
                            setTimeout(function() {
                                $('.slide4-t-2').addClass('fadeInUp')
                                $('.slide4-t-3').addClass('fadeInRight')
                            }, 400);
                            break;
                        case 4:
                            $('.slide5').addClass('fadeIn');
                            $('.slide5-2').addClass('fadeIn');
                            setTimeout(function() {
                                $('.slide5-3').addClass('fadeIn');
                                $('.slide5 .slide-font').addClass('fadein');
                            }, 800);
                            setTimeout(function() {
                                $('.slide5-t-1').addClass('fadeInLeft')
                                $('.slide5-t-4').addClass('fadeInRight')
                            }, 400);
                            setTimeout(function() {
                                $('.slide5-t-2').addClass('fadeInUp')
                                $('.slide5-t-3').addClass('fadeInRight')
                            }, 400);
                            break;
                        case 5:
                            $('.slide-icon').hide(400);
                            $('.slide6').addClass('fadeIn');
                            setTimeout(function() {
                                $('.slide6-title').addClass('zoomInX').addClass('fadeIn');
                                $('.slide6-line').addClass('fadeInUp');
                                $('.slide6-moon-outer').addClass('fadeIn');
                            }, 400);
                            setTimeout(function() {
                                $('.person3').addClass('fadeInUp');
                            }, 800);
                            setTimeout(function() {
                                $('.person4').addClass('fadeInUp');
                                $('.person2').addClass('fadeInUp');
                            }, 1000);
                            setTimeout(function() {
                                $('.person1').addClass('fadeInUp');
                                $('.person5').addClass('fadeInUp');

                            }, 1200);
                            setTimeout(function() {
                                $('.person-icon-1').addClass('fadeIn');
                                $('.person-icon-2').addClass('fadeIn');
                                $('.person-icon-3').addClass('fadeIn');
                                $('.person-icon-4').addClass('fadeIn');
                                $('.person-icon-5').addClass('fadeIn');
                            }, 2000);
                            setTimeout(function() {
                                $('.slide6 .touch-hand').show();
                                $('.slide6 .touch-hand').addClass('fadeInUp');
                            }, 2200);
                            break;
                    }

                    $('.pointer').hide();
                }
                $('.triangle').removeClass('end-paly');
            },
        });

        var s = 'Hey，你收到一份特别中秋祝福!';
        var con = $('.typeContainer');
        var index = 0;
        var length = s.length;
        var tId = null;

        function typeStart() {
            con.text('');

            tId = setInterval(function() {
                con.append(s.charAt(index));
                if (index++ === length) {
                    clearInterval(tId);
                    index = 0;
                };
            }, 100);
            touchShow();
        }

        function touchShow() {
            setTimeout(function() {
                $('.letter').show();
                $('.secondPage .touch-hand').addClass('fadeInUp');
            }, 1800);
        }

        //click mp3 box
        $('.audio-click').click(function() {
            var audio = document.getElementById('audio');
            $(this).toggleClass('active');
            if (!audio.paused) {
                $('#audio')[0].pause();
            } else {
                $('#audio')[0].play();
            }
        });

        // share layer
        $('.btn-share').on('touchend', function() {
            $('.share-layer').show();
        });
        $('.share-layer').on('touchend', function() {
            $(this).hide();
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
