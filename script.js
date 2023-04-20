/*var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-61px";
  }
  prevScrollpos = currentScrollPos;
} */

document.querySelectorAll(".recomendations").forEach(recomendation => {
	const items = recomendation.querySelectorAll(".slide");
	const buttonsHtml = Array.from(items, () => {
		return '<span class=carousel-button"></span>';
	});

	recomendation.insertAdjacentHTML("beforeend", `
		<div class="carousel-nav">
			${ buttonsHtml.join("")}
		</div>
	`)

	console.log(buttonsHtml);
});