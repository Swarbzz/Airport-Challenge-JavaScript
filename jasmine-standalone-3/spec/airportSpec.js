describe("Airport", function() {
  var plane;
  var airport;
  var weather;

  beforeEach(function() {
    plane = new Plane();
    weather = new Weather();
    airport = new Airport(weather);
  });

  describe("Weather is clear", function() {
    beforeEach(function() {
      spyOn(weather, 'isStormy').and.returnValue(false);
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

  describe("Weather is stormy", function() {
    beforeEach(function() {
      spyOn(weather, 'isStormy').and.returnValue(true);
    });

    it("A plane cannot take off", function() {
      expect(function(){ airport.takeoff(plane) }).toThrowError("The winds are too strong captain");
    });

    it("A plane cannot land", function() {
      expect(function(){ airport.land(plane) }).toThrowError("The god of wind will not allow us to land!");
    });
  });

});