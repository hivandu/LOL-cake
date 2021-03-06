// Created by Hivan Du 2016 (Siso brand interactive team).

"use strict";

$(function() {
    // 根据设备尺寸，限定根字体大小
    var size = $(window).width() / 25;
    $('html').css('font-size', size);
});

var screenHeight = window.screen.height;
var screenWidth = window.screen.width;
if (screenHeight / screenWidth < 1.65) {
    $('.end-price').addClass('small');
    $('.end-text').addClass('small');
}

//  limit browser drag move
// document.addEventListener('touchmove', function(e) {
//   e.preventDefault();
// }, true);

var videosArr = document.querySelectorAll(".myVideo");

var app = {
    preload: function() {

        var nativeXHR = function() {
            var e = null;
            if (window["XMLHttpRequest"] != undefined)
                e = new XMLHttpRequest;
            else
                try {
                    e = new ActiveXObject("MSXML2.XMLHTTP")
                } catch (t) {
                    try {
                        e = new ActiveXObject("Microsoft.XMLHTTP")
                    } catch (t) {
                        e = null
                    }
                }
            return e
        }

        var EXTENSION_PATT = /\/?[^/]+\.(\w{1,5})$/i;
        var xhr = nativeXHR();
        xhr.responseType = "arraybuffer";

        xhr.onload = function(e) {
            var zip = new ZipPackage()
            zip.parse(e.target.response)
            zip.decompress(function(r) {
                if (r.type == "fileload") {
                    var type = r.file.name.match(EXTENSION_PATT)[1]
                    var blob = createBlob(r.file.buffer, "image/" + type)
                    r.file.data = blob;
                }
                if (r.type == "complete") {

                    var pic = document.getElementsByTagName("img")

                    for (var i = 0; i < pic.length; i++) {
                        var spath = (pic[i].getAttribute("lazy-src"))

                        var file = zip.getFile(spath);
                        if (file) {
                            pic[i].src = URL.createObjectURL(file.data)
                            pic[i].onload = function() {
                                URL.revokeObjectURL(file.data)
                            }
                        }
                    }
                }
            })
        }
        xhr.onprogress = function(event) {
            var divStatus = $('.loading .dot');
            if (event.lengthComputable) {
                divStatus.text(parseInt(event.loaded / event.total * 100) + ' %');
                if (event.loaded == event.total) {
                    // divStatus.text('正在解析...');
                    setTimeout(function() {
                        goMainProcess();
                    }, 3200);
                }
            }
        }
        xhr.open("get", "img.swf", true);
        xhr.send();

        function goMainProcess() {
            // isLoaded = true;
            app.start();
            $('.slide-icon').hide();
            setTimeout(function() {
                $('.loading').addClass('leave');
                $('.start-title').addClass('start-title-anim');
                $('.start-line').addClass('start-line-anim');
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
            }, 1000);
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
                            setTimeout(function(){
                                $('.letter-close').addClass('fadeIn');
                            }, 2000);
                        }, 1100);
                    }, 800);
                }, 4000);

                $('.screen-click').on('touchend', function() {
                    console.log('second out');
                    $('.typeContainer').hide(200);
                    $('.touch-hand').hide(200);
                    $('.letter-outer').css('opacity', 0);
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
                                $('.slide1 .slide-font-outer').addClass('slide-font-trans')
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
                            app.mySwiper.lockSwipes();
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
                            }, 3000);
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
            $('.audio-click').hide();
        });
        $('.share-layer').on('touchend', function() {
            $(this).hide();
            $('.audio-click').show();
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
