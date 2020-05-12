describe("Plane", function() {
  var plane;
  var airport;
  var weather;

  beforeEach(function() {
    weather = new Weather();
    airport = new Airport(weather);
    plane = new Plane();
  });

  it("changes the status of the plane to landed", function() {
    spyOn(weather, 'isStormy').and.returnValue(false);
    airport.land(plane);
    expect(plane.isLanded()).toEqual(true);
  });

  it("changes the status of a plane to in the air", function() {
    spyOn(weather, 'isStormy').and.returnValue(false);
    airport.land(plane);
    airport.takeoff(plane);
    expect(plane.isLanded()).toEqual(false);
  });

});