//TypeScript Type: Alphabet
// type Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// Function: Caesar Cipher
var caesar_cipher = function (string, shift) {
    // Alphabet
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // Encoded Text
    var encodedText = '';
    if (shift > 26) {
        shift = shift % 26;
    }
    var i = 0;
    while (i < string.length) {
        // Valid Alphabet Characters
        if (alphabet.indexOf(string[i]) !== -1) {
            // Find Alphabet Index
            var alphabetIndex = alphabet.indexOf((string[i]).toUpperCase());
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
        // Increase I
        i++;
    }
    return encodedText;
};
//printing the output to terminal to test for correct output
//should print THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.
// print(caesar_cipher('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.', 39));
console.log(caesar_cipher('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.', 39));
// console.log should be used instead of print
