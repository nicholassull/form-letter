$(document).ready(function() {
  $("#form-one").submit(function(event) {
    const shout = $("#usr-inp").val();

    $("#shout-p").text(shout.toUpperCase() + "!!!");

    event.preventDefault();
  });
});