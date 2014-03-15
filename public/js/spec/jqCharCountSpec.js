describe("charCount", function() {
  beforeEach(function() {
    loadFixtures('jqCharCountContent.html');
  });
  it("should be true", function() {
    expect(true).toBe(true);
  });
  it("should be false", function() {
    expect(false).not.toBe(true);
  });
});
