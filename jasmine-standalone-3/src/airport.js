function Airport(weather = new Weather){
  this._planes = [];
  this._weather = weather
};

Airport.prototype.land = function(plane) {
  plane.land();
  this._planes.push(plane);
  return this._planes;
};

Airport.prototype.takeoff = function(plane) {
  if (this._weather.isStormy()) {
    console.log("hello")
    throw new Error("The winds are too strong captain");
  }
  else
  {
    console.log("hi")
    plane.takeoff();
    var index = this._planes.indexOf(plane);
    this._planes.splice(index, 1);
    return this._planes;
  }
};