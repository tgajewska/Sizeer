//change header layout
function changeHeader() {
	$(document).scroll(function() {
		const $nav = $(".navbar");
		const $uppernav = $(".upper-navbar");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $uppernav.height());
	})
}

//init youtube
function playYoutube() {
	$("#initYoutube").click(function() {
		$("#onplayer").css("display", "none");
		$("#youtubeplayer").attr("src", "https://www.youtube.com/embed/DaUXhtHEIFU?autoplay=1");
	})
}

$(function () {

changeHeader();
playYoutube();

if ($(window).width() >= 992) {
	$(window).enllax();
}

new WOW().init();
});
