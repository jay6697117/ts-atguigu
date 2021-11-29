/*
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '666';
  }
}

class ColorPoint extends Point {
  // 它在这里表示父类的构造函数, 用来新建父类的this对象
  constructor(x, y, color) {
    super(x, y); //调用父类的constructor(x, y)
    this.color = color;
  }
  toString() {
    return this.color + ' - ' + super.toString(); // 调用父类的toString()
  }
}

console.dir(Point);
console.dir(ColorPoint);
console.log('-------------------------------');
const p = new Point(1, 2);
const cp = new ColorPoint(3, 4, 'red');
console.log(`p:`, p);
console.log(`cp:`, cp);
console.log('-------------------------------');
console.log(p.toString());
console.log(cp.toString());
*/

/*
class Point {
  x = 1;
  y = 2;
}
class ColorPoint extends Point {
  constructor(...args) {
    super(...args);
  }
}
let p = new Point();
let cp = new ColorPoint(); // ReferenceError
console.log(`p:`, p);
console.log(`cp:`, cp);
*/

/*
function foo(...args) {
  console.log(Object.prototype.toString.call(args));
  console.log(`args:`, args);
  args.forEach(element => {
    console.log(`element:`, element);
  });
}
foo(1, 2, 3);

function baz(...arr) {
  console.log(`arr`, arr);
}

const arr = [1, 2, 3];
baz(...arr);
*/

/*

// 在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，基于父类实例，只有super方法才能调用父类实例

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    // this.color = color; // Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    super(x, y);
    this.color = color; // 正确
  }
}

const cp  = new ColorPoint(1,2,'red');
console.log(`cp:`, cp)

console.log(cp instanceof ColorPoint) // true：爸爸
console.log(cp instanceof Point) // true：爷爷

*/


/*

class A {
  static hello() {
    console.log('hello world');
  }
}
class B extends A {}
console.dir(A);
console.dir(B);
B.hello(); // hello world

const res = Object.getPrototypeOf(B);
console.log(`res :`, res);
console.log(`res === A :`, res === A);
console.log(`B.__proto__ === A ;`, B.__proto__ === A);
console.log(`new B() instanceof A :`, new B() instanceof A);

*/
