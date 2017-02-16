$(document).ready(prepareLoadingScreen);

function prepareLoadingScreen() {
  console.log("in prepare " + document.readyState);
  hideMainContent();
  showLoader();
}

function showLoader() {
  $("#loader").css("display", "");
  $("#loading-fill").animate({width: '75%'}, 1000);
}

function hideLoader() {
  $("#loader").css("display", "none");
  console.log("hide loader");
}

function hideMainContent() {
  $("#main").css("display", "none");
}

function showMainContent() {
  $("#main").css("display", "");
  $("#main").removeClass("dn")
}