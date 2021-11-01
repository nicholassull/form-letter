$(document).ready(function() {
  $("#main-form").submit(function(event) {
    const name = $("#user-name").val();

    $("#letter-address").append(name);
    $("#letter-container").toggle();

    event.preventDefault();
  })
});