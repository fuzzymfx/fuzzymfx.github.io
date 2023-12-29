/**
 * Routes expired or invalid links to the active pages
 * @param {string} path
 */

function routeExpiredLinks(path) {
  switch (path) {
    case "/background":
    case "/background.html":
    case "/cv":
    case "/cv.html":
      window.location.href = "/journey.html";
      break;
    default:
      break;
  }
}

routeExpiredLinks(window.location.pathname);
