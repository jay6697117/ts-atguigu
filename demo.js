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