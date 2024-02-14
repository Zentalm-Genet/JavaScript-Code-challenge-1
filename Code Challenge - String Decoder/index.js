function decoder(code) {
    let decodedString = '';
    let skipCount = 0;

    for (let i = 0; i < code.length; i++) {
        if (isNaN(parseInt(code[i]))) {
            // If it's a letter, add it to the decoded string
            decodedString += code[i];
        } else {
            // If it's a number, calculate the skip count
            skipCount = parseInt(code[i]);
            // Move the pointer to the next letter
            i++;
            // Skip characters according to the skip count
            for (let j = 0; j < skipCount; j++) {
                i++;
            }
            // Add the letter to the decoded string
            decodedString += code[i];
        }
    }

    return decodedString;
}

// Test cases

console.log(decoder('0h2xce5ngbrdy')); // 'hey'
console.log(decoder('3vdfn')); // 'n'
console.log(decoder('0r')); // 'r'
console.log(decoder('2bna0p1mp2osl0e')); // 'apple'
console.log(decoder('0y4akjfe0s')); // 'yes'
