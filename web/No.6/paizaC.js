/*
for(let i =1; i<=30; i++){
    let print = i;
    if(i%3 == 0) {
        print = "!" + i
    } else if (String(i).indexOf("3") == 1) {
        print = "!" + i
    }
    console.log(print);
}
*/

/*
paiza 問題（スキルチェック　ランクC相当）
1からNまでの整数を1から順に表示してください。

ただし、表示しようとしている数値が、

・3の倍数かつ5の倍数のときには、"Fizz Buzz"
・3の倍数のときには、"Fizz"
・5の倍数のときには、"Buzz"

を数値の代わりに表示してください。
*/
function fizzBuzzCheck() {
    let targetText = document.getElementById("targetText").value;

    //数値判定
    if (!isNaN(targetText)) {
        //整数判定
        if (seisuCheck(targetText)) {
            dispText = baisuCheckRet(targetText);
            alert(dispText)
        } else {
            alert("整数ではありません。");
        }
    } else {
        alert("数値ではありません。");
    }
}
/*
整数チェック
text:チェック対象
return:true,整数 false,整数以外
*/
function seisuCheck(text) {
    let targetNum = Number(text);
    if (Number.isInteger(targetNum)) {
        return true;
    } else {
        return false;
    }
}

/*
3の倍数、5の倍数かをチェックし、結果に応じて表示文字列を返却する
text:チェック対象
return:処理結果表示用文字列
*/
function baisuCheckRet(text) {
    let targetNum = Number(text);
    let returnText = text;

    if (targetNum == 0) {
        return text;
    }

    if(is3baisu(targetNum)) {
        if (is5baisu(targetNum)) {
            text = "Fizz Buzz";
        } else {
            text = "Fizz";
        }
    } else if (is5baisu(targetNum)) {
        text = "Buzz";
    }

    return text;
}

/*
3の倍数かチェック
num:チェック対象
return:true,3の倍数 false,3の倍数以外
*/
function is3baisu(num) {
    if (num%3 == 0) {
        return true;
    } else {
        return false;
    }
}

/*
5の倍数かチェック
num:チェック対象
return:true,5の倍数 false,5の倍数以外
*/
function is5baisu(num) {
    if (num%5 == 0) {
        return true;
    } else {
        return false;
    }
}