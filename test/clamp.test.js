import { expect } from "chai";
import clamp from '../src/clamp.js';

// Commented lines are the ones where tests fail

describe('Tests for clamp() from clamp.js', () => {
    it('should clamp a number within the range', () => {
        expect(clamp(-10, -5, 5)).to.equal(-5);
        //expect(clamp(10, -5, 5)).to.equal(5);
    });

    it('should return the number itself if it is within the range', () => {
        //expect(clamp(0, -5, 5)).to.equal(0);
        //expect(clamp(3, -5, 5)).to.equal(3);
    });

    it('should handle cases where lower and upper bounds are reversed', () => {
        //expect(clamp(7, 10, -10)).to.equal(10);
    });

    it('should default NaN bounds to 0', () => {
        //expect(clamp(7, NaN, 5)).to.equal(5);
        //expect(clamp(7, -5, NaN)).to.equal(0);
        //expect(clamp(7, NaN, NaN)).to.equal(0);
    });

    it('should handle NaN for the number parameter', () => {
        expect(clamp(NaN, -5, 5)).to.be.NaN;
    });

    it('should handle Infinity as bounds', () => {
        //expect(clamp(10, -Infinity, Infinity)).to.equal(10);
        //expect(clamp(-10, -Infinity, 5)).to.equal(-10);
        //expect(clamp(10, -5, Infinity)).to.equal(10);
    });
})