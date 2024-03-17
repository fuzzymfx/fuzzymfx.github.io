/**
 * Updates the theme based on the user's preference.
 * @param {MediaQueryList} mediaQueryList - The media query list object.
 */
function updateThemeBasedOnPreference(mediaQueryList) {
  if (mediaQueryList.matches) {
    document
      .querySelector('link[rel="icon"]')
      .setAttribute("href", "/favicon-dark.ico");
    document
      .querySelector('link[rel="manifest"]')
      .setAttribute("href", "/manifest-dark.json");
  } else {
    document
      .querySelector('link[rel="icon"]')
      .setAttribute("href", "/favicon.ico");
    document
      .querySelector('link[rel="manifest"]')
      .setAttribute("href", "/manifest.json");
  }
}

// On page load
document.addEventListener("DOMContentLoaded", () => {
  const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
  updateThemeBasedOnPreference(mediaQueryList);
  mediaQueryList.addListener(updateThemeBasedOnPreference);
});
// add active class to nav links based on current path
document.addEventListener("DOMContentLoaded", function () {
  var currentPath = window.location.pathname;
  var links = document.querySelectorAll("nav a");

  links.forEach(function (link) {
    if (
      link.getAttribute("href") === currentPath ||
      link.getAttribute("href") + "/" === currentPath
    ) {
      link.classList.add("active");
    }
  });
});
