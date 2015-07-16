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
        $('.vertical-tabs').append(
          "<a href='javascript:void(0)' class='js-vertical-tab vertical-tab' rel='" + 
          response.title.replace(" ", "-") + "'>" + response.title + "</a>"
        )
        console.log(response)
        $target[0][2].value = "";
      });
    }
  });
}