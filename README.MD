# Caesar Cipher

takes in three inputs then returns the shifted string _encode is optional_

-   `caesar(input, shift, encode)`
    > encode is true by default leaving it out will automatically return an encoded string

> if you would like to decode a string make encode false

### Example Usage

-   `caesar("hello world", 4)`
    > returns "khoor zruog"

---

# Polybius Cipher

takes in 2 inputs then returns the correct number pairs the correspond to the number table _encode is optional_

-   `polybius(input, encode)`

    > as with caesar cipher encode is true by default

    > if you would like to decode a string make encode false

## Example Usage

-   `polybius("Hello world");`
    > returns 3251131343 2543241341

---

# Substitution Cipher

takes in 3 inputs then returns your string but substituted for letters in your inputted alphabet _encode is optional_

-   `substitution(input, alphabet, encode)`
    > as always encode is true by default if you want to decode set it to false

## Example Usage

-   `substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")`
    > returns jrufscpw

---
