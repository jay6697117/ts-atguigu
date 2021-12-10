class Dog {
  name: string;
  age: number;
  // constructor 被称为构造函数
  // 构造函数会在对象创建时调用
  // TS中仅能创建一个构造函数
  // constructor() {
  constructor(name: string, age: number) {
    // 在实例方法中，this就表示当前的实例
    // 在构造函数中的当前对象就是新建的那个对象dog1 dog2 dog3 dog4
    // 可以通过this向新建的对象中添加属性
    // this.name = '旺财'
    // this.age = 1;
    this.name = name;
    this.age = age;
  }
  bark(): void {
    console.log(`${this.name}:在汪汪汪`);
  }
}

console.log('------------------');
// const dog = new Dog();
// console.log(`dog:`, dog);
const dog1 = new Dog('小黄', 2);
console.log(`dog1:`, dog1);
dog1.bark();
console.log('------------------');
const dog2 = new Dog('小白', 3);
console.log(`dog2:`, dog2);
dog2.bark();
console.log('------------------');
const dog3 = new Dog('小灰', 4);
console.log(`dog3:`, dog3);
dog3.bark();
console.log('------------------');
const dog4 = new Dog('小黑', 5);
console.log(`dog4:`, dog4);
dog4.bark();
console.log('------------------');
