// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
    // you can add any code you want within this function scope

    function caesar(input, shift = 0, encode = true) {
        //edge case catching before anything starts doing it's thing
        if (!input || shift > 25 || shift < -25 || shift === 0) return false;
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        let result = [];
        let lower = input.toLowerCase();

        for (let i = 0; i < lower.length; i++) {
            let decode;
            let index = alphabet.indexOf(lower[i]);
            //if this letter is anything that is not in the alphabet
            //string then push it and continue
            //we ignore any special characters
            if (!alphabet.includes(lower[i])) {
                result.push(lower[i]);
                continue;
            }

            //this adds up the location of the letter
            //and adds it to the amount we want to shift
            //then makes sure to lock it to 26 using the modulus operator and assigning newIndex
            //the remainder of whatever was divided by 26
            //so anything that is below 26(or alphabet length)
            //wont be affected but anything above will effectively "wrap around"
            //the alphabet if we end up with a character
            //at the end of said alphabet
            let newIndex = (index + shift) % alphabet.length;
            if (newIndex < 0) newIndex += alphabet.length;

            if (!encode) {
                //this takes in newIndex which is the encoded index
                //that has already been shifted
                //then it subtracts that with shift multiplied by 2
                //which would effectively null out the index + shift from before
                //then it subtracts based on shift
                //and makes sure to wrap around the other way if the numbers are negative
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
