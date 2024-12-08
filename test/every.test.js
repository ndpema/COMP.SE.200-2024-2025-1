import { expect } from 'chai';
import every from '../src/every.js';

describe('Tests for every() from every.js', () => {
    it('should return true for an empty array', () => {
        const result = every([], Boolean);
        expect(result).to.be.true;
    });

    it('should return true if all elements pass the predicate', () => {
        const result = every([2, 4, 6], (n) => n % 2 === 0);
        expect(result).to.be.true;
    });

    it('should return false if any element fails the predicate', () => {
        const result = every([2, 4, 5], (n) => n % 2 === 0);
        expect(result).to.be.false;
    });

    it('should work with non-boolean predicates', () => {
        const result = every(['yes', 'no', 'maybe'], (str) => str.length > 2);
        expect(result).to.be.true;
    });

    it('should stop iteration once a predicate fails', () => {
        let iterations = 0;
        every([2, 4, 5, 6], (n) => {
            iterations++;
            return n % 2 === 0;
        });
        expect(iterations).to.equal(3); // Stops after the third element
    });

    it('should handle arrays with `null` or `undefined` elements', () => {
        const result = every([true, 1, null, 'yes'], Boolean);
        expect(result).to.be.false;
    });

    it('should return false for `null` or `undefined` arrays', () => {
        const result = every(null, Boolean);
        expect(result).to.be.false;

        const result2 = every(undefined, Boolean);
        expect(result2).to.be.false;
    });
})