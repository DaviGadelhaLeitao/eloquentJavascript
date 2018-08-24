// JavaScript is extremely broad-minded about the number of
// arguments you pass to a function.

// If you pass too many, the extra ones are ignored. If you
// pass to few, the missing parameters simply get assigned
// the value undefined.

// The downside is that it is possible - likely, even - that
// you'll accidentally pass the wrong number of arguments
// to functions and no one will tell you about it.

// The upside is that this behavior can be used to have a
// function take "optional" arguments.

function applyDiscount(price, percentage) {
    if (percentage == undefined) percentage = 10;
    console.log(price -= price * percentage / 100);
}

applyDiscount(100, 50);

console.log("Below follows", "there is a function", "that can't get the exact list of arguments that were passed.",
    "This one can.");
alert("Hello", "Good afternoon", "Bye");


