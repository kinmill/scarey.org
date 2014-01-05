window.scarey=window.scarey||{};scarey.medium="screen and (min-width: 50em)";scarey.large="screen and (min-width: 75em)";scarey.debounce=function(e,t,n){var r,i=n||500;$(window).on(e,function(){r&&clearTimeout(r);r=setTimeout(t,i)})};scarey.fastclick={init:function(){if(matchMedia(scarey.medium).matches)return;scarey.fastclick.go()},go:function(){$.getScript("/assets/js/libs/fastClick.js",function(){FastClick.attach(document.body)})}};scarey.scroll=function(e){$.scrollTo($(e),1e3,{easing:"easeInOutExpo",axis:"y",onAfter:function(){history.pushState(null,null,e)}})};scarey.nav=function(){var e=$("#nav"),t=$("#mobile-flyout");$(".more-nav").click(function(){t.toggleClass("nav--active");$(".main-content").toggleClass("dark");event.preventDefault()})};scarey.filter={init:function(){scarey.filter.toggle();matchMedia(scarey.medium).matches?scarey.carousel():scarey.swipe()},toggle:function(){var e=$(".filter"),t=$(".filter__toggle"),n=$(".filter__close"),r=$(".filter__slider-wrap a"),i=location.hash,s;t.on("click",function(){e.toggleClass("showing")});n.on("click",function(){e.removeClass("showing")});r.on("click",function(t){s=$(this).attr("href");t.preventDefault();e.removeClass("showing");setTimeout(function(){scarey.scroll(s)},300)})}};scarey.carousel=function(){function g(){b();w();E();N()}function y(){$(u).each(function(){$(this).off("click");$(this).remove()});u.length=0;o.off("click");s.off("click");e.css("width","");$(window).off("resize");T("reset");matchMedia(scarey.medium).matches?g():scarey.swipe()}function b(){matchMedia(scarey.large).matches?l=m.itemsPerSlideBig:matchMedia(scarey.medium).matches?l=m.itemsPerSlideMed:l=m.itemsPerSlideSmall}function w(){var e;e=i/l;for(v=0;v<e;v++)f.append("<a class='bullet'></a>");$("#position a").each(function(){var e=$(this);u.push(e)});a=0;S(0)}function E(){if(i<=l){c=r*i;$(".filter__controls").hide();$(u).each(function(){$(this).hide()})}else c=r*l;e.css("width",c);t.css("width",r*i)}function S(e){a+=e;$(u).each(function(){$(this).removeClass("on")});$(u[a]).addClass("on")}function x(e){return e.substr(7,e.length-8).split(", ")}function T(e,n,s,o){p=parseInt(x(t.css("transform"))[4],10);e==="forward"?h=p-c*s:h=p+c*s;d=e==="forward"&&Math.abs(p)+c===r*i||e==="backward"&&p===0;if(d)return;if(e==="reset")t.css({"-webkit-transform":"translate3d(0, 0, 0)","-moz-transform":"translate3d(0,0,0)","-o-transform":"translate3d(0,0,0)","-ms-transform":"translate3d(0,0,0)",transform:"translate3d(0,0,0)"});else if(Modernizr.csstransforms3d){t.css({"-webkit-transform":"translate3d("+h+"px, 0, 0)","-moz-transform":"translate3d("+h+"px,0,0)","-o-transform":"translate3d("+h+"px,0,0)","-ms-transform":"translate3d("+h+"px,0,0)",transform:"translate3d("+h+"px,0,0)"});o(n)}else{t.css({"-webkit-transform":"left:"+h+"px)","-moz-transform":"left:"+h+"px)","-o-transform":"left:"+h+"px)","-ms-transform":"left:"+h+"px)",transform:"left:"+h+"px)"});o(n)}}function N(){o.on("click",function(){T("forward",1,1,S)});s.on("click",function(){T("backward",-1,1,S)});$(u).each(function(e){$(this).on("click",function(){var t=e-a,n=Math.abs(t);if(e===a)return;e>a?T("forward",t,n,S):T("backward",t,n,S)})});scarey.debounce("resize",y,500)}var e=$(".filter__slider"),t=$(".filter__slider-wrap"),n=$(".filter__slider-wrap li"),r=n.innerWidth(),i=n.length,s=$(".prev"),o=$(".next"),u=[],a,f=$("#position"),l,c,h,p,d,v,m={itemsPerSlideBig:4,itemsPerSlideMed:2,itemsPerSlideSmall:1};g()};scarey.swipe=function(){var e=$("#slider li"),t=e.length,n,r=[],i=$("#position"),s;$(e).each(function(){i.append("<a class='bullet'></a>")});$("#position a ").each(function(){var e=$(this);r.push(e)});$("#position a:first-child").addClass("on");$(r).each(function(e){$(this).on("click",function(){mySwipe.slide(e,200)})});window.mySwipe=$("#slider").Swipe({continuous:!1,callback:function(e){var t=r.length;while(t--)r[t].removeClass("on");r[e].addClass("on")}}).data("Swipe")};scarey.stickyNav=function(){$(document).on("scroll",function(){var e=$(document).scrollTop();e>=500?$("#nav").hasClass("sticky")||$("#nav").addClass("sticky").css({top:"-300px"}).stop().animate({top:0},500):$("#nav").removeClass("sticky").removeAttr("style")})};scarey.history=function(e,t){var n=e.History,r=e.jQuery,i=e.document;if(!n.enabled)return!1;r(function(){var t=".wrap",s=r(t).filter(":first"),o=s.get(0),u=r(e),a=r(i.body),f=n.getRootUrl();s.length===0&&(s=a);r.expr[":"].internal=function(e){var t=r(e),n=t.attr("href")||"",i;i=n.substring(0,f.length)===f||n.indexOf(":")===-1;return i};var l=function(e){var t=String(e).replace(/<\!DOCTYPE[^>]*>/i,"").replace(/<(html|head|body|title|meta|script)([\s\>])/gi,'<div class="document-$1"$2').replace(/<\/(html|head|body|title|meta|script)\>/gi,"</div>");return t};r.fn.ajaxify=function(){var e=r(this);e.find(".page-nav a").click(function(e){var t=r(this),i=t.attr("href"),s=t.attr("title")||null;if(e.which===2||e.metaKey)return!0;n.pushState(null,s,i);e.preventDefault();return!1});return e};a.ajaxify();u.bind("statechange",function(){function c(){r.ajax({url:a,success:function(n){var u=r(l(n)),f=u.find(".document-body:first"),c=f.find(t).filter(":first"),h,p;p=c.find(".document-script");p.length&&p.detach();h=c.html()||u.html();if(!h){i.location.href=a;return!1}s.html(h).ajaxify();scarey.nav();scarey.filter.init();scarey.flipper();scarey.photoGrid();i.title=u.find(".document-title:first").text();try{i.getElementsByTagName("title")[0].innerHTML=i.title.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(d){}p.each(function(){var e=r(this),t=e.text(),n=e.attr("src"),s=i.createElement("script");if(n){s.src=n;o.appendChild(s)}else{s.appendChild(i.createTextNode(t));o.appendChild(s)}});r(".main-content").addClass("slide-fade-from-left");typeof e._gaq!="undefined"&&e._gaq.push(["_trackPageview",relativeUrl])},error:function(e){i.location.href=a;return!1}})}var u=n.getState(),a=u.url,f;r(".main-content").addClass("slide-fade-to-right");setTimeout(c,300)})})}(window);scarey.colorbox={init:function(){if(!matchMedia(scarey.medium).matches)return;$.getScript("/assets/js/libs/colorbox.js",function(){scarey.colorbox.go()})},go:function(){$(".colorbox-container a").colorbox({rel:"group",scalePhotos:!0,maxHeight:"900px",speed:200,opacity:".7"})}};scarey.flipper=function(){var e=$(".flipper-wrap");e.on("click",function(){$(this).toggleClass("flipper-wrap--flipped")})};scarey.photoset=function(){if(!$(".scarey-photoset"))return;$(".scarey-photoset").collagePlus({fadeSpeed:200,effect:"photoset-transition",direction:"vertical"});scarey.debounce("resize",scarey.photoset,500)};scarey.loadMore=function(){var e=$("#load-more"),t=1,n;e.on("click",function(){$(this).addClass("loading");t++;$.ajax({url:"/page/"+t,dataType:"html",success:function(t){e.removeClass("loading");var n=$(t).find(".post");n.addClass("slide-fade-from-bottom");$(n).insertBefore(e);setTimeout(scarey.photoset,300)},error:function(){e.removeClass("loading");e.attr("disabled","disabled");$("<p class='center gamma'>No more posts!</p>").insertBefore(e)}})})};scarey.visitorCheck=function(){var e=$("body"),t=$("#slide-from-left-1"),n=$("#slide-from-left-2"),r=$("#slide-from-right"),i=$("#slide-from-bottom"),s=$("#slide-from-bottom-2");if("localStorage"in window&&window.localStorage!==null)if(!localStorage.getItem("returning_visitor")==1){t.addClass("slide-fade-from-left");n.addClass("slide-fade-from-left");r.addClass("slide-fade-from-right");i.addClass("slide-fade-from-bottom");s.addClass("slide-fade-from-bottom");localStorage.setItem("returning_visitor",!0)}else{t.css("opacity",1);n.css("opacity",1);r.css("opacity",1);i.css("opacity",1);s.css("opacity",1)}};scarey.photoGrid=function(){function s(){o();u()}function o(){matchMedia(scarey.large).matches?n=18:matchMedia(scarey.medium).matches?n=12:n=6}function u(){e.removeClass("grid--loaded");e.addClass("grid--loading");var s=$.ajax({url:"/assets/php/instagram.php",type:"POST",data:{count:n,max_id:r},dataType:"json"});s.always(function(){e.removeClass("grid--loading")});s.done(function(s){e.removeClass("grid--loading");e.addClass("grid--loaded");t.prop("disabled",!1);t.css("opacity",1);var o=JSON.parse(s),u=[],f;for(f=0;f<n;f++){var l=o.data[f].images,c=o.data[f].caption?o.data[f].caption.text:"";i.push(l.thumbnail.url);r=o.pagination.next_max_id;a(l.thumbnail.url,l.standard_resolution.url,c)}scarey.colorbox.init()});s.fail(function(t,n){console.log("request failed :"+n);e.append("<p>There was an error requesting the images from Instagram</p>")})}function a(t,n,r){e.append('<a title="'+r+'" href="'+n+'"><img src="'+t+'"></a>')}if(!$("#photo-grid"))return;var e=$("#photo-grid"),t=$("#load-more--instagram"),n=0,r="",i=[];t.on("click",function(){u()});s()};$(document).ready(function(){scarey.nav();$("body").hasClass("albums")&&scarey.filter.init();scarey.colorbox.init();scarey.fastclick.init();scarey.flipper();scarey.loadMore();scarey.visitorCheck();scarey.photoGrid()});$(window).load(function(){scarey.photoset()});