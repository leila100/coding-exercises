'''
Given a character, check if it represents an odd digit, an even digit or not a digit at all.

Example

For symbol = '5', the output should be
characterParity(symbol) = "odd";
For symbol = '8', the output should be
characterParity(symbol) = "even";
For symbol = 'q', the output should be
characterParity(symbol) = "not a digit".
Input/Output

[execution time limit] 4 seconds (py3)

[input] char symbol

A symbol to check.

Guaranteed constraints:
symbol is guaranteed to be a UTF-8 symbol.

[output] string
'''

def characterParity(symbol):
    try:
        num = int(symbol)
        if (num % 2 == 0): 
            return "even"
        else: 
            return "odd"
    except ValueError:
        return "not a digit"

'''
def characterParity(s):
    return "not a digit" if not s.isdigit() else "odd" if int(s)%2 else "even"
'''

print(characterParity("5"))
print(characterParity("4"))
print(characterParity("o"))