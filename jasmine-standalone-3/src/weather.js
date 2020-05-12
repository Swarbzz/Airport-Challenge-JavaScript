function Weather() {

};  

Weather.prototype.isStormy = function() {
  var number = (Math.floor(Math.random() * 10));
  if (number <= 3){
    return true;
  }
  else {
    return false;
  }
};