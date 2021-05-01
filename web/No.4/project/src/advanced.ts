type Engineer = {
    name: string;
    role : string;
}
type Blogger = {
    name: string;
    follower: number;
}
type EngineerBlogger = Engineer & Blogger;
const quill: EngineerBlogger = {
    name: `Quill`,
    role: `front-end`,
    follower: 100
}
function toUpperCase(x: string):string ;
function toUpperCase(x: number):number ;
function toUpperCase(x: string | number) {
    if (typeof x == 'string') {
        return x.toUpperCase();
    }
    return x;
}
const upperHello = toUpperCase('hello');



type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
}
class Dog {
    //リテラル型の固定文言を入れることでタイプを判別する→タグ付きunion
    kind:'Dog'='Dog';
    speak(){
        console.log("bow-wow");
    }
}
class Bird {
    kind:'Bird'='Bird';
    speak() {
        console.log("tweet-tweet");
    }
    fly(){
        console.log("flutter");
    }
}
type Pet = Dog | Bird;
function havePet(pet:Pet){
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
const input = document.getElementById('input') as HTMLInputElement;

interface DownloadedData {
    id: number,
    user?:{
        name?: {
            first: string,
            last: string
        }            
    }
}

const downloadedData:DownloadedData = {
    id: 1
}
console.log(downloadedData.user?.name?.first);
//nullish coalescing→nullまたはundefinendの時のみ何かを入れる
const userData = downloadedData.user ?? 'no-user';

type id = DownloadedData["id"]
