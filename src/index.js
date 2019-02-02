import 'bootstrap/dist/css/bootstrap.min.css';
import 'lightbox2/dist/css/lightbox.min.css';
import 'bootstrap';
import 'lightbox2/dist/js/lightbox.min.js';
import 'enllax/dist/jquery.enllax.min.js';
import './styles.scss';
import SizeerAnimations from './components/sizeer_main/sizeer_main.js';

const sizeerAnimation = new SizeerAnimations;

sizeerAnimation.changeHeader();
sizeerAnimation.playYoutube();

$(window).enllax();

lightbox.option({
    'resizeDuration': 100,
    'wrapAround': true
})