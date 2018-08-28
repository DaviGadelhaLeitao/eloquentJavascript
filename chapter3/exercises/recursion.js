function isEven(number) {
    let even = false;
    if(number < 0) {
        result = "Negative number";
        return result;
    }
    if(number == 1) {
        return false;
    } else if(number == 0) {
        return true;
    }

    number -= 2;
    var result = isEven(number);

    return result;
}

console.log(isEven(10));