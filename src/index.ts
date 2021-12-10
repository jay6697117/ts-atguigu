// 1.0 类（class）
class Person {
  //属性
  name: string;

  // 构造方法
  constructor(name: string) {
    this.name = name;
  }
  // 方法
  sayHello() {
    console.log(`hello, ${this.name}`);
  }
}
const p = new Person('zjh');
console.log(`p:`, p);
console.log(`Person.prototype:`, Person.prototype);
