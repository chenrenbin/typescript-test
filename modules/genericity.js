// function identity(arg: number): number {
//     return arg;
// }
// function identity2(arg: any): any {
//     return arg;
// }
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
/*  泛型 */
function identity(arg) {
    return arg;
}
var output = identity("myString"); // 入所有的参数
var output2 = identity("myString"); // 类型推论
/* 使用泛型变量 */
function loggingIdentity(arg) {
    // console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
function loggingIdentity2(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
function loggingIdentity3(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
/* 泛型类型 */
function identity1(arg) {
    return arg;
}
var myIdentity = identity1;
var myIdentity2 = identity1; // 不同的泛型参数名，只要在数量上和使用方式上能对应上就可以
var myIdentity3 = identity1; //  使用带有调用签名的对象字面量来定义泛型函数
function identity2(arg) {
    return arg;
}
var myIdentity4 = identity2;
function identity3(arg) {
    return arg;
}
var myIdentity5 = identity3;
/* 泛型类 */
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
function loggingIdentity4(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
/* 在泛型约束中使用类型参数 */
// function getProperty(obj: T, key: K) {
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a"); // okay
// getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
/* 在泛型里使用类类型 */
function create(c) {
    return new c();
}
// 使用原型属性推断并约束构造函数与类实例的关系。
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag; // typechecks!
createInstance(Bee).keeper.hasMask; // typechecks!
