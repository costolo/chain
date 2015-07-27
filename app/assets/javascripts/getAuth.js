function getAuth() {
  $.ajax({
    url: "/users/sign_in",
    type: "get",
  }).done(function(signin_response) {
    $(".modal-1-inner").html(signin_response);
    console.log(signin_response);
  });

  $.ajax({
    url: "/users/sign_up",
    type: "get"
  }).done(function(signup_response) {
    $(".modal-2-inner").html(signup_response);
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
