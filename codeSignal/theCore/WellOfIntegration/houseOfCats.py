'''
There are some people and cats in a house. You are given the number of legs they have all together. 
Your task is to return an array containing every possible number of people that could be in the 
house sorted in ascending order. It's guaranteed that each person has 2 legs and each cat has 4 legs.

Example

For legs = 6, the output should be
houseOfCats(legs) = [1, 3].

There could be either 1 cat and 1 person (4 + 2 = 6) or 3 people (2 * 3 = 6).

For legs = 2, the output should be
houseOfCats(legs) = [1].

There can be only 1 person.

Input/Output

[execution time limit] 4 seconds (py3)

[input] integer legs

The total number of legs in the house. It's guaranteed,that this number is even.

Guaranteed constraints:
0 ≤ legs < 50.

[output] array.integer

Every possible number of people that can be in the house.
'''

def houseOfCats(legs):
    solution = []
    while legs >= 0:
        people = legs // 2
        solution.append(people)
        legs -= 4
    return sorted(solution)

print(houseOfCats(8))