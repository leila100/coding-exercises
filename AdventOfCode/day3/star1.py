'''
Opening the front panel reveals a jumble of wires. 
Specifically, two wires are connected to a central port and extend outward on a grid. 
You trace the path each wire takes as it leaves the central port, one wire per line of text 
(your puzzle input).
The wires twist and turn, but the two wires occasionally cross paths. 
To fix the circuit, you need to find the intersection point closest to the central port. 
Because the wires are on a grid, use the Manhattan distance for this measurement. 
While the wires do technically cross right at the central port where they both start, 
this point does not count, nor does a wire count as crossing with itself.
For example, if the first wire's path is R8,U5,L5,D3, then starting from the central port (o), 
it goes right 8, up 5, left 5, and finally down 3:

...........
...........
...........
....+----+.
....|....|.
....|....|.
....|....|.
.........|.
.o-------+.
...........
Then, if the second wire's path is U7,R6,D4,L4, it goes up 7, right 6, down 4, and left 4:
...........
.+-----+...
.|.....|...
.|..+--X-+.
.|..|..|.|.
.|.-X--+.|.
.|..|....|.
.|.......|.
.o-------+.
...........
These wires cross at two locations (marked X), but the lower-left one is closer to the central port: 
its distance is 3 + 3 = 6.
Here are a few more examples:
R75,D30,R83,U83,L12,D49,R71,U7,L72
U62,R66,U55,R34,D71,R55,D58,R83 = distance 159
R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
U98,R91,D20,R16,D67,R40,U7,R15,U6,R7 = distance 135
What is the Manhattan distance from the central port to the closest intersection?
'''
from math import *

def drawWire(matrix, wire, code):
    shortest_dist = None
    x = 0
    y = 0
    for direction in wire:
        value = int(direction[1:])
        print(f'going: {direction[0]} by value: {value}')
        if direction[0] == 'U':
            new_x = x + value
            new_y = y
        elif direction[0] == 'R':
            new_y = y + value
            new_x = x
        elif direction[0] == 'L':
            new_y = y - value
            new_x = x
        elif direction[0] == 'D':
            new_x = x - value
            new_y = y
        if new_x > x:
            for i in range(x, new_x + 1):
                if matrix[i][new_y] == 0:
                    matrix[i][new_y] = code
                elif matrix[i][new_y] != code:
                    matrix[i][new_y] = 'x'
                    dist = abs(i) + abs(new_y)
                    print(f'intersection at {i}{new_y},  dist: {dist}, matrix[x][y]: {matrix[i][new_y]}')
                    if dist != 0 and (shortest_dist is None or dist < shortest_dist):
                        shortest_dist = dist
        elif new_x < x:
            for i in range(x, new_x-1, -1):
                if matrix[i][new_y] == 0:
                    matrix[i][new_y] = code
                elif matrix[i][new_y] != code:
                    matrix[i][new_y] = 'x'
                    dist = abs(i) + abs(new_y)
                    print(f'intersection at {i}{new_y},  dist: {dist}, matrix[x][y]: {matrix[i][new_y]}')
                    if dist != 0 and (shortest_dist == None or dist < shortest_dist):
                        shortest_dist = dist
        elif new_y > y:
            for j in range(y, new_y + 1):
                if matrix[new_x][j] == 0:
                    matrix[new_x][j] = code
                elif matrix[new_x][j] != code:
                    matrix[new_x][j] = 'x'
                    dist = abs(new_x) + abs(j)
                    print(f'intersection at {new_x}{j},  dist: {dist}, matrix[x][y]: {matrix[new_x][j]}')
                    if dist != 0 and (shortest_dist == None or dist < shortest_dist):
                        shortest_dist = dist
        elif new_y < y:
            for j in range(y, new_y - 1, -1):
                if matrix[new_x][j] == 0:
                    matrix[new_x][j] = code
                elif matrix[new_x][j] != code:
                    matrix[new_x][j] = 'x'
                    dist = abs(new_x) + abs(j)
                    print(f'intersection at {new_x}{j}, dist: {dist}, matrix[x][y]: {matrix[new_x][j]}')
                    if dist != 0 and (shortest_dist == None or dist < shortest_dist):
                        shortest_dist = dist
        x = new_x
        y = new_y
    return shortest_dist

def findDistance(wire1, wire2):
    # build a matrix keeping track of the wires paths.
    # If there an intersection, record coordinates in list
    # split wire1 and wire2 into instructions
    wire1 = wire1.split(',')
    wire2 = wire2.split(',')
    n = 20000
    m = 20000
    matrix = [[0 for i in range(n)] for j in range(m)]
    answer1 = drawWire(matrix, wire1, '1')
    answer2 = drawWire(matrix, wire2, '2')
    print(f'answer1: {answer1}')
    print(f'answer2: {answer2}')
    # print(matrix)
    return answer2

# input1 = 'R8,U5,L5,D3'
# input2 = 'U7,R6,D4,L4'
# input1 = 'R75,D30,R83,U83,L12,D49,R71,U7,L72'
# input2 = 'U62,R66,U55,R34,D71,R55,D58,R83'
# input1 = 'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51'
# input2 = 'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7'
f = open("input.txt", "r")
input1 = f.readline()
input2 = f.readline()
answer = findDistance(input1, input2)
print(f'solution: {answer}')