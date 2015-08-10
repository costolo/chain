function getAuth() {
  $.ajax({
    url: "/users/sign_in",
    type: "get",
  }).done(function(signin_response) {
    $(".modal-1-inner").append(signin_response);
  }).fail(function(error) {
    console.log(error);
  });

  $.ajax({
    url: "/users/sign_up",
    type: "get"
  }).done(function(signup_response) {
    $(".modal-2-inner").append(signup_response);
  }).fail(function(error) {
    console.log(error);
  });

  $(".sign-in-link").click(function(event) {
    event.preventDefault();
    $(".modal-1-trigger").click();
  });

  $(".sign-up-link").click(function(event) {
    event.preventDefault();
    $(".modal-2-trigger").click();
  });
}
