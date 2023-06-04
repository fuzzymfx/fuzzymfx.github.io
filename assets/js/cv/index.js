const date = new Date(document.lastModified);
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = date.toLocaleDateString('en-US', options);
document.getElementById("datetime").innerHTML = formattedDate;