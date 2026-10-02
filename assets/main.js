// Dark mode toggle (persists choice; defaults to system preference)
document.querySelectorAll("[data-theme-toggle]").forEach((b) =>
  b.addEventListener("click", () => {
    const dark = document.documentElement.classList.toggle("dark");
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
  })
);

// Mobile menu toggle
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
if (btn && menu) {
  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("hidden") === false;
    btn.setAttribute("aria-expanded", String(open));
  });
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.add("hidden");
      btn.setAttribute("aria-expanded", "false");
    })
  );
}
document.getElementById("year").textContent = new Date().getFullYear();
