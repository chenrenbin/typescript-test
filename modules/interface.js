// function printLabel(labelledObj: { label: string }) {
//     console.log(labelledObj.label);
// }
// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);
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
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
//  对象字面量会被特殊对待而且会经过 额外属性检查,存在任何“目标类型”不包含的属性时，你会得到一个错误
//  printLabel({size: 10, label: "Size 10 Object"});
//  避免外属性检查：
printLabel({ size: 10, label: "Size 10 Object" }); //   使用类型断言
printLabel({ size: 10, label: "Size 10 Object" });
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
//  函数的参数名不需要与接口里定义的名字相匹配
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
mySearch = function (src) {
    var result = src.search('a');
    return result > -1;
};
// 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var myArray1 = ["Alice", "Bob"];
//  myArray1[2] = "Mallory"; // error!  因为索引签名是只读的
console.log(myArray1[2]);
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    return Clock;
}());
var Clock1 = /** @class */ (function () {
    function Clock1(h, m) {
    }
    Clock1.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock1;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
/* 接口继承类：当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现 */
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
// 错误：“Image”类型缺少“state”属性。
// class Image implements SelectableControl {
//     select() { }
// }
// class Location {
// }
