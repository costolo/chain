function refresh () {
  $(".refresh-link").on("click", function(event) {
    event.preventDefault();
    var $target = $(event.target);
    var url = $target.attr("href");
    var id = url.match(/(\d+)(?!.*\d)/)[0].toString();
    var dateTimeIn24Hours = new Date();
    var $dateSpan = $(".data" + id);
    var $timeRemainingSpan = $(".time-remaining" + id);
    var longest = parseInt($("#longest" + id).text(), 10);
    var current = parseInt($("#current" + id).text(), 10);
    
    $.ajax({
      url: url,
      type: "get"
    }).done(function(response) {
      if ($timeRemainingSpan.text() === "Chain broken:") {
        $timeRemainingSpan.hide().html("Time remaining: ").fadeIn("slow");
        $dateSpan.hide().attr("data-countdown", formatCurrentDateTime(dateTimeIn24Hours)).fadeIn("slow");
      } else {
        $dateSpan.data("countdown", formatCurrentDateTime(dateTimeIn24Hours)).hide().fadeIn("slow");
      }
      incrementStreak(current, longest, id);
      countdown();
    });
  });
}

function incrementStreak(current, longest, id) {
  if(current < longest) {
    $("#current" + id).hide().html((current + 1).toString()).fadeIn("slow");
  } else if (current === longest) {
    $("#current" + id).hide().html((current + 1).toString()).fadeIn("slow");
    $("#longest" + id).hide().html((current + 1).toString()).fadeIn("slow");
  }
}
