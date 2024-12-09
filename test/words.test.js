import { expect } from 'chai';
import words from '../src/words.js';

describe('Test words() from words.js', () => {
    it('should split a simple ASCII string into words', () => {
        const result = words('fred, barney, & pebbles');
        expect(result).to.deep.equal(['fred', 'barney', 'pebbles']);
    });

    it('should split using a custom pattern', () => {
        const result = words('fred, barney, & pebbles', /[^, ]+/g);
        expect(result).to.deep.equal(['fred', 'barney', '&', 'pebbles']);
    });

    it('should handle Unicode characters', () => {
        const result = words('你好, 世界');
        expect(result).to.deep.equal(['你好', '世界']);
    });

    it('should return an empty array for empty strings', () => {
        const result = words('');
        expect(result).to.deep.equal([]);
    });

    it('should handle strings without word characters', () => {
        const result = words('!@#$%^&*()');
        expect(result).to.deep.equal([]);
    });

    it('should handle strings that do not match pattern', () => {
        const result = words('b', '[a]');
        expect(result).to.deep.equal([]);
    });
})