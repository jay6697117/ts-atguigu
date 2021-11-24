/*
 * @Author: 张金辉
 * @LastEditors: Please set LastEditors
 * @Description: Class基本语法 和 对象属性配置
 * @FilePath: /ts-atguigu/demo.js
 */

// 1.class 基本语法

/*

class MyClass {
  // class 方法
  constructor() {
    //code...
  }
  method1() {
    //code...
  }
  method2() {
    //code...
  }
  method3() {
    //code...
  }
  // other methods...
}

*/

/**
 * 注解:
 * 然后使用 new MyClass() 来创建具有上述列出的所有方法的新对象。
 * new 会自动调用 constructor() 方法，因此我们可以在 constructor() 中初始化对象。
 */

// -------------------------------------------------------------------

// 2.实例化一个对象

/*

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    alert(`我的name: ${this.name}`);
  }
}

const user = new User('张金辉', 31);
console.log(`user:`, user);
user.sayHi();

*/

/**
 * 注解:
 * 当 new User('张金辉', 31) 被调用
 * 1.一个新对象被创建
 * 2.constructor 使用给定的参数运行，并为其分配 this.name | this.age
 */

// -------------------------------------------------------------------

// 3.什么是 class？

/*

class User {
  constructor(name,age) {
    this.name = name;
    this.age = age
  }
  sayName() {
    console.log(this.name);
  }
  sayAge() {
    console.log(this.name);
  }
}

const user = new User('lily',12);
console.log(`user:`, user)
console.log(`User:`, User);
console.log(`User.constructor`, User.constructor);
console.log(`User.prototype`, User.prototype);
console.log(typeof User); // function

*/

// -------------------------------------------------------------------

// 4.不仅仅是语法糖

/*

//4.1 构造函数
// 'use strict';
function User1(name, name) {
  // 重复参数严格模式会报错
  console.log(`this ###### 001`, this);
  this.name = name;
}
User1.prototype = {
  constructor: User1,
  sayName() {
    console.log(`this 001 ----------:`, this);
    console.log(`this.name 001:`, this.name);
  }
};
const user1 = new User1('lily 001', 'lily 001.1');
// console.log(`User1():`, User1()); // 不会报错
console.log(`User1:`, User1);
console.log(`User1.prototype`, User1.prototype);
console.log('--------1--------');
for (const key in User1.prototype) {
  if (Object.hasOwnProperty.call(User1.prototype, key)) {
    console.log(`key 001:`, key, ' -- ', User1.prototype[key]);
  }
}
console.log('--------2--------');
console.log(`user1:`, user1);
user1.sayName();

//4.2 class类
class User2 {
  constructor(name) {
    console.log(`this ###### 001`, this);
    this.name = name;
  }
  sayName() {
    console.log(`this 002 ----------:`, this);
    console.log(`this.name 002:`, this.name);
  }
}
const user2 = new User2('lily 002');
// console.log(`User2():`, User2()); //TypeError: Class constructor User2 cannot be invoked without 'new'
console.log(`User2:`, User2);
console.log(`User2.prototype`, User2.prototype);
console.log('---------3-------');
for (const key in User2.prototype) {
  if (Object.hasOwnProperty.call(User2.prototype, key)) {
    console.log(`key 002:`, key, ' -- ', User2.prototype[key]);
  }
}
console.log('---------4-------');
console.log(`user2:`, user2);
user2.sayName();

*/

/**
 * 构造器函数和class类的重大差异
 * 1.首先，通过 class 创建的函数具有特殊的内部属性标记 [[IsClassConstructor]]: true。因此，它与手动创建并不完全相同。
 * 2.类方法不可枚举。 类定义将 "prototype" 中的所有方法的 enumerable 标志设置为 false。
 * 这很好，因为如果我们对一个对象调用 for..in 方法，我们通常不希望 class 方法出现。
 * 3.类总是使用 use strict。 在类构造中的所有代码都将自动进入严格模式。
 */

// 5.类表达式

/**
 * 命名类表达式（Named Class Expression
 * (规范中没有这样的术语，但是它和命名函数表达式类似)
 */

/*

const User = class UserInner {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    alert(`this.name: ${this.name}`);
    console.log(`this.name:`, this.name);
    // console.log('User:', User);
    // console.log(`UserInner:`, UserInner); // UserInner这个变量仅在类内部可见
  }
};

const user = new User('zjh');
console.log(`user:`, user);
user.sayName();
console.log(`UserInner:`, UserInner); //ReferenceError: UserInner is not defined

*/

/*

function makeClassUser() {
  return class { // 返回一个匿名类
    constructor(name) {
      this.name = name;
    }
    sayName() {
      alert(`this.name: ${this.name}`);
      console.log(`this.name:`, this.name);
    }
  };
}

let User = makeClassUser();
new User('张金辉').sayName();

*/

// 6.Getters/setters

/*

const obj = { name: 'bruce' };
console.log('----------------------------------------------------------------------');
console.log(`obj 000:`, obj);
const descriptor0 = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(`descriptor0:`, descriptor0);
console.log(`JSON.stringify(descriptor0):\n`, JSON.stringify(descriptor0, null, 2));

*/

