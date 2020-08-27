'''
Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. 
If two words have the same frequency, then the word with the lower alphabetical order comes first.

Example 1:
Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
    Note that "i" comes before "love" due to a lower alphabetical order.
Example 2:
Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
Output: ["the", "is", "sunny", "day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
    with the number of occurrence being 4, 3, 2 and 1 respectively.
Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Input words contain only lowercase letters.
Follow up:
Try to solve it in O(n log k) time and O(n) extra space.
'''

'''
Time Complexity: O(NlogN), where N is the length of words. We count the frequency of each word in O(N) time, then we sort the given words in O(NlogN) time.

Space Complexity: O(N), the space used to store our frequencies.
'''
def topKFrequent(words, k):
    # Record frequencies in hash table
    freq = {}
    for word in words:
        if word in freq:
            freq[word] += 1
        else:
            freq[word] = 1
    # build another hash table with the keys being the freqs and values being list of words
    freqWords = {}
    for word in freq:
        frequency = freq[word]
        if frequency in freqWords:
            freqWords[frequency].append(word)
        else:
            freqWords[frequency] = [word]
    frequencies = sorted(freqWords.keys(), reverse = True)
    solution = []
    for f in frequencies:
        for word in sorted(freqWords[f]):
            if len(solution) < k:
                solution.append(word)
            else:
                return solution
    return solution
    '''
    def topKFrequent(self, words, k):
      count = collections.Counter(words)
      candidates = list(count.keys())
      candidates.sort(key = lambda w: (-count[w], w))
      return candidates[:k]
    '''
    '''
      # time complexity:  O(N+klogN): our heapq.heapify operation and counting operations are O(N), and each of k heapq.heappop operations are O(log N).

      class Solution(object):
        def topKFrequent(self, words, k):
          count = collections.Counter(words)
          heap = [(-freq, word) for word, freq in count.items()]
          heapq.heapify(heap)
          return [heapq.heappop(heap)[1] for _ in xrange(k)]
    '''

words = ["i", "love", "leetcode", "i", "love", "coding"]
print(topKFrequent(words, 2))