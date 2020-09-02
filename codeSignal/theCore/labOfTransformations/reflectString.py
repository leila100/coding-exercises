'''
Define an alphabet reflection as follows: a turns into z, b turns into y, c turns into x, ..., n 
turns into m, m turns into n, ..., z turns into a.

Define a string reflection as the result of applying the alphabet reflection to each of its characters.

Reflect the given string.

Example

For inputString = "name", the output should be
reflectString(inputString) = "mznv".

Input/Output

[execution time limit] 4 seconds (py3)

[input] string inputString

A string of lowercase characters.

Guaranteed constraints:
3 ≤ inputString.length ≤ 1000.

[output] string
'''

def reflectString(inputString):
    alphabet = ('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z')
    alphaIndexes = {}
    for i in range(len(alphabet)):
        alphaIndexes[alphabet[i]] = i
    solution = ""
    for i in range(len(inputString)):
        index = alphaIndexes[inputString[i]]
        solution += alphabet[-index-1]
    return solution

'''
def reflectString(inputString):
    return "".join([chr(ord('z') - ord(x) + ord('a')) for x in inputString])
'''

print(reflectString("name"))
print(reflectString("abyz"))
