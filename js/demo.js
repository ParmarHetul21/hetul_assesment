// var slide = document.getElementById("slider-btn-1");
// var slide1 = document.getElementById("slider-btn-2");

// slide.addEventListener("click", () => {
// 	slide1.classList.remove("active");
// 	slide.classList.add("active");
// });

// slide1.addEventListener("click", () => {
// 	slide.classList.remove("active");
// 	slide1.classList.add("active");
// });

// // slide.click(() => {

// // });

// // slide1.click(() => {

// // });

$(document).ready(function () {
	$("button").click(function () {
		$("p:first").addClass("intro");
	});
});
