// Named function
// function add(x, y) {
//     return x + y;
// }
// Anonymous function
// let myAdd = function(x, y) {
//     return x + y;
// };

/* 函数类型(函数类型包含两部分：参数类型和返回值类型。) */
/* 为函数定义类型 */
function add(x: number, y: number): number {
    return x + y
}
let myAdd = function (x: number, y: number): number {
    return x + y
}

/* 书写完整函数类型 */
let myAdd1: (x: number, y: number) => number =
    function(x: number, y: number): number { return x + y; };
// 只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确。
let myAdd2: (baseValue: number, increment: number) => number =
    function(x: number, y: number): number { return x + y; };

/* 推断类型: 赋值语句的一边指定了类型但是另一边没有类型的话，TypeScript编译器会自动识别出类型： */
// myAdd has the full function type
let myAdd3 = function(x: number, y: number): number {
    return x + y;
};
// The parameters `x` and `y` have the type number
let myAdd4: (baseValue: number, increment: number) => number =
    function(x, y) { return x + y; };


/* 可选参数和默认参数: 可选参数与末尾的默认参数共享参数类型 */
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result1 = buildName("Bob");  // works correctly now
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");  // ah, just right

function buildName1(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}
let result11 = buildName1("Bob");                  // works correctly now, returns "Bob Smith"
let result21 = buildName1("Bob", undefined);       // still works, also returns "Bob Smith"
// let result31 = buildName1("Bob", "Adams", "Sr.");  // error, too many parameters
let result41 = buildName1("Bob", "Adams");         // ah, just right

/* 剩余参数 */
function buildName2(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");

// 剩余参数用于函数定义
let buildNameFun: (fname: string, ...rest: string[]) => string = buildName2;


/* this */
/* this和箭头函数 */
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // return function() {
        return () => {  // 箭头函数能保存函数创建时的 this值，而不是调用时的值
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
// alert("card: " + pickedCard.card + " of " + pickedCard.suit);

/* this参数 */
interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck1: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}
let cardPicker1 = deck1.createCardPicker();
let pickedCard1 = cardPicker1();
// alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

/* this参数在回调函数里 */
interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}
class Handler {
    info: string;
    onClickBad(this: Handler, e: Event) {
        // oops, used this here. using this callback would crash at runtime
        // this.info = e.message;
        console.log(this.info);
    }
    // onClickBad(this: void, e: Event) {
        // this.info = e.message;
    // }
}
let h = new Handler();
// uiElement.addClickListener(h.onClickBad); // error!

/* 重载 */
// pickCard方法根据传入参数的不同会返回两种不同的类型。
let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard2 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
let pickedCard3 = pickCard(15);
alert("card: " + pickedCard3.card + " of " + pickedCard3.suit);