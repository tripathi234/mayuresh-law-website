
const correctPassword = "mayuresh@123";
function checkLogin() {
  const input = document.getElementById('adminPass').value;
  if (input === correctPassword) {
    alert("Welcome Admin!");
  } else {
    alert("Incorrect password.");
  }
}
function playSound() {
  const audio = new Audio('sound.mp3');
  audio.play();
}
