function Airport(){
  this._planes = [];
};

Airport.prototype.land = function(plane) {
  plane.land();
  this._planes.push(plane);
  return this._planes;
};