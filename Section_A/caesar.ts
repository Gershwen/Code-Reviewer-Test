//TypeScript Type: Alphabet
//When declaring a type you do so next to the variable or parameter
// type Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Function: Caesar Cipher

//try to give your arguments more discriptive names. Like changing string to caesarcipherstring
//make use of camelCase to declare your functions eg. caesarCipher
const caesar_cipher = (string: string, shift: number) => {
    // Alphabet
    const alphabet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Encoded Text
    //good use of camelcase
    let encodedText: string = '';

    //please add a comment here to decsribe what this conditional statement does
    if (shift > 26) {

        shift = shift % 26;
    }

    //mention that i refers to an index 
    let i: number = 0;

    while (i < string.length) {
        // Valid Alphabet Characters - good attempt. Try to be more descriptive in your comments
        if (alphabet.indexOf(string[i]) !== -1) {
            // Find Alphabet Index
            const alphabetIndex: number = alphabet.indexOf((string[i]).toUpperCase());

            // Alphabet Index Is In Alphabet Range
            if (alphabet[alphabetIndex + shift]) {
                // Append To String
                encodedText += alphabet[alphabetIndex + shift];
            }
            // Alphabet Index Out Of Range (Adjust Alphabet By 26 Characters)
            else {
                // Append To String
                encodedText += alphabet[alphabetIndex + shift - 26];
            }
        }
        // Special Characters
        else {
            // Append To String
            encodedText += string[i];
        }

        // Increase I - be more descriptive. what does increasing i do? 
        i++;
    }

    return encodedText;
};

//printing the output to terminal to test for correct output
//should print THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.
// print(caesar_cipher('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.', 39));
// console.log should be used instead of print in TypeScript
console.log(caesar_cipher('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.', 39));

