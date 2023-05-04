// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
    // you can add any code you want within this function scope
    const arr = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    function substitution(input, alphabet, encode = true) {
        if (!alphabet || alphabet.length !== 26) return false;
        let cipher = alphabet.toLowerCase().split("");
        let str = input.toLowerCase();
        if (new Set(cipher).size !== cipher.length) return false;

        let result = "";

        if (!encode) {
            for (let i = 0; i < input.length; i++) {
                if (str[i] === " ") {
                    result += str[i];
                    continue;
                }
                let index = cipher.indexOf(str[i]);

                result += arr[index];
            }
        } else {
            for (let i = 0; i < input.length; i++) {
                if (str[i] === " ") {
                    result += str[i];
                    continue;
                }
                let index = arr.indexOf(str[i]);

                result += cipher[index];
            }
        }
        return result;
    }

    return {
        substitution,
    };
})();

module.exports = { substitution: substitutionModule.substitution };
