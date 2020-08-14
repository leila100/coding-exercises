'''
Determine if the given number is a power of some non-negative integer.

Example

For n = 125, the output should be
isPower(n) = true;
For n = 72, the output should be
isPower(n) = false.
Input/Output

[execution time limit] 4 seconds (py3)

[input] integer n

A positive integer.

Guaranteed constraints:
1 ≤ n ≤ 400.

[output] boolean

true if n can be represented in the form ab (a to the power of b) 
where a and b are some non-negative integers and b ≥ 2, false otherwise.
'''

def isPower(n):
    if n <= 1:
        return True
    num1 = 2
    num2 = 2
    while pow(num1, num2) <= n:
        while pow(num1, num2) <= n:
            if pow(num1, num2) == n:
                return True
            num2 += 1
        num2 = 2
        num1 += 1
    return False

print(isPower(125))