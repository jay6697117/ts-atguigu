(function () {
    /*
    * 定义类时，可以使类去实现一个接口,
    *   实现接口就是使类满足接口的要求
    * */
    var MyClass = /** @class */ (function () {
        function MyClass(name) {
            this.name = name;
        }
        MyClass.prototype.sayHello = function () {
            console.log('大家好~~');
        };
        return MyClass;
    }());
})();
