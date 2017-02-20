$(document).ready(prepareLoadingScreen);

function prepareLoadingScreen() {
    hideMainContent();
    showLoader();
    preLoadImages();
}

function preLoadImages() {
    var preLoader = new createjs.LoadQueue();
    preLoader.on("complete", handlePreLoadComplete);
    preLoader.on("progress", handlePreLoadProgress);
    loadImagesToPreloader(preLoader);
}

function loadImagesToPreloader(loader) {
    loader.loadFile("/img/pics/20150307_192018.jpg");
    /*
    loader.loadFile("/img/pics/20150307_192056.jpg");
    loader.loadFile("/img/pics/20150307_192111.jpg");
    loader.loadFile("/img/pics/20150307_192141.jpg");
    loader.loadFile("/img/pics/20150307_192316.jpg");
    loader.loadFile("/img/pics/20150307_192352.jpg");
    loader.loadFile("/img/pics/20150307_192626.jpg");
    loader.loadFile("/img/pics/20150609_101307.jpg");
    loader.loadFile("/img/pics/20150609_101324.jpg");
    loader.loadFile("/img/pics/20150609_101336.jpg");
    loader.loadFile("/img/pics/20150609_101433.jpg");
    loader.loadFile("/img/pics/20150609_101501.jpg");
    loader.loadFile("/img/pics/20150609_101536.jpg");
    loader.loadFile("/img/pics/20150609_101540.jpg");
    loader.loadFile("/img/pics/20150609_101552.jpg");
    loader.loadFile("/img/pics/20150609_101612.jpg");
    loader.loadFile("/img/pics/20160527_131702.jpg");
    loader.loadFile("/img/pics/IMG_2219.jpg");
    loader.loadFile("/img/pics/IMG_4623.JPG");
    loader.loadFile("/img/pics/IMG_4636.JPG");
    loader.loadFile("/img/pics/IMG_4640.JPG");
    loader.loadFile("/img/pics/IMG_4646.JPG");
    loader.loadFile("/img/pics/IMG_4647.JPG");
    loader.loadFile("/img/pics/IMG_4648.JPG");
    loader.loadFile("/img/pics/IMG_4650.JPG");
    loader.loadFile("/img/pics/IMG_4651.JPG");
    loader.loadFile("/img/pics/IMG_4652.JPG");
    loader.loadFile("/img/pics/IMG_4654.JPG");
    */
}

function handlePreLoadComplete(event) {
    console.log("target: " + event.target);
    console.log("type: " + event.type);
    animateProgressBarTo(100);
    hideLoadingBar();
    slideLoaderOverlayDown();
    showMainContent();
}

function handlePreLoadProgress(event) {
    animateProgressBarTo(Math.round(event.progress * 100));
}

function animateProgressBarTo(percentage) {
    $("#loading-fill").css({
        width: percentage + '%'
    });
}

function showLoader() {
    $("#loader").css("display", "");
}

function hideLoader() {
    $("#loader").css("display", "none");
}

function hideLoadingBar() {
    $("#loading-logo").addClass("vanish");
    $("#loading-bar").addClass("vanish");
}

function hideMainContent() {
    $("#main").css("display", "none");
}

function showMainContent() {
    $("#main").css("display", "");
    $("#main").removeClass("dn")
}

function slideLoaderOverlayDown() {
    $("#loader").addClass("overlay");
    $("#loader").addClass("slide-down");
    setTimeout(function(){
      $("#loader").removeClass("dt");
      $("#loader").addClass("dn");
    }, 1750);
}

function showScrollArrow() {
    $("#scroll-arrow").addClass("show");
}
