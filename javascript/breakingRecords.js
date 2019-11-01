/*
Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
She tabulates the number of times she breaks her season record for most points and least points in a game. 
Points scored in the first game establish her record for the season, and she begins counting from there.
for example: scores = [10 5 20 20 4 5 2 25 1] 
output should be [2, 4] 
Index 0 is for breaking most points records, and index 1 is for breaking least points records.
*/

function breakingRecords(scores) {
  // Keep track of min_record, max_record
  //  for each score, if less then min_record, answer[1] += 1
  //  if greater than max_record, answer[0] += 1
  let min_record;
  let max_record;
  const answer = [0, 0];
  min_record = max_record = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > max_record) {
      answer[0] += 1;
      max_record = scores[i];
    }
    if (scores[i] < min_record) {
      answer[1] += 1;
      min_record = scores[i];
    }
  }
  console.log(answer);
  return answer;
}

const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
breakingRecords(scores);
