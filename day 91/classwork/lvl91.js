let num = 1;

for (let i = 1; i <= 1000; i++) {
    num *= i;
    if (num > 10000) {
        console.log("Breaking at i = " + i + ", result = " + num);
        break;
    }
}

console.log("Final result: " + num);


function welcome(name) {
    console.log("Welcome, " + name);
}

welcome("Tommy");


let foot = parseInt(readline(), 10);

function convert(foot) {
    return foot * 12;
}

console.log(convert(foot));







