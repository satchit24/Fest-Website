/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(v()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",Z),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},v=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",k),o.controls.autoEl.on("click",".bx-stop",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},Z=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",v()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",Z))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);
;/*
* onScreen 0.0.0 
* Checks if matched elements are inside the viewport. 
* Built on Mon Mar 09 2015 13:11:43 
*
* Copyright 2015 Silvestre Herrera <silvestre.herrera@gmail.com> and contributors, Licensed under the MIT license:
* http://www.opensource.org/licenses/mit-license.php
*
* You can find a list of contributors at:
* https://github.com/silvestreh/onScreen/graphs/contributors
*/


!function(a){a.fn.onScreen=function(b){var c={container:window,direction:"vertical",toggleClass:null,doIn:null,doOut:null,tolerance:0,throttle:null,lazyAttr:null,lazyPlaceholder:"data:image/gif;base64,R0lGODlhEAAFAIAAAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCQAAACwAAAAAEAAFAAACCIyPqcvtD00BACH5BAkJAAIALAAAAAAQAAUAgfT29Pz6/P///wAAAAIQTGCiywKPmjxUNhjtMlWrAgAh+QQJCQAFACwAAAAAEAAFAIK8urzc2tzEwsS8vrzc3tz///8AAAAAAAADFEiyUf6wCEBHvLPemIHdTzCMDegkACH5BAkJAAYALAAAAAAQAAUAgoSChLS2tIyKjLy+vIyOjMTCxP///wAAAAMUWCQ09jAaAiqQmFosdeXRUAkBCCUAIfkECQkACAAsAAAAABAABQCDvLq83N7c3Nrc9Pb0xMLE/P78vL68/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCEwkCnKGbegvQn4RjGMx8F1HxBi5Il4oEiap2DcVYlpZwQAIfkECQkACAAsAAAAABAABQCDvLq85OLkxMLE9Pb0vL685ObkxMbE/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCDwnCGHEcIMxPn4VAGMQNBx0zQEZHkiYNiap5RaBKG9EQAh+QQJCQAJACwAAAAAEAAFAIOEgoTMysyMjozs6uyUlpSMiozMzsyUkpTs7uz///8AAAAAAAAAAAAAAAAAAAAAAAAEGTBJiYgoBM09DfhAwHEeKI4dGKLTIHzCwEUAIfkECQkACAAsAAAAABAABQCDvLq85OLkxMLE9Pb0vL685ObkxMbE/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCAQSTmMEGaco8+UBSACwWBqHxKOJYd+q1iaXFoRRMbtEQAh+QQJCQAIACwAAAAAEAAFAIO8urzc3tzc2tz09vTEwsT8/vy8vrz8+vz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAEIhBJWc6wJZAtJh3gcRBAaXiIZV2kiRbgNZbA6VXiUAhGL0QAIfkECQkABgAsAAAAABAABQCChIKEtLa0jIqMvL68jI6MxMLE////AAAAAxRoumxFgoxGCbiANos145e3DJcQJAAh+QQJCQAFACwAAAAAEAAFAIK8urzc2tzEwsS8vrzc3tz///8AAAAAAAADFFi6XCQwtCmAHbPVm9kGWKcEQxkkACH5BAkJAAIALAAAAAAQAAUAgfT29Pz6/P///wAAAAIRlI8SAZsPYnuJMUCRnNksWwAAOw==",debug:!1};return"remove"!==b&&a.extend(c,b),this.each(function(){function d(){a(w).off("scroll.onScreen resize.onScreen"),a(window).off("resize.onScreen")}function e(){return z?u<q-c.tolerance&&l<u+s-c.tolerance:u<o-c.tolerance&&u>-s+c.tolerance}function f(){return z?u+(s-c.tolerance)<l||u>q-c.tolerance:u>o-c.tolerance||-s+c.tolerance>u}function g(){return z?v<r-c.tolerance&&m<v+t-c.tolerance:v<p-c.tolerance&&v>-t+c.tolerance}function h(){return z?v+(t-c.tolerance)<m||v>r-c.tolerance:v>p-c.tolerance||-t+c.tolerance>v}function i(){return x?!1:"horizontal"===c.direction?g():e()}function j(){return x?"horizontal"===c.direction?h():f():!1}function k(a,b,c){var d,e,f;return function(){e=arguments,f=!0,c=c||this,d||!function(){f?(a.apply(c,e),f=!1,d=setTimeout(arguments.callee,b)):d=null}()}}var l,m,n,o,p,q,r,s,t,u,v,w=this,x=!1,y=a(this),z=a.isWindow(c.container);if("remove"===b)return void d();var A=function(){if(z||"static"!==a(c.container).css("position")||a(c.container).css("position","relative"),n=a(c.container),o=n.height(),p=n.width(),q=n.scrollTop()+o,r=n.scrollLeft()+p,s=y.outerHeight(!0),t=y.outerWidth(!0),z){var b=y.offset();u=b.top,v=b.left}else{var d=y.position();u=d.top,v=d.left}if(l=n.scrollTop(),m=n.scrollLeft(),c.debug,i()){if(c.toggleClass&&y.addClass(c.toggleClass),a.isFunction(c.doIn)&&c.doIn.call(y[0]),c.lazyAttr&&"IMG"===y.prop("tagName")){var e=y.attr(c.lazyAttr);e!==y.prop("src")&&(y.css({background:"url("+c.lazyPlaceholder+") 50% 50% no-repeat",minHeight:"5px",minWidth:"16px"}),y.prop("src",e).load(function(){a(this).css({background:"none"})}))}x=!0}else j()&&(c.toggleClass&&y.removeClass(c.toggleClass),a.isFunction(c.doOut)&&c.doOut.call(y[0]),x=!1)};window.location.hash?k(A,50):A(),c.throttle&&(A=k(A,c.throttle)),a(c.container).on("scroll.onScreen resize.onScreen",A),z||a(window).on("resize.onScreen",A),"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=jQuery:"function"==typeof define&&define.amd&&define("jquery-onscreen",[],function(){return jQuery})})}}(jQuery);
//# sourceMappingURL=jquery.onscreen.min.js.map
;/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

/*
 * Bones Scripts File
 * Author: Eddie Machado
 *
 * This file should contain any js scripts you want to add to the site.
 * Instead of calling it in the header or throwing it inside wp_head()
 * this file will be called automatically in the footer so as not to
 * slow the page load.
 *
 * There are a lot of example functions and tools in here. If you don't
 * need any of it, just remove it. They are meant to be helpers and are
 * not required. It's your world baby, you can do whatever you want.
*/


/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
*/
function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y };
}
// setting the viewport width
var viewport = updateViewportDimensions();


/*
 * Throttle Resize-triggered Events
 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
*/
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
		if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
var timeToWaitForLast = 100;


/*
 * Here's an example so you can see how we're using the above function
 *
 * This is commented out so it won't work, but you can copy it and
 * remove the comments.
 *
 *
 *
 * If we want to only do it on a certain page, we can setup checks so we do it
 * as efficient as possible.
 *
 * if( typeof is_home === "undefined" ) var is_home = $('body').hasClass('home');
 *
 * This once checks to see if you're on the home page based on the body class
 * We can then use that check to perform actions on the home page only
 *
 * When the window is resized, we perform this function
 * $(window).resize(function () {
 *
 *    // if we're on the home page, we wait the set amount (in function above) then fire the function
 *    if( is_home ) { waitForFinalEvent( function() {
 *
 *	// update the viewport, in case the window size has changed
 *	viewport = updateViewportDimensions();
 *
 *      // if we're above or equal to 768 fire this off
 *      if( viewport.width >= 768 ) {
 *        console.log('On home page and window sized to 768 width or more.');
 *      } else {
 *        // otherwise, let's do this instead
 *        console.log('Not on home page, or window sized to less than 768.');
 *      }
 *
 *    }, timeToWaitForLast, "your-function-identifier-string"); }
 * });
 *
 * Pretty cool huh? You can create functions like this to conditionally load
 * content and other stuff dependent on the viewport.
 * Remember that mobile devices and javascript aren't the best of friends.
 * Keep it light and always make sure the larger viewports are doing the heavy lifting.
 *
*/

/*
 * We're going to swap out the gravatars.
 * In the functions.php file, you can see we're not loading the gravatar
 * images on mobile to save bandwidth. Once we hit an acceptable viewport
 * then we can swap out those images since they are located in a data attribute.
*/
function loadGravatars() {
  // set the viewport using the function above
  viewport = updateViewportDimensions();
  // if the viewport is tablet or larger, we load in the gravatars
  if (viewport.width >= 768) {
  jQuery('.comment img[data-gravatar]').each(function(){
    jQuery(this).attr('src',jQuery(this).attr('data-gravatar'));
  });
	}
} // end function


/*
 * Put all your regular jQuery in here.
*/
jQuery(document).ready(function($) {

	loadGravatars();
	
	//Anchor Scroll
	$(function() {
		$('a[href*=\\#]:not([href=\\#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
					  scrollTop: target.offset().top
					}, 1500, 'easeInOutExpo');
					return false;
				}
			}
		});
	});
	
	(function() {
	
		"use strict";
		
		var toggles = document.querySelectorAll(".c-hamburger");
		
		for (var i = toggles.length - 1; i >= 0; i--) {
			var toggle = toggles[i];
			toggleHandler(toggle);
		};
		
		function toggleHandler(toggle) {
			toggle.addEventListener( "click", function(e) {
				e.preventDefault();
				(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
				
				$('.header nav').toggleClass('open');
				$('#content').toggleClass('open');
				$('footer').toggleClass('open');
				
			});
		}
	
	})();
	
	$('.ticker-slider').bxSlider({
		speed: 10000,
		minSlides: 1,
		maxSlides: 25,
		slideWidth: 2000,
		slideMargin: 0,
		ticker: true
	});
	
	//ON WINDOW RESIZE (WITH DELAY)
	if( viewport.width >= 768 ) {
		
		if( viewport.width >= 1030 ) {
			
			$('.home-play-me').addClass("playing").html("Pause Me");
			
			if ($('video').length) {
				$('video')[0].play();
			}
			
			// Attach event handler 
			$('.home-play-me').on('click', function(event) {
				
				if ( $(this).hasClass('playing') ) {
					
					event.preventDefault();
					$('video')[0].pause();
					$(this).removeClass('playing');
					$('.home-play-me').html("Play Me");
					
				} else {
					
					event.preventDefault();
					$('video')[0].play();
					$(this).addClass('playing');
					$('.home-play-me').html("Pause Me");
					
				}
				
			});
			
			$(window).load(function(){
				
				$('.case-slider').bxSlider({
					minSlides: 4,
					maxSlides: 4,
					moveSlides: 1,
					slideWidth: 728,
					slideMargin: 0,
					speed: 400,
					adaptiveHeight: true,
					adaptiveHeightSpeed: 400,
					swipeThreshold: 20,
					pager: false,
					controls: true,
					auto: false,
					pause: 4000
				});
			
			
				$('.case-item').hover(
					function() {
					
						$( ".case-image" ).addClass('fade');
						$( ".case-text" ).removeClass('active');
						var caseid = $(this).attr('id');
						$('.case-text-wrap .' + caseid).addClass('active');
					
					}, function() {
						
						$( ".case-image" ).removeClass('fade');
						$( ".case-text" ).removeClass('active');
						$( ".default-case-text" ).addClass('active');
						
					}
				);
			
			});
			
			$(function () {
			    $(window).on("resize", function () {
				    clearTimeout(this.id);
					this.id = setTimeout(doneResizingDown, 500);
			    });
			});
			//REFRESH WINDOW for mobile
		    function doneResizingDown(){
				var windowsize = $(this).width();
				if (windowsize < 1030) {
	            	location.href = location.href;
	            }
			}
		
		} else {
			
			$('.home-play-me').removeClass("playing").html("Play Me");
			
			if ($('video').length) {
				$('video')[0].pause();
			}
			  
			// VIDEO event handler 
			$('.home-play-me').on('click', function(event) {
				
				if ( $(this).hasClass('playing') ) {
					
					event.preventDefault();
					$('video')[0].pause();
					$(this).removeClass('playing');
					$('.home-play-me').html("Play Me");
					
				} else {
					
					event.preventDefault();
					$('video')[0].play();
					$(this).addClass('playing');
					$('.home-play-me').html("Pause Me");
					
				}
				
			});
			
			$('.case-slider').bxSlider({
				minSlides: 3,
				maxSlides: 3,
				moveSlides: 3,
				slideWidth: 728,
				slideMargin: 40,
				speed: 500,
				adaptiveHeight: true,
				adaptiveHeightSpeed: 500,
				swipeThreshold: 20,
				pager: false,
				controls: true,
				auto: false,
				pause: 4000
			});
			$('.team-slider').bxSlider({
				minSlides: 2,
				maxSlides: 2,
				moveSlides: 2,
				slideWidth: 728,
				slideMargin: 40,
				speed: 500,
				adaptiveHeight: true,
				adaptiveHeightSpeed: 500,
				swipeThreshold: 20,
				pager: false,
				controls: true,
				auto: false,
				pause: 4000
			});
			
			$(function () {
			    $(window).on("resize", function () {
				    clearTimeout(this.id);
					this.id = setTimeout(doneResizingMiddle, 500);
			    });
			});
			//REFRESH WINDOW for mobile
		    function doneResizingMiddle(){
				var windowsize = $(this).width();
				if (windowsize < 768) {
	            	location.href = location.href;
	            }
	            if (windowsize >= 1030) {
	            	location.href = location.href;
	            }
			}
		
		}

		
	} else {
		
		$('.case-slider').bxSlider({
			speed: 400,
			adaptiveHeight: true,
			adaptiveHeightSpeed: 400,
			swipeThreshold: 20,
			pager: false,
			controls: true,
			auto: false,
			pause: 4000
		});
		$('.team-slider').bxSlider({
			speed: 400,
			adaptiveHeight: true,
			adaptiveHeightSpeed: 400,
			swipeThreshold: 20,
			pager: false,
			controls: true,
			auto: false,
			pause: 4000
		});
		
		$(function () {
		    $(window).on("resize", function () {
			    clearTimeout(this.id);
				this.id = setTimeout(doneResizingUp, 500);
		    });
		});
		//REFRESH WINDOW for desktop
		function doneResizingUp(){
			var windowsize = $(this).width();
	        if (windowsize >= 768) {
	            location.href = location.href;
	        }
		}
		
	}
	
	$('.onFade').onScreen({
	   container: window,
	   direction: 'vertical',
	   tolerance: 300,
	   throttle: 400,
	   toggleClass: 'onScreen'
	});
	$('.onFadeTop').onScreen({
	   container: window,
	   direction: 'vertical',
	   tolerance: 300,
	   throttle: 400,
	   toggleClass: 'onScreen'
	});
	
	/**
	 * Created by Sallar Kaboli <sallar.kaboli@gmail.com>
	 * @sallar
	 * 
	 * Released under the MIT License.
	 * http://sallar.mit-license.org/
	 * 
	 * This document demonstrates three things:
	 * 
	 * - Creating a simple parallax effect on the content
	 * - Creating a Medium.com-style blur on scroll image
	 * - Getting scroll position using requestAnimationFrame for better performance
	 */
	
	/**
	 * Cache
	 */
	var $blur      = $('.background-wrap-inner')
	  , wHeight    = $(window).height();
	
	$(window).on('resize', function(){
	  wHeight = $(window).height();
	});
	
	/**
	 * requestAnimationFrame Shim 
	 */
	window.requestAnimFrame = (function()
	{
	  return  window.requestAnimationFrame       ||
	          window.webkitRequestAnimationFrame ||
	          window.mozRequestAnimationFrame    ||
	          function( callback ){
	            window.setTimeout(callback, 1000 / 60);
	          };
	})();
	
	/**
	 * Scroller
	 */
	function Scroller()
	{
	  this.latestKnownScrollY = 0;
	  this.ticking            = false;
	}
	
	Scroller.prototype = {
	  /**
	   * Initialize
	   */
	  init: function() {
	    window.addEventListener('scroll', this.onScroll.bind(this), false);
	  },
	
	  /**
	   * Capture Scroll
	   */
	  onScroll: function() {
	    this.latestKnownScrollY = window.scrollY;
	    this.requestTick();
	  },
	
	  /**
	   * Request a Tick
	   */
	  requestTick: function() {
	    if( !this.ticking ) {
	      window.requestAnimFrame(this.update.bind(this));
	    }
	    this.ticking = true;
	  },
	
	  /**
	   * Update.
	   */
	  update: function() {
	    var currentScrollY = this.latestKnownScrollY;
	    this.ticking       = false;
	    
	    /**
	     * Do The Dirty Work Here
	     */
	    var slowScroll = currentScrollY / 4
	      , blurScroll = currentScrollY * 20
	      , zoomScroll = currentScrollY ;
	    
	    /*$content.css({
	      'transform'         : 'translateY(-' + slowScroll + 'px)',
	      '-moz-transform'    : 'translateY(-' + slowScroll + 'px)',
	      '-webkit-transform' : 'translateY(-' + slowScroll + 'px)'
	    });*/
		
		if (zoomScroll >= 0 && zoomScroll <= 9 ) {
			
			//var zoomVal = 'scale(1.000' + zoomScroll + ')';
			var filterVal = 'blur(' + blurScroll / 800 + 'px)';
			
		} else if (zoomScroll >= 10 && zoomScroll <= 99 ) {
			
			//var zoomVal = 'scale(1.00' + zoomScroll + ')';
			var filterVal = 'blur(' + blurScroll / 800 + 'px)';
			
		} else if (zoomScroll >= 100 && zoomScroll <= 999 ) {
			
			//var zoomVal = 'scale(1.0' + zoomScroll + ')';
			var filterVal = 'blur(' + blurScroll / 800 + 'px)';
			
		} else if (zoomScroll >= 1000 ) {
			
			//var zoomVal = 'scale(1.1)';
			var filterVal = 'blur(25px)';
			
		}
	    
		$blur
		.css('filter',filterVal)
		.css('webkitFilter',filterVal)
		.css('mozFilter',filterVal)
		.css('oFilter',filterVal)
		.css('msFilter',filterVal);
		/*
		.css('transform',zoomVal)
		.css('webkitTransform',zoomVal)
		.css('mozTransform',zoomVal)
		.css('oTransform',zoomVal)
		.css('msTransform',zoomVal);
	    */
	    
	  }
	};
	
	/**
	 * Attach!
	 */
	var scroller = new Scroller();  
	scroller.init();

}); /* end of as page load scripts */
;!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);
;!function($){"use strict";var escape=/["\\\x00-\x1f\x7f-\x9f]/g,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},hasOwn=Object.prototype.hasOwnProperty;$.toJSON="object"==typeof JSON&&JSON.stringify?JSON.stringify:function(a){if(null===a)return"null";var b,c,d,e,f=$.type(a);if("undefined"!==f){if("number"===f||"boolean"===f)return String(a);if("string"===f)return $.quoteString(a);if("function"==typeof a.toJSON)return $.toJSON(a.toJSON());if("date"===f){var g=a.getUTCMonth()+1,h=a.getUTCDate(),i=a.getUTCFullYear(),j=a.getUTCHours(),k=a.getUTCMinutes(),l=a.getUTCSeconds(),m=a.getUTCMilliseconds();return g<10&&(g="0"+g),h<10&&(h="0"+h),j<10&&(j="0"+j),k<10&&(k="0"+k),l<10&&(l="0"+l),m<100&&(m="0"+m),m<10&&(m="0"+m),'"'+i+"-"+g+"-"+h+"T"+j+":"+k+":"+l+"."+m+'Z"'}if(b=[],$.isArray(a)){for(c=0;c<a.length;c++)b.push($.toJSON(a[c])||"null");return"["+b.join(",")+"]"}if("object"==typeof a){for(c in a)if(hasOwn.call(a,c)){if("number"===(f=typeof c))d='"'+c+'"';else{if("string"!==f)continue;d=$.quoteString(c)}f=typeof a[c],"function"!==f&&"undefined"!==f&&(e=$.toJSON(a[c]),b.push(d+":"+e))}return"{"+b.join(",")+"}"}}},$.evalJSON="object"==typeof JSON&&JSON.parse?JSON.parse:function(str){return eval("("+str+")")},$.secureEvalJSON="object"==typeof JSON&&JSON.parse?JSON.parse:function(str){var filtered=str.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"");if(/^[\],:{}\s]*$/.test(filtered))return eval("("+str+")");throw new SyntaxError("Error parsing JSON, source is not valid.")},$.quoteString=function(a){return a.match(escape)?'"'+a.replace(escape,function(a){var b=meta[a];return"string"==typeof b?b:(b=a.charCodeAt(),"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16))})+'"':'"'+a+'"'}}(jQuery);
;function gformBindFormatPricingFields(){jQuery(".ginput_amount, .ginput_donation_amount").bind("change",function(){gformFormatPricingField(this)}),jQuery(".ginput_amount, .ginput_donation_amount").each(function(){gformFormatPricingField(this)})}function Currency(a){this.currency=a,this.toNumber=function(a){return this.isNumeric(a)?parseFloat(a):gformCleanNumber(a,this.currency.symbol_right,this.currency.symbol_left,this.currency.decimal_separator)},this.toMoney=function(a,b){if(b=b||!1,b||(a=gformCleanNumber(a,this.currency.symbol_right,this.currency.symbol_left,this.currency.decimal_separator)),!1===a)return"";a+="",negative="","-"==a[0]&&(a=parseFloat(a.substr(1)),negative="-"),money=this.numberFormat(a,this.currency.decimals,this.currency.decimal_separator,this.currency.thousand_separator),"0.00"==money&&(negative="");var c=this.currency.symbol_left?this.currency.symbol_left+this.currency.symbol_padding:"",d=this.currency.symbol_right?this.currency.symbol_padding+this.currency.symbol_right:"";return money=negative+this.htmlDecode(c)+money+this.htmlDecode(d),money},this.numberFormat=function(a,b,c,d,e){var e=void 0===e;a=(a+"").replace(",","").replace(" ","");var f=isFinite(+a)?+a:0,g=isFinite(+b)?Math.abs(b):0,h=void 0===d?",":d,i=void 0===c?".":c,j="",k=function(a,b){var c=Math.pow(10,b);return""+Math.round(a*c)/c};return"0"==b?(f+=1e-10,j=(""+Math.round(f)).split(".")):-1==b?j=(""+f).split("."):(f+=1e-10,j=k(f,g).split(".")),j[0].length>3&&(j[0]=j[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,h)),e&&(j[1]||"").length<g&&(j[1]=j[1]||"",j[1]+=new Array(g-j[1].length+1).join("0")),j.join(i)},this.isNumeric=function(a){return gformIsNumber(a)},this.htmlDecode=function(a){var b,c,d=a,e=d.match(/&#[0-9]{1,5};/g);if(null!=e)for(var f=0;f<e.length;f++)c=e[f],b=c.substring(2,c.length-1),d=b>=-32768&&b<=65535?d.replace(c,String.fromCharCode(b)):d.replace(c,"");return d}}function gformCleanNumber(a,b,c,d){var e="",f="",g="",h=!1;a+=" ",a=a.replace(/&.*?;/g,""),a=a.replace(b,""),a=a.replace(c,"");for(var i=0;i<a.length;i++)g=a.substr(i,1),parseInt(g)>=0&&parseInt(g)<=9||g==d?e+=g:"-"==g&&(h=!0);for(var i=0;i<e.length;i++)g=e.substr(i,1),g>="0"&&g<="9"?f+=g:g==d&&(f+=".");return h&&(f="-"+f),!!gformIsNumber(f)&&parseFloat(f)}function gformGetDecimalSeparator(a){var b;switch(a){case"currency":b=new Currency(gf_global.gf_currency_config).currency.decimal_separator;break;case"decimal_comma":b=",";break;default:b="."}return b}function gformIsNumber(a){return!isNaN(parseFloat(a))&&isFinite(a)}function gformIsNumeric(a,b){switch(b){case"decimal_dot":var c=new RegExp("^(-?[0-9]{1,3}(?:,?[0-9]{3})*(?:.[0-9]+)?)$");return c.test(a);case"decimal_comma":var c=new RegExp("^(-?[0-9]{1,3}(?:.?[0-9]{3})*(?:,[0-9]+)?)$");return c.test(a)}return!1}function gformDeleteUploadedFile(a,b,c){var d=jQuery("#field_"+a+"_"+b),e=jQuery(c).parent().index();d.find(".ginput_preview").eq(e).remove(),d.find('input[type="file"],.validation_message,#extensions_message_'+a+"_"+b).removeClass("gform_hidden"),d.find(".ginput_post_image_file").show(),d.find('input[type="text"]').val("");var f=jQuery("#gform_uploaded_files_"+a).val();if(f){var g=jQuery.secureEvalJSON(f);if(g){var h="input_"+b,i=d.find("#gform_multifile_upload_"+a+"_"+b);if(i.length>0){g[h].splice(e,1);var j=i.data("settings"),k=j.gf_vars.max_files;jQuery("#"+j.gf_vars.message_id).html(""),g[h].length<k&&gfMultiFileUploader.toggleDisabled(j,!1)}else g[h]=null;jQuery("#gform_uploaded_files_"+a).val(jQuery.toJSON(g))}}}function gformIsHidden(a){return"none"==a.parents(".gfield").not(".gfield_hidden_product").css("display")}function gformCalculateTotalPrice(a){if(_gformPriceFields[a]){var b=0;_anyProductSelected=!1;for(var c=0;c<_gformPriceFields[a].length;c++)b+=gformCalculateProductPrice(a,_gformPriceFields[a][c]);if(_anyProductSelected){b+=gformGetShippingPrice(a)}window.gform_product_total&&(b=window.gform_product_total(a,b)),b=gform.applyFilters("gform_product_total",b,a);var d=jQuery(".ginput_total_"+a);if(d.length>0){var e=d.next().val(),f=gformFormatMoney(b,!0);e!=b&&d.next().val(b).change(),f!=d.first().text()&&d.html(f)}}}function gformGetShippingPrice(a){var b=jQuery(".gfield_shipping_"+a+' input[type="hidden"], .gfield_shipping_'+a+" select, .gfield_shipping_"+a+" input:checked"),c=0;return 1!=b.length||gformIsHidden(b)||(c=b.attr("type")&&"hidden"==b.attr("type").toLowerCase()?b.val():gformGetPrice(b.val())),gformToNumber(c)}function gformGetFieldId(a){var b=jQuery(a).attr("id"),c=b.split("_");return c.length<=0?0:c[c.length-1]}function gformCalculateProductPrice(a,b){var c="_"+a+"_"+b;jQuery(".gfield_option"+c+", .gfield_shipping_"+a).find("select").each(function(){var b=jQuery(this),c=gformGetPrice(b.val()),d=b.attr("id").split("_")[2];b.children("option").each(function(){var b=jQuery(this),e=gformGetOptionLabel(b,b.val(),c,a,d);b.html(e)}),b.trigger("chosen:updated")}),jQuery(".gfield_option"+c).find(".gfield_checkbox").find("input:checkbox").each(function(){var b=jQuery(this),c=b.attr("id"),d=c.split("_")[2],e=c.replace("choice_","#label_"),f=jQuery(e),g=gformGetOptionLabel(f,b.val(),0,a,d);f.html(g)}),jQuery(".gfield_option"+c+", .gfield_shipping_"+a).find(".gfield_radio").each(function(){var b=0,c=jQuery(this),d=c.attr("id"),e=d.split("_")[2],f=c.find("input:radio:checked").val();f&&(b=gformGetPrice(f)),c.find("input:radio").each(function(){var c=jQuery(this),d=c.attr("id").replace("choice_","#label_"),f=jQuery(d);if(f){var g=gformGetOptionLabel(f,c.val(),b,a,e);f.html(g)}})});var d=gformGetBasePrice(a,b),e=gformGetProductQuantity(a,b);return e>0&&(jQuery(".gfield_option"+c).find("input:checked, select").each(function(){gformIsHidden(jQuery(this))||(d+=gformGetPrice(jQuery(this).val()))}),_anyProductSelected=!0),d*=e,d=Math.round(100*d)/100}function gformGetProductQuantity(a,b){if(!gformIsProductSelected(a,b))return 0;var c,d,e=jQuery("#ginput_quantity_"+a+"_"+b);if(e.length>0)c=e.val();else if(e=jQuery(".gfield_quantity_"+a+"_"+b+" :input"),c=1,e.length>0){c=e.val();var f=e.attr("id"),g=gf_get_input_id_by_html_id(f);d=gf_get_field_number_format(g,a,"value")}return d||(d="currency"),c=gformCleanNumber(c,"","",gformGetDecimalSeparator(d)),c||(c=0),c}function gformIsProductSelected(a,b){var c="_"+a+"_"+b,d=jQuery("#ginput_base_price"+c+", .gfield_donation"+c+' input[type="text"], .gfield_product'+c+" .ginput_amount");return!(!d.val()||gformIsHidden(d))||(d=jQuery(".gfield_product"+c+" select, .gfield_product"+c+" input:checked, .gfield_donation"+c+" select, .gfield_donation"+c+" input:checked"),!(!d.val()||gformIsHidden(d)))}function gformGetBasePrice(a,b){var c="_"+a+"_"+b,d=0,e=jQuery("#ginput_base_price"+c+", .gfield_donation"+c+' input[type="text"], .gfield_product'+c+" .ginput_amount");if(e.length>0)d=e.val(),gformIsHidden(e)&&(d=0);else{e=jQuery(".gfield_product"+c+" select, .gfield_product"+c+" input:checked, .gfield_donation"+c+" select, .gfield_donation"+c+" input:checked");var f=e.val();f&&(f=f.split("|"),d=f.length>1?f[1]:0),gformIsHidden(e)&&(d=0)}return d=new Currency(gf_global.gf_currency_config).toNumber(d),!1===d?0:d}function gformFormatMoney(a,b){return gf_global.gf_currency_config?new Currency(gf_global.gf_currency_config).toMoney(a,b):a}function gformFormatPricingField(a){if(gf_global.gf_currency_config){var b=new Currency(gf_global.gf_currency_config),c=b.toMoney(jQuery(a).val());jQuery(a).val(c)}}function gformToNumber(a){return new Currency(gf_global.gf_currency_config).toNumber(a)}function gformGetPriceDifference(a,b){var c=parseFloat(b)-parseFloat(a);return price=gformFormatMoney(c,!0),c>0&&(price="+"+price),price}function gformGetOptionLabel(a,b,c,d,e){a=jQuery(a);var f=gformGetPrice(b),g=a.attr("price"),h=a.html().replace(/<span(.*)<\/span>/i,"").replace(g,""),i=gformGetPriceDifference(c,f);i=0==gformToNumber(i)?"":" "+i,a.attr("price",i);var j="option"==a[0].tagName.toLowerCase()?" "+i:"<span class='ginput_price'>"+i+"</span>",k=h+j;return window.gform_format_option_label&&(k=gform_format_option_label(k,h,j,c,f,d,e)),k}function gformGetProductIds(a,b){for(var c=jQuery(b).hasClass(a)?jQuery(b).attr("class").split(" "):jQuery(b).parents("."+a).attr("class").split(" "),d=0;d<c.length;d++)if(c[d].substr(0,a.length)==a&&c[d]!=a)return{formId:c[d].split("_")[2],productFieldId:c[d].split("_")[3]};return{formId:0,fieldId:0}}function gformGetPrice(a){var b=a.split("|"),c=new Currency(gf_global.gf_currency_config);return b.length>1&&!1!==c.toNumber(b[1])?c.toNumber(b[1]):0}function gformRegisterPriceField(a){_gformPriceFields[a.formId]||(_gformPriceFields[a.formId]=new Array);for(var b=0;b<_gformPriceFields[a.formId].length;b++)if(_gformPriceFields[a.formId][b]==a.productFieldId)return;_gformPriceFields[a.formId].push(a.productFieldId)}function gformInitPriceFields(){jQuery(".gfield_price").each(function(){gformRegisterPriceField(gformGetProductIds("gfield_price",this)),jQuery(this).on("change",'input[type="text"], input[type="number"], select',function(){var a=gformGetProductIds("gfield_price",this);0==a.formId&&(a=gformGetProductIds("gfield_shipping",this)),jQuery(document).trigger("gform_price_change",[a,this]),gformCalculateTotalPrice(a.formId)}),jQuery(this).on("click",'input[type="radio"], input[type="checkbox"]',function(){var a=gformGetProductIds("gfield_price",this);0==a.formId&&(a=gformGetProductIds("gfield_shipping",this)),jQuery(document).trigger("gform_price_change",[a,this]),gformCalculateTotalPrice(a.formId)})});for(formId in _gformPriceFields)_gformPriceFields.hasOwnProperty(formId)&&gformCalculateTotalPrice(formId)}function gformShowPasswordStrength(a){var b=jQuery("#"+a).val(),c=jQuery("#"+a+"_2").val(),d=gformPasswordStrength(b,c),e=window.gf_text["password_"+d];jQuery("#"+a+"_strength").val(d),jQuery("#"+a+"_strength_indicator").removeClass("blank mismatch short good bad strong").addClass(d).html(e)}function gformPasswordStrength(a,b){var c,d,e=0;return a.length<=0?"blank":a!=b&&b.length>0?"mismatch":a.length<4?"short":(a.match(/[0-9]/)&&(e+=10),a.match(/[a-z]/)&&(e+=26),a.match(/[A-Z]/)&&(e+=26),a.match(/[^a-zA-Z0-9]/)&&(e+=31),c=Math.log(Math.pow(e,a.length)),d=c/Math.LN2,d<40?"bad":d<56?"good":"strong")}function gformAddListItem(a,b){var c=jQuery(a);if(!c.hasClass("gfield_icon_disabled")){var d=c.parents(".gfield_list_group"),e=d.clone(),f=d.parents(".gfield_list_container"),g=e.find(":input:last").attr("tabindex");e.find("input, select, textarea").attr("tabindex",g).not(":checkbox, :radio").val(""),e.find(":checkbox, :radio").prop("checked",!1),e=gform.applyFilters("gform_list_item_pre_add",e,d),d.after(e),gformToggleIcons(f,b),gformAdjustClasses(f),gform.doAction("gform_list_post_item_add",e,f)}}function gformDeleteListItem(a,b){var c=jQuery(a),d=c.parents(".gfield_list_group"),e=d.parents(".gfield_list_container");d.remove(),gformToggleIcons(e,b),gformAdjustClasses(e),gform.doAction("gform_list_post_item_delete",e)}function gformAdjustClasses(a){a.find(".gfield_list_group").each(function(a){var b=jQuery(this),c=(a+1)%2==0?"gfield_list_row_even":"gfield_list_row_odd";b.removeClass("gfield_list_row_odd gfield_list_row_even").addClass(c)})}function gformToggleIcons(a,b){var c=a.find(".gfield_list_group").length,d=a.find(".add_list_item");a.find(".delete_list_item").css("visibility",1==c?"hidden":"visible"),b>0&&c>=b?(d.data("title",a.find(".add_list_item").attr("title")),d.addClass("gfield_icon_disabled").attr("title","")):b>0&&(d.removeClass("gfield_icon_disabled"),d.data("title")&&d.attr("title",d.data("title")))}function gformMatchCard(a){var b=gformFindCardType(jQuery("#"+a).val()),c=jQuery("#"+a).parents(".gfield").find(".gform_card_icon_container");b?(jQuery(c).find(".gform_card_icon").removeClass("gform_card_icon_selected").addClass("gform_card_icon_inactive"),jQuery(c).find(".gform_card_icon_"+b).removeClass("gform_card_icon_inactive").addClass("gform_card_icon_selected")):jQuery(c).find(".gform_card_icon").removeClass("gform_card_icon_selected gform_card_icon_inactive")}function gformFindCardType(a){if(a.length<4)return!1;var b=window.gf_cc_rules,c=new Array;for(type in b)if(b.hasOwnProperty(type))for(i in b[type])if(b[type].hasOwnProperty(i)&&0===b[type][i].indexOf(a.substring(0,b[type][i].length))){c[c.length]=type;break}return 1==c.length&&c[0].toLowerCase()}function gformToggleCreditCard(){jQuery("#gform_payment_method_creditcard").is(":checked")?jQuery(".gform_card_fields_container").slideDown():jQuery(".gform_card_fields_container").slideUp()}function gformInitChosenFields(a,b){return jQuery(a).each(function(){var a=jQuery(this);if("rtl"==jQuery("html").attr("dir")&&a.addClass("chosen-rtl chzn-rtl"),a.is(":visible")&&0==a.siblings(".chosen-container").length){var c=gform.applyFilters("gform_chosen_options",{no_results_text:b},a);a.chosen(c)}})}function gformInitCurrencyFormatFields(a){jQuery(a).each(function(){jQuery(this).val(gformFormatMoney(jQuery(this).val()))}).change(function(a){jQuery(this).val(gformFormatMoney(jQuery(this).val()))})}function gformFormatNumber(a,b,c,d){if(void 0===c)if(window.gf_global){var e=new Currency(gf_global.gf_currency_config);c=e.currency.decimal_separator}else c=".";if(void 0===d)if(window.gf_global){var e=new Currency(gf_global.gf_currency_config);d=e.currency.thousand_separator}else d=",";var e=new Currency;return e.numberFormat(a,b,c,d,!1)}function gformToNumber(a){return new Currency(gf_global.gf_currency_config).toNumber(a)}function getMatchGroups(a,b){for(var c=new Array;b.test(a);){var d=c.length;c[d]=b.exec(a),a=a.replace(""+c[d][0],"")}return c}function gf_get_field_number_format(a,b,c){var d=rgars(window,"gf_global/number_formats/{0}/{1}".format(b,a)),e=!1;return""===d?e:e=void 0===c?!1!==d.price?d.price:d.value:d[c]}function renderRecaptcha(){jQuery(".ginput_recaptcha").each(function(){var a=jQuery(this),b={sitekey:a.data("sitekey"),theme:a.data("theme")};a.is(":empty")&&(a.data("stoken")&&(b.stoken=a.data("stoken")),grecaptcha.render(this.id,b),gform.doAction("gform_post_recaptcha_render",a))})}function gformValidateFileSize(a,b){if(jQuery(a).closest("div").siblings(".validation_message").length>0)var c=jQuery(a).closest("div").siblings(".validation_message");else var c=jQuery(a).siblings(".validation_message");if(window.FileReader&&window.File&&window.FileList&&window.Blob){var d=a.files[0];if(d.size>b){c.html(d.name+" - "+gform_gravityforms.strings.file_exceeds_limit);var e=jQuery(a);e.replaceWith(e.val("").clone(!0))}else c.html("")}}function gformInitSpinner(a,b){jQuery("#gform_"+a).submit(function(){gformAddSpinner(a,b)})}function gformAddSpinner(a,b){if(void 0!==b&&b||(b=gform.applyFilters("gform_spinner_url",gf_global.spinnerUrl,a)),0==jQuery("#gform_ajax_spinner_"+a).length){gform.applyFilters("gform_spinner_target_elem",jQuery("#gform_submit_button_"+a+", #gform_wrapper_"+a+" .gform_next_button, #gform_send_resume_link_button_"+a),a).after('<img id="gform_ajax_spinner_'+a+'"  class="gform_ajax_spinner" src="'+b+'" alt="" />')}}function gf_raw_input_change(a,b){clearTimeout(__gf_keyup_timeout);var c=jQuery(b),d=c.attr("id"),e=gf_get_input_id_by_html_id(d),f=gf_get_form_id_by_html_id(d);if(e){var g=c.is(":checkbox")||c.is(":radio")||c.is("select"),h=!g||c.is("textarea");("keyup"!=a.type||h)&&("change"!=a.type||g||h)&&("keyup"==a.type?__gf_keyup_timeout=setTimeout(function(){gf_input_change(this,f,e)},300):gf_input_change(this,f,e))}}function gf_get_input_id_by_html_id(a){var b=gf_get_ids_by_html_id(a),c=b[2];return b[3]&&(c+="."+b[3]),c}function gf_get_form_id_by_html_id(a){return gf_get_ids_by_html_id(a)[1]}function gf_get_ids_by_html_id(a){return!!a&&a.split("_")}function gf_input_change(a,b,c){gform.doAction("gform_input_change",a,b,c)}function gformExtractFieldId(a){var b=parseInt(a.toString().split(".")[0]);return b||a}function gformExtractInputIndex(a){var b=parseInt(a.toString().split(".")[1]);return b||!1}function rgars(a,b){for(var c=b.split("index.html"),d=a,e=0;e<c.length;e++)d=rgar(d,c[e]);return d}function rgar(a,b){return void 0!==a[b]?a[b]:""}void 0===jQuery.fn.prop&&(jQuery.fn.prop=jQuery.fn.attr),jQuery(document).ready(function(){jQuery(document).bind("gform_post_render",gformBindFormatPricingFields)});var _gformPriceFields=new Array,_anyProductSelected,GFCalc=function(formId,formulaFields){this.patt=/{[^{]*?:(\d+(\.\d+)?)(:(.*?))?}/i,this.exprPatt=/^[0-9 -/*\(\)]+$/i,this.isCalculating={},this.init=function(a,b){var c=this;jQuery(document).bind("gform_post_conditional_logic",function(){for(var d=0;d<b.length;d++){var e=jQuery.extend({},b[d]);c.runCalc(e,a)}});for(var d=0;d<b.length;d++){var e=jQuery.extend({},b[d]);this.runCalc(e,a),this.bindCalcEvents(e,a)}},this.runCalc=function(formulaField,formId){var calcObj=this,field=jQuery("#field_"+formId+"_"+formulaField.field_id),formulaInput=jQuery("#input_"+formId+"_"+formulaField.field_id),previous_val=formulaInput.val(),formula=gform.applyFilters("gform_calculation_formula",formulaField.formula,formulaField,formId,calcObj),expr=calcObj.replaceFieldTags(formId,formula,formulaField).replace(/(\r\n|\n|\r)/gm,""),result="";if(calcObj.exprPatt.test(expr))try{result=eval(expr)}catch(a){}isFinite(result)||(result=0),window.gform_calculation_result&&(result=window.gform_calculation_result(result,formulaField,formId,calcObj),window.console&&console.log('"gform_calculation_result" function is deprecated since version 1.8! Use "gform_calculation_result" JS hook instead.')),result=gform.applyFilters("gform_calculation_result",result,formulaField,formId,calcObj);var formattedResult=gform.applyFilters("gform_calculation_format_result",!1,result,formulaField,formId,calcObj),numberFormat=gf_get_field_number_format(formulaField.field_id,formId);if(!1!==formattedResult)result=formattedResult;else if(field.hasClass("gfield_price")||"currency"==numberFormat)result=gformFormatMoney(result||0,!0);else{var decimalSeparator=".",thousandSeparator=",";"decimal_comma"==numberFormat&&(decimalSeparator=",",thousandSeparator="."),result=gformFormatNumber(result,gformIsNumber(formulaField.rounding)?formulaField.rounding:-1,decimalSeparator,thousandSeparator)}result!=previous_val&&(field.hasClass("gfield_price")?(formulaInput.text(result),jQuery("#ginput_base_price_"+formId+"_"+formulaField.field_id).val(result).trigger("change"),gformCalculateTotalPrice(formId)):formulaInput.val(result).trigger("change"))},this.bindCalcEvents=function(a,b){var c=this,d=a.field_id,e=getMatchGroups(a.formula,this.patt);c.isCalculating[d]=!1;for(var f in e)if(e.hasOwnProperty(f)){var g=e[f][1],h=parseInt(g),i=jQuery("#field_"+b+"_"+h).find('input[name="input_'+g+'"], select[name="input_'+g+'"]');"checkbox"==i.prop("type")||"radio"==i.prop("type")?jQuery(i).click(function(){c.bindCalcEvent(g,a,b,0)}):i.is("select")||"hidden"==i.prop("type")?jQuery(i).change(function(){c.bindCalcEvent(g,a,b,0)}):jQuery(i).keydown(function(){c.bindCalcEvent(g,a,b)}).change(function(){c.bindCalcEvent(g,a,b,0)}),gform.doAction("gform_post_calculation_events",e[f],a,b,c)}},this.bindCalcEvent=function(a,b,c,d){var e=this,f=b.field_id;d=void 0==d?345:d,e.isCalculating[f][a]&&clearTimeout(e.isCalculating[f][a]),e.isCalculating[f][a]=window.setTimeout(function(){e.runCalc(b,c)},d)},this.replaceFieldTags=function(a,b,c){var d=getMatchGroups(b,this.patt);for(i in d)if(d.hasOwnProperty(i)){var e=d[i][1],f=parseInt(e),g=(d[i][3],0),h=jQuery("#field_"+a+"_"+f).find('input[name="input_'+e+'"], select[name="input_'+e+'"]');(h.length>1||"checkbox"==h.prop("type"))&&(h=h.filter(":checked"));var j=!window.gf_check_field_rule||"show"==gf_check_field_rule(a,f,!0,"");if(h.length>0&&j){var k=h.val();k=k.split("|"),g=k.length>1?k[1]:h.val()}var l=gf_get_field_number_format(f,a);l||(l=gf_get_field_number_format(c.field_id,a));var m=gformGetDecimalSeparator(l);g=gform.applyFilters("gform_merge_tag_value_pre_calculation",g,d[i],j,c,a),g=gformCleanNumber(g,"","",m),g||(g=0),b=b.replace(d[i][0],g)}return b},this.init(formId,formulaFields)},gform={hooks:{action:{},filter:{}},addAction:function(a,b,c,d){gform.addHook("action",a,b,c,d)},addFilter:function(a,b,c,d){gform.addHook("filter",a,b,c,d)},doAction:function(a){gform.doHook("action",a,arguments)},applyFilters:function(a){return gform.doHook("filter",a,arguments)},removeAction:function(a,b){gform.removeHook("action",a,b)},removeFilter:function(a,b,c){gform.removeHook("filter",a,b,c)},addHook:function(a,b,c,d,e){void 0==gform.hooks[a][b]&&(gform.hooks[a][b]=[]);var f=gform.hooks[a][b];void 0==e&&(e=b+"_"+f.length),void 0==d&&(d=10),gform.hooks[a][b].push({tag:e,callable:c,priority:d})},doHook:function(a,b,c){if(c=Array.prototype.slice.call(c,1),void 0!=gform.hooks[a][b]){var d,e=gform.hooks[a][b];e.sort(function(a,b){return a.priority-b.priority});for(var f=0;f<e.length;f++)d=e[f].callable,"function"!=typeof d&&(d=window[d]),"action"==a?d.apply(null,c):c[0]=d.apply(null,c)}if("filter"==a)return c[0]},removeHook:function(a,b,c,d){if(void 0!=gform.hooks[a][b])for(var e=gform.hooks[a][b],f=e.length-1;f>=0;f--)void 0!=d&&d!=e[f].tag||void 0!=c&&c!=e[f].priority||e.splice(f,1)}};!function(a,b){function c(c){function g(a,c){b("#"+a).prepend("<li>"+c+"</li>")}function h(){var a,c="#gform_uploaded_files_"+q,d=b(c);return a=d.val(),a=void 0===a||""===a?{}:b.parseJSON(a)}function i(a){var b=h(),c=m(a);return void 0===b[c]&&(b[c]=[]),b[c]}function j(a){return i(a).length}function k(a,b){var c=i(a);c.unshift(b),l(a,c)}function l(a,c){var d=h(),e=b("#gform_uploaded_files_"+q);d[m(a)]=c,e.val(b.toJSON(d))}function m(a){return"input_"+a}function n(a){a.preventDefault()}var o=b(c).data("settings"),p=new plupload.Uploader(o);q=p.settings.multipart_params.form_id,a.uploaders[o.container]=p;var q,r;p.bind("Init",function(c,d){c.features.dragdrop||b(".gform_drop_instructions").hide();var e=c.settings.multipart_params.field_id,f=parseInt(c.settings.gf_vars.max_files),g=j(e);f>0&&g>=f&&a.toggleDisabled(c.settings,!0)}),a.toggleDisabled=function(a,c){b("string"==typeof a.browse_button?"#"+a.browse_button:a.browse_button).prop("disabled",c)},p.init(),p.bind("FilesAdded",function(c,f){var h,i=parseInt(c.settings.gf_vars.max_files),k=c.settings.multipart_params.field_id,l=j(k),m=c.settings.gf_vars.disallowed_extensions;if(i>0&&l>=i)return void b.each(f,function(a,b){c.removeFile(b)});b.each(f,function(a,d){if(h=d.name.split(".").pop(),b.inArray(h,m)>-1)return g(c.settings.gf_vars.message_id,d.name+" - "+e.illegal_extension),void c.removeFile(d);if(d.status==plupload.FAILED||i>0&&l>=i)return void c.removeFile(d);var f=void 0!==d.size?plupload.formatSize(d.size):e.in_progress,j='<div id="'+d.id+'" class="ginput_preview">'+d.name+" ("+f+') <b></b> <a href="javascript:void(0)" title="'+e.cancel_upload+"\" onclick='$this=jQuery(this); var uploader = gfMultiFileUploader.uploaders."+c.settings.container+';uploader.stop();uploader.removeFile(uploader.getFile("'+d.id+'"));$this.after("'+e.cancelled+"\"); uploader.start();$this.remove();' onkeypress='$this=jQuery(this); var uploader = gfMultiFileUploader.uploaders."+c.settings.container+';uploader.stop();uploader.removeFile(uploader.getFile("'+d.id+'"));$this.after("'+e.cancelled+"\"); uploader.start();$this.remove();'>"+e.cancel+"</a></div>";b("#"+c.settings.filelist).prepend(j),l++}),c.refresh();var n="form#gform_"+q,o="input:hidden[name='gform_unique_id']",p=n+" "+o,s=b(p);0==s.length&&(s=b(o)),r=s.val(),""===r&&(r=d(),s.val(r)),i>0&&l>=i&&(a.toggleDisabled(c.settings,!0),g(c.settings.gf_vars.message_id,e.max_reached)),c.settings.multipart_params.gform_unique_id=r,c.start()}),p.bind("UploadProgress",function(a,c){var d=c.percent+"%";b("#"+c.id+" b").html(d)}),p.bind("Error",function(a,c){if(c.code===plupload.FILE_EXTENSION_ERROR){var d=void 0!==a.settings.filters.mime_types?a.settings.filters.mime_types[0].extensions:a.settings.filters[0].extensions;g(a.settings.gf_vars.message_id,c.file.name+" - "+e.invalid_file_extension+" "+d)}else if(c.code===plupload.FILE_SIZE_ERROR)g(a.settings.gf_vars.message_id,c.file.name+" - "+e.file_exceeds_limit);else{var f="<li>Error: "+c.code+", Message: "+c.message+(c.file?", File: "+c.file.name:"")+"</li>";g(a.settings.gf_vars.message_id,f)}b("#"+c.file.id).html(""),a.refresh()}),p.bind("FileUploaded",function(a,c,d){var h=b.secureEvalJSON(d.response);if("error"==h.status)return g(a.settings.gf_vars.message_id,c.name+" - "+h.error.message),void b("#"+c.id).html("");var i="<strong>"+c.name+"</strong>",j=a.settings.multipart_params.form_id,l=a.settings.multipart_params.field_id;i="<img class='gform_delete' src='"+f+"/delete.png' onclick='gformDeleteUploadedFile("+j+","+l+", this);' onkeypress='gformDeleteUploadedFile("+j+","+l+", this);' alt='"+e.delete_file+"' title='"+e.delete_file+"' /> "+i,i=gform.applyFilters("gform_file_upload_markup",i,c,a,e,f),b("#"+c.id).html(i);var m=a.settings.multipart_params.field_id;100==c.percent&&(h.status&&"ok"==h.status?k(m,h.data):g(a.settings.gf_vars.message_id,e.unknown_error+": "+c.name))}),b("#"+o.drop_element).on({dragenter:n,dragover:n})}function d(){return"xxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:3&b|8).toString(16)})}a.uploaders={};var e="undefined"!=typeof gform_gravityforms?gform_gravityforms.strings:{},f="undefined"!=typeof gform_gravityforms?gform_gravityforms.vars.images_url:"";b(document).bind("gform_post_render",function(d,f){b("form#gform_"+f+" .gform_fileupload_multifile").each(function(){c(this)});var g=b("form#gform_"+f);g.length>0&&g.submit(function(){var c=!1;if(b.each(a.uploaders,function(a,b){if(b.total.queued>0)return c=!0,!1}),c)return alert(e.currently_uploading),window["gf_submitting_"+f]=!1,b("#gform_ajax_spinner_"+f).remove(),!1})}),b(document).bind("gform_post_conditional_logic",function(c,d,e,f){f||b.each(a.uploaders,function(a,b){b.refresh()})}),b(document).ready(function(){"undefined"!=typeof adminpage&&"toplevel_page_gf_edit_forms"===adminpage||"undefined"==typeof plupload?b(".gform_button_select_files").prop("disabled",!0):"undefined"!=typeof adminpage&&adminpage.indexOf("_page_gf_entries")>-1&&b(".gform_fileupload_multifile").each(function(){c(this)})}),a.setup=function(a){c(a)}}(window.gfMultiFileUploader=window.gfMultiFileUploader||{},jQuery);var __gf_keyup_timeout;jQuery(document).on("change keyup",".gfield_trigger_change input, .gfield_trigger_change select, .gfield_trigger_change textarea",function(a){gf_raw_input_change(a,this)}),window.rgars,window.rgar,String.prototype.format=function(){var a=arguments;return this.replace(/{(\d+)}/g,function(b,c){return void 0!==a[c]?a[c]:b})};
;/* Placeholders.js v3.0.2 */
(function(t){"use strict";function e(t,e,r){return t.addEventListener?t.addEventListener(e,r,!1):t.attachEvent?t.attachEvent("on"+e,r):void 0}function r(t,e){var r,n;for(r=0,n=t.length;n>r;r++)if(t[r]===e)return!0;return!1}function n(t,e){var r;t.createTextRange?(r=t.createTextRange(),r.move("character",e),r.select()):t.selectionStart&&(t.focus(),t.setSelectionRange(e,e))}function a(t,e){try{return t.type=e,!0}catch(r){return!1}}t.Placeholders={Utils:{addEventListener:e,inArray:r,moveCaret:n,changeType:a}}})(this),function(t){"use strict";function e(){}function r(){try{return document.activeElement}catch(t){}}function n(t,e){var r,n,a=!!e&&t.value!==e,u=t.value===t.getAttribute(V);return(a||u)&&"true"===t.getAttribute(P)?(t.removeAttribute(P),t.value=t.value.replace(t.getAttribute(V),""),t.className=t.className.replace(R,""),n=t.getAttribute(z),parseInt(n,10)>=0&&(t.setAttribute("maxLength",n),t.removeAttribute(z)),r=t.getAttribute(D),r&&(t.type=r),!0):!1}function a(t){var e,r,n=t.getAttribute(V);return""===t.value&&n?(t.setAttribute(P,"true"),t.value=n,t.className+=" "+I,r=t.getAttribute(z),r||(t.setAttribute(z,t.maxLength),t.removeAttribute("maxLength")),e=t.getAttribute(D),e?t.type="text":"password"===t.type&&K.changeType(t,"text")&&t.setAttribute(D,"password"),!0):!1}function u(t,e){var r,n,a,u,i,l,o;if(t&&t.getAttribute(V))e(t);else for(a=t?t.getElementsByTagName("input"):f,u=t?t.getElementsByTagName("textarea"):h,r=a?a.length:0,n=u?u.length:0,o=0,l=r+n;l>o;o++)i=r>o?a[o]:u[o-r],e(i)}function i(t){u(t,n)}function l(t){u(t,a)}function o(t){return function(){b&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(P)?K.moveCaret(t,0):n(t)}}function c(t){return function(){a(t)}}function s(t){return function(e){return A=t.value,"true"===t.getAttribute(P)&&A===t.getAttribute(V)&&K.inArray(C,e.keyCode)?(e.preventDefault&&e.preventDefault(),!1):void 0}}function d(t){return function(){n(t,A),""===t.value&&(t.blur(),K.moveCaret(t,0))}}function v(t){return function(){t===r()&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(P)&&K.moveCaret(t,0)}}function g(t){return function(){i(t)}}function p(t){t.form&&(T=t.form,"string"==typeof T&&(T=document.getElementById(T)),T.getAttribute(U)||(K.addEventListener(T,"submit",g(T)),T.setAttribute(U,"true"))),K.addEventListener(t,"focus",o(t)),K.addEventListener(t,"blur",c(t)),b&&(K.addEventListener(t,"keydown",s(t)),K.addEventListener(t,"keyup",d(t)),K.addEventListener(t,"click",v(t))),t.setAttribute(j,"true"),t.setAttribute(V,x),(b||t!==r())&&a(t)}var f,h,b,m,A,y,E,x,L,T,S,N,w,B=["text","search","url","tel","email","password","number","textarea"],C=[27,33,34,35,36,37,38,39,40,8,46],k="#ccc",I="placeholdersjs",R=RegExp("(?:^|\\s)"+I+"(?!\\S)"),V="data-placeholder-value",P="data-placeholder-active",D="data-placeholder-type",U="data-placeholder-submit",j="data-placeholder-bound",q="data-placeholder-focus",Q="data-placeholder-live",z="data-placeholder-maxlength",F=document.createElement("input"),G=document.getElementsByTagName("head")[0],H=document.documentElement,J=t.Placeholders,K=J.Utils;if(J.nativeSupport=void 0!==F.placeholder,!J.nativeSupport){for(f=document.getElementsByTagName("input"),h=document.getElementsByTagName("textarea"),b="false"===H.getAttribute(q),m="false"!==H.getAttribute(Q),y=document.createElement("style"),y.type="text/css",E=document.createTextNode("."+I+" { color:"+k+"; }"),y.styleSheet?y.styleSheet.cssText=E.nodeValue:y.appendChild(E),G.insertBefore(y,G.firstChild),w=0,N=f.length+h.length;N>w;w++)S=f.length>w?f[w]:h[w-f.length],x=S.attributes.placeholder,x&&(x=x.nodeValue,x&&K.inArray(B,S.type)&&p(S));L=setInterval(function(){for(w=0,N=f.length+h.length;N>w;w++)S=f.length>w?f[w]:h[w-f.length],x=S.attributes.placeholder,x?(x=x.nodeValue,x&&K.inArray(B,S.type)&&(S.getAttribute(j)||p(S),(x!==S.getAttribute(V)||"password"===S.type&&!S.getAttribute(D))&&("password"===S.type&&!S.getAttribute(D)&&K.changeType(S,"text")&&S.setAttribute(D,"password"),S.value===S.getAttribute(V)&&(S.value=x),S.setAttribute(V,x)))):S.getAttribute(P)&&(n(S),S.removeAttribute(V));m||clearInterval(L)},100)}K.addEventListener(t,"beforeunload",function(){J.disable()}),J.disable=J.nativeSupport?e:i,J.enable=J.nativeSupport?e:l}(this),function(t){"use strict";var e=t.fn.val,r=t.fn.prop;Placeholders.nativeSupport||(t.fn.val=function(t){var r=e.apply(this,arguments),n=this.eq(0).data("placeholder-value");return void 0===t&&this.eq(0).data("placeholder-active")&&r===n?"":r},t.fn.prop=function(t,e){return void 0===e&&this.eq(0).data("placeholder-active")&&"value"===t?"":r.apply(this,arguments)})}(jQuery);
