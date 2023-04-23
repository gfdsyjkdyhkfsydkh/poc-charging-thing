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

function whatis (value) {
  return Object.prototype.toString.call(value)
    .replace(/^\[object\s+([a-z]+)\]$/i, '$1')
    .toLowerCase();
}

$('.power').on('change', function() {
	if(!$(this).is(":checked")){
		$('#calculator').addClass("disabled-background")
	} else {
		$('#calculator').removeClass("disabled-background")
	}
})

$(".calc-button").on("click", sizeOfEVInput)
$(".grid-button").on("click", sizeOfGridInput)
$("#charging-vehs").on("input",sizeOfEVInput);
$("#grid-size").on("input",sizeOfGridInput);

function sizeOfGridInput() {
	document.getElementById("grid-size").style.width = document.getElementById("grid-size").value.length +  3 + "ch";
}

function sizeOfEVInput() {
	document.getElementById("charging-vehs").style.width = document.getElementById("charging-vehs").value.length +  3 + "ch";
}

$("#charging-vehs").on("input", writePowerOutput);

$("#calc-button-up, #calc-button-down").on("click", writePowerOutput);

function writePowerOutput() {
	var value = $("#charging-vehs").val();
	value = value * 150 / 1000 + " mWh";
	$("#pwr-output").text(value);
	console.log(value);
}

$("")