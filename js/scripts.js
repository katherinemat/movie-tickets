// //Business Logic
// function Movies(user, title, time, age, price) {
//   this.user = user;
//   this.title = title;
//   this.time = time;
//   this.age = age;
//   this.price = price;
// }
//
// Movies.prototype.displayInfo = function() {
//   return "Thanks, " + this.user " you have selected" + this.title + " for" + this.time + " and the total price will be" + this.price + ".";
// }

//User Interface
$(document).ready(function () {

  $("#lalalandTitle").click(function() {
    $("#lalalandSelect").show();
  });
  $("#xxxTitle").click(function() {
    $("#xxxSelect").show();
  });
  $("#dogsTitle").click(function() {
    $("#dogsSelect").show();
  });
  $("#findDoryTitle").click(function() {
    $("#findDorySelect").show();
  });

  $("#movie").submit(function(event) {
    event.preventDefault();

    var age = parseInt($("input#ageInput").val());
    var time = parseInt($("#lalalandOpt option:selected").val()) + parseInt($("#xxxOpt option:selected").val()) + parseInt($("#dogsOpt option:selected").val()) + parseInt($("#findOpt option:selected").val());
    console.log(time);

  })
});
