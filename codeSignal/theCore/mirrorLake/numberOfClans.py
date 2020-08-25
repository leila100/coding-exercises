'''
Let's call two integers A and B friends if each integer from the array divisors 
is either a divisor of both A and B or neither A nor B. If two integers are friends, 
they are said to be in the same clan. How many clans are the integers from 1 to k, inclusive, broken into?

Example

For divisors = [2, 3] and k = 6, the output should be
numberOfClans(divisors, k) = 4.

The numbers 1 and 5 are friends and form a clan, 2 and 4 are friends and form a clan, 
and 3 and 6 do not have friends and each is a clan by itself. So the numbers 1 through 6 are broken into 4 clans.

Input/Output

[execution time limit] 4 seconds (py3)

[input] array.integer divisors

A non-empty array of positive integers.

Guaranteed constraints:
2 ≤ divisors.length < 10,
1 ≤ divisors[i] ≤ 10.

[input] integer k

A positive integer.

Guaranteed constraints:
5 ≤ k ≤ 10.

[output] integer
'''

def numberOfClans(divisors, k):
    '''
    For the integers 1 to k inclusive, those that share the same divisors from the array divisors belong to the same clan.
    '''
    divs = {}
    clans = {}
    for num in range(1, k+1):
        for div in divisors:
            if num % div == 0:
                if num not in divs:
                    divs[num] = ""    
                divs[num] += str(div) + "-"
        if num in divs: 
            if divs[num] not in clans:
                clans[divs[num]] = set()
            clans[divs[num]].add(num)
        else:
            if "empty" not in clans:
                clans["empty"] = set()
            clans["empty"].add(num)

    return len(clans.keys())


# def numberOfClans(divisors, k):
#     return len(set([tuple([x%y==0 for y in divisors]) for x in range(1,k+1)]))


divisors = [2, 3]
k = 6
print(numberOfClans(divisors, k))