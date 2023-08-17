function age() {
    var d1 = document.getElementById("date").value;
    var m1 = document.getElementById("month").value;
    var y1 = document.getElementById("year").value;
    
    var date = new Date();

    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month  = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (d1 > d2){
        d2 = d2 + month[m2 - 1];
        m2 = m2 -1;
    }
    if (m1 > m2){
        m2 = m2 + 12;
        y2 = y2-1;
}
var d = d2 - d1;
var m = m2 - m1;
var y = y2 - y1;
document.getElementById("age").innerHTML = "Your age is " + y + "  years  " + m + "  months  " + d + "  days  ";
}




// second calculater js

let userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split("T")[0];
let result =  document.getElementById('result');

function Calculateage(){
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();


let d3, m3, y3;

y3 = y2 - y1;

if(m2 >= m1){
    m3 = m2 - m1;
} else{
    y3--;
    m3 = 12 + m2 - m1;
}

if(d2 >= d1){
    d3 = d2 - d1;
} else{
    m3--;
    d3 =  getDaysInMonth(y1, m1) + d2 - d1;
}
if(m3 < 0){
    m3 = 11;
    y3--;
}
result.innerHTML = `You are ${y3} years, ${m3} months, ${d3} days `;

}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate()
}


