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
        $('.skills').append(response.title + " - Time remaining: 24:00:00" + "<br>" + 
          "<br>");
        $target[0][2].value = "";
      });
    }
  });
}