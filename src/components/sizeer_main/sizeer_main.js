import './scss/main.scss';
var $ = require("jquery");

class SizeerAnimations {

//change header layout
changeHeader() {
    $(document).scroll(function () {
        const $nav = $(".navbar");
        const $uppernav = $(".upper-navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $uppernav.height());
    })
    }

//init youtube
playYoutube() {
    $("#initYoutube").click(function () {
        $("#onplayer").css("display", "none");
        $("#youtubeplayer").attr("src", "https://www.youtube.com/embed/DaUXhtHEIFU?autoplay=1");
    })
}

}

export default SizeerAnimations;