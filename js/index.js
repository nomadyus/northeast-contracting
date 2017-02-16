$(document).ready(prepareLoadingScreen);

function prepareLoadingScreen() {
  console.log("in prepare " + document.readyState);
  hideMainContent();
  showLoader();
}
  

function showLoader() {
  $("").css("display", "none");
}

function hideLoader() {
  
}

function hideMainContent() {
  
}