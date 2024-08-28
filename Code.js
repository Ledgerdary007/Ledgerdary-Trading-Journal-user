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

function importData (){
  return result = callLibraryFunction('importData');
}

function onOpen() {
  addCustomMenu();
}

function addCustomMenu() {
  result = callLibraryFunction('addCustomMenu');
}

function changeTheme() {
  result = callLibraryFunction('changeTheme'); 
}

function editCurrency() {
  result = callLibraryFunction('editCurrency'); 
}

function editGoal() {
  result = callLibraryFunction('editGoal'); 
}

function editNotifications() {
  result = callLibraryFunction('editNotifications'); 
}

function editExchanges() {
  result = callLibraryFunction('editExchanges'); 
}

function openWhereToStart() {
  result = callLibraryFunction('openWhereToStart'); 
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

function openOptionJournal() {
  result = callLibraryFunction('openOptionJournal'); 
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