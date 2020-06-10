/*
My cake shop is so popular, I'm adding some tables and hiring wait staff so folks can have a cute sit-down cake-eating experience.

I have two registers: one for take-out orders, and the other for the other folks eating inside the cafe. All the customer orders get combined into one list for the kitchen, where they should be handled first-come, first-served.

Recently, some customers have been complaining that people who placed orders after them are getting their food first. Yikes—that's not good for business!

To investigate their claims, one afternoon I sat behind the registers with my laptop and recorded:

The take-out orders as they were entered into the system and given to the kitchen. (take_out_orders)
The dine-in orders as they were entered into the system and given to the kitchen. (dine_in_orders)
Each customer order (from either register) as it was finished by the kitchen. (served_orders)
Given all three lists, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.

We'll represent each customer order as a unique integer.

As an example,

  Take Out Orders: [1, 3, 5]
 Dine In Orders: [2, 4, 6]
  Served Orders: [1, 2, 4, 6, 5, 3]
would not be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

But,

  Take Out Orders: [17, 8, 24]
 Dine In Orders: [12, 19, 2]
  Served Orders: [17, 8, 12, 19, 24, 2]
would be first-come, first-served.
*/

const inOrder = (takeOuts, dineIn, served) => {
  if (served.length !== takeOuts.length + dineIn.length) return false;
  const takeOutSet = new Set(takeOuts);
  const dineInSet = new Set(dineIn);
  const servedTakeOut = [];
  const servedDineIn = [];
  for (order of served) {
    if (takeOutSet.has(order)) servedTakeOut.push(order);
    else if (dineInSet.has(order)) servedDineIn.push(order);
  }
  console.log(servedTakeOut);
  console.log(servedDineIn);
  if (takeOuts.join("") !== servedTakeOut.join("") || dineIn.join("") !== servedDineIn.join("")) return false;
  return true;
};

const inOrder2 = (takeOuts, dineIn, served) => {
  let x = 0;
  let y = 0;

  for (i = 0; i < served.length; i++) {
    if (served[i] === takeOuts[x]) x++;
    else if (served[i] === dineIn[y]) y++;
    else return false;
  }
  return true;
};

const takeOuts = [17, 8, 24];
const dineIn = [12, 19, 2];
const served = [17, 8, 12, 19, 24, 2];
// const takeOuts = [1, 3, 5];
// const dineIn = [2, 4, 6];
// const served = [1, 2, 4, 6, 5, 3];
console.log(inOrder2(takeOuts, dineIn, served));
