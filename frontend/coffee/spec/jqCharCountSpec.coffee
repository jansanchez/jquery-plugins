describe "charCount", () ->
	beforeEach () ->
		loadFixtures('jqCharCountContent.html')
		return
	it "should be true", () ->
		expect(true).toBe true
		return
	it "should be false", () ->
		expect(false).not.toBe true
		return
	return