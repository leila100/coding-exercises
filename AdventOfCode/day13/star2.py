'''
The game didn't run because you didn't put in any quarters. Unfortunately, you did not bring any quarters. 
Memory address 0 represents the number of quarters that have been inserted; set it to 2 to play for free.

The arcade cabinet has a joystick that can move left and right. The software reads the position of the 
joystick with input instructions:

If the joystick is in the neutral position, provide 0.
If the joystick is tilted to the left, provide -1.
If the joystick is tilted to the right, provide 1.
The arcade cabinet also has a segment display capable of showing a single number that represents the player's current score. 
When three output instructions specify X=-1, Y=0, the third output instruction is not a tile; the value instead specifies the 
new score to show in the segment display. For example, a sequence of output values like -1,0,12345 would show 12345 as the player's 
current score.

Beat the game by breaking all the blocks. What is your score after the last block is broken?
'''
def decode(codes):
    game = []
    answer = []
    counter = 0
    relative_base = 0
    memory = [0] * 1000
    codes += memory
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
            print(f"instruction: {instruction}")
            # print(f'board: {answer}')
            draw_game(answer, game)
            answer = []
            move_joystick(game)
            unitID = input("Enter input ")
            if instruction[-3] == '0' or instruction[-3] == '1':
                val1 = codes[counter + 1]
            elif instruction[-3] == '2':
                val1 = int(codes[counter + 1]) + int(relative_base)
            codes[int(val1)] = unitID
            print(f"saved {unitID} in codes[{int(val1)}]")
            counter += 2
        elif int(instruction[-2:]) == 4:
            if instruction[-3] == '1':
                val = int(codes[counter + 1])
            elif instruction[-3] == '0':
                val = codes[int(codes[counter + 1])]
            elif instruction[-3] == '2':
                val = codes[int(codes[counter + 1]) + relative_base]
            answer.append(val)
            print(val)
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
    draw_game(answer, game)
    return answer

def find(code, game):
    for row in range(len(game)):
        if game[row].count(code) == 1:
            column = game[row].index(code)
            return (row, column)
    return (None, None)

def move_joystick(game):
    (ball_x, ball_y) = find('o', game)
    print(f'ball in: {(ball_x, ball_y)}')
    (paddle_x, paddle_y) = find('=', game)
    print(f"paddle in: {paddle_x, paddle_y}")


def count_blocks(codes):
    count = 0
    for i in range(2, len(codes), 3):
        if codes[i] == 2:
            count += 1
    return count

def draw_game(codes, game):
    cells = []
    i = 0
    while i < len(codes)-2:
        cells.append(codes[i:i+3])
        i += 3
    # print(cells)
    if game == []:
        column = 0
        game_row = []
        score = 0
        for cell in cells:
            x = cell[0]
            y = cell[1]
            obj = cell[2]
            if x == -1 and y==0:
                print("found score")
                score = obj
            else:
                # print(f'x: {y}, row: {column}')
                if int(y) != column:
                    game.append(game_row)
                    game_row = []
                    column += 1
                if obj == 0:
                    game_row.append('.')
                elif obj == 1:
                    game_row.append('#')
                elif obj == 2:
                    game_row.append('*')
                elif obj == 3:
                    game_row.append('=')
                elif obj == 4:
                    print(f"ball is in position: {x} {y}")
                    game_row.append('o')
    else:
        for cell in cells:
            x = cell[0]
            y = cell[1]
            obj = cell[2]
            print(f'x: {x}, y: {y}')
            if y > 19:
                continue
            if x == -1 and y==0:
                print(f"found score: {obj}")
                score = obj
                continue
            print(f"modifying cell: {y} {x} from {game[y][x]} to {obj}")
            if obj == 0:
                game[y][x] = '.'
            elif obj == 1:
                game[y][x] = '#'
            elif obj == 2:
                game[y][x] = '*'
            elif obj == 3:
                game[y][x] = '='
            elif obj == 4:
                game[y][x] = 'o'

    for cell in game:
        print(''.join(cell))
    # print(f"score: {score}")

f = open("input2.txt", "r")
input1 = f.readline()
codes = input1.split(",")
answer = decode(codes)
# print(answer)

num = count_blocks(answer)
print(num)