// function printLabel(labelledObj: { label: string }) {
//     console.log(labelledObj.label);
// }
// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

/* 基本用法 */
interface LabelledValue {
    label: string;
    color?: string; // 可选属性
    readonly x?: number; //  可选的只读属性
}
function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}
let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

//  对象字面量会被特殊对待而且会经过 额外属性检查,存在任何“目标类型”不包含的属性时，你会得到一个错误
//  printLabel({size: 10, label: "Size 10 Object"});
//  避免外属性检查：
printLabel({size: 10, label: "Size 10 Object"} as LabelledValue); //   使用类型断言
interface LabelledValue {//  添加一个字符串索引签名
    label: string;
    color?: string;
    [propName: string]: any;
}
printLabel({size: 10, label: "Size 10 Object"})


/* 函数类型 */
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
//  函数的参数名不需要与接口里定义的名字相匹配
mySearch = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}
mySearch = function(src) {
    let result = src.search('a');
    return result > -1;
}
// 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}


/* 可索引的类型：TypeScript支持两种索引签名：字符串和数字，数字索引最终会转为字符串索引 */
interface StringArray {
    [index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];

class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}
// interface NotOkay {  // 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
//     [x: number]: Animal;
//     [x: string]: Dog;
// }

// interface NumberDictionary {
//     [index: string]: number;
//     length: number;    // 可以，length是number类型
//     name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
// }

interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray1: ReadonlyStringArray = ["Alice", "Bob"];
//  myArray1[2] = "Mallory"; // error!  因为索引签名是只读的
console.log(myArray1[2])


/* 类类型 --- 实现接口: 接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。 */
interface ClockInterface {
    currentTime: Date;
}
class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}

interface ClockInterface1 {
    currentTime: Date;
    setTime(d: Date);
}
class Clock1 implements ClockInterface1 {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

/* 类类型 --- 类静态部分与实例部分的区别 */
interface ClockConstructor0 {
    new (hour: number, minute: number);
}
// Error:类实现了一个接口时，只对其实例部分进行类型检查
// class Clock2 implements ClockConstructor0 {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface2;
}
interface ClockInterface2 {
    tick();
}
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface2 {
    return new ctor(hour, minute);
}
class DigitalClock implements ClockInterface2 {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface2 {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);


/* 继承接口 */
interface Shape {
    color: string;
}
interface PenStroke {
    penWidth: number;
}
interface Square extends Shape, PenStroke {
    sideLength: number;
}
let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;


/* 混合类型 --- 一个对象可以同时做为函数和对象使用，并带有额外的属性 */
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}
function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;


/* 接口继承类：当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现 */
class Control {
    private state: any;
}
interface SelectableControl extends Control {
    select(): void;
}
class Button extends Control implements SelectableControl {
    select() { }
}
class TextBox extends Control {
    select() { }
}
// 错误：“Image”类型缺少“state”属性。
// class Image implements SelectableControl {
//     select() { }
// }
// class Location {
// }