/*
// 属性描述符: 默认值
{
  "value": "bruce",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/

/*

console.log('----------------------------------------------------------------------');
Object.defineProperty(obj, 'anotherName', {
  value: 'jack',
  // 手动将三个标志的默认值false设置为true
  writable: true,
  enumerable: true,
  configurable: true
});
console.log(`obj 001:`, obj);
const descriptor1 = Object.getOwnPropertyDescriptor(obj, 'anotherName');
console.log(`descriptor1:`, descriptor1);
console.log(`JSON.stringify(descriptor1):\n`, JSON.stringify(descriptor1, null, 2));
console.log('----------------------------------------------------------------------');

*/

/*
// 属性描述符: 默认值
{
  "value": "jack",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/

// 6.1 practice 1

/*

'use strict';
const user = {
  name: 'John'
};

let desc;
desc = Object.getOwnPropertyDescriptor(user, 'name');
console.log(`desc 000:`, desc);
user.name = 'John1';

Object.defineProperty(user, 'name', {
  writable: false
});
desc = Object.getOwnPropertyDescriptor(user, 'name');
console.log(`desc 001:`, desc);
user.name = 'John2'; // Error: Cannot assign to read only property 'name'

desc = Object.getOwnPropertyDescriptor(user, 'name');
console.log(`desc 002:`, desc);

*/

// 6.2 practice 2

/*
'use strict';

// const user = {
//   name: 'lucy'
// };
// const desc = Object.getOwnPropertyDescriptor(user, 'name');
// console.log(`desc:`, desc);

// const temp = {name:''};
const temp = {};
Object.defineProperty(temp, 'name', {
  value: 'bruce',
  writable: true,
  configurable: true
});
console.log(`temp 000:`, temp);
const desc1 = Object.getOwnPropertyDescriptor(temp, 'name');
console.log(`desc1:`, desc1);
temp.name = 'lalala';
console.log(`temp 001:`, temp);
const desc2 = Object.getOwnPropertyDescriptor(temp, 'name');
console.log(`desc2:`, desc2);

let user = {
  name: 'bruce',
  toString() {
    return this.name + '';
  }
};

const desc = Object.getOwnPropertyDescriptor(user, 'toString');
console.log(`desc:`, desc);

Object.defineProperty(user, 'toString', {
  enumerable: false
});
const desc1 = Object.getOwnPropertyDescriptor(user, 'toString');
console.log(`desc1:`, desc1);

let tempArr = [];
for (const key in user) {
  if (Object.hasOwnProperty.call(user, key)) {
    const tempObj = {};
    const element = user[key];
    tempObj[key] = element;
    tempArr.push(tempObj);
  }
}
console.log(`tempArr:`, tempArr);
console.log(`Object.keys(user):`, Object.keys(user));
*/

// 6.3 practice 3

/*

'use strict';
// let desc = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(`desc:`, desc);
// console.log(`JSON.stringify(desc, null, 2):\n`, JSON.stringify(desc, null, 2));
// // console.log(`Math.PI`, Math.PI);
// Object.defineProperty(Math, 'PI', {
//   configurable: true
// });
// Math.PI = 123456; // 依然会报错

const temp = { name: 'hehehe' };
console.log(`temp 01:`, temp);
console.log('-----------------------------------------------');
const desc0 = Object.getOwnPropertyDescriptor(temp, 'name');
console.log(`desc0:`, desc0);
console.log(`JSON.stringify(desc0, null, 2):\n`, JSON.stringify(desc0, null, 2));
console.log('-----------------------------------------------');

Object.defineProperty(temp, 'name', {
  configurable: false
});
const desc1 = Object.getOwnPropertyDescriptor(temp, 'name');
console.log(`desc1:`, desc1);
console.log(`JSON.stringify(desc1, null, 2):\n`, JSON.stringify(desc1, null, 2));
console.log('-----------------------------------------------');

temp.name = 'lalala';
const desc2 = Object.getOwnPropertyDescriptor(temp, 'name');
console.log(`desc2:`, desc2);
console.log(`JSON.stringify(desc2, null, 2):\n`, JSON.stringify(desc2, null, 2));
console.log('-----------------------------------------------');

delete temp.name;
console.log(`temp 02:`, temp);
console.log('-----------------------------------------------');

*/

/*

// 将 user.name 设置为一个“永不可改”的常量
'use strict';
let user = {
  name: 'John'
};
const desc0 = Object.getOwnPropertyDescriptor(user, 'name');
console.log(`desc0:`, desc0);
Object.defineProperty(user, 'name', {
  writable: false,
  configurable: false
});
const desc1 = Object.getOwnPropertyDescriptor(user, 'name');
console.log(`desc1:`, desc1);
// 不能修改 user.name 或它的标志
// 下面的所有操作都不起作用：
user.name = 'Pete';
delete user.name;
Object.defineProperty(user, 'name', { value: 'Peter' });

*/

// 6.4 practice 4
// 将 user.name 设置为一个“永不可改”的常量
// 'use strict';
// let user = {
//   name: 'John'
// };
// const desc0 = Object.getOwnPropertyDescriptor(user, 'name');
// const desc00 = Object.getOwnPropertyDescriptors(user);
// console.log(`desc0:`, desc0);
// console.log(`desc00:`, desc00);
// Object.defineProperties(user, {
//   name: {
//     value: 'nancy',
//     writable: false,
//     configurable: false
//   }
// });
// const desc1 = Object.getOwnPropertyDescriptor(user, 'name');
// const desc11 = Object.getOwnPropertyDescriptors(user);
// console.log(`desc1:`, desc1);
// console.log(`desc11:`, desc11);
// // 不能修改 user.name 或它的标志
// // 下面的所有操作都不起作用：
// user.name = 'Pete';
// delete user.name;
// Object.defineProperty(user, 'name', { value: 'Peter' });

