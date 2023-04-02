import VideoPlayer from './modules/playVideo.js';
import hamburgerer from './modules/hamburger.js'
import scrolling from './modules/pageup.js';

window.addEventListener('DOMContentLoaded', () => {
	const player = new VideoPlayer('.showup .play', '.overlay');
	player.init();

	scrolling('.pageup');
	hamburgerer('', '', '.hamburger');
});