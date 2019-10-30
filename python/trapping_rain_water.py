'''
Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it is able to trap after raining.
example:
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
'''

def trap(height):
    """
    :type height: List[int]
    :rtype: int
    """
    
    l, r = 0, len(height) - 1
    left_max, right_max = 0, 0
    total_volume = 0
    while l <= r:
        left_max = max(height[l], left_max)
        right_max = max(height[r], right_max)

        if left_max < right_max:
            total_volume += (left_max - height[l])
            l +=1

        elif left_max >= right_max:
            total_volume += (right_max - height[r])
            r -=1

    return total_volume

print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))