'''
Find the number of ways to express n as sum of some (at least two) consecutive positive integers.

Example

For n = 9, the output should be
isSumOfConsecutive2(n) = 2.

There are two ways to represent n = 9: 2 + 3 + 4 = 9 and 4 + 5 = 9.

For n = 8, the output should be
isSumOfConsecutive2(n) = 0.

There are no ways to represent n = 8.

Input/Output

[execution time limit] 4 seconds (py3)

[input] integer n

A positive integer.

Guaranteed constraints:
1 ≤ n ≤ 104.

[output] integer
'''
def isSumOfConsecutive2(n):
  num1 = 1
  num2 = 2
  sum = 3
  count = 0
  while sum <= n:
    while sum <= n:
        if sum == n:
            count += 1
            break; 
        num2 += 1
        sum += num2
    num1 += 1
    num2 = num1 + 1
    sum = num1 + num2
  return count

print(isSumOfConsecutive2(9))