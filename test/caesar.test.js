// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
    it("should return the inputted string but shifted", () => {
        const expected = "wklqnixo";
        const actual = caesar("thinkful", 3);
        expect(actual).to.equal(expected);
    });
    it("should decode inputted string", () => {
        const expected = "thinkful";
        const actual = caesar("wklqnixo", 3, false);
        expect(actual).to.equal(expected);
    });
    it("should leave non-alphabet characters intact", () => {
        const expected = "khoor zruog";
        expect(caesar("hello world", 3)).to.equal(expected);
    });
    it("should take in a negative shift number and shift the letters to the left", () => {
        const expected = "ebiil tloia";
        expect(caesar("hello world", -3)).to.equal(expected);
    });
    it("should wrap around any letters that shift farther than the alphabet", () => {
        const expected = "cdqtumtsj";
        expect(caesar("xylophone", 5)).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const expected = "khoor zruog";
        expect(caesar("HeLLo WorLd", 3)).to.equal(expected);
    });
    it("should return false when given a shift operator more than 25", () => {
        expect(caesar("thinkful", 26)).to.be.false;
    });
    it("should return false when given a shift operator less than -25", () => {
        expect(caesar("thinkful", -26)).to.be.false;
    });
    it("should return false when not given a shift operator", () => {
        expect(caesar("thinkful")).to.be.false;
    });
    it("should return an false when given empty string", () => {
        const actual = caesar();
        expect(actual).to.be.false;
    });
});
