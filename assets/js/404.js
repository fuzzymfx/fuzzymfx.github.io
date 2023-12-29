/**
 * Routes expired or invalid links to the active pages
 * @param {string} path
 */

function routeExpiredLinks(path) {
  console.log(path);
  switch (path) {
    case "/background":
    case "/background.html":
      window.location.href = "/journey.html";
      break;
    default:
      break;
  }
}

routeExpiredLinks(window.location.pathname);
