'''
Sometimes it is necessary to filter a signal by frequency, e.g. to reduce noise outside of the expected
frequency range. Filters can be stacked, allowing only the frequencies within the range allowed by all filters
to get through. For example, three filters with ranges of (10, 17), (13, 15) and (13, 17) will only allow signals
between 13 and 15 through. The only range that all filters overlap is (13, 15). 
Given n signals frequencies and a series of m filters that let through frequencies in the range x to y, inclusive, 
determine the number of signals that will get through the filters.

For example, given 
n = 5 signals with 
frequencies = [8, 15, 14, 16, 21] and 
m = 3 
filtersRanges = [[10, 17],[13, 15], [13, 17]], 
the 2 frequencies that will pass through all filters are 15 and 14.

Function Description
Complete the countSignals function in the editor below. The function must return an integer that denotes the
number of signals that pass through all filters.
countSignals has the following parameter(s):
 frequencies: an integer array, the frequencies of the signals sent through the filters
 filterRanges: a 2D integer array, the lower and upper frequency bounds for each filters
Constraints
1 ≤ n ≤ 10**5
1 ≤ frequencies[i] ≤ 10**9
1 ≤ m ≤ 10
1 ≤ filterRanges[j][k] ≤ 10**9

Sample Case 0
Sample Input For Custom Testing
5
20
5
6
7
12
3
2
10 20
5 15
5 30
Sample Output
1
Explanation
The common pass-through range is 10 to 15, so only frequency 12 passes through.
'''

def countSignals(frequencies, filterRanges):
  # f = max(frequencies)
  min_max = {"min": filterRanges[0][0], "max": filterRanges[0][1]}
  for i in filterRanges:
    if i[0] > min_max["min"]:
      min_max["min"] = i[0]
    if i[1] < min_max["max"]:
      min_max["max"] = i[1]
  count = 0
  freqSet = set(frequencies)
  for i in range(min_max["min"], min_max['max'] + 1 ):
    # if i in frequencies:
    if i in freqSet:
      count += frequencies.count(i)
  return count

frequencies = [8, 15, 14, 16, 21]
filtersRanges = [[10, 17],[13, 15], [13, 17]]
count = countSignals(frequencies, filtersRanges)
print(count)