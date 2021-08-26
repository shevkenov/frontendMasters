function isVowel(char) {
    return ['a','o','i','u','e'].includes(char.toLowerCase());
}

function countVowel(str) {
    return str.split('').reduce((acc, cur) => {
        if(isVowel(cur)){
            return ++acc;
        }

        return acc
    },0)
}

function countVowelRecursion(str) {
    if(str.length === 0) return 0;  
    const char = str[0];
    const count = isVowel(char) ? 1 : 0
    return count + countVowelRecursion(str.slice(1))
}

console.log(countVowel('The quick brown fox jumps over the lazy dog'))
console.log(countVowelRecursion('The quick brown fox jumps over the lazy dog'))