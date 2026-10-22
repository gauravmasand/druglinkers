/*
 * Mobile menu and current-section highlighting for the single-page navigation.
 * The page works without this script: links still scroll to their sections.
 */
(function () {
  "use strict";

  const header = document.querySelector(".site-header");
  const button = document.querySelector(".menu-button");
  const nav = document.getElementById("site-nav");
  const links = Array.from(nav.querySelectorAll('a[href^="#"]'));

  function setOpen(open) {
    button.setAttribute("aria-expanded", String(open));
    button.textContent = open ? "Close" : "Menu";
    nav.classList.toggle("is-open", open);
  }

  button.addEventListener("click", () => setOpen(button.getAttribute("aria-expanded") !== "true"));
  links.forEach((link) => link.addEventListener("click", () => setOpen(false)));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      button.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (nav.classList.contains("is-open") && !header.contains(event.target)) setOpen(false);
  });

  window.matchMedia("(min-width: 821px)").addEventListener("change", (event) => {
    if (event.matches) setOpen(false);
  });

  // Mark the link for the section crossing the middle of the viewport.
  // Sections without a nav link (impact, vision & mission) keep the link
  // of the section before them.
  if (!("IntersectionObserver" in window)) return;
  const sections = Array.from(document.querySelectorAll("main > section[id]"));
  const linkFor = new Map();
  let previous = null;
  sections.forEach((section) => {
    previous = links.find((link) => link.hash === "#" + section.id) || previous;
    linkFor.set(section.id, previous);
  });
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => link.removeAttribute("aria-current"));
        const current = linkFor.get(entry.target.id);
        if (current) current.setAttribute("aria-current", "true");
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((section) => observer.observe(section));
})();
