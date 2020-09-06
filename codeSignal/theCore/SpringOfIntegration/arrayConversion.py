'''
Given an array of 2k integers (for some integer k), perform the following operations 
until the array contains only one element:

On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product.
After the algorithm has finished, there will be a single element left in the array. Return that element.

Example

For inputArray = [1, 2, 3, 4, 5, 6, 7, 8], the output should be
arrayConversion(inputArray) = 186.

We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186], so the answer is 186.

Input/Output

[execution time limit] 4 seconds (py3)

[input] array.integer inputArray

Guaranteed constraints:
1 ≤ inputArray.length ≤ 27,
-100 ≤ inputArray[i] ≤ 100.

[output] integer
'''

def arrayConversion(inputArray):
    iteration = 1
    arr = inputArray[:]
    while len(arr) > 1:
        i = 0
        temp = []
        if iteration % 2 == 0:
            while i < len(arr)-1:
                prod = arr[i] * arr[i+1]
                temp.append(prod)
                i += 2
        else:
            while i < len(arr)-1:
                prod = arr[i] + arr[i+1]
                temp.append(prod)
                i += 2
        if len(arr) % 2 == 1:
            temp.append(arr[-1])
        arr = temp
        iteration += 1
    return arr[0]

# inputArray = [1, 2, 3, 4, 5, 6, 7, 8]
# inputArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
inputArray = [1, 2, 3, 4, 5]
print(arrayConversion(inputArray))