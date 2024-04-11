const date = new Date(document.lastModified);
const options = {
  weekday: "long",
  month: "long",
  day: "numeric",
};
const formattedDate = date.toLocaleDateString("en-US", options);

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
