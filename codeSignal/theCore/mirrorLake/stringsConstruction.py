'''
Given two strings a and b, both consisting only of lowercase English letters, 
your task is to calculate how many strings equal to a can be constructed using only 
letters from the string b? Each letter can be used only once and in one string only.

Example

For a = "abc" and b = "abccba", the output should be stringsConstruction(a, b) = 2.

We can construct 2 strings a = "abc" using only letters from the string b.

For a = "ab" and b = "abcbcb", the output should be stringsConstruction(a, b) = 1.

Input/Output

[execution time limit] 4 seconds (py3)

[input] string a

String to construct, containing only lowercase English letters.

Guaranteed constraints:
1 ≤ a.length ≤ 105.

[input] string b

String containing needed letters, containing only lowercase English letters.

Guaranteed constraints:
1 ≤ b.length ≤ 105.

[output] integer

The number of strings a that can be constructed from the string b.
'''

def stringsConstruction(a, b):
    aChars = {}
    bChars = {}
    for char in a:
        if char in aChars:
            aChars[char] += 1
        else:
            aChars[char] = 1
    for char in b:
        if char in bChars:
            bChars[char] += 1
        else:
            bChars[char] = 1
    if a[0] not in bChars:
        return 0
    result = bChars[a[0]] // aChars[a[0]]  
    for char in a:
        aCnt = aChars[char]
        if char not in bChars:
            return 0
        bCnt = bChars[char]
        count = bCnt // aCnt
        if count < result:
            result = count
    return result;

a = "abc"
b = "abccba"
print(stringsConstruction(a, b))