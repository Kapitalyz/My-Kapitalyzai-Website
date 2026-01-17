// CONFIGURATION
// Replace with your actual Spreadsheet ID (found in the URL of your Google Sheet)
var SHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';
var SHEET_TAB_NAME = 'Leads';

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_TAB_NAME);
    
    // Parse JSON data sent from the website
    var data = JSON.parse(e.postData.contents);

    // Spam Check (Honeypot)
    if (data.honeypot && data.honeypot !== "") {
      return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": "Spam detected" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Add Timestamp
    var newRow = [
      new Date(),
      data.fullName,
      data.email,
      data.companyName,
      data.website || "N/A",
      data.primaryGoal,
      data.description,
      data.budgetRange || "N/A",
      data.contactMethod,
      data.phone || "N/A"
    ];

    sheet.appendRow(newRow);

    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*");

  } catch (e) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": e.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*");
  } finally {
    lock.releaseLock();
  }
}

// Handle OPTIONS request for CORS preflight
function doOptions(e) {
  var output = ContentService.createTextOutput("");
  output.setMimeType(ContentService.MimeType.TEXT);
  output.setHeader("Access-Control-Allow-Origin", "*");
  output.setHeader("Access-Control-Allow-Methods", "POST");
  output.setHeader("Access-Control-Allow-Headers", "Content-Type");
  return output;
}