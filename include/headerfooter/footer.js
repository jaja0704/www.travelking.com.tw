$(window).load(function(){	
	//footer
      $(".nF_list2, .nF_list4").click( function() {
		  var _top=$(this).offset().top-($(window).scrollTop()>50?65:95);
          $(this).toggleClass("nF_open");
		  $("html,body").animate({scrollTop:_top});
		  console.log(_top);
        }); 
//qr區塊開關
$(".qrbox").click(qrbox);
});
//qr區塊開關
function qrbox(){
$(".qrbox").fadeToggle();
}