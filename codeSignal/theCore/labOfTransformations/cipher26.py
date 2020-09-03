'''
You've intercepted an encrypted message, and you are really curious about its contents. You were able to find out that the message initially contained only lowercase English letters, and was encrypted with the following cipher:

Let all letters from 'a' to 'z' correspond to the numbers from 0 to 25, respectively.
The number corresponding to the ith letter of the encrypted message is then equal to the sum of numbers corresponding to the first i letters of the initial unencrypted message modulo 26.
Now that you know how the message was encrypted, implement the algorithm to decipher it.

Example

For message = "taiaiaertkixquxjnfxxdh", the output should be
cipher26(message) = "thisisencryptedmessage".

The initial message "thisisencryptedmessage" was encrypted as follows:

letter 0: t -> 19 -> t;
letter 1: th -> (19 + 7) % 26 -> 0 -> a;
letter 2: thi -> (19 + 7 + 8) % 26 -> 8 -> i;
etc.
Input/Output

[execution time limit] 4 seconds (py3)

[input] string message

An encrypted string containing only lowercase English letters.

Guaranteed constraints:
1 ≤ message.length ≤ 200.

[output] string

A decrypted message.
'''

def cipher26(message):
    alphabet = ('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z')
    digitNums = {}
    numsDigit = {}
    for i in range(len(alphabet)):
        digitNums[alphabet[i]] = i
        numsDigit[i] = alphabet[i]
    
    sumSoFar = 0
    solution = ""
    for char in message:
        num = digitNums[char]
        key = (num - sumSoFar) % 26
        solution += numsDigit[key]
        sumSoFar += key
    return solution

print(cipher26("taiaiaertkixquxjnfxxdh"))