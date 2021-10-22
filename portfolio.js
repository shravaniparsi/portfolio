$(document).ready(function() {
  $("#fullpage").fullpage({
    navigation: false,
    navigationTooltips: ["section1", "section2", "section3", "section4"],
    showActiveTooltip: true,
    slidesNavigation: false,
    slidesNavPosition: "bottom",
    controlArrows: false
  });

  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }
});