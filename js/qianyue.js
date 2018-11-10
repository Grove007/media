$(document).ready(function(){
	// $(".h3").hover(function(){
	// 	$(this).hide();
	// 	// $("#main .flor dl").css({
	// 	// 	"width":"100%",
 //  //   		"height":"50%",
 //  //   		"transform":"rotateY(360deg) scale(.98)"
	// 	// }).show(200).remove(".h3")
		
	// },function(){
	// 	//$("#main .flor dl").hide(300).addClass('.h3');
	// 	$("#h3").show();
	// });

	$("#foot_box button").click(function(){
		$("#page").fadeIn(600);
	});
	$("#page span").click(function(){
		$("#page").fadeOut(600);
	});
});