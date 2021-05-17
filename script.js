// Membuat Effect Parallax
const ambilh2 = document.querySelector(".hero h2");
const ambilp = document.querySelector(".hero p");

window.addEventListener("scroll", function () {
  let jarakscroll = this.scrollY;

  ambilh2.style.transform = "translate(0px,  " + jarakscroll / 1.6 + "%)";
  ambilp.style.transform = "translate(0px,  " + jarakscroll / 1.1 + "%)";
});

// Animasi Navbar
const ambilcheck = document.getElementsByTagName("input")[0];
const ambilul = document.querySelector("ul");

ambilcheck.addEventListener("click", function () {
  ambilul.classList.toggle("slide");
});

// Landing About
const ambilintro = document.querySelectorAll(".intro p");

ambilintro.forEach(function (e) {
  window.addEventListener("scroll", function () {
    setTimeout(function () {
      e.classList.add("muncul");
    }, 700);
  });
});
