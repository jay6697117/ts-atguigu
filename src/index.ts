// 1.0 类（class）
class Person {
  //实例属性(实例访问)
  name?: string = '默认人名';
  //只读实例属性(实例访问)
  // readonly name?: string = '默认人名';
  age?: number = 18;
  //静态属性(类访问)
  static isHuman: boolean = true;
  //只读静态属性(类访问)
  // static readonly isHuman: boolean = true;
  static name1: string = '类人名';
  // 构造方法
  constructor(name?: string, age?: number) {
    this.name = name ? name : this.name;
    this.age = age ? age : this.age;
  }
  // 实例方法
  sayHello() {
    console.log(`this:`, this);
    console.log(`hello: ${this.name}`);
  }
  // 静态方法(类访问)
  static sayHello1() {
    console.log(`hello: ${this.name1}`);
  }
}
const p = new Person();
const p1 = new Person('张金辉', 34);
console.log(`p:`, p);
console.log(`p1 000:`, p1);
p1.name = '张金辉-6';
console.log(`p1 001:`, p1);
console.log(`Person.prototype:`, Person.prototype);
console.log(`Person.isHuman 000:`, Person.isHuman);
Person.isHuman = false;
console.log(`Person.isHuman 001:`, Person.isHuman);
p.sayHello();
p1.sayHello();
Person.sayHello1();
console.log('-----------------------------');
Person.prototype.sayHello();
// Person.prototype.sayHello1(); //方法sayHello1在类 Person 上不存在
