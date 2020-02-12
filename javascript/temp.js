// var foo = 1;
// function bar() {
//   console.log(foo);
//   foo = 10;
//   console.log(foo);
//   return;
//   function foo() {}
// }
// bar();
// console.log(foo);

// var arr = [];
// arr[0] = "a";
// arr[1] = "b";
// arr.foo = "c";
// arr[4] = "d";
// console.log(arr.length);
// console.log(arr.foo);
// console.log(arr);

// function aaa() {
//   return;
//   {
//     test: 1;
//   }
// }
// console.log(typeof aaa());

// function bar() {
//   return foo;
//   foo = 10;
//   function foo() {}
//   var foo = "11";
// }
// console.log(typeof bar());

// console.log("1" - -"1");

// console.log([] + [] + "foo".split(""));
// console.log(["f", "o"] + ["o", "o"]);

// var myArr = ["foo", "bar", "baz"];
// myArr[2];
// console.log(myArr);
// console.log("2" in myArr);
// console.log("3" in myArr);

function foo(a, b) {
  arguments[1] = 2;
  arguments[0] = 5;
  console.log(arguments);
  console.log(b);
  console.log(a);
}
foo(1);
