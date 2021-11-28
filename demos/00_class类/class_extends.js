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
