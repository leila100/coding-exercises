'''
A little boy is studying arithmetics. He has just learned how to add two integers, 
written one below another, column by column. But he always forgets about the important part - carrying.

Given two integers, your task is to find the result which the little boy will get.

Note: The boy had learned from this site, so feel free to check it out too if you are 
not familiar with column addition.

Example

For param1 = 456 and param2 = 1734, the output should be
additionWithoutCarrying(param1, param2) = 1180.

   456
  1734
+ ____
  1180
The boy performs the following operations from right to left:

6 + 4 = 10 but he forgets about carrying the 1 and just writes down the 0 in the last column
5 + 3 = 8
4 + 7 = 11 but he forgets about the leading 1 and just writes down 1 under 4 and 7.
There is no digit in the first number corresponding to the leading digit of the second one, 
so the boy imagines that 0 is written before 456. Thus, he gets 0 + 1 = 1.
Input/Output

[execution time limit] 4 seconds (py3)

[input] integer param1

A non-negative integer.

Guaranteed constraints:
0 ≤ param1 < 105.

[input] integer param2

A non-negative integer.

Guaranteed constraints:
0 ≤ param2 < 6 · 104.

[output] integer

The result that the little boy will get by using column addition without carrying.
'''

def additionWithoutCarrying(param1, param2):
    solution = []
    arr1 = str(param1)
    arr2 = str(param2)
    
    n = len(arr1)
    m = len(arr2)
    if n > m:
        for i in range(n-m):
            solution.append(arr1[i])
        first = (n-m)
        second = 0
    elif m > n:
        for i in range(m-n):
            solution.append(arr2[i])
        first = 0
        second = (m-n)
    else:
        first = 0
        second = 0
        
    while first < n:
        result = (int(arr1[first]) + int(arr2[second])) % 10
        solution.append(str(result))
        first += 1
        second += 1
    return int("".join(solution))

param1 = 456
param2 = 1734

print(additionWithoutCarrying(param1, param2))