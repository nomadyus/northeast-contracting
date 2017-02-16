$(document).ready(prepareLoadingScreen);

function prepareLoadingScreen() {
  console.log("in prepare " + document.readyState);
  hideMainContent();
  showLoader();
  showComingSoon();
}

function showLoader() {
  $("#loader").css("display", "");
  $("#loading-fill").animate({width: '70%'}, 1000);
}

function showComingSoon() {
  $("#loading-msg").animate({opacity: '1'}, 1500);
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