/*
The inputs should still be provided to the program by replacing the values at addresses 1 and 2, just like before. 
In this program, the value placed in address 1 is called the noun, and the value placed in address 2 is called the verb. 
Each of the two input values will be between 0 and 99, inclusive.

Once the program has halted, its output is available at address 0, also just like before. 
Each time you try a pair of inputs, make sure you first reset the computer's memory to the values 
in the program (your puzzle input) - in other words, don't reuse memory from a previous attempt.

Find the input noun and verb that cause the program to produce the output 19690720.
What is 100 * noun + verb? (For example, if noun=12 and verb=2, the answer would be 1202.)
*/

const fs = require("fs");

decode = codes => {
  let counter = 0;
  while (codes[counter] !== "99") {
    if (codes[counter] === "1") {
      const val1 = codes[parseInt(codes[counter + 1])];
      const val2 = codes[parseInt(codes[counter + 2])];
      codes[parseInt(codes[counter + 3])] = parseInt(val1) + parseInt(val2);
      counter += 4;
    } else if (codes[counter] === "2") {
      const val1 = codes[parseInt(codes[counter + 1])];
      const val2 = codes[parseInt(codes[counter + 2])];
      codes[parseInt(codes[counter + 3])] = parseInt(val1) * parseInt(val2);
      counter += 4;
    } else {
      console.log(`code ${codes[counter]} not recognized`);
    }
  }
  return codes;
};

intCodeComputer = () => {
  fs.readFile("input.txt", (err, data) => {
    if (err) throw err;
    const codes = data.toString().split(",");
    // Find noun and verb
    for (let noun = 0; noun <= 99; noun++) {
      for (let verb = 0; verb <= 99; verb++) {
        const oldCodes = [...codes];
        oldCodes[1] = noun;
        oldCodes[2] = verb;
        const newCodes = decode(oldCodes);
        if (newCodes[0] === 19690720) {
          const answer = 100 * noun + verb;
          console.log(`Found them: noun=${noun}, verb=${verb}, answer=${answer}`);
          return;
        }
      }
    }
    // codes[1] = "12";
    // codes[2] = "2";
    // console.log(codes);
    // console.log(decode(codes));
  });
};

intCodeComputer();
