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

window.addEventListener("keydown", function(e) {
	if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
			e.preventDefault();
	}
}, false);

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

$(".calc-button").on("click", writePowerOutput);

function writePowerOutput() {
	var value = $("#charging-vehs").val();
	value = value * 7.2 / 1000;
	value = Number(value).toFixed(4);
	value = value + " MW"
	$("#pwr-output").text(value);
	console.log(value);
}

$(".calc-button").on("click", switchSwitch)
$(".grid-button").on("click", switchSwitch)
$("#charging-vehs").on("input", switchSwitch);
$("#grid-size").on("input", switchSwitch);

function switchSwitch() {
	var gridSize = $("#grid-size").val();
	var chargingVehs = $("#charging-vehs").val();
	var powerOutput = chargingVehs * 7.2 / 1000;
	if (powerOutput >= gridSize) {
		$(".power").prop("checked", false);
		$('#calculator').addClass("disabled-background")
	} else {
		$(".power").prop("checked", true);
		$('#calculator').removeClass("disabled-background")
	}
	console.log(powerOutput)
}

$(document).on("keydown", function(e) {
	if (!$('input').is(':focus')) {
		moveSlide(e);
	} else { return }
});

// jesus christ
function moveSlide(e) {
	const slideButton1 = document.getElementById("slide-button-1").classList.contains('slide-button-selected');
	const slideButton2 = document.getElementById("slide-button-2").classList.contains('slide-button-selected');
	const slideButton3 = document.getElementById("slide-button-3").classList.contains('slide-button-selected');
	const slideButton4 = document.getElementById("slide-button-4").classList.contains('slide-button-selected');
	const slideButton5 = document.getElementById("slide-button-5").classList.contains('slide-button-selected');

	if (e.keyCode === 37) {
		if (slideButton1) {
			scrollSlide(5);
		} else if (slideButton2) {
			scrollSlide(1);
		} else if (slideButton3) {
			scrollSlide(2);
		} else if (slideButton4) {
			scrollSlide(3);
		} else if (slideButton5) {
			scrollSlide(4);
		} else {
			scrollSlide(5)
		}
	} else if (e.keyCode === 39) {
		if (slideButton1) {
			scrollSlide(2);
		} else if (slideButton2) {
			scrollSlide(3);
		} else if (slideButton3) {
			scrollSlide(4);
		} else if (slideButton4) {
			scrollSlide(5);
		} else if (slideButton5) {
			scrollSlide(1);
		} else {
			scrollSlide(2);
		}
	} else {
		return false;
	}
}

function scrollSlide(slideNumber) { 
	console.log("hewwo");
	document.getElementById("slide-" + slideNumber).scrollIntoView();
	$(".slide-button").removeClass("slide-button-selected");
	$(`#slide-button-${slideNumber}`).addClass("slide-button-selected");
}