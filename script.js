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

const slides = document.querySelectorAll('.slide');
const options = {
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const currentSlide = entry.target;
      const currentSlideId = currentSlide.getAttribute('id');
      // Update the button color based on the current slide ID
      updateButtonColor(currentSlideId);
    }
  });
	console.log("hello")
}, options);

slides.forEach(slide => {
  observer.observe(slide);
});

function updateButtonColor(currentSlideId) {
  const buttons = document.querySelectorAll('.slide-button');
  buttons.forEach(button => {
    const buttonTarget = button.getAttribute('href').substring(1);
    if (buttonTarget === currentSlideId) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}