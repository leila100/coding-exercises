'''
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

Input/Output

[execution time limit] 4 seconds (py3)

[input] array.string inputArray

A non-empty array.

Guaranteed constraints:
1 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 10.

[output] array.string

Array of the longest strings, stored in the same order as in the inputArray.
'''

def allLongestStrings(inputArray):
    lengths = {}
    maxLength = 0
    for string in inputArray:
        length = len(string)
        if length in lengths:
            lengths[length].append(string)
        else:
            lengths[length] = [string]
        if length > maxLength:
            maxLength = length
    return lengths[maxLength]

'''
def allLongestStrings(inputArray):
    return [x for x in inputArray if len(x)==max(map(len,inputArray))]
'''

inputArray = ["aba",  "aa",  "ad",  "vcd",  "aba"]
print(allLongestStrings(inputArray))