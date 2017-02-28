(function () {
  $(document).ready(preparePage);

  var preLoader = new createjs.LoadQueue();
  var m = false;

  function preparePage() {
    hideMainContent();
    showLoader();
    preLoadImages();
    addEventListenerToElements();
  }

  function preLoadImages() {
    preLoader.on("complete", handlePreLoadComplete);
    preLoader.on("progress", handlePreLoadProgress);
    loadImagesToPreloader(preLoader);
  }

  function loadImagesToPreloader(loader) {
    loader.loadFile("/img/pics/20150307_192018.jpg");
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
    /*
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

    loadImagesToGallery();
    slideImagesToCenter();

    animateProgressBarTo(100);
    hideLoadingBar();
    slideLoaderOverlayDown();
    slideInHeader();
    showMainContent();
  }

  function handlePreLoadProgress(event) {
    animateProgressBarTo(Math.round(event.progress * 95));
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

  function loadImagesToGallery() {
    console.log("gonan do some magic");
    var items = preLoader.getItems();
    preLoader.getItems(true).filter(function (item) {
      var wrap = $("<div class=\"gallery-images slide-horizontally relative dib ma0 pa0 w-50 w-third-m w-25-ns\"></li>");
      var grid = $("<div class=\"aspect-ratio aspect-ratio--16x9\"></li>");
      var main = $("<div class=\"db bg-center cover aspect-ratio--object\"></li>");
      wrap.append(grid.append(main));

      var sqr = Math.sqrt(items.count);
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
      main.css('background-image', 'url("' + item.result.src + '")');
      $("#project-gallery").append(wrap);
    });
  }

  function addEventListenerToElements() {
    $("#nav-container").click(function () {
      console.log(m);
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