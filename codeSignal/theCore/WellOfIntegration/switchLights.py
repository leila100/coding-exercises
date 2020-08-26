'''
N candles are placed in a row, some of them are initially lit. 
For each candle from the 1st to the Nth the following algorithm is applied: 
if the observed candle is lit then states of this candle and all candles 
before it are changed to the opposite. 
Which candles will remain lit after applying the algorithm to all candles 
in the order they are placed in the line?

Example

For a = [1, 1, 1, 1, 1], the output should be
switchLights(a) = [0, 1, 0, 1, 0].

For a = [0, 0], the output should be
switchLights(a) = [0, 0].

The candles are not initially lit, so their states are not altered by the algorithm.

Input/Output

[execution time limit] 4 seconds (py3)

[input] array.integer a

Initial situation - array of zeros and ones of length N, 1 means that the corresponding candle is lit.

Guaranteed constraints:
2 ≤ a.length ≤ 5000.

[output] array.integer

Situation after applying the algorithm - array in the same format as input with the same length.
'''

def algo(a, index):
    for i in range(len(a[: index+1])):
        if a[i] == 1:
            a[i] = 0
        else:
            a[i] = 1
    
def switchLights(a):
    for index, candle in enumerate(a):
        if candle == 1:
            algo(a, index)
    return a

'''
def switchLights(a):
    return [(x + sum(a[i:]))%2 for i,x in enumerate(a)]
'''

a = [1, 1, 1, 1, 1]
print(switchLights(a))