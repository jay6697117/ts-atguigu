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

/* class A {}

class B extends A {
  constructor() {
    A.call(this);
    // A.prototype.constructor.call(this)
    // super();
  }
}
console.dir(A);
console.dir(B); */

/* class A {
  constructor() {
    console.log(new.target.name); //输出类名
  }
}
class B extends A {
  constructor() {
    super();
  }å
}

new A(); // A
new B(); // B */

/* // 作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错
class A {}
class B extends A {
  m() {
    super(); // 报错
  }
} */

/* // super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
class A {
  p() {
    return 666;
  }
}
class B extends A {
  constructor() {
    super(); // super === A.prototype.constructor || A
    console.log(`super.p === A.prototype.p :`, super.p === A.prototype.p); // true: super === A.prototype
    console.log(`super.p :`, super.p); // A.prototype.p: super === A.prototype
    console.log(super.p()); // 666
  }
}

let a = new A();
let b = new B();

总结:
1. 第一种情况，super作为函数调用时，代表父类的构造函数。 super === A.prototype.constructor || A
2. 第二种情况，super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。 super === A.prototype
 */

/*


class A {
  p1 = 1;
  constructor() {
    this.p2 = 2;
    A.prototype.p4 = 4;//属性定义在原型对象上
  }
  p3() {
    return this.p1 + '-' + this.p2;
  }
}

class B extends A {
  constructor() {
    super(); // super === A.prototype.constructor || A
    console.log(`super.p3`, super.p3);
    console.log(`super.p4`, super.p4);//属性定义在父类的原型对象上，super就可以取到
  }
  get m() {
    // return super.p1;
    return A.prototype.p1;
  }
  get n() {
    // return super.p2;
    return A.prototype.p2;
  }
}

let a = new A();
let b = new B();
console.log(`a:`, a);
console.log(`b:`, b);
console.log(`b.p1:`, b.p1);
console.log(`b.p2:`, b.p2);
console.log(`b.m:`, b.m);
console.log(`b.n:`, b.n);
console.log(`b.p3():`, b.p3());
console.log(`b.p4:`, b.p4); //属性定义在父类的原型对象上，super就可以取到

*/

/*
// ES6 规定，在子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例
class A {
  constructor() {
    this.x = 1;
  }
  print() {
    console.log(`this:`, this);
    console.log(`this === A.prototype :`, this === A.prototype);
    console.log(`this === b :`, this === b);
    console.log(this.x);
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  m() {
    A.prototype.print();
    console.log('----------')
    A.prototype.print.call(this) //2
    console.log('----------')
    super.print(); // 2
    console.log('----------')
    super.print.call(this); // 2
    console.log('----------')
    super.print.call(a); // 1
  }
}

let a = new A();
let b = new B();
// console.log(`a:`, a);
// console.log(`b:`, b);
// a.print(); // 1
// b.print(); //2
b.m(); // 2
*/

/*
// 由于this指向子类实例，所以如果通过super对某个属性赋值，这时super就是this，赋值的属性会变成子类实例的属性
class A {
  constructor() {
    this.x = 1;
  }
}
class B extends A {
  constructor() {
    super();
    this.x = 2;
    super.x = 3; // this.x = 3
    console.log(super.x); // undefined 备注: super.x === A.prototype.x
    console.log(this.x); // 3
  }
}
let a = new A();
let b = new B();
console.log(`a`, a)
console.log(`b`, b)
*/

/*
// 如果super作为对象，用在静态方法之中，这时super将指向父类，而不是父类的原型对象。
class Parent {
  //静态方法:Parent 类下面
  static myMethod(msg) {
    console.log('static', msg);
  }
  //实例方法:Parent.prototype 原型对象下面
  myMethod(msg) {
    console.log('instance', msg);
  }
}

class Child extends Parent {
  //静态方法:Child 类下面
  static myMethod(msg) {
    super.myMethod(msg); // Parent.myMethod(msg) || super 指向父类
  }
  //实例方法:Child.prototype 原型对象下面
  myMethod(msg) {
    super.myMethod(msg); // Parent.prototype.myMethod(msg) || super 指向父类的原型对象
  }
}

Child.myMethod(1); // static 1
const child = new Child();
child.myMethod(2); // instance 2  ||  Parent.prototype.myMethod.call(child, msg) || Parent.prototype.myMethod(msg)

// 总结: super在静态方法之中指向父类，在普通方法之中指向父类的原型对象

*/

/*
// 在子类的静态方法中通过super调用父类的方法时，方法内部的this指向当前的子类，而不是子类的实例
class A {
  constructor() {
    this.x = 1;
  }
  static print() {
    console.log(`this === B:`, this === B); // this === B || this在静态方法之中指向当前的子类
    console.log(this.x);
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  static m() {
    console.log(`super.print === A.print :`, super.print === A.print);
    super.print(); // super === A || super在静态方法之中指向父类
  }
}
// console.dir(A);
// console.dir(B);
// let a = new A();
// let b = new B();
// console.log(`a:`, a)
// console.log(`b:`, b)
// A.print() //undefined
B.m(); //undefined
console.log('---------');
B.x = 3;
B.m(); // 3

// 上面代码中，静态方法B.m里面，super.print指向父类的静态方法。这个方法里面的this指向的是B，而不是B的实例
*/

