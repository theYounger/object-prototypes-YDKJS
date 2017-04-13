function baz() {
  console.log(this.wtf);
  console.log("baz");
  debugger;
  bar();
}

function bar() {
  console.log("bar");
  debugger;
  foo();
}

function foo() {
  console.log("foo");
  debugger;
}
var wtf = 2;
baz();
