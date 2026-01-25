# ⚡ Sleep Pact: Google Apps Script Setup

## 1. Create the Sheet
1.  Go to [sheets.new](https://sheets.new) to create a new Google Sheet.
2.  Name it **"Sleep Pact DB"**.
3.  Go to **Extensions** > **Apps Script**.

## 2. Paste the Code
You will see a file named `Code.gs`.
1.  **Delete** all the code currently in `Code.gs`.
2.  **Copy** the code from `google_apps_script/Code.js` in this folder and **Paste** it there.
3.  Click the **(+)** icon next to "Files" > **HTML**.
4.  Name the file `Index` (it will become `Index.html`).
5.  **Copy** the code from `google_apps_script/Index.html` and **Paste** it there.
6.  Click the **Save** (floppy disk) icon.

## 3. Initialize Database
1.  In the toolbar dropdown that says `doGet`, switch it to `setupDatabase`.
2.  Click **Run**.
3.  It will ask for **Permissions**. Review permissions > Choose Account > Advanced > **Go to (unsafe)** > Allow.
4.  *Check your Spreadsheet tabs—you should now see "Users" and "Logs".*

## 4. Deploy
1.  Click **Deploy** (blue button) > **New deployment**.
2.  Select type: **Web app**.
3.  Description: `v1`.
4.  **Execute as**: `Me` (your email).
5.  **Who has access**: `Anyone` (so your friends can use it without logging into your Google account).
6.  Click **Deploy**.

## 5. Share
1.  Copy the **Web App URL**.
2.  Send it to your friends!

**Note**: Since we chose "Anyone" access, the app uses a simple "Select your name" login system. It trusts you are who you say you are (honor system), which fits a friendly pact!
