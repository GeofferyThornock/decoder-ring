// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
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

    function polybius(input, encode = true) {
        const str = input.toLowerCase();
        let result = [];
        if (!encode) {
            let noSpaces = str.split(" ").join("");
            if (noSpaces.length % 2 === 1) return false;
            for (let i = 0; i < str.length; i += 2) {
                if (str[i] === " ") {
                    result.push(" ");
                    i--;
                    continue;
                }

                if (str[i] === "4" && str[i + 1] === "2") {
                    result.push("(i/j)");
                    continue;
                }

                let row = parseInt(str[i]) - 1;
                let col = parseInt(str[i + 1]) - 1;

                let index = col * 5 + row;
                result.push(arr[index]);
            }
        } else {
            for (let i = 0; i < str.length; i++) {
                if (str[i] === "i" || str[i] === "j") {
                    result.push("42");
                    continue;
                }
                if (!arr.includes(str[i])) {
                    result.push(str[i]);
                    continue;
                }
                let letterIdx = arr.indexOf(str[i]) + 1;
                let remainder = letterIdx % 5;
                let row = Math.ceil(letterIdx / 5);
                let col = remainder === 0 ? 5 : remainder;
                result.push(`${col.toString()}${row.toString()}`);
            }
        }

        return result.join("");
    }

    return {
        polybius,
    };
})();

module.exports = { polybius: polybiusModule.polybius };