// 6.5 practice 5
// 'use strict';
// let user = {
//   [Symbol('foo')]: 'hello symbol'
// };
// console.log(`user 00:`, user)
// const descUser0 = Object.getOwnPropertyDescriptors(user);
// console.log(`descUser0:`, descUser0);

// const cloneObj = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));
// console.log(`cloneObj 00:`, cloneObj);
// const descClone0 = Object.getOwnPropertyDescriptors(cloneObj);
// console.log(`descClone0:`, descClone0);

// cloneObj.name = 'lucy';
// console.log(`cloneObj 01:`, cloneObj);
// const descClone1 = Object.getOwnPropertyDescriptors(cloneObj);
// console.log(`descClone1:`, descClone1);

// console.log(`user 01:`, user);
// const descUser1 = Object.getOwnPropertyDescriptors(user);
// console.log(`descUser1:`, descUser1);

// 7. Object.preventExtensions()

/*

const temp = new Object();
Object.preventExtensions(temp);
console.log(`temp 000:`, temp);
temp.name = '张金辉';
// Object.defineProperty(temp, 'name', {
//   value: '张金辉'
// }); // Uncaught TypeError: Cannot define property name, object is not extensible
console.log(`temp 001:`, temp);
console.log(`temp.name`, temp.name);

*/

// 8. Object.isExtensible()

/*

const temp = new Object();
console.log(`Object.isExtensible(temp) 000:`, Object.isExtensible(temp)); // true:可以为这个对象添加属性
Object.defineProperty(temp, 'name', {
  value: '张金辉1'
}); // 成功
console.log(`temp 000:`, temp);
Object.preventExtensions(temp);
console.log(`Object.isExtensible(temp) 001:`, Object.isExtensible(temp)); // false:不能为这个对象添加属性
// Object.defineProperty(temp, 'name', {
//   value: '张金辉2'
// }); // Uncaught TypeError: Cannot define property name, object is not extensible
temp.age = 32;
console.log(`temp 001:`, temp);

*/

// 9. Object.seal()

/*
const obj = { p: 'hello' };
const des0 = Object.getOwnPropertyDescriptor(obj, 'p'); //{value: "hello", writable: true, enumerable: true, configurable: true}
console.log(`des0:`, des0);
Object.seal(obj);
Object.defineProperties(obj, {
  p: {
    writable: false
  }
});
const desc1 = Object.getOwnPropertyDescriptor(obj, 'p'); //{value: "hello", writable: true, enumerable: true, configurable: false}
console.log(`desc1:`, desc1);
console.log('-------------');
delete obj.p; // 无法删除旧属性
console.log(`obj 删除:`, obj);
console.log(`obj.p 删除:`, obj.p);
console.log('-------------');
obj.x = 'world'; // 无法添加新属性
console.log(`obj 添加:`, obj);
console.log(`obj.x 添加:`, obj.x);
console.log('-------------');
obj.p = 'football'; // 能更新属性值
console.log(`obj 更新:`, obj);
console.log(`obj.p 更新:`, obj.p);
*/

/*
'use strict';
const obj = {
  p: 'a'
};

// seal方法之前
const desc = Object.getOwnPropertyDescriptor(obj, 'p');
console.log(`000:`, desc);
// Object {
//   value: "a",
//   writable: true,
//   enumerable: true,
//   configurable: true // true
// }

// Object.defineProperty(obj, 'p', {
//   writable: false
// });
Object.seal(obj);
// Object.defineProperty(obj, 'p', {
//   writable: false
// });

// seal方法之后
const desc1 = Object.getOwnPropertyDescriptor(obj, 'p');
console.log(`001:`, desc1);
// Object {
//   value: "a",
//   writable: true,
//   enumerable: true,
//   configurable: false // false
// }

Object.defineProperty(obj, 'p', {
  writable: false
});

// Object.defineProperty(obj, 'p', {
//   value: 'b'
//   // enumerable: false
//   // configurable: true
// });
// TypeError: Cannot redefine property: p
console.log(`obj:`, obj);
const desc2 = Object.getOwnPropertyDescriptor(obj, 'p');
console.log(`002:`, desc2);

Object.defineProperty(obj, 'p', {
  value: 'c'
});
*/

// 10.Object.isSealed()

/*
const temp = { p: 'hello' };
Object.seal(temp);
console.log(`Object.isSealed(temp):`, Object.isSealed(temp));
console.log(`Object.isExtensible(temp):`, Object.isExtensible(temp));
*/

// 11.Object.freeze()

/*
'use strict';
const temp = {
  p: 'hello'
};
console.log(`temp 0:`, temp)

Object.freeze(temp);

const desc0 = Object.getOwnPropertyDescriptors(temp);
console.log(`desc0:`, desc0)

temp.p = 'world';
console.log(`temp 1:`, temp)

temp.t = 'hello';
console.log(`temp 2:`, temp)

delete temp.p
console.log(`temp 3:`, temp)
*/

// 12.Object.isFrozen()

