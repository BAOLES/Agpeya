// script.js
function exportToExcelAndCSV() {
  // Get the content you want to export
  var contentTable = document.getElementById('exportTable');

  // Initialize empty strings for the Excel and CSV content
  var excelContent = "<table><tr><th>Day</th><th>Prayer</th><th>Progress</th></tr>";
  var csvContent = "Day,Prayer,Progress\n";

  // Loop through each progress circle and extract data
  for (var i = 1; i <= 4; i++) {
    var progressCircleId = 'progressCircle' + i;
    var progressValue = document.getElementById(progressCircleId).textContent;
  // Get the current date
  var currentDate = new Date();
    // Append data to the Excel and CSV content
    excelContent += `<tr><td>${currentDate.toLocaleDateString()}</td><td>Script ${i}</td><td>${progressValue}</td></tr>`;
    csvContent += `${currentDate.toLocaleDateString()},Prayers ${i},${progressValue}\n`;
  }

  // Close the Excel table tag
  excelContent += "</table>";

  // Create Blobs for Excel and CSV
  var excelBlob = new Blob([excelContent], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  var csvBlob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

  // Create links for Excel and CSV and set attributes
  var excelLink = document.createElement('a');
  excelLink.href = window.URL.createObjectURL(excelBlob);
  excelLink.download = 'exported_data.xlsx';

  var csvLink = document.createElement('a');
  csvLink.href = window.URL.createObjectURL(csvBlob);
  csvLink.download = 'exported_data.csv';

  // Append the links to the body and trigger click events
  document.body.appendChild(excelLink);
  document.body.appendChild(csvLink);

  excelLink.click();
  csvLink.click();

  // Remove the links from the DOM
  document.body.removeChild(excelLink);
  document.body.removeChild(csvLink);
}
