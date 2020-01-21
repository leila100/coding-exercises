/*
Lisa just got a new math workbook. 
A workbook contains exercise problems, grouped into chapters. 
Lisa believes a problem to be special if its index (within a chapter) is the same as the page number where it's located. 
The format of Lisa's book is as follows:
There are n chapters in Lisa's workbook, numbered from 1 to n.
The ith chapter has arr[i] problems, numbered from 1 to arr[i].
Each page can hold up to k problems. Only a chapter's last page of exercises may contain fewer than k problems.
Each new chapter starts on a new page, so a page will never contain problems from more than one chapter.
The page number indexing starts at 1.
Given the details for Lisa's workbook, can you count its number of special problems?

For example, Lisa's workbook contains arr[1]=4 problems for chapter 1, 
and arr[2]=2 problems for chapter 2. 
Each page can hold k=3 problems. 
The first page will hold 3 problems for chapter 1. 
Problem 1 is on page 1, so it is special. 
Page 2 contains only Chapter 1, Problem 4, so no special problem is on page 2. 
Chapter 2 problems start on page 3 and there are 2 problems. 
Since there is no problem 3 on page 3, there is no special problem on that page either. 
There is 1 special problem in her workbook.

Function Description
Complete the workbook function in the editor below. 
It should return an integer that represents the number of special problems in the workbook.

workbook has the following parameter(s):
n: an integer that denotes the number of chapters
k: an integer that denotes the maximum number of problems per page
arr: an array of integers that denote the number of problems in each chapter
*/

function workbook(n, k, arr) {
  var currentPage = 0;
  var count = 0;
  // calculate how many pages a chapter needs
  for (let chap = 0; chap < n; chap++) {
    var pages = arr[chap] % k === 0 ? arr[chap] / k : Math.floor(arr[chap] / k) + 1;
    var problems = 0;
    for (p = 1; p < pages; p++) {
      currentPage++;
      if (currentPage > problems && currentPage <= problems + k) count++;
      problems += k;
    }
    currentPage++;
    if (problems + k > arr[chap]) {
      if (currentPage > problems && currentPage <= problems + (arr[chap] % k)) count++;
      problems += arr[chap] % k;
    } else {
      if (currentPage > problems && currentPage <= problems + k) count++;
      problems += k;
    }
  }
  return count;
}

// const arr = [4, 2, 6, 1, 10];
// console.log(workbook(5, 3, arr));
const arr = [3, 8, 15, 11, 14, 1, 9, 2, 24, 31];
console.log(workbook(10, 5, arr));
