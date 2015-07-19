function addSkill () {
  $("#new_skill").on("submit", function (event) {
    event.preventDefault();
    var $target = $(event.target);
    if ($('#skill_title').val() === "") {
      alert("No skill specified");
    } else {
      $.ajax({
        url: $target.attr("action") + '.json',
        type: "post",
        data: $target.serialize()
      }).done(function (response) {
        $('.vertical-tabs').append(formatVerticalTabs(response));
        $('.vertical-tab-content-container').append(formatVerticalTabsContentLink(response));
        $('.vertical-tab-content-container').append(formatVerticalTabsContentDiv(response));
        table();
        $("a[rel=" + response.id.toString() + "]").click();
        $('.vertical-tabs').animate({ scrollTop: $(document).height() }, "slow");
        $target[0][2].value = "";
        countdown();
      });
    }
  });
}

function formatCurrentDateTime (date) {
  var year = date.getFullYear().toString();
  var month = (date.getMonth() + 1).toString();
  var day = (date.getDate() + 1).toString();
  var hours = date.getHours().toString();
  var minutes = date.getMinutes().toString();
  var seconds = date.getSeconds().toString();

  if (parseInt(month, 10) < 10) {
    month = "0" + month
  }

  if (parseInt(day, 10) < 10) {
    day = "0" + day
  }

  if (parseInt(hours, 10) < 10) {
    hours = "0" + hours
  }

  if (parseInt(minutes, 10) < 10) {
    minutes = "0" + minutes
  }

  if (parseInt(seconds, 10) < 10) {
    seconds = "0" + seconds
  }

  return year + "/" + month + "/" + day + " " + hours + ":" + minutes + ":" + seconds;
}

function formatVerticalTabs (skill) {
  return "<a href='javascript:void(0)' class='js-vertical-tab vertical-tab' rel='" + 
          skill.id.toString() + "'>" + skill.title + "</a>";
}

function formatVerticalTabsContentLink (skill) {
  return "<a href='' class='js-vertical-tab-accordion-heading vertical-tab-accordion-heading is-active' rel='" + 
  skill.id.toString() + "'>" + skill.title + "</a>";
}

function formatVerticalTabsContentDiv (skill) {
  var date = new Date;
  return "<div id='" + skill.id.toString() + "' class='js-vertical-tab-content vertical-tab-content'>" +
            "Current streak: " + skill.current_streak.toString() + "<br><br>" +
            "Longest streak: " + skill.longest_streak.toString() + "<br><br>" +
            "Time remaining: <span data-countdown='" + formatCurrentDateTime(date) + "'></span>" +
            "<a href='http://localhost:3000/refresh." + skill.id + "'> Refresh</a></div>";
}