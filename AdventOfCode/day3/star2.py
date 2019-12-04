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

def buildPath(wire, path, code):
    steps = 0
    coord = (0, 0)
    x_coord = 0
    y_coord = 0
    for direction in wire:
        new_coord = (x_coord, y_coord)
        value = int(direction[1:])
        if direction[0] == 'U':
            for step in range(value):
                steps += 1
                x_coord -= 1
                cell = f'{x_coord}&{y_coord}'
                if cell not in path:
                    path[cell] = [code, steps]
                elif path[cell][0] != code:
                    path[cell].append(steps)
        if direction[0] == 'D':
            for step in range(value):
                steps += 1
                x_coord += 1
                cell = f'{x_coord}&{y_coord}'
                if cell not in path:
                    path[cell] = [code, steps]
                elif path[cell][0] != code:
                    path[cell].append(steps)
        if direction[0] == 'L':
            for step in range(value):
                steps += 1
                y_coord -= 1
                cell = f'{x_coord}&{y_coord}'
                if cell not in path:
                    path[cell] = [code, steps]
                elif path[cell][0] != code:
                    path[cell].append(steps)
        if direction[0] == 'R':
            for step in range(value):
                steps += 1
                y_coord += 1
                cell = f'{x_coord}&{y_coord}'
                if cell not in path:
                    path[cell] = [code, steps]
                elif path[cell][0] != code:
                    path[cell].append(steps)

def getPaths(wire1, wire2):
    path = {}
    buildPath(wire1, path, 1)
    buildPath(wire2, path, 2)
    # print(f'path: {path}')
    min_steps = 10000
    for cell in path:
        current_cell = path[cell]
        if len(current_cell) == 3:
            steps_taken = current_cell[1] + current_cell[2]
            if steps_taken < min_steps:
                min_steps = steps_taken
    return min_steps

# input1 = 'R8,U5,L5,D3'.split(',')
# input2 = 'U7,R6,D4,L4'.split(',')
# input1 = 'R75,D30,R83,U83,L12,D49,R71,U7,L72'.split(',')
# input2 = 'U62,R66,U55,R34,D71,R55,D58,R83'.split(',')
# input1 = 'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51'.split(',')
# input2 = 'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7'.split(',')
f = open("input.txt", "r")
input1 = f.readline().split(',')
input2 = f.readline().split(',')
# print(getFewestStepsToX(input1, input2))
print(getPaths(input1, input2))