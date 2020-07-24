'''
Given a string s, recursively remove any adjacent duplicate characters that it contains.

Example

For s = "cooodefightssforrrcodee", the output should be
removeDuplicateAdjacent(s) = "cdefightfocod";
For s = "acaaabbbacdddd", the output should be
removeDuplicateAdjacent(s) = "acac".
'''

def removeDuplicateAdjacent(s):
  oldS = s
  while True:
    newS = removeDups(oldS)
    if newS == oldS:
      break;
    oldS = newS
  return newS

def removeDups(s):
    if len(s) <= 1:
        return s
    if len(s) == 2:
        if s[0] == s[1]:
            removed = True
            return ""
        else:
            return s
    if s[0] == s[1]:
        for i in range(len(s)-1):
            if s[i] != s[i+1]:
                return removeDups(s[i+1:])
        return ""
    else:
        return s[0] + removeDups(s[1:])

# print(removeDuplicateAdjacent("cood"))
# print(removeDuplicateAdjacent("cooodefightssforrrcodee"))
print(removeDuplicateAdjacent("acaaabbbacdddd"))