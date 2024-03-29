"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        //constructor内ならreadonlyは編集できる
    }
    Person.prototype.incrementAge = function () {
        this.age += 1;
    };
    Person.prototype.greeting = function () {
        console.log("Hello! My name is " + this.name + ". I am " + this.age + " years old.");
        this.explainJob();
    };
    /*下の定義に省略できる
    name : string;
    //プライベート　外からアクセスできない
    private age : number;
    constructor(initName:string,initAge:number) {
        this.name = initName;
        this.age = initAge;
    }
    */
    Person.species = 'Homo sapiens';
    return Person;
}());
//Personクラス継承したクラス
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    //privateにすることでコンストラクタを外部から使えないようにする
    //(外からnewできない)一つしか定義できない仕組みにしたい→シングルトンパターン
    function Teacher(name, age, subject) {
        var _this = _super.call(this, name, age) || this;
        _this.subject = subject;
        return _this;
    }
    Teacher.prototype.explainJob = function () {
        console.log("I am a teacher and I teach " + this.subject + ".");
    };
    Object.defineProperty(Teacher.prototype, "getSubject", {
        //ゲッターとセッターの名前を同じにしておけば、セッターの引数はゲッターのreturnから型推論する
        get: function () {
            if (!this.subject) {
                throw new Error('There is no subject.');
            }
            return this.subject;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "setSubject", {
        set: function (subject) {
            this.subject = subject;
        },
        enumerable: false,
        configurable: true
    });
    Teacher.getInstance = function () {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher('テーチャーだ', 33, 'math');
        return Teacher.instance;
    };
    return Teacher;
}(Person));
var teacher = Teacher.getInstance();
//const teacher = new Teacher('テーチャーだ',33,'math');
//teacher.setSubject = 'unko';
teacher.greeting();
//console.log(Teacher.species);
/*
const quill = new Person('Quill',38);
//プライベートにはアクセスできない
//quill.age = quill.age + 1;
quill.incrementAge();
quill.greeting();
*/
/*
quill.greeting();

const anotherQuill = {
    name: 'anotherQuill',
    age: 39,
    //quill（Personクラス）に存在するメソッドを使用する
    //this.nameはこの中に存在するもの（anotherQuill）になる
    greeting:quill.greeting
    //anotherGreeting(){anotherQuill.greeting}
}

anotherQuill.greeting();
*/
