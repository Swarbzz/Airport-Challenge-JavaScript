describe("Airport", function() {
  var plane;
  var airport;
  var weather;
  var airport2;

  beforeEach(function() {
    plane = new Plane();
    weather = new Weather();
    airport = new Airport(weather);
    airport2 = new Airport(weather, 50)
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

  describe("Airport is full", function() {
    it("Can't land a plane if the airport is full", function() {
      spyOn(weather, 'isStormy').and.returnValue(false);
      for(i = 0; i < airport._defaultCapacity; i++) {
        airport.land(plane);
      }
      expect(function() { airport.land(plane) }).toThrowError("Well it seems the airport is full, can't land sir");
    });

    it("changes the deafault capacity of the hanger", function() {
      expect(airport2._defaultCapacity).toEqual(50)
    });
  });

});