// MAIN JS
// counter
const score = document.querySelector(".incremental");
var counter = 0;
var interval;

window.onload = () => {
	interval = setInterval(() => {
		counter += 5;
		score.textContent = counter;

		if (counter >= 256) {
			clearInterval(interval);
		}
	}, 100);
};
