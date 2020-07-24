'''
Consider a matrix where each cell contains either a 0 or a 1. 
Any cell containing a 1 is called a filled cell. 
Two cells are said to be connected if they are adjacent to each other horizontally, vertically, or diagonally. 
In the following grid, all cells marked X are connected to the cell marked Y.

XXX
XYX  
XXX    
If one or more filled cells are also connected, they form a region. 
Note that each cell in a region is connected to zero or more cells in the region 
but is not necessarily directly connected to all the other cells in the region.

Given an n X m matrix, find and print the number of cells in the largest region in the matrix. 
Note that there may be more than one region in the matrix.

For example, there are two regions in the following 3 X 3 matrix. 
The larger region at the top left contains 3 cells. 
The smaller one at the bottom right contains 1.

110
100
001

Function Description
Complete the connectedCell function in the editor below. 
It should return an integer that denotes the area of the largest region.

connectedCell has the following parameter(s):
- matrix: a 2D array of integers where matrix[i] represents the ith row of the matrix

Constraints
0 < n, m < 10

Output Format
Print the number of cells in the largest region in the given matrix.

Sample Input
1 1 0 0
0 1 1 0
0 0 1 0
1 0 0 0

Sample Output
5

Explanation
The diagram below depicts two regions of the matrix; 
for each region, the component cells forming the region are marked with an X:

X X 0 0     1 1 0 0
0 X X 0     0 1 1 0
0 0 X 0     0 0 1 0
1 0 0 0     X 0 0 0
The first region has five cells and the second region has one cell. 
We print the size of the largest region.

'''
def getNeighbors(matrix, node):
    neighbors = []
    if node[0] > 0 and node[1] < len(matrix[0])-1 and matrix[node[0]-1][node[1]+1] == 1:
        neighbors.append((node[0]-1, node[1]+1))
    if node[0] > 0 and matrix[node[0]-1][node[1]] == 1:
        neighbors.append((node[0]-1, node[1]))
    if node[0] > 0 and node[1] > 0 and matrix[node[0]-1][node[1]-1] == 1:
        neighbors.append((node[0]-1, node[1]-1))

    if node[0] < len(matrix)-1 and node[1] < len(matrix[0])-1 and matrix[node[0]+1][node[1]+1] == 1:
        neighbors.append((node[0]+1, node[1]+1))
    if node[0] < len(matrix)-1 and matrix[node[0]+1][node[1]] == 1:
        neighbors.append((node[0]+1, node[1]))
    if node[0] < len(matrix)-1 and node[1] > 0 and matrix[node[0]+1][node[1]-1] == 1:
        neighbors.append((node[0]+1, node[1]-1))    

    if node[1] < len(matrix[0])-1 and matrix[node[0]][node[1]+1] == 1:
        neighbors.append((node[0], node[1]+1))
    if node[1] > 0 and matrix[node[0]][node[1]-1] == 1:
        neighbors.append((node[0], node[1]-1))

    return neighbors

def connectedCell(matrix):
    # Will use graph to traverse the matrix looking for largest region
    # Will use stack to keep track of all regions
    if len(matrix) == 0:
        return 0
    
    #  Save all the 1s
    ones = []
    for i in range(len(matrix)):
      for j in range(len(matrix[0])):
        if matrix[i][j] == 1:
          ones.append((i, j))
    
    if len(ones) == 0:
      return 0

    # use a dict to keep track of visited nodes
    visited = set()
    largest = 0

    for one in ones:
      if one in visited:
        continue;
      stack = [[one]]
      while len(stack) > 0:
        print(stack)
        currentRegion = stack.pop()
        currentNode = currentRegion[-1]
        if currentNode not in visited:
          if len(currentRegion) > largest:
            largest = len(currentRegion)
            visited.add(currentNode)
            neighbors = getNeighbors(matrix, currentNode)
            for neighbor in neighbors:
              newRegion = currentRegion[:] + [neighbor]
              stack.append(newRegion)
    return largest


# matrix = [[1,1,0], [1,0,0], [0,0,1]]
# matrix = [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 1, 0], [1, 0, 0, 0]]
matrix = [[0, 1, 1, 1], [0, 0, 1, 0], [0, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]
print(connectedCell(matrix))