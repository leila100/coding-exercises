'''
You are given two strings s and t of the same length, consisting of uppercase English letters. 
Your task is to find the minimum number of "replacement operations" needed to get some anagram of the string t 
from the string s. A replacement operation is performed by picking exactly one character from the string s and 
replacing it by some other character.

Anagram: А string x is an anagram of a string y if one can get y by rearranging the letters of x. 
For example, the strings "MITE" and "TIME" are anagrams, so are "BABA" and "AABB", 
but "ABBAC" and "CAABA" are not.

Example

For s = "AABAA" and t = "BBAAA", the output should be
createAnagram(s, t) = 1;
For s = "OVGHK" and t = "RPGUC", the output should be
createAnagram(s, t) = 4.
Input/Output

[execution time limit] 4 seconds (py3)

[input] string s

Guaranteed constraints:
5 ≤ s.length ≤ 35.

[input] string t

Guaranteed constraints:
t.length = s.length.

[output] integer

The minimum number of replacement operations needed to get an anagram of the string t from the string s.
'''
def createAnagram(s, t):
    count = 0
    chars = {}
    for char in s:
        if char in chars:
            chars[char] += 1
        else:
            chars[char] = 1
    for char in t:
        if char in chars:
            if chars[char] == 0:
                count += 1
            else:
                chars[char] -= 1
        else:
            count += 1
    return count

print(createAnagram("AABAA", "BBAAA"))
print(createAnagram("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB", "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC"))
print(createAnagram("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZY", "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYZ"))