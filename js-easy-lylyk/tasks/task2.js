// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] < '0' || str[i] > '9') {
            result += str[i];
        }
    }

    return result;
}

console.log(reverseWithoutNumbers("hello123world456")); // "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz"));        // "zyxabc"

module.exports = reverseWithoutNumbers;