$(function(){
	var $window = $(window);
	var cHeight,startPoint,scrollHeight;

	$window.on('scroll',function(){
		//현재 스크롤 위치
		scrollHeight = $window.scrollTop();
		
		//div(#c) 위치
		cHeight = $('#page2').offset().top;
		
		//실행되는 높이값 
		startPoint = cHeight-500;

		//실행
		if(scrollHeight>startPoint){
			//실행문
			$('.text').animate({'left':'0'},500);
		};
	});
	$window.trigger('scroll');
})