/*
Brie’s Drawing teacher asks her class to open their books to a page number. Brie can either start turning pages 
from the front of the book or from the back of the book. She always turns pages one at a time. 
When she opens the book, page 1 is always on the right side
When she flips page 1, she sees pages 2 and 3. 
Each page except the last page will always be printed on both sides. 
The last page may only be printed on the front, given the length of the book. 
If the book is n pages long, and she wants to turn to page p, what is the minimum number of pages she will turn? 
She can start at the beginning or the end of the book.
Given n and p, find and print the minimum number of pages Brie must turn in order to arrive at page p.
*/

function pageCount(n, p) {
  // Either start from 1 or from n
  // Check if p is closer to 1 or n
  // from 1: pages are 0: 1, 1: [2,3], 2: [4,5]...[n-1, n] or [n]
  // from n: if n is even: 0: n, 1: [n-1, n-2], 2: [n-3, n-4]...[1]
  //         if n is odd: 0: [n, n-1], 1: [n-2, n-3]...[1]
  //  to get to p, min(from 1, from n)

  //   let count = 0;
  if (p === 1 || p === n) {
    return 0;
  }
  const min_from_1 = Math.floor(p / 2);
  const min_from_n = Math.floor(n / 2) - Math.floor(p / 2);
  const count = Math.min(min_from_1, min_from_n);
  console.log(count);
  //   let page = 1;
  //   while (page + 1 <= n || page + 2 <= n) {
  //     count += 1;
  //     const next_page1 = page + 1;
  //     const next_page2 = page + 2;
  //     if (next_page1 !== p && next_page2 != p) {
  //       page += 2;
  //     } else {
  //       break;
  //     }
  //   }
  //   let min_count = count;
  //   page = n;
  //   count = 0;
  //   while (page - 1 >= 1 || page - 2 >= 1) {
  //     const next_page1 = page - 1;
  //     const next_page2 = page - 2;
  //     if (next_page1 !== p && next_page2 != p) {
  //       count += 1;
  //       page -= 2;
  //     } else {
  //       break;
  //     }
  //   }
  //   if (count < min_count) {
  //     min_count = count;
  //   }
  //   console.log(min_count);
}

pageCount(6, 2); // returns 1
pageCount(5, 4); // returns 0
