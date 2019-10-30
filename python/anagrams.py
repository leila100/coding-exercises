'''
Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. 
Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

For example , the list of all anagrammatic pairs is  at positions  respectively.

Function Description

Complete the function sherlockAndAnagrams in the editor below. It must return an integer that represents the number of 
anagrammatic pairs of substrings in .

sherlockAndAnagrams has the following parameter(s):

s: a string .
'''

import math
import os
import random
import re
import sys
from collections import Counter
from itertools import combinations

def sherlockAndAnagrams(s):
  count = []
  for i in range(1,len(s)+1):
      a = ["".join(sorted(s[j:j+i])) for j in range(len(s)-i+1)]
      b = Counter(a)
      count.append(sum([len(list(combinations(['a']*b[j],2))) for j in b]))
  return sum(count)

print(sherlockAndAnagrams('abba'))
print(sherlockAndAnagrams('ifailuhkqq'))
print(sherlockAndAnagrams('kkkk'))