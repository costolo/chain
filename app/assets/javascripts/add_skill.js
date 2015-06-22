function addSkill() {
  $("#new_skill").on("submit", function (event) {
    event.preventDefault();
    var $target = $(event.target);
    console.log($target)
    if ($('#skill_title').val() === "") {
      alert("No skill specified")
    } else {
      $.ajax({
        url: $target.attr("action") + '.json',
        type: "post",
        data: $target.serialize()
      }).done(function (response) {
        $('.skills').append(response.title + "<br>");
        $target[0][2].value = "";
      });
    }
  });
}