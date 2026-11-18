// Mobile menu toggle and footer year
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector(".menu-btn");
  var nav = document.querySelector(".nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
