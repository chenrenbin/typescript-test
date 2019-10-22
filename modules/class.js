// 使用tsc -t es5 class.ts命令进行编译
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* 基本用法 */
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
/* 继承 */
var Animal0 = /** @class */ (function () {
    function Animal0() {
    }
    Animal0.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal0 moved " + distanceInMeters + "m.");
    };
    return Animal0;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    return Dog;
}(Animal0));
var dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
/* 公共，私有与受保护的修饰符(默认为 public) */
var Animal1 = /** @class */ (function () {
    function Animal1(theName) {
        this.name = theName;
    }
    return Animal1;
}());
// new Animal1("Cat").name; // 错误: 'name' 是私有的.
//protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee;
}(Person));
var howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误
/* readonly修饰符 */
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
/* 参数属性 */
var Octopus1 = /** @class */ (function () {
    function Octopus1(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
    return Octopus1;
}());
/* 存取器 */
// class Employee1 {
//     fullName: string;
// }
// let employee1 = new Employee1();
// employee1.fullName = "Bob Smith";
// if (employee1.fullName) {
//     console.log(employee1.fullName);
// }
var passcode = "secret passcode";
var Employee2 = /** @class */ (function () {
    function Employee2() {
    }
    Object.defineProperty(Employee2.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee2;
}());
var employee2 = new Employee2();
employee2.fullName = "Bob Smith";
if (employee2.fullName) {
    // alert(employee2.fullName);
}
/* 静态属性：这些属性存在于类本身上面而不是类的实例上 */
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0); // 1x scale
var grid2 = new Grid(5.0); // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
/* 抽象类：抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 */
var Animal2 = /** @class */ (function () {
    function Animal2() {
    }
    Animal2.prototype.move = function () {
        console.log('roaming the earch...');
    };
    return Animal2;
}());
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name: ' + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting and Auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Department));
var department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在
/* 高级技巧 */
/* 构造函数 */
// class Greeter0 {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }
// let greeter0: Greeter0;
// greeter0 = new Greeter0("world");
// console.log(greeter0.greet());
var Greeter1 = /** @class */ (function () {
    function Greeter1() {
    }
    Greeter1.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter1.standardGreeting;
        }
    };
    Greeter1.standardGreeting = "Hello, there";
    return Greeter1;
}());
var greeter1;
greeter1 = new Greeter1();
console.log(greeter1.greet());
var greeterMaker = Greeter1; //取Greeter类的类型，而不是实例的类型
greeterMaker.standardGreeting = "Hey there!";
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
/* 把类当做接口使用 */
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
