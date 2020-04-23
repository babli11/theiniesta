$(document).ready(function(){
	$('#first').hide().slideDown({duration:2000,
		queue:false });
	$('#p1').hide().slideDown({duration:2000,
		queue:false});



$(window).scroll(function(){
	$('nav').toggleClass('scroll',$(this).scrollTop()>610);
});
});
$(document).ready(function(){
	$('#second').hide().slideDown({duration:2000,
		queue:false });
	$('#p2').hide().slideDown({duration:2000,
		queue:false});



$(window).scroll(function(){
	$('nav').toggleClass('scroll',$(this).scrollTop()>610);
});
});



