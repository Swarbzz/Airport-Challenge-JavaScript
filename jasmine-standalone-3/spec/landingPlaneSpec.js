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

});