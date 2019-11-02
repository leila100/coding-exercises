/*
Alice is playing an arcade game and wants to climb to the top of the leaderboard and wants to track her ranking. 
The game uses Dense Ranking, so its leaderboard works like this:

The player with the highest score is ranked number 1 on the leaderboard.
Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
For example, the four players on the leaderboard have high scores of 100, 90, 90, and 80. 
Those players will have ranks 1, 2, 2, 3 and , respectively. If Alice's scores are 70, 80 and 105, 
her rankings after each game are 4th, 3rd and 1st.
*/
function insert_score(score, leaderboard, start_index, end_index) {
  //   console.log(`score: ${score}, start: ${start_index}, end: ${end_index}`);
  const length = end_index - start_index;
  if (length <= 1) {
    for (let i = start_index; i <= end_index; i++) {
      if (leaderboard[i] <= score) return i;
    }
    return end_index + 1;
  }
  const middle = Math.floor(length / 2) + start_index;
  if (score > leaderboard[middle]) {
    return insert_score(score, leaderboard, start_index, middle);
  } else {
    return insert_score(score, leaderboard, middle, end_index);
  }
}

function climbingLeaderboard(scores, alice) {
  // make the leaderboard a set to remove duplicates, then sort it
  // for each score, get the index on the leaderboard where it should be inserted (between a score higher, and a score lower)
  const scoresNoDuplicates = new Set(scores).values();
  const scores_arr = Array.from(scoresNoDuplicates).sort(function(a, b) {
    return b - a;
  });
  const result = [];
  for (let i = 0; i < alice.length; i++) {
    const index = insert_score(alice[i], scores_arr, 0, scores_arr.length - 1);
    result.push(index + 1);
  }
  return result;
}

const scores = [100, 90, 90, 80, 75, 60];
const alice = [50, 65, 77, 90, 102];
console.log(climbingLeaderboard(scores, alice));
