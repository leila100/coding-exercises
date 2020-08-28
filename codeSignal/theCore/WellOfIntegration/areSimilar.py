'''
Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

Example

For a = [1, 2, 3] and b = [1, 2, 3], the output should be
areSimilar(a, b) = true.

The arrays are equal, no need to swap any elements.

For a = [1, 2, 3] and b = [2, 1, 3], the output should be
areSimilar(a, b) = true.

We can obtain b from a by swapping 2 and 1 in b.

For a = [1, 2, 2] and b = [2, 1, 1], the output should be
areSimilar(a, b) = false.

Any swap of any two elements either in a or in b won't make a and b equal.

Input/Output

[execution time limit] 4 seconds (py3)

[input] array.integer a

Array of integers.

Guaranteed constraints:
3 ≤ a.length ≤ 105,
1 ≤ a[i] ≤ 1000.

[input] array.integer b

Array of integers of the same length as a.

Guaranteed constraints:
b.length = a.length,
1 ≤ b[i] ≤ 1000.

[output] boolean

true if a and b are similar, false otherwise.
'''

def areSimilar(a, b):
    if len(a) != len(b):
        return False
    if len(a) == 0:
        return False
        
    first = None
    second = None
    for i, num in enumerate(a):
        if num != b[i]:
            if first is None:
                first = (num, b[i])
            else:
                if second is None:
                    if first != (b[i], num):
                        return False
                    second = (b[i], num)
                else:
                    return False
    return True

a = [3, 2, 3]
b = [2, 1, 3]
print(areSimilar(a, b))
a1 = [1, 2, 3]
b1 = [2, 1, 3]
print(areSimilar(a1, b1))