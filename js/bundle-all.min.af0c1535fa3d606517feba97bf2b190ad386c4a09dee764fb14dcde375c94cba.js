function getMobileOperatingSystem(){var userAgent=navigator.userAgent||navigator.vendor||window.opera;if(/windows phone/i.test(userAgent)){return "win";}
if(/android/i.test(userAgent)){return "android";}
if(/iPad|iPhone|iPod/.test(userAgent)&&!window.MSStream){return "ios";}
return "unknown";}
$(function(){$(".hero-backgrounds").slick({infinite:true,slidesToShow:1,slidesToScroll:1,autoplay:true,autoplaySpeed:3000,speed:1000,fade:true,arrows:false,dots:false});$(".download-link").addClass(getMobileOperatingSystem());});