interface Nameable {
    name?: string;
    //あってもなくてもいい要素
    nickName?: string;
}
const nameable: Nameable  = {
    name: 'Quill'
}
interface Human extends Nameable{
    //interfaceはオブジェクトしか扱えない
    //readonly name: string;
    age: number;
    greeting(message: string): void;
}

class Developer implements Human {
    name?: string
    constructor(public age: number,public experience: number, initName? : string){
        if (initName) {
            this.name = initName;
        }
    }
    greeting(message?: string) {
        if (message) {
            console.log(message);
        }

    }
}

//Humanにはexperience(第三引数)の項目はないけど定義できる。
//あるものだけは定義する→構造的部分型
//const user:Human = new Developer('Quill',38,3);
const user = new Developer(38,3,'test');
//developer内のnameはpublicであるためHumanでreadonlyにしているがアクセス可能
//user.name = 'aaa';
//user.greeting(`aaaa`);
console.log(user.name);