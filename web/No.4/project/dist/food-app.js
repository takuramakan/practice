"use strict";
var Score = /** @class */ (function () {
    function Score() {
    }
    Object.defineProperty(Score.prototype, "totalScore", {
        //選択された合計
        get: function () {
            var foods = Foods.getInstance();
            return foods.activeElementsScore.reduce(function (total, Score) { return total + Score; }, 0);
        },
        enumerable: false,
        configurable: true
    });
    Score.prototype.render = function () {
        document.querySelector(".score__number").textContent = String(this.totalScore);
    };
    Score.getInstance = function () {
        if (!Score.instance) {
            Score.instance = new Score();
        }
        return Score.instance;
    };
    return Score;
}());
//食べ物ひとつひとつのクラス
var Food = /** @class */ (function () {
    function Food(element) {
        this.element = element;
        element.addEventListener("click", this.clickEventHandler.bind(this));
    }
    Food.prototype.clickEventHandler = function () {
        this.element.classList.toggle("food--active");
        var score = Score.getInstance();
        score.render();
    };
    return Food;
}());
//食べ物全てのクラス
var Foods = /** @class */ (function () {
    //Foodsクラスをメソッド内でしかnewできないようにする（シングルトンパターン）
    function Foods() {
        this.elements = document.querySelectorAll(".food");
        this._activeElements = [];
        this._activeElementsScore = [];
        this.elements.forEach(function (element) {
            new Food(element);
        });
    }
    Object.defineProperty(Foods.prototype, "activeElements", {
        //選択された食べ物を配列に格納
        get: function () {
            var _this = this;
            this._activeElements = [];
            this.elements.forEach(function (element) {
                if (element.classList.contains("food--active")) {
                    _this._activeElements.push(element);
                }
            });
            return this._activeElements;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Foods.prototype, "activeElementsScore", {
        //選択された食べ物を配列からテキストのスコアのみにした配列
        get: function () {
            var _this = this;
            this._activeElementsScore = [];
            this.activeElements.forEach(function (elements) {
                var foodScore = elements.querySelector(".food__score");
                if (foodScore) {
                    _this._activeElementsScore.push(Number(foodScore.textContent));
                }
            });
            return this._activeElementsScore;
        },
        enumerable: false,
        configurable: true
    });
    Foods.getInstance = function () {
        if (!Foods.instance) {
            Foods.instance = new Foods();
        }
        return Foods.instance;
    };
    return Foods;
}());
var foods = Foods.getInstance();
