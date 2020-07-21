'''
Given a sorted integer array, return sum of array so that each element is unique by 
adding some numbers to duplicate elements so that sum of unique elements is minimum.

I.e., if all elements in the array are unique, return the sum. 
If some elements are duplicates, then increment them to make sure all elements are 
unique so that the sum of these unique elements is minimum.

Some examples:

input1[] = { 2, 3, 4, 5 } => return 19 = 2+3+4+5 (all elements are unique, so just add them up)
input2[] = { 1, 2, 2 } => return 6 = 1+2+3 (index 2 is duplicate, so increment it)
input3[] = { 2, 2, 4, 5 } => return 14 = 2+3+4+5 (index 1 is duplicate, so increment it)
'''

def minUniqueSum(arr):
    # noDups = {}
    # for i in range(len(arr)):
    #     if arr[i] in noDups:
    #         add = 1
    #         while (arr[i] + add) in noDups:
    #             add += 1 
    #         noDups[arr[i] + add] = 1
    #     else:
    #         noDups[arr[i]] = 1
    # print(noDups)
    # return sum(noDups.keys())

    sum = arr[0] 
    prev = arr[0] 
    n = len(arr)
  
    for i in range(1, n): 
  
        # If violation happens, make current 
        # value as 1 plus previous value and 
        # add to sum. 
        if arr[i] <= prev: 
            prev = prev + 1
            sum = sum + prev 
  
        # No violation. 
        else : 
            sum = sum + arr[i] 
            prev = arr[i] 
  
    return sum
    

arr = [2, 2, 4 , 5, 5, 6]
# arr = [2, 2 , 4 ,5]
# arr = [1, 2, 2]
# arr = [1, 2, 4, 4, 7, 7, 8]
# arr = [20, 20]
print(minUniqueSum(arr))