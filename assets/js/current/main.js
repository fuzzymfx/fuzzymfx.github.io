const pathname = window.location.pathname;
const filename = pathname.substring(pathname.lastIndexOf("/") + 1);
const file = filename.substring(0, filename.lastIndexOf("."));

async function fetchMetadata() {
  try {
    const response = await fetch("../../metadata.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

const metadata = await fetchMetadata();

if (metadata[file]) {
  const formattedDate = metadata[file].date;

  // Create the <span> element with the datetime id
  const datetimeSpan = document.createElement("span");
  datetimeSpan.classList.add("datetime");
  datetimeSpan.id = "datetime";

  // Wrap the datetimeSpan with the <i> tag
  const dateTimeSpan = document.createElement("span");
  dateTimeSpan.appendChild(datetimeSpan);

  // Append the formatted date to the datetimeSpan
  datetimeSpan.textContent = formattedDate;

  // Find the <div> element with class "content custom"
  const dateTime = document.querySelector(".update-date-time");

  dateTime.appendChild(dateTimeSpan);
}
