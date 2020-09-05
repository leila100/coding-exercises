'''
An alphanumeric ordering of strings is defined as follows: each string is 
considered as a sequence of tokens, where each token is a letter or a number 
(as opposed to an isolated digit, as is the case in lexicographic ordering). 
For example, the tokens of the string "ab01c004" are [a, b, 01, c, 004]. 
In order to compare two strings, we'll first break them down into tokens 
and then compare the corresponding pairs of tokens with each other 
(i.e. compare the first token of the first string with the first token of the second string, etc).

Here is how tokens are compared:

If a letter is compared with another letter, the usual alphabetical order applies.
A number is always considered less than a letter.
When two numbers are compared, their values are compared. Leading zeros, if any, are ignored.
If at some point one string has no more tokens left while the other one still does, 
the one with fewer tokens is considered smaller.

If the two strings s1 and s2 appear to be equal, consider the smallest index i such 
that tokens(s1)[i] and tokens(s2)[i] (where tokens(s)[i] is the ith token of string s) 
differ only by the number of leading zeros. If no such i exists, the strings are indeed equal. 
Otherwise, the string whose ith token has more leading zeros is considered smaller.

Here are some examples of comparing strings using alphanumeric ordering.

"a" < "a1" < "ab"
"ab42" < "ab000144" < "ab00144" < "ab144" < "ab000144x"
"x11y012" < "x011y13"
Your task is to return true if s1 is strictly less than s2, and false otherwise.

Example

For s1 = "a" and s2 = "a1", the output should be alphanumericLess(s1, s2) = true;

These strings have equal first tokens, but since s1 has fewer tokens than s2, it's considered smaller.

For s1 = "ab" and s2 = "a1", the output should be alphanumericLess(s1, s2) = false;

These strings also have equal first tokens, but since numbers are considered less than letters, s1 is larger.

For s1 = "b" and s2 = "a1", the output should be alphanumericLess(s1, s2) = false.

Since b is greater than a, s1 is larger.

Input/Output

[execution time limit] 4 seconds (py3)

[input] string s1

A string consisting of English letters and digits.

Guaranteed constraints:
1 ≤ s1.length ≤ 20.

[input] string s2

A string consisting of English letters and digits.

Guaranteed constraints:
1 ≤ s2.length ≤ 20.

[output] boolean

true if s1 is alphanumerically strictly less than s2, false otherwise.
'''

def getTokens(s):
    tokens = []
    i = 0
    currentToken = ""
    while i < len(s):
        while i < len(s) and s[i].isdigit():
            currentToken += s[i]
            i += 1
        if currentToken != "":
            tokens.append(currentToken)
        currentToken = ""
        while i < len(s) and not s[i].isdigit():
            tokens.append(s[i])
            i += 1
        currentToken = ""
    return tokens
    
def alphanumericLess(s1, s2):
    tokens1 = getTokens(s1)
    tokens2 = getTokens(s2)
    
    # same number of tokens
    for i, token in enumerate(tokens1):
        # s1 has more tokens then s2
        if i > len(tokens2)-1:
            return False
        # If a letter is compared with another letter, the usual alphabetical order applies.
        if (not token.isdigit() and not tokens2[i].isdigit()):
            if token != tokens2[i]:
                return token < tokens2[i]
        # When two numbers are compared, their values are compared.
        elif (token.isdigit() and tokens2[i].isdigit()):
            if int(token) != int(tokens2[i]):
                return int(token) < int(tokens2[i])
        # A number is always considered less than a letter.
        else:
            if token.isdigit():
                return True
            elif tokens2[i].isdigit():
                return False

    # the one with fewer tokens is considered smaller 
    if len(tokens1) < len(tokens2):
        return True

    # the string whose ith token has more leading zeros is considered smaller.
    for i, token in enumerate(tokens1):
        if (token.isdigit() and tokens2[i].isdigit()):
            return len(token) > len(tokens2[i])
    
    # if both strings are exactly the same
    return False

'''
from re import findall

def alphanumericLess(s1, s2):
     regex = r'[A-Za-z]|\d+'
     s1 = [(0, int(f), -f.count('0')) if f.isdigit() else (1, f) for f in findall(regex, s1)]
     s11 = [f[:2] for f in s1]
     s2 = [(0, int(f), -f.count('0')) if f.isdigit() else (1, f) for f in findall(regex, s2)]
     s21 = [f[:2] for f in s2]
     return (s11 < s21) or ((s11 == s21) and (s1 < s2))
'''

# s1 = "a"
# s2 = "a1"
# s1 = "0000"
# s2 = "000"
s1 = "zzz1"
s2 = "zzz1"
print(alphanumericLess(s1, s2))