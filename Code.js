function onEdit(e) {
  // Example call to handleEdit function in the library
  LedgerdaryTradingJournal.handleEdit(e);
}

// Function to dynamically call any library function
function callLibraryFunction(functionName, ...args) {
  return LedgerdaryTradingJournal.handleRequest(functionName, ...args);
}

function updateTopMoversDashboard() {
  return result = callLibraryFunction('updateTopMoversDashboard');
}

function topPriceMovers() {
  return result = callLibraryFunction('topPriceMovers');
}

function FIFORealizedProfit(positionID, sheetName) {
  return result = callLibraryFunction('FIFORealizedProfit', positionID, sheetName);
}

function FIFORealizedProfitPercentage(positionID, sheetName) {
  return result = callLibraryFunction('FIFORealizedProfitPercentage', positionID, sheetName);
}

function testsetCurrencyTo() {
  return result = callLibraryFunction('setCurrencyToEUR');
}

function exportDataToNewSpreadsheet (){
  return result = callLibraryFunction('exportDataToNewSpreadsheet');
}

function ExportDataToNewSpreadsheet (){
  return result = callLibraryFunction('ExportDataToNewSpreadsheet');
}

function importData (){
  return result = callLibraryFunction('importData');
}

function checkWatchListPriceAlerts (){
  return result = callLibraryFunction('checkWatchListPriceAlerts');
}

function onOpen() {
  setDefaultSheet();
  setDefaultReportSearch();
  updateTopMoversDashboard(); //Update the Top Movers on the Summary Sheet
  addCustomMenu();
}

function addCustomMenu() {
  result = callLibraryFunction('addCustomMenu');
}

function setDefaultSheet() {
  result = callLibraryFunction('setDefaultSheet');
}

function setDefaultReportSearch() {
  result = callLibraryFunction('setDefaultReportSearch');
}

function updateTopMoversDashboard() {
  result = callLibraryFunction('updateTopMoversDashboard');
}

function editCurrency() {
  result = callLibraryFunction('editCurrency'); 
}

function editGoal() {
  result = callLibraryFunction('editGoal'); 
}

function enableMarketData() {
  result = callLibraryFunction('enableMarketData'); 
}

function editNotifications() {
  result = callLibraryFunction('editNotifications'); 
}

function editExchanges() {
  result = callLibraryFunction('editExchanges'); 
}

function editDateFormat() {
  result = callLibraryFunction('editDateFormat'); 
}

function editDateSheet() {
  result = callLibraryFunction('editDateSheet'); 
}

function editHideTotal() {
  result = callLibraryFunction('editHideTotal'); 
}

function openSummaryDashboard() {
  result = callLibraryFunction('openSummaryDashboard'); 
}

function openCryptoDashboard() {
  result = callLibraryFunction('openCryptoDashboard'); 
}

function openStockDashboard() {
  result = callLibraryFunction('openStockDashboard'); 
}

function openOptionDashboard() {
  result = callLibraryFunction('openOptionDashboard'); 
}

function openCryptoSpotJournal() {
  result = callLibraryFunction('openCryptoSpotJournal'); 
}

function openCryptoPerpJournal() {
  result = callLibraryFunction('openCryptoPerpJournal'); 
}

function openStockSpotJournal() {
  result = callLibraryFunction('openStockSpotJournal'); 
}

function openStockMarginJournal() {
  result = callLibraryFunction('openStockMarginJournal'); 
}


function openOptionTradingJournal() {
  result = callLibraryFunction('openOptionTradingJournal'); 
}

function openTradingDashboard() {
  result = callLibraryFunction('openTradingDashboard'); 
}

function openStrategyReport() {
  result = callLibraryFunction('openStrategyReport'); 
}

function openTickerReport() {
  result = callLibraryFunction('openTickerReport'); 
}

function openCashAccount() {
  result = callLibraryFunction('openCashAccount'); 
}

function openPortfolio() {
  result = callLibraryFunction('openPortfolio'); 
}

function openRoadmap() {
  result = callLibraryFunction('openRoadmap'); 
}

function openCryptoWatchlist() {
  result = callLibraryFunction('openCryptoWatchlist'); 
}

function openStocksWatchlist() {
  result = callLibraryFunction('openStocksWatchlist'); 
}

function openImportData() {
  result = callLibraryFunction('openImportData'); 
}

function openVersionUpdate() {
  result = callLibraryFunction('openVersionUpdate'); 
}

function openHelpLink() {
  result = callLibraryFunction('openHelpLink'); 
}

function hideTotal() {
  result = callLibraryFunction('hideTotal'); 
}

function unhideTotal() {
  result = callLibraryFunction('unhideTotal'); 
}

function setCurrencyToUSD() {
  result = callLibraryFunction('setCurrencyToUSD');
}

function setCurrencyToEUR() {
  result = callLibraryFunction('setCurrencyToEUR');
}

function setCurrencyToGBP() {
  result = callLibraryFunction('setCurrencyToGBP');
}

function setCurrencyToCAD() {
  result = callLibraryFunction('setCurrencyToCAD');
}

function setCurrencyToAUD() {
  result = callLibraryFunction('setCurrencyToAUD');
}

function setCurrencyToNZD() {
  result = callLibraryFunction('setCurrencyToNZD');
}

function setCurrencyToHKD() {
  result = callLibraryFunction('setCurrencyToHKD');
}

function setCurrencyToSGD() {
  result = callLibraryFunction('setCurrencyToSGD');
}

function setCurrencyToMYR() {
  result = callLibraryFunction('setCurrencyToMYR');
}

function editStrategies(){
  result = callLibraryFunction('editStrategies');
}

function openStocksMarket() {
  result = callLibraryFunction('openStocksMarket'); 
}

function openCryptoMarket() {
  result = callLibraryFunction('openCryptoMarket'); 
}

function editLabels() {
  result = callLibraryFunction('editLabels'); 
}

function setThemeToBlueSky(){
  result = callLibraryFunction('setThemeToBlueSky'); 
}

function setThemeToRedWine(){
  result = callLibraryFunction('setThemeToRedWine'); 
}

function setThemeToSandyBeach(){
  result = callLibraryFunction('setThemeToSandyBeach'); 
}

function setThemeToGreySky(){
  result = callLibraryFunction('setThemeToGreySky'); 
}

function setThemeToTurquoiseWaters(){
  result = callLibraryFunction('setThemeToTurquoiseWaters'); 
}

function setThemeToBlueOcean(){
  result = callLibraryFunction('setThemeToBlueOcean'); 
}

function setThemeToSunnyDay(){
  result = callLibraryFunction('setThemeToSunnyDay'); 
}

function setThemeToPinkPanter(){
  result = callLibraryFunction('setThemeToPinkPanter'); 
}

function setThemeToWhiteChrismas(){
  result = callLibraryFunction('setThemeToWhiteChrismas'); 
}
