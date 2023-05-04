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
            //this sanitizes the encoded string so there are no spaces
            //then checks the length if its not even it returns false
            let noSpaces = str.split(" ").join("");
            if (noSpaces.length % 2 === 1) return false;

            for (let i = 0; i < str.length; i += 2) {
                //since the for loop advances by 2 this checks to see if the character
                //at index i is a space then if it is it makes i reduce by one
                //this is because a space would make the str length uneven resulting in
                //the wrong number pairs
                if (str[i] === " ") {
                    result.push(" ");
                    i--;
                    continue;
                }

                // checks for the specific cases of i and j
                //if it shows up in the string just replace it and continue;
                if (str[i] === "4" && str[i + 1] === "2") {
                    result.push("(i/j)");
                    continue;
                }

                //the minus 1 is because arrays are zero-indexed
                //we do the opposite when we are encoding the string see line 82
                let col = parseInt(str[i]) - 1;
                let row = parseInt(str[i + 1]) - 1;

                //this math basically takes the second number which would be the left rows
                //and multiplies it by 5 because for every row we would've HAD to have
                //gone through 5 letters of the alphabet
                //then we add the column because thats the specific selector for
                //each letter thus giving us the index from our alphabet array
                let index = row * 5 + col;
                result.push(arr[index]);
            }
        } else {
            for (let i = 0; i < str.length; i++) {
                if (str[i] === "i" || str[i] === "j") {
                    result.push("42");
                    continue;
                }

                //this ignores all other characters except those in the alphabet array
                if (!arr.includes(str[i])) {
                    result.push(str[i]);
                    continue;
                }

                //this effectively does the exact opposite of decoding
                //we grab the remainder of the array length divided by 5
                //this gives us the issue of showing 0 whenever we divide by 5
                //so we just catch that case and move on
                //then to get what row we are on we just divide the array length
                //by 5 then we round up as it would be giving us the correct numbers but in decimal
                //so we just force it to round up using Math.ceil
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
