'''
A ciphertext alphabet is obtained from the plaintext alphabet by means of rearranging some characters. 
For example "bacdef...xyz" will be a simple ciphertext alphabet where a and b are rearranged.

A substitution cipher is a method of encoding where each letter of the plaintext alphabet is 
replaced with the corresponding (i.e. having the same index) letter of some ciphertext alphabet.

Given two strings, check whether it is possible to obtain them from each other using some 
(possibly, different) substitution ciphers.

Example

For string1 = "aacb" and string2 = "aabc", the output should be
isSubstitutionCipher(string1, string2) = true.

Any ciphertext alphabet that starts with acb... would make this transformation possible.

For string1 = "aa" and string2 = "bc", the output should be
isSubstitutionCipher(string1, string2) = false.

Input/Output

[execution time limit] 4 seconds (py3)

[input] string string1

A string consisting of lowercase English characters.

Guaranteed constraints:
1 ≤ string1.length ≤ 10.

[input] string string2

A string consisting of lowercase English characters of the same length as string1.

Guaranteed constraints:
string2.length = string1.length.

[output] boolean
'''

def isSubstitutionCipher(string1, string2):
    if len(string1) != len(string2):
        return False
    visited = {}
    used = set()
    for i, char in enumerate(string1):
        if char in visited:
            if string2[i] != visited[char]:
                return False
        else:
            if string2[i] in used:
                return False
            used.add(string2[i])
            visited[char] = string2[i]
    return True

# string1 = "aacb"
# string2 = "aabc"
string1 = "aa"
string2 = "bc"
print(isSubstitutionCipher(string1, string2))