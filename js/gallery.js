$(function(){function s(){google.maps.visualRefresh=true;var e=t.getCenter();google.maps.event.addDomListener(window,"resize",function(){t.setCenter(e)})}function o(e,r){if(n!=null){n.setMap(null);n=null}n=new google.maps.Marker({position:new google.maps.LatLng(e,r),animation:google.maps.Animation.DROP,title:"Hello World!"});u(e,r);n.setMap(t)}function u(e,n){var r=new google.maps.LatLng(e,n);t.panTo(r);t.setZoom(15)}google.maps.event.addDomListener(window,"load",s);var e={center:new google.maps.LatLng(28.613434,77.231741),zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP};var t=new google.maps.Map(document.getElementById("map-canvas"),e);var n=null;var r=1;var i;$.fn.imagesLoaded=function(e){function s(){e.call(r,t)}function o(){if(--n<=0&&this.src!==i){setTimeout(s);t.off("load error",o)}}var t=this.find("img"),n=t.length,r=this,i="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";if(!n){s()}t.on("load error",o).each(function(){if(this.complete||this.complete===undefined){var e=this.src;this.src=i;this.src=e}});return this};var a=$(".rg-gallery");$esCarousel=a.find("div.gall_1"),$items=$esCarousel.find("ul > li"),itemsCount=$items.length;Gallery=function(){var e=0,t="carousel",n=false,s=function(){$items.add('<img src="images/ajax-loader.gif"/><img src="images/black.png"/>').imagesLoaded(function(){function t(){clearInterval(i);i=self.setInterval(function(){n()},1e4)}function n(){if(r==0){p("right")}else{}}h();d($items.eq(e));i=self.setInterval(function(){n()},1e4);$(".es-carousel li").click(t);$(".slide_next").click(t);$(".slide_prev").click(t);$(document).on("keyup",function(e){if(e.keyCode==39)t();else if(e.keyCode==37)t()});var s=$(".rg-image-wrapper").css("width");var o=parseInt(s)*450/880;$(".rg-image").css({height:o})});if(t==="carousel")l();$(".header_explore").click(function(){var e=$(".header_explore").index(this);u(e);$(".slide_play").css({"background-position":10+"px "+ -176+"px"})});$(".section_rule").click(function(){var e=$(".section_rule").index(this);u(e);$(".slide_play").css({"background-position":10+"px "+ -176+"px"})});$(".info_lightbox").click(function(e){if($(e.target).closest(".lightbox_content").length!=0){}else{f()}});$(".back_timeline").click(function(){f()})},u=function(t){r=0;t=t+1;$esCarousel.hide().elastislide({});$esCarousel=a.find("div.gall_"+t),$items=$esCarousel.find("ul > li"),itemsCount=$items.length;$esCarousel.show().elastislide({imageW:65,onClick:function(t){if(n)return false;n=true;d(t);e=t.index()}});d($items.eq(e))},f=function(){r=1;e=0},l=function(){$esCarousel.show().elastislide({imageW:65,onClick:function(t){if(n)return false;n=true;d(t);e=t.index()}});$esCarousel.elastislide("setCurrent",e)},c=function(){var e=$('<a href="#" class="rg-view-full"></a>'),t=$('<a href="#" class="rg-view-thumbs rg-view-selected"></a>');a.prepend($('<div class="rg-view"/>').append(e).append(t))},h=function(){$("#img-wrapper-tmpl").tmpl({itemsCount:itemsCount}).appendTo(a);if(itemsCount>1){var e=a.find("div.rg-image-nav-prev"),t=a.find("div.rg-image-nav-next"),n=a.find("div.rg-image");e.on("click",function(e){p("left");e.preventDefault();return false});t.on("click",function(e){p("right");e.preventDefault();return false});$(".slide_play").click(function(){if(r==0){$(".slide_play").css({"background-position":10+"px "+ -148+"px"});r=1}else{$(".slide_play").css({"background-position":10+"px "+ -176+"px"});r=0}});n.touchwipe({wipeLeft:function(){p("right")},wipeRight:function(){p("left")},preventDefaultEvents:false});$(document).on("keyup",function(e){if(e.keyCode==39)p("right");else if(e.keyCode==37)p("left")})}},p=function(t){if(n)return false;n=true;if(t==="right"){if(e+1>=itemsCount)e=0;else++e}else if(t==="left"){if(e-1<0)e=itemsCount-1;else--e}d($items.eq(e))},d=function(r){var i=a.find("div.rg-loading").show();$items.removeClass("selected");r.addClass("selected");var s=r.find("img"),u=s.data("large"),f=s.attr("alt"),l=s.data("cordinates-x"),c=s.data("cordinates-y"),h=s.data("heading"),p=s.data("author");o(l,c);$("<img/>").load(function(){a.find("div.rg-image").fadeOut(100,function(){a.find("div.rg-image").empty().append('<img src="'+u+'"/>').fadeIn(500)});if(f){a.find("div.rg-caption").show().children("p").empty().text(f);a.find("div.rg-caption").show().children("h1").empty().text(h);a.find(".image_author_name").text(p)}i.hide();if(t==="carousel"){$esCarousel.elastislide("reload");$esCarousel.elastislide("setCurrent",e)}n=false}).attr("src",u)},v=function(e){$esCarousel.find("ul").append(e);$items=$items.add($(e));itemsCount=$items.length;$esCarousel.elastislide("add",e)};return{init:s,addItems:v}}();Gallery.init()})
