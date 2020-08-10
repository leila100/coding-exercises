'''
Define an integer's roundness as the number of trailing zeroes in it.

Given an integer n, check if it's possible to increase n's roundness by swapping some pair of its digits.

Example

For n = 902200100, the output should be
increaseNumberRoundness(n) = true.

One of the possible ways to increase roundness of n is to swap digit 1 with digit 0 preceding it: roundness of 902201000 is 3, and roundness of n is 2.

For instance, one may swap the leftmost 0 with 1.

For n = 11000, the output should be
increaseNumberRoundness(n) = false.

Roundness of n is 3, and there is no way to increase it.
'''

def increaseNumberRoundness(n):
# Go through the number from right to left, 
# As soon as find a num that is not 0, check if next number is 0
#  if it is return true, else return false
    strN = str(n)
    for i in range(len(strN)-1, -1, -1):
        if strN[i] != '0':
            if '0' in strN[:i]:
                return True
            else:
                return False