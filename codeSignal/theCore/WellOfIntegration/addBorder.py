'''
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
Input/Output

[execution time limit] 4 seconds (py3)

[input] array.string picture

A non-empty array of non-empty equal-length strings.

Guaranteed constraints:
1 ≤ picture.length ≤ 100,
1 ≤ picture[i].length ≤ 100.

[output] array.string

The same matrix of characters, framed with a border of asterisks of width 1.
'''

def addBorder(picture):
    border = "".join(["*" for x in range(len(picture[0]) + 2)])
    # add * to beginning and end of each element in picture
    for i in range(len(picture)):
        picture[i] = "*" + picture[i] + "*"
    # add at top and bottom of picture
    picture.insert(0, border)
    picture.append(border)
    return picture

picture = ["abc", "ded"]
print(addBorder(picture))