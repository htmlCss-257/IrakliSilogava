let trafficLight = prompt("შეიყვანე ფერი (red, yellow, green):");

if (trafficLight === "red") {
    console.log("გაჩერდი!")
} else if (trafficLight === "yellow") {
    console.log("მოემზადე")
} else if (trafficLight === "green") {
    console.log("დაიძარი")
} else {
    console.log("უცნობი სიგნალი")
}

let enternumber = prompt("შეიყვანეთ რიცხვი 0-დან 100-მდე:")
let number = Number(enternumber)

if (number >= 90 && number <= 100) {
    console.log("A")
} else if (number >= 70 && number <= 89) {
    console.log("B")
} else if (number >= 50 && number <= 69) {
    console.log("C")
} else if (number < 50) {
    console.log("ჩაიჭერი")
} else {
    console.log("გთხოვთ შეიყვანოთ რიცხვი 0-დან 100-მდე.");
}


let day =Number(prompt("შეიყვანეთ რიცხვი 1 დან 7ამდე"))

switch(day) {
    case 1:
        console.log("ორშაბათი");
        break;
    case 2:
        console.log("სამშაბათი");
        break;
    case 3:
        console.log("ოთხშაბათი");
        break;
    case 4:
        console.log("ხუთშაბათი");
        break;
    case 5:
        console.log("პარასკევი");
        break;
    case 6:
        console.log("შაბათი");
        break;
    case 7:
        console.log("კვირა");
        break;
    default:
        console.log("არასწორი დღე");
    
}

let username = prompt("შეიყვანეთ სახელი")
let password = prompt("პაროლი")

if (username === "" && password === "") {
    console.log("შეიყვანეთ მონაცემები")
} else if(username === "admin" && password === "1234") {
    console.log("წარმატებული შესვლა")
} else {"პაროლი ან მომხმარებელი არასწორია"}





