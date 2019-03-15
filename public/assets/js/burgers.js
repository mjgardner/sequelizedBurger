$(function() {
  $(".devourBtn").click(function (event) {
    $.ajax("/api/burgers/" + $(this).data("id"), {
      type: "POST"
    }).then(function () {
      location.reload();
    });
  });

  $("#newBurgerForm button[type=submit]").click(function (event) {
    event.preventDefault();
    $.ajax("/api/burgers", {
      type: "POST",
      data: {
        burgerName: $("#burgerName").val().trim()
      }
    }).then(function () {
      location.reload();
    });
  });
});
