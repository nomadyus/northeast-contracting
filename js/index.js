(function () {
  $(document).ready(preparePage);

  const preLoader = new createjs.LoadQueue();
  const IMG_DIR = "/img/proj/";
  const g = false;
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
    ,
    "IMG_2219.jpg",
    "IMG_4623.jpg",
    "IMG_4636.jpg",
    "IMG_4640.jpg",
    "IMG_4646.jpg",
    "IMG_4647.jpg",
    "IMG_4648.jpg",
    "IMG_4650.jpg",
    "IMG_4651.jpg",
    "IMG_4652.jpg",
    "IMG_4654.jpg"

  ];
  var s = false;
  var m = false;
  var l = 0;

  function preparePage() {
    hideMainContent();
    showLoader();
    preLoadImages();
    addEventListenerToElements();
    addSrollEventListenerToPage();
  }

  function preLoadImages() {
    preLoader.on("complete", handlePreLoadComplete);
    preLoader.on("fileload", handlePreLoadRender);
    loadImagesToPreloader();
  }

  function loadImagesToPreloader() {
    i.filter(function (img) {
      preLoader.loadFile(IMG_DIR + img);
    });
  }

  function handlePreLoadComplete(event) {
    var t = setInterval(function () {
      if (i.length == l) {
        slideImagesToCenter();

        animateProgressBarTo(100);
        hideLoadingBar();
        slideLoaderOverlayDown();
        slideInHeader();
        showMainContent();

        clearInterval(t);
      }
    }, 150);
  }

  function handlePreLoadProgress(event) {
    animateProgressBarTo(Math.round(l / i.length * 90));
  }

  function handlePreLoadRender(event) {
    loadImageToGallery(event);
    handlePreLoadProgress(event);
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
    var wrap = $("<div class=\"gallery-images overflow-hidden relative dib ma0 pa0 w-50 w-third-m w-25-ns\"></div>");
    var grid = $("<div class=\"aspect-ratio transform-horizontally aspect-ratio--16x9\"></div>");
    var main = $("<div class=\"db bg-center cover aspect-ratio--object\"></div>");
    main.css('background-image', 'url("' + image.item.src + '")');
    wrap.append(grid.append(main));

    if (g) {
      var randomInt = Math.round((Math.random() + 1).toFixed(2) * 100);
      if (randomInt % 2 == 0) {
        grid.css('transform', 'translateX(' + randomInt + '%)');
      } else {
        grid.css('transform', 'translateX(' + randomInt + '%');
      }
      var randomDuration = (Math.random() + 0.2).toFixed(2);
      grid.attr('data-i', randomInt);
      grid.attr('data-d', randomDuration);
      grid.css('transition-duration', randomDuration + 's');
      setTimeout(function () {
        grid.css('transform', 'translateX(0%)');
      }, randomDuration);
    }

    $("#project-gallery").append(wrap);
    l++;
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
    $("#submit-contact-form").click(function () {
      if ($("#message").val() != "" && $("#email-address").val() != "") {
        const contactData = {
          email: $("#email-address").val(),
          message: $("#message").val()
        }
        $.ajax({
          url: "/p/p.php",
          type: "POST",
          data: contactData,
          dataType: 'json'
        }).done(function (data) {
          if (data.sent) {
            clearContactForm()
          } else {
            showContactFormError();
          }
        }).fail(function (a, b, c) {
          showContactFormError();
        });
      } else {
        showContactFormError();
      }
    });

    $("input").focus(function () {
      removeContactFormError()
    });
  }

  function addSrollEventListenerToPage() {
    $(document).on("scroll", function () {
      if ($(document).scrollTop() >= ($(window).height() - $("#header").height())) {
        $("#header").addClass("bg-white shadow-3");
      } else {
        $("#header").removeClass("bg-white shadow-3");
      }
    });
  }

  function clearContactForm() {
    $("#contact-us").empty();
    $("#contact-us").append($("<p class=\"f3 fw4 ph0 mh0 tc\">Thank you</p>"));
    $("#contact-us").append($("<p class=\"tc center\">Your message has been sent.</p>"));
  }

  function showContactFormError() {
    $("#email-address").addClass('b--red');
    $("#message").addClass('b--red');
  }

  function removeContactFormError() {
    $(".b--red").removeClass("b--red");
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
    }, 1859);
  }

  function showScrollArrow() {
    $("#scroll-arrow").addClass("show");
  }

  function slideInHeader() {
    $("#header").removeClass("out-of-top-frame");
  }
})();