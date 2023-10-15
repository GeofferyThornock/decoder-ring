### Encoding/Decoding Application
![Picture of front page](https://imgur.com/UVxp5Oe)
#

# Caesar Cipher

The Caesar Shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.

takes in three inputs then returns the shifted string _encode is optional_

-   `caesar(input, shift, encode)`
    > encode is true by default leaving it out will automatically return an encoded string

> if you would like to decode a string make encode false

### Example Usage

-   `caesar("hello world", 4)`

    > returns "khoor zruog"

---

# Polybius Cipher

The Polybius Square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. For example, in the above table, the letter "B" would be represented by the numerical pair "21".

takes in 2 inputs then returns the correct number pairs the correspond to the number table _encode is optional_

-   `polybius(input, encode)`

    > as with caesar cipher encode is true by default

    > if you would like to decode a string make encode false

## Example Usage

-   `polybius("Hello world");`
    > returns 3251131343 2543241341

---

# Substitution Cipher

The Substitution Cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the standard alphabet. This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult for them to decode the message.

takes in 3 inputs then returns your string but substituted for letters in your inputted alphabet _encode is optional_

-   `substitution(input, alphabet, encode)`
    > as always encode is true by default if you want to decode set it to false

## Example Usage

-   `substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")`
    > returns jrufscpw

---
