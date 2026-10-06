(function () {
  var storageKey = "portfolio-theme";
  var toggleButton = document.getElementById("theme-toggle");
  var root = document.documentElement;

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    toggleButton.setAttribute("aria-pressed", String(theme === "dark"));
    toggleButton.innerHTML = theme === "dark" ? "<span aria-hidden=\"true\">☀️</span>" : "<span aria-hidden=\"true\">🌙</span>";
  }

  function getPreferredTheme() {
    var savedTheme = localStorage.getItem(storageKey);
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  var activeTheme = getPreferredTheme();
  setTheme(activeTheme);

  toggleButton.addEventListener("click", function () {
    activeTheme = activeTheme === "dark" ? "light" : "dark";
    setTheme(activeTheme);
    localStorage.setItem(storageKey, activeTheme);
  });

  var year = document.getElementById("current-year");
  year.textContent = String(new Date().getFullYear());
})();
