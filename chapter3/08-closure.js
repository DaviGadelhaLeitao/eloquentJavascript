// A closure is the combination of a function and the lexical
// environment within which that function was declared.

function makeAdder(x) {
    return function(y) {
        return x + y;
    }
}

var add2 = makeAdder(2);
console.log(add2(10));
var add10 = makeAdder(10);
console.log(add10(10));

// In some programming languages, the local variables within
// a function exist only for the duration of that function's
// execution. This is not the case with JavaScript.

// The reason is that functions in JavaScript from closures.
// The environment that remains accessible when the closure
// function is called consists of any local variables that were
// in-scope at the time the closure was created.

// In essence, makeAdder is a function factory. add2 and add10
// are both closures. They share the same function definition,
// but store different lexical environments.
