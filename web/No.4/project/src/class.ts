class Person {
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
    }
}

//Personクラス継承したクラス
class Teature extends Person{
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

    constructor(name: string,age:number,private subject:string){
        super(name,age);
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}.`);
    }
}
const teature = new Teature('テーチャーだ',33,'math');
teature.setSubject = 'unko';
teature.greeting();
console.log(Teature.species);

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
