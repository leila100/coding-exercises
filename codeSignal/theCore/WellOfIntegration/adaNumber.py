'''
Consider two following representations of a non-negative integer:

A simple decimal integer, constructed of a non-empty sequence of digits from 0 to 9;
An integer with at least one digit in a base from 2 to 16 (inclusive), 
enclosed between # characters, and preceded by the base, which can only be a 
number between 2 and 16 in the first representation. For digits from 10 to 15 
characters a, b, ..., f and A, B, ..., F are used.
Additionally, both representations may contain underscore (_) characters; 
they are used only as separators for improving legibility of numbers and can be 
ignored while processing a number.

Your task is to determine whether the given string is a valid integer representation.

Note: this is how integer numbers are represented in the programming language Ada.

Example

For line = "123_456_789", the output should be
adaNumber(line) = true;
For line = "16#123abc#", the output should be
adaNumber(line) = true;
For line = "10#123abc#", the output should be
adaNumber(line) = false;
For line = "10#10#123ABC#", the output should be
adaNumber(line) = false;
For line = "10#0#", the output should be
adaNumber(line) = true;
For line = "10##", the output should be
adaNumber(line) = false.
Input/Output

[execution time limit] 4 seconds (py3)

[input] string line

A non-empty string.

Guaranteed constraints:
2 ≤ line.length ≤ 30.

[output] boolean

true if line is a valid integer representation, false otherwise.
'''

def isInGivenBase(Str, base): 
    if len(Str) == 0:
        return False
    # Allowed bases are till 16 (Hexadecimal) 
    if (base > 16 or base < 2): 
        return False
  
    # If base is below or equal to 10,  
    # then all digits should be from 0 to 9. 
    elif (base <= 10): 
        for i in range(len(Str)):
            if not Str[i].isnumeric():
                return False
            if (Str[i].isnumeric() and 
               (ord(Str[i]) >= ord('0') and 
                ord(Str[i]) < (ord('0') + base)) == False):
                return False
      
    # If base is below or equal to 16, then all 
    # digits should be from 0 to 9 or from 'A'  
    else: 
        for i in range(len(Str)): 
            if (Str[i].isnumeric() and (ord(Str[i]) >= ord('0') and ord(Str[i]) < (ord('0') + base)) == False) or (not Str[i].isnumeric() and (ord(Str[i].upper()) >= ord('A') and ord(Str[i].upper()) < (ord('A') + base - 10)) == False):
                return False
      
    return True
    
def adaNumber(line):
    line = line.replace('_', '')
    nums = line.strip().split('#')
    if len(nums) == 0:
        return False
    if len(nums) == 1: # should be base 10 if no # sign
        return isInGivenBase(line, 10)
    if len(nums) != 3:
        return False # number of # signs should be 2
        
    if nums[0] != '':
        base = int(nums[0])
    else:
        return False
    number = nums[1]
    return isInGivenBase(number, base)

'''
def adaNumber(line):
    line = line.replace('_', '')
    if line.isdigit(): 
        return True
    try:
        b, n = line.split('#')[:-1]
        if int(b) < 2 or int(b) > 16:
            return False
        try:
            int(n, int(b))
            return True
        except ValueError:
            return False
    except ValueError:
        return False
'''

print(adaNumber("16#45ae#_"))