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

// Gentle reveal: content fades in and rises slightly as it scrolls into view.
// Skipped for people who prefer reduced motion, and harmless if anything fails.
(function () {
  try {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var targets = [].slice.call(document.querySelectorAll("main .wrap > *:not(.grid), main .grid > *"));
    if (!targets.length) return;
    document.documentElement.classList.add("reveal-on");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -4% 0px" });
    targets.forEach(function (el, i) {
      el.classList.add("reveal");
      if (el.parentElement.classList.contains("grid")) {
        el.style.transitionDelay = Math.min([].indexOf.call(el.parentElement.children, el), 5) * 90 + "ms";
      }
      io.observe(el);
    });
    // Safety net: never leave content hidden.
    setTimeout(function () { targets.forEach(function (el) { el.classList.add("in"); }); }, 4000);
  } catch (err) {}
})();
