function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32
}
console.log(celsiusToFahrenheit(30))





function checkage(age) {
    if (age >= 18) {
        return "შენ სრულწლოვანი ხარ"
    } else {
        return "შენ არ ხარ სრულწლოვანი"
    }
}





let statuss = checkage(15)
console.log(statuss
)

function add(a, b){
    return a + b
}
function subtract(a, b){
    return a - b
}
function multiply(a, b) {
    return a * b
}
let answer = multiply(add(10,20),5)
console.log(answer);





let globalVar = "მე გლობალური ვარ";

function scopeTest() {
    let localVar = "მე ლოკალური ვარ";
    console.log(globalVar);
    
    return localVar;
}

scopeTest();

let result = scopeTest();
console.log(result);