/*
// 注意，使用super的时候，必须显式指定是作为函数、还是作为对象使用，否则会报错
class A {
  constructor() {
    this.baz = 111;
  }
  foo(){
    console.log('foo')
  }
}

class B extends A {
  constructor() {
    super();
    console.log(`super.foo:`, super.foo); // 必须显式指定是作为函数、还是作为对象使用，否则会报错
  }
}

console.log(new A())
console.log('-----------')
console.log(new B())
*/

/*
class A {}
class B extends A {
  constructor() {
    super();
    // super.valueOf()表明super是一个对象
    console.log(super.valueOf()); //由于super使得this指向B的实例，所以super.valueOf()返回的是一个B的实例
    console.log(`super.valueOf() === this :`, super.valueOf() === this); //true
    console.log(super.valueOf() instanceof B); // true
  }
}
let b = new B();
*/

/*
// 由于对象总是继承其他对象的，所以可以在任意一个对象中，使用super关键字
class A {}
class B extends A {
  constructor() {
    super();
    console.log(`super.valueOf() === this :`, super.valueOf() === this);//super.valueOf() === this
  }
}
let obj = new B();
obj = {
  toString() {
    return super.valueOf()
  }
};
console.log(`obj.toString() :`, obj.toString());
console.log(`obj.toString() === obj :`, obj.toString() === obj);
*/

// 类的 prototype 属性和__proto__属性
// https://wangdoc.com/es6/class-extends.html#%E7%B1%BB%E7%9A%84-prototype-%E5%B1%9E%E6%80%A7%E5%92%8C__proto__%E5%B1%9E%E6%80%A7

/*
class A {
}

class B extends A {
}

B.__proto__ === A // true B类父亲是A类
B.prototype.__proto__ === A.prototype // true B类原型对象的父亲是A类的原型对象
*/

/*
class A {}
class B {}
// B 的实例继承 A 的实例
Object.setPrototypeOf(B.prototype, A.prototype);
// B 继承 A 的静态属性
Object.setPrototypeOf(B, A);
const b = new B();
console.log(`b:`, b);
*/

/*
const setPrototypeOfFn = function (obj, proto) {
  obj.__proto__  = proto;
  return obj;
};
// Object.setPrototypeOf = setPrototypeOfFn;
class A {}
class B {}
class C {}
class D {}
setPrototypeOfFn(B.prototype, A.prototype);
setPrototypeOfFn(B, A);
Object.setPrototypeOf(D.prototype, C.prototype);
Object.setPrototypeOf(D, C);
const b = new B();
console.log(`b:`, b);
console.log(B.prototype.__proto__ === A.prototype)
console.log(B.__proto__ === A)
console.log('-------------------------')
const d = new D();
console.log(`d:`, d);
console.log(D.prototype.__proto__ === C.prototype)
console.log(D.__proto__ === C)
*/

/*
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);
console.log(`me 000:`, me)
console.log(me.__proto__ === person)

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten
console.log(`me 001:`, me);

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"
*/

/*
B.prototype = Object.create(A.prototype);
// 等同于
B.prototype.__proto__ = A.prototype;
*/

/*
class A extends Object {}
console.log(A.__proto__ === Object);
console.log(A.prototype.__proto__ === Object.prototype);
*/

/*
class A {}
class B extends A {}
console.log(B.__proto__ === A);
console.log(B.prototype.__proto__ === A.prototype);
*/

/*
class A {}
console.dir(A);
A.__proto__ === Function.prototype; // true
A.prototype.__proto__ === Object.prototype; // true
// 这种情况下，A作为一个基类（即不存在任何继承），就是一个普通函数，所以直接继承Function.prototype。但是，A调用后返回一个空对象（即Object实例），所以A.prototype.__proto__指向构造函数（Object）的prototype属性
*/


/*
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  printName() {
    console.log('hahaha');
  }
}

class ColorPoint extends Point {
  constructor(x, y, z) {
    super(x, y);
    this.color = z;
  }
}

const p1 = new Point(2, 3);
const p2 = new ColorPoint(2, 3, 'red');

console.log(Point.prototype);
Point.prototype.printName();

//子类修改父类原型对象的方法 printName
p2.__proto__.__proto__.printName = function () {
  console.log('hello world hahaha');
};

//父类原型对象的方法 printName 改变了
console.log(Point.prototype);
Point.prototype.printName();
*/

// 原生构造函数的继承
// https://wangdoc.com/es6/class-extends.html#%E5%8E%9F%E7%94%9F%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%9A%84%E7%BB%A7%E6%89%BF
