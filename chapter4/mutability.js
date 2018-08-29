let obj1 = { value: 10};
let obj2 = obj1;
let obj3 = { value: 10};

console.log(obj1 == obj2);
console.log(obj1 == obj3);

obj1.value = 15;
console.log(obj2);
console.log(obj3);

// obj1 and obj2 points to the same reference, which is why changing obj1 also changes the value of
// obj2. The obj3 points to a different object.

// JavaScript's == operator, when comparing objects, will return true only if both objects are precisely
// the same value. Comparing different objects will return false, even if they have identical contents.
// There is no deep comparison operation built into JavaScript, which looks at object's contents.

