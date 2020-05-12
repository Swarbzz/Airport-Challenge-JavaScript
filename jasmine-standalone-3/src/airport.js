function Airport(weather = new Weather, defaultCapacity = 100){
  this._planes = [];
  this._weather = weather
  this._defaultCapacity = defaultCapacity;
};

Airport.prototype.land = function(plane) {
  if (this._weather.isStormy()) {
    throw new Error("The god of wind will not allow us to land!");
  }
  else if(this.isFull()){
    throw new Error("Well it seems the airport is full, can't land sir")
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

Airport.prototype.isFull = function() {
  if (this._planes.length >= this._defaultCapacity){ return true }else{ return false }
}