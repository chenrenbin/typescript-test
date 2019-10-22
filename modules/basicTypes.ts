
/* 布尔值 */
let isDone: boolean = false;

/* 数字 */
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

/* 字符串 */
let text: string = "bob";
let sentence: string = `Hello, my name is ${ text }`

/* 数组 */
let list: number[] = [1, 2, 3];
let listGenericity: Array<number> = [1, 2, 3];
let listGenericity1: Array<number|string> = [1, '2', 3];

/* 元组 Tuple: 元组类型允许表示一个已知元素数量和类型的数组(含顺序)，各元素的类型不必相同。 */
let x: [string, number] = ['hello', 10];
console.log(x[0].substr(1), x)
// 当访问一个越界的元素，会使用联合类型替代：--- 待验证
// x[2] = 'world'; // OK, 字符串可以赋值给(string | number)类型
// console.log(x[5].toString());  // OK, 'string' 和 'number' 都有 toString

/* 枚举 */
enum Color {Red, Green, Blue}
let a: Color = Color.Green;
console.log(Color.Red, Color.Green, Color.Blue, a) //  0,1,2,1

enum Color1 {Red, Green=2, Blue}
console.log(Color1.Red, Color1.Green, Color1.Blue) //  0,2,3

enum Color2 {Red, Green=0, Blue}
console.log(Color2.Red, Color2.Green, Color2.Blue) //  0,0,1

enum Color3 {Red = 1, Green, Blue}
let colorName: string = Color3[1];
console.log(colorName)  // 'red'

/* Any */
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

let listAny: any[] = [1, true, "free"];

/* Void */
let unusable: void = null;
let unusable1: void = undefined;
function warnUser(): void {
    console.log("This is my warning message");
}

/* Null 和 Undefined: 默认情况下null和undefined是所有类型的子类型;当指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 */
let u: undefined = undefined;
let n: null = null;
let s: string = null

/* Never：永不存在的值的类型；never类型是任何类型的子类型；抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；变量也可能是 never类型，当它们被永不为真的类型保护所约束时。 */
function error(message: string): never {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}

/* Object： 表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。 */
declare function create(o: object | null): void;
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

/* 类型断言：通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。
** ps:你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
 */
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

let someValue1: any = "this is a string";
let strLength1: number = (someValue as string).length;
