var launchMissiles = function(value) {
  missileSystem.launch("now");
};

if (safeMode) launchMissiles = function(value) {};

// Function variables usually simply act as names for a specific
// piece of program. Such a variable is defined once and never
// changed. This makes it easy to start confusing the function
// and its name.

// But the two are different. A function value can do all things
// that other values can do -- you can use it in arbitrary
// expressions, not just call it. It is possible to store a
// function value in a new place, pass it as an argument to a
// function, and so on.

// Similary, a variable that holds a function is still
// just a regular variable and can be assigned a new value,
// like above.

// Later, we'll discuss more in depth about the concept of
// First-class functions.

// A programming language is said to have First-class functions
// when functions in that language are treated like any other
// variable. For example, in such language, a function can be
// passed as an argument to other functions, can be returned by
// another function and can be assigned as a value to a variable.