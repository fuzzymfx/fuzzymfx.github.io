const date = new Date(document.lastModified);
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const formattedDate = date.toLocaleDateString("en-US", options);

// Create the "Last Updated" text
const lastUpdatedText = document.createElement("i");
lastUpdatedText.textContent = "Last Updated: ";

// Create the <span> element with the datetime id
const datetimeSpan = document.createElement("span");
datetimeSpan.classList.add("datetime");
datetimeSpan.id = "datetime";

// Wrap the datetimeSpan with the <i> tag
const italicizedDatetimeSpan = document.createElement("i");
italicizedDatetimeSpan.appendChild(datetimeSpan);

// Append the formatted date to the datetimeSpan
datetimeSpan.textContent = formattedDate;

// Find the <div> element with class "content custom"
const dateTime = document.querySelector(".update-date-time");

// Append the "Last Updated" text and datetimeSpan to the contentDiv
dateTime.appendChild(lastUpdatedText);
dateTime.appendChild(italicizedDatetimeSpan);

// Create the download button
const downloadButton = document.createElement("a");
downloadButton.textContent = " Download This Page";
downloadButton.href = "/journey.pdf";

// Find the <div> element with class "content custom"
const downloadCV = document.querySelector(".download-cv");
downloadCV.appendChild(document.createElement("br"));
// Append the download button to the contentDiv
downloadCV.appendChild(downloadButton);