/*
const temp = {
  p: 'hello'
};

const desc0 = Object.getOwnPropertyDescriptors(temp);
console.log(`desc0:`, desc0)

Object.freeze(temp);

const desc1 = Object.getOwnPropertyDescriptors(temp);
console.log(`desc1:`, desc1)

console.log(`Object.isFrozen(temp):`, Object.isFrozen(temp)); // true
console.log(`Object.isSealed(temp)`, Object.isSealed(temp)); // true
console.log(`Object.isExtensible(temp)`, Object.isExtensible(temp)); // false
*/

/*
const temp = {
  p: 'hello'
};
console.log(`temp 0:`, temp);
Object.freeze(temp);

console.log(`是否temp对象isFrozen:`, !Object.isFrozen(temp));
// 确认对象没有被冻结后，再对它的属性赋值，就不会报错了
if (!Object.isFrozen(temp)) {
  temp.p = 'world';
}
console.log(`temp 1:`, temp);
*/

// 13.局限性
/* const temp = { p: 'hello 001' };
console.log(`temp 0:`, temp);

Object.preventExtensions(temp);
console.log(`Object.isExtensible(temp):`, Object.isExtensible(temp));
const desc0 = Object.getOwnPropertyDescriptors(temp);
console.log(`desc0:`, desc0);

const proto = Object.getPrototypeOf(temp);
console.log(`proto`, proto);

Object.preventExtensions(proto);
console.log(`Object.isExtensible(proto):`, Object.isExtensible(proto));

proto.t = 'hello 002';
console.log(`temp 1:`, temp);
console.log(`temp.t:`, temp.t); // hello */

/*
'use strict';
const temp = {
  p: 'hello',
  t: { a: 111, b: 222 }
};
console.log(`temp 0:`, temp);

Object.freeze(temp);
const desc0 = Object.getOwnPropertyDescriptors(temp);
console.log(`desc0:`, desc0);

temp.t.c = 333;
console.log(`temp 1:`, temp);
temp.q = 'lalala';
console.log(`temp 2:`, temp);
*/

// 14.属性的 getter 和 setter

/*
const temp = {};
Object.defineProperties(temp, {
  p: {
    enumerable: true,
    configurable: true,
    // getter
    get() {
      // 当读取 obj.p 时，getter 起作用
      console.log('读取了p属性');
    },
    // setter
    set(value) {
      // 当执行 obj.p = value 操作时，setter 起作用
      console.log(`设置p属性的value:`, value);
    }
  }
});
const desc = Object.getOwnPropertyDescriptors(temp);
console.log(`desc:`, desc);
*/

/*
'use strict';
const user = {
  name: 'John',
  surname: 'Smith'
  // // get: 一个没有参数的函数，在读取属性时工作
  // get fullName() {
  //   // 当读取 obj.fullName 时，getter 起作用
  //   console.log('读取了fullName属性');
  //   return `${this.name}, ${this.surname}`;
  // },
  // // set: 带有一个参数的函数，当属性被设置时调用
  // set fullName(value) {
  //   // 当执行 obj.fullName = value 操作时，setter 起作用
  //   console.log(`设置fullName属性的value:`, value);
  //   this.name = value.split(', ')[0];
  //   this.surname = value.split(', ')[1];
  // }
};
Object.defineProperty(user, 'fullName', {
  // value:'111',//报错:Cannot both specify accessors and a value or writable attribute
  // writable: false,// 报错:Cannot both specify accessors and a value or writable attribute
  // enumerable: true, // 可以随意设置
  // configurable: true, // 可以随意设置
  // get: 一个没有参数的函数，在读取属性时工作
  get() {
    // 当读取 obj.fullName 时，getter 起作用
    console.log('读取了fullName属性');
    return `${this.name}, ${this.surname}`;
  },
  // set: 带有一个参数的函数，当属性被设置时调用
  set(value) {
    // 当执行 obj.fullName = value 操作时，setter 起作用
    console.log(`设置fullName属性的value:`, value);
    this.name = value.split(', ')[0];
    this.surname = value.split(', ')[1];
  }
});

console.log(`user 0:`, user);
const desc0 = Object.getOwnPropertyDescriptors(user);
console.log(`desc0:`, desc0);

console.log('--------------------------------');
console.log(`读取user.fullName:`, user.fullName);
user.fullName = 'hello, world';
console.log('--------------------------------');

console.log(`user 1:`, user);
const desc1 = Object.getOwnPropertyDescriptors(user);
console.log(`desc1:`, desc1);

console.log('--------------------------------');
let count = 0;
for (const key in user) {
  count++;
  if (Object.hasOwnProperty.call(user, key)) {
    console.log(`${count}: key:${key} - value:${user[key]}`);
  }
}
*/

// 15.更聪明的 getter/setter

/*
const user = {};
Object.defineProperty(user, 'name', {
  enumerable: true,
  configurable: true,
  get() {
    console.log('get run');
    return this._name;
  },
  set(value) {
    console.log('set run');
    console.log(`set value:`, value);
    if (value.length < 4) {
      alert('it is too short, must more than or equal four characters');
      return;
    }
    this._name = value;
  }
});

console.log(`user 0:`, user);
const desc0 = Object.getOwnPropertyDescriptors(user);
console.log(`desc0:`, desc0);

console.log('-----------------1---------------');
user.name = 'peter';
console.log('-----------------2---------------');

console.log(`user 1:`, user);
const desc1 = Object.getOwnPropertyDescriptors(user);
console.log(`desc1:`, desc1);

console.log('-----------------3---------------');
Object.defineProperty(user, '_name', {
  enumerable: false,
  configurable: false
});
console.log(`user 2:`, user);
const desc2 = Object.getOwnPropertyDescriptors(user);
console.log(`desc2:`, desc2);
console.log('-----------------3---------------');

let count = 0;
for (const key in user) {
  count++;
  if (Object.hasOwnProperty.call(user, key)) {
    console.log(`${count}: key:${key} - value:${user[key]}`);
  }
}
*/

