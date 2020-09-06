'''
Given array of integers, for each position i, search among the previous positions 
for the last (from the left) position that contains a smaller value. 
Store this value at position i in the answer. 
If no such value can be found, store -1 instead.

Example

For items = [3, 5, 2, 4, 5], the output should be
arrayPreviousLess(items) = [-1, 3, -1, 2, 4].

Input/Output

[execution time limit] 4 seconds (py3)

[input] array.integer items

Non-empty array of positive integers.

Guaranteed constraints:
3 ≤ items.length ≤ 15,
1 ≤ items[i] ≤ 200.

[output] array.integer

Array containing answer values computed as described above.
'''

def arrayPreviousLess(items):
    if len(items) == 0:
        return []
    prev = items[0]
    currentMin = items[0]
    solution = [-1]
    for i, num in enumerate(items[1:]):
        if num > prev:
            solution.append(prev)
        elif num == prev:
            solution.append(solution[-1])
        else:
            #  if less than the current min, don't bother looking for the number less than num
            if num < currentMin:
                solution.append(-1)
                currentMin = num
            else:
                found = -1
                for i in range(len(solution)-1, -1, -1):
                    if solution[i] < num:
                        found = solution[i]
                        break;
                solution.append(found)
        prev = num
    return solution

print(arrayPreviousLess([3, 5, 2, 4, 5]))
print(arrayPreviousLess([2, 2, 1, 3, 4, 5, 5, 3]))