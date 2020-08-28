'''
Given a positive integer number and a certain length, 
we need to modify the given number to have a specified length. 
We are allowed to do that either by cutting out leading digits 
(if the number needs to be shortened) or by adding 0s in front 
of the original number.

Example

For number = 1234 and width = 2, the output should be
integerToStringOfFixedWidth(number, width) = "34";
For number = 1234 and width = 4, the output should be
integerToStringOfFixedWidth(number, width) = "1234";
For number = 1234 and width = 5, the output should be
integerToStringOfFixedWidth(number, width) = "01234".
Input/Output

[execution time limit] 4 seconds (py3)

[input] integer number

A non-negative integer.

Guaranteed constraints:
0 ≤ number ≤ 109.

[input] integer width

A positive integer representing the desired length.

Guaranteed constraints:
1 ≤ width ≤ 50.

[output] string

The modified version of number as described above.
'''
def integerToStringOfFixedWidth(number, width):
    numStr = str(number)
    length = len(numStr)
    if length >= width:
        return numStr[length-width:]
    addedZeros = "".join(['0' for x in range(width - length)])
    return addedZeros + numStr

print(integerToStringOfFixedWidth(1234, 5))
print(integerToStringOfFixedWidth(1234, 2))