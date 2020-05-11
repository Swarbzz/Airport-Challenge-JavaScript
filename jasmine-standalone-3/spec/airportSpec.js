describe("Airport", function() {
  var plane;
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("lands a plane", function() {
    expect(airport.land(plane)).toContain(plane);
  });

  it("a plane can take off", function() {
    airport.land(plane);
    airport.takeoff(plane);
    expect(plane.isLanded()).not.toContain(plane);
  });

});