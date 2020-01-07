/*
Given 3 arrays a, b, c of different sizes, find the number of distinct triplets (p, q, r) 
where p is an element of a, q element of b, and r element of c, 
satisfying the criteria: p <= q and q >= r.

For example, given a = [3, 5, 7], b = [3, 6], and c = [4, 6, 9] we find four distinct triplets: 
(3, 6, 4), (3, 6, 6), (5, 6, 4), (5, 6, 6).

Function Description
Complete the triplets function in the editor below. 
It must return the number of distinct triplets that can be formed from the given arrays.

triplets has the following parameter(s):
a, b, c: three arrays of integers .
*/

function triplets(a, b, c) {
    // naive approach: get all combinations and only count the ones that 
    // statisfy the criteria. -- will take too long
    a = Array.from(new Set(a)) //remove duplicates
    b = Array.from(new Set(b)) //remove duplicates
    c = Array.from(new Set(c)) //remove duplicates
    a.sort((x, y) => x-y)
    b.sort((x, y) => x-y)
    c.sort((x, y) => x-y)
    var count = 0;
    var ai = 0;
    var ci = 0;
    for (let i=0; i<b.length; i++ ) {
        while (ai < a.length && a[ai] <= b[i]) ai++
        while (ci < c.length && c[ci] <= b[i]) ci++
        count += ai * ci
    }
    return count
}

const a = [1, 3, 5, 7]
const b = [5, 7, 9]
const c = [7, 9, 11, 13]
console.log(triplets(a, b, c))