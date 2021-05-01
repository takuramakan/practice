abstract class Person {
    /*下の定義に省略できる
    name : string;
    //プライベート　外からアクセスできない
    private age : number;
    constructor(initName:string,initAge:number) {
        this.name = initName;
        this.age = initAge;
    }
    */
   static species = 'Homo sapiens'
    constructor(public readonly name:string,protected age:number) {
        //constructor内ならreadonlyは編集できる
    }

    incrementAge(){
        this.age += 1;
    }
    greeting(this: Person) {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
        this.explainJob();
    }
    abstract explainJob():void;
}

//Personクラス継承したクラス
class Teacher extends Person{
    private static instance: Teacher;
    explainJob(){
        console.log(`I am a teacher and I teach ${this.subject}.`);
    }
    //ゲッターとセッターの名前を同じにしておけば、セッターの引数はゲッターのreturnから型推論する
    get getSubject() :string {
        if (!this.subject) {
            throw new Error('There is no subject.');
        }
        return this.subject;
    }

    set setSubject(subject:string) {
        this.subject = subject;
    }

    //privateにすることでコンストラクタを外部から使えないようにする
    //(外からnewできない)一つしか定義できない仕組みにしたい→シングルトンパターン
    private constructor(name: string,age:number,private subject:string){
        super(name,age);
    }
    static getInstance() {
        if(Teacher.instance)return Teacher.instance;
        Teacher.instance = new Teacher('テーチャーだ',33,'math');
        return Teacher.instance
    }
}
const teacher = Teacher.getInstance();
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
