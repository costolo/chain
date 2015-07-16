function addSkill() {
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
        $('.vertical-tabs').append(formatVerticalTabs(response))
        $('.vertical-tabs').animate({ scrollTop: $(document).height() }, "slow");
        $target[0][2].value = "";
      });
    }
  });
}

function formatVerticalTabs (skill) {
  return "<a href='javascript:void(0)' class='js-vertical-tab vertical-tab' rel='" + 
          skill.title.replace(" ", "-") + "'>" + skill.title + "</a>";
}

// function formatVerticalTabsContentLink (skill) {
//   return "<a href='' class='js-vertical-tab-accordion-heading vertical-tab-accordion-heading is-active' rel='" + 
//   skill.title.replace(" ", "-") + "'>" + skill.title + "</a>";
// }

// function formatVerticalTabsContentDiv (skill) {
//   return <div id="<%= skill.title.gsub(" ", "-") %>" class="js-vertical-tab-content vertical-tab-content">
//           <%= "Current streak: " + skill.current_streak.to_s %><br><br>
//           <%= "Longest streak: " + skill.longest_streak.to_s %><br><br>
//           <span data-countdown="TIME.NOW IN Y/M/D H:M:S"></span>;
// }