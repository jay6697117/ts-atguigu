(function () {
  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello() {
      console.log(this.name + ' say hello!');
    }
  }

  class Dog extends Animal {
    age: number;
    constructor(name: string, age: number) {
      super(name);
      this.age = age;
      super.sayHello();
    }
    sayHello() {
      console.log(this.name + ' 重写 say hello!');
    }
  }

  const animal = new Animal('动物');
  console.log(`animal:`, animal);
  animal.sayHello();
  const dog = new Dog('旺财', 3);
  console.log(`dog:`, dog);
  dog.sayHello();
})();
