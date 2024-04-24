const API_KEY = "294cfcd8-8745-4cb3-a900-200aa94de927";

function runBuiltWith(DOMAIN) {
  const URL = `https://api.builtwith.com/free1/api.json?KEY=${API_KEY}&LOOKUP=${DOMAIN}`;

  const response = UrlFetchApp.fetch(URL);
  const responseText = response.getContentText();

  return responseText;
}

function test() {
  const DOMAIN = SpreadsheetApp.getActive()
    .getActiveSheet()
    .getRange("B2")
    .getValue();

  const builtwithData = runBuiltWith(DOMAIN);

  SpreadsheetApp.getActive()
    .getActiveSheet()
    .getRange("B7")
    .setValue(builtwithData);
}
