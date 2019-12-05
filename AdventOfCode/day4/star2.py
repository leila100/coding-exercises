'''
An Elf just remembered one more important detail: the two adjacent matching digits 
are not part of a larger group of matching digits.

Given this additional criterion, but still ignoring the range rule, the following are now true:

112233 meets these criteria because the digits never decrease and all repeated digits are exactly two digits long.
123444 no longer meets the criteria (the repeated 44 is part of a larger group of 444).
111122 meets the criteria (even though 1 is repeated more than twice, it still contains a double 22).
How many different passwords within the range given in your puzzle input meet all of the criteria?

Your puzzle input is still 168630-718098.
'''

def checkForadjacentDiggits(string):
    i = 0
    while i<len(string):
        if i+1 < len(string) and string[i] == string[i+1]:
            if i+2 == len(string) or (i+2 < len(string) and string[i+1] != string[i+2]):
                return True
            while i+1<len(string) and string[i] == string[i+1]:
                i+=1
        i+=1
    return False

def checkIncrese(string):
    flag = True
    pointer = int(string[0])
    for i in range(1, len(string)):
        next_pointer = int(string[i])
        if next_pointer < pointer:
            flag = False
            break
        else:
            pointer = next_pointer
    return flag

def passwords():
    value = 168630
    count = 0
    while value <= 718098:
        flag = False
        str_value = str(value)
        if checkForadjacentDiggits(str_value):
            flag = checkIncrese(str_value)
            if flag is True:
                count += 1
        value += 1
    return count

answer = passwords()
print(f'answer: {answer}')