function identify() {
  identify.state1 = "hi from inside identify"
  return this.name.toUpperCase();
}

function speak() {
  var greeting = "Hello, I'm " + identify.call(this);
  console.log(greeting);
}

var me = {
  name:"Kyle"
};

var you = {
  name: "Reader"
}
console.log(identify.state1);
identify.call( me );
identify.call( you );
console.log(identify.state1);
speak.call( me );
speak.call( you );