// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
    it("should encode the string correctly", () => {
        const expected = "jrufscpw";
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");

        expect(actual).to.equal(expected);
    });
    it("should only accept 26 letters", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjp");

        expect(actual).to.be.false;
    });
    it("should ignore capital letters", () => {
        const expected = "y&ii$r&";
        const actual = substitution("mEsSaGe", "$wae&zrdxtfcygvuhbijnokmpl");

        expect(actual).to.equal(expected);
    });
    it("should not allow multiple of the same character in given alphabet", () => {
        const actual = substitution("message", "aabbaabbaabbaabbddaaddfftt");

        expected(actual).to.be.false;
    });
    it("should maintain spaces through", () => {
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution(
            "You are an excellent spy",
            "xoyqmcgrukswaflnthdjpzibev"
        );

        expected(actual).to.equal(expected);
    });
    it("should return the correct decoded string if given the correct alphabet", () => {
        const expected = "message";
        const actual = substitution(
            "y&ii$r&",
            "$wae&zrdxtfcygvuhbijnokmpl",
            false
        );

        expected(actual).to.equal(expected);
    });
});
