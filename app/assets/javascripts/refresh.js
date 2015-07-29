function refresh () {
  $(".refresh-link").on("click", function(event) {
    event.preventDefault();
    var $target = $(event.target);
    var url = $target.attr("href");
    var id = url.match(/(\d+)(?!.*\d)/)[0].toString();
    var dateTimeIn24Hours = new Date();
    var $dateSpan = $(".data" + id);
    $.ajax({
      url: url,
      type: "get"
    }).done(function(response) {
      $dateSpan.data("countdown", formatCurrentDateTime(dateTimeIn24Hours));
      countdown();
    });
  });
}
