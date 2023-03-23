
const mathOperations = require("./math");

describe("Testing the math module", () => {
	//testing 5 + 24
	test("test Adding 5 + 24 should return 29", () => {
		let result = mathOperations.add(5, 24);
		expect(result).toBe(29);
	});

	test("Subtract 150 - 50", () => {
		let result = mathOperations.subtract(150, 50);
		expect(result).toBe(100);
	});

	test("Multiply 5 * 5 should return 25", () => {
		let result = mathOperations.multiply(5, 5);
		expect(result).toBe(25);
	});

	test("Divide 30 / 5 should return 6", () => {
		let result = mathOperations.divide(30, 5);
		expect(result).toBe(6);
	});
});
