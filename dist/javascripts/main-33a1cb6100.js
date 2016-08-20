"use strict";$(function(){var e=$(window).width()/25;$("html").css("font-size",e)});var videosArr=document.querySelectorAll(".myVideo"),app={preload:function(){function e(){if(0==t){var e=.9;return 90==parseInt(n/d*100)?$(".loading .dot").text("100%"):$(".loading .dot").text(parseInt(n/d*100)+"%"),n/d>=e}}function a(){t=!0,app.start(),$(".slide-icon").hide(),$(".loading").addClass("leave"),setTimeout(function(){$(".start-title").addClass("start-title-anim"),$(".start-line").addClass("start-line-anim"),setTimeout(function(){$(".loading").addClass("leaved"),$(".scene").addClass("loaded"),console.log("start"),$(".startPage-main").addClass("fadeInUp"),setTimeout(function(){$(".start-bg").addClass("fadeIn"),$(".startPage .logo").addClass("fadeInDown"),$(".start-cloud-1").addClass("rightLeft"),$(".start-cloud-2").addClass("rightLeft"),$(".start-cloud-3").addClass("leftRight")},200),setTimeout(function(){$(".start-moon").addClass("fadeInUp"),$(".start-img3").addClass("fadeInUp")},400),setTimeout(function(){$(".start-img1").addClass("fadeInUp"),$(".start-img2").addClass("fadeInUp")},600),setTimeout(function(){$(".start-img5").addClass("fadeIn")},1600),setTimeout(function(){$(".start-img4").addClass("fadeIn")},2e3)},400)},400)}for(var s=document.getElementsByTagName("img"),d=0,n=0,t=!1,i=0;i<s.length;i++)s[i].hasAttribute("lazy-src")&&d++;for(var i=0;i<s.length;i++){var o=s[i];if(o.hasAttribute("lazy-src")){var l=new Image;l.src=o.getAttribute("lazy-src"),l.index=i,l.onload=function(){n++,s[this.index].src=this.src,e()&&0==t&&a()},l.onerror=function(s){d-=1,e()&&0==t&&a()}}}},create:function(){function e(){n.text(""),o=setInterval(function(){n.append(d.charAt(t)),t++===i&&(clearInterval(o),t=0)},100),a()}function a(){setTimeout(function(){$(".letter").show(),$(".secondPage .touch-hand").addClass("fadeInUp")},1800)}var s;app.mySwiper=new Swiper(".swiper-container",{direction:"horizontal",onInit:function(){console.log("init"),setTimeout(function(){$(".begin").addClass("fadeout"),setTimeout(function(){$(".begin").addClass("leaved")},800),setTimeout(function(){$(".secondPage").addClass("fadein"),$(".second-title").addClass("zoomInX"),$(".second-line").addClass("fadeInDown"),$(".second-1").addClass("fadeInRightBig"),setTimeout(function(){$(".second-2").addClass("fadeInRightBig"),$(".second-4").addClass("fadeInRightBig")},100),$(".second-3").addClass("fadeInLeftBig"),$(".second-5").addClass("fadeInRightBig"),setTimeout(function(){$(".screen").addClass("fadeIn"),e()},1100)},800)},5e3),$(".typeContainer").on("touchend",function(){console.log("second out"),$(".typeContainer").hide(200),$(".touch-hand").hide(200),$(".letter").hide().css("opacity",0),$(".screen-light").show(100).addClass("light-scale"),setTimeout(function(){$(".secondPage").css("display","block").removeClass("fadein").addClass("fadeOut"),setTimeout(function(){$(".secondPage").addClass("leaved").css("display","none"),$(".slide-icon").show(200),setTimeout(function(){$(".slide1").addClass("fadeIn")},100),$(".slide1-2").addClass("fadeIn"),setTimeout(function(){$(".slide1-bg").addClass("fadeIn")},500),setTimeout(function(){$(".slide1-3").addClass("fadeIn"),$(".slide1 .slide-font").addClass("slide-font-trans")},400),setTimeout(function(){$(".slide1-t-1").addClass("fadeInLeft"),$(".slide1-t-4").addClass("fadeInRight")},400),setTimeout(function(){$(".slide1-t-2").addClass("fadeInUp"),$(".slide1-t-3").addClass("fadeInRight")},400)},800)},1200)}),$(".btn-moon").on("touchend",function(){}),setTimeout(function(){$("#audio")[0].play()},800)},onTransitionStart:function(e){s=e.previousIndex,console.log(s)},onTransitionEnd:function(e){if(s!=e.activeIndex){console.log(e.activeIndex),navigator.userAgent.indexOf("iPhone")==-1&&navigator.userAgent.indexOf("iPod")==-1&&navigator.userAgent.indexOf("iPad")==-1||videosArr[e.activeIndex]&&(videosArr[e.activeIndex].play(),videosArr[e.activeIndex].addEventListener("canplay",function(){videosArr[e.activeIndex].pause()},!1));var a=e.activeIndex;$(".swiper-slide")[a];switch($(".slide-icon").show(400),a){case 0:setTimeout(function(){$(".slide1").addClass("fadeIn")},100);break;case 1:$(".slide2").addClass("fadeIn"),$(".slide2-2").addClass("fadeIn"),setTimeout(function(){$(".slide2-3").addClass("fadeIn"),$(".slide2 .slide-font").addClass("fadein")},400),setTimeout(function(){$(".slide2-t-1").addClass("fadeInLeft"),$(".slide2-t-4").addClass("fadeInRight")},400),setTimeout(function(){$(".slide2-t-2").addClass("fadeInUp"),$(".slide2-t-3").addClass("fadeInRight")},400);break;case 2:$(".slide3").addClass("fadeIn"),$(".slide3-2").addClass("fadeIn"),setTimeout(function(){$(".slide3-3").addClass("fadeIn"),$(".slide3 .slide-font").addClass("fadein")},800),setTimeout(function(){$(".slide3-t-1").addClass("fadeInLeft"),$(".slide3-t-4").addClass("fadeInRight")},400),setTimeout(function(){$(".slide3-t-2").addClass("fadeInUp"),$(".slide3-t-3").addClass("fadeInRight")},400);break;case 3:$(".slide4").addClass("fadeIn"),$(".slide4-2").addClass("fadeIn"),setTimeout(function(){$(".slide4 .slide-font").addClass("fadein")},800),setTimeout(function(){$(".slide4-t-1").addClass("fadeInLeft"),$(".slide4-t-4").addClass("fadeInRight")},400),setTimeout(function(){$(".slide4-t-2").addClass("fadeInUp"),$(".slide4-t-3").addClass("fadeInRight")},400);break;case 4:$(".slide5").addClass("fadeIn"),$(".slide5-2").addClass("fadeIn"),setTimeout(function(){$(".slide5-3").addClass("fadeIn"),$(".slide5 .slide-font").addClass("fadein")},800),setTimeout(function(){$(".slide5-t-1").addClass("fadeInLeft"),$(".slide5-t-4").addClass("fadeInRight")},400),setTimeout(function(){$(".slide5-t-2").addClass("fadeInUp"),$(".slide5-t-3").addClass("fadeInRight")},400);break;case 5:$(".slide-icon").hide(400),$(".slide6").addClass("fadeIn"),setTimeout(function(){$(".slide6-title").addClass("zoomInX").addClass("fadeIn"),$(".slide6-line").addClass("fadeInUp"),$(".slide6-moon-outer").addClass("fadeIn")},400),setTimeout(function(){$(".person3").addClass("fadeInUp")},800),setTimeout(function(){$(".person4").addClass("fadeInUp"),$(".person2").addClass("fadeInUp")},1e3),setTimeout(function(){$(".person1").addClass("fadeInUp"),$(".person5").addClass("fadeInUp")},1200),setTimeout(function(){$(".person-icon-1").addClass("fadeIn"),$(".person-icon-2").addClass("fadeIn"),$(".person-icon-3").addClass("fadeIn"),$(".person-icon-4").addClass("fadeIn"),$(".person-icon-5").addClass("fadeIn")},2e3),setTimeout(function(){$(".scale-moon-outer").css("display","block"),$(".swiper-container").addClass("fadeOut"),setTimeout(function(){$(".scale-moon").addClass("scale-moon-anim")},600),setTimeout(function(){$(".swiper-container").addClass("leaved"),$(".scale-moon-outer").addClass("fadeout"),$(".endPage").addClass("fadeIn")},2600),setTimeout(function(){$(".scale-moon-outer").css("display","none"),$(".end-title1").addClass("fadeInUp"),$(".end-title2").addClass("fadeInUp"),$(".end-product").addClass("fadeInUp"),$(".end-price").addClass("fadeIn"),$(".end-text").addClass("fadeIn")},3600),setTimeout(function(){$(".btn-buy").addClass("fadein"),$(".btn-share").addClass("fadein")},4400)},4800)}$(".pointer").hide()}$(".triangle").removeClass("end-paly")}});var d="Hey，你收到一份特别中秋祝福!",n=$(".typeContainer"),t=0,i=d.length,o=null;$(".audio-click").click(function(){var e=document.getElementById("audio");$(this).toggleClass("active"),e.paused?$("#audio")[0].play():$("#audio")[0].pause()}),$(".btn-share").on("touchend",function(){$(".share-layer").show()}),$(".share-layer").on("touchend",function(){$(this).hide()})},start:function(){this.create()}};$(function(){app.preload(),console.log("app started success...\nhivandu.github.io&doo[at]hivan.me")});