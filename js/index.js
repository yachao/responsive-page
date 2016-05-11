$('.menu').on('click', 'li', function(){
	$('.menu').find('.active').removeClass('active');
	$(this).addClass('active');
})