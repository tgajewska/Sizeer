import 'bootstrap/dist/css/bootstrap.min.css';
import 'lightbox2/dist/css/lightbox.min.css';
import 'wowjs/css/libs/animate.css';
import 'bootstrap';
import 'lightbox2/dist/js/lightbox.js';
import 'enllax/dist/jquery.enllax.min.js';
import WOW from 'wow.js/dist/wow.min.js';
import './styles.scss';
import SizeerAnimations from './components/sizeer_main/sizeer_main.js';

var $ = require("jquery");

const sizeerAnimation = new SizeerAnimations;


sizeerAnimation.changeHeader();
sizeerAnimation.playYoutube();

$(window).enllax();

new WOW().init();

