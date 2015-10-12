function refresh() {
  $(document).on("click", ".refresh-link", function(event) {
    event.preventDefault();
    var $target = $(event.target);
    var url = $target.attr("href");
    var id = url.match(/(\d+)(?!.*\d)/)[0].toString();
    var dateTimeIn24Hours = new Date();
    var $dateSpan = $(".data" + id);
    var $timeRemainingSpan = $(".time-remaining" + id);
    var longest = parseInt($("#longest" + id).text(), 10);
    var current = parseInt($("#current" + id).text(), 10);
    if (checkTimeElapsed(id) > 12) {
      alert("Give it some time, come back after " + (checkTimeElapsed(id) - 12).toString() + " hours.");
    } else {
      $.ajax({
        url: url,
        type: "get"
      }).done(function(response) {
        if ($timeRemainingSpan.text() === "Chain broken:") {
          $("#current" + id).hide().html("Current streak: 1 <br /><br />").fadeIn(300);
          $("#longest" + id).hide().fadeIn(300);
          $timeRemainingSpan.hide().html("Time remaining: ").fadeIn(300);
          $dateSpan.hide().attr("data-countdown", formatCurrentDateTime(dateTimeIn24Hours)).fadeIn(300);
        } else {
          $dateSpan.data("countdown", formatCurrentDateTime(dateTimeIn24Hours)).hide().fadeIn(300);
        }
        incrementStreak(current, longest, id);
        countdown();
      });
    }
  });
}

function incrementStreak(current, longest, id) {
  if(current < longest) {
    $("#current" + id).hide().html((current + 1).toString()).fadeIn(300);
  } else if (current === longest) {
    $("#current" + id).hide().html((current + 1).toString()).fadeIn(300);
    $("#longest" + id).hide().html((current + 1).toString()).fadeIn(300);
  }
}

function checkTimeElapsed(id) {
  var hours = parseInt($(".data" + id).text().substr(0,2), 10);
  return hours;
}
