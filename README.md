# Setup Instructions

## Google Sheets Integration

This website uses Google Apps Script to save consultation requests directly to a Google Sheet. Follow these steps to set up the backend:

1.  **Create the Sheet:**
    *   Go to Google Sheets and create a new spreadsheet.
    *   Rename the active tab (at the bottom) to `Leads`.
    *   (Optional) Add headers in Row 1: `Timestamp`, `Name`, `Email`, `Company`, `Website`, `Goal`, `Description`, `Budget`, `Method`, `Phone`.

2.  **Add the Script:**
    *   In the Google Sheet, go to **Extensions > Apps Script**.
    *   Copy the content from the file `backend/Code.gs` provided in this project.
    *   Paste it into the script editor, replacing any existing code.
    *   **Important:** Update the `SHEET_ID` variable in the script with your actual Spreadsheet ID (found in the URL between `/d/` and `/edit`).

3.  **Deploy as Web App:**
    *   Click **Deploy > New deployment**.
    *   Select type: **Web app**.
    *   Description: "Lead Form API".
    *   **Execute as:** "Me" (your email).
    *   **Who has access:** "Anyone" (This is crucial so the website can post data without user login).
    *   Click **Deploy**.
    *   Authorize the script if prompted.

4.  **Connect to Frontend:**
    *   Copy the **Web App URL** generated (it ends in `/exec`).
    *   Open `constants.ts` in the project files.
    *   Replace the `GOOGLE_SCRIPT_URL` value with your new Web App URL.

5.  **Test:**
    *   Go to the "Book a Consultation" page.
    *   Fill out the form and submit.
    *   Check your Google Sheet for the new row.
