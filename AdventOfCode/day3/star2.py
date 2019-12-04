'''
It turns out that this circuit is very timing-sensitive; you actually need to minimize the signal delay.

To do this, calculate the number of steps each wire takes to reach each intersection; 
choose the intersection where the sum of both wires' steps is lowest. If a wire visits 
a position on the grid multiple times, use the steps value from the first time it visits 
that position when calculating the total value of a specific intersection.

The number of steps a wire takes is the total number of grid squares the wire has entered to 
get to that location, including the intersection being considered. Again consider the example 
from above:

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
In the above example, the intersection closest to the central port is reached after 
8+5+5+2 = 20 steps by the first wire and 7+6+4+3 = 20 steps by the second wire for a total of 
20+20 = 40 steps.
However, the top-right intersection is better: the first wire takes only 
8+5+2 = 15 and the second wire takes only 7+6+2 = 15, a total of 15+15 = 30 steps.

Here are the best steps for the extra examples from above:
R75,D30,R83,U83,L12,D49,R71,U7,L72
U62,R66,U55,R34,D71,R55,D58,R83 = 610 steps
R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
U98,R91,D20,R16,D67,R40,U7,R15,U6,R7 = 410 steps
What is the fewest combined steps the wires must take to reach an intersection?
'''

from math import *

def buildMatrix(matrix, wire, code):
    x = 0
    y = 0
    for direction in wire:
        value = int(direction[1:])
        # print(f'going: {direction[0]} by value: {value}')
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
                elif matrix[i][new_y] != code and i!=0 and new_y!=0:
                    matrix[i][new_y] = 'x'
        elif new_x < x:
            for i in range(x, new_x-1, -1):
                if matrix[i][new_y] == 0:
                    matrix[i][new_y] = code
                elif matrix[i][new_y] != code and i!=0 and new_y!=0:
                    matrix[i][new_y] = 'x'
        elif new_y > y:
            for j in range(y, new_y + 1):
                if matrix[new_x][j] == 0:
                    matrix[new_x][j] = code
                elif matrix[new_x][j] != code and j!=0 and new_x!=0:
                    matrix[new_x][j] = 'x'
        elif new_y < y:
            for j in range(y, new_y - 1, -1):
                if matrix[new_x][j] == 0:
                    matrix[new_x][j] = code
                elif matrix[new_x][j] != code and j!=0 and new_x!=0:
                    matrix[new_x][j] = 'x'
        x = new_x
        y = new_y

def findPaths(wire, matrix, collisions):
    # path = []
    visited = set()
    x = 0
    y = 0
    step = 0
    for direction in wire:
        value = int(direction[1:])
        # print(f'going: {direction[0]} by value: {value}, step: {step}')
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
                if matrix[i][new_y] == 'x' and (i, new_y) not in visited:
                    # path.append(step)
                    coord = f'{i}&{new_y}'
                    if coord not in collisions:
                        collisions[coord] = [step]
                    else:
                        collisions[coord].append(step)
                    step+=1
                elif (i, new_y) not in visited:
                    step += 1
                visited.add((i, new_y))
        elif new_x < x:
            for i in range(x, new_x-1, -1):
                if matrix[i][new_y] == 'x' and (i, new_y) not in visited:
                    # path.append(step)
                    coord = f'{i}&{new_y}'
                    if coord not in collisions:
                        collisions[coord] = [step]
                    else:
                        collisions[coord].append(step)
                    step+=1
                elif (i, new_y) not in visited:
                    step += 1
                visited.add((i, new_y))
        elif new_y > y:
            for j in range(y, new_y + 1):
                if matrix[new_x][j] == 'x' and (new_x, j) not in visited:
                    # path.append(step)
                    coord = f'{new_x}&{j}'
                    if coord not in collisions:
                        collisions[coord] = [step]
                    else:
                        collisions[coord].append(step)
                    step+=1
                elif (new_x, j) not in visited:
                    step += 1
                visited.add((new_x, j))
        elif new_y < y:
            for j in range(y, new_y - 1, -1):
                if matrix[new_x][j] == 'x' and (new_x, j) not in visited:
                    # path.append(step)
                    coord = f'{new_x}&{j}'
                    if coord not in collisions:
                        collisions[coord] = [step]
                    else:
                        collisions[coord].append(step)
                    step+=1
                elif (new_x, j) not in visited:
                    step += 1
                visited.add((new_x, j))
        x = new_x
        y = new_y
    # return path

def getFewestStepsToX(wire1, wire2):
    wire1 = wire1.split(',')
    wire2 = wire2.split(',')
    n = 20000
    # m = 500
    m = 20000
    matrix = [[0 for i in range(n)] for j in range(m)]
    collisions = {}
    buildMatrix(matrix, wire1, '1')
    buildMatrix(matrix, wire2, '2')
    findPaths(wire1, matrix, collisions)
    findPaths(wire2, matrix, collisions)
    print(f'collisions: {collisions}')
    minSteps = None
    for steps in collisions:
        stepsTotal = collisions[steps][0] + collisions[steps][1]
        print(f'steps Total: {stepsTotal}')
        if minSteps is None or stepsTotal < minSteps:
            minSteps = stepsTotal
    return minSteps

# input1 = 'R8,U5,L5,D3'
# input2 = 'U7,R6,D4,L4'
# input1 = 'R75,D30,R83,U83,L12,D49,R71,U7,L72'
# input2 = 'U62,R66,U55,R34,D71,R55,D58,R83'
# input1 = 'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51'
# input2 = 'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7'
f = open("input.txt", "r")
input1 = f.readline()
input2 = f.readline()
print(getFewestStepsToX(input1, input2))