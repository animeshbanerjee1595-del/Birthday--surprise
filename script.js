function nextScreen() {
  document.getElementById("screen1").classList.add("hidden");
  document.getElementById("screen2").classList.remove("hidden");
}

function nextScreen2() {
  document.getElementById("screen2").classList.add("hidden");
  document.getElementById("screen3").classList.remove("hidden");

  document.getElementById("music").play();

  setInterval(() => {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 300);
}
