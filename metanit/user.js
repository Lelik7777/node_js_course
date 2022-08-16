function User(name, age) {
    this.name = name;
    this.age = age;
    this.displayInfo=function ()
    {
        console.log(`name: ${this.name}, age: ${this.age}`);
    }
}

User.prototype.sayHi = function () {
    console.log(`hi,my name is ${this.name}`);
}

module.exports = User;