// 16.兼容性

/*
// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }
// let john = new User("John", 25);
// console.log(`john:`, john)

console.log(`moment`, moment);
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;
  Object.defineProperty(this, 'age', {
    enumerable: true,
    get() {
      console.log('age get func run～～～');
      return moment(new Date()).format('YYYY') - moment(new Date(1992, 6, 1)).format('YYYY');
    },
    set(value) {
      console.log(`age set func value:`, value);
    }
  });
}
let john = new User('John', moment(new Date(1992, 6, 1)).format('YYYY-MM-DD'));
console.log(`john:`, john);

const desc0 = Object.getOwnPropertyDescriptors(john);
console.log(`desc0:`, desc0);

console.log('-----------------1---------------');

let count = 0;
for (const key in john) {
  count++;
  if (Object.hasOwnProperty.call(john, key)) {
    console.log(`${count}: key --> ${key} || value --> ${john[key]}`);
  }
}

console.log('-----------------2---------------');

console.log(`john.birthday:`, john.birthday)
console.log(`john.age:`, john.age)
*/

// 17.Getters/setters
/*
class User {
  constructor(name) {
    this.name = name; //会调用set方法
  }
  // getter
  get name() {
    console.log('getter run');
    console.log(`getter this._name`, this._name);
    return this._name;
  }
  // setter
  set name(value) {
    console.log(`setter run value:`, value);
    if (value.length < 4) {
      alert('Name is too short.');
      return;
    }
    this._name = value;
  }
}

let user = new User('John');
console.log(`user:`, user);
console.log(`user.name:`, user.name);
console.log(`User.prototype 0:`, User.prototype)
console.log('--------------------------');
let user1 = new User('hi');
console.log(`user1:`, user1);
console.log(`user1.name:`, user1.name);
console.log(`User.prototype 1:`, User.prototype)
*/

// 18.计算属性名称 […]
/* const str = 'say' + 'Hi';
class User {
  constructor(name) {
    this.name = name;
  }
  [str]() {
    alert('Hello');
  }
}

// 19.Class 字段
const user = new User('zjh');
console.log(`user:`, user);
user.sayHi();
 */

/* class User {
  name = 'John';
  constructor(age){
    this.age = age;
  }
  sayHi() {
    console.log(`输出: Hello, ${this.name}!`);
  }
}
const user = new User(22);
console.log(`user:`, user)
console.log(`User.prototype:`, User.prototype)
console.log(`User.prototype.name:`, User.prototype.name)
console.log(`User.prototype.age:`, User.prototype.age)
user.sayHi(); // Hello, John!
 */

/* class User {
  name = prompt('Name, please?', 'John');
}
let user = new User();
console.log(`user:`, user); */

// 20.使用类字段制作绑定方法
/* class Button {
  constructor(value) {
    this.value = value;
    this.click = this.click.bind(this);
  }
  click() {
    console.log(`class click this:`, this);
    console.log(`click this.value:`, this.value);
    console.log('--------------------');
  }
}
let button = new Button('hello');
console.log(`button:`, button)
// button.click();
setTimeout(button.click, 1000); // undefined
// setTimeout(function () {
//   console.log(`setTimeout this:`, this);
//   button.click();
// }, 2000); // undefined
// setTimeout(() => {
//   console.log(`setTimeout this:`, this);
//   button.click();
// }, 2000); // undefined */

/*
class Button {
  click1 = function () {
    console.log(`class click this:`, this);
    console.log(`click this.value:`, this.value);
    console.log('-------------------------------');
  };
  click2 = () => {
    console.log(`class click this:`, this);
    console.log(`click this.value:`, this.value);
    console.log('-------------------------------');
  };
  constructor(value) {
    this.value = value;
  }
  click0() {
    console.log(`class click this:`, this);
    console.log(`click this.value:`, this.value);
    console.log('-------------------------------');
  }
}

let button = new Button('hello');
console.log(`button:`, button);
console.log('-------------------------------');
setTimeout(button.click0, 1000); // undefined
setTimeout(button.click1, 2000); // undefined
setTimeout(button.click2, 3000); // hello
*/

// 21.总结
/*

// Symbol标志
const sym = Symbol('hello');
// User类
class User {
  click = () => {
    console.log('--------3--------');
    console.log(`属性 click this:`, this);
  }; // 属性
  [sym] = () => {
    console.log(`属性 [sym] this:`, this);
  };// 属性
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }// 构造器
  sayHi() {
    console.log(`sayHi方法: 我是${this.name},今年${this.age}岁`);
  } // 方法
  // [sym]() {
  //   console.log(`方法 sym this:`, this);
  // } // 有计算名称(computed name)的方法
  get name() {
    return this._name;
  } // getter 方法
  set name(value) {
    if (value.length < 3) {
      alert('名字不能小于三个字符');
    }
    this._name = value;
  } // setter 方法
}
const user = new User('zjh', 33);
console.log(`打印 user:`, user);
console.log('-------1---------');
user.sayHi();
console.log('-------2---------');
user[sym](); // 直接调
setTimeout(() => {
  user[sym]();
}, 1000);// 封装一下
setTimeout(user[sym], 2000);
setTimeout(user.click, 3000);

*/

