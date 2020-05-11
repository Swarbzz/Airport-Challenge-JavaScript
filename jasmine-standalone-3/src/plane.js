function Plane() {
  this._landed = false;
};

Plane.prototype.isLanded = function() {
  return this._landed;
};

Plane.prototype.land = function() {
  this._landed = true;
};