function hasMoreVowels(word) {
    const vowels =  ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let vowelCount = [];

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            vowelCount.push(word[i]);
        } 
    }
    
    if (vowelCount.length > (word.length / 2)) {
        return true;
    } else {
        return false;
    }
}

// Test cases
console.log(hasMoreVowels('moose'));  // true
console.log(hasMoreVowels('mice'));   // false
console.log(hasMoreVowels('graph'));  // false
console.log(hasMoreVowels('yay'));    // false
console.log(hasMoreVowels('Aal'));    // true
