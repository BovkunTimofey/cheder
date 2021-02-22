var header = $('.static-header'),
	scrollPrev = 0;

header.addClass('display');
header.addClass('out');
if($(window).scrollTop()>500){
	header.removeClass('unvisible');
	header.removeClass('display')
}else{
	header.addClass('unvisible');
	setTimeout(header.removeClass('display'), 100);
}


$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>500){
			header.removeClass('unvisible');
		}else{
			header.addClass('unvisible');
		}
	});
});


$(window).scroll(function() {
	var scrolled = $(window).scrollTop();

	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});
