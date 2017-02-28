(function () {
  $(document).ready(preparePage);

  const preLoader = new createjs.LoadQueue();
  var m = false;
  var l = [];
  const IMG_DIR = "/img/pics/";
  const i = [
    "20150307_192018.jpg",
    "20150307_192056.jpg",
    "20150307_192111.jpg",
    "20150307_192141.jpg",
    "20150307_192316.jpg",
    "20150307_192352.jpg",
    "20150307_192626.jpg",
    "20150609_101307.jpg",
    "20150609_101324.jpg",

    "20150609_101336.jpg",
    "20150609_101433.jpg",
    "20150609_101501.jpg",
    "20150609_101536.jpg",
    "20150609_101540.jpg",
    "20150609_101552.jpg",
    "20150609_101612.jpg",
    "20160527_131702.jpg"
    /*
    "IMG_2219.jpg",
    "IMG_4623.JPG",
    "IMG_4636.JPG",
    "IMG_4640.JPG",
    "IMG_4646.JPG",
    "IMG_4647.JPG",
    "IMG_4648.JPG",
    "IMG_4650.JPG",
    "IMG_4651.JPG",
    "IMG_4652.JPG",
    "IMG_4654.JPG",
    */
  ]

  function preparePage() {
    hideMainContent();
    showLoader();
    preLoadImages();
    addEventListenerToElements();
  }

  function preLoadImages() {
    preLoader.on("complete", handlePreLoadComplete);
    preLoader.on("progress", handlePreLoadProgress);
    preLoader.on("fileload", handlePreLoadRender);
    loadImagesToPreloader();
  }

  function loadImagesToPreloader() {
    i.filter(function (img) {
      preLoader.loadFile(IMG_DIR + img);
    });
  }

  function handlePreLoadComplete(event) {

    //    loadImagesToGallery();
    slideImagesToCenter();

    animateProgressBarTo(100);
    hideLoadingBar();
    slideLoaderOverlayDown();
    slideInHeader();
    showMainContent();
  }

  function handlePreLoadProgress(event) {
    animateProgressBarTo(Math.round(event.progress * 100));
  }

  function handlePreLoadRender(event) {
    loadImageToGallery(event);
    handlePreLoadProgress(event) 
  }

  function animateProgressBarTo(percentage) {
    $("#loading-fill").css({
      width: percentage + '%'
    });
  }

  function slideImagesToCenter() {
    $(".gallery-images").css('right', '0%');
    $(".gallery-images").css('left', '0%');
  }

  function loadImageToGallery(image) {
    var wrap = $("<div class=\"gallery-images slide-horizontally relative dib ma0 pa0 w-50 w-third-m w-25-ns\"></li>");
    var grid = $("<div class=\"aspect-ratio aspect-ratio--16x9\"></li>");
    var main = $("<div class=\"db bg-center cover aspect-ratio--object\"></li>");
    wrap.append(grid.append(main));

    /*
    var randomInt = Math.round((Math.random() + 1).toFixed(2) * 100);
    if (randomInt % 2 == 0) {
      wrap.css('left', -randomInt + '%');
    } else {
      wrap.css('right', -randomInt + '%');
    }
    var randomDuration = (Math.random() + 0.2).toFixed(2);
    wrap.attr('data-i', randomInt);
    wrap.attr('data-d', randomDuration);
    wrap.css('transition-duration', randomDuration + 's');
    */
    main.css('background-image', 'url("' + image.result.src + '")');
    $("#project-gallery").append(wrap);
  }

  function addEventListenerToElements() {
    $("#nav-container").click(function () {
      if (!m) {
        $("#navigation").addClass("right-0");
        $("#navigation").removeClass("right--100");
        $("#nav-container").addClass("menu--opened");
        $("#nav-container").removeClass("dim");
      } else {
        $("#navigation").addClass("right--100");
        $("#navigation").removeClass("right-0");
        $("#nav-container").removeClass("menu--opened");
        $("#nav-container").addClass("dim");
      }
      m = !m;
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
    $("#main").removeClass("dn");
    $("#main-content").removeClass("overflow-hidden");
  }

  function slideLoaderOverlayDown() {
    $("#loader").addClass("absolute");
    $("#loader").addClass("slide-down");
    setTimeout(function () {
      $("#loader").removeClass("dt");
      $("#loader").addClass("dn");
      $("#main-container").removeClass("overflow-hidden");
    }, 1750);
  }

  function showScrollArrow() {
    $("#scroll-arrow").addClass("show");
  }

  function slideInHeader() {
    $("#header").removeClass("out-of-top-frame");
  }
})();