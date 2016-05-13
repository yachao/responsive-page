var nav = $('.nav-panel')[0];
var timeoutId = null;
var curView = 0;

window.addEventListener('resize', function() {
	timeoutId && clearTimeout(timeoutId);
	timeoutId = setTimeout(function(){
		changeView();
	},100);
});

function changeView(){
	var width = Number(getComputedStyle(nav).width.replace(/px/, ''));
	var video = document.getElementById('video');
	if(width < 895 && curView != 895){
		$('.menu-section').show();
		video.pause();
		video.currentTime = 0;
		curView = 895;
	}
	if(width > 895 && curView != 1200){
		$('.menu-section').hide();
		$('.menu-open').removeClass('menu-open');
		video.play();
		curView = 1200;
	}
	console.log(width, curView)
}
changeView();

$('.menu').on('click', 'li', function(){
	var $this = $(this);
	var index = $this.index();
	if($this.hasClass('active')){
		$this.removeClass('active');
		$('.menu-shrink').removeClass('menu-open');
	}else{
		$('.menu').find('.active').removeClass('active');
		$this.addClass('active');
		$('.menu-shrink').hasClass('menu-open') ? 1 : $('.menu-shrink').addClass('menu-open');
	}
	if(index == 0) return
	$('.menu-section').hide();
	$('.menu-section').eq(index-1).fadeIn();
});

$('.hamburger').on('click', function(){
	$('.menu-shrink').toggleClass('menu-open');
});