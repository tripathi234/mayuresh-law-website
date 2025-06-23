// Welcome overlay 5 seconds में hide
window.addEventListener("DOMContentLoaded", () => {
  const welcome = document.getElementById("welcome-animation");
  setTimeout(() => {
    welcome.style.display = "none";
  }, 5000);
});

// Slide show logic
let slideIndex = 0;
function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}
showSlides();

// Click sound on nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    const sound = document.getElementById("click-sound");
    if (sound) sound.play();
  });
});
