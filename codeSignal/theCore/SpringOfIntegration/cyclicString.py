'''
You're given a substring s of some cyclic string. What's the length of the smallest 
possible string that can be concatenated to itself many times to obtain this cyclic string?

Example

For s = "cabca", the output should be
cyclicString(s) = 3.

"cabca" is a substring of a cycle string "abcabcabcabc..." that can be obtained by 
concatenating "abc" to itself. Thus, the answer is 3.

Input/Output

[execution time limit] 4 seconds (py3)

[input] string s

Guaranteed constraints:
3 ≤ s.length ≤ 15.

[output] integer
'''

'''
work with a substring of s, repeat it until it is twice the size of s and see if it includes s.

if not.. add one more letter to substring and repeat the process
'''
def cyclicString(s):
    count = 0
    subString = s[0]
    i = 1;
    while i <= len(s) and len(subString) <= len(s):
        subString = s[:i]
        cyclic = subString
        while len(cyclic) < 2*len(s):
            cyclic += subString
        if s in cyclic:
            return len(subString)
        i += 1
    return len(s)

print(cyclicString("cabca"))
print(cyclicString("aba"))