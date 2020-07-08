'''
You are given q queries. Each query specifies an operation that needs to be performed on an (initially
empty) collection of integers. Each query has one of three possible forms:
[1, x] : Insert x into your collection.
[2, y] : Delete a single occurrence of y from your collection. Note that we might get delete queries
for elements that aren't in the collection.
[3, z] : Check if any integer present in the collection occurs with a frequency of z. If such an
integer occurs with the specified frequency in the collection, this operation outputs 1 . If no such
integer occurs with the specified frequency in the collection, this operation outputs 0 .
The queries are given in the form of a 2D array queries of size q where queries[i][0] contains the
operation and queries[i][1] contains the operation's input value.
For example, given an array of queries such as the following:
queries = [[1,1],[3,3],[2,2],[3,-1],[1,1],[1,1],[2,1],[1,2],[3,2]] , 
the results of each operation are as follows:
Operation Collection Output Rationale
[1,1] [1] Add a 1 to the collection
[3,3] [1] 0 Check for an element with frequency 3; no such element
[2,2] [1] Remove a 2 from the collection; no such element to remove
[3,-1] [1] 0 Check for an element with frequency -1; no such element
[1,1] [1,1] Add a 1 to the collection
[1,1] [1,1,1] Add a 1 to the collection
[2,1] [1,1] Remove a 1 from the collection
[1,2] [1,1,2] Add a 2 to the collection; occurrences of 2 is now 1
[3,2] [1,1,2] 1 Check for an element with frequency 2; 1 satisfies this
Thus our function should return [0,0,1] .

Function Description
Complete the frequencyQueries function in the editor below. It must return an array of integers where
each element is 1 if there is at least one element value in the collection with the specified number of
occurrences, or 0 if no such element is present in the collection. The returned array should hold the output
values in the order in which the queries occurred.
frequencyQueries has the following parameter:
queries: a 2D array of integers
Input Format
The first line contains an integer q, the number of queries in the 2D array.
The second line contains an integer specifying the number of columns in the 2D array; this number will
always be 2 in this problem.
The following q lines contain 2 space-separated integers representing the 2 elements in each query.
Output Format
Return an array of integers consisting of all outputs of queries of type 3.
Sample Input 1
8
2
1 5
1 6
3 2
1 10
1 10
1 6
2 5
3 2
Sample Output 1
0
1
Explanation 1
For the first query of type 3, there is no integer whose frequency is 2. At this point the collection consists
of [5,6] . So that query outputs 0. For the second query of type 3, there are two integers in the collection
with a frequency of 2, 6 and 10. So that query outputs 1. 
'''

def frequencyQueries(queries):

  collection = {}
  freq = {}
  output = []
  for i in queries:
    if i[0] == 1:
      if i[1] not in collection:
        collection[i[1]] = 1
      else:
        collection[i[1]] += 1

      if collection[i[1]] in freq:
          freq[collection[i[1]]] += 1
      else:
        freq[collection[i[1]]] = 1
      if collection[i[1]] > 1:
        freq[collection[i[1]]-1] -= 1

    elif i[0] == 2:
      if i[1] in collection:
        collection[i[1]] -= 1
      
        if collection[i[1]] in freq:
          freq[collection[i[1]]] += 1
        else:
          freq[collection[i[1]]] = 1
        if (collection[i[1]]+1) in freq:
          freq[collection[i[1]]+1] -= 1

    elif i[0] == 3:
        if i[1] in freq:
          output.append(1)
        else:
            output.append(0)
    #   if i[1] in collection.values():
    #     output.append(1)
    #     continue
    #   output.append(0)
  return output


queries = [[1,1],[3,3],[2,2],[3,-1],[1,1],[1,1],[2,1],[1,2],[3,2]]
print(frequencyQueries(queries))