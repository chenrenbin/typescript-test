// 使用tsc -t es5 class.ts命令进行编译

/* 基本用法 */
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter("world");


/* 继承 */
class Animal0 {
    move(distanceInMeters: number = 0) {
        console.log(`Animal0 moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal0 {
    bark() {
        console.log('Woof! Woof!');
    }
}
const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);

/* 公共，私有与受保护的修饰符(默认为 public) */
class Animal1 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}
// new Animal1("Cat").name; // 错误: 'name' 是私有的.

//protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}
class Employee extends Person {
    private department: string;
    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }
    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误


/* readonly修饰符 */
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.


/* 参数属性 */
class Octopus1 {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}


/* 存取器 */
// class Employee1 {
//     fullName: string;
// }
// let employee1 = new Employee1();
// employee1.fullName = "Bob Smith";
// if (employee1.fullName) {
//     console.log(employee1.fullName);
// }

let passcode = "secret passcode";
class Employee2 {
    private _fullName: string;
    get fullName(): string {
        return this._fullName;
    }
    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
let employee2 = new Employee2();
employee2.fullName = "Bob Smith";
if (employee2.fullName) {
    // alert(employee2.fullName);
}

/* 静态属性：这些属性存在于类本身上面而不是类的实例上 */
class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}
let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale
console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));


/* 抽象类：抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 */
abstract class Animal2 {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}

abstract class Department {
    constructor(public name: string) {
    }
    printName(): void {
        console.log('Department name: ' + this.name);
    }
    abstract printMeeting(): void; // 必须在派生类中实现
}
class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }
    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}
let department: Department; // 允许创建一个对抽象类型的引用
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

class Greeter1 {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter1.standardGreeting;
        }
    }
}
let greeter1: Greeter1;
greeter1 = new Greeter1();
console.log(greeter1.greet());
let greeterMaker: typeof Greeter1 = Greeter1;  //取Greeter类的类型，而不是实例的类型
greeterMaker.standardGreeting = "Hey there!";
let greeter2: Greeter1 = new greeterMaker();
console.log(greeter2.greet());

/* 把类当做接口使用 */
class Point {
    x: number;
    y: number;
}
interface Point3d extends Point {
    z: number;
}
let point3d: Point3d = {x: 1, y: 2, z: 3};