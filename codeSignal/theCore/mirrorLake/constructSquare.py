'''
Given a string consisting of lowercase English letters, find the largest square number which 
can be obtained by reordering the string's characters and replacing them with any digits you need 
(leading zeros are not allowed) where same characters always map to the same digits and different 
characters always map to different digits.

If there is no solution, return -1.

Example

For s = "ab", the output should be
constructSquare(s) = 81.
The largest 2-digit square number with different digits is 81.
For s = "zzz", the output should be
constructSquare(s) = -1.
There are no 3-digit square numbers with identical digits.
For s = "aba", the output should be
constructSquare(s) = 900.
It can be obtained after reordering the initial string into "baa" and replacing "a" with 0 and "b" with 9.
Input/Output

[execution time limit] 4 seconds (py3)

[input] string s

Guaranteed constraints:
1 ≤ s.length < 10.

[output] integer
'''

def getSquareNum(n):
    nums = []
    for digitNum in range(10**10):
        square = digitNum*digitNum
        if square >= 10**(n-1) and square < 10**n:
            nums.append(square)
        if square >= 10**n:
            return nums
    return nums
        
def getFrequencies(s):
    freq = {}
    for i, char in enumerate(s):
        if char in freq:
            freq[char] += 1
        else:
            freq[char] = 1
    return freq
        
def constructSquare(s):
    s = sorted(s)
    possible = -1
    squares = getSquareNum(len(s))
    freq = getFrequencies(s)
    frequencies = sorted(freq.values())
    for square in squares[::-1]:
        freqSquare = sorted(getFrequencies(str(square)).values())
        if "".join([str(x) for x in freqSquare]) == "".join([str(x) for x in frequencies]):
            return square
    return -1
    
'''
    p = len(s)
    d_max = int((10**p)**.5)
    d_min = int((10**(p-1))**.5)
    for d in range(d_max, d_min-1, -1):
        n = str(d * d)
        if sorted(s.count(c) for c in set(s)) == sorted(n.count(c) for c in set(n)):
            return int(n)
    return -1    
'''