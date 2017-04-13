function foo() {
  var a = 2;
  this.bar();
}

function bar() {
  console.log(this.a)
}

foo();

/*
  What do I hypothesize is going to happen?
  "this" is going to reference the global object.
  We call the method bar() on the global object.
  global.bar having been set with function bar().
  However, there is no global variable "a". "a"
  was declared in scope of foo.
  We THEREFORE console.log undefined.

  Hypothesis mistaken. I believed function declarations
  would also be stored in Global, and could therefore
  be accessed with "this". Unlike variables, functions are
  not the case.
*/
