import scrolling from './modules/pageup.js';
import slider from './modules/slider.js';
import modals from './modules/modals.js';
import forms from './modules/forms.js';
import mask from './modules/mask.js';

window.addEventListener('DOMContentLoaded', () => {

	scrolling('.pageup');
	slider('.slider-main__wrapper', 'horizontal', '.slider__arrow_prev', '.slider__arrow_next');
	slider('.gallery-piece', 'horizontal', '.carousel-arrow-prev22', '.carousel-arrow-next22');
	modals();
	forms();
	mask('[name=phone]');
});