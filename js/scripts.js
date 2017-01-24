//Business Logic
function Movies(user, title, time, age, price) {
  this.user = user;
  this.title = title;
  this.time = time;
  this.age = age;
  this.price = price;
}

Movies.prototype.displayInfo = function() {
  return "Thanks, " + this.user " you have selected" + this.title + " for" + this.time + " and the total price will be" + this.price + ".";
}

//User Interface
