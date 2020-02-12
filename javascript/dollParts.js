/*
We have a bin of doll parts in a factory. Each part goes to a doll with a specific, unique name. 
Each part will be described by a string, with the name of the doll and the part name separated by an underscore, like "Mary_arm".
All dolls are made of the same types of parts, and we have a list of all of the parts that form a complete doll. 
Given a list of available parts, return a list of doll names for which will we be able to create at least one complete doll.
complete_part_list_1 = "eyes,nose,mouth,ears"
complete_part_list_2 = "eyes,nose,mouth,ears,feet"
parts = [
    "Bette_feet",
    "Bette_eyes",
    "Colleen_nose",
    "Astrid_eyes",
    "Doug_eyes",
    "Bette_nose",
    "Astrid_nose",
    "Doug_mouth",
    "Bette_ears",
    "Bette_mouth",
    "Colleen_nose",
    "Colleen_arms",
    "Astrid_feet",
    "Colleen_nose",
    "Colleen_mouth",
    "Doug_nose",
    "Doug_ears",
    "Astrid_hands",
    "Doug_eyes" ]
# Expected output for parts list 1 (in any order):  ["Doug", "Bette"]
# Expected output for parts list 2 (in any order):  ["Bette"]
*/

function dolls(parts, list) {
  // sort doll parts into groups by doll name
  const dollNames = {};
  for (let p of parts) {
    const [name, part] = p.split("_");
    if (!(name in dollNames)) dollNames[name] = new Set();
    dollNames[name].add(part);
  }
  const listParts = list.split(",");
  const dolls = Object.keys(dollNames);
  const answer = [];
  for (let doll of dolls) {
    let foundAll = true;
    for (let part of listParts) {
      if (!dollNames[doll].has(part)) {
        foundAll = false;
        break;
      }
    }
    if (foundAll) answer.push(doll);
  }
  return answer;
}

const parts = [
  "Bette_feet",
  "Bette_eyes",
  "Colleen_nose",
  "Astrid_eyes",
  "Doug_eyes",
  "Bette_nose",
  "Astrid_nose",
  "Doug_mouth",
  "Bette_ears",
  "Bette_mouth",
  "Colleen_nose",
  "Colleen_arms",
  "Astrid_feet",
  "Colleen_nose",
  "Colleen_mouth",
  "Doug_nose",
  "Doug_ears",
  "Astrid_hands",
  "Doug_eyes"
];

console.log(dolls(parts, "eyes,nose,mouth,ears"));
console.log(dolls(parts, "eyes,nose,mouth,ears,feet"));
