// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
    it("should return the encoded string", () => {
        const expected = "4432423352125413";
        const actual = polybius("thinkful");

        expect(actual).to.equal(expected);
    });
    it("should make sure spaces are maintained throughout", () => {
        const expected = "4432423352125413 4432423352125413";
        const actual = polybius("thinkful thinkful");

        expect(actual).to.equal(expected);
    });
    it("should make sure spaces are maintained throughout when decoding", () => {
        const expected = "th(i/j)nkful th(i/j)nkful";
        const actual = polybius("4432423352125413 4432423352125413", false);

        expect(actual).to.equal(expected);
    });
    it("should return the correct decoded string", () => {
        const expected = "th(i/j)nkful";
        const actual = polybius("4432423352125413", false);

        expect(actual).to.equal(expected);
    });
    it("should return false if inputted encoded string is not even", () => {
        const actual = polybius("443242335212541", false);

        expect(actual).to.be.false;
    });
    it("should ignore capital letters", () => {
        const expected = "4432423352125413";
        const actual = polybius("tHinKfUl");

        expect(actual).to.equal(expected);
    });
    it("should return 42 when given i or j", () => {
        const expected = "4242";
        const actual = polybius("ij");

        expect(actual).to.equal(expected);
    });
});
