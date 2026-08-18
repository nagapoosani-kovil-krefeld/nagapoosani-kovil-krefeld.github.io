const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const languageNote = document.querySelector("[data-language-note]");

document.querySelector("[data-year]").textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 24);
});

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  mobileMenu.classList.toggle("open", !open);
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("open");
  });
});

document.querySelectorAll("[data-language-pending]").forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.dataset.languagePending;
    languageNote.textContent = `${language} wird nach Freigabe der deutschen Texte aktiviert.`;
    languageNote.classList.add("visible");
    window.clearTimeout(window.languageNoteTimer);
    window.languageNoteTimer = window.setTimeout(() => languageNote.classList.remove("visible"), 3200);
  });
});
