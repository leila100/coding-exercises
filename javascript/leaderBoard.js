/*
Alice is playing an arcade game and wants to climb to the top of the leaderboard and wants to track her ranking. 
The game uses Dense Ranking, so its leaderboard works like this:

The player with the highest score is ranked number 1 on the leaderboard.
Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
For example, the four players on the leaderboard have high scores of 100, 90, 90, and 80. 
Those players will have ranks 1, 2, 2, 3 and , respectively. If Alice's scores are 70, 80 and 105, 
her rankings after each game are 4th, 3rd and 1st.
*/
function insert_score(score, leaderboard) {
  for (let i = 0; i < leaderboard.length; i++) {
    if (leaderboard[i] < score) return i;
  }
  return leaderboard.length;
}

function climbingLeaderboard(scores, alice) {
  // make the leaderboard a set to remove duplicates, then sort it
  // for each score, get the index on the leaderboard where it should be inserted (between a score higher, and a score lower)
  const scoresNoDuplicates = new Set(scores).values();
  const scores_arr = Array.from(scoresNoDuplicates).sort(function(a, b) {
    return b - a;
  });
  console.log(scores_arr);
  result = [];
  for (let i = 0; i < alice.length; i++) {
    let index = scores_arr.length;
    // find where score fits in the leaderboard
    for (let j = 0; j < scores_arr.length; j++) {
      if (scores_arr[j] <= alice[i]) {
        index = j;
        break;
      }
    }
    result.push(index + 1);
  }
  return result;
}

const scores = [100, 90, 90, 80, 75, 60];
const alice = [50, 65, 77, 90, 102];
console.log(climbingLeaderboard(scores, alice));
