'''
The air conditioner comes online! Its cold air feels good for a while, 
but then the TEST alarms start to go off. Since the air conditioner can't vent its heat anywhere but back 
into the spacecraft, it's actually making the air inside the ship warmer.

Instead, you'll need to use the TEST to extend the thermal radiators. 
Fortunately, the diagnostic program (your puzzle input) is already equipped for this. 
Unfortunately, your Intcode computer is not.

Your computer is only missing a few opcodes:

Opcode 5 is jump-if-true: if the first parameter is non-zero, it sets the instruction pointer to the value 
from the second parameter. Otherwise, it does nothing.
Opcode 6 is jump-if-false: if the first parameter is zero, it sets the instruction pointer to the value 
from the second parameter. Otherwise, it does nothing.
Opcode 7 is less than: if the first parameter is less than the second parameter, it stores 1 in the position 
given by the third parameter. Otherwise, it stores 0.
Opcode 8 is equals: if the first parameter is equal to the second parameter, it stores 1 in the position 
given by the third parameter. Otherwise, it stores 0.
Like all instructions, these instructions need to support parameter modes as described above.

Normally, after an instruction is finished, the instruction pointer increases by the number of values in that instruction. 
However, if the instruction modifies the instruction pointer, that value is used and the instruction pointer is not 
automatically increased.

For example, here are several programs that take one input, compare it to the value 8, and then produce one output:

3,9,8,9,10,9,4,9,99,-1,8 - Using position mode, consider whether the input is equal to 8; output 1 (if it is) or 0 (if it is not).
3,9,7,9,10,9,4,9,99,-1,8 - Using position mode, consider whether the input is less than 8; output 1 (if it is) or 0 (if it is not).
3,3,1108,-1,8,3,4,3,99 - Using immediate mode, consider whether the input is equal to 8; output 1 (if it is) or 0 (if it is not).
3,3,1107,-1,8,3,4,3,99 - Using immediate mode, consider whether the input is less than 8; output 1 (if it is) or 0 (if it is not).
Here are some jump tests that take an input, then output 0 if the input was zero or 1 if the input was non-zero:

3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9 (using position mode)
3,3,1105,-1,9,1101,0,0,12,4,12,99,1 (using immediate mode)
Here's a larger example:

3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,
1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,
999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99
The above example program uses an input instruction to ask for a single number. 
The program will then output 999 if the input value is below 8, output 1000 if the input value is equal to 8, 
or output 1001 if the input value is greater than 8.

This time, when the TEST diagnostic program runs its input instruction to get the ID of the system to test, 
provide it 5, the ID for the ship's thermal radiator controller. This diagnostic test suite only outputs one number, 
the diagnostic code.

What is the diagnostic code for system ID 5?
'''

def decode(codes):
    counter = 0
    while codes[counter] != "99" and codes[counter] != 99:
        instruction = str(codes[counter])
        if len(instruction)==1:
            instruction = f'0000{instruction}'
        elif len(instruction)==2:
            instruction = f'000{instruction}'
        elif len(instruction)==3:
            instruction = f'00{instruction}'

        if int(instruction[-2:]) == 1:
            if instruction[-3] == '1':
                val1 = int(codes[counter + 1])
            else:
                val1 = codes[int(codes[counter + 1])]
            if instruction[-4] == '1':
                val2 = int(codes[counter + 2])
            else:
                val2 = codes[int(codes[counter + 2])]
            codes[int(codes[counter + 3])] = int(val1) + int(val2)
            counter += 4
        elif int(instruction[-2:]) == 2:
            if instruction[-3] == '1':
                val1 = int(codes[counter + 1])
            else:
                val1 = codes[int(codes[counter + 1])]
            if instruction[-4] == '1':
                val2 = int(codes[counter + 2])
            else:
                val2 = codes[int(codes[counter + 2])]
            codes[int(codes[counter + 3])] = int(val1) * int(val2)
            counter += 4
        elif int(instruction[-2:]) == 3:
            unitID = input("Enter input ")
            val = int(codes[counter + 1])
            codes[val] = unitID
            counter += 2
        elif int(instruction[-2:]) == 4:
            if instruction[-3] == '1':
                val = int(codes[counter + 1])
            else:
                val = codes[int(codes[counter + 1])]
            print(val)
            counter += 2
        elif int(instruction[-2:]) == 5:
            if instruction[-3] == '1':
                val1 = codes[counter + 1]
            else:
                val1 = codes[int(codes[counter + 1])]
            if val1 != '0':
                if instruction[-4] == '1':
                    val2 = codes[counter + 2]
                else:
                    val2 = codes[int(codes[counter + 2])]
                counter = int(val2)
            else:
                counter += 3
        elif int(instruction[-2:]) == 6:
            if instruction[-3] == '1':
                val1 = codes[counter + 1]
            else:
                val1 = codes[int(codes[counter + 1])]
            if val1 == '0':
                if instruction[-4] == '1':
                    val2 = codes[counter + 2]
                else:
                    val2 = codes[int(codes[counter + 2])]
                counter = int(val2)
            else:
                counter += 3
        elif int(instruction[-2:]) == 7:
            if instruction[-3] == '1':
                val1 = int(codes[counter + 1])
            else:
                val1 = codes[int(codes[counter + 1])]
            if instruction[-4] == '1':
                val2 = int(codes[counter + 2])
            else:
                val2 = codes[int(codes[counter + 2])]
            if int(val1) < int(val2):
                codes[int(codes[counter + 3])] = '1'
            else:
                codes[int(codes[counter + 3])] = '0'
            counter += 4
        elif int(instruction[-2:]) == 8:
            if instruction[-3] == '1':
                val1 = int(codes[counter + 1])
            else:
                val1 = codes[int(codes[counter + 1])]
            if instruction[-4] == '1':
                val2 = int(codes[counter + 2])
            else:
                val2 = codes[int(codes[counter + 2])]
            if int(val1) == int(val2):
                codes[int(codes[counter + 3])] = '1'
            else:
                codes[int(codes[counter + 3])] = '0'
            counter += 4
        else:
            print(f'code {codes[counter]} not recognized')
            break

def intCodeComputer():
    f = open("input.txt", "r")
    input1 = f.readline()
    codes = input1.split(",")
    # codes = '3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99'.split(",")
    print(decode(codes))

intCodeComputer()