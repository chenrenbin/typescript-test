// function identity(arg: number): number {
//     return arg;
// }
// function identity2(arg: any): any {
//     return arg;
// }


/*  泛型 */
function identity<T>(arg: T): T {
    return arg;
}
let output = identity<string>("myString");  // 入所有的参数
let output2 = identity("myString"); // 类型推论

/* 使用泛型变量 */
function loggingIdentity<T>(arg: T): T {
    // console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
function loggingIdentity2<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
function loggingIdentity3<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

/* 泛型类型 */
function identity1<T>(arg: T): T {
    return arg;
}
let myIdentity: <T>(arg: T) => T = identity1;
let myIdentity2: <U>(arg: U) => U = identity1; // 不同的泛型参数名，只要在数量上和使用方式上能对应上就可以
let myIdentity3: {<T>(arg: T): T} = identity1; //  使用带有调用签名的对象字面量来定义泛型函数

interface GenericIdentityFn {
    <T>(arg: T): T;
}
function identity2<T>(arg: T): T {
    return arg;
}
let myIdentity4: GenericIdentityFn = identity2;

interface GenericIdentityFn2<T> {
    (arg: T): T;
}
function identity3<T>(arg: T): T {
    return arg;
}
let myIdentity5: GenericIdentityFn2<number> = identity3;

/* 泛型类 */
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

/* 泛型约束 */
// function loggingIdentity4<T>(arg: T): T {
//     console.log(arg.length);  // Error: T doesn't have .length
//     return arg;
// }

interface Lengthwise {
    length: number;
}
function loggingIdentity4<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

/* 在泛型约束中使用类型参数 */
// function getProperty(obj: T, key: K) {
function getProperty<T>(obj: T, key: string) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a"); // okay
// getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

/* 在泛型里使用类类型 */
function create<T>(c: {new(): T; }): T {
    return new c();
}

// 使用原型属性推断并约束构造函数与类实例的关系。
class BeeKeeper {
    hasMask: boolean;
}
class ZooKeeper {
    nametag: string;
}
class Animal {
    numLegs: number;
}
class Bee extends Animal {
    keeper: BeeKeeper;
}
class Lion extends Animal {
    keeper: ZooKeeper;
}
function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}
createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!