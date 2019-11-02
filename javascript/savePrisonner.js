/*
A jail has a number of prisoners and a number of treats to pass out to them. 
Their jailer decides the fairest way to divide the treats is to seat the prisoners around a circular table in sequentially numbered chairs. 
A chair number will be drawn from a hat. 
Beginning with the prisoner in that chair, one candy will be handed to each prisoner sequentially around the table until all 
have been distributed.

The jailer is playing a little joke, though. 
The last piece of candy looks like all the others, but it tastes awful. 
Determine the chair number occupied by the prisoner who will receive that candy.

For example, there are 4 prisoners and 6 pieces of candy. The prisoners arrange themselves in seats numbered 1 to 4. 
Let's suppose two is drawn from the hat. Prisoners receive candy at positions 2 3 4 1 2 3. 
The prisoner to be warned sits in chair number 3.
*/

function saveThePrisoner(n, m, s) {
  //  number of prisoners left after all loops
  //   let reminder;
  //   reminder = m - n * Math.floor(m / n);
  //   console.log(`reminder: ${reminder}`);
  const seat_last = s + m - 1;
  console.log(`seat_last: ${seat_last}`);
  if (seat_last % n === 0) return n;
  if (seat_last > n) return seat_last % n;
  else return seat_last;
}

console.log(saveThePrisoner(2, 2, 1));
// console.log(saveThePrisoner(5, 2, 5));
// console.log(saveThePrisoner(3, 7, 3));
