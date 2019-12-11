'''
On the way to Jupiter, you're pulled over by the Space Police.

"Attention, unmarked spacecraft! You are in violation of Space Law! 
All spacecraft must have a clearly visible registration identifier! You have 24 hours to comply or be sent to Space Jail!"

Not wanting to be sent to Space Jail, you radio back to the Elves on Earth for help. 
Although it takes almost three hours for their reply signal to reach you, they send instructions 
for how to power up the emergency hull painting robot and even provide a small Intcode program (your puzzle input) 
that will cause it to paint your ship appropriately.

There's just one problem: you don't have an emergency hull painting robot.

You'll need to build a new emergency hull painting robot. The robot needs to be able to move 
around on the grid of square panels on the side of your ship, detect the color of its current panel, 
and paint its current panel black or white. (All of the panels are currently black.)

The Intcode program will serve as the brain of the robot. The program uses input instructions to access 
the robot's camera: provide 0 if the robot is over a black panel or 1 if the robot is over a white panel. 
Then, the program will output two values:

First, it will output a value indicating the color to paint the panel the robot is over: 0 means to paint 
the panel black, and 1 means to paint the panel white.
Second, it will output a value indicating the direction the robot should turn: 0 means it should turn left 
90 degrees, and 1 means it should turn right 90 degrees.
After the robot turns, it should always move forward exactly one panel. The robot starts facing up.

The robot will continue running for a while like this and halt when it is finished drawing. Do not restart 
the Intcode computer inside the robot during this process.

For example, suppose the robot is about to start running. Drawing black panels as ., white panels as #, and 
the robot pointing the direction it is facing (< ^ > v), the initial state and region near the robot looks like this:

.....
.....
..^..
.....
.....
The panel under the robot (not visible here because a ^ is shown instead) is also black, and so any input 
instructions at this point should be provided 0. Suppose the robot eventually outputs 1 (paint white) and then 
0 (turn left). After taking these actions and moving forward one panel, the region now looks like this:

.....
.....
.<#..
.....
.....
Input instructions should still be provided 0. Next, the robot might output 0 (paint black) and then 0 (turn left):

.....
.....
..#..
.v...
.....
After more outputs (1,0, 1,0):

.....
.....
..^..
.##..
.....
The robot is now back where it started, but because it is now on a white panel, input instructions should be provided 1. 
After several more outputs (0,1, 1,0, 1,0), the area looks like this:

.....
..<#.
...#.
.##..
.....
Before you deploy the robot, you should probably have an estimate of the area it will cover: specifically, you need to know 
the number of panels it paints at least once, regardless of color. In the example above, the robot painted 6 panels at least once. 
(It painted its starting panel twice, but that panel is still only counted once; it also never painted the panel it ended on.)

Build a new emergency hull painting robot and run the Intcode program on it. How many panels does it paint at least once?
'''

def print_panel(panel, position, direction):
    print("***************************")
    for i in range(len(panel)):
        row = ""
        for j in range(len(panel[i])):
            if i == position[0] and j == position[1]:
                if direction == 'up':
                   row += '^'
                elif direction == 'down':
                   row += 'v'
                elif direction == 'left':
                   row += '<'
                elif direction == 'right':
                   row += '>'      
            else:
                if panel[i][j] == 0:
                    row += '.'
                elif panel[i][j] == 1:
                    row += '#'

        print(row)
    print("***************************")
    

def decode(codes):
    panels_visited = set()
    counter = 0
    relative_base = 0
    memory = [0] * 1000
    codes += memory
    panel = [[0 for i in range(100)] for j in range(100)]
    current_position = (50, 50)
    current_color = 0
    current_direction = 'up'
    first = True

    # print_panel(panel, current_position, current_direction)
    while codes[counter] != "99" and codes[counter] != 99:
        instruction = str(codes[counter])
        if len(instruction)==1:
            instruction = f'0000{instruction}'
        elif len(instruction)==2:
            instruction = f'000{instruction}'
        elif len(instruction)==3:
            instruction = f'00{instruction}'
        elif len(instruction)==4:
            instruction = f'0{instruction}'

        if int(instruction[-2:]) == 1:
            if instruction[-3] == '1':
                val1 = int(codes[counter + 1])
            elif instruction[-3] == '0':
                val1 = codes[int(codes[counter + 1])]
            elif instruction[-3] == '2':
                val1 = codes[int(codes[counter + 1]) + relative_base]

            if instruction[-4] == '1':
                val2 = int(codes[counter + 2])
            elif instruction[-4] == '0':
                val2 = codes[int(codes[counter + 2])]
            elif instruction[-4] == '2':
                val2 = codes[int(codes[counter + 2]) + relative_base]

            if instruction[-5] == '0':
                codes[int(codes[counter + 3])] = int(val1) + int(val2)
            elif instruction[-5] == '2':
                codes[int(codes[counter + 3]) + relative_base] = int(val1) + int(val2)
            counter += 4
        elif int(instruction[-2:]) == 2:
            if instruction[-3] == '1':
                val1 = int(codes[counter + 1])
            elif instruction[-3] == '0':
                val1 = codes[int(codes[counter + 1])]
            elif instruction[-3] == '2':
                val1 = codes[int(codes[counter + 1]) + relative_base]


            if instruction[-4] == '1':
                val2 = int(codes[counter + 2])
            elif instruction[-4] == '0':
                val2 = codes[int(codes[counter + 2])]
            elif instruction[-4] == '2':
                val2 = codes[int(codes[counter + 2]) + relative_base]

            if instruction[-5] == '0':
                codes[int(codes[counter + 3])] = int(val1) * int(val2)
            elif instruction[-5] == '2':
                codes[int(codes[counter + 3]) + relative_base] = int(val1) * int(val2)
            counter += 4
        elif int(instruction[-2:]) == 3:
            # unitID = input("Enter input ")
            if instruction[-3] == '2':
                val1 = int(codes[counter + 1]) + int(relative_base)
            else:
                val1 = int(codes[counter + 1])
            # codes[int(val1)] = unitID
            (x, y) = current_position
            codes[int(val1)] = panel[x][y]
            counter += 2
        elif int(instruction[-2:]) == 4:
            if instruction[-3] == '1':
                val = int(codes[counter + 1])
            elif instruction[-3] == '0':
                val = codes[int(codes[counter + 1])]
            elif instruction[-3] == '2':
                val = codes[int(codes[counter + 1]) + relative_base]
            if first is True:
                (x, y) = current_position
                panel[x][y] = val
                if (x, y) not in panels_visited:
                    panels_visited.add((x, y))
                first = False
            else:
                first = True
                if current_direction == 'up':
                    # if direction is 'up', if val is 0 turn left 90 degrees -> y-1
                    if int(val) == 0:
                        current_position_x = current_position[0]
                        current_position_y = current_position[1] - 1
                        current_position = (current_position_x, current_position_y)
                        current_direction = 'left'
                    # if direction is 'up', if val is 1 turn right 90 degrees -> y+1
                    elif int(val) == 1:
                        current_position_x = current_position[0]
                        current_position_y = current_position[1] + 1
                        current_position = (current_position_x, current_position_y)
                        current_direction = 'right'
                elif current_direction == 'down':
                    # if direction is 'down', if val is 0 turn left 90 degrees -> y+1
                    if int(val) == 0:
                        current_position_x = current_position[0]
                        current_position_y = current_position[1] + 1
                        current_position = (current_position_x, current_position_y)
                        current_direction = 'right'
                    elif int(val) == 1:
                        # if direction is 'down', if val is 1 turn right 90 degrees -> y-1
                        current_position_x = current_position[0]
                        current_position_y = current_position[1] - 1
                        current_position = (current_position_x, current_position_y)
                        current_direction = 'left'

                elif current_direction == 'right':
                    # if direction is 'right', if val is 0 turn left 90 degrees -> x-1
                    if int(val) == 0:
                        current_position_x = current_position[0] - 1
                        current_position_y = current_position[1]
                        current_position = (current_position_x, current_position_y)
                        current_direction = 'up'
                    # if direction is 'right', if val is 1 turn right 90 degrees -> x+1
                    elif int(val) == 1:
                        current_position_x = current_position[0] + 1
                        current_position_y = current_position[1]
                        current_position = (current_position_x, current_position_y)
                        current_direction = 'down'
                    
                elif current_direction == 'left':
                    # if direction is 'left', if val is 0 turn left 90 degrees -> x+1
                    if int(val) == 0:
                        current_position_x = current_position[0] + 1
                        current_position_y = current_position[1]
                        current_position = (current_position_x, current_position_y)
                        current_direction = 'down'
                    # if direction is 'left', if val is 1 turn right 90 degrees -> x-1
                    elif int(val) == 1:
                        current_position_x = current_position[0] - 1
                        current_position_y = current_position[1]
                        current_position = (current_position_x, current_position_y)
                        current_direction = 'up'

            # print(val)
            counter += 2
        elif int(instruction[-2:]) == 5:
            if instruction[-3] == '1':
                val1 = codes[counter + 1]
            elif instruction[-3] == '0':
                val1 = codes[int(codes[counter + 1])]
            elif instruction[-3] == '2':
                val1 = codes[int(codes[counter + 1]) + relative_base]

            if val1 != '0' and val1 != 0:
                if instruction[-4] == '1':
                    val2 = codes[counter + 2]
                elif instruction[-4] == '0':
                    val2 = codes[int(codes[counter + 2])]
                elif instruction[-4] == '2':
                    val2 = codes[int(codes[counter + 2]) + relative_base]

                counter = int(val2)
            else:
                counter += 3
        elif int(instruction[-2:]) == 6:
            if instruction[-3] == '1':
                val1 = codes[counter + 1]
            elif instruction[-3] == '0':
                val1 = codes[int(codes[counter + 1])]
            elif instruction[-3] == '2':
                val1 = codes[int(codes[counter + 1]) + relative_base]

            if val1 == '0' or val1 == 0 :
                if instruction[-4] == '1':
                    val2 = codes[counter + 2]
                elif instruction[-4] == '0':
                    val2 = codes[int(codes[counter + 2])]
                elif instruction[-4] == '2':
                    val2 = codes[int(codes[counter + 2]) + relative_base]

                counter = int(val2)
            else:
                counter += 3
        elif int(instruction[-2:]) == 7:
            if instruction[-3] == '1':
                val1 = int(codes[counter + 1])
            elif instruction[-3] == '0':
                val1 = codes[int(codes[counter + 1])]
            elif instruction[-3] == '2':
                val1 = codes[int(codes[counter + 1]) + relative_base]

            if instruction[-4] == '1':
                val2 = int(codes[counter + 2])
            elif instruction[-4] == '0':
                val2 = codes[int(codes[counter + 2])]
            elif instruction[-4] == '2':
                val2 = codes[int(codes[counter + 2]) + relative_base]

            if instruction[-5] == '0':
                if int(val1) < int(val2):
                    codes[int(codes[counter + 3])] = '1'
                else:
                    codes[int(codes[counter + 3])] = '0'
            elif instruction[-5] == '2':
                if int(val1) < int(val2):
                    codes[int(codes[counter + 3]) + relative_base] = '1'
                else:
                    codes[int(codes[counter + 3]) + relative_base] = '0'
            
            counter += 4
        elif int(instruction[-2:]) == 8:
            if instruction[-3] == '1':
                val1 = int(codes[counter + 1])
            elif instruction[-3] == '0':
                val1 = codes[int(codes[counter + 1])]
            elif instruction[-3] == '2':
                val1 = codes[int(codes[counter + 1]) + relative_base]

            if instruction[-4] == '1':
                val2 = int(codes[counter + 2])
            elif instruction[-4] == '0':
                val2 = codes[int(codes[counter + 2])]
            elif instruction[-4] == '2':
                val2 = codes[int(codes[counter + 2]) + relative_base]

            if instruction[-5] == '0':
                if int(val1) == int(val2):
                    codes[int(codes[counter + 3])] = '1'
                else:
                    codes[int(codes[counter + 3])] = '0'
            elif instruction[-5] == '2':
                if int(val1) == int(val2):
                    codes[int(codes[counter + 3]) + relative_base] = '1'
                else:
                    codes[int(codes[counter + 3]) + relative_base] = '0'

            counter += 4
        elif int(instruction[-2:]) == 9:
            if instruction[-3] == '1':
                val1 = codes[counter + 1]
            elif instruction[-3] == '0':
                val1 = codes[int(codes[counter + 1])]
            elif instruction[-3] == '2':
                val1 = codes[int(codes[counter + 1]) + relative_base]
            relative_base += int(val1)
            counter += 2
        else:
            print(f'code {codes[counter]} not recognized')
            break

    return panels_visited

def get_program():
    f = open("input.txt", "r")
    input1 = f.readline()
    codes = input1.split(",")
    return decode(codes)

def get_panels_num():
    outputs = get_program()
    return len(outputs)

print(get_panels_num())