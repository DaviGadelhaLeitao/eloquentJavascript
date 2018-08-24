function cleanHouse(cost) {
    console.log("You'll receive" + cost + " dollars for cleaning the hosue.");
}

function washCar(when) {
    console.log("Washing the car " + when);
    showGratitude("Thank you for your service!");
}

function greet(who) {
    console.log("Hello " + who);
    washCar("tomorrow");
    cleanHouse(50);
}

greet("Harry");
console.log("Bye");

function showGratitude(message) {
    console.log(message);
}

// Every time a function is called, it takes control of the program and a
// a new execution context is created. The place where the computer stores
// these executions contexts is called the Call Stack.

// When a new context is created it is put on top of this stack and when
// the function finishes it's execution, it returns control to the calling
// place and the top context is removed from the stack.

// Notice that showGratitude will not sit on top of cleanHouse because
// it's execution already finished by the time is called.