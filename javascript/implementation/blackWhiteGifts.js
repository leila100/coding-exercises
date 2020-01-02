/*
Taum is planning to celebrate the birthday of his friend, Diksha. 
There are two types of gifts that Diksha wants from Taum: one is black and the other is white. 
To make her happy, Taum has to buy b black gifts and w white gifts.

The cost of each black gift is bc units.
The cost of every white gift is wc units.
The cost of converting each black gift into white gift or vice versa is z units.
Help Taum by deducing the minimum amount he needs to spend on Diksha's gifts.

For example, if Taum wants to buy b=3 black gifts and w=5 white gifts at a cost of 
bc=3, wc=4 and conversion cost z=1, we see that he can buy a black gift for 3 and 
convert it to a white gift for 1, making the total cost of each white gift 4. 
That matches the cost of a white gift, so he can do that or just buy black gifts and white gifts. 
Either way, the overall cost is 3*3 + 5*4 = 29.

Function Description

Complete the function taumBday in the editor below. 
It should return the minimal cost of obtaining the desired gifts.

taumBday has the following parameter(s):

b: the number of black gifts
w: the number of white gifts
bc: the cost of a black gift
wc: the cost of a white gift
z: the cost to convert one color gift to the other color
*/

/*
 * Complete the 'taumBday' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER b
 *  2. INTEGER w
 *  3. INTEGER bc
 *  4. INTEGER wc
 *  5. INTEGER z
 */

function taumBday(b, w, bc, wc, z) {
  // if wc + z > bc, use bc
  // if bc + z > wc, use wc
  // else use conversion

  var black = BigInt(bc)
  var white = BigInt(wc)
  var bigZ = BigInt(z)
  var bigW = BigInt(w)
  var bigB = BigInt(b)
  var whiteConv = BigInt(white + bigZ)
  var blackConv = BigInt(black + bigZ)
  console.log(`whiteConv: ${whiteConv}, blackConv: ${blackConv}`)
  console.log(`initial white: ${white}, initial black: ${black}`)

  if (black > white && whiteConv < bc) black = whiteConv
  if (white > blackConv && blackConv < wc) white = blackConv
  console.log(`using white: ${white}, black: ${black}`)
  var cost = BigInt((bigB*black) + (bigW*white))
  return cost;
}

// console.log(taumBday(3, 5, 3, 4, 1))
// console.log(taumBday(10, 10, 1, 1, 1))
// console.log(taumBday(5, 9, 2, 3, 4))
// console.log(taumBday(3, 6, 9, 1, 1))
// console.log(taumBday(7, 7, 4, 2, 1))
// console.log(taumBday(3, 3, 1, 9, 2))
// console.log(taumBday(1, 1, 0, 1, 1))

console.log(taumBday(742407782, 90529439, 847666641, 8651519, 821801924));
// console.log(taumBday(142640749, 652432197, 701695848, 936714099,  324221606));
// console.log(taumBday(736418699, 754161925, 912285746, 841360803,  736841333));
// console.log(taumBday(177076565, 651852957, 926160119, 137199984,  872396383));
// console.log(taumBday(232813954, 654376491, 933554781, 63130979 , 441062505));
// console.log(taumBday(988402860, 283959645, 572488886, 802335530,  193057740));
// console.log(taumBday(571683259, 397259663, 136103531, 271866251,  405911181));
// console.log(taumBday(810421806, 414506999, 58343377 ,512117653 , 203737449));
// console.log(taumBday(235081335, 101052703, 957899374, 147367080,  942413506));
// console.log(taumBday(547257058, 324443644, 594266462, 325933528,  461643627));

