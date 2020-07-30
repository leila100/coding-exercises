'''
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order 
(ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding 
outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
'''

def nextPermutation(nums):
        """
        Do not return anything, modify nums in-place instead.
        """
#         1 - Find the index of the number that break the increasing pattern from right to left
        swapIdx = -1
        for idx in range(len(nums)-1, 0, -1):
          if nums[idx] > nums[idx-1]:
            swapIdx = idx-1
            break
        
          # If none, return reverse of nums
        if swapIdx == -1:
          nums.reverse()
          return
#         2 - Find the number to the right of that index that is the smallest number still greater that that number. Swap the two numbers
        for i in range(len(nums)-1, 0, -1):
          if nums[i] > nums[idx-1]:
            nums[i], nums[swapIdx] = nums[swapIdx], nums[i]
            break

#         3 - Reverse the rest of the numbers to the right of the index
        nums[swapIdx+1:] = nums[len(nums)-1:swapIdx:-1]

nums = [3, 2, 1]
nextPermutation(nums)
print(nums)