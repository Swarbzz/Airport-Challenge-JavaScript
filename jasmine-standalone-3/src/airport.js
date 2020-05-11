function Airport(weather = new Weather){
  this._planes = [];
  this._weather = weather
};

Airport.prototype.land = function(plane) {
  if (this._weather.isStormy()) {
    throw new Error("The god of wind will not allow us to land!")
  }
  else
  {
  plane.land();
  this._planes.push(plane);
  return this._planes;
  }
};

Airport.prototype.takeoff = function(plane) {
  if (this._weather.isStormy()) {
    throw new Error("The winds are too strong captain");
  }
  else
  {
    plane.takeoff();
    var index = this._planes.indexOf(plane);
    this._planes.splice(index, 1);
    return this._planes;
  }
};