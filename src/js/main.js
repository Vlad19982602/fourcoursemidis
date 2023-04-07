import scrolling from './modules/pageup.js';
import slider from './modules/slider.js';

window.addEventListener('DOMContentLoaded', () => {

	scrolling('.pageup');
	slider('.slider-main__wrapper', 'horizontal', '.slider__arrow_prev', '.slider__arrow_next')
});