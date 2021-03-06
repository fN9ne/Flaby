function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else{
		document.querySelector('body').classList.add('no-webp');
	}
});
function ibg(){
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
		ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();
$(document).ready(function(){
	$('.menu__burger').click(function(){
		$('.menu__burger, .menu__body, .menu__area').toggleClass('_active');
		$('body').toggleClass('_lock')
	})
	$('.menu__area, .menu__ba').click(function(){
		$('.menu__burger, .menu__body, .menu__area').removeClass('_active')
		$('body').removeClass('_lock')
	})
})
$(document).ready(function(){
	$('.slider-feedback').slick({
		arrows: true,
		appendArrows: $('.feedback__arrows'),
		infinite: false,
		speed: 1000,
	});
	let plan = $('.plan');
	let priceColumn = '.price__column';
	plan.mouseover(function(){
		$(this).closest(priceColumn).addClass('_active');
	});
	plan.mouseleave(function(){
		$(this).closest(priceColumn).removeClass('_active');
	});
})