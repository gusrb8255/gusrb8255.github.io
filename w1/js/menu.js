$(function(){
	$(".submeun1,.submeun2,.submeun3,.submeun4,.quick,.quick2").hide();
	$(".brand, .submeun1").hover(function(){
		$(".submeun1").stop().slideToggle(500);	
	});
	$(".model, .submeun2").hover(function(){
		$(".submeun2").stop().slideToggle(500);	
	});
	$(".shopping, .submeun3").hover(function(){
		$(".submeun3").stop().slideToggle(500);	
	});
	$(".owner, .submeun4").hover(function(){
		$(".submeun4").stop().slideToggle(500);	
	});
	$(".quicks, .quick").hover(function(){
		$(".quick").stop().slideToggle(500);	
	});
	$(".quicks2, .quick2").hover(function(){
		$(".quick2").stop().slideToggle(500);	
	});
});