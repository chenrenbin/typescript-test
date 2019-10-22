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
function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) {
    return x + y;
};
/* 书写完整函数类型 */
var myAdd1 = function (x, y) { return x + y; };
// 只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确。
var myAdd2 = function (x, y) { return x + y; };
/* 推断类型: 赋值语句的一边指定了类型但是另一边没有类型的话，TypeScript编译器会自动识别出类型： */
// myAdd has the full function type
var myAdd3 = function (x, y) {
    return x + y;
};
// The parameters `x` and `y` have the type number
var myAdd4 = function (x, y) { return x + y; };
/* 可选参数和默认参数: 可选参数与末尾的默认参数共享参数类型 */
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob"); // works correctly now
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
var result3 = buildName("Bob", "Adams"); // ah, just right
function buildName1(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
var result11 = buildName1("Bob"); // works correctly now, returns "Bob Smith"
var result21 = buildName1("Bob", undefined); // still works, also returns "Bob Smith"
// let result31 = buildName1("Bob", "Adams", "Sr.");  // error, too many parameters
var result41 = buildName1("Bob", "Adams"); // ah, just right
/* 剩余参数 */
function buildName2(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");
// 剩余参数用于函数定义
var buildNameFun = buildName2;
/* this */
/* this和箭头函数 */
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        // return function() {
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
var deck1 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker1 = deck1.createCardPicker();
var pickedCard1 = cardPicker1();
var Handler = /** @class */ (function () {
    function Handler() {
    }
    Handler.prototype.onClickBad = function (e) {
        // oops, used this here. using this callback would crash at runtime
        // this.info = e.message;
        console.log(this.info);
    };
    return Handler;
}());
var h = new Handler();
// uiElement.addClickListener(h.onClickBad); // error!
/* 重载 */
// pickCard方法根据传入参数的不同会返回两种不同的类型。
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        return pickedCard_1;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard2 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
var pickedCard3 = pickCard(15);
alert("card: " + pickedCard3.card + " of " + pickedCard3.suit);
