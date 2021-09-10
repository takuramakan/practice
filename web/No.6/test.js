for(let i =1; i<=30; i++){
    let print = i;
    if(i%3 == 0) {
        print = "!" + i
    } else if (String(i).indexOf("3") == 1) {
        print = "!" + i
    }
    console.log(print);
}