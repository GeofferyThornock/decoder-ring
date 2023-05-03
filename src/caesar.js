// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
    // you can add any code you want within this function scope

    function caesar(input, shift = 0, encode = true) {
        if (!input || shift > 25 || shift < -25 || shift === 0) return false;
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        let result = [];
        let lower = input.toLowerCase();

        for (let i = 0; i < lower.length; i++) {
            let decode;
            let index = alphabet.indexOf(lower[i]);
            if (!alphabet.includes(lower[i])) {
                result.push(lower[i]);
                continue;
            }

            let newIndex = (index + shift) % alphabet.length;
            if (newIndex < 0) newIndex += alphabet.length;

            if (!encode) {
                decode = (newIndex - shift * 2) % alphabet.length;
                if (decode < 0) decode += alphabet.length;
                result.push(alphabet[decode]);
                continue;
            }
            result.push(alphabet[newIndex]);
        }

        return result.join("");
    }

    return {
        caesar,
    };
})();

module.exports = { caesar: caesarModule.caesar };
