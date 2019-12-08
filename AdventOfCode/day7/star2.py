'''
It's no good - in this configuration, the amplifiers can't generate a large enough output signal to produce 
the thrust you'll need. The Elves quickly talk you through rewiring the amplifiers into a feedback loop:

      O-------O  O-------O  O-------O  O-------O  O-------O
0 -+->| Amp A |->| Amp B |->| Amp C |->| Amp D |->| Amp E |-.
   |  O-------O  O-------O  O-------O  O-------O  O-------O |
   |                                                        |
   '--------------------------------------------------------+
                                                            |
                                                            v
                                                     (to thrusters)
Most of the amplifiers are connected as they were before; amplifier A's output is connected to amplifier B's input, and so on. 
However, the output from amplifier E is now connected into amplifier A's input. 
This creates the feedback loop: the signal will be sent through the amplifiers many times.

In feedback loop mode, the amplifiers need totally different phase settings: integers from 5 to 9, again each used exactly once. 
These settings will cause the Amplifier Controller Software to repeatedly take input and produce output many times before halting. 
Provide each amplifier its phase setting at its first input instruction; all further input/output instructions are for signals.

Don't restart the Amplifier Controller Software on any amplifier during this process. 
Each one should continue receiving and sending signals until it halts.

All signals sent or received in this process will be between pairs of amplifiers except the very first signal and the very last signal. 
To start the process, a 0 signal is sent to amplifier A's input exactly once.

Eventually, the software on the amplifiers will halt after they have processed the final loop. 
When this happens, the last output signal from amplifier E is sent to the thrusters. 
Your job is to find the largest output signal that can be sent to the thrusters using the new phase settings and 
feedback loop arrangement.

Here are some example programs:

Max thruster signal 139629729 (from phase setting sequence 9,8,7,6,5):

3,26,1001,26,-4,26,3,27,1002,27,2,27,1,27,26,
27,4,27,1001,28,-1,28,1005,28,6,99,0,0,5
Max thruster signal 18216 (from phase setting sequence 9,7,8,5,6):

3,52,1001,52,-5,52,3,53,1,52,56,54,1007,54,5,55,1005,55,26,1001,54,
-5,54,1105,1,12,1,53,54,53,1008,54,0,55,1001,55,1,55,2,53,55,53,4,
53,1001,56,-1,56,1005,56,6,99,0,0,0,0,10
Try every combination of the new phase settings on the amplifier feedback loop. 
What is the highest signal that can be sent to the thrusters?
'''
from itertools import permutations

def decode(amp, positions):
    
    prev_amp = {
        'A': 'E',
        'B': 'A',
        'C': 'B',
        'D': 'C',
        'E': 'D'
    }
    (sequenceVal, counter, codes, first, aInput) = positions[amp]
    returnVal = None
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
            val = int(codes[counter + 1])
            if positions[amp][3] == True:
                codes[val] = str(positions[amp][0])
                positions[amp][3] = False
            else:
                if amp == 'A' and positions[amp][4] == True:
                    inputVal = 0
                    positions[amp][4] = False
                else:
                    (inputVal, code) = decode(prev_amp[amp], positions)
                if inputVal is None:
                    return (returnVal, '99')
                codes[val] = str(inputVal)
            counter += 2
        elif int(instruction[-2:]) == 4:
            if instruction[-3] == '1':
                val = int(codes[counter + 1])
            else:
                val = codes[int(codes[counter + 1])]
            returnVal = val
            counter += 2
            # save position to come back and continue
            positions[amp] = [sequenceVal, counter, codes, positions[amp][3], positions[amp][4]]
            return (val, instruction)
        elif int(instruction[-2:]) == 5:
            if instruction[-3] == '1':
                val1 = codes[counter + 1]
            else:
                val1 = codes[int(codes[counter + 1])]
            if str(val1) != '0':
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
    return (returnVal, '99')

if __name__=='__main__':
    # codes = '3,26,1001,26,-4,26,3,27,1002,27,2,27,1,27,26,27,4,27,1001,28,-1,28,1005,28,6,99,0,0,5'.split(",")
    # codes = '3,52,1001,52,-5,52,3,53,1,52,56,54,1007,54,5,55,1005,55,26,1001,54,-5,54,1105,1,12,1,53,54,53,1008,54,0,55,1001,55,1,55,2,53,55,53,4,53,1001,56,-1,56,1005,56,6,99,0,0,0,0,10'.split(",")
    f = open("input.txt", "r")
    input1 = f.readline()
    codes = input1.split(",")
    next_amp = {
        'A': 'B',
        'B': 'C',
        'C': 'D',
        'D': 'E',
        'E': 'A'
    }
    sequencePermutations = [p for p in permutations(range(5, 10))]
    maxSignal = None
    for sequence in sequencePermutations:
        positions = {
            'A': [sequence[0], 0, codes[:], True, True],
            'B': [sequence[1], 0, codes[:], True, False],
            'C': [sequence[2], 0, codes[:], True, False],
            'D': [sequence[3], 0, codes[:], True, False],
            'E': [sequence[4], 0, codes[:], True, False],
        }
        solution = None
        (result, code) = decode('A', positions)
        if result is not None:
            solution = result
        current_amp = 'A'
        while code != '99' and code != 99:
            positions[current_amp][1] -= 2
            (result, code) = decode(next_amp[current_amp], positions)
            if result is not None:
                solution = result
            current_amp = next_amp[current_amp]
        # print(f'solution: {solution}')
        if maxSignal is None or int(solution) > int(maxSignal):
            maxSignal = solution
    print(f'max signal: {maxSignal}')