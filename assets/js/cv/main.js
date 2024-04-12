// Create the download button
const downloadButton = document.createElement("a");
downloadButton.textContent = "Save as PDF";
downloadButton.href = "/journey.pdf";

// Find the <div> element with class "content custom"
const downloadCV = document.querySelector(".download-cv");
downloadCV.appendChild(document.createElement("br"));
// Append the download button to the contentDiv
downloadCV.appendChild(downloadButton);
