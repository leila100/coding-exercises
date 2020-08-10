'''
We want to turn the given integer into a number that has only one non-zero digit using a tail rounding approach. 
This means that at each step we take the last non 0 digit of the number and round it to 0 or to 10. 
If it's less than 5 we round it to 0 if it's larger than or equal to 5 we round it to 10 
(rounding to 10 means increasing the next significant digit by 1). 
The process stops immediately once there is only one non-zero digit left.

Example

For n = 15, the output should be
rounders(n) = 20;

For n = 1234, the output should be
rounders(n) = 1000.

1234 -> 1230 -> 1200 -> 1000.

For n = 1445, the output should be
rounders(n) = 2000.

1445 -> 1450 -> 1500 -> 2000.
'''

def rounders(n):
    nList = [int(x) for x in str(n)]
    idx = len(nList)-1
    while idx > 0:
        if nList[idx] < 5:
            nList[idx] = 0
        else:
            nList[idx] = 0
            nList[idx-1] += 1
        idx -= 1
    return int("".join([str(x) for x in nList]))