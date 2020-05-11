describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  it("The weather is stormy", function() {
    spyOn(weather, 'isStormy').and.returnValue(true);
    expect(weather.isStormy()).toEqual(true);
  });

  it("The weather is clear", function() {
    spyOn(weather, 'isStormy').and.returnValue(false);
    expect(weather.isStormy()).toEqual(false);
  });
});