// 22. Clock 类
/*
//定时器
let timer;
//render方法
let render = template => {
  let date = new Date();
  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;
  let mins = date.getMinutes();
  if (mins < 10) mins = '0' + mins;
  let secs = date.getSeconds();
  if (secs < 10) secs = '0' + secs;
  let output = template.replace('h', hours).replace('m', mins).replace('s', secs);
  console.log(`output:`, output);
};
// Clock类
function Clock({ template }) {
  this.template = template;
}
// 原型上的stop方法
Clock.prototype.stop = function () {
  clearInterval(timer);
};
// 原型上的start方法
Clock.prototype.start = function () {
  render(this.template);
  timer = setInterval(() => {
    render(this.template);
  }, 1000);
};
let clock = new Clock({ template: 'h:m:s' });
console.log(`clock:`, clock);
clock.start();
setTimeout(() => {
  clock.stop();
}, 5000);
*/

/*
class Clock {
  constructor({ template }) {
    this.timer = null;
    this.template = template;
  }
  render() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
    let output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);
    console.log(`render output:`, output);
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
  stop() {
    clearInterval(this.timer);
  }
}
let clock = new Clock({ template: 'h:m:s' });
console.log(`clock:`, clock);
clock.start();
setTimeout(() => {
  clock.stop();
}, 5000);
*/

// 23. “extends” 关键字
/*
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} 跑以速度 ${this.speed}km/h`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} 停止在原地`);
  }
}

console.log('-------------------------------');
let animal = new Animal('某动物');
console.log(`animal 0:`, animal);
animal.run(100);
console.log(`animal 1:`, animal);
animal.stop();
console.log(`animal 2:`, animal);
console.log('-------------------------------');

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} 隐藏了起来`);
  }
}

let rabbit = new Rabbit('大白兔');
console.log(`rabbit 0:`, rabbit);
rabbit.run(500);
console.log(`rabbit 1:`, rabbit);
rabbit.stop();
console.log(`rabbit 2:`, rabbit);
rabbit.hide()
console.log(`rabbit 3:`, rabbit);
console.log('-------------------------------');
*/

/*
function fn(content) {
  class Foo {
    constructor() {
      this.content = content;
    }
    say() {
      console.log(`say:`, this.content);
    }
  }
  return Foo;
}

class User extends fn('hello, world 666!') {
  constructor(name) {
    super();
    this.name = name;
  }
  sayHi() {
    console.log(`${this.name}说: 你好!`);
  }
}

const user = new User('张金辉');
console.log(`user`, user);
user.say();
user.sayHi();
*/

// 24. 重写方法

/* class Animal {
  constructor(name) {
    this.speed0 = 0;
    this.name0 = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name0}跑以速度${this.speed0} km/h`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name0}停止了`);
  }
}

class Rabbit extends Animal {
  constructor(name1, age1) {
    super(name1);
    this.age1 = age1;
  }
  hide() {
    super.stop();
    // setTimeout(() => {
    //   console.log('----1----');
    //   super.stop();
    // }, 2000);
    console.log(`${this.name0}隐藏了`);
  }
}

let animal = new Animal('动物');
console.log(`animal:`, animal);
let rabbit = new Rabbit('大白兔', 33);
console.log(`rabbit:`, rabbit);
rabbit.run(10);
rabbit.hide();
console.log(`rabbit.name0:`, rabbit.name0)
console.log(`rabbit.age1:`, rabbit.age1) */

/* class Animal {
  name = 'animal';
  constructor() {
    console.log(`Animal constructor this.name:`, this.name);
  }
}
class Rabbit extends Animal {
  name = 'rabbit';
  constructor(...params) {
    super(...params);
  }
}

new Animal(); // animal
new Rabbit(); // animal */

/* class Animal {
  name = 'animal-类字段name'; //类字段: 基类（还未继承任何东西的那种）,在构造函数调用前初始化。
  constructor() {
    this.showName(); //而不是 console.log(this.name)
  }
  showName() {
    //而不是 this.name = 'animal'
    console.log(`我是 animal || ${this.name}`);
  }
}

class Rabbit extends Animal {
  name = 'rabbit-类字段name'; //类字段: 对于派生类，在 super() 后立刻初始化。
  constructor(...params) {
    super(...params);
  }
  showName() {
    console.log(`我是 rabbit || ${this.name}`);
  }
}

const a = new Animal(); // animal
// console.log(`a:`, a);
const r = new Rabbit(); // rabbit
// console.log(`r:`, r); */

// 25.阮一峰es6: Class 的基本语法
// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }

// Point.prototype.toString = function () {
//   return '(' + this.x + ', ' + this.y + ')';
// };

// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }

// Point.prototype = {
//   constructor: Point,
//   add() {
//     return `${this.x} + ${this.y}`;
//   },
//   sub() {
//     return `${this.x} - ${this.y}`;
//   }
// };

// Point.prototype.add = function () {
//   return `${this.x} + ${this.y}`;
// };
// Point.prototype.sub = function () {
//   return `${this.x} - ${this.y}`;
// };

