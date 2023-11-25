/**
 * Updates the theme based on the user's preference.
 * @param {MediaQueryList} mediaQueryList - The media query list object.
 */
function updateThemeBasedOnPreference(mediaQueryList) {
  // Your code here
}
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
