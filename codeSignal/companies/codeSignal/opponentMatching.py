'''
When you click the VS Fight button on CodeSignal, the system tries to match you with the best opponent possible. 
The matching algorithm has become more complex over time,but initially it was a simple search for someone whose 
xp is as close to yours as possible.

The easiest way to understand how it used to conduct the search is as follows:

- Imagine that each user looking for an opponent is standing at the center of a search circle on a horizontal xp axis.
- All the search circles have the same radius (the search radius), and initially search radius is equal to 0.
- At each step, the search radius is increased by 1.
- A match is found as soon as two search circles intersect. These circles are then removed immediately.
- For the sake of simplicity, assume that on each step no more than one pair of circles can intersect.

Given a list of requests as user xps, match them up using the algorithm described above.

Example
For xp = [200, 100, 70, 130, 100, 800, 810], the output should be
opponentMatching(xp) = [[1, 4], [5, 6], [2, 3]].

Initially, search ranges for users 1 and 4 (these are their IDs equal to 0-based indices) coincide, so they form the first pair.
After 5 steps search circles of users 5 and 6 intersect. Thus, they form the second pair.
After 25 more steps search circles of users 2 and 3 intersect. Thus, they form the third pair.
Finally, user 0 remains without an opponent.
Input/Output

[execution time limit] 4 seconds (py3)

[input] array.integer xp

Array of positive integers.
xp[i] equals XP points earned by the user with ID = i.

Guaranteed constraints:
1 ≤ xp.length ≤ 15,
1 ≤ xp[i] ≤ 109.

[output] array.array.integer

Array of pairs of opponents. Pairs should be stored in the same order as they were formed by the above-described algorithm. 
Elements in pairs should be sorted according to their IDs.
'''

def opponentMatching(xp):
    if len(xp) <= 1:
        return []
    # sort the xp list by keeping the index for each xp
    xpSorted = sorted([(x, i) for i,x in enumerate(xp)], key= lambda x: x[0])
    solution = []
    # go through xpSorted, for each pair, find difference. 
    # Find smalest difference, add pair to solution, remove pair from xpSorted
    # Do it again until xpSorted is empty or only one element
    while len(xpSorted) > 1:
        diff = None
        pair = None
        for i in range(len(xpSorted)-1):
            difference = xpSorted[i+1][0] - xpSorted[i][0]
            if diff is None or difference < diff:
                diff = difference
                pair = [i, i+1]
        sortedPair = [xpSorted[pair[0]][1], xpSorted[pair[1]][1]]
        sortedPair.sort()
        solution.append(sortedPair)
        xpSorted.pop(pair[1])
        xpSorted.pop(pair[0])
    return solution

xp = [200, 100, 70, 130, 100, 800, 810]
print(opponentMatching(xp))