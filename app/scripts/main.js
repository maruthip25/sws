$(document).ready(function() {
		$(".fancybox").fancybox({
      padding:0
    });
    $('.borders').fadeIn("slow");
    $('.head').css({"top":"100px","opacity":"1"});
    setTimeout(function(){
      $('.menu').fadeIn("slow");
    },1200);
});
