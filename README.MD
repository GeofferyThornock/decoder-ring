# Caesar Cipher

a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on.

takes in three inputs then returns the shifted string _encode is optional_

-   `caesar(input, shift, encode)`
    > encode is true by default leaving it out will automatically return an encoded string

> if you would like to decode a string make encode false

### Example Usage

-   `caesar("hello world", 4)`

    > returns "khoor zruog"

---

# Polybius Cipher

A type of substitution cipher that substitutes each letter with the corrosponding polybius square number

takes in 2 inputs then returns the correct number pairs the correspond to the number table _encode is optional_

-   `polybius(input, encode)`

    > as with caesar cipher encode is true by default

    > if you would like to decode a string make encode false

## Example Usage

-   `polybius("Hello world");`
    > returns 3251131343 2543241341

---

# Substitution Cipher

A Substitution Cipher that takes in another alphabet and replaces your input with said alphabet

takes in 3 inputs then returns your string but substituted for letters in your inputted alphabet _encode is optional_

-   `substitution(input, alphabet, encode)`
    > as always encode is true by default if you want to decode set it to false

## Example Usage

-   `substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")`
    > returns jrufscpw

---
