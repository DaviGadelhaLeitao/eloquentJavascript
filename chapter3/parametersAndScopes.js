var x = 'outside';

var f1 = function() {
    var x = 'inside f1';
}

f1();
console.log(x); // outside

var f2 = function() {
    x = 'inside f2';
}

f2();
console.log(x); // inside f2

// GLOBAL VS LOCAL VARIABLES

// An important property of functions is that variables
// crated inside them, including their parameters, are
// LOCAL to the function.

// This "localness" of variables applies only to the
// parameters and to variables declared with var keyword
// inside the function body. Variables declared outside
// of any function are called GLOBAL, because they are visible
// throughout the program.

// It is possible to access such variables from inside a function,
// as long as you haven't declared a local variable with the same
// name.

// By treating function-local variables as existing only within
// the function, the language makes it possible to read and
// understand functions as small universes, without having to
// worry about all the code at once.