describe("Airport", function() {
  var plane;
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = new plane();
  });

  it("lands a plane", function() {
    expect(airport.land(plane)).toContain(plane);
  });
  
});