(function () {
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#site-nav");
  if (!navToggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  navToggle.addEventListener("click", function () {
    setOpen(navToggle.getAttribute("aria-expanded") !== "true");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  nav.addEventListener("focusout", function (event) {
    var next = event.relatedTarget;
    if (next && (nav.contains(next) || next === navToggle)) return;
    setOpen(false);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape" || navToggle.getAttribute("aria-expanded") !== "true") return;
    setOpen(false);
    navToggle.focus();
  });
})();
