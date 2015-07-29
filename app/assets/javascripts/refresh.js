function refresh () {
  $(".refresh-link").on("click", function(event) {
    event.preventDefault();
    var $target = $(event.target);
    $.ajax({
      url: $target.attr("href"),
      type: "get"
    }).done(function(response) {
      
    });
  });
}
