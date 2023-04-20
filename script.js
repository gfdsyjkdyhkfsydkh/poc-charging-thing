var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-61px";
  }
  prevScrollpos = currentScrollPos;
}

document.querySelectorAll(".slider").forEach(slider => {
	const items = slider.querySelectorAll(".slide");

	const buttons = slider.querySelectorAll(".slide-button");

	buttons.forEach((button, i) => {
		button.addEventListener("click", () => {
			// unselect items
			items.forEach(item => item.classList.remove("slide-selected"));
			buttons.forEach(button => button.classList.remove("slide-button-selected"));

			button.classList.add("slide-button-selected");
		});
	});
});