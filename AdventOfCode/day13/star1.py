'''
As you ponder the solitude of space and the ever-increasing three-hour roundtrip for messages between you and Earth, 
you notice that the Space Mail Indicator Light is blinking. 
To help keep you sane, the Elves have sent you a care package.

It's a new game for the ship's arcade cabinet! Unfortunately, the arcade is all the way on the other end of the ship. 
Surely, it won't be hard to build your own - the care package even comes with schematics.

The arcade cabinet runs Intcode software like the game the Elves sent (your puzzle input). 
It has a primitive screen capable of drawing square tiles on a grid. 
The software draws tiles to the screen with output instructions: 
every three output instructions specify the x position (distance from the left), 
y position (distance from the top), and tile id. 
The tile id is interpreted as follows:
0 is an empty tile. No game object appears in this tile.
1 is a wall tile. Walls are indestructible barriers.
2 is a block tile. Blocks can be broken by the ball.
3 is a horizontal paddle tile. The paddle is indestructible.
4 is a ball tile. The ball moves diagonally and bounces off objects.

For example, a sequence of output values like 1,2,3,6,5,4 
would draw a horizontal paddle tile (1 tile from the left and 2 tiles from the top) 
and a ball tile (6 tiles from the left and 5 tiles from the top).

Start the game. How many block tiles are on the screen when the game exits?
'''

def decode(codes):
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
            unitID = input("Enter input ")
            if instruction[-3] == '1':
                val1 = codes[counter + 1]
            elif instruction[-3] == '0':
                val1 = codes[int(codes[counter + 1])]
            elif instruction[-3] == '2':
                val1 = int(codes[counter + 1]) + int(relative_base)
            codes[int(val1)] = unitID
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
    return answer

def count_blocks(codes):
    count = 0
    for i in range(2, len(codes), 3):
        if codes[i] == 2:
            count += 1
    return count

f = open("input.txt", "r")
input1 = f.readline()
codes = input1.split(",")
answer = decode(codes)
print(answer)

num = count_blocks(answer)
print(num)