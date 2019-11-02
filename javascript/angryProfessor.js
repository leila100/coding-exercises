/*
A Discrete Mathematics professor has a class of students. 
Frustrated with their lack of discipline, he decides to cancel class if fewer than some number of students are present when class starts. 
Arrival times go from on time (arrivaltime <= 0) to arrived late (arrivaltime > 0).

Given the arrival time of each student and a threshhold number of attendees, determine if the class is canceled.
Non-positive arrival times (a[i]<=0) indicate the student arrived early or on time; 
positive arrival times (a[i]>0) indicate the student arrived a[i] minutes late.
*/

function angryProfessor(k, a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) count += 1;
  }
  if (count >= k) return "NO";
  else return "YES";
}
