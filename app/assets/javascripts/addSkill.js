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
        $('.vertical-tabs').animate({ scrollTop: $(".vertical-tabs").get(0).scrollHeight }, "slow");
        $target[0][2].value = "";
        countdown();
      });
    }
  });
}

function formatCurrentDateTime (date) {
  var datetime_arr = [
    date.getFullYear().toString(),
    (date.getMonth() + 1).toString(),
    (date.getDate() + 1).toString(),
    date.getHours().toString(),
    date.getMinutes().toString(),
    date.getSeconds().toString()
  ];
  
  datetime_arr.forEach(function(x) {
    if (parseInt(x, 10) < 10) {
      x = "0" + x;
    }
  });

  return datetime_arr[0] + "/" + datetime_arr[1] + "/" + datetime_arr[2] + " " + 
  datetime_arr[3] + ":" + datetime_arr[4] + ":" + datetime_arr[5];
}

function formatVerticalTabs (skill) {
  var count = $(".vertical-tabs").children().size() + 1;
  return "<a href='javascript:void(0)' class='js-vertical-tab vertical-tab' rel='" + 
          skill.id.toString() + "'>" + count + ". " + skill.title + "</a>";
}

function formatVerticalTabsContentLink (skill) {
  return "<a href='' class='js-vertical-tab-accordion-heading vertical-tab-accordion-heading is-active' rel='" + 
  skill.id.toString() + "'>" + skill.title + "</a>";
}

function formatVerticalTabsContentDiv (skill) {
  var date = new Date();
  return "<div id='" + skill.id.toString() + "' class='js-vertical-tab-content vertical-tab-content'>" +
            "Current streak: " + skill.current_streak.toString() + "<br><br>" +
            "Longest streak: " + skill.longest_streak.toString() + "<br><br>" +
            "Time remaining: <span data-countdown='" + formatCurrentDateTime(date) + "'></span>" +
            "<a href='http://localhost:3000/refresh." + skill.id + "'> Refresh</a></div>";
}