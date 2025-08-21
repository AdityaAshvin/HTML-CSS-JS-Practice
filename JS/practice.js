//Q1

let salaries = {
John: 100,
Ann: 160,
Pete: 130
}

let sum = 0;

for (const v of Object.values(salaries)){
    sum += v;
}

console.log("Q1");
console.log(sum)
console.log();

//Q2

let menu = {
width: 200,
height: 300,
title: "My menu"
};

function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] == "number"){
            obj[key] *= 2;
        }
    }
}   

console.log("Q2");
console.log(menu);
multiplyNumeric(menu);
console.log(menu);
console.log();

//Q3

console.log("Q3");
function checkEmailId(str){
    let atInd = str.indexOf('@');
    let dotInd = str.indexOf('.');

    if(atInd == -1 || dotInd == -1){
        return false;
    }
    else if(dotInd < atInd){
        return false;
    }
    else if(atInd+1 == dotInd){
        return false;
    }
    else{
        return true;
    }
}

let ans = checkEmailId('aditya@g.mailcom');
console.log(ans)
console.log();

//Q4

console.log("Q4");
function truncate(str, maxlength){
    let len = str.length;

    if(len > maxlength){
        let newword = str.slice(0, maxlength-1) + "...";
        return newword;
    }
    else{
        return str;
    }

}

let word = truncate("What I'd like to tell on this topic is:", 20);
let word2 = truncate("Hi everyone!", 20);
console.log(word);
console.log(word2);
console.log();

//Q5

console.log("Q5")
let arr = ["James", "Brennie"];
console.log(arr);
arr.push("Robert");
console.log(arr);
let mid = Math.floor(arr.length/2);
arr.splice(mid, 1, "Calvin");
console.log(arr);
arr.splice(0, 1);
console.log(arr);
arr.splice(0, 0, "Rose", "Regal");
console.log(arr);