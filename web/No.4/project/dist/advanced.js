"use strict";
var _a, _b, _c;
var quill = {
    name: "Quill",
    role: "front-end",
    follower: 100
};
function toUpperCase(x) {
    if (typeof x == 'string') {
        return x.toUpperCase();
    }
    return x;
}
var upperHello = toUpperCase('hello');
function describeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
}
var Dog = /** @class */ (function () {
    function Dog() {
        //リテラル型の固定文言を入れることでタイプを判別する→タグ付きunion
        this.kind = 'Dog';
    }
    Dog.prototype.speak = function () {
        console.log("bow-wow");
    };
    return Dog;
}());
var Bird = /** @class */ (function () {
    function Bird() {
        this.kind = 'Bird';
    }
    Bird.prototype.speak = function () {
        console.log("tweet-tweet");
    };
    Bird.prototype.fly = function () {
        console.log("flutter");
    };
    return Bird;
}());
function havePet(pet) {
    pet.speak();
    if (pet instanceof Bird) {
        pet.fly();
    }
    if (pet.kind == "Bird") {
        pet.fly();
    }
}
havePet(new Bird());
//型アサーション
var input = document.getElementById('input');
var downloadedData = {
    id: 1
};
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
//nullish coalescing→nullまたはundefinendの時のみ何かを入れる
var userData = (_c = downloadedData.user) !== null && _c !== void 0 ? _c : 'no-user';
