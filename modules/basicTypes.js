/* 布尔值 */
var isDone = false;
/* 数字 */
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
/* 字符串 */
var text = "bob";
var sentence = "Hello, my name is " + text;
/* 数组 */
var list = [1, 2, 3];
var listGenericity = [1, 2, 3];
var listGenericity1 = [1, '2', 3];
/* 元组 Tuple: 元组类型允许表示一个已知元素数量和类型的数组(含顺序)，各元素的类型不必相同。 */
var x = ['hello', 10];
console.log(x[0].substr(1), x);
// 当访问一个越界的元素，会使用联合类型替代：--- 待验证
// x[2] = 'world'; // OK, 字符串可以赋值给(string | number)类型
// console.log(x[5].toString());  // OK, 'string' 和 'number' 都有 toString
/* 枚举 */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var a = Color.Green;
console.log(Color.Red, Color.Green, Color.Blue, a); //  0,1,2,1
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
console.log(Color1.Red, Color1.Green, Color1.Blue); //  0,2,3
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 0] = "Red";
    Color2[Color2["Green"] = 0] = "Green";
    Color2[Color2["Blue"] = 1] = "Blue";
})(Color2 || (Color2 = {}));
console.log(Color2.Red, Color2.Green, Color2.Blue); //  0,0,1
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 3] = "Blue";
})(Color3 || (Color3 = {}));
var colorName = Color3[1];
console.log(colorName); // 'red'
/* Any */
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
var listAny = [1, true, "free"];
/* Void */
var unusable = null;
var unusable1 = undefined;
function warnUser() {
    console.log("This is my warning message");
}
/* Null 和 Undefined: 默认情况下null和undefined是所有类型的子类型;当指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 */
var u = undefined;
var n = null;
var s = null;
/* Never：永不存在的值的类型；never类型是任何类型的子类型；抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；变量也可能是 never类型，当它们被永不为真的类型保护所约束时。 */
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
/* 类型断言：通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。
** ps:你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
 */
var someValue = "this is a string";
var strLength = someValue.length;
var someValue1 = "this is a string";
var strLength1 = someValue.length;
