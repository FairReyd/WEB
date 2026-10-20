// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u) 
// на певний символ, наприклад *.

function replaceVowels(str) {
    const vowels = "aeiouAEIOU";
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            result += "*";
        } else {
            result += str[i];
        }
    }

    return result;
}

console.log(replaceVowels("hello world")); // "h*ll* w*rld"
console.log(replaceVowels("Javascript"));  // "J*v*scr*pt"

module.exports = replaceVowels;