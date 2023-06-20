var slides = document.getElementsByClassName("slide");
var currentSlide = 0;

// Function to show the current slide
function showSlide() {
  // Hide all slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show the current slide
  slides[currentSlide].style.display = "block";
}

// Function to change to the next slide
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0; // Wrap around to the first slide
  }
  showSlide();
}

// Function to change to the previous slide
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1; // Wrap around to the last slide
  }
  showSlide();
}

// Start the slideshow
showSlide();
setInterval(nextSlide, 3000); // Change slide every 3 seconds
