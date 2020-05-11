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

  it("changes the status of the plane to landed", function() {
    airport.land(plane);
    expect(plane.isLanded()).toEqual(true);
  });

  it("a plane can take off", function() {
    airport.land(plane);
    airport.takeoff(plane);
    expect(plane.isLanded()).not.toContain(plane);
  });

});