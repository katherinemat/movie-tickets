// //Business Logic
function MoviesValue(name, title, time, age) {
  this.name = name;
  this.title = title;
  this.time = time;
  this.age = age;
}

function Movies(userName, titleMovie, showTime, inputAge) {
  this.userName = userName;
  this.titleMovie = titleMovie;
  this.showTime = showTime;
  this.inputAge = inputAge;
}
Movies.prototype.receipt = function() {
  return "Thanks, " + this.userName + "! You have selected" + this.titleMovie + " for " + this.showTime + " and the total price will be: ";
}
MoviesValue.prototype.price = function() {
  var moviePrice = 15;
  if(this.age <=10 || this.age >=65) {
    moviePrice -= 5;
  }
  if(this.title === 1) {
    moviePrice -=2;
  }
  if(this.time === 1) {
    moviePrice -=3;
    }
  return "$" + moviePrice;
}

//User Interface
$(document).ready(function () {

  var movie = 0;
  var titleOfMovie = "";
  $("#lalalandTitle").click(function() {
    $("#lalalandSelect").show();
    movie = 2;
    titleOfMovie = "La La Land";
  });
  $("#xxxTitle").click(function() {
    $("#xxxSelect").show();
    movie = 2;
    titleOfMovie = "XXX";
  });
  $("#dogsTitle").click(function() {
    $("#dogsSelect").show();
    movie = 2;
    titleOfMovie = "A Dog's Purpose";
  });
  $("#findDoryTitle").click(function() {
    $("#findDorySelect").show();
    movie = 1;
    titleOfMovie = "Finding Dory";
  });

  $("#movie").submit(function(event) {
    event.preventDefault();

    var ageInput = parseInt($("input#ageInput").val());
    var timeInput = parseInt($("#lalalandOpt option:selected").val()) + parseInt($("#xxxOpt option:selected").val()) + parseInt($("#dogsOpt option:selected").val()) + parseInt($("#findOpt option:selected").val());
    var movieTitle = movie;
    var nameInput = $("#nameInput").val();
    var titleOfMovieFinal = titleOfMovie;

    var ticket = new MoviesValue(nameInput, movieTitle, timeInput, ageInput);
    console.log(ticket);
    console.log(ticket.price());
    $(".results").append(ticket.receipt() + )
  })
});
