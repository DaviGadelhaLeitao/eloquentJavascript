console.log("Starting the application...");

function topLevelFunction() {
  var x = 10;
  middle();
  function middle() {
    var y = 20;
    below();
    function below() {
      var xy = 30;
      console.log(x);
      underground();
      function underground() {
        var xyz = 40;
        console.log(x);
      }
    }
  }
}

topLevelFunction();

const name = "Am I an immutable string?";
console.log(name);
// Can't do this!
// name = "Let's find out!";
console.log(name);

{
  let another = "Am I visible from outside my enclosing block scope?";
}
// For sure, It's not!
// console.log(another);

// NESTED SCOPES

// JavaScript distinguishes not just between global and local
// variables. Functions can be created inside other functions
// producing several degrees of locality.

// In short, each local scope can also see all the local scopes
// that contain it. All variables from blocks around a
// function's definition are visible. This approach to variable
// visibility is called LEXICAL SCOPING.

// People who have experience with other programming languages
// might expect that any block of code between braces produces
// a new local environment. But in JavaScript, ONLY FUNCTIONS
// CAN CREATE A NEW SCOPE.

// ES6 introduced the let and const keywords, which are blocked
// scoped, not function scoped.