// Object.assign的方法可以枚举
// Object.assign(Point.prototype, {
//   add() {
//     return `${this.x} + ${this.y}`;
//   },
//   sub() {
//     return `${this.x} - ${this.y}`;
//   }
// });

// class Point {
//   // 构造方法
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   add() {
//     return `${this.x} + ${this.y}`;
//   }
//   sub() {
//     return `${this.x} - ${this.y}`;
//   }
// }

// const p = new Point(1, 2);
// console.log(`p:`, p);
// const res1 = p.add();
// const res2 = p.sub();
// console.log(`res1:`, res1);
// console.log(`res2:`, res2);
// console.log(`typeof Point:`, typeof Point); // "function"
// console.log(Point.prototype.constructor === Point); // true

// console.log(Object.keys(Point.prototype)); //不可枚举
// console.log(Object.getOwnPropertyNames(Point.prototype));

// function Foo() {
//   return Object.create(null);
// }

// class Foo {
//   constructor() {
//     return Object.create(null);
//   }
// }

// console.log(`new Foo() instanceof Foo:`, new Foo() instanceof Foo);

//定义类
// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   toString() {
//     return this.x + ' -- ' + this.y;
//   }
// }

// const p = new Point(1, 2);

// console.log(p.toString()); // 1 -- 2
// console.log(p.hasOwnProperty('x')) // true
// console.log(p.hasOwnProperty('y')) // true
// console.log(p.hasOwnProperty('toString')); // false
// console.log(p.__proto__.hasOwnProperty('toString')) // true
// console.log(Point.prototype.hasOwnProperty('toString')) // true

/* class Point {}

const p1 = new Point(2, 3);
const p2 = new Point(3, 2);
console.log(`Object.getPrototypeOf(p1)`, Object.getPrototypeOf(p1));
console.log(`Object.getPrototypeOf(p2)`, Object.getPrototypeOf(p2));
console.log(Object.getPrototypeOf(p1) === Point.prototype);
console.log(Object.getPrototypeOf(p2) === Point.prototype)

Object.getPrototypeOf(p1).printName = function () {
  return 'Oops 1';
};

// Object.getPrototypeOf(p2).printName = function () {
//   return 'Oops 2';
// };

// Point.prototype.printName = function () {
//   return 'Oops 3';
// };

console.log(p1.printName()); // "Oops"
console.log(p2.printName()); // "Oops"

const p3 = new Point(4, 2);
console.log(p3.printName()); // "Oops" */

// 26.取值函数（getter）和存值函数（setter）

/*
class MyClass {
  constructor() {}
  get prop() {
    return 'prop getter 1';
  }
  set prop(value) {
    console.log('setter1: ' + value);
  }
  get prop1() {
    return 'prop getter 2';
  }
  set prop1(value) {
    console.log('setter2: ' + value);
  }
}

let instance = new MyClass();

instance.prop = 123;
// setter: 123
const res1 = instance.prop;
console.log(res1)
// 'prop getter'

instance.prop1 = 456;
const res2 = instance.prop1;
console.log(res2)
*/

/* class CustomHTMLElement {
  constructor(element) {
    this.element = element;
  }

  get html() {
    return this.element.innerHTML;
  }

  set html(value) {
    this.element.innerHTML = value;
  }
}

console.log(`CustomHTMLElement.prototype`, CustomHTMLElement.prototype);
console.log(
  `Object.getOwnPropertyNames(CustomHTMLElement.prototype):`,
  Object.getOwnPropertyNames(CustomHTMLElement.prototype)
);

const ele = new CustomHTMLElement({ innerHTML: 'aaaa' });
console.log(`ele 1`, ele);
console.log(`ele.html:`, ele.html);
ele.html = 'bbb';
console.log(`ele 2`, ele);

const desc = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, 'html');
console.log(`desc:`, desc); */

// 属性表达式

/* let methodName = 'getArea';

class Square {
  constructor(length) {
    this.length = length
  }

  [methodName]() {
    console.log(`methodName:`, methodName)
  }
}

const s = new Square(11);
console.log(`s:`, s) */

// Class 表达式

// const MyClass = class Mc {
//   getClassName() {
//     console.log(`Mc:`, Mc);
//     console.log(`Mc.name:`, Mc.name);
//     return Mc.name;
//   }
// };

/* const MyClass = class Mc {
  getClassName() {
    console.log(`Mc:`, Mc);
    console.log(`Mc.name:`, Mc.name);
    // return Mc.name;
    console.log(`MyClass:`, MyClass);
    console.log(`MyClass.name:`, MyClass.name);
    return `${MyClass.name} -- ${Mc.name}`;
  }
};

console.log(`MyClass.name:`, MyClass.name);
console.log('----------------------');
let instance = new MyClass();
console.log(`instance:`, instance);
console.log(`instance.name:`, instance.name);
console.log('----------------------');
const res = instance.getClassName();
console.log(`res:`, res) */

// const Person = class {
//   constructor(name) {
//     this.name = name;
//   }
//   sayName() {
//     console.log(this.name);
//   }
// };

// p1是一个立即执行的类的实例
/* const p1 = new (class {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
})('zhangjinhui');

console.log(`p1:`, p1);
 */

// 注意点：
// {
//   class Bar extends Foo {}
//   let Foo = class {};
//   // class Bar extends Foo {}
//   new Bar();
// }

/* class Point1 {}
const Point2 = class Pt {};
const Point3 = class {};
console.log(`Point1.name:`, Point1.name);
console.log(`Point2.name:`, Point2.name);
console.log(`Point3.name:`, Point3.name); */

/* class Foo {
  [Symbol.iterator] = function* () {
    for (let arg of this.args) {
      yield arg + '-666';
    }
  };
  constructor(...args) {
    this.args = args;
  }
  *[Symbol.iterator]() {
    for (let arg of this.args) {
      yield arg + '-888';
    }
  }
}

let foo = new Foo(1, 2, 3);
console.log(`foo`, foo);

const ge = foo[Symbol.iterator]();
console.log(`ge`, ge);
console.log(`ge.next():`, ge.next());
console.log(`ge.next():`, ge.next());
console.log(`ge.next():`, ge.next());
console.log(`ge.next():`, ge.next());

for (const iterator of foo) {
  console.log(`iterator 2:`, iterator);
} */

/*
class Logger {
  constructor() {
    this.printName = this._printName.bind(this);
    // this.printName = () => {
    //   console.log(`this 000:`, this);
    //   return this._printName();
    // };
  }
  _printName(name = 'there') {
    console.log(`_printName this:`, this);
    this._print(`Hello ${name}`);
  }
  _print(text) {
    console.log(`_print text:`, text);
  }
}

const logger = new Logger();
console.log(`logger:`, logger);
console.log('-------------------------');
logger.printName();
console.log('-------------------------');
const { printName } = logger;
printName();
*/

// logger.printName()();
// console.log('------------------------');
// logger.printName();
// logger.__proto__.printName();
// Logger.prototype.printName();
// console.log('------------------------');
// const { printName } = logger;
// printName()();
// const { printName } = logger.__proto__;
// printName();
// printName.bind(logger)();
// printName.bind(Logger.prototype)();

// bind绑定this 和 使用箭头函数1
/* class Logger {
  constructor() {
    this.printName = this._printName.bind(this);
    // this.printName = () => {
    //   console.log(`this 000:`, this);
    //   return this._printName();
    // };
  }
  _printName(name = 'there') {
    console.log(`_printName this:`, this);
    this._print(`Hello ${name}`);
  }
  _print(text) {
    console.log(`_print text:`, text);
  }
}

const logger = new Logger();
console.log(`logger:`, logger);
console.log('-------------------------');
logger.printName();
console.log('-------------------------');
const { printName } = logger;
printName(); */

// 使用箭头函数2

/* class Obj {
  constructor() {
    this.getThis = () => {
      return this.log();
    };
  }
  log() {
    console.log('log');
  }
}
const myObj = new Obj();
console.log(`myObj:`, myObj);
myObj.getThis();
console.log('---------------------------');
const { getThis } = myObj;
getThis(); */

/*

class Logger {
  printName(name = 'there') {
    console.log(`Logger printName this:`, this);
    this.print(`Hello, ${name}`);
  }

  print(text) {
    console.log(text);
  }
}

function selfish(target) {
  const cache = new WeakMap();
  // const cache = new Map();
  const handler = {
    get(target, key) {
      const value = Reflect.get(target, key);
      if (typeof value !== 'function') {
        return value;
      }
      if (!cache.has(value)) {
        cache.set(value, value.bind(target));
      }
      return cache.get(value);
    }
  };
  const proxy = new Proxy(target, handler);
  return proxy;
}

// const logger = new Logger();
const logger = selfish(new Logger());
const { printName } = logger;
printName('world!');

*/

// 静态方法
/* class User {
  static sayHi() {
    console.log(`sayHi this:`, this);
    console.log('sayHi');
  }

  sayHello() {
    console.log(`sayHello this:`, this);
    console.log('sayHello');
  }
}

const user = new User();
console.log(`user:`, user);
console.log(`User.prototype:`, User.prototype);
console.dir(User); */

/*

// 从这个例子还可以看出，静态方法可以与非静态方法重名
class Foo {
  static bar() {
    console.log('结果:', this === Foo);
    this.baz();
  }
  static baz() {
    console.log('hello');
  }
  baz() {
    console.log('world');
  }
}

Foo.bar() // hello

*/

/*

// 父类的静态方法，可以被子类继承
class Foo {
  static sayHello() {
    return 'hello';
  }
}

class Bar extends Foo {
}

 console.dir(Foo);
 console.dir(Bar);

Bar.sayHello(); // 'hello'

*/


/*

// 静态方法也是可以从super对象上调用的
class Foo {
  static sayHello() {
    return 'hello';
  }
}

class Bar extends Foo {
  static sayHello1() {
    console.log(`super.sayHello`, super.sayHello);
    console.log(`super.sayHello === Foo.sayHello:`, super.sayHello === Foo.sayHello);
    return super.sayHello() + ', too';
  }
}

console.dir(Foo);
console.dir(Bar);

console.log('---------1---------');
console.log(Foo.sayHello()); // "hello"
console.log('---------2---------');
console.log(Bar.sayHello()); // "hello"
console.log('---------3---------');
console.log(Bar.sayHello1()); // "hello, too"
console.log('---------4---------');

*/


// 实例属性的新写法
// https://wangdoc.com/es6/class.html#%E5%AE%9E%E4%BE%8B%E5%B1%9E%E6%80%A7%E7%9A%84%E6%96%B0%E5%86%99%E6%B3%95