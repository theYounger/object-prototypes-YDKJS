// Let's create an example program that plays with the this keyword
// implementing all the different rules.

function foo() {
  console.log(this);
}

function bar() {
  console.log(this);
}

function baz() {
  console.log(this);
}

var a = {
  a_prop: "a_test"

};

var b = {
  b_prop: "b_test"
}

var c = {
  c_prop: "c_test"
}

// What call site do we want?
// If this exists in in a program, what will be the value of
// this when executing.

// What do we know about the rules that can aid us in this?

// var arr = [a, b, c];

// for(var i = 0; i < 5; i++) {
//   let obj = {};
//   obj["this" + i] = "test_val";
//   arr.push(obj);

//   arr.pop();
//   console.log(arr);
// }

// console.log("hello");

foo();