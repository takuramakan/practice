interface Scoreable {
    readonly totalScore: number;
    render(): void;
}
interface Foodable {
    element: HTMLDivElement;
    clickEventHandler(): void;
}
interface Foodsable {
    elements: NodeListOf<HTMLDivElement>;
    readonly activeElements: HTMLDivElement[];
    readonly activeElementsScore: number[];
}

class Score implements Scoreable{
    private static instance: Score;
    //選択された合計
    get totalScore() {
        const foods = Foods.getInstance();
        return foods.activeElementsScore.reduce((total,Score) => total + Score,0);
    }
    render() {
        document.querySelector(`.score__number`)!.textContent = String(this.totalScore);
    }
    private constructor() {}
    static getInstance() {
        if(!Score.instance) {
            Score.instance = new Score();
        }
        return Score.instance;
    }
}

//食べ物ひとつひとつのクラス
class Food implements Foodable{
    constructor(public element: HTMLDivElement) {
        element.addEventListener(`click`, this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        this.element.classList.toggle(`food--active`);
        const score = Score.getInstance();
        score.render();
    }
}
//食べ物全てのクラス
class Foods implements Foodsable{
    private static  instance: Foods;
    
    elements = document.querySelectorAll<HTMLDivElement>(`.food`);
    private _activeElements: HTMLDivElement[] = [];
    private _activeElementsScore: number[] = [];
    //選択された食べ物を配列に格納
    get activeElements() {
        this._activeElements = [];
        this.elements.forEach(element => {
            if (element.classList.contains(`food--active`)) {
                this._activeElements.push(element);
            }
        })
        return this._activeElements
    }
    //選択された食べ物を配列からテキストのスコアのみにした配列
    get activeElementsScore() {
        this._activeElementsScore = [];
        this.activeElements.forEach(elements => {
            const foodScore = elements.querySelector(`.food__score`);
            if (foodScore) {
                this._activeElementsScore.push(Number(foodScore.textContent));
            }
        })
        return this._activeElementsScore;
    }
    //Foodsクラスをメソッド内でしかnewできないようにする（シングルトンパターン）
    private constructor() {
        this.elements.forEach(element => {
            new Food(element);
        })
    }
    static getInstance() {
        if(!Foods.instance) {
            Foods.instance = new Foods();
        }
        return Foods.instance;
    }
}
const foods = Foods.getInstance();