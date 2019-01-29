orderAnArray = (num1, num2, stepOption) => {
    let greater, smaller;
    let numsEqual;
    let numsArray = [];
    if (num1 > num2) {
        greater = num1;
        smaller = num2;
    } else if(num1 === num2) {
        numsEqual = true;
        numsArray = ['they are equal'];
    } else {
        greater = num2;
        smaller = num1;
    }

    if (!numsEqual) {
        for (smaller; smaller <= greater; smaller++) {
            numsArray.push(smaller);
        }
    }
    return numsArray;
}
let array = orderAnArray(10,10);
sumArray = (array) => {
    let sum = 0;
    if(array[0] === 'they are equal') {
        sum = 'Equals numbers.'
    } else {
        array.map(item => {
            sum += item;
        });
    }
    return sum;
}

console.log(sumArray(array));