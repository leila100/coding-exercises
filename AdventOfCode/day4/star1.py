'''
You arrive at the Venus fuel depot only to discover it's protected by a password. 
The Elves had written the password on a sticky note, but someone threw it out.

However, they do remember a few key facts about the password:

It is a six-digit number.
The value is within the range given in your puzzle input.
Two adjacent digits are the same (like 22 in 122345).
Going from left to right, the digits never decrease; 
they only ever increase or stay the same (like 111123 or 135679).

Other than the range rule, the following are true:
111111 meets these criteria (double 11, never decreases).
223450 does not meet these criteria (decreasing pair of digits 50).
123789 does not meet these criteria (no double).
How many different passwords within the range given in your puzzle input meet these criteria?

Your puzzle input is 168630-718098.
'''

def checkForadjacentDiggits(string):
    for i in range(len(string)):
        if i+1 < len(string) and string[i] == string[i+1]:
            return True
    return False

def passwords():
    value = 168630
    count = 0
    while value <= 718098:
        flag = False
        str_value = str(value)
        if checkForadjacentDiggits(str_value):
            pointer = int(str_value[0])
            for i in range(1, len(str_value)):
                next_pointer = int(str_value[i])
                if next_pointer < pointer:
                    flag = True
                    break
                else:
                    pointer = next_pointer
            if flag is not True:
                count += 1
        value += 1
    return count

answer = passwords()
print(f'answer: {answer}')