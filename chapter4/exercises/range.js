orderAnArray = (num1, num2) => {
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
    console.log(numsArray);
}

orderAnArray(4,1);