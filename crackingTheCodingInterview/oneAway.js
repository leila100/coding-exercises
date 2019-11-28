/*
There are three types of edits that can be performed on strings:
insert a character, remove a character, or replace a character.
Given two strings, write a function to check 
if they are one edit (or zero edits) away
Example:
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false
*/

oneAway = (str1, str2) => {
    let answer;
    const len1 = str1.length;
    const len2 = str2.length;
    if (len1 === len2) return oneReplace(str1, str2);
    else if (len1 + 1 === len2) return oneInsert(str1, str2)
    else if (len2 + 1 === len1) return oneInsert(str2, str1)
    return false;
}

oneReplace = (str1, str2) => {
    let diff;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            if (diff === true) return false
            diff = true
        }
    }
    return true;
}

oneInsert = (str1, str2) => {
    console.log(str1, str2)
    let diff;
    let i = 0;
    let j = 0;
    while (i < str1.length && j < str2.length) {
        console.log(str1[i], str2[j])
        if (str1[i] !== str2[j]) {
            if (diff === true) return false
            j++;
            diff = true;
        }
        else {
            i++;
            j++;
        }
    }
    return true;
}

console.log(oneAway('pales', 'pale'))