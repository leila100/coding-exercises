import unittest

'''
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(divided_by(three()))
'''

def zero(opr=None): 
    if opr == None:
        return 0
    else:            
        return opr(0)
def one(opr=None): 
    if opr == None:
        return 1
    else:
        return opr(num)
def two(opr=None): 
    if opr == None:
        return 2
    else:
        return opr(2)
def three(opr=None): 
    if opr == None:
        return 3
    else:
        return opr(3)
def four(opr=None): 
    if opr == None:
        return 4
    else:
        return opr(4)
def five(opr=None): 
    if opr == None:
        return 5
    else:
        return opr(5)
def six(opr=None): 
    if opr == None:
        return 6
    else:
        return opr(6)
def seven(opr=None): 
    if opr == None:
        return 7
    else:
        return opr(7)
def eight(opr=None): 
    if opr == None:
        return 8
    else:
        return opr(8)
def nine(opr=None): 
    if opr == None:
        return 9
    else:
        return opr(9)

def plus(num2): 
    def opr(num1):
        return num1 + num2
    return opr
def minus(num2): 
    def opr(num1):
        return num1 - num2
    return opr
def times(num2): 
    def opr(num1):
        return num1 * num2
    return opr
def divided_by(num2): 
    def opr(num1):
        return num1 // num2
    return opr

'''
Other way:
def zero(f = None): return 0 if not f else f(0)
def one(f = None): return 1 if not f else f(1)
def two(f = None): return 2 if not f else f(2)
def three(f = None): return 3 if not f else f(3)
def four(f = None): return 4 if not f else f(4)
def five(f = None): return 5 if not f else f(5)
def six(f = None): return 6 if not f else f(6)
def seven(f = None): return 7 if not f else f(7)
def eight(f = None): return 8 if not f else f(8)
def nine(f = None): return 9 if not f else f(9)

def plus(y): return lambda x: x+y
def minus(y): return lambda x: x-y
def times(y): return lambda  x: x*y
def divided_by(y): return lambda  x: x/y
'''

class Test(unittest.TestCase):
    def test_fcts(self):
        self.assertEqual(seven(times(five())), 35)
        self.assertEqual(four(plus(nine())), 13)
        self.assertEqual(eight(minus(three())), 5)
        self.assertEqual(six(divided_by(two())), 3)

if __name__ == '__main__':
    unittest.main()