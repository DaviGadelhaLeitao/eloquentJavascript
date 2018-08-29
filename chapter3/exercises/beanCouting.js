function countCharacter(word, character) {
    let numberOfBs = 0;
    const wordLength = word.length;
    for(let i = 0; i < wordLength; i++) {
        if(word.charAt(i) === character) numberOfBs += 1;
    }
    return numberOfBs;
}

console.log(countCharacter('daBBBBBvBBBBBibBBBBB', 'b'));