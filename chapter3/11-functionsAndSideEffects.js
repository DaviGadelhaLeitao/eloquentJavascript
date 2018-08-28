/* Functions can be roughly divided into those that are called for their side effects and
those called for their return value (Though it is definitely also possible to have both).

Functions that create return values are easier to combine in new ways than functions that
directly perform side effects.

Pure function is specific kind of value-producing function that not only has no side effect
but also doesn't rely on side effects from other code - for example, it doesn't read global
variables that are occasionally changed by other code. A pure function has the pleasant
property that, when called with the same arguments, it always produce the same value and
doesn't do anything else.

Nonpure functions might return different values based on all kinds of factors and have
side effects that might be hard to test and think about.

Still, there's no need to feel bad when writing functions that are not pure. Side effects
are often useful.

*/

// FUNCTIONS THAT HAS RETURN VALUES VS FUNCTIONS THAT PRODUCE SIDE EFFECTS

function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) numberString = "0" + numberString;
    console.log(numberString + " " + label);
}

printZeroPaddedWithLabel(7, "cars");

function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) string = "0" + string;
    return string;
}

console.log(zeroPad(7, 3));

