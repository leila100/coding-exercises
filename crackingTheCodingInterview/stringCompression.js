/*
Implement a method to perform basic string compression using the counts of repeated 
characters. For example, the string aabcccccaaa would become a2b1c5a3. 
If the "compressed" string would not become smaller than the original string,
your method should return the original string.
You can assume the string has only uppercase and lowercase letters (a-z).
*/

compress = (str) => {
    let answer = "";
    let count = 0
    for (let i = 0; i < str.length; i++) {
        count++;
        if (i + 1 >= str.length || str[i] !== str[i + 1]) {
            answer += `${str[i]}${count}`;
            count = 0
        }
    }
    return answer.length >= str.length ? str : answer;
}

console.log(compress('aabcccccaaa'))
console.log(compress('abca'))