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
	curView = width > 895 ? 1200 : 895;
	if(curView === 895){
		$('.menu-section').show();
		$('.header-video')[0].pause();
		$('.header-video')[0].currentTime = 0;
	}else{
		$('.menu-section').hide();
		$('.menu-open').removeClass('menu-open');
		$('.header-video')[0].play();
	}
	console.log(width)
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