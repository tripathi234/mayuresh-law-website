* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Mangal', sans-serif;
  background-image: url('assets/images/court-building.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
}

/* 👋 Overlay Welcome Animation */
.overlay {
  position: fixed;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 1.5rem;
  text-align: center;
  animation: fadeOut 5s ease-out forwards;
}

@keyframes fadeOut {
  0% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0; visibility: hidden; }
}

/* 🔗 Navigation */
nav {
  background-color: #2e2e2e;
  padding: 10px;
  text-align: center;
}

nav a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
}

nav a:hover {
  color: #ffcc00;
}

/* 🖼 Slideshow */
.slideshow-container {
  max-width: 700px;
  margin: 40px auto;
  position: relative;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.slide {
  display: none;
  width: 100%;
  height: 100%;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 🎤 Slide Caption */
.overlay-text {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 15px 30px;
  border-radius: 5px;
  text-align: center;
}

/* 📦 Sections */
section {
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  margin: 20px;
  border-radius: 10px;
}

h2 {
  color: #ffcc00;
  margin-bottom: 10px;
}

ul {
  list-style: square;
  padding-left: 20px;
}

form input,
form textarea {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: black;
}

form button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

form button:hover {
  background-color: #0056b3;
}

img.photo {
  max-width: 200px;
  border-radius: 8px;
}

footer {
  text-align: center;
  padding: 15px;
  background-color: rgba(0,0,0,0.8);
  font-size: 14px;
  color: #ccc;
}
