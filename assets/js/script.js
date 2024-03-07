'Use Strict';

/**
 * navbar toggle in mobile
 */
const $navbar = document.querySelector("[data-navbar]");
const $navToggler = document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));

/**
 * header scroll state
 */
const $header = document.querySelector("[data-header]");

window.addEventListener("scroll", (e) => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

/**
 * Add to favarite button toggle
 */
const $toggleBtns = document.querySelectorAll("[data-toggle-btn]");

$toggleBtns.forEach($toggleBtns => {
    $toggleBtns.addEventListener("click", () => {
        $toggleBtns.classList.toggle("active");
    });
});