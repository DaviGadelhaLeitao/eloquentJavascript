// The goal here is to use the many forms we have to define a function in JavaScript and to
// calculate the factorial of a number with them.

checkInput = number => {
  if (number < 0) {
    return "Negative number.";
  } else if (number === 0 || number === 1) {
    return 1;
  }
};

// function as values - is just a regular variable definition where the value given to the variable happens to be a function.
var calculateFactorial = function(number) {
  checkInput(number);

  var factorial = 1;
  for (var i = number; i > 1; i--) {
    factorial = factorial * i;
  }
  return factorial;
};

console.log(calculateFactorial(3));

// declaration notation
function calculateFactorial2(number) {
  checkInput(number);

  let factorial = 1;
  while (number > 1) {
    factorial = factorial * number;
    number--;
  }
  return factorial;
}

console.log(calculateFactorial2(3));

calculateFactorial3 = number => {
  checkInput(number);

  let factorial = 1;
  while (number > 1) {
    factorial = factorial * number;
    number--;
  }
  return factorial;
};

console.log(calculateFactorial3(3));


function recursiveFactorial(number){
  if(number == 0) return 1;
  else return number * recursiveFactorial(number - 1);
}

console.log(recursiveFactorial(1));