"use strict";
var nameable = {
    name: 'Quill'
};
var Developer = /** @class */ (function () {
    function Developer(age, experience, initName) {
        this.age = age;
        this.experience = experience;
        if (initName) {
            this.name = initName;
        }
    }
    Developer.prototype.greeting = function (message) {
        if (message) {
            console.log(message);
        }
    };
    return Developer;
}());
//Humanにはexperience(第三引数)の項目はないけど定義できる。
//あるものだけは定義する→構造的部分型
//const user:Human = new Developer('Quill',38,3);
var user = new Developer(38, 3, 'test');
//developer内のnameはpublicであるためHumanでreadonlyにしているがアクセス可能
//user.name = 'aaa';
//user.greeting(`aaaa`);
console.log(user.name);
