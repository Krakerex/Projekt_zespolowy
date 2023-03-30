const nr = require('../newton-raphson.js'),
	expect = require('chai').expect;

describe('Newton Raphson algorithm to solve roots of expressions', () => {
	it('should return 2 for f(x) = x - 2', () => {
		expect( Math.ceil(
			nr.newtonRaphson(1, 0.1, 10, 0.001, function(x) {
				return x - 2;
			})
		)).to.equal(2);
	});

	it('should return -1.266 for f(x) = 4.3x^5 - 2.1x^4 - 2.8x^3 +2.2x^2 - 6.3x + 2.2 with guess at -1', () => {
		expect(nr.newtonRaphson(-1, 0.1, 20, 0.001, function(x) {
				return 4.3*Math.pow(x, 5) - 2.1*Math.pow(x, 4) - 2.8*Math.pow(x, 3) +2.2*Math.pow(x, 2) - 6.3*x + 2.2
			}).toFixed(3)).to.equal('-1.266');
	});

	it('should return 0.0373 for f(x) = 4.3x^5 - 2.1x^4 - 2.8x^3 +2.2x^2 - 6.3x + 2.2 with guess at 0', () => {
		expect(nr.newtonRaphson(0, 0.1, 20, 0.001, function(x) {
				return 4.3*Math.pow(x, 5) - 2.1*Math.pow(x, 4) - 2.8*Math.pow(x, 3) +2.2*Math.pow(x, 2) - 6.3*x + 2.2
			}).toFixed(3)).to.equal('0.373');
	});

	it('should return 1.236 for f(x) = 4.3x^5 - 2.1x^4 - 2.8x^3 +2.2x^2 - 6.3x + 2.2 with guess at 1', () => {
		expect(nr.newtonRaphson(1, 0.1, 20, 0.001, function(x) {
				return 4.3*Math.pow(x, 5) - 2.1*Math.pow(x, 4) - 2.8*Math.pow(x, 3) +2.2*Math.pow(x, 2) - 6.3*x + 2.2
			}).toFixed(3)).to.equal('1.236');
	});

	it('should return false for f(x) = 2', () => {
		expect(nr.newtonRaphson(1, 0.1, 10, 0.001, function(x) {
				return 2;
			})
		).to.equal(false);
	});

	it('should return false for f(x) = x^2 + 2', () => {
		expect(nr.newtonRaphson(1, 0.1, 10, 0.001, function(x) {
				return Math.pow(x, 2) + 2;
			})
		).to.equal(false);
	});

	it('should prompt users to input values', () => {
		nr.newtonRaphsonCLI();
	});
});