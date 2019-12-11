'''
You're not sure what it's trying to paint, but it's definitely not a registration identifier. 
The Space Police are getting impatient.

Checking your external ship cameras again, you notice a white panel marked "emergency hull 
painting robot starting panel". The rest of the panels are still black, but it looks like the 
robot was expecting to start on a white panel, not a black one.

Based on the Space Law Space Brochure that the Space Police attached to one of your windows, 
a valid registration identifier is always eight capital letters. After starting the robot on 
a single white panel instead, what registration identifier does it paint on your hull?
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
                  row += 'X'   
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
    panel[50][50] = 1
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
    print_panel(panel, current_position, '')
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
