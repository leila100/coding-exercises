'''
Consider the following ciphering algorithm:

For each character replace it with its code.
Concatenate all of the obtained numbers.
Given a ciphered string, return the initial one if it is known that it consists 
only of lowercase letters.

Note: here the character's code means its decimal ASCII code, the numerical 
representation of a character used by most modern programming languages.

Example

For cipher = "10197115121", the output should be
decipher(cipher) = "easy".

Explanation: charCode('e') = 101, charCode('a') = 97, charCode('s') = 115 and charCode('y') = 121.

Input/Output

[execution time limit] 4 seconds (py3)

[input] string cipher

A non-empty string which is guaranteed to be a cipher for some other string of lowercase letters.

Guaranteed constraints:
2 ≤ cipher.length ≤ 100.

[output] string
'''

def decipher(cipher):
    alphabet = ('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z')
    alphabeOrd = {}
    for letter in alphabet:
        alphabeOrd[ord(letter)] = letter
    solution = ""
    currentCode = ""
    for num in cipher:
        currentCode += num
        if int(currentCode) in alphabeOrd:
            solution += alphabeOrd[int(currentCode)]
            currentCode = ""
    return solution

'''
def decipher(cipher):
    cipher = cipher.replace('97', '097').replace('98', '098').replace('99', '099')
    return ''.join(chr(int(cipher[i:i+3])) for i in range(0, len(cipher), 3))
'''

cipher = "10197115121"
print(decipher(cipher))