function exportToTextFile() {
  // Get the content you want to export
  var contentTable = document.getElementById('exportTable');

  // Initialize empty strings for the text content
  var textContent = "";

  // Array to store custom names for prayers
  var prayerNames = ["", "Morning Prayers", "Evening Prayers", "Night Prayers", "Midnight Prayer"];

  // Loop through each progress circle and extract data
  for (var i = 1; i <= 4; i++) {
    var progressCircleId = 'progressCircle' + i;
    var progressValue = document.getElementById(progressCircleId).textContent;
    // Get the current date
    var currentDate = new Date();

    // Get the custom name for the current prayer
    var prayerName = prayerNames[i];

    // Append data to the text content
    textContent += `${currentDate.toLocaleDateString()},${prayerName},${progressValue}\n`;
  }

  // Extract the number of the Monday for the week
  var firstDay = new Date();
  firstDay.setDate(firstDay.getDate() - firstDay.getDay() + 1);
  var firstDayNumber = firstDay.getDate();

  // Create a Blob with the text content
  var textBlob = new Blob([textContent], { type: 'text/plain;charset=utf-8;' });

  // Create a link element to trigger the download
  var downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(textBlob);
  
  // Set the download attribute with the desired filename
  downloadLink.download = `weekly_prayer_data-nov${firstDayNumber}.txt`;

  // Append the link to the body and trigger the click event
  document.body.appendChild(downloadLink);
  downloadLink.click();

  // Remove the link from the DOM
  document.body.removeChild(downloadLink);